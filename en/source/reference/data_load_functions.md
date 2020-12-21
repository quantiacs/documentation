# Data loading

<p class="tip">
This section contains the detailed API reference documentation. It is intended for users who are already familiar with the Quantiacs platform. Fisrt-time users can start at the <a href="/documentation/en/quick_start/quick_start.html">Quick start</a> page.
</p>

## Assets

The available financial instruments with a brief information can be downloaded using the following function:

**Function**

```python
qnt.data.load_assets(
        min_date: tp.Union[str, datetime.date] = '2007-01-01',
        max_date: tp.Union[str, datetime.date, None] = None,
        tail: tp.Union[datetime.timedelta, None] = None)
```

**Parameters**

|Parameter|Explanation|
|---|---|
|min_date|first date in data|
|max_date|last date of data|
|tail|datetime.timedelta, tail size of data. min_date = max_date - tail|

**Output**

The output is the list of dicts with info for all tickers. For instance, the dict for 'IBIO INC' looks as follows:

```python
{'name': 'IBIO INC',
 'sector': 'Health Technology',
 'symbol': 'IBIO',
 'exchange': 'AMEX',
 'industry': 'Biotechnology',
 'id': 'AMEX:IBIO',
 'cik': '1420720',
 'FIGI': 'BBG000D5F2L9'}
```

**Example**

One can use it by setting the time interval:

```python
import qnt.data as qndata          # data loading and manipulation
assets = qndata.load_assets(min_date = '2015-01-01', max_date = '2018-01-01') # two boundaries

# one boundary
# assets = qndata.load_assets(min_date = '2018-01-01')
# assets = qndata.load_assets(max_date = '2020-01-01')
```

or load a fixed number of years:

```python
import qnt.data as qndata          # data loading and manipulation
assets = qndata.load_assets(tail = dt.timedelta(days=365*4))
```


## Market data

Market data can be loaded using:

**Function**

```python
qnt.data.load_data(
        assets: tp.List[tp.Union[dict,str]] = None,
        min_date: tp.Union[str, datetime.date] = '2007-01-01',
        max_date: tp.Union[str, datetime.date, None] = None,
        dims: tp.Tuple[str, str, str] = (ds.FIELD, ds.TIME, ds.ASSET),
        forward_order: bool = False,
        tail: tp.Union[datetime.timedelta, None] = None)
```

**Parameters**

|Parameter|Explanation|
|---|---|
|assets|list of ticker names to load|
|min_date|first date in data|
|max_date|last date of data|
|dims|tuple with ds.FIELD, ds.TIME, ds.ASSET in the specified order|
|forward_order|boolean, set true if you need the forward order of dates, otherwise the order is backward|
|tail|datetime.timedelta, tail size of data. min_date = max_date - tail|

**Output**

The output is an xarray DataArray with historical data for the selected assets:

|asset<br/>time|NASDAQ:AAPL<br/> |NASDAQ:GOOGL<br/> |
|---|---|---|
|2016-09-09|2929.92|798.77|
|2016-09-12|2874.20|784.52|
|2016-09-13|3010.28|794.01|
|2016-09-14|3044.44|787.53|
|2016-09-15|3188.08|790.01|

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

