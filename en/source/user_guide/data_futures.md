# Futures
Quantiacs provides data for 75 global futures contracts. The underlying assets are currency ratios, stock indices, bonds, and commodities from the world's futures exchanges.

##  List of futures
The information about available futures contracts can be obtained using:

```python
import qnt.data as qndata
future_list = qndata.load_futures_list()
```

For each futures, a brief information is provided:
```python
future_list[0]
```
```python
{'id': 'TY', 'name': '10-Year T-Note Futures'}
```

> You can find the complete list at this [link](https://quantiacs.io/documentation/ru/user_guide/futures_full_list.html).

##  Downloading the data

Suppose that we want to download the data for the last 5 years. We can use:

```python
import qnt.data as qndata
import datetime as dt

futures_data = qndata.load_futures_data(tail = dt.timedelta(days = 365*5),
                        forward_order = True)

futures_open = futures_data.sel(field="open")
futures_close = futures_data.sel(field="close")
futures_high = futures_data.sel(field="high")
futures_low = futures_data.sel(field="low")
volume_day = futures_datasel(field="vol")
open_interest = futures_data.sel(field="oi")
contracts_roll_over = futures_data.sel(field="roll")
```

| Data field | Description |
| ------------------ | -------- |
| open               | Opening daily price.|
| close              | Closing daily price. |
| high               | Highest daily price.|
| low                | Lowest daily price. |
| vol                | Daily trading volume in number of contracts.|
| oi                 | The total number of outstanding contracts.|
| roll              | Futures contracts rollover information.|

Let us say that we are interested in British pound futures. We can get the close price as follows:

```python
GBP_USD = fut_data.sel(asset = 'F_BP').sel(field = 'close')
```

For visualizing the data we can use:

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
