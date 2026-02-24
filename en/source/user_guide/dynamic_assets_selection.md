# Dynamic Assets Selection

This chapter covers methods for dynamic stock selection in trading strategies. You can adapt these
methods to your needs, using the examples below to develop your own stock selection criteria.
Try to include many stocks in your portfolio to keep it diversified.

## Example strategy in Python

Here is a basic strategy that uses moving averages to decide when to buy and sell stocks:

```python
import xarray as xr
import qnt.data as qndata
import qnt.ta as qnta
import qnt.stats as qnstats
import qnt.filter as qnfilter

# Load stock data
data = qndata.stocks.load_ndx_data(min_date="2005-01-01")


def strategy(data):
    close = data.sel(field="close")
    ma_slow = qnta.sma(close, 30)
    ma_fast = qnta.sma(close, 10)
    return xr.where(ma_fast > ma_slow, 1, 0)


weights = strategy(data)
```

## Applying to liquid assets

This liquidity filter targets Nasdaq 100 assets and is **the main filter you should use**, especially if you plan to
enter competitions. It multiplies the strategy weights by a liquidity indicator, which removes
non-liquid stocks:

```python
weights = weights * data.sel(field="is_liquid")
```

## Trading stocks with different volatilities

You can choose stocks with different levels of volatility:

* **Low Volatility**: Trade 150 stocks with the lowest volatility over the past 60 days.
* **High Volatility**: Focus on the 150 most volatile stocks.

```python
import qnt.filter as qnfilter

# Low Volatility
low_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std", ascending=True)
weights = weights * low_volatility

# High Volatility
high_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std",
                                             ascending=False)
weights = weights * high_volatility
```

## Selecting stocks by Sharpe ratio

Select stocks that show the best results by Sharpe ratio:

```python
import qnt.stats as qnstats
import qnt.filter as qnfilter


def filter_sharpe_ratio(data, weights, top_assets):
    stats_per_asset = qnstats.calc_stat(data, weights, per_asset=True)
    sharpe_ratio = stats_per_asset.sel(field="sharpe_ratio")
    return qnfilter.rank_assets_by(data, sharpe_ratio, top_assets, ascending=False)


asset_filter = filter_sharpe_ratio(data, weights, 150)
weights = weights * asset_filter

# weights = weights * qnfilter.filter_sharpe_ratio(data, weights, 150) # this can be done in one line
```

## Volatility using a rolling window

This method filters stocks by volatility calculated over a specified time window:

```python
import qnt.stats as qnstats
import qnt.filter as qnfilter


def filter_volatility_rolling(data, weights, top_assets, rolling_window, metric="std", ascending=True):
    stats_per_asset = qnstats.calc_stat(data, weights, per_asset=True)
    volatility = stats_per_asset.sel(field="volatility")
    volatility = qnfilter.calc_rolling_metric(volatility, rolling_window, metric)
    return qnfilter.rank_assets_by(data, volatility, top_assets, ascending)


asset_filter = filter_volatility_rolling(data, weights, 150, 60, "std", True)
weights = weights * asset_filter

# Same way to calculate Low Volatility
# weights = weights * qnfilter.filter_volatility_rolling(data=data,
#                                                     weights=strategy(data),
#                                                     top_assets=150,
#                                                     rolling_window=60,
#                                                     metric="std",
#                                                     ascending=True)
```

## Filtering stocks by normalized average true range (NATR)

The Normalized Average True Range (NATR) adjusts the Average True Range (ATR) for the price
level of the asset. This gives a percentage-based measure, making it easier to compare volatility across stocks
at different price levels.

