# Translating code from Quantiacs Legacy

## Technical changes

The new version of Quantiacs addresses several issues:

* it includes a private user space for developing code online and test ideas for forecasting global financial markets based on Jupyter Notebook and
  JupyterLab;

* you can install in your private area any Python library you need for developing and submitting strategies;

* you have access to historical data for futures, Bitcoin futures and cryptocurrencies;

* we updated open-source libraries for algorithm development, which has become more efficient.

## Example

A distinctive feature of the new version of Quantiacs is the simplification of the strategy code, which became much
easier to read and use. Let us consider a simple strategy based on a crossing of moving averages.

### Quantiacs Legacy

In **Quantiacs Legacy** you would write a function defining weights and a settings function on the following lines:

```python
def myTradingSystem(DATE, OPEN, HIGH, LOW, CLOSE, VOL, exposure, equity, settings):

    nMarkets = CLOSE.shape[1]

    perL = 200
    perS = 40

    smaLong   = numpy.nansum(CLOSE[-perL:, :], axis=0) / perL
    smaRecent = numpy.nansum(CLOSE[-perS:, :], axis=0) / perS

    longEquity  = smaRecent > smaLong
    shortEquity = ~longEquity

    pos = numpy.zeros(nMarkets)
    pos[longEquity]  =  1
    pos[shortEquity] = -1

    weights = pos / numpy.nansum(abs(pos))

    return weights, settings


def mySettings():

    settings = {}

    settings['markets']       = ['CASH', 'F_AD', 'F_BO', 'F_BP', 'F_C']
    settings['beginInSample'] = '20120506'
    settings['endInSample']   = '20150506'
    settings['lookback']      = 504
    settings['budget']        = 10 ** 6
    settings['slippage']      = 0.05

    return settings


if __name__ == '__main__':
    import quantiacsToolbox

    results = quantiacsToolbox.runts(__file__)
```

### Quantiacs: Single-Pass Mode

A similar logic in the new **Quantiacs** can be implemented using the following compact **single-pass implementation**. By **single-pass implementation** we mean an implementation where the **complete** time series of data is constantly accessible at any step of the evaluation:

```python
import xarray as xr
import qnt.ta as qnta
import qnt.data as qndata
import qnt.output as qnout

data = qndata.futures_load_data(
    assets=["F_AD", "F_BO", "F_BP", "F_C"],
    min_date="2006-01-01")

close = data.sel(field="close")

sma_long  = qnta.sma(close, 200)
sma_short = qnta.sma(close, 40)

weights = xr.where(sma_short > sma_long, 1, -1)

weights = weights / abs(weights).sum("asset")

weights = qnout.clean(weights, data, "futures")
qnout.check(weights, data, "futures")
qnout.write(weights)
```
The single-pass implementation is very fast because it uses fast bulk operations on the full time series. On the other hand, it is possible that implicit looking-forward is taking place. To verify the results of your single-pass strategy you can use  the file **precheck.ipynb** (in the root directory of your strategy) and read the warnings. 

### Quantiacs: Multi-Pass Mode

As an alternative, you can use the function **qnt.backtester.backtest** and perform a slower multi-pass simulation which is looking-forward free. Note that we will check your In-Sample Sharpe ratio at submission time using a multi-pass implementation which will reveal looking-forward issues.

This is an example of **multi-pass implementation** where at timestamp "t" only data until timestamp "t" are available by construction:

```python
import xarray as xr
import qnt.ta as qnta
import qnt.backtester as qnbt
import qnt.data as qndata


def load_data(period):
    return qndata.futures_load_data(
        assets=["F_AD", "F_BO", "F_BP", "F_C"],
        tail=period)


def strategy(data):
    close = data.sel(field="close")
    sma_long  = qnta.sma(close, 200).isel(time=-1)
    sma_short = qnta.sma(close,  40).isel(time=-1)
    pos = xr.where(sma_short > sma_long, 1, -1)
    return pos / abs(pos).sum("asset")


weights = qnbt.backtest(
    competition_type = "futures",
    load_data        = load_data,
    lookback_period  = 365,
    test_period      = 365 * 15,
    strategy         = strategy)
```

Here we have used the function **qnt.backtester.backtest** whose details can be found in your private area in the **/qnt/backtester.py** file.

The function requires the following input:

* **competition type**: "futures" for the futures contest or "cryptofutures" for the Bitcoin futures contest;
* **load data**: the pre-defined **load_data** function. The **period** passed to **load_data** is given by **test_period + lookback_period**;
* **lookback_period**: the maximal lookback period in calendar days used for building indicators. In this case, as we use 200 trading days for defining the largest simple moving average, 1 year is fine; 
* **test_period**, in calendar days, is the In-Sample period used for the simulation. Here we use 15 years of data;
* **strategy**: the pre-defined **strategy** function which should return allocation weights for all assets at a fixed point in time (note that in **strategy** we select the last index, isel(time=-1)).

The function returns the time series **weights** for all assets. It performs automatically the last 3 operations of the **single-pass** evaluation:

```python
weights = qnout.clean(weights, data, "futures")
qnout.check(weights, data, "futures")
qnout.write(weights)
```
