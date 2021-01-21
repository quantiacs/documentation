# Operators

## xarray

We have based our library on xarray, an open source project and Python package that makes working with labelled multi-dimensional arrays simple and efficient. The full documentation can be found at [https://xarray.pydata.org/en/stable/](https://xarray.pydata.org/en/stable/).

The basic data structure we use is an xarray.DataArray, a labelled multi-dimensional array whose key properties are:

* **values**: a numpy.ndarray holding the array’s values;
* **dims**: dimension names for each axis;
* **coords**: a dict-like container of arrays (coordinates) that label each point (e.g., 1-dimensional arrays of numbers, datetime objects or strings);
* **attrs**: a dict to hold arbitrary metadata (attributes).

Let us consider a specific example:

```python
import qnt.data as qndata
futures = qndata.futures.load_data(min_date="2006-01-01")
futures.dims
```

The output is a tuple:

```python
('field', 'time', 'asset')
```

The most common operation is to select a specific **field** as follows:

```python
close_price = futures.sel(field='close')
```
which will return a structure similar to a pandas DataFrame: a two-by-two matrix with the time coordinate on the y-axis, in ascending order, and the values of the close for all assets on the x-axis.

These data structures can be used for building indicators. 

Arithmetic operations with a single xarray.DataArray automatically vectorize (like numpy) over all array values:

```python
close_price_100 = close_price/100.0
```

You can also use any of numpy’s or scipy’s many [ufunc](https://numpy.org/doc/stable/reference/ufuncs.html) functions directly on a DataArray:

```python
import numpy
numpy.log(close_price)
```

The file **qnt/xr_talib.py** contains many technical indicators, for example:

```python
import qnt.xr_talib as talib
close_price_sma= talib.SMA(close_price, 2)
```

Optimized version of the indicators based on [numba](https://numba.pydata.org/) can be found in the **qnt/ta** folder, for example:

```python
import qnt.ta as qnta
close_price_sma= qnta.sma(close_price, 2)
```

## pandas

Here we describe how to work with [pandas](https://pandas.pydata.org/) data structures.

The first step consists in converting the sliced xarray.DataArray into a pandas.DataFrame:

```python
import qnt.data as qntdata
data = qntdata.futures.load_data(tail=365*15)
close= data.sel(field="close").to_pandas()
```

We can then compute an indicator using standard pandas methods:

```python
close_sma = ((close-close.shift(10))/close.shift(10)).rolling(30).mean()
```
and define our normalized weights to be:

```python
norm = abs(close_sma).sum(axis=1)
weights= close_sma.div(norm, axis=0)
```
The final conversion to an xarray.DataArray can be performed simply with:

```python
final_weights = weights.unstack().to_xarray()
```

In the following table we show some useful wrapper functions for working with pandas structures:

<table>
<tr>
<th>
Operator
</th>
<th>
Python
</th>
</tr>

<tr>
<td>
<pre>
ts_sum(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_sum(df, window=20):
    """
    Computes the sum of the values on a rolling basis.
    :param df: pandas.DataFrame.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the sum of the values over the past 'window' days.
    """
    return df.rolling(window).sum()
</pre>
</td>

<tr>
<td>
<pre>
sma(df, window)<br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def sma(df, window=20):
    """
    Computes the simple moving average.
    :param df: pandas.DataFrame.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the sma over the past 'window' days.
    """
    return df.rolling(window).mean()

</pre>
</td>


<tr>
<td>
<pre>
stddev(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def stddev(df, window=20):
    """
    Computes the standard deviation on a rolling basis.
    :param df: pandas.DataFrame.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the stddev over the past 'window' days.
    """
    return df.rolling(window).std()
</pre>
</td>

<tr>
<td>
<pre>
correlation(x, y, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def correlation(x, y, window=20):
    """
    Computes correlation on a rolling basis.
    :params x,y: pandas.DataFrames.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the time-series of the column-wise correlation between x and y over the past 'window' days.
    """
    return x.rolling(window).corr(y)
</pre>
</td>


<tr>
<td>
<pre>
covariance(x, y, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def covariance(x, y, window=20):
    """
    Computes covariance on a rolling basis.
    :params x,y: pandas.DataFrames.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the time-series of the column-wise covariance between x and y over the past 'window' days.
    """
    return x.rolling(window).cov(y)
</pre>
</td>


<tr>
<td>
<pre>
rolling_rank(na)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def rolling_rank(na):
    """
    Auxiliary function for ts_rank.
    :param na: numpy array.
    :return: The rank of the last value in the array.
    """
    import scipy.stats
    return scipy.stats.rankdata(na)[-1]
</pre>
</td>


<tr>
<td>
<pre>
ts_rank(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_rank(df, window=20):
    """
    Computes the rank on a rolling basis.
    :param df: a pandas.DataFrame.
    :param window: the rolling window used for the computation.
    :return: a pandas.DataFrame with the rank over the past window days.
    """
    return df.rolling(window).apply(rolling_rank)
</pre>
</td>


<tr>
<td>
<pre>
rolling_prod(na)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def rolling_prod(na):
    """
    Auxiliary function for ts_prod.
    :param na: numpy array.
    :return: The product of the values in the array.
    """
    import numpy
    return numpy.prod(na)
</pre>
</td>


<tr>
<td>
<pre>
product(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def product(df, window=20):
    """
    Computes the product on a rolling basis.
    :param df: a pandas.DataFrame.
    :param window: the rolling window used for the computation.
    :return: a pandas DataFrame with the product over the past 'window' days.
    """
    return df.rolling(window).apply(rolling_prod)
</pre>
</td>


<tr>
<td>
<pre>
ts_min(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_min(df, window=20):
    """
    Computes the minimum on a rolling basis.
    :param df: a pandas.DataFrame.
    :param window: the rolling window.
    :return: a pandas DataFrame with the minimum over the past 'window' days.
    """
    return df.rolling(window).min()
</pre>
</td>


<tr>
<td>
<pre>
ts_max(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_max(df, window=20):
    """
    Computes the maximum on a rolling basis.
    :param df: a pandas.DataFrame.
    :param window: the rolling window.
    :return: a pandas DataFrame with the maximum over the past 'window' days.
    """
    return df.rolling(window).max()
</pre>
</td>


<tr>
<td>
<pre>
delta(df, period)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def delta(df, period=1):
    """
    Computes the difference.
    :param df: a pandas.DataFrame.
    :param period: the difference.
    :return: a pandas DataFrame with today’s value minus the value 'period' days ago.
    """
    return df.diff(period)
</pre>
</td>


<tr>
<td>
<pre>
delay(df, period)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def delay(df, period=1):
    """
    Computes lagged value.
    :param df: a pandas.DataFrame.
    :param period: the lag grade.
    :return: a pandas DataFrame with the lagged values of the time series.
    """
    return df.shift(period)
</pre>
</td>


<tr>
<td>
<pre>
rank(df)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def rank(df):
    """
    Cross sectional rank.
    :param df: a pandas.DataFrame.
    :return: a pandas DataFrame with rank along columns (percentiles).
    """
    return df.rank(axis=1, pct=True)
</pre>
</td>


<tr>
<td>
<pre>
scale(df, k)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def scale(df, k=1):
    """
    Scaled time serie.
    :param df: a pandas.DataFrame.
    :param k: scaling factor.
    :return: a pandas.DataFrame rescaled such that sum(abs(df)) = k
    """
    import numpy
    return df.mul(k).div(numpy.abs(df).sum())
</pre>
</td>


<tr>
<td>
<pre>
ts_argmax(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_argmax(df, window=20):
    """
    Computes on which day ts_max(df, window) occurred on.
    :param df: a pandas.DataFrame.
    :param window: the rolling window.
    :return: number of days ago condition occurred.
    """
    return df.rolling(window).apply(np.argmax) + 1
</pre>
</td>


<tr>
<td>
<pre>
ts_argmin(df, window)<br/><br/><br/><br/><br/><br/>
</pre>
</td>

<td>
<pre lang="python">
def ts_argmin(df, window=20):
    """
    Computes on which day ts_min(df, window) occurred on.
    :param df: a pandas.DataFrame.
    :param window: the rolling window.
    :return: number of days ago condition occurred.
    """
    return df.rolling(window).apply(np.argmin) + 1
</pre>
</td>




</tr>
</table>