```python
import qnt.filter as qnfilter
import qnt.ta as qnta


def filter_by_normalized_atr(data, top_assets, ma_period=90, ascending=True):
    high = data.sel(field='high')
    low = data.sel(field='low')
    close = data.sel(field='close')

    # Calculating ATR and then Normalized ATR
    atr = qnta.atr(high=high, low=low, close=close, ma=ma_period)
    natr = 100 * (atr / close)  # Normalized ATR

    # Ranking assets based on NATR
    natr_ranks = qnfilter.rank_assets_by(data=data, criterion=natr, top_assets=top_assets, ascending=ascending)

    return natr_ranks


asset_filter = filter_by_normalized_atr(data, top_assets=150, ma_period=90, ascending=True)
weights = weights * asset_filter

# Same way calculate Low Volatility
# weights = weights * qnfilter.filter_by_normalized_atr(data, top_assets=50, ma_period=90, ascending=True)

```

These methods give you more flexibility when building stock trading strategies and can improve
your portfolio's performance.

# Risk Management

This section covers risk management techniques for keeping your trading outcomes stable and controlled. These
approaches help limit financial exposure and improve portfolio performance through systematic checks.

## Exposure check

Managing each asset's exposure in a portfolio is a key part of risk management. Exposure is the
absolute value of each asset relative to the total portfolio value, which matters for assessing how much risk
each asset adds.

Below is an example Python function that calculates the exposure for each position within a portfolio and checks if the
exposure exceeds predefined limits:

```python
import qnt.stats as qnstats
import qnt.exposure as qnexp

qnstats.check_exposure(portfolio_history=weights,
                       soft_limit=0.05, hard_limit=0.1,
                       days_tolerance=0.02, excess_tolerance=0.02,
                       avg_period=252, check_period=252 * 5
                       )
```

### How it works

- **Exposure Calculation**: Computes the ratio of the absolute value of each position to the total portfolio value.
- **Soft and Hard Limits**: Defines thresholds that should not be exceeded to adequately control risk.
    - **Soft Limit (0.05)**: This is a threshold indicating a cautionary level of exposure. If the exposure of any asset
      exceeds this limit, it may warrant attention but isn't critical yet.
    - **Hard Limit (0.1)**: This threshold indicates a critical level of exposure. Exceeding this limit is considered
      risky and requires immediate action.
- **Tolerance Levels**: Specifies the acceptable levels for brief periods of increased risk.
    - **Days Tolerance (0.02)**: Represents the proportion of the checking period that can tolerate exposures between
      the soft and hard limits.
    - **Excess Tolerance (0.02)**: The maximum allowable average excess exposure above the soft limit during the check
      period.
- **Historical Analysis**: Uses historical data to evaluate the risk profile over time and ensure compliance with set
  limits, considering the past data specified by `avg_period` (252 days) and `check_period` (1260 days, or 252 days
  multiplied by 5).

### Detailed function explanation

The `check_exposure` function evaluates portfolio risk by comparing each asset's exposure against set risk
thresholds. It performs several checks:

- **Maximum Exposure Analysis**: Identifies periods where the exposure of any asset exceeds the soft limit and logs
  these occurrences.
- **Compliance Checks**:
    - Checks if the proportion of days with exposures exceeding the soft limit is within the days tolerance.
    - Analyzes if the average excess exposure is within the excess tolerance.
    - Ensures that no asset's exposure ever exceeds the hard limit during the check period.

This approach keeps the portfolio's risk profile balanced according to the predefined risk parameters.

## Applying exposure filters

Adjusting weights based on exposure checks is important for maintaining the desired risk profile. Here are functions that
manage exposure by modifying the investment weights:

### normalize_by_max_exposure

Helper function which normalizes weights based on the highest daily exposure, ensuring that the exposure of each asset
does not exceed a specified maximum exposure limit, while keeping daily weights allocation ratio among assets.


