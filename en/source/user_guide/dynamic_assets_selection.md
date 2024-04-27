# Dynamic Assets Selection

This chapter outlines methods for dynamic stock selection designed to enhance trading strategies. You can tailor these
methods to suit your specific needs, using the provided examples to help you develop your own stock selection criteria.
It is important to aim for diversity in your portfolio by including a multitude of stocks.

## Example Strategy in Python

Let's start with a basic strategy that uses moving averages to determine the moments for buying and selling stocks:

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

## Applying to Liquid Assets

This liquidity filter, focusing specifically on Nasdaq 100 assets, is **the main filter you are highly recommended to
use**, especially if you plan to
participate in competitions. It multiplies the strategy weights by a liquidity indicator, effectively filtering out
non-liquid stocks:

```python
weights = weights * data.sel(field="is_liquid")
```

## Trading Stocks with Different Volatilities

You can choose stocks with different levels of volatility:

Low Volatility: Trade 150 stocks with the lowest volatility over the past 60 days.
High Volatility: Focus on the 150 most volatile stocks.

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

## Selecting Stocks by Sharpe Ratio

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

## Volatility Using a Rolling Window

This method allows filtering stocks based on volatility calculated over a specified time window:

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

# Same way calculate Low Volatility
# weights = weights * qnfilter.filter_volatility_rolling(data=data,
#                                                     weights=strategy(data),
#                                                     top_assets=150,
#                                                     rolling_window=60,
#                                                     metric="std",
#                                                     ascending=True)
```

## Filtering Stocks by Normalized Average True Range (NATR)

The Normalized Average True Range (NATR) is a volatility metric that adjusts the Average True Range (ATR) for the price
level of the asset, providing a percentage-based measure that makes it easier to compare volatility across different
priced stocks.

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

These methods allow for more flexible and adaptive stock trading strategies, which can significantly enhance the
efficiency of your portfolio.

# Risk Management

In this section, we explore various risk management strategies to ensure stable and controlled trading outcomes. These
techniques aim to mitigate financial exposure and optimize portfolio performance through systematic checks and balances.

## Exposure Check

Managing the exposure of each asset in a portfolio is a crucial component of risk management. Exposure refers to the
absolute value of each asset relative to the total value of the portfolio, which is essential for assessing the risk
each asset contributes.

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

### How It Works

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

### Detailed Function Explanation

The `check_exposure` function evaluates portfolio risk by comparing each asset's exposure against established risk
thresholds. The function performs several checks:

- **Maximum Exposure Analysis**: Identifies periods where the exposure of any asset exceeds the soft limit and logs
  these occurrences.
- **Compliance Checks**:
    - Checks if the proportion of days with exposures exceeding the soft limit is within the days tolerance.
    - Analyzes if the average excess exposure is within the excess tolerance.
    - Ensures that no asset's exposure ever exceeds the hard limit during the check period.

This systematic approach allows for a dynamic and responsive risk management strategy, ensuring that the portfolio
maintains a balanced risk profile in accordance with predefined risk parameters.

## Applying Exposure Filters

Adjusting weights based on exposure checks is crucial for maintaining the desired risk profile. Here are functions that
help manage exposure by modifying the investment weights:

### normalize_by_max_exposure

Helper function which normalizes weights based on the highest daily exposure, ensuring that the exposure of each asset
does not exceed a specified maximum exposure limit, while keeping daily weights allocation ratio among assets.


```python
def normalize_by_max_exposure(weights, max_exposure=0.1):
    dt = abs(weights).max("asset")
    div = xr.where(dt > max_exposure, dt / max_exposure, 1)
    return weights / div

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
```python
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

These methods form an integral part of a robust risk management system, helping to safeguard against market volatility
and maintain portfolio stability.

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