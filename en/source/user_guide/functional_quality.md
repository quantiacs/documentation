# Algorithm quality

Once we have constructed an algorithm and plotted equity on historical data, we need to use a set of criteria to evaluate the performance. All current competition rules are available [here](https://quantiacs.io/contest).

## Sharpe ratio
>First, to estimate the profitability of the algorithm, we measure the Sharpe ratio (SR), the most important and popular metric. The higher the value, the more stable the strategy.

You can include the function bellow in your code to view the sharp ratio. 

```python
import qnt.stats   as qnstats

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
**Usage** **example**. 

Let's say we have a trading idea - invest more if the price is high.

```python
import qnt.data    as qndata
import qnt.stats   as qnstats
import qnt.stepper as qnstepper
import datetime    as dt

data = qndata.load_data(tail = dt.timedelta(days = 4*365),
                        forward_order = True)

def estimate_sharpe(data, weights):
    stat = qnstats.calc_stat(data, weights, slippage_factor=0.05)
    days = len(stat.coords["time"])
    returns = stat.loc[:, "relative_return"]
    
    sharpe_ratio = qnstats.calc_sharpe_ratio_annualized(
        returns,
        max_periods=days,
        min_periods=days).to_pandas().values[-1]
    
    print(f'Sharpe ratio = {sharpe_ratio}')

def get_weights_strategy(data):
    
    strategy = data.sel(field="open") * data.sel(field="is_liquid")

    weights = strategy / abs(strategy).sum('asset')
    return weights


weights = get_weights_strategy(data)

estimate_sharpe(data, weights)

qnstats.print_correlation(weights, data)
qnstepper.write_output(weights)
```
```python

Sharpe ratio = 0.902248100035541

WARNING! This strategy correlates with other strategies.
The number of systems with a larger Sharpe ratio and correlation larger than 0.8: 1
The max correlation value (with systems with a larger Sharpe ratio): 0.9027474076009878
Current Sharpe ratio(3y): 0.812552583846677
```

## Statistics

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
Let's apply this function to the previous example:

```python
print_stat(data, weights)
```

```python
Sharpe Ratio         :  0.902
Mean Return [%]      :  18.294
Volatility [%]       :  20.276
Maximum Drawdown [%] :  31.493
```