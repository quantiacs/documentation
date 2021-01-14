# Algorithm quality

Once we have developed an algorithm we can have an idea of its performance by a visual inspection of the equity chart.

Let us consider a simple long-only strategy on the S&P500 index Futures: we go long once the simple-moving-average of the close price over the last 20 days is larger than the simple-moving-average of the close price over the last 150 days.

```python
import xarray as xr

import qnt.ta as qnta
import qnt.data as qndata
import qnt.output as qnout

data = qndata.futures_load_data(tail=365 * 15, assets= ['F_ES'])

close = data.sel(field='close')

sma150 = qnta.sma(close, 150)
sma20  = qnta.sma(close, 20)

weights = xr.where(sma150 < sma20, 1, 0)

weights = qnout.clean(weights, data)

qnout.check(weights, data)

qnout.write(weights)
```

plotted the equity chart on historical data, we use a set of criteria to evaluate the performance. Current competition rules are available [here](https://quantiacs.io/contest).

## Sharpe ratio
>The key performance indicator is the Sharpe ratio.

The value of the Sharpe ratio can be read with the following function:

```python
import qnt.stats as qnstats

def estimate_sharpe(data, weights_final):
    stat = qnstats.calc_stat(data, weights_final, slippage_factor=0.05)
    days = len(stat.coords["time"])
    returns = stat.loc[:, "relative_return"]
    
    sharpe_ratio = qnstats.calc_sharpe_ratio_annualized(
        returns,
        max_periods=days,
        min_periods=days).to_pandas().values[-1]
    
    print(f'Sharpe ratio = {sharpe_ratio}')
```

## Statistics

Other statistical figures can be obtained with the following function:

```python
def print_stat(stat):
    """Prints selected statistical key indicators:
       - the global Sharpe ratio of the strategy;
       - the global mean profit;
       - the global volatility;
       - the maximum drawdown.

       Note that Sharpe ratio, mean profit and volatility
       apply to  max simulation period, and not to the
       rolling basis of 3 years.
    """

    days = len(stat.coords["time"])

    returns = stat.loc[:, "relative_return"]

    equity = stat.loc[:, "equity"]

    sharpe_ratio = qnstats.calc_sharpe_ratio_annualized(
        returns,
        max_periods=days,
        min_periods=days).to_pandas().values[-1]

    profit = (qnstats.calc_mean_return_annualized(
        returns,
        max_periods=days,
        min_periods=days).to_pandas().values[-1])*100.0

    volatility = (qnstats.calc_volatility_annualized(
        returns,
        max_periods=days,
        min_periods=days).to_pandas().values[-1])*100.0

    max_ddown = (qnstats.calc_max_drawdown(
        qnstats.calc_underwater(equity)).to_pandas().values[-1])*100.0

    print("Sharpe Ratio         : ", "{0:.3f}".format(sharpe_ratio))
    print("Mean Return [%]      : ", "{0:.3f}".format(profit))
    print("Volatility [%]       : ", "{0:.3f}".format(volatility))
    print("Maximum Drawdown [%] : ", "{0:.3f}".format(-max_ddown))
```