```python
def normalize_by_max_exposure(weights, max_exposure=0.1):
    daily_max = abs(weights).max("asset")
    normalizer = xr.where(daily_max > max_exposure, daily_max / max_exposure, 1)
    return weights / normalizer

weights.to_pandas().tail(2)
```
```jupyterpython
    asset 	NAS:AAPL 	NAS:GOOG 	NAS:AMGN
time 			
2024-04-23 	0.319466 	0.095525 	0.022927
2024-04-24 	0.317989 	0.095365 	0.022855
```
```python
normalize_by_max_exposure(weights).to_pandas().tail(2)
```
```jupyterpython
    asset 	NAS:AAPL 	NAS:GOOG 	NAS:AMGN
time 			
2024-04-23 	0.1 	0.029902 	0.007177
2024-04-24 	0.1 	0.029990 	0.007187
```

### drop_bad_days

Removes positions exceeding the maximum weight for any asset, thus reducing exposure.

```python
import qnt.exposure as qnexp

weights_filtered = qnexp.drop_bad_days(weights=weights, max_weight=0.049)
```

### mix_weights

Combines two sets of weights (primary and secondary) while ensuring the maximum exposure does not exceed a specific
threshold.

```python
import qnt.exposure as qnexp

weights_filtered = qnexp.mix_weights(primary=weights1, secondary=weights2, max_weight=0.049)
```

### cut_big_positions

Caps the weights of positions that exceed the maximum allowable weight to limit exposure.

```python
import qnt.exposure as qnexp

weights_filtered = qnexp.cut_big_positions(weights=weights, max_weight=0.049)
```

These methods are part of a solid risk management system and help protect against market volatility
while keeping the portfolio stable.

## Full code example


```python
import xarray as xr
import qnt.data as qndata
import qnt.output as qnout
import qnt.ta as qnta
import qnt.stats as qnstats
import qnt.filter as qnfilter
import qnt.exposure as qnexp

# Load stock data
data = qndata.stocks.load_ndx_data(min_date="2005-01-01")


def strategy(data):
    close = data.sel(field="close")
    ma_slow = qnta.sma(close, 30)
    ma_fast = qnta.sma(close, 10)
    return xr.where(ma_fast > ma_slow, 1, 0)


weights = strategy(data)

# Applying to Liquid Assets

weights = weights * data.sel(field="is_liquid")

# Trading Stocks with Different Volatilities

# Low Volatility
# low_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std", ascending=True)
# weights_low_volatility = weights * low_volatility

# High Volatility
# high_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std",
#                                              ascending=False)
# weights_high_volatility = weights * high_volatility

# Selecting Stocks by Sharpe Ratio
# weights_filter_sharpe_ratio = weights * qnfilter.filter_sharpe_ratio(data, weights, 150)

# Same way calculate Low Volatility
# weights_roll = weights * qnfilter.filter_volatility_rolling(data=data,
#                                                     weights=strategy(data),
#                                                     top_assets=150,
#                                                     rolling_window=60,
#                                                     metric="std",
#                                                     ascending=True)

# Same way calculate Low Volatility
# weights = weights * qnfilter.filter_by_normalized_atr(data, top_assets=50, ma_period=90, ascending=True)

qnstats.check_exposure(portfolio_history=weights,
                       soft_limit=0.05, hard_limit=0.1,
                       days_tolerance=0.02, excess_tolerance=0.02,
                       avg_period=252, check_period=252 * 5
                       )

# Removes positions exceeding the maximum weight for any asset, thus reducing exposure.
# weights_filtered = qnexp.drop_bad_days(weights=weights, max_weight=0.049)

# Combines two sets of weights (primary and secondary) while ensuring the maximum exposure does not exceed a specific
# threshold.
# weights_filtered = qnexp.mix_weights(primary=weights1, secondary=weights2, max_weight=0.049)

# Caps the weights of positions that exceed the maximum allowable weight to limit exposure.
weights_filtered = qnexp.cut_big_positions(weights=weights, max_weight=0.049)

stats = qnstats.calc_stat(data, weights.sel(time=slice("2006-01-01", None)))
display(stats.to_pandas().tail())

qnout.check(weights_filtered, data, "stocks_nasdaq100")
qnout.write(weights_filtered)  # to participate in the competition. run this line in a separate cell

```
