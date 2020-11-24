# Stocks

Quantiacs provides data for companies listed on the NYSE and NASDAQ. The data can be divided into three groups:
- [General information about tickers](https://quantiacs.io/documentation/en/user_guide/data.html#id2)
- [Market data](https://quantiacs.io/documentation/en/user_guide/data.html#id3)
- [Fundamental data](https://quantiacs.io/documentation/en/user_guide/data.html#id4)

## Available instruments
Let's download information about the instruments available for trading for the previous 5 years:

```python
import qnt.data as qndata 
import datetime as dt

assets = qndata.load_assets(tail=dt.timedelta(days=5*365))
```
или
```python
assets = qndata.load_assets(min_date="2015-01-01")
```

There are 1002 financial instruments available. For each of them, brief information is provided:

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

> You can find a complete list [here](https://quantiacs.io/documentation/ru/user_guide/functional_data_market_full_list.html)


## Market data

> We recommend using data from 2015. Market share prices have been available since 2000.

To download market data, just use the following function:

```python
import qnt.data    as qndata
import datetime    as dt

data = qndata.load_data(tail = dt.timedelta(days = 4*365),
                        forward_order = True)

price_open = data.sel(field="open")
price_close = data.sel(field="close")
price_high = data.sel(field="high")
price_low = data.sel(field="low")
volume_day = data.sel(field="vol")
is_liquid = data.sel(field="is_liquid")
```

| Data name | Description |
| ------------------ | -------- |
| open               | Open is the price at which a security first trades upon the opening of an exchange on a trading day. Daily open price. |
| close              | Daily close price. |
| high               | Daily high price. |
| low                | Daily low price. |
| vol                | Daily volume of trading in number of shares.|
| divs               | Dividends from shares. |
| split              | It indicates stock split. Split = 2.0 means that on this day there was a split of shares 2 to 1: the number of shares doubled, and their price halved. |
| split\_cumprod     | split\_cumprod  & The product of split values from the very beginning. Used to restore original prices. |
| is\_liquid         | We trade only liquid stocks, so this option determines whether this stock can be traded. This is top 500 most liquid stocks over the last month (sorted by trading volume = sum(close*vol) ). It changes once a month. |

_Table 1. Available market data._

**Uploading certain companies**
-------------------

You can also limit the data loading by specifying the tools that interest you. In the **assets_names** variable, specify the **companies** you want to **trade**.

For example, you can generate a list of previously downloaded assets:
```python
assets_names = [i["id"] for i in assets]
```
Or set the companies manually:

```python
assets_names=['NASDAQ:AAPL', 'NASDAQ:GOOGL']

data = qndata.load_data(tail = dt.timedelta(days = 5*365),
                        assets=assets_names,
                        forward_order = True)

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

[This] (https://quantiacs.io/referee/template/15325118/html) template shows how to download prepared fundamental data.

### Instant indicators.

They reflect the current state of the company. The value has been updated with
every report released.

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
| ivestment\_short\_term | Short-Term investments                                                                                                                                          |
| invested\_capital      | Invested capital                                                                                                                                                |
| shares                 | Total shares outstanding. If reports do not contain such information we can use issued shares.|
| ppent                  | Property Plant and Equipment Net                                                                                                                                |
| cash\_equivalent       | Cash equivalents are investment securities that are meant for short-term investing; they have high credit quality and are highly liquid. |

_Table 2. Instant indicators._

### Periodical indicators.

They correspond to a certain period. For example, income and sales. For periodical indicators, you can receive information with the quarter, annual frequency, or 'last twelve-month' value.

|   Data name  | Description                                |
| ------------------- | ----------------------------------------- |
| sales\_revenue\_ltm / sales\_revenue\_af / sales\_revenue\_qf     | Revenue from sales |
| total\_revenue\_ltm / total\_revenue\_af / total\_revenue\_qf     | Total revenue |
| cashflow\_op\_ltm / cashflow\_op\_af / cashflow\_op\_qf    | Cashflow from operating activities |
| cogs\_ltm / cogs\_af / cogs\_qf | Cost of goods sold |
| divs\_ltm / divs\_af / divs\_qf | Dividends |
| eps\_ltm / eps\_af / eps\_qf | Earnings per share |
| income\_ltm / income\_af / income\_qf /  | Income |
| interest\_expense\_ltm / interest\_expense\_af / interest\_expense\_qf | Interest expense |
| operating\_expense\_ltm / operating\_expense\_af / operating\_expense\_qf | Operating expenses |
| operating\_income\_ltm / operating\_income\_af / operating\_income\_qf | Operating income |
| rd\_expense\_ltm / rd\_expense\_af / rd\_expense\_qf | Research and development expense |
| sales\_ps\_ltm / sales\_ps\_af / sales\_ps\_qf | sales per share |
| sga\_expense\_ltm / sga\_expense\_af / sga\_expense\_qf   | Selling, general & administrative expense |

_Table 3. Periodical indicators._

We use the fundamental data from the company's reports stored in the EDGAR database. One can find information manually, by entering company ticket on a U.S. Securities and Exchange Commission [website](https://www.sec.gov/edgar/searchedgar/companysearch.htm). Reports consist of facts that are represented mainly in XBRL format. Available facts labels can be found [here](http://xbrlview.fasb.org/yeti).

