# Cryptocurrency
Quantiacs provides up-to-date data - transaction price and volume - for the following cryptocurrencies: 'BCH', 'BTC', 'EOS', 'ETH', 'LTC', 'USDT', 'XRP'. 
-------------

Let's download the available cryptocurrency data for the last 5 years:
```python
import qnt.data    as qndata
import datetime    as dt

crypto_data = qndata.load_cryptocurrency_data(tail = dt.timedelta(days = 5*365),
                        forward_order = True)
```

Available cryptocurrencies:
```python
crypto_data.asset
```
![crypto_asset](./pictures/crypto_asset.PNG)

For each of them hourly data is provided. It contains **5 parameters**:
```python
crypto_data.field
```
![crypto_field](./pictures/crypto_field.PNG)

| Data | Description |
| ------------------ | -------- |
| open               | Open is the price at which the cryptocurrency is traded for the first time during the corresponding hour.|
| close              | End of the hour price. |
| high               | Highest hourly price. |
| low                | Lowest hourly price. |
| vol                | Hourly trading volume. Expressed in the number of cryptocurrencies.|

Let's say we are interested in the highest hourly price for BTC:

```python
BTC_high = crypto_data.sel(field = 'high').sel(asset = 'BTC')
```

One can visualize data:

```python
import plotly.graph_objs as go         # lib for charts

trend_fig = [
    go.Scatter(
        x = BTC_high.to_pandas().index,
        y = BTC_high,
        line = dict(width=1,color='black'))]
# draw chart
fig = go.Figure(data = trend_fig)
fig.update_yaxes(fixedrange=False) # unlock vertical scrolling
fig.show()
```

![crypto_high](./pictures/crypto_high.PNG)


[This template](https://quantiacs.io/referee/template/14015755/html) implements the triangle method for cryptocurrency in detail. You can also use an [empty template](https://quantiacs.io/referee/template/13767170/html) for working with cryptocurrency.