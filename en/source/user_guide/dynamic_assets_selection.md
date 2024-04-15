# Dynamic Assets Selection

This chapter describes methods for dynamic stock selection aimed at enhancing trading strategies. You can adapt these methods to your needs, using the provided examples to create your own stock selection criteria. It is important to aim for diversity in your portfolio by including a multitude of stocks.

## Example Strategy in Python

Let's start with a basic strategy that uses moving averages to determine the moments for buying and selling stocks:

```python
import xarray as xr
import qnt.data as qndata
import qnt.ta as qnta
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

##  Applying to Liquid Assets
Make sure that the selected stocks are liquid:

```python
weights *= data.sel(field="is_liquid")
```

## Trading Stocks with Different Volatilities
You can choose stocks with different levels of volatility:

Low Volatility: Trade 150 stocks with the lowest volatility over the past 60 days.
High Volatility: Focus on the 150 most volatile stocks.
```python
# Low Volatility
low_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std", ascending=True)
weights *= low_volatility

# High Volatility
high_volatility = qnfilter.filter_volatility(data=data, rolling_window=60, top_assets=150, metric="std", ascending=False)
weights *= high_volatility
```

## Selecting Stocks by Sharpe Ratio
Select stocks that show the best results by Sharpe ratio:

```python
def filter_sharpe_ratio(data, weights, top_assets):
    stats_per_asset = qnstats.calc_stat(data, weights, per_asset=True)
    sharpe_ratio = stats_per_asset.sel(field="sharpe_ratio")
    return qnfilter.rank_assets_by(data, sharpe_ratio, top_assets, ascending=False)

asset_filter = filter_sharpe_ratio(data, weights, 150)
weights *= asset_filter

# weights = weights * qnfilter.filter_sharpe_ratio(data, weights, 150) # this can be done in one line
```

## Volatility Using a Rolling Window
This method allows filtering stocks based on volatility calculated over a specified time window:

```python
def filter_volatility_rolling(data, weights, top_assets, rolling_window, metric="std", ascending=True):
    stats_per_asset = qnstats.calc_stat(data, weights, per_asset=True)
    volatility = stats_per_asset.sel(field="volatility")
    volatility = qnfilter.calc_rolling_metric(volatility, rolling_window, metric)
    return qnfilter.rank_assets_by(data, volatility, top_assets, ascending)

asset_filter = filter_volatility_rolling(data, weights, 150, 60, "std", True)
weights *= asset_filter

# Same way calculate Low Volatility
# weights = weights * qnfilter.filter_volatility_rolling(data=data,
#                                                     weights=strategy(data),
#                                                     top_assets=150,
#                                                     rolling_window=60,
#                                                     metric="std",
#                                                     ascending=True)
```

## Filtering Stocks by Normalized Average True Range (NATR)
The Normalized Average True Range (NATR) is a volatility metric that adjusts the Average True Range (ATR) for the price level of the asset, providing a percentage-based measure that makes it easier to compare volatility across different priced stocks.

```python
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

weights *= asset_filter

# Same way calculate Low Volatility
# weights = weights * qnfilter.filter_by_normalized_atr(data, top_assets=50, ma_period=90, ascending=True)

```

These methods allow for more flexible and adaptive stock trading strategies, which can significantly enhance the efficiency of your portfolio.
