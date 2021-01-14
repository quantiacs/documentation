# Cryptocurrencies

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
