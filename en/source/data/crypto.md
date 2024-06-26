# Cryptocurrency

## Cryptocurrency Daily Data

Quantiacs provides up-to-date daily data for cryptocurrencies:

```python

import qnt.data as qndata

btc_data = qndata.cryptodaily.load_data(tail=365 * 8, dims=('time', 'field', 'asset'))

['ADA', 'AUR', 'AVAX', 'BCH', 'BCN', 'BLK', 'BNB', 'BSV', 'BTC', 'BTG',
 'BTS', 'DASH', 'DGC', 'DGD', 'DOGE', 'DOT', 'EOS', 'ETC', 'ETH', 'FCT',
 'FRC', 'FTC', 'GNT', 'ICP', 'IFC', 'IXC', 'LINK', 'LSK', 'LTC', 'MAID',
 'MNC', 'NEO', 'NMC', 'NXT', 'OMNI', 'PPC', 'PTS', 'QRK', 'REP', 'SOL',
 'STEEM', 'STRAX', 'THETA', 'TRC', 'TRX', 'UNI', 'WAVES', 'WDC', 'XCP',
 'XEM', 'XLM', 'XMR', 'XPM', 'XPY', 'XRP']  
```

| Number | Ticker | Full Name                          |
|--------|--------|------------------------------------|
| 1      | ADA    | Cardano                            |
| 2      | AUR    | Auroracoin                         |
| 3      | AVAX   | Avalanche                          |
| 4      | BCH    | Bitcoin Cash                       |
| 5      | BCN    | Bytecoin                           |
| 6      | BLK    | BlackCoin                          |
| 7      | BNB    | Binance Coin                       |
| 8      | BSV    | Bitcoin SV                         |
| 9      | BTC    | Bitcoin                            |
| 10     | BTG    | Bitcoin Gold                       |
| 11     | BTS    | BitShares                          |
| 12     | DASH   | Dash                               |
| 13     | DGC    | DigitalCoin                        |
| 14     | DGD    | DigixDAO                           |
| 15     | DOGE   | Dogecoin                           |
| 16     | DOT    | Polkadot                           |
| 17     | EOS    | EOS                                |
| 18     | ETC    | Ethereum Classic                   |
| 19     | ETH    | Ethereum                           |
| 20     | FCT    | Factom                             |
| 21     | FRC    | Freicoin                           |
| 22     | FTC    | Feathercoin                        |
| 23     | GNT    | Golem                              |
| 24     | ICP    | Internet Computer                  |
| 25     | IFC    | Infinitecoin                       |
| 26     | IXC    | Ixcoin                             |
| 27     | LINK   | Chainlink                          |
| 28     | LSK    | Lisk                               |
| 29     | LTC    | Litecoin                           |
| 30     | MAID   | MaidSafeCoin                       |
| 31     | MNC    | Mincoin                            |
| 32     | NEO    | NEO                                |
| 33     | NMC    | Namecoin                           |
| 34     | NXT    | Nxt                                |
| 35     | OMNI   | Omni                               |
| 36     | PPC    | Peercoin                           |
| 37     | PTS    | ProtoShares                        |
| 38     | QRK    | Quark                              |
| 39     | REP    | Augur                              |
| 40     | SOL    | Solana                             |
| 41     | STEEM  | Steem                              |
| 42     | STRAX  | Stratis                            |
| 43     | THETA  | Theta Network                      |
| 44     | TRC    | Terracoin                          |
| 45     | TRX    | TRON                               |
| 46     | UNI    | Uniswap                            |
| 47     | WAVES  | Waves                              |
| 48     | WDC    | WorldCoin                          |
| 49     | XCP    | Counterparty                       |
| 50     | XEM    | NEM                                |
| 51     | XLM    | Stellar                            |
| 52     | XMR    | Monero                             |
| 53     | XPM    | Primecoin                          |
| 54     | XPY    | Paycoin                            |
| 55     | XRP    | XRP                                |

### Examples

> This trading strategy uses a moving average crossover system for Crypto Daily Long contest, taking long positions when
> the 10-day LWMA is above the 50-day LWMA, considering the asset's liquidity.

```python
# import os
# os.environ['API_KEY'] = "{your_api_key_here}"  # you may need it for local development

import xarray as xr

import qnt.stats as qnstats
import qnt.data as qndata
import qnt.output as qnout
import qnt.ta as qnta


def calculate_weights(data):
    close = data.sel(field="close")
    liquidity = data.sel(field='is_liquid')
    long_lwma = qnta.lwma(close, 50)
    short_lwma = qnta.lwma(close, 10)
    buy = 1
    return xr.where(short_lwma > long_lwma, buy, 0) * liquidity


# SINGLE-PASS
data = qndata.cryptodaily.load_data(min_date="2013-04-01")  # load data

weights = calculate_weights(data)
weights = qnout.clean(weights, data, 'crypto_daily_long')  # fix common errors

qnout.check(weights, data, 'crypto_daily_long')  # check that weights are correct.
qnout.write(weights)  # write results, necessary for submission.

statistics = qnstats.calc_stat(data, weights.sel(time=slice("2014-01-01", None)))  # calc stats
print(statistics.to_pandas().tail())

# import qnt.graph as qngraph
# qngraph.make_major_plots(statistics)  # works in Jupyter Notebook

# # MULTI-PASS

# import qnt.backtester as qnbt

# weights = qnbt.backtest(
#     competition_type='crypto_daily_long',  # Crypto Daily Long contest
#     lookback_period=365,  # lookback in calendar days
#     start_date="2014-01-01",
#     strategy=calculate_weights,
#     analyze=True,
#     build_plots=True
# )
```

