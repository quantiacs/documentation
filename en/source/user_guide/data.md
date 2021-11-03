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
[{'id': 'F_AE',
  'name': 'AEX Index',
  'sector': 'Index',
  'point_value': 'EUR 200'},
  ...,
  {'id': 'F_ES',
   'name': 'S&P 500 ETF TRUST ETF',
   'sector': 'Index',
   'point_value': '1'}]
```


<details>
  <summary>Expand for full list</summary>

```python
[{'id': 'F_AE',
  'name': 'AEX Index',
  'sector': 'Index',
  'point_value': 'EUR 200'},
 {'id': 'F_AH',
  'name': 'Bloomberg Commodity',
  'sector': 'Index',
  'point_value': '$250'},
 {'id': 'F_AX',
  'name': 'DAX Index',
  'sector': 'Index',
  'point_value': 'EUR 25'},
 {'id': 'F_BC',
  'name': 'Crude Oil Brent',
  'sector': 'Energy',
  'point_value': '$1,000'},
 {'id': 'F_BG',
  'name': 'ICE Gas Oil LS',
  'sector': 'Energy',
  'point_value': '$100'},
 {'id': 'F_C',
  'name': 'Corn',
  'sector': 'Agriculture',
  'point_value': 'EUR 50'},
 {'id': 'F_CA', 'name': 'CAC 40', 'sector': 'Index', 'point_value': 'EUR 10'},
 {'id': 'F_CC',
  'name': 'Cocoa',
  'sector': 'Agriculture',
  'point_value': '$10'},
 {'id': 'F_CF',
  'name': 'Eurex Conf Long-Term',
  'sector': 'Bond',
  'point_value': 'CHF 1,000'},
 {'id': 'F_CT',
  'name': 'Cotton #2',
  'sector': 'Agriculture',
  'point_value': '$500'},
 {'id': 'F_DE',
  'name': 'MSCI EMI Index',
  'sector': 'Index',
  'point_value': '$50'},
 {'id': 'F_DM',
  'name': 'MDAX Index',
  'sector': 'Index',
  'point_value': 'EUR 5'},
 {'id': 'F_DT',
  'name': 'Euro Bund',
  'sector': 'Bond',
  'point_value': 'EUR 1,000'},
 {'id': 'F_DX',
  'name': 'U.S. Dollar Index',
  'sector': 'Currency',
  'point_value': '$1,000'},
 {'id': 'F_EB',
  'name': 'Eurex 3Month EuriBor',
  'sector': 'InterestRate',
  'point_value': 'EUR 2,500'},
 {'id': 'F_ED',
  'name': 'LIFFE EuroDollar',
  'sector': 'InterestRate',
  'point_value': '$2,500'},
 {'id': 'F_F',
  'name': '3-Month Euroswiss',
  'sector': 'InterestRate',
  'point_value': 'CHF 2,500'},
 {'id': 'F_FB',
  'name': 'Stoxx Banks 600',
  'sector': 'Index',
  'point_value': 'EUR 50'},
 {'id': 'F_FP',
  'name': 'OMX Helsinki 25',
  'sector': 'Index',
  'point_value': 'EUR 10'},
 {'id': 'F_FY',
  'name': 'Stoxx Europe 600',
  'sector': 'Index',
  'point_value': 'EUR 50'},
 {'id': 'F_GC',
  'name': 'ICE Gold 100-oz',
  'sector': 'Metal',
  'point_value': '$100'},
 {'id': 'F_GS',
  'name': '10-Year Long Gilt',
  'sector': 'Bond',
  'point_value': 'GBP 1,000'},
 {'id': 'F_GX',
  'name': 'Euro Buxl',
  'sector': 'Bond',
  'point_value': 'EUR 1,000'},
 {'id': 'F_HG',
  'name': 'HKFE Copper CNH',
  'sector': 'Metal',
  'point_value': 'RMB 5'},
 {'id': 'F_HO',
  'name': 'ICE Heating Oil',
  'sector': 'Energy',
  'point_value': '$42,000'},
 {'id': 'F_KC',
  'name': 'Coffee',
  'sector': 'Agriculture',
  'point_value': '$375'},
 {'id': 'F_LX',
  'name': 'FTSE 100',
  'sector': 'Index',
  'point_value': 'GBP 10'},
 {'id': 'F_NG',
  'name': 'ICE UK Natural Gas',
  'sector': 'Energy',
  'point_value': 'GBP 1,000'},
 {'id': 'F_NH',
  'name': 'SGX CNX Nifty Index',
  'sector': 'Index',
  'point_value': '$20'},
 {'id': 'F_OJ',
  'name': 'Orange Juice',
  'sector': 'Agriculture',
  'point_value': '$150'},
 {'id': 'F_RB',
  'name': 'Tocom Gasoline',
  'sector': 'Energy',
  'point_value': 'JPY 50'},
 {'id': 'F_RU',
  'name': 'Russell 2000 E-Mini',
  'sector': 'Index',
  'point_value': '$50'},
 {'id': 'F_SB',
  'name': 'Sugar #11',
  'sector': 'Agriculture',
  'point_value': '$1,120'},
 {'id': 'F_SI',
  'name': 'ICE Silver 5000-oz',
  'sector': 'Metal',
  'point_value': '$5,000'},
 {'id': 'F_SS',
  'name': '3-Month Sterling',
  'sector': 'InterestRate',
  'point_value': 'GBP 1,250'},
 {'id': 'F_SX',
  'name': 'Swiss Market Index',
  'sector': 'Index',
  'point_value': 'CHF 10'},
 {'id': 'F_UB',
  'name': 'Euro Bobl',
  'sector': 'Bond',
  'point_value': 'EUR 1,000'},
 {'id': 'F_UZ',
  'name': 'Euro Schatz',
  'sector': 'Bond',
  'point_value': 'EUR 1,000'},
 {'id': 'F_VX',
  'name': 'S&P 500 VIX',
  'sector': 'Index',
  'point_value': '$1,000'},
 {'id': 'F_W',
  'name': 'Milling Wheat',
  'sector': 'Agriculture',
  'point_value': 'EUR 50'},
 {'id': 'F_XX',
  'name': 'Stoxx 50',
  'sector': 'Index',
  'point_value': 'EUR 10'},
 {'id': 'F_AD',
  'name': 'Australian Dollar',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_BP',
  'name': 'British Pound',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_CD',
  'name': 'Canadian Dollar',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_EC', 'name': 'Euro', 'sector': 'Currency', 'point_value': '1'},
 {'id': 'F_JY',
  'name': 'Japanese Yen',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_MP',
  'name': 'Mexican Peso',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_SF',
  'name': 'Swiss Frank',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_LR',
  'name': 'Brazilian Real',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_ND',
  'name': 'New Zealand Dollar',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_QT',
  'name': 'Chinese Yuan',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_RF',
  'name': 'Euro / Swiss Franc',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_RP',
  'name': 'Euro / British Pound',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_RR',
  'name': 'Russian Ruble',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_RY',
  'name': 'Euro / Japanese Yen',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_TR',
  'name': 'South African Rand',
  'sector': 'Currency',
  'point_value': '1'},
 {'id': 'F_BO',
  'name': 'WisdomTree Soybean Oil',
  'sector': 'Agriculture',
  'point_value': '1'},
 {'id': 'F_CL',
  'name': 'United States Oil Fund',
  'sector': 'Energy',
  'point_value': '1'},
 {'id': 'F_FV',
  'name': 'BTC iShares 3-7 Year Treasury Bond ETF',
  'sector': 'Bond',
  'point_value': '1'},
 {'id': 'F_MD',
  'name': 'iShares Core S&P Mid-Cap ETF',
  'sector': 'Index',
  'point_value': '1'},
 {'id': 'F_NQ',
  'name': 'Invesco QQQ Trust Series 1',
  'sector': 'Index',
  'point_value': '1'},
 {'id': 'F_PA',
  'name': 'Aberdeen Standard Physical Palladium Shares ETF',
  'sector': 'Metal',
  'point_value': '1'},
 {'id': 'F_PL',
  'name': 'Aberdeen Standard Physical Platinum Shares ETF',
  'sector': 'Metal',
  'point_value': '1'},
 {'id': 'F_TU',
  'name': 'BTC iShares 1-3 Year Treasury Bond ETF',
  'sector': 'Bond',
  'point_value': '1'},
 {'id': 'F_TY',
  'name': 'BTC iShares 7-10 Year Treasury Bond ETF',
  'sector': 'Bond',
  'point_value': '1'},
 {'id': 'F_US',
  'name': 'BTC iShares U.S. Treasury Bond ETF',
  'sector': 'Bond',
  'point_value': '1'},
 {'id': 'F_YM',
  'name': 'SPDR Dow Jones Industrial Average ETF',
  'sector': 'Index',
  'point_value': '1'},
 {'id': 'F_S',
  'name': 'WisdomTree Soybeans',
  'sector': 'Agriculture',
  'point_value': '1'},
 {'id': 'F_NY',
  'name': 'iShares MSCI Japan ETF',
  'sector': 'Index',
  'point_value': '1'},
 {'id': 'F_AG',
  'name': 'Invesco DB Agriculture Fund',
  'sector': 'Agriculture',
  'point_value': '1'},
 {'id': 'F_ES',
  'name': 'S&P 500 ETF TRUST ETF',
  'sector': 'Index',
  'point_value': '1'}]
```
</details>

###  Using the Data

Suppose that we want to use the data for the last 15 years. We can use:

```python
import qnt.data as qndata

futures_data = qndata.futures.load_data(tail = 365*15, dims = ('time', 'field', 'asset'))
futures_data
```

The variable **futures_data** is an xarray.DataArray structure whose coordinates are:

* **time**: a date in format yyyy-mm-dd;
* **asset**: the identifying symbol for the asset, for example **F_BP** for the British Pound/US Dollar ratio.
* **field**: an attribute, for example the opening daily price;

![coords](./pictures/coords.png)

Specific fields are given by:

| Data field | Description |
| ------------------ | -------- |
| open               | Opening daily price.|
| close              | Closing daily price. |
| high               | Highest daily price.|
| low                | Lowest daily price. |
| vol                | Daily trading volume (number of contracts).|
| oi                 | Total number of outstanding contracts.|
| roll              | Futures contract rollover information.|

More details on xarray can be found at [User Guide xarray](https://quantiacs.com/documentation/en/user_guide/xarray.html)

An example of accessing the daily open prices for each asset:
```Python
futures_data.sel(field='open')
```
![open](./pictures/open.png)

All specific fields can be accessed this way.


Values for **specific contracts** can be obtained selecting the asset. Let us say we are interested in British pound futures. We can get the close price as follows:

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

For a more detailed description on loading and accessing Futures data consult our API-Reference: [Loading Futures Data](https://quantiacs.com/documentation/en/reference/data_load_functions.html#loading-futures-data)


###  Using the BTC Futures

The Bitcoin Futures data for the last 8 years (history extended with Bitcoin spot price) can be loaded using:

```python
import qnt.data as qndata

btc_data = qndata.cryptofutures.load_data(tail = 365*8, dims = ('time', 'field', 'asset'))
```
For a more detailed description on loading and accessing BTC Futures consult our API-Reference: [Loading BTC Futures Data](https://quantiacs.com/documentation/en/reference/data_load_functions.html#loading-bitcoin-futures-data)
### Front Contracts and Different Maturity Contracts

As several Futures contracts with the same underlying instrument but different expiration dates (maturities) are traded on financial exchange at the same time, we provide the option to load continuous front contracts (closest expiration date), next-to-front contracts (next-to-closest expiration date) and next-to-next-to-front contracts (next-to-next-to-closest expiration date):

```python
front_data                 = qndata.futures.load_data(min_date='1900-01-01', offset=0)
next_to_front_data         = qndata.futures.load_data(min_date='1900-01-01', offset=1)
next_to_next_to_front_data = qndata.futures.load_data(min_date='1900-01-01', offset=2)
```
Note that the default choice (no offset specified) selects front contracts. All three options are continuous contracts, obtained by patching together the single Futures contracts.

All three continuous contracts can be used as indicators, but only the front contracts will be used for the backtesting and real trading.

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

Data for each time series can be loaded using (for example last 5 years):
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

Data for each time series can be loaded using (for example last year):
```python
gold = qndata.imf_load_commodity_data(assets=['PGOLD'], tail=365)
```
----

## Cryptocurrencies

### Cryptocurrency Daily Data
Quantiacs provides up-to-date daily data for 54 cryptocurrencies.
<details>
  <summary>Expand for a full list of all available cryptocurrencies</summary>

  ```python
  ['ADA', 'AUR', 'AVAX', 'BCH', 'BCN', 'BLK', 'BNB', 'BSV', 'BTC', 'BTG',
       'BTS', 'DASH', 'DGC', 'DGD', 'DOGE', 'DOT', 'EOS', 'ETC', 'ETH', 'FCT',
       'FRC', 'FTC', 'GNT', 'ICP', 'IFC', 'IXC', 'LINK', 'LSK', 'LTC', 'MAID',
       'MNC', 'NEO', 'NMC', 'NXT', 'OMNI', 'PPC', 'QRK', 'REP', 'SOL', 'STEEM',
       'STRAX', 'THETA', 'TRC', 'TRX', 'UNI', 'WAVES', 'WDC', 'XCP', 'XEM',
       'XLM', 'XMR', 'XPM', 'XPY', 'XRP']
  ```
</details>

The available cryptocurrency data for the last 5 years can be loaded using:

```python
import qnt.data as qndata

crypto_data = qndata.cryptodaily.load_data(tail = 365 * 5)
```
For each cryptocurrency data is available on an daily resolution. **crypto_data** is an xarray.DataArray structure whose coordinates are:

* **time**: a date-time in format yyyy-mm-dd;
* **asset**: the identifying symbol for the asset, for example ETH for Ethereum.
* **field**: an attribute, for example the opening hourly price;


![crypto coords](./pictures/crypto_coord_daily.png)

Specific fields are given by:

| Data field | Description |
| ------------------ | -------- |
| open               | Opening daily price.|
| close              | Closing daily price. |
| high               | Highest daily price.|
| low                | Lowest daily price. |
| is_liquid          | Is this cryptocurrency liquid? |

Let us say we are interested in the lowest daily price for BTC. We can extract it using:
```Python
crypto_data.sel(field = 'low').sel(asset = 'BTC')
```
![BTC low](./pictures/BTC_low_daily.png)


For a more detailed description on loading and accessing Crypto Daily data consult our API-Reference: [Loading Crypto Daily Data](https://quantiacs.com/documentation/en/reference/data_load_functions.html#loading-cryptocurrency-daily-data)



### Cryptocurrency Hourly Data
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

For each cryptocurrency data are available on an hourly resolution. **crypto_data** is an xarray.DataArray structure whose coordinates are:

* **time**: a date-time in format yyyy-mm-ddTHH-MM-SS;
* **asset**: the identifying symbol for the asset, for example ETH for Ethereum;
* **field**: an attribute, for example the opening hourly price;


![crypto_coords](./pictures/coords_cry.png)

Specific fields are given by:

| Data field | Description |
| ------------------ | -------- |
| open               | First price in a given hour.|
| close              | Last price in a given hour. |
| high               | Highest price in a given hour. |
| low                | Lowest price in a given hour. |
| vol                | Hourly trading volume.|

Let us say we are interested in the highest hourly price for BTC. We can extract it using:

```python
BTC_high = crypto_data.sel(field = 'high').sel(asset = 'BTC')
BTC_high
```
![BTC high hourly](./pictures/BTC_high_hourly.png)


The BTC_high data can then be visualized using:

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

For a more detailed description on loading and accessing Crypto Hourly data consult our API-Reference: [Loading Crypto Hourly Data](https://quantiacs.com/documentation/en/reference/data_load_functions.html#loading-cryptocurrency-hourly-data)
