# Invest money when the growth in stock price is positive

## 1. Preparations

At first one needs to prepare the workspace - load data and libraries

```python
import xarray as xr
import numpy as np
import pandas as pd

import qnt.data    as qndata
import qnt.stepper as qnstepper
import qnt.stats   as qnstats
import qnt.graph   as qngraph
import qnt.ta      as qnta
import qnt.forward_looking as qnfl
import qnt.exposure as qne
import datetime as dt

data = qndata.load_data(min_date = "2017-01-01",
                        max_date = None,
                        dims     = ("time", "field", "asset"))
```

"data" is xarray.DataArray that contains stocks historical data. For instance, we want Apple stock open and close prices:

```python
apple_close = data.loc[::, "close", "NASDAQ:AAPL"]
apple_open = data.loc[::, "open", "NASDAQ:AAPL"]

# you can also work with pandas:
# apple_close = data.loc[::, "close", :].to_pandas()["NASDAQ:AAPL"]
```

Available data explanation is [here](user_guide/data.md). Some other data:
```python
all_close = data.loc[::, "close", :]
all_open = data.loc[::, "open", :]
liquid = data.loc[::, "is_liquid", :]
```
Liquid is a True/False xarray DataArray. A true value for a specific day for a specific company means that the stock has been in the top 500 liquid stocks in the last month.


## 2. Weights allocation
The trading algorithm uses financial data to form the weights, in proportion to which the capital is distributed. A positive weight means a long position (buy), a negative value means a short position (sell).

Suppose, we have a traiding idea - invest money when the growth in stock price is positive. In other words, we want to redistribute capital between portfolio instruments every day in proportion to the formula:

```math
\begin{cases}
0, close_i < delay(close_i)\\ 1, close_i > delay(close_i)
\end{cases}
```
where index i indicates specific stock (detailed description of algorithmic trading is [here](/theory/theoretical_basis.md)).

We can allocate capital by assigning weights to the portfolio instuments:
```python
changes = qnta.change(all_close, 122)
weights = xr.where(changes > 0, 1, 0)
```

You can implement and test any idea you want. Some other examples:
```python
# buy all positions: weights = all_open/all_open
# sell all positions: weights = -all_open/all_open
# the more price change, the more we buy = (all_close - all_open)/all_open
```

Notice that we trade only liquid stocks. One can form output weights:

```python
output = weights*liquid

# If you worked with pandas and weigths is pandas.Dataframe:
# output = xr.DataArray(weights.values, dims = ["time","asset"], coords= {"time":weights.index,"asset":weights.columns} )
```

Output normalization, weights sum for one day should be <= 1:
```python
output = output / abs(output).sum('asset')
```
Accourding to the rules, we should fix exposure:
```python
output = qne.drop_bad_days(output)
qnstats.check_exposure(output)
```
```python
Ok. The exposure check succeed.
```


## 3. Perfomance estimation
Once we have constructed an algorithm we need to evaluate it. At first, we need to calculate statistic.
```python
stat = qnstats.calc_stat(data, output)
display(stat.to_pandas().tail())
```
Algorithm results, calculated on historical data, are usually presented on an [equity graph](/theory/theoretical_basis.md) in order to understand the behavior of the cumulative profit:

```python
performance = stat.to_pandas()["equity"]
qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")
```

![Equity](equity.png)

We use a set of [criteria](/quality/rules.md) to evaluate the performance. You can submit your algorithm and take part in a competition if it passes all the [requirements](/quality/major.md).

For instance, according to the rules the Sharpe ratio must be greater than 1, the correlation with other strategies must be less than 90%:
```python
display(stat[-1:].sel(field = ["sharpe_ratio"]).transpose().to_pandas())
qnstats.print_correlation(output, data)
```

## 4. Submit

If you are satisfied enough with your algorithm and it passes all the requirements you can submit it.
```python
qnstepper.write_output(output)
```

At this stage, the code is ready for submission. Just click on the submission button on your account page and we will evaluate your strategy live on our servers!

[Copy entire strategy](#)

Don't forget to [register on the platform](https://quantiacs.io/personalpage/registration).