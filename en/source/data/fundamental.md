# Fundamental Data

> An experimental API for additional financial data.

**Quantiacs** offers tools for the analysis of **fundamental data** of companies based on publications from the **sec.gov** website.

To construct **fundamental indicators** (equity, EV, EBITDA, etc.) **fundamental facts** are used (e.g., 'us-gaap:Revenues', 'us-gaap:StockholdersEquity', etc.).

```python
import qnt.data as qndata
import qnt.data.secgov_fundamental as fundamental

market_data = qndata.stocks.load_ndx_data(min_date="2005-01-01")

indicators_data = fundamental.load_indicators_for(market_data, indicator_names=['roe'])

display(indicators_data.sel(field="roe").to_pandas().tail(2))
display(indicators_data.sel(asset='NAS:AAPL').to_pandas().tail(2))
display(indicators_data.sel(asset=['NAS:AAPL']).sel(field="roe").to_pandas().tail(2))


# indicators_data = fundamental.load_indicators_for(market_data)
# indicators_data = fundamental.load_indicators_for(market_data, fundamental.get_standard_indicator_names())
# indicators_data = fundamental.load_indicators_for(market_data, fundamental.get_complex_indicator_names())
# indicators_data = fundamental.load_indicators_for(market_data, fundamental.get_annual_indicator_names())


```

