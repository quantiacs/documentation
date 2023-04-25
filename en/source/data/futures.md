# Futures
Quantiacs provides data for 71 liquid global futures contracts. The underlying assets are commodities (energy, metals, agricultural goods) and financial assets: stock indices, bonds and currency rates.

```python
import qnt.data as qndata
future_list = qndata.futures.load_list()
future_list
```

| N   | ID   | Name                                            | Sector       | point_value |
|-----|------|-------------------------------------------------|--------------|-------------|
| 1   | F_AE | AEX Index                                       | Index        | EUR 200     | 
| 2   | F_AH | Bloomberg Commodity                             | Index        | $250        | 
| 3   | F_AX | DAX Index                                       | Index        | EUR 25      | 
| 4   | F_BC | Crude Oil Brent                                 | Energy       | $1,000      | 
| 5   | F_BG | Gasoil Low Sulphur                              | Energy       | $100        | 
| 6   | F_C  | Corn                                            | Agriculture  | EUR 50      | 
| 7   | F_CA | CAC 40                                          | Index        | EUR 10      | 
| 8   | F_CC | Cocoa                                           | Agriculture  | $10         | 
| 9   | F_CF | Eurex Conf Long-Term                            | Bond         | CHF 1,000   | 
| 10  | F_CT | Cotton #2                                       | Agriculture  | $500        | 
| 11  | F_DE | MSCI EMI Index                                  | Index        | $50         | 
| 12  | F_DM | Mini MDAX Index                                 | Index        | EUR 5       | 
| 13  | F_DT | Euro Bund                                       | Bond         | EUR 1,000   | 
| 14  | F_DX | U.S. Dollar Index                               | Currency     | $1,000      | 
| 15  | F_EB | Eurex 3Month EuriBor                            | InterestRate | EUR 2,500   | 
| 16  | F_ED | 1-Month ESTR                                    | InterestRate | EUR 2,500   | 
| 17  | F_F  | 3-Month Euroswiss                               | InterestRate | CHF 2,500   | 
| 18  | F_FB | Stoxx Banks 600                                 | Index        | EUR 50      | 
| 19  | F_FP | OMX Helsinki 25                                 | Index        | EUR 10      | 
| 20  | F_FY | Stoxx Europe 600                                | Index        | EUR 50      | 
| 21  | F_GC | Austrian Power Peak                             | Metal        | EUR 730     | 
| 22  | F_GS | 10-Year Long Gilt                               | Bond         | GBP 1,000   | 
| 23  | F_GX | Euro Buxl                                       | Bond         | EUR 1,000   | 
| 24  | F_HG | HKFE Copper CNH                                 | Metal        | RMB 5       | 
| 25  | F_HO | Heating Oil                                     | Energy       | $42,000     | 
| 26  | F_KC | Coffee                                          | Agriculture  | $375        | 
| 27  | F_LX | FTSE 100                                        | Index        | GBP 10      | 
| 28  | F_NG | UK Natural Gas                                  | Energy       | GBP 1,000   | 
| 29  | F_NH | SGX CNX Nifty Index                             | Index        | $2          | 
| 30  | F_OJ | Orange Juice                                    | Agriculture  | $150        | 
| 31  | F_RB | JPX Gasoline                                    | Energy       | JPY 50      | 
| 32  | F_RU | Russell 2000 E-Mini                             | Index        | $50         | 
| 33  | F_SB | Sugar #11                                       | Agriculture  | $1,120      | 
| 34  | F_SI | Italian Power Peak                              | Metal        | EUR 730     | 
| 35  | F_SS | 3-Month SONIA                                   | InterestRate | GBP 2,500   | 
| 36  | F_SX | Swiss Market Index                              | Index        | CHF 10      | 
| 37  | F_UB | Euro Bobl                                       | Bond         | EUR 1,000   | 
| 38  | F_UZ | Euro Schatz                                     | Bond         | EUR 1,000   | 
| 39  | F_VX | S&P 500 VIX                                     | Index        | $1,000      | 
| 40  | F_W  | Milling Wheat                                   | Agriculture  | EUR 50      | 
| 41  | F_XX | Stoxx 50                                        | Index        | EUR 10      | 
| 42  | F_AD | Australian Dollar                               | Currency     | 1           | 
| 43  | F_BP | British Pound                                   | Currency     | 1           | 
| 44  | F_CD | Canadian Dollar                                 | Currency     | 1           | 
| 45  | F_EC | Euro                                            | Currency     | 1           | 
| 46  | F_JY | Japanese Yen                                    | Currency     | 1           | 
| 47  | F_MP | Mexican Peso                                    | Currency     | 1           | 
| 48  | F_SF | Swiss Frank                                     | Currency     | 1           | 
| 49  | F_LR | Brazilian Real                                  | Currency     | 1           | 
| 50  | F_ND | New Zealand Dollar                              | Currency     | 1           | 
| 51  | F_QT | Chinese Yuan                                    | Currency     | 1           | 
| 52  | F_RF | Euro / Swiss Franc                              | Currency     | 1           | 
| 53  | F_RP | Euro / British Pound                            | Currency     | 1           | 
| 54  | F_RR | Russian Ruble                                   | Currency     | 1           | 
| 55  | F_RY | Euro / Japanese Yen                             | Currency     | 1           | 
| 56  | F_TR | South African Rand                              | Currency     | 1           | 
| 57  | F_BO | WisdomTree Soybean Oil                          | Agriculture  | 1           | 
| 58  | F_CL | United States Oil Fund                          | Energy       | 1           | 
| 59  | F_FV | BTC iShares 3-7 Year Treasury Bond ETF          | Bond         | 1           | 
| 60  | F_MD | iShares Core S&P Mid-Cap ETF                    | Index        | 1           | 
| 61  | F_NQ | Invesco QQQ Trust Series 1                      | Index        | 1           | 
| 62  | F_PA | Aberdeen Standard Physical Palladium Shares ETF | Metal        | 1           | 
| 63  | F_PL | Aberdeen Standard Physical Platinum Shares ETF  | Metal        | 1           | 
| 64  | F_TU | BTC iShares 1-3 Year Treasury Bond ETF          | Bond         | 1           | 
| 65  | F_TY | BTC iShares 7-10 Year Treasury Bond ETF         | Bond         | 1           | 
| 66  | F_US | BTC iShares U.S. Treasury Bond ETF              | Bond         | 1           | 
| 67  | F_YM | SPDR Dow Jones Industrial Average ETF           | Index        | 1           | 
| 68  | F_S  | WisdomTree Soybeans                             | Agriculture  | 1           | 
| 69  | F_NY | iShares MSCI Japan ETF                          | Index        | 1           | 
| 70  | F_AG | Invesco DB Agriculture Fund                     | Agriculture  | 1           | 
| 71  | F_ES | S&P 500 ETF TRUST ETF                           | Index        | 1           | 