> This example demonstrates how to use various data sources to predict the stock market. It leverages futures, stocks,
> and cryptocurrency data to build a strategy.

```python
# import os
# os.environ['API_KEY'] = "{your_api_key_here}"  # you may need it for local development

# Import basic libraries.
import xarray as xr
import pandas as pd
import numpy as np
# Import Quantiacs libraries.
import qnt.data as qndata  # load and manipulate data
import qnt.output as qnout  # manage output
import qnt.backtester as qnbt  # backtester
import qnt.stats as qnstats  # statistical functions for analysis
import qnt.graph as qngraph  # graphical tools
import qnt.ta as qnta  # indicators library
import qnt.xr_talib as xr_talib  # indicators library
import qnt.exposure as qnexp  # exposure calculation


def load_data(period):
    stocks = qndata.stocks.load_ndx_data(tail=period)
    futures = qndata.futures.load_data(tail=period, assets=["F_DX"]).isel(asset=0)
    futures = xr.align(futures, stocks.isel(field=0), join='right')[0]

    try:
        crypto = qndata.cryptodaily.load_data(tail=period, assets=["BTC"]).isel(asset=0)
        crypto = xr.align(crypto, stocks.isel(field=0), join='right')[0]
    except Exception as e:
        # Cryptocurrency data is not available in 2006.
        print(f"Failed to load crypto data: {e}")
        crypto = futures  # Fallback to futures data if crypto data loading fails

    return {"futures": futures, "stocks": stocks, "crypto": crypto}, stocks.time.values


def window(data, max_date: np.datetime64, lookback_period: int):
    min_date = max_date - np.timedelta64(lookback_period, "D")
    return {
        "futures": data["futures"].sel(time=slice(min_date, max_date)),
        "stocks": data["stocks"].sel(time=slice(min_date, max_date)),
        "crypto": data["crypto"].sel(time=slice(min_date, max_date)),
    }


def strategy(data):
    # close_futures = data["futures"].sel(field="close")
    close_crypto = data["crypto"].sel(field="close")
    close_stocks = data["stocks"].sel(field="close")

    # Generate buy signal if 20-day SMA < 50-day SMA, otherwise hold (0) or sell (-1)
    accuracy = 0.00001  # to avoid floating point errors
    weights_stocks = xr.where(qnta.sma(close_stocks, 20) < qnta.sma(close_stocks, 50) + accuracy, 1, 0)
    weights_crypto = xr.where(qnta.sma(close_crypto, 20) < qnta.sma(close_crypto, 60) + accuracy, 1, 0)
    weights = (weights_stocks + weights_crypto) / 2

    # Apply liquidity filter
    is_liquid = data["stocks"].sel(field="is_liquid")
    weights = weights * is_liquid

    # Normalize positions and cut big positions
    weights_sum = abs(weights).sum('asset')
    weights = xr.where(weights_sum > 1, weights / weights_sum, weights)
    weights = qnexp.cut_big_positions(weights=weights, max_weight=0.049)

    return weights


weights = qnbt.backtest(
    competition_type="stocks_nasdaq100",
    load_data=load_data,
    lookback_period=90,
    start_date="2005-12-30",
    strategy=strategy,
    window=window,
    check_correlation=False
)
```

## Cryptocurrency Hourly Data

Quantiacs provides up-to-date hourly data - price and volume - for the following cryptocurrencies:

```python
import qnt.data as qndata

crypto_data = qndata.crypto.load_data(tail=365 * 10)

['BCH', 'BTC', 'EOS', 'ETH', 'LTC', 'USDT', 'XRP']
```

| Number | Ticker | Full Name          |
|--------|--------|--------------------|
| 1      | BCH    | Bitcoin Cash       |
| 2      | BTC    | Bitcoin            |
| 3      | EOS    | EOS                |
| 4      | ETH    | Ethereum           |
| 5      | LTC    | Litecoin           |
| 6      | USDT   | Tether             |
| 7      | XRP    | XRP                |

## BTC Futures from spot price

For a more detailed description on loading and accessing BTC Futures consult our
API-Reference: [Loading BTC Futures Data](https://quantiacs.com/documentation/en/reference/data_load_functions.html#loading-bitcoin-futures-data)

The Bitcoin Futures data for the last 8 years (history extended with Bitcoin spot price) can be loaded using:

```python
import qnt.data as qndata

btc_data = qndata.cryptofutures.load_data(tail=365 * 8, dims=('time', 'field', 'asset'))
```