| Indicator                           | US-GAAP Facts                                                                                                                                                                                                                                   | Description                                                                                            |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `total_revenue`                     | `['us-gaap:Revenues']`                                                                                                                                                                                                                          | Total revenue generated from business activities.                                                      |
| `liabilities`                       | `FACT_GROUPS['equity'] + ['us-gaap:Liabilities', 'us-gaap:LiabilitiesAndStockholdersEquity']`                                                                                                                                                   | Total obligations and debts owed by the business.                                                      |
| `assets`                            | `['us-gaap:Assets']`                                                                                                                                                                                                                            | Total assets owned by the business.                                                                    |
| `equity`                            | `FACT_GROUPS['equity']`                                                                                                                                                                                                                         | Total stockholder's equity, including non-controlling interest.                                        |
| `net_income`                        | `['us-gaap:NetIncomeLoss']`                                                                                                                                                                                                                     | Net profit or loss generated by the business.                                                          |
| `short_term_investments`            | `['us-gaap:ShortTermInvestments']`                                                                                                                                                                                                              | Investments that are expected to be converted into cash within a year.                                 |
| `cash_and_cash_equivalents`         | `['us-gaap:CashAndCashEquivalentsAtCarryingValue']`                                                                                                                                                                                             | Cash on hand and assets that can be quickly converted to cash.                                         |
| `cash_and_cash_equivalents_full`    | `FACT_GROUPS['cash_equivalents']`                                                                                                                                                                                                               | Extended list of cash and equivalents, including marketable securities.                                |
| `operating_income`                  | `['us-gaap:OperatingIncomeLoss']`                                                                                                                                                                                                               | Income generated from core business operations.                                                        |
| `income_before_taxes`               | `FACT_GROUPS['income']`                                                                                                                                                                                                                         | Pre-tax income from all operations and sources.                                                        |
| `income_before_income_taxes`        | `['us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest']`                                                                                                                                       | Similar to income_before_taxes, but more specific.                                                     |
| `depreciation_and_amortization`     | `FACT_GROUPS['depreciation_and_amortization']`                                                                                                                                                                                                  | Total depreciation and amortization expenses.                                                          |
| `interest_net`                      | `FACT_GROUPS['income'] + ['us-gaap:OperatingIncomeLoss']`                                                                                                                                                                                       | Net interest, calculated as interest income minus interest expense.                                    |
| `income_interest`                   | `['us-gaap:InvestmentIncomeInterest']`                                                                                                                                                                                                          | Interest income from investments.                                                                      |
| `interest_expense`                  | `['us-gaap:InterestExpense']`                                                                                                                                                                                                                   | Expense incurred from interest payments.                                                               |
| `interest_expense_debt`             | `['us-gaap:InterestExpenseDebt']`                                                                                                                                                                                                               | Interest expense specifically related to debt.                                                         |
| `interest_expense_capital_lease`    | `['us-gaap:InterestExpenseLesseeAssetsUnderCapitalLease']`                                                                                                                                                                                      | Interest expense specifically related to capital leases.                                               |
| `interest_income_expense_net`       | `['us-gaap:InterestIncomeExpenseNet']`                                                                                                                                                                                                          | Net amount of interest income and expense.                                                             |
| `losses_on_extinguishment_of_debt`  | `['us-gaap:GainsLossesOnExtinguishmentOfDebt']`                                                                                                                                                                                                 | Losses incurred from the extinguishment of debt.                                                       |
| `nonoperating_income_expense`       | `['us-gaap:NonoperatingIncomeExpense']`                                                                                                                                                                                                         | Income or expenses not related to core business operations.                                            |
| `other_nonoperating_income_expense` | `['us-gaap:OtherNonoperatingIncomeExpense']`                                                                                                                                                                                                    | Other income or expenses that are non-operational.                                                     |
| `debt`                              | `FACT_GROUPS['debt']`                                                                                                                                                                                                                           | All forms of long-term and short-term debt.                                                            |
| `net_debt`                          | `FACT_GROUPS['debt'] + FACT_GROUPS['cash_equivalents']`                                                                                                                                                                                         | Net debt calculated by subtracting cash equivalents from total debt.                                   |
| `eps`                               | `['us-gaap:EarningsPerShareDiluted', 'us-gaap:EarningsPerShare']`                                                                                                                                                                               | Earnings per share, both diluted and basic.                                                            |
| `shares`                            | `FACT_GROUPS['shares']`                                                                                                                                                                                                                         | Total number of outstanding common stock shares.                                                       |
| `ebitda_use_income_before_taxes`    | `FACT_GROUPS['income'] + FACT_GROUPS['interest'] + FACT_GROUPS['ebitda']`                                                                                                                                                                       | Earnings before interest, taxes, depreciation, and amortization, calculated using income before taxes. |
| `ebitda_use_operating_income`       | `FACT_GROUPS['ebitda'] + ['us-gaap:NonoperatingIncomeExpense', 'us-gaap:GainsLossesOnExtinguishmentOfDebt', 'us-gaap:InvestmentIncomeInterest'] + FACT_GROUPS['interest']`                                                                      | Earnings before interest, taxes, depreciation, and amortization, calculated using operating income.    |
| `ebitda_simple`                     | `FACT_GROUPS['depreciation_and_amortization'] + ['us-gaap:OperatingIncomeLoss']`                                                                                                                                                                | Simplified EBITDA calculation.                                                                         |
| `roe`                               | `['us-gaap:NetIncomeLoss', 'us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest', 'us-gaap:StockholdersEquity']`                                                                                                     | Return on equity, calculated as net income divided by total equity.                                    |
| `liabilities_divide_by_ebitda`      | `FACT_GROUPS['ebitda'] + ['us-gaap:Liabilities', 'us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest', 'us-gaap:StockholdersEquity', 'us-gaap:LiabilitiesAndStockholdersEquity'] + FACT_GROUPS['cash_equivalents']` | Total liabilities divided by EBITDA.                                                                   |
| `net_debt_divide_by_ebitda`         | `FACT_GROUPS['ebitda'] + FACT_GROUPS['debt'] + FACT_GROUPS['cash_equivalents']`                                                                                                                                                                 | Net debt divided by EBITDA.                                                                            |

## Example use Return on Equity (ROE)

The strategy trades liquid stocks from the Nasdaq 100 index that have a positive return on equity (ROE > 0.15)

```python

import xarray as xr
import qnt.data as qndata
import qnt.output as qnout
import qnt.stats as qnstats
import qnt.data.secgov_fundamental as fundamental


def load_data(min_date="2005-01-01"):
    """Load market and fundamental data."""
    market_data = qndata.stocks.load_ndx_data(min_date=min_date)
    indicators_data = fundamental.load_indicators_for(market_data, indicator_names=['roe'])
    return market_data, indicators_data


def calculate_weights(data, fundamental_data):
    """Calculate weights for the strategy based on fundamental data."""
    roe = fundamental_data.sel(field="roe")
    liquidity = data.sel(field='is_liquid')
    buy = 1
    return xr.where(roe > 0.15, buy, 0) * liquidity


def add_buy_and_hold_enough_bid_for(data, weights_):
    """Add buy and hold condition based on the liquidity of the assets."""
    time_traded = weights_.time[abs(weights_).fillna(0).sum('asset') > 0]
    is_strategy_traded = len(time_traded)
    if is_strategy_traded:
        return xr.where(weights_.time < time_traded.min(), data.sel(field="is_liquid"), weights_)
    return weights_


def plot_performance(stats):
    """Plot the performance of the strategy."""
    performance = stats.to_pandas()["equity"]
    import qnt.graph as qngraph
    qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")


market_data, indicators_data = load_data()

weights = calculate_weights(market_data, indicators_data)
weights = add_buy_and_hold_enough_bid_for(market_data, weights)
weights = qnout.clean(weights, market_data, "stocks_nasdaq100")

stats = qnstats.calc_stat(market_data, weights.sel(time=slice("2006-01-01", None)))
display(stats.to_pandas().tail())
plot_performance(stats)

weights = weights.sel(time=slice("2006-01-01", None))
qnout.check(weights, market_data, "stocks_nasdaq100")
qnout.write(weights)  # to participate in the competition



```

## Potential Issues in Working with Fundamental Data:

- **Inconsistency in fact publication among companies:**
  - One company might not publish a specific fact but might provide other data from which this fact can be derived. 
  - Another company, on the contrary, might directly provide the fact, omitting intermediary data.

- **Lack of standardized formulas for indicators:**
  - Not all indicators have standard calculation formulas. 
  - For some of them, each company decides on its own which fundamental facts should be used to form the indicator. 
  - This can lead to the same company using different data at different times for one indicator. 
  - It's not accurate to compare companies based on such indicators.

- **Changing the strategy of indicator construction:**
  - When updating financial statements, a company may change the methodology or calculation formulas for indicators, introducing an element of uncertainty.

- **Errors and corrections in reports:**
  - Reports can contain errors, which are corrected later, but the initial data can distort the analysis.

- **Data omissions:**
  - Some facts might be missing in the reports.
  - Companies might release their reports on different dates.

- **Issues with indicators based on stock prices:**
  - If a company conducts a stock split before publishing a report, indicators can show unexpected changes, distorting the analysis.

> The current implementation of Quantiacs partially resolve these issues:

- When constructing an indicator, one formula is used for all companies, allowing them to be compared under "similar" conditions.
- If key data for calculation is missing, the algorithm tries to restore it using other facts or indicators.
- If data from the SEC gov report is missing, the algorithm tries to restore the missing information based on annual and quarterly reports, or if absent, uses average values.
- By default, the strategy for constructing indicators is over 12 months (LTM). Users can build indicators for the quarter (QF) or use annual values (AF).

Discover available attributes  (us-gaap taxonomy) [here](http://xbrlview.fasb.org/yeti/resources/yeti-gwt/Yeti.jsp).
Introduction to Financial Statements [here](https://www.sec.gov/oiea/reportspubs/investor-publications/beginners-guide-to-financial-statements.html)

## Example create specific financial indicator

The example demonstrates how to create your own financial indicator.
You need to specify:
- what facts are required for its creation;
- the algorithm for its construction.


```python

import numpy as np
import qnt.data as qndata
import qnt.data.secgov_fundamental as fundamental



def custom_build_equity(fundamental_facts):
    equity_full = fundamental_facts.sel(
        field='us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest')
    equity_simple = fundamental_facts.sel(field='us-gaap:StockholdersEquity')

    equity = equity_full.where(~np.isnan(equity_full), equity_simple)

    return equity


custom_builder = {
    'equity': {'facts': [
        'us-gaap:StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest',
        'us-gaap:StockholdersEquity'
    ],
        'build': custom_build_equity},
}

market_data = qndata.stocks.load_ndx_data(min_date="2005-01-01")

indicators_data = fundamental.load_indicators_for(market_data,
                                                  indicator_names=['equity'],
                                                  indicators_builders=custom_builder)

display(indicators_data.sel(field="equity").to_pandas().tail(2))
display(indicators_data.sel(asset='NAS:AAPL').to_pandas().tail(2))
display(indicators_data.sel(asset=['NAS:AAPL']).sel(field="equity").to_pandas().tail(2))

```


## Example use specific us-gaap

This example provides a code for creating a stock trading strategy by downloading and utilizing fundamental data from SEC filings. Users can customize the script to fetch any specific financial fact for companies listed in the NASDAQ 100 index. 

```python

import time
import xarray as xr
import numpy as np
import pandas as pd

import qnt.data as qndata
import qnt.stats as qnstats
import qnt.output as qnout
import qnt.ta as qnta

GLOBAL_MIN_DATE = "2005-01-01"


def load_stock_data():
    """Load stock data and create a CIK to asset dictionary."""
    stock_list = qndata.stocks.load_ndx_list(min_date=GLOBAL_MIN_DATE)
    cik_asset_dict = {a['cik']: a for a in stock_list if a['cik']}
    data = qndata.stocks.load_ndx_data(min_date=GLOBAL_MIN_DATE, assets=stock_list)
    return stock_list, cik_asset_dict, data


def get_fundamental_indicators():
    """Return a list of fundamental indicators."""
    return [
        'us-gaap:OtherLiabilitiesNoncurrent',
        'us-gaap:ProfitLoss',
        'us-gaap:EarningsPerShareBasic',
        # ...
        'us-gaap:ShareBasedCompensation'
    ]


def extract_last_fact(facts, name):
    """Extract the latest fact with the given name from a list of facts."""
    relevant_facts = [fact for fact in facts if fact['name'] == name]
    return max(relevant_facts, key=lambda f: f['period']['value'])['value'] if relevant_facts else None


def get_fundamental_data(data, min_date_start, cik_asset_dict):
    """Load fundamental data for the given assets."""
    fundamental_indicators = get_fundamental_indicators()
    fundamental_data = xr.concat(
        [data.sel(field='close')] * len(fundamental_indicators),
        pd.Index(fundamental_indicators, name='field')
    )
    fundamental_data[:] = np.nan

    progress = 0
    start_time = time.time()

    for form in qndata.secgov.load_forms(
            ciks=list(cik_asset_dict.keys()),
            types=['10-K'],
            facts=fundamental_indicators,
            skip_segment=True,
            min_date=min_date_start,
    ):
        facts = form['facts']
        progress += 1

        if progress % 500 == 0:
            print("Progress:", progress, form['date'], time.time() - start_time)

        asset_id = cik_asset_dict[form['cik']]['id']

        if asset_id not in data.asset.values:
            continue

        date = form['date']
        nearest_date = fundamental_data.time.loc[date:]
        if len(nearest_date) < 1:
            print("wrong date", form['date'])
            continue

        nearest_date = nearest_date[0].values

        for indicator in fundamental_indicators:
            fundamental_data.loc[{'asset': asset_id, 'time': nearest_date, 'field': indicator}] \
                = extract_last_fact(facts, indicator)

    ratios = fundamental_data.ffill('time')
    return ratios


def calculate_weights(data, fundamental_data):
    """Calculate weights for the strategy based on fundamental data."""
    earnings = fundamental_data.sel(field="us-gaap:EarningsPerShareBasic")
    liquidity = data.sel(field='is_liquid')
    long_lwma = qnta.lwma(earnings, 50)
    short_lwma = qnta.lwma(earnings, 100)
    buy = 1
    return xr.where(short_lwma > long_lwma, buy, 0) * liquidity


def add_buy_and_hold_enough_bid_for(data, weights_):
    """Add buy and hold condition based on the liquidity of the assets."""
    time_traded = weights_.time[abs(weights_).fillna(0).sum('asset') > 0]
    is_strategy_traded = len(time_traded)
    if is_strategy_traded:
        return xr.where(weights_.time < time_traded.min(), data.sel(field="is_liquid"), weights_)
    return weights_


def plot_performance(stats):
    """Plot the performance of the strategy."""
    performance = stats.to_pandas()["equity"]
    import qnt.graph as qngraph
    qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")


stock_list, cik_asset_dict, data = load_stock_data()
fundamental_data = get_fundamental_data(data, GLOBAL_MIN_DATE, cik_asset_dict)
weights = calculate_weights(data, fundamental_data)
weights = add_buy_and_hold_enough_bid_for(data, weights)
weights = qnout.clean(weights, data, "stocks_nasdaq100")

stats = qnstats.calc_stat(data, weights.sel(time=slice("2006-01-01", None)))
display(stats.to_pandas().tail())

plot_performance(stats)

weights = weights.sel(time=slice("2006-01-01", None))

qnout.check(weights, data, "stocks_nasdaq100")
qnout.write(weights)  # to participate in the competition

```
