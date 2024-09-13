# Introduction

Quantiacs offers historical data for major financial markets, including **stocks**, **futures** (like Bitcoin futures),
and **cryptocurrencies**. This section provides an overview of the data:

- [Stocks](https://quantiacs.com/documentation/en/data/stocks.html): Market data for NASDAQ-listed, S&P500-listed companies, past and
  present.
- [Futures](https://quantiacs.com/documentation/en/data/futures.html): Market data for liquid global futures contracts
  with various underlying assets.
- [Cryptocurrencies](https://quantiacs.com/documentation/en/data/crypto.html): Market data for top cryptocurrencies by
  market capitalization.

Additional Datasets:

- [Indexes](https://quantiacs.com/documentation/en/data/indexes.html): Daily data for various stock market indices.
- [U.S. Bureau of Labor Statistics (BLS Data)](https://quantiacs.com/documentation/en/data/bls.html): Offers
  macroeconomic data on prices, employment, unemployment, compensation, and working conditions.
- [International Monetary Fund (IMF Data)](https://quantiacs.com/documentation/en/data/imf.html): Publishes time series data on IMF lending, exchange rates,
  economic and financial indicators, and commodity data.
- [Fundamental Data](https://quantiacs.com/documentation/en/data/fundamental.html): An experimental API for additional financial data.

## Working with Data

Quantiacs provides a Python library called `qnt.data` that simplifies the process of loading and working with financial
data. You can load various types of data using the following functions:

```python
import qnt.data as qndata

# Load daily stock data for the Q22 S&P500 contest
stocks = qndata.stocks.load_spx_data(min_date="2005-06-01")

# Load daily stock data for the Q20 Nasdaq-100 contest
stocks_nasdaq = qndata.stocks.load_ndx_data(min_date="2005-06-01")

# Load cryptocurrency daily data for the Q16/Q17 contests
cryptodaily = qndata.cryptodaily.load_data(min_date="2005-06-01")

# Load futures data for the Q15 contest
futures = qndata.futures.load_data(min_date="2005-06-01")

# Load BTC futures data for the Q15 contest
crypto_futures = qndata.cryptofutures.load_data(min_date="2005-06-01")

print(stocks, stocks_nasdaq, cryptodaily, futures, crypto_futures)

```

All datasets have the same structure, and you can access information about opening and closing prices, high and low
prices, trading volumes, and other relevant data fields.

```python
import qnt.data as qndata

data = qndata.stocks.load_spx_data(min_date="2005-06-01")

price_open = data.sel(field="open")
price_close = data.sel(field="close")
price_high = data.sel(field="high")
price_low = data.sel(field="low")
volume_day = data.sel(field="vol")
is_liquid = data.sel(field="is_liquid")

```

| Data field     | Description                                                                                                       | Code example                        |
|----------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| open           | Daily open price, i.e. the price at which a security trades when the exchange opens.                              | `price_open = data.sel(field="open")` |
| close          | Daily close price.                                                                                                | `price_close = data.sel(field="close")` |
| high           | Daily high price.                                                                                                 | `price_high = data.sel(field="high")` |
| low            | Daily low price.                                                                                                  | `price_low = data.sel(field="low")` |
| vol            | Daily number of traded shares.                                                                                    | `volume_day = data.sel(field="vol")` |
| divs           | Dividends from shares.                                                                                            | `dividends = data.sel(field="divs")` |
| split          | Indicates a stock split. Split = 2.0 means that on this day there was a split of shares 2 to 1.                  | `split = data.sel(field="split")` |
| split_cumprod  | The product of split values from the very beginning. It can be used for restoring original prices.               | `split_cumprod = data.sel(field="split_cumprod")` |
| is_liquid      | Determines whether this stock is liquid enough for trading. A stock is liquid if it is part of the top 500 stocks.| `is_liquid = data.sel(field="is_liquid")` |

## Frequently used functions

| Description                                        | Code Example                                                                                                                                                     |
|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View a list of all tickers                         | `data.asset.to_pandas().to_list()`                                                                                                                               |
| See which fields are available                     | `data.field.to_pandas().to_list()`                                                                                                                               |
| Load specific tickers                              | `data = qndata.stocks.load_spx_data(min_date="2005-06-01", assets=["NAS:AAPL", "NAS:AMZN"])`                                                                     |
| Select specific tickers after loading all data     | `def get_data_filter(data, assets):`<br>&emsp;`filler= data.sel(asset=assets)`<br>&emsp;`return filler`<br><br>`get_data_filter(data, ["NAS:AAPL", "NAS:AMZN"])` |
| Loads a list of NASDAQ-listed stocks               | `stocks_list = qndata.stocks.load_ndx_list(min_date='2006-01-01')`                                                                                               |
| Loads a list of available futures contracts.       | `future_list = qndata.futures.load_list()`                                                                                                                       |
| List of sectors.                                   | `sectors = [x['sector'] for x in stocks_list]`                                                                                                                   |
| Filter list of asset IDs for the specified sector. | `assets_for_sector = [x['id'] for x in stocks_list if x['sector'] == "Energy"]`                                                                                  |
| Load specific tickers for sector                   | `data = qndata.stocks.load_spx_data(min_date="2005-06-01", assets=assets_for_sector)`                                                                            |

## Xarray

Quantiacs data is stored in [xarray](https://xarray.pydata.org/en/stable/) DataArray format, which provides a powerful
and flexible way to work with labeled multi-dimensional arrays. You can perform arithmetic operations, mathematical
functions, broadcasting, aggregations, slicing and selecting data, combining DataArrays, and applying custom functions
on DataArray objects.

```python
import qnt.data as qndata

# Load data
stocks = qndata.stocks.load_spx_data(min_date="2005-06-01")
print(stocks.dims)

# Example output: ('field', 'time', 'asset')
```

The main data structure in xarray is the `DataArray`. It has the following properties:

* **values**: a numpy.ndarray containing the array's values.
* **dims**: dimension names for each axis.
* **coords**: a container of arrays (coordinates) that label each point.
* **attrs**: a dictionary for storing arbitrary metadata (attributes).

```python
import qnt.data as qndata
import numpy as np
import qnt.ta as qnta
import qnt.xr_talib as talib

# Load data
data = qndata.stocks.load_spx_data(min_date="2005-06-01")

# Select close prices
price_close = data.sel(field="close")

# Normalize close prices
price_close_100 = price_close / 100.0

# Calculate log of close prices
log_price = np.log(price_close)

# Select close prices for a specific time range
slice_price = price_close.sel(time=slice("2006-01-01", "2006-12-31"))

# Calculate simple moving average (SMA) using qnt.ta
close_price_sma = qnta.sma(price_close, 2)

# Calculate SMA using qnt.xr_talib
close_price_sma_talib = talib.SMA(price_close, 2)
```

## Pandas

In addition to xarray, you can also work with pandas data structures by converting the xarray DataArray into a pandas
DataFrame, perform computations using standard pandas methods, and then convert the result back into an xarray
DataArray.

### Example 1

```python
import qnt.data as qntdata

# Load data
data = qntdata.stocks.load_spx_data(min_date="2005-06-01")

# Calculate percentage change of close prices
def get_price_pct_change(prices):
    prices_pandas = prices.to_pandas()
    assets = data.coords["asset"].values
    for asset in assets:
        prices_pandas[asset] = prices_pandas[asset].pct_change()
    return prices_pandas

prices = data.sel(field="close") * 1.0
prices_pct_change = get_price_pct_change(prices).unstack().to_xarray()

```
### Example 2

```python
import qnt.data as qntdata

# Load data
data = qntdata.stocks.load_spx_data(min_date="2005-06-01")

# Convert close prices to pandas DataFrame
close = data.sel(field="close").to_pandas()

# Calculate simple moving average (SMA) for close prices
close_sma = ((close - close.shift(10)) / close.shift(10)).rolling(30).mean()

# Normalize SMA values
norm = abs(close_sma).sum(axis=1)
weights = close_sma.div(norm, axis=0)

# Convert weights back to xarray DataArray
final_weights = weights.unstack().to_xarray()

```

### How to create a dataset yourself

```python
import pandas as pd
import xarray as xr
import numpy as np


class Fields:
    OPEN = "open"
    LOW = "low"
    HIGH = "high"
    CLOSE = "close"
    VOL = "vol"
    DIVS = "divs"
    SPLIT = "split"
    SPLIT_CUMPROD = "split_cumprod"
    IS_LIQUID = 'is_liquid'


class Dimensions:
    TIME = 'time'
    FIELD = 'field'
    ASSET = 'asset'


def get_base_df():
    sample_data = {"schema": {"fields": [{"name": "time", "type": "datetime"}, {"name": "open", "type": "integer"},
                                         {"name": "close", "type": "integer"}, {"name": "low", "type": "integer"},
                                         {"name": "high", "type": "integer"}, {"name": "vol", "type": "integer"},
                                         {"name": "divs", "type": "integer"}, {"name": "split", "type": "integer"},
                                         {"name": "split_cumprod", "type": "integer"},
                                         {"name": "is_liquid", "type": "integer"}], "primaryKey": ["time"],
                              "pandas_version": "0.20.0"}, "data": [
        {"time": "2021-01-30T00:00:00.000Z", "open": 1, "close": 2, "low": 1, "high": 2, "vol": 1000, "divs": 0,
         "split": 0, "split_cumprod": 0, "is_liquid": 1},
        {"time": "2021-01-31T00:00:00.000Z", "open": 2, "close": 3, "low": 2, "high": 3, "vol": 1000, "divs": 0,
         "split": 0, "split_cumprod": 0, "is_liquid": 1},
        {"time": "2021-02-01T00:00:00.000Z", "open": 3, "close": 4, "low": 3, "high": 4, "vol": 1000, "divs": 0,
         "split": 0, "split_cumprod": 0, "is_liquid": 1},
    ]}
    columns = [Dimensions.TIME, Fields.OPEN, Fields.CLOSE, Fields.LOW, Fields.HIGH, Fields.VOL, Fields.DIVS,
               Fields.SPLIT, Fields.SPLIT_CUMPROD, Fields.IS_LIQUID]
    rows = sample_data['data']
    for r in rows:
        r['time'] = np.datetime64(r['time'])
    df = pd.DataFrame(columns=columns, data=rows)
    df.set_index(Dimensions.TIME, inplace=True)
    prices_array = df.to_xarray().to_array(Dimensions.FIELD)
    prices_array.name = "BTC_TEST"
    prices_array_r = xr.concat([prices_array], pd.Index(['BTC'], name='asset'))
    return prices_array_r


weights = get_base_df()
print(weights)
```