## About the platform

**Quantiacs** hosts quantitative trading contests since 2014 and has allocated more than 30M USD to winning algorithms on futures markets. We are expanding the universe of assets you can use and adding new tools.

> We **offer** to users:
* a space to develop code and test ideas for forecasting global financial markets based on **Jupyter Notebook** and **JupyterLab**;
* support for **Python** and **Scala**;
* the power of the full **Anaconda** data science ecosystem;
* up to free **8 GB of RAM** for each trading strategy;
* access to historical **data** for stocks, futures and cryptocurrencies;
* trading strategy **templates** for getting started;
* **prize money**. Participate to our <a href='/contest' target='_blank'>competitions</a> and take one of the top spots. Allocations will be made to winners and quants will receive 10% of the generated profits without any downside risk.

<p class="tip">Get started with Quantiacs!</p>

* <a class="tip" href='/personalpage/registration' target='_blank'>Register</a> to the platform;
* Open the <a class="tip" href='/personalpage/strategies' target='_blank'> strategy development tab</a>;
* Create a strategy from scratch or clone one of the provided templates;
* Submit strategies and monitor their live performance in your private area. Read carefully the <a href='/contest' target='_blank'>contest</a> page and do not miss the deadline for each contest.


## Building strategies

Our platform allows you to code trading strategies in a simple and compact way. The trading algorithm should distribute fractions of the available capital (in other words, allocation weights) to the available assets. Our backtester will take care of simulating the performance of the system.

### A basic example for stocks

This basic example uses the top 500 stocks in the US market according to a liquidity criterion: the minimum traded volume in USD over the last 30 trading days. The idea is very simple: allocate weights according to the price variation of the asset respect to the day before. If the price variation is positive, the stragegy will allocate a positive weight, going long the asset, otherwise it will allocate a negative weight, shorting the asset.

```python
import qnt.data as qndata
import qnt.stats as qnstats
import qnt.output as output
import qnt.ta as qnta

data = qndata.stocks.load_data(tail=6 * 365)

price_open = data.sel(field="open")
price_open_one_day_ago = qnta.shift(price_open, periods=1)

strategy = price_open - price_open_one_day_ago

weights = strategy * data.sel(field="is_liquid")
weights = weights / abs(strategy).sum("asset")
weights = output.clean(weights, data, "stocks")

statistics = qnstats.calc_stat(data, weights)
output.check(weights, data, "stocks")

output.write(weights)
```


### A basic example for futures

Here we apply the same idea to futures contracts. All futures contracts we provide are liquid, so we don't need to apply any liquidity filter.

```python
import qnt.data as qndata
import qnt.stats as qnstats
import qnt.output as output
import qnt.ta as qnta

futures = qndata.futures.load_data(min_date="2006-01-01")

price_open = futures.sel(field="open")
price_open_one_day_ago = qnta.shift(price_open, periods=1)

strategy = price_open - price_open_one_day_ago

weights = strategy / abs(strategy).sum("asset")

statistics = qnstats.calc_stat(futures, weights)
output.check(weights, futures, "futures")

output.write(weights)
```

### The detailed steps

#### 1. Preparations

The first step consists in preparing the workspace: import needed libraries and load data:

```python
import qnt.data as qndata
import qnt.stats as qnstats
import qnt.output as output
import qnt.ta as qnta

data = qndata.stocks.load_data(tail=6 * 365)
```

**data** is an xarray.DataArray structure which contains **stocks historical data** for the last 6 * 365 calendar days, i.e. the last 6 years.

As the strategy uses price shifts to define weights, we define two auxiliary variables: the price of the assets at the session's open today and yesterday:

```python
price_open = data.sel(field="open")
price_open_one_day_ago = qnta.shift(price_open, periods=1)
```

#### 2. Weights allocation
> The trading algorithm uses financial data to form the weights, in proportion to which the capital is distributed. 

A **positive** weight means a long position (**buy**), a **negative** value means a short position (**sell**).

<p class="tip">For each date, the algorithm calculates what portfolio weights should be at the opening of the next day's trading.</p>

We will distribute the capital as the **difference** between **prices** for today and yesterday:
```python
strategy = price_open - price_open_one_day_ago
```
We will trade the top 500 **liquid companies**:

```python
weights = strategy * data.sel(field="is_liquid")
```
**data.sel(field = “is_liquid“)** is xarray.DataArray. A value of **1** on a particular day for a particular company means that the stock has been **in the top 500 liquid stocks** for the last full month.

We **normalize** % of capital for all companies:
```python
weights = weights / abs(strategy).sum('asset')
```
Let's try to **remove** the main financial **risks** from the strategy. The function includes **exposure** correction, **neutralization**.
```python
weights = output.clean(weights, data, "stocks")
```
#### 3. Performance estimation
After we have built the algorithm, we need to evaluate it. First, we need to **calculate statistics**.

```python
statistics = qnstats.calc_stat(data, weights)
display(statistics.to_pandas().tail())
```

Algorithm results, calculated on historical data, are usually presented on an equity graph in order to understand the behavior of the cumulative profit:

```python
import qnt.graph as qngraph
performance = statistics.to_pandas()["equity"]
qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")
```

![Equity](equity.png)
#### 4. Submit

The function will **show possible problems** that the strategy has
```python
output.check(weights, data, "stocks")
```

If everything is ok, **save** the portfolio **weights** that the algorithm generates

```python
output.write(weights)
```

<p class="tip">To participate in the competition:</p>

* <a class="tip" href='/personalpage/strategies' target='_blank'>open your personal account</a>.
* choose your strategy.
* **click** on the **"Submit"** button.

### Ready for More?

We’ve briefly introduced the most basic features of the Quantiacs platform - the rest of this guide will cover them and other advanced features with much finer details, so make sure to read through it all!
