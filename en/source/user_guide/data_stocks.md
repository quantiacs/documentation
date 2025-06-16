# Stocks

Quantiacs provides data for companies listed on the NYSE and NASDAQ. Here we will discuss:
- [General information about tickers](#general-information-about-tickers)
- [Market data](#market-data)
- [Fundamental data](#fundamental-data)

## General information about tickers
The information about the available stocks in the last 5 years can be obtained specifying the lookback period in calendar days multiplied by the number of years:

```python
import qnt.data as qndata 

assets = qndata.stocks.load_list(tail= 365*5)
```
or defining the starting point in time:
```python
assets = qndata.stocks.load_list(min_date="2015-01-01")
```

The information on each asset can be inspected with:

```python
assets[0]
```
```python
{'name': 'ALPHA PRO TECH LTD',
 'sector': 'Health Technology',
 'symbol': 'APT',
 'exchange': 'AMEX',
 'industry': 'Medical Specialties',
 'id': 'AMEX:APT',
 'cik': '884269',
 'FIGI': 'BBG000C1H7Y2'}
```

> You can find a complete list [here](https://quantiacs.io/documentation/en/user_guide/functional_data_market_full_list.html).


## Market data

Market data can be downloaded using the following call:

```python
import qnt.data as qndata
data = qndata.stocks.load_data(tail = 5*365, dims = ("time", "field", "asset"))

price_open = data.sel(field="open")
price_close = data.sel(field="close")
price_high = data.sel(field="high")
price_low = data.sel(field="low")
volume_day = data.sel(field="vol")
is_liquid = data.sel(field="is_liquid")
```

| Data field | Description |
| ------------------ | -------- |
| open               | open is the daily open price, i.e. the price at which a security trades when the exchange opens. |
| close              | Daily close price. |
| high               | Daily high price. |
| low                | Daily low price. |
| vol                | Daily number of traded shares. |
| divs               | Dividends from shares. |
| split              | It indicates a stock split. Split = 2.0 means that on this day there was a split of shares 2 to 1: the number of shares doubled, and their price halved. |
| split\_cumprod     | The product of split values from the very beginning. It can be used for restoring original prices. |
| is\_liquid         | This option determines whether this stock is liquid enough for trading. A stock is liquid if it is part of the top 500 stocks in terms of traded dollar volume over the last full calendar month. |

_Table 1. Available market data._

Stocks and data fields can be selected by the user specifying the **companies** to **trade** in the **assets_names** variable.

First, generate a list of all previously downloaded assets:
```python
assets_names = [i["id"] for i in assets]
```
Then, after inspection, set the company names manually:

```python
assets_names=['NASDAQ:AAPL', 'NASDAQ:GOOGL']

data = qndata.stocks.load_data(tail= 365*5, assets=assets_names)

price_open = data.sel(field="open")   
```

```python
price_open.to_pandas().tail()
```
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>asset</th>
      <th>NASDAQ:AAPL</th>
      <th>NASDAQ:GOOGL</th>
    </tr>
    <tr>
      <th>time</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2020-08-13</th>
      <td>12816.160</td>
      <td>1508.21</td>
    </tr>
    <tr>
      <th>2020-08-14</th>
      <td>12860.820</td>
      <td>1513.61</td>
    </tr>
    <tr>
      <th>2020-08-17</th>
      <td>12999.000</td>
      <td>1515.97</td>
    </tr>
    <tr>
      <th>2020-08-18</th>
      <td>12807.480</td>
      <td>1526.12</td>
    </tr>
    <tr>
      <th>2020-08-19</th>
      <td>12990.124</td>
      <td>1552.49</td>
    </tr>
  </tbody>
</table>
</div>


## Fundamental data

Fundamental data can be retrieved by using instant or periodic indicators.

### Instant indicators.

Instant indicators reflect the current state of the company.

| Data name   | Description                                                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assets                 | Total Assets                                                                                                                                                    |
| assets\_curr           | Current Assets                                                                                                                                                  |
| equity                 | Common equity                                                                                                                                                   |
| liabilities            | Total liabilities                                                                                                                                               |
| liabilities\_curr      | Current liabilities                                                                                                                                             |
| debt\_lt               | Long term debt                                                                                                                                                  |
| debt\_st               | Short term debt                                                                                                                                                 |
| goodwill               | Goodwill                                                                                                                                                        |
| inventory              | Total inventory                                                                                                                                                 |
| investment\_short\_term | Short-term investments                                                                                                                                          |
| invested\_capital      | Invested capital                                                                                                                                                |
| shares                 | Total shares outstanding. If reports do not contain such information we can use issued shares.|
| ppent                  | Property plant and equipment net                                                                                                                                |
| cash\_equivalent       | Cash equivalents are investment securities that are meant for short-term investing; they have high credit quality and are highly liquid. |

_Table 2. Instant indicators._

### Periodic indicators.

Periodic indicators correspond to a certain period. For periodic indicators, you can receive information with the quarter, annual frequency, or 'last twelve-month' value.

|   Data name  | Description                                |
| ------------------- | ----------------------------------------- |
| sales\_revenue\_ltm / sales\_revenue\_af / sales\_revenue\_qf     | Revenue from sales |
| total\_revenue\_ltm / total\_revenue\_af / total\_revenue\_qf     | Total revenue |
| cashflow\_op\_ltm / cashflow\_op\_af / cashflow\_op\_qf    | Cashflow from operating activities |
| cogs\_ltm / cogs\_af / cogs\_qf | Cost of goods sold |
| divs\_ltm / divs\_af / divs\_qf | Dividends |
| eps\_ltm / eps\_af / eps\_qf | Earnings per share |
| income\_ltm / income\_af / income\_qf /  | Income |
| interest\_expense\_ltm / interest\_expense\_af / interest\_expense\_qf | Interest expenses |
| operating\_expense\_ltm / operating\_expense\_af / operating\_expense\_qf | Operating expenses |
| operating\_income\_ltm / operating\_income\_af / operating\_income\_qf | Operating income |
| rd\_expense\_ltm / rd\_expense\_af / rd\_expense\_qf | Research and development expenses |
| sales\_ps\_ltm / sales\_ps\_af / sales\_ps\_qf | Sales per share |
| sga\_expense\_ltm / sga\_expense\_af / sga\_expense\_qf   | Selling, general & administrative expenses |

_Table 3. Periodical indicators._

We use the fundamental data from the company's reports stored in the EDGAR database. One can find information manually, by entering the company ticker on the U.S. Securities and Exchange Commission [website](https://www.sec.gov/edgar/searchedgar/companysearch.html). The reports consist of facts that are represented mainly in XBRL format. Available facts labels can be found [here](http://xbrlview.fasb.org/yeti).

