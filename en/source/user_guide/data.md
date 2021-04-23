# Financial data
Quantiacs provides historical data for the world's major financial markets. Currently the dataset includes **futures** (including the Bitcoin futures) and **cryptocurrencies**. This section provides an overview of the data and a documentation for each set:

- [Futures](#futures)
- [Cryptocurrencies](#cryptocurrencies)

----

## Futures
Quantiacs provides data for 78 liquid global futures contracts. The underlying assets are commodities (energy, metals, agricultural goods) and financial assets: stock indices, bonds and currency rates. In addition it provides the Bitcoin futures contract, whose history is extended back in time by patching the futures data with the Bitcoin spot data.

###  List of Futures
The information about available futures contracts can be obtained using:

```python
import qnt.data as qndata
future_list = qndata.futures.load_list()
future_list
```

The command returns a list with all available futures contracts, with their identifying symbols and full names:

```python
futures = 
[{'id': 'F_AD', 'name': 'Australian Dollar'},
 {'id': 'F_AE', 'name': 'Aex Index'},
 {'id': 'F_AH', 'name': 'Bberg Commodity Index'},
 {'id': 'F_AX', 'name': 'DAX Index'},
 {'id': 'F_BC', 'name': 'Crude Oil Brent'},
 {'id': 'F_BG', 'name': 'ICE Gas Oil LS'},
 {'id': 'F_BO', 'name': 'Soybean Oil'},
 {'id': 'F_BP', 'name': 'British Pound'},
 {'id': 'F_C', 'name': 'Corn'},
 {'id': 'F_CA', 'name': 'CAC 40'},
 {'id': 'F_CC', 'name': 'Cocoa'},
 {'id': 'F_CD', 'name': 'Canadian Dollar'},
 {'id': 'F_CF', 'name': 'Eurex Conf Long-Term'},
 {'id': 'F_CL', 'name': 'Crude Oil WTI'},
 {'id': 'F_CT', 'name': 'Cotton #2'},
 {'id': 'F_DM', 'name': 'Mdax Index'},
 {'id': 'F_DT', 'name': 'Euro Bund'},
 {'id': 'F_DX', 'name': 'U.S. Dollar Index'},
 {'id': 'F_EB', 'name': 'Eurex 3Month EuriBor'},
 {'id': 'F_EC', 'name': 'Euro FX'},
 {'id': 'F_ED', 'name': 'Eurodollar'},
 {'id': 'F_ES', 'name': 'S&P 500 E-Mini'},
 {'id': 'F_F', 'name': '3-Month Euroswiss'},
 {'id': 'F_FB', 'name': 'Stoxx Banks 600'},
 {'id': 'F_FC', 'name': 'Feeder Cattle'},
 {'id': 'F_FP', 'name': 'OMX Helsinki 25'},
 {'id': 'F_FV', 'name': '5-Year T-Note'},
 {'id': 'F_FY', 'name': 'Stoxx Europe 600'},
 {'id': 'F_GC', 'name': 'Gold'},
 {'id': 'F_GS', 'name': '10-Year Long Gilt'},
 {'id': 'F_GX', 'name': 'Euro Buxl'},
 {'id': 'F_HG', 'name': 'High Grade Copper'},
 {'id': 'F_HO', 'name': 'ICE Heating Oil'},
 {'id': 'F_JY', 'name': 'Japanese Yen'},
 {'id': 'F_KC', 'name': 'Coffee'},
 {'id': 'F_LB', 'name': 'Lumber'},
 {'id': 'F_LC', 'name': 'Live Cattle'},
 {'id': 'F_LN', 'name': 'Lean Hogs'},
 {'id': 'F_LR', 'name': 'Brazilian Real'},
 {'id': 'F_LX', 'name': 'FTSE 100'},
 {'id': 'F_MD', 'name': 'S&P Midcap E-Mini'},
 {'id': 'F_MP', 'name': 'Mexican Peso'},
 {'id': 'F_ND', 'name': 'New Zealand Dollar'},
 {'id': 'F_NG', 'name': 'Natural Gas'},
 {'id': 'F_NQ', 'name': 'Nasdaq 100 E-Mini'},
 {'id': 'F_NR', 'name': 'Rough Rice'},
 {'id': 'F_NY', 'name': 'Nikkei 225'},
 {'id': 'F_O', 'name': 'Oats'},
 {'id': 'F_OJ', 'name': 'Orange Juice'},
 {'id': 'F_PA', 'name': 'Palladium'},
 {'id': 'F_PL', 'name': 'Platinum'},
 {'id': 'F_RB', 'name': 'Gasoline RBOB'},
 {'id': 'F_RF', 'name': 'Euro/Swiss'},
 {'id': 'F_RP', 'name': 'Euro/Pound'},
 {'id': 'F_RR', 'name': 'Russian Ruble'},
 {'id': 'F_RU', 'name': 'Russell 2000 E-Mini'},
 {'id': 'F_RY', 'name': 'Euro/Yen'},
 {'id': 'F_S', 'name': 'Soybean'},
 {'id': 'F_SB', 'name': 'Sugar #11'},
 {'id': 'F_SF', 'name': 'Swiss Franc'},
 {'id': 'F_SI', 'name': 'Silver'},
 {'id': 'F_SM', 'name': 'Soybean Meal'},
 {'id': 'F_SS', 'name': '3-Month Sterling'},
 {'id': 'F_SX', 'name': 'Swiss Market Index'},
 {'id': 'F_TR', 'name': 'South African Rand'},
 {'id': 'F_TU', 'name': '2-Year T-Note'},
 {'id': 'F_TY', 'name': '10-Year T-Note'},
 {'id': 'F_UB', 'name': 'Euro Bobl'},
 {'id': 'F_US', 'name': 'T-Bond'},
 {'id': 'F_UZ', 'name': 'Euro Schatz'},
 {'id': 'F_VX', 'name': 'S&P 500 VIX'},
 {'id': 'F_W', 'name': 'Wheat'},
 {'id': 'F_XX', 'name': 'Stoxx 50'},
 {'id': 'F_YM', 'name': 'Dow Futures Mini'},
 {'id': 'F_ZQ', 'name': '30-Day Fed Funds'},
 {'id': 'F_DE', 'name': 'MSCI EMI Index'},
 {'id': 'F_NH', 'name': 'SGX CNX Nifty Index'},
 {'id': 'F_QT', 'name': 'Chinese Renminbi'}]
```

###  Using the Data

Suppose that we want to use in a strategy the data for the last 15 years. We can use:

```python
import qnt.data as qndata

futures_data = qndata.futures.load_data(tail = 365*15, dims = ("time", "field", "asset"))
```

The variable **futures_data** is an xarray.DataArray structure whose coordinates are: 

* **time**: a date in format yyyy-mm-dd;
* **field**: an attribute, for example the opening daily price;
* **asset**: the identifying symbol for the asset, for example **F_BP** for the British Pound/US Dollar ratio.

![coords](./pictures/coords.png)


Specific fields can be extracted using:

```python
futures_open  = futures_data.sel(field="open")
futures_close = futures_data.sel(field="close")
futures_high  = futures_data.sel(field="high")
futures_low   = futures_data.sel(field="low")

volume_day    = futures_data.sel(field="vol")
open_interest = futures_data.sel(field="oi")

contracts_roll_over = futures_data.sel(field="roll")
```

| Data field | Description |
| ------------------ | -------- |
| open               | Opening daily price.|
| close              | Closing daily price. |
| high               | Highest daily price.|
| low                | Lowest daily price. |
| vol                | Daily trading volume (number of contracts).|
| oi                 | Total number of outstanding contracts.|
| roll              | Futures contract rollover information.|

Values for specific contracts can be obtained selecting the asset. Let us say that we are interested in British pound futures. We can get the close price as follows:

```python
GBP_USD = futures_data.sel(asset = 'F_BP').sel(field = 'close')
```

For visualizing the data we can use for example the plotly library [https://plotly.com/](https://plotly.com/):

```python
import plotly.graph_objs as go

trend_fig = [go.Scatter(
    x = GBP_USD.to_pandas().index,
    y = GBP_USD,
    line = dict(width=1, color='black'))]

fig = go.Figure(data = trend_fig)
fig.update_yaxes(fixedrange=False)
fig.show()
```

![GBP_USD](./pictures/GBP_USD.PNG)

###  Using the BTC Futures

The Bitcoin Futures data for the last 8 years (history extended with Bitcoin spot price) can be loaded using:

```python
import qnt.data as qndata

btc_data = qndata.cryptofutures.load_data(tail = 365*8, dims = ("time", "field", "asset"))
```

### Front Contracts and Different Maturity Contracts

As several Futures contracts with the same underlying instrument but different expiration dates (maturities) are traded on financial exchange at the same time, we provide the option to load continuous front contracts (closest expiration date), next-to-front contracts (next-to-closest expiration date) and next-to-next-to-front contracts (next-to-next-to-closest expiration date):

```python
front_data                 = qndata.futures.load_data(min_date="1900-01-01", offset=0)
next_to_front_data         = qndata.futures.load_data(min_date="1900-01-01", offset=1)
next_to_next_to_front_data = qndata.futures.load_data(min_date="1900-01-01", offset=2)
```
Note that the default choice (no offset specified) selects front contracts. All three options are continuous contracts, obtained by patching together the single Futures contracts.

All three continuos contracts can be used as indicators, but only the front contracts will be used for the backtesting and real trading.

### Spot Currency Data

Currency rates taken from the [International Monetary Fund](https://www.imf.org/en/Home) page can be inspected using:

```python
import pandas as pd
import qnt.data as qndata
currency_list = qndata.imf_load_currency_list()
pd.DataFrame(currency_list)
```

which returns the list for 39 time series:

![fx](./pictures/fx.png)

Data for each time series can be loaded using:
```python
euro_currency = qndata.imf_load_currency_data(assets=['EUR'], tail=365 * 5)
```

### Spot Commodity Data

Commodity data taken from the [International Monetary Fund](https://www.imf.org/en/Home) page can be inspected using:

```python
import pandas as pd
import qnt.data as qndata
commodity_list = qndata.imf_load_commodity_list()
pd.DataFrame(commodity_list)
```

which returns the list for 76 time series:

![fx](./pictures/commos.png)

Data for each time series can be loaded using:
```python
gold = qndata.imf_load_commodity_data(assets=['PGOLD'], tail=365)
```
----

## Cryptocurrencies

Quantiacs provides up-to-date hourly data - price and volume - for the following cryptocurrencies: 

* Bitcoin (BTC); 
* Bitcoin Cash (BCH);
* EOS;
* Ethereum (ETH);
* Litecoin (LTC);
* Ripple (XRP);
* Tether (USDT). 

The available cryptocurrency data for the last 5 years can be loaded using:
```python
import qnt.data as qndata

crypto_data = qndata.crypto.load_data(tail = 365 * 5)
```

The list of available cryptocurrencies can be obtained writing:
```python
crypto_data.asset
```
![crypto_asset](./pictures/crypto_asset.PNG)

For each cryptocurrency data are available on an hourly resolution. **crypto_data** is an xarray.DataArray structure whose coordinates are:

* **time**: a date-time in format yyyy-mm-ddTHH-MM-SS;
* **field**: an attribute, for example the opening hourly price;
* **asset**: the identifying symbol for the asset, for example ETH for Ethereum.

![crypto_coords](./pictures/coords_cry.png)

Specific fields are given by:

| Data field | Description |
| ------------------ | -------- |
| open               | First price in a given hour.|
| close              | Last price in a given hour. |
| high               | Highest price in a given hour. |
| low                | Lowest price in a given hour. |
| vol                | Hourly trading volume.|

Let us say that we are interested in the highest hourly price for BTC. We can extract it using:

```python
BTC_high = crypto_data.sel(field = 'high').sel(asset = 'BTC')
```

The data can be visualized using:

```python
import plotly.graph_objs as go

trend_fig = [go.Scatter(
    x = BTC_high.to_pandas().index,
    y = BTC_high,
    line = dict(width=1,color='black'))]

fig = go.Figure(data = trend_fig)
fig.update_yaxes(fixedrange=False)
fig.show()
```

![crypto_high](./pictures/crypto_high.PNG)


