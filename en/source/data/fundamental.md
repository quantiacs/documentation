# Fundamental Data

> An experimental API for additional financial data.

```python
import qnt.data as qndata
import qnt.data.secgov_indicators

stock_list = qndata.stocks.load_ndx_list(min_date='2006-01-01')
stock_data = qndata.stocks.load_ndx_data(min_date='2006-01-01', assets=stock_list)

indicators = ['assets', 'liabilities', 'operating_expense', 'ivestment_short_term']

fundamental_data = qnt.data.secgov_load_indicators(stock_list, time_coord=stock_data.time,
                                                   standard_indicators=indicators)

display(fundamental_data.sel(field="liabilities").to_pandas().tail(2))
display(fundamental_data.sel(asset='NAS:AAPL').to_pandas().tail(2))
display(fundamental_data.sel(asset=['NAS:AAPL']).sel(field="liabilities").to_pandas().tail(2))

```

| Indicator            | US-GAAP Codes                                                                                                                                                                 | Description                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| assets               | us-gaap:Assets                                                                                                                                                                | Total Assets                                      |
| assets_curr          | us-gaap:AssetsCurrent                                                                                                                                                         | Current Assets                                    |
| equity               | us-gaap:StockholdersEquity                                                                                                                                                    | Stockholders' Equity                              |
| liabilities          | us-gaap:Liabilities                                                                                                                                                           | Total Liabilities                                 |
| liabilities_curr     | us-gaap:LiabilitiesCurrent                                                                                                                                                    | Current Liabilities                               |
| market_cap           | us-gaap:CapitalizationLongtermDebtAndEquity                                                                                                                                   | Market Capitalization (Long-term Debt and Equity) |
| debt_lt              | us-gaap:LongTermDebt                                                                                                                                                          | Long-term Debt                                    |
| debt_st              | us-gaap:ShortTermBorrowings                                                                                                                                                   | Short-term Borrowings                             |
| goodwill             | us-gaap:Goodwill                                                                                                                                                              | Goodwill                                          |
| inventory            | us-gaap:InventoryNet                                                                                                                                                          | Net Inventory                                     |
| ivestment_short_term | us-gaap:AvailableForSaleSecuritiesCurrent, us-gaap:MarketableSecuritiesCurrent                                                                                                | Short-term Investments                            |
| invested_capital     | us-gaap:MarketableSecurities                                                                                                                                                  | Invested Capital (Marketable Securities)          |
| shares               | us-gaap:CommonStockSharesOutstanding, us-gaap:CommonStockSharesIssued                                                                                                         | Outstanding & Issued Common Stock Shares          |
| ppent                | us-gaap:PropertyPlantAndEquipmentNet                                                                                                                                          | Property, Plant, and Equipment (Net)              |
| cash_equivalent      | us-gaap:CashAndCashEquivalentsAtCarryingValue                                                                                                                                 | Cash and Cash Equivalents at Carrying Value       |
| sales_revenue        | us-gaap:SalesRevenueGoodsNet, us-gaap:SalesRevenueNet, us-gaap:RevenueFromContractWithCustomerIncludingAssessedTax                                                            | Sales Revenue                                     |
| total_revenue        | us-gaap:Revenues                                                                                                                                                              | Total Revenues                                    |
| capex                | us-gaap:CapitalExpenditureDiscontinuedOperations                                                                                                                              | Capital Expenditure (Discontinued Operations)     |
| cashflow_op          | us-gaap:OtherOperatingActivitiesCashFlowStatement, us-gaap:NetCashProvidedByUsedInOperatingActivities, us-gaap:NetCashProvidedByUsedInOperatingActivitiesContinuingOperations | Cash Flow from Operating Activities               |
| cogs                 | us-gaap:CostOfGoodsAndServicesSold, us-gaap:CostOfGoodsSold, us-gaap:CostOfRevenue                                                                                            | Cost of Goods and Services Sold                   |
| divs                 | us-gaap:Dividends                                                                                                                                                             | Dividends                                         |
| eps                  | us-gaap:EarningsPerShareDiluted, us-gaap:EarningsPerShare                                                                                                                     | Earnings Per Share (Diluted & Basic)              |
| income               | us-gaap:NetIncomeLoss                                                                                                                                                         | Net Income Loss                                   |
| interest_expense     | us-gaap:InterestExpense                                                                                                                                                       | Interest Expense                                  |
| operating_expense    | us-gaap:OperatingExpenses                                                                                                                                                     | Operating Expenses                                |
| operating_income     | us-gaap:OperatingIncomeLoss                                                                                                                                                   | Operating Income Loss                             |
| rd_expense           | us-gaap:ResearchAndDevelopmentExpense                                                                                                                                         | Research and Development Expense                  |
| retained_earnings    | us-gaap:PostconfirmationRetainedEarningsDeficit                                                                                                                               | Postconfirmation Retained Earnings Deficit        |
| sales_ps             | us-gaap:EarningsPerShareBasic                                                                                                                                                 | Sales Per Share (Earnings Per Share Basic)        |
| sga_expense          | us-gaap:SellingGeneralAndAdministrativeExpense                                                                                                                                | Selling, General, and Administrative Expense      |




> Example

This Python script demonstrates how to build a stock trading strategy by leveraging financial data from SEC filings and the QNT library. The script fetches specific financial indicators for NASDAQ 100 companies and calculates portfolio weights using the retrieved data. The strategy is evaluated by calculating its statistics and visualizing its performance using a log-scaled graph. The resulting portfolio weights can be used for participation in a competition.

```python

import xarray as xr
import numpy as np
import pandas as pd
import datetime as dt

import qnt.ta as qnta
import qnt.data as qndata
import qnt.output as qnout
import qnt.stats as qns
import qnt.graph as qngraph
import qnt.data.secgov_indicators


def calculate_weights(stock_data, fundamental_data):
    is_liquid = stock_data.sel(field="is_liquid")
    liabilities = fundamental_data.sel(field="liabilities")

    weights = liabilities * is_liquid
    return weights


stock_list = qndata.stocks.load_ndx_list(min_date='2006-01-01')
stock_data = qndata.stocks.load_ndx_data(min_date='2006-01-01', assets=stock_list)

data_labels = ['assets', 'liabilities', 'operating_expense', 'ivestment_short_term']

fundamental_data = qnt.data.secgov_load_indicators(stock_list, time_coord=stock_data.time,
                                                   standard_indicators=data_labels)

portfolio_weights = calculate_weights(stock_data, fundamental_data)
portfolio_weights = qnout.clean(portfolio_weights, stock_data, "stocks_nasdaq100")

statistics = qns.calc_stat(stock_data, portfolio_weights.sel(time=slice("2006-01-01", None)))
display(statistics.to_pandas().tail())

performance = statistics.to_pandas()["equity"]
qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")

portfolio_weights = portfolio_weights.sel(time=slice("2006-01-01", None))

qnout.check(portfolio_weights, stock_data, "stocks_nasdaq100")
qnout.write(portfolio_weights)

```

> Example use specific us-gaap

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