# Cryptocurrencies

Quantiacs provides up-to-date data - transaction price and volume - for the following cryptocurrencies: Bitcoin (BTC), Bitcoin Cash (BCH), EOS, Ethereum (ETH), Litecoin (LTC),  Tether (USDT) and Ripple (XRP). 

The available cryptocurrency data for the last 5 years can be downloaded using:
```python
import qnt.data    as qndata
import datetime    as dt

crypto_data = qndata.load_cryptocurrency_data(tail = dt.timedelta(days = 365 * 5),
                        forward_order = True)
```

The list of available cryptocurrencies can be obtained as:
```python
crypto_data.asset
```
![crypto_asset](./pictures/crypto_asset.PNG)

For each of them hourly data is provided. It contains **5 parameters**:
```python
crypto_data.field
```
![crypto_field](./pictures/crypto_field.PNG)

| Data field | Description |
| ------------------ | -------- |
| open               | First price in the selected hour.|
| close              | Last price in the selected hour. |
| high               | Highest hourly price. |
| low                | Lowest hourly price. |
| vol                | Hourly trading volume in the related cryptocurrency value.|

Let us say that we are interested in the highest hourly price for BTC. We can use:

```python
BTC_high = crypto_data.sel(field = 'high').sel(asset = 'BTC')
```

Data can be visualized using:

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
