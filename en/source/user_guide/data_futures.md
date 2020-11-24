# Futures
Quantiacs provides data for 39 global derivatives. The underlying assets are currencies, cross-rates, indices, bonds, energy and metals from the world's futures exchanges.

##  List of futures
One can download information about available futures:

```python
import qnt.data as qndata
future_list = qndata.load_futures_list()
```

For each futures, brief information is provided:
```python
fut_list[0]
```
```python
{'id': 'ZN', 'name': '10-Year T-Note Futures'}
```

> You can find the complete list by the [link](https://quantiacs.io/documentation/ru/user_guide/futures_full_list.html)

##  Underlying Asset Data

Suppose we want to download the data for the last 5 years. One can use the following function:

```python
import qnt.data    as qndata
import datetime    as dt

futures_data = qndata.load_futures_data(tail = dt.timedelta(days = 5*365),
                        forward_order = True)

futures_open = futures_data.sel(field="open")
futures_close = futures_data.sel(field="close")
futures_high = futures_data.sel(field="high")
futures_low = futures_data.sel(field="low")
volume_day = futures_datasel(field="vol")
open_interest = futures_data.sel(field="oi")
contracts_roll_over = futures_data.sel(field="roll")
```

| Data labels | Description |
| ------------------ | -------- |
| open               | Price at the time of the opening of the exchange.|
| close              | Closing price. |
| high               | Highest daily price.|
| low                | Lowest price. |
| vol                | Daily trading volume. The number of trades executed per day.|
| oi                 | The number of futures contracts currently in circulation in the market.|
| roll              | Futures contracts Rollover.|

Let's say we are interested in British pound futures. They allow traders to assess the value of the pounds sterling against the US dollar, as well as the ability to reduce the risk of fluctuations in exchange rates in other foreign trade markets. [CME Globex](https://www.cmegroup.com/globex.html) futures code: 6B.

Thus, the array of interest with daily data on the currency pair at the close of the exchange looks like this:

```python
GBP_USD = fut_data.sel(asset = '6B').sel(field = 'close')
```

One might want to visualize the data.

```python
import plotly.graph_objs as go         # lib for charts
trend_fig = [
    go.Scatter(
        x = GBP_USD.to_pandas().index,
        y = GBP_USD,
        line = dict(width=1,color='black'))]

# draw chart
fig = go.Figure(data = trend_fig)
fig.update_yaxes(fixedrange=False) # unlock vertical scrolling
fig.show()
```

![GBP_USD](./pictures/GBD_USD.PNG)
