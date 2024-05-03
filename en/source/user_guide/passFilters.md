# Competition filters

To submit a strategy for the contest, click on the **Submit** button in your **Development** area:

![Submit](./pictures/submit.png)

You also have the option to directly submit code from your development environment in Jupyter Notebook or JupyterLab.  

Upon submission, our servers will check your code. The status of this check will be displayed in the **Competition** section of your account, under the **Checking** tab:

![Checking](./pictures/test.png)

If your algorithm passes these checks (filters), it will be admitted to the Contest and you can find it under the **Candidates** tab. If it fails these checks, it will be listed under the **Filtered** tab, where you can inspect the logs and understand the reason for the error.

## Technical filters

### Sharpe ratio

**1) Not Eligible for Contest: In-Sample Sharpe Must be Larger Than 0.7**

The Sharpe Ratio is a measure of risk-adjusted performance. A warning stating that the Sharpe ratio is less than 0.7 indicates that the performance of your strategy during the In-Sample period, when considering risk, is insufficient.

You should aim to improve your algorithm. For instance, you can refer to these examples:

* [Trading System Optimization](https://github.com/quantiacs/strategy-futures-ta-global-optimizer/blob/master/strategy.ipynb)
* [Trading System Optimization by Asset](https://github.com/quantiacs/strategy-futures-optimization-each-asset/blob/master/strategy.ipynb)
* [A Strategy Using Technical Analysis Indicators](https://github.com/quantiacs/strategy-predict-NASDAQ100-use-atr-lwma/blob/master/strategy.ipynb)
* [Getting a List of the Top 3 Assets Ranked by Sharpe Ratio in Q20 Quick Start](https://github.com/quantiacs/strategy-q20-nasdaq100-quick-start/blob/master/strategy.ipynb)

**2) Difference in In-Sample Sharpe Ratio in Jupyter or JupyterLab Compared to the Contest Page**

Be mindful of **forward-looking bias**. If you notice that the notebook delivers a Sharpe ratio larger than 0.7, but the backtester doesn't, then you are most likely incorporating future data, for instance, by calculating a global mean.

> You can run the following notebook to check for this common mistake:
[Quantiacs Toolbox Precheck](https://github.com/quantiacs/toolbox/blob/main/qnt/precheck.ipynb)

Here are some common mistakes to look out for:

* Using future knowledge in the past
* Understanding the Advance/Decline Line and the Advance/Decline Ratio
* Ensuring that standardization in price processing does not incorporate knowledge from the future to the past
* Understanding Quantiles

More information:
* [Different Sharpe Ratios for Multipass-Backtest and Quantiacs Mulipass Backtest](https://quantiacs.com/community/topic/374/different-sharpe-ratios-for-multipass-backtest-and-quantiacs-mulipass-backtest?_=1687248669560)

We **recommend** testing your strategy in **multi-pass** mode. [Here is an example](https://quantiacs.com/documentation/en/examples/trading_system_optimization.html#preventing-forward-looking).

### Source file must exist
An error message stating that the **strategy.ipynb** file was not found is connected to a non-standard name for the file containing your strategy. This file must be named **strategy.ipynb**.

### Execution failed
If you see an error message stating that the execution of **strategy.ipynb** failed, then you should check the logs as they will contain the necessary information.

> You should check the logs (server logs and html columns) as they will contain the necessary information.

Pay special attention to the dates in the logs: you can use this information to reproduce the problem in the **precheck.ipynb** file you find in your root directory. Substitute these **dates** when calling **evaluate_passes**.

### Weights must be written
If you see an error message stating that the call to the **write_output** function was skipped (example: **Missed call to write_output**), then your strategy does not save the final weights. Your last call in the **strategy.ipynb** file should be **qnt.output.write(weights)** (or **qnt.backtest(...)** if you use Multi-Pass Backtesting), assuming that you used **weights** for the final allocation weights.
```python
qnt.output.write(weights)
```

### All data must be loaded
An error message stating that data are loaded only until a certain day is due to the fact that you are loading the data cropping the number of days. Do not crop data when you submit, as your system needs to run on a daily basis on new data.

Error:
```python
qndata.futures.load_data(min_date="2006-01-01", max_date="2008-01-01")
```

Solution

```python
qndata.futures.load_data(min_date="2006-01-01")
```

### Weights must be generated for all trading days
An error message stating that the strategy does not display weights for all trading days means that weights for some days are not generated, for example because of a **drop** operation. This problem can be avoided using the function **qnt.output.check(weights, data, "futures")**, assuming that you are working with futures and you are generating **weights** on **data**.

### Weights are not generated at the beginning of the time series
Your strategy must produce non-zero weights starting from the date defined for each corresponding contest:

* NASDAQ-100 Contest - Trading should begin from January 1, 2006.
* Futures Contest - Trading should begin from January 1, 2006.
* Bitcoin Futures - Trading should start from January 1, 2014.
* Crypto Top-10 Long - Trading should commence from January 1, 2014.

To ensure compliance, review your strategy code:

1. Verify the data range being loaded. Define the appropriate time frame as follows:
   ```python
   futures = qndata.futures.load_data(min_date="2006-01-01")
   ```
2. Ensure the data range being saved:
    ```python
    display(weights)
    qnt.output.write(weights)
    ```

The Sharpe ratio's computation period commences from the date when the first non-zero weights are identified. If, for instance, your algorithm begins generating weights on Bitcoin Futures from January 1, 2017, it will **not** be accepted because the In-Sample period is effectively too brief.

This issue often arises when utilizing technical analysis indicators which necessitate a warm-up period. You can check the date using:

```python
min_time = weights.time[abs(weights).fillna(0).sum('asset')> 0].min()
min_time
```

> The value of min_time should be equal to or later than the starting date specified in the rules for the respective competition.

If min_time is later than the starting date, it's recommended to fill the starting values of the time series with non-zero values. For instance, you could use a simple buy-and-hold strategy.

```python
def get_enough_bid_for(data_, weights_):
    time_traded = weights_.time[abs(weights_).fillna(0).sum('asset') > 0]
    is_strategy_traded = len(time_traded)
    if is_strategy_traded:
        return xr.where(weights_.time < time_traded.min(), data_.sel(field="is_liquid"), weights_)
    return weights_


weights_new = get_enough_bid_for(data, weights)
weights_new = weights_new.sel(time=slice("2006-01-01",None))
```

For additional information regarding the calculation method, please refer to the source code of the library, specifically the qnt.output.calc_sharpe_ratio_for_check method.

### Timeout
An error message stating that the strategy calculation exceeds a given time implies that you need to optimize the code and reduce the execution time. Futures systems should be evaluated in 10 minutes and Bitcoin futures/Crypto long systems in 5 minutes of time.


### Number of strategies
An error message stating that the limit for strategies has been exceeded is connected to the number of running strategies in your area. You can have at most 50 of them and you should select 15 for the contest.

### Templates
A copy of a template **will NOT be eligible for a prize**.
