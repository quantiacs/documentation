# Indexes
Quantiacs provides up-to-date daily data for various stock market indices:

```python

import qnt.data as qndata

index_data = qndata.index.load_data(min_date='2005-01-01')

['BKX', 'CELS', 'COMP', 'INDU', 'IXNDX', 'KRX', 'NBI', 
 'NDX', 'NDXE', 'NDXT', 'NDXX', 'OEX', 'QNET', 'RUA', 
 'RUI', 'RUT', 'SOX', 'SPX']
```

| Number | ID    | Name                                      |
|--------|-------|-------------------------------------------|
| 1      | SPX   | S&P 500                                   |
| 2      | INDU  | Dow Industrials                           |
| 3      | NDX   | NASDAQ-100 Index                          |
| 4      | RUI   | Russell 1000                              |
| 5      | RUT   | Russell 2000                              |
| 6      | RUA   | Russell 3000                              |
| 7      | OEX   | S&P 100                                   |
| 8      | COMP  | NASDAQ Composite Index                    |
| 9      | SOX   | PHLX Semiconductor Sector                 |
| 10     | NBI   | NASDAQ Biotechnology                      |
| 11     | BKX   | KBW Bank Index                            |
| 12     | KRX   | KBW Regional Banking Index                |
| 13     | IXNDX | NASDAQ-100                                |
| 14     | NDXT  | NASDAQ-100 Technology Sector Index        |
| 15     | NDXX  | NASDAQ-100 Ex-Tech Sector Index           |
| 16     | NDXE  | The NASDAQ-100 Equal Weighted Index       |
| 17     | CELS  | NASDAQ Clean Edge Green Energy Index      |
| 18     | QNET  | NASDAQ Internet Index                     |


Example - [Predicting NASDAQ 100 Stocks Using the SPX Index](https://github.com/quantiacs/strategy-predict-NASDAQ100-use-SPX/blob/master/strategy.ipynb)

