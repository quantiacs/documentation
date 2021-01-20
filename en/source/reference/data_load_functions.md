# Data loading

<p class="tip">
This section contains the detailed API reference documentation. It is intended for users who are already familiar with the Quantiacs platform. Fisrt-time users can start at the <a href="/documentation/en/quick_start/quick_start.html">Quick start</a> page.
</p>

## Inspecting the list of Futures

The available futures financial instruments can be inspected using the following function:

**Function**

```python
import qnt
qnt.data.futures.load_list()
```

**Output**

The output is a list of dictionaries with info on ticker symbols and assets:

```python
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
 {'id': 'F_ZQ', 'name': '30-Day Fed Funds'}]
```


## Loading Futures Data

Futures data can be loaded using:

**Function**

```python
import qnt
qnt.futures.load_data(assets = None, min_date = None, max_date = None, dims = ("field", "time", "asset"),
    forward_order = True, tail = 365 * 6)
```

**Parameters**

|Parameter|Explanation|
|---|---|
|assets|list of ticker names to load, example: ["F_AD", "F_BO"]. Default None value loads all assets.|
|min_date|first date in data, example "2006-01-01". Default None value uses max_date-tail.|
|max_date|last date of data. Default None value is current day.|
|dims|tuple with "field", "time", "asset" attributes in the specified order.|
|forward_order|boolean, default True value orders date in ascending order|
|tail| calendar days, min_date = max_date - tail. Default value is 6 years, 365 * 6.|

**Output**

The output is an xarray.DataArray with historical data for the selected assets. Coordinates are:



**Example**

One can load market data for Apple Inc and Google Inc for the past 4 years:

```python
import qnt.data as qndata          # data loading and manipulation
data = qnt.data.load_data(tail = dt.timedelta(days=365*4),
                        dims=("time", "field", "asset"),
                        assets=['NASDAQ:AAPL', 'NASDAQ:GOOGL'],
                        forward_order=True)
```

```python
open_price = data.sel(field = 'open')
close_price = data.sel(field = 'close')
low_price = data.sel(field = 'low')
high_price = data.sel(field = 'high')

open_price.to_pandas().head()
```

|asset<br/>time|NASDAQ:AAPL<br/> |NASDAQ:GOOGL<br/> |
|---|---|---|
|2016-09-09|2929.92|798.77|
|2016-09-12|2874.20|784.52|
|2016-09-13|3010.28|794.01|
|2016-09-14|3044.44|787.53|
|2016-09-15|3188.08|790.01|


## Fundamental data

**Function**

```python
qnt.data.secgov_load_indicators(assets, time_coord, standard_indicators=None, builders = None,
                           start_date_offset = datetime.timedelta(days=365*2),
                           fill_strategy=lambda xarr: xarr.ffill('time'))
```

**Parameters**

|Parameter|Explanation|
|---|---|
|assets|the list of dicts with info for the desired tickers|
|time_coord|xarray DataArray with the time interval|
|standard_indicators|the list of standard fundamental indicators|
|builders|list of IndicatorBuilder or PeriodIndicatorBuilder classes. This parameter is designed for the custom uploading of the sec.gov facts|
|start_date_offset|datetime.timedelta, tail size of data. min_date = max_date - tail|
|fill_strategy|function, filling strategy|

**Output**

The output is an xarray DataArray with historical fundamental data.

**Example**

Data can be loaded in two ways.

The first way is just to list the desired data labels.

```python
data_lbls = ['assets', 'liabilities']
# One can load corresponding data
fun_data1 = qnt.data.secgov_load_indicators(assets, time_coord = data.time, standard_indicators = data_lbls)
```

The second way to load the fundamental data is more complicated but it gives to the user more options. Each report for the [Securities and Exchange Commission](https://www.sec.gov/) contains facts that are listed [here](http://xbrlview.fasb.org/yeti/). There are instant indicators which are updated regularly within each report:

```python
instant_data_list = [InstantIndicatorBuilder('assets' , ['us-gaap:Assets'], True),
                     InstantIndicatorBuilder('liabilities', ['us-gaap:Liabilities'], True),
                    InstantIndicatorBuilder('shares', ['us-gaap:CommonStockSharesOutstanding',
                                                       'us-gaap:CommonStockSharesIssued'], True)]
```

Other indicators are periodic, like operating expenses and sales. For periodic indicators, you can receive information with the quarter, annual frequency, or 'last twelve month' value. For these purposes use 'qf','af' or 'ltm':

```python
period_data_list = [PeriodIndicatorBuilder('operating_expense', ['us-gaap:OperatingExpenses'], True, 'qf'),
                   PeriodIndicatorBuilder('sales_revenue', ['us-gaap:SalesRevenueGoodsNet',
                                                            'us-gaap:SalesRevenueNet',
                                                            'us-gaap:RevenueFromContractWithCustomerIncludingAssessedTax'
                                                           ], True, 'af'),
                    PeriodIndicatorBuilder('sga_expense', ['us-gaap:SellingGeneralAndAdministrativeExpense'], True, 'ltm')]
```

