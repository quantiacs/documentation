# Indexes

Quantiacs provides up-to-date daily data for various stock market indices:

```python

import qnt.data as qndata

index_data = qndata.index.load_data(min_date='2005-01-01')

['BKX', 'CELS', 'COMP', 'INDU', 'IXNDX', 'KRX', 'NBI',
 'NDX', 'NDXE', 'NDXT', 'NDXX', 'OEX', 'QNET', 'RUA',
 'RUI', 'RUT', 'SOX', 'SPX']
```

| Number | ID    | Name                                      |
|--------|-------|-------------------------------------------|
| 1      | SPX   | S&P 500                                   |
| 2      | INDU  | Dow Industrials                           |
| 3      | NDX   | NASDAQ-100 Index                          |
| 4      | RUI   | Russell 1000                              |
| 5      | RUT   | Russell 2000                              |
| 6      | RUA   | Russell 3000                              |
| 7      | OEX   | S&P 100                                   |
| 8      | COMP  | NASDAQ Composite Index                    |
| 9      | SOX   | PHLX Semiconductor Sector                 |
| 10     | NBI   | NASDAQ Biotechnology                      |
| 11     | BKX   | KBW Bank Index                            |
| 12     | KRX   | KBW Regional Banking Index                |
| 13     | IXNDX | NASDAQ-100                                |
| 14     | NDXT  | NASDAQ-100 Technology Sector Index        |
| 15     | NDXX  | NASDAQ-100 Ex-Tech Sector Index           |
| 16     | NDXE  | The NASDAQ-100 Equal Weighted Index       |
| 17     | CELS  | NASDAQ Clean Edge Green Energy Index      |
| 18     | QNET  | NASDAQ Internet Index                     |

Examples

- [Predicting NASDAQ 100 Stocks Using the SPX Index](https://github.com/quantiacs/strategy-predict-NASDAQ100-use-SPX/blob/master/strategy.ipynb)

> This example demonstrates predicting the stock market using SPX index data to develop a trading strategy.

Single pass version for faster development

```python
# import os
# os.environ['API_KEY'] = "{your_api_key_here}"  # you may need it for local development

# Import necessary libraries
import xarray as xr
import numpy as np
import qnt.data as qndata  # Load and manipulate data
import qnt.output as qnout  # Manage output
import qnt.stats as qnstats  # Statistical functions for analysis
import qnt.graph as qngraph  # Graphical tools
import qnt.ta as qnta  # Indicators library
import qnt.backtester as qnbt  # backtester
import qnt.exposure as qnexp


def strategy(data):
    close_stocks = data["stocks"].sel(field="close")
    close_spx = data["spx"]

    # Generate buy signal if 20-day SMA < 50-day SMA, otherwise hold (0) or sell (-1)
    accuracy = 0.00001  # to avoid floating point errors
    weights_stocks = xr.where(qnta.sma(close_stocks, 20) < qnta.sma(close_stocks, 50) + accuracy, 1, 0)
    weights_spx = xr.where(qnta.sma(close_spx, 20) < qnta.sma(close_spx, 60) + accuracy, 1, 0)
    weights = (weights_stocks + weights_spx) / 2

    # Apply liquidity filter
    is_liquid = data["stocks"].sel(field="is_liquid")
    weights = weights * is_liquid

    # Normalize positions and cut big positions
    weights_sum = abs(weights).sum('asset')
    weights = xr.where(weights_sum > 1, weights / weights_sum, weights)
    weights = qnexp.cut_big_positions(weights=weights, max_weight=0.049)

    return weights


min_date = "2005-06-01"

stocks = qndata.stocks.load_ndx_data(min_date=min_date)


def get_spx(stocks, min_date):
    index_data = qndata.index.load_data(assets=['SPX'], min_date=min_date)
    spx = index_data.sel(asset='SPX')
    # Align stocks and SPX data based on common time indices
    common_times = stocks.time.values
    spx = spx.sel(time=common_times)
    return spx


data_mix = {
    "stocks": stocks,
    "spx": get_spx(stocks, min_date)
}

weights = strategy(data_mix)

# Calc stats
stats = qnstats.calc_stat(stocks, weights.sel(time=slice("2005-12-30", None)))
display(stats.to_pandas().tail())

# Graph
performance = stats.to_pandas()["equity"]
import qnt.graph as qngraph

qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")

weights = weights.sel(time=slice("2005-12-30", None))

qnout.check(weights, stocks, "stocks_nasdaq100", check_correlation=False)
qnout.write(weights)  # to participate in the competition
```

Multi-pass version

```python
# import os
# os.environ['API_KEY'] = "{your_api_key_here}"  # you may need it for local development

# Import necessary libraries
import xarray as xr
import numpy as np
import qnt.data as qndata  # Load and manipulate data
import qnt.output as qnout  # Manage output
import qnt.stats as qnstats  # Statistical functions for analysis
import qnt.graph as qngraph  # Graphical tools
import qnt.ta as qnta  # Indicators library
import qnt.backtester as qnbt  # backtester
import qnt.exposure as qnexp


def load_data(period):
    """
    period (int): Number of days of data to load.
    """
    stocks = qndata.stocks.load_ndx_data(tail=period)
    index_data = qndata.index.load_data(assets=['SPX'], tail=period)
    spx = index_data.sel(asset='SPX')
    # Align stocks and SPX data based on common time indices
    common_times = stocks.time.values
    spx = spx.sel(time=common_times)
    return {"stocks": stocks, "spx": spx}, stocks.time.values


def window(data, max_date: np.datetime64, lookback_period: int):
    min_date = max_date - np.timedelta64(lookback_period, "D")
    return {
        "stocks": data["stocks"].sel(time=slice(min_date, max_date)),
        "spx": data["spx"].sel(time=slice(min_date, max_date))
    }


def strategy(data):
    close_stocks = data["stocks"].sel(field="close")
    close_spx = data["spx"]

    # Generate buy signal if 20-day SMA < 50-day SMA, otherwise hold (0) or sell (-1)
    accuracy = 0.00001  # to avoid floating point errors
    weights_stocks = xr.where(qnta.sma(close_stocks, 20) < qnta.sma(close_stocks, 50) + accuracy, 1, 0)
    weights_spx = xr.where(qnta.sma(close_spx, 20) < qnta.sma(close_spx, 60) + accuracy, 1, 0)
    weights = (weights_stocks + weights_spx) / 2

    # Apply liquidity filter
    is_liquid = data["stocks"].sel(field="is_liquid")
    weights = weights * is_liquid

    # Normalize positions and cut big positions
    weights_sum = abs(weights).sum('asset')
    weights = xr.where(weights_sum > 1, weights / weights_sum, weights)
    weights = qnexp.cut_big_positions(weights=weights, max_weight=0.049)

    return weights


# Multi-pass version
# Run backtest
weights_backtest = qnbt.backtest(
    competition_type="stocks_nasdaq100",
    load_data=load_data,
    lookback_period=120,
    start_date="2005-12-30",
    strategy=strategy,
    window=window,
    check_correlation=False
)
```