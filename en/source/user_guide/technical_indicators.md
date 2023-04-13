# Technical Indicators

## QNT Technical Indicators

The **qnt.ta** module is a collection of technical analysis indicators and functions specially optimized for working with qnt, a platform for quantitative finance research and trading strategies. 

Indicator groups:

1. **Moving Averages**: These indicators calculate the average price over a specified number of periods to help identify trends in the market.
2. **Oscillators**: These indicators measure the momentum and trend of the market by comparing the current price to its historical average.
3. **Volatility Indicators**: These indicators help to identify how much the price of an asset is changing over time, which can be useful for managing risk.
4. **Volume Indicators**: These indicators measure the strength or weakness of a price trend based on the volume of trades occurring in the market.
5. **Overlap Studies**: These indicators are used to identify potential areas of support and resistance by analyzing the relationship between the current price and its historical moving averages.
6. **Momentum Indicators**: These indicators measure the rate of change of an asset's price over time to help identify trend reversals.
7. **Cycle Indicators**: These indicators help identify trends in the market by analyzing repeating patterns over a fixed period of time.

```Python
import qnt.data as qndata
import qnt.ta as qnta

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")
high = data.sel(field='high')
low = data.sel(field='low')
close = data.sel(field='close')
volume = data.sel(field='vol')

# Moving Averages
sma_20 = qnta.sma(close, 20)
ema_20 = qnta.ema(close, 20)
wilder_ma_20 = qnta.wilder_ma(close, 20)
lwma_20 = qnta.lwma(close, 20)
dema_20 = qnta.dema(close, 20)
tema_20 = qnta.tema(close, 20)

# Oscillators
rsi_14 = qnta.rsi(close, 14)
roc_10 = qnta.roc(close, 10)
sroc_10 = qnta.sroc(close, 10)
macd_line, macd_signal, macd_hist = qnta.macd(close, 12, 26, 9)
trix_15 = qnta.trix(close, 15)
stoch_k = qnta.stochastic_k(high, low, close, 14)
stoch_d = qnta.stochastic(high, low, close, 14)
slow_stoch_d = qnta.slow_stochastic(high, low, close, 14)

# Index Indicators
atr_14 = qnta.atr(high, low, close, 14)
tr_1 = qnta.tr(high, low, close)
dms = qnta.dms(high, low, close, 14, 14, 14)

# Cumulative
obv_line = qnta.obv(close, volume)
chaikin_adl_line = qnta.chaikin_adl(high, low, close, volume)
chaikin_oscillator = qnta.chaikin_osc(chaikin_adl_line, 3, 10)

# Global
ad_line_result = qnta.ad_line(close * data.sel(field="is_liquid"))
ad_ratio_result = qnta.ad_ratio(close * data.sel(field="is_liquid"))

# Pivot Points
pivot_points_result = qnta.pivot_points(data, 2, 3)
top_pivot_points_result = qnta.top_pivot_points(data)
bottom_pivot_points_result = qnta.bottom_pivot_points(data)

# Other functions
price_change = qnta.change(close)
shifted_data = qnta.shift(close, periods=1)
std_dev = qnta.std(close, 20)
variance_value = qnta.variance(close, 20)
covariance_value = qnta.covariance(close, close, 20)
beta_value = qnta.beta(close, close, 20)
correlation_value = qnta.correlation(close, close, 20)

print(sma_20, ema_20, wilder_ma_20, 
      lwma_20, dema_20, tema_20, 
      rsi_14, roc_10, sroc_10, macd_line, 
      macd_signal, macd_hist, trix_15, stoch_k, 
      stoch_d, slow_stoch_d, atr_14, tr_1, 
      obv_line, chaikin_adl_line, 
      chaikin_oscillator, ad_line_result, ad_ratio_result, 
      pivot_points_result, top_pivot_points_result, 
      bottom_pivot_points_result, price_change, 
      shifted_data, std_dev,variance_value, 
      covariance_value, beta_value, correlation_value)
```

### Moving Averages

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| SMA | Simple Moving Average<br>Calculates the average price over a specified number of periods. | `sma = qnt.ta.sma(close, 20)` |
| EMA | Exponential Moving Average<br>Assigns more weight to recent prices and less weight to older prices. | `ema = qnt.ta.ema(close, 20)` |
| Wilder MA | Wilder Moving Average<br>Assigns more weight to recent prices and less weight to older prices. | `wilder_ma = qnt.ta.wilder_ma(close, 20)` |
| DEMA | Double Exponential Moving Average<br>Smooths out price data more effectively than a single EMA. | `dema = qnt.ta.dema(close, 20)` |
| TEMA | Triple Exponential Moving Average<br>Smooths out price data more effectively than a single or double EMA. | `tema = qnt.ta.tema(close, 20)` |
| WMA | Weighted Moving Average<br>Assigns more weight to recent prices and less weight to older prices based on a specified weighting function. | `wma = qnt.ta.wma(close, 20)` |
| LWMA | Linearly Weighted Moving Average<br>Assigns more weight to recent prices and less weight to older prices based on a linear weighting function. | `lwma = qnt.ta.lwma(close, 20)` |
| VWMA | Volume Weighted Moving Average<br>Assigns more weight to periods with higher volume. | `vwma = qnt.ta.vwma(close, volume, 20)` |

### Oscillators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| Stochastic K | Stochastic Oscillator %K<br>Measures the current price relative to the range of prices over a specified number of periods. | `stochastic_k = qnt.ta.stochastic_k(high, low, close, 14)` |
| Stochastic | Stochastic Oscillator<br>Compares the current price to the range of prices over a specified number of periods to identify overbought and oversold conditions. | `stochastic = qnt.ta.stochastic(high, low, close, 14)` |
| Slow Stochastic | Slow Stochastic Oscillator<br>Smooths the stochastic oscillator to reduce false signals. | `slow_stochastic = qnt.ta.slow_stochastic(high, low, close)` |
| RSI | Relative Strength Index<br>Measures the strength of price movement over a specified number of periods. | `rsi = qnt.ta.rsi(close, 14)` |
| ROC | Rate of Change<br>Measures the percentage change in price over a specified number of periods. | `roc = qnt.ta.roc(close, 14)` |
| SROC | Smoothed Rate of Change<br>Smooths out the rate of change to reduce false signals. | `sroc = qnt.ta.sroc(close, 14)` |
| MACD | Moving Average Convergence Divergence<br>Compares two moving averages to identify buying and selling opportunities. | `macd, signal, hist = qnt.ta.macd(close, 12, 26, 9)` |
| TRIX | Triple Exponential Average<br>Measures the percentage change in a triple exponential moving average over a specified number of periods. | `trix = qnt.ta.trix(close, 14)` |


### Index Indicators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| ATR | Average True Range<br>Measures the volatility of an asset's price over a specified period of time. | `atr = qnt.ta.atr(high, low, close, 14)` |
| TR | True Range<br>Measures the greatest distance between the high and low over a specified period of time. | `tr = qnt.ta.tr(high, low, close)` |
| DMS | Directional Movement System<br>Measures the strength of a trend and identifies whether a market is trending or not. | `dms = qnt.ta.dms(high, low, close, 14, 14, 14)` |
| OBV | On-Balance Volume<br>Tracks the positive and negative flow of volume in a security. | `obv = qnt.ta.obv(close, volume)` |
| Chaikin ADL | Chaikin Accumulation/Distribution Line<br>Measures the cumulative flow of money into and out of a security. | `chaikin_adl = qnt.ta.chaikin_adl(high, low, close, volume)` |
| Chaikin OSC | Chaikin Oscillator<br>Measures the momentum of the Accumulation/Distribution Line. | `chaikin_osc = qnt.ta.chaikin_osc(chaikin_adl_line, 3, 10)` |
| AD Line | Accumulation/Distribution Line<br>Measures the cumulative flow of money into and out of a security. | `ad_line = qnt.ta.ad_line(close * data.sel(field="is_liquid"))` |
| AD Ratio | Accumulation/Distribution Ratio<br>Measures the buying and selling pressure on a security. | `ad_ratio = qnt.ta.ad_ratio(close * data.sel(field="is_liquid"))` |
| Pivot Points | Pivot Points<br>Identifies key levels of support and resistance in a market. | `pivot_points = qnt.ta.pivot_points(data, 2, 3)` |
| Top Pivot Points | Top Pivot Points<br>Identifies key levels of resistance in a market. | `top_pivot_points = qnt.ta.top_pivot_points(data)` |
| Bottom Pivot Points | Bottom Pivot Points<br>Identifies key levels of support in a market. | `bottom_pivot_points = qnt.ta.bottom_pivot_points(data)` |

### Other functions

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| Change | Change<br>Calculates the percentage change between the current and previous values. | `change = qnt.ta.change(close)` |
| Shift | Shift<br>Shifts a series forward or backward in time. | `shifted = qnt.ta.shift(close, 5)` |
| Standard Deviation | Standard Deviation<br>Measures the dispersion of a set of values from their mean. | `std = qnt.ta.std(close, 20)` |
| Variance | Variance<br>Measures the variability of a set of values from their mean. | `variance = qnt.ta.variance(close, 20)` |
| Covariance | Covariance<br>Measures the joint variability of two sets of values. | `covariance = qnt.ta.covariance(close1, close2, 20)` |
| Beta | Beta<br>Measures the sensitivity of a stock's returns to the market. | `beta = qnt.ta.beta(close1, close2, 20)` |
| Correlation | Correlation<br>Measures the strength of the linear relationship between two sets of values. | `correlation = qnt.ta.correlation(close1, close2, 252)` |

## TA-Lib Technical Indicators

The **xr_talib.py** is a module from the qnt library that serves as a wrapper for using the popular **TA-Lib library** with xarray. It  provides an extensive collection of technical analysis indicators for analyzing financial market data.

Indicator groups:

1. **Overlap Studies**: Smooth or filter price data for identifying trends and support/resistance levels. (e.g., moving averages, Bollinger Bands)

2. **Momentum Indicators**: Measure price change rate to identify trend strength or reversals. (e.g., RSI, MACD, Stochastic Oscillator)

3. **Volume Indicators**: Analyze the relationship between trading volume and price movements. (e.g., OBV, CMF, MFI)

4. **Volatility Indicators**: Measure price fluctuations to identify high volatility periods. (e.g., ATR, Bollinger Bands, Standard Deviation)

5. **Price Transform**: Apply mathematical transformations to price data. (e.g., Weighted Close, Typical Price, Median Price)

6. **Cycle Indicators**: Identify and measure repeating price patterns and cycles. (e.g., Hilbert Transform, Sine Wave)

7. **Pattern Recognition**: Identify price patterns or candlestick formations signaling trend reversals or continuations. (e.g., Engulfing, Doji, Hammer)

### Overlap Studies

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| SMA | Simple Moving Average<br>Calculates the average price over a specified number of periods. | `sma = qnt.xr_talib.SMA(close, 20)` |
| EMA | Exponential Moving Average<br>Calculates the average price over a specified number of periods, giving more weight to recent prices. | `ema = qnt.xr_talib.EMA(close, 20)` |
| WMA | Weighted Moving Average<br>Calculates the average price over a specified number of periods, with each price weighted proportionally to its age. | `wma = qnt.xr_talib.WMA(close, 20)` |
| DEMA | Double Exponential Moving Average<br>Averages the price data with two exponential moving averages, reducing lag. | `dema = qnt.xr_talib.DEMA(close, 20)` |
| TEMA | Triple Exponential Moving Average<br>Averages the price data with three exponential moving averages, further reducing lag. | `tema = qnt.xr_talib.TEMA(close, 20)` |
| TRIMA | Triangular Moving Average<br>Averages the price data with a triangular weighting, emphasizing the middle values of the range. | `trima = qnt.xr_talib.TRIMA(close, 20)` |
| KAMA | Kaufman Adaptive Moving Average<br>An adaptive moving average that adjusts its length based on market volatility. | `kama = qnt.xr_talib.KAMA(close, 20)` |
| MAMA | MESA Adaptive Moving Average<br>An adaptive moving average that adjusts its length based on the dominant cycle period in the data. | `mama, fama = qnt.xr_talib.MAMA(close, 0.5, 0.05)` |
| T3 | Triple Exponential Moving Average (T3)<br>A smoother version of the TEMA with reduced lag. | `t3 = qnt.xr_talib.T3(close, 20, 0.7)` |
| BBANDS | Bollinger Bands<br>Calculates a moving average with standard deviation bands above and below the average. | `upper, middle, lower = qnt.xr_talib.BBANDS(close, 20, 2, 2, 0)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")
close_prices = data.sel(field='close')

sma = xr_talib.SMA(close_prices, timeperiod=20)
ema = xr_talib.EMA(close_prices, timeperiod=20)
wma = xr_talib.WMA(close_prices, timeperiod=20)
dema = xr_talib.DEMA(close_prices, timeperiod=20)
tema = xr_talib.TEMA(close_prices, timeperiod=20)
trima = xr_talib.TRIMA(close_prices, timeperiod=20)
kama = xr_talib.KAMA(close_prices, timeperiod=20)
mama, fama = xr_talib.MAMA(close_prices, fastlimit=0.5, slowlimit=0.05)
t3 = xr_talib.T3(close_prices, timeperiod=20, vfactor=0.7)

upper, middle, lower = xr_talib.BBANDS(close_prices, timeperiod=20, nbdevup=2, nbdevdn=2)
sar = xr_talib.SAR(data, acceleration=0.02, maximum=0.2)

typprice = xr_talib.TYPPRICE(data)
wclprice = xr_talib.WCLPRICE(data)

print(sma, ema, wma, dema, tema, trima, kama, mama, fama, t3, upper, middle, lower, sar, typprice, wclprice)
```


### Momentum Indicators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| ADX | Average Directional Movement Index<br>Measures the strength of a prevailing trend. | `adx = qnt.xr_talib.ADX(data, 14)` |
| ADXR | Average Directional Movement Index Rating<br>Smoothed version of ADX. | `adxr = qnt.xr_talib.ADXR(data, 14)` |
| APO | Absolute Price Oscillator<br>Difference between two moving averages. | `apo = qnt.xr_talib.APO(close, 14, 26, 1)` |
| AROON | Aroon<br>Measures the time between the highest high and the lowest low in a given period. | `aroon_up, aroon_down = qnt.xr_talib.AROON(data, 50)` |
| AROONOSC | Aroon Oscillator<br>Difference between Aroon-Up and Aroon-Down. | `aroonosc = qnt.xr_talib.AROONOSC(data, 14)` |
| BOP | Balance of Power<br>Measures the strength of buyers and sellers in the market. | `bop = qnt.xr_talib.BOP(data)` |
| CCI | Commodity Channel Index<br>Measures the deviation of the price from its average in relation to the volatility. | `cci = qnt.xr_talib.CCI(data, 14)` |
| CMO | Chande Momentum Oscillator<br>Measures the momentum of price changes. | `cmo = qnt.xr_talib.CMO(close, 14)` |
| DX | Directional Movement Index<br>Measures the strength of a trend. | `dx = qnt.xr_talib.DX(data, 14)` |
| MACD | Moving Average Convergence Divergence<br>Measures the difference between two moving averages, with a signal line to detect trends. | `macd, macdsignal, macdhist = qnt.xr_talib.MACD(close, 12, 26, 9)` |
| MFI | Money Flow Index<br>Measures the buying and selling pressure based on price and volume. | `mfi = qnt.xr_talib.MFI(data, 14)` |
| MINUS_DI | Minus Directional Indicator<br>Measures the strength of downward price movement. | `minus_di = qnt.xr_talib.MINUS_DI(data, 14)` |
| MINUS_DM | Minus Directional Movement<br>Measures the strength of the lowest lows. | `minus_dm = qnt.xr_talib.MINUS_DM(data, 14)` |
| MOM | Momentum<br>Measures the rate of change in the price. | `mom = qnt.xr_talib.MOM(close, 10)` |
| PLUS_DI | Plus Directional Indicator<br>Measures the strength of upward price movement. | `plus_di = qnt.xr_talib.PLUS_DI(data, 14)` |
| PLUS_DM | Plus Directional Movement<br>Measures the strength of the highest highs. | `plus_dm = qnt.xr_talib.PLUS_DM(data, 14)` |
| PPO | Percentage Price Oscillator<br>Measures the percentage difference between two moving averages. | `ppo = qnt.xr_talib.PPO(close, 14, 26, 1)` |
| ROC | Rate of Change<br>Measures the percentage change in price over a specified number of periods. | `roc = qnt.xr_talib.ROC(close, 10)` |
| ROCP | Rate of Change Percentage<br>Measures the percentage change in price over a specified number of periods. | `rocp = qnt.xr_talib.ROCP(close, 10)` |
| ROCR | Rate of Change Ratio<br>Measures the ratio of the current price to the price a specified number of periods ago. | `rocr = qnt.xr_talib.ROCR(close, 10)` |
| ROCR100 | Rate of Change Ratio 100 Scale<br>Measures the ratio of the current price to the price a specified number of periods ago, multiplied by 100. | `rocr100 = qnt.xr_talib.ROCR100(close, 10)` |
| RSI | Relative Strength Index<br>Measures the speed and change of price movements. | `rsi = qnt.xr_talib.RSI(close, 14)` |
| STOCH | Stochastic Oscillator<br>Measures the level of the close relative to the high-low range over a specified number of periods. | `slowk, slowd = qnt.xr_talib.STOCH(data, 5, 3, 0, 3, 0)` |
| STOCHF | Stochastic Fast Oscillator<br>A faster version of the Stochastic Oscillator. | `fastk, fastd = qnt.xr_talib.STOCHF(data, 5, 3, 0)` |
| STOCHRSI | Stochastic Relative Strength Index<br>Applies the Stochastic Oscillator formula to RSI values. | `fastk, fastd = qnt.xr_talib.STOCHRSI(close, 14, 5, 3, 0)` |
| TRIX | Triple Exponential Moving Average Rate of Change<br>Smoothed rate of change of a triple exponential moving average. | `trix = qnt.xr_talib.TRIX(close, 30)` |
| ULTOSC | Ultimate Oscillator<br>Combines short-, medium-, and long-term price action into one oscillator. | `ultosc = qnt.xr_talib.ULTOSC(data, 7, 14, 28)` |
| WILLR | Williams %R<br>Measures the level of the close relative to the high-low range over a specified number of periods. | `willr = qnt.xr_talib.WILLR(data, 14)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")
close_prices = data.sel(field='close')

adx = xr_talib.ADX(data, timeperiod=14)
adxr = xr_talib.ADXR(data, timeperiod=14)
apo = xr_talib.APO(close_prices, fastperiod=12, slowperiod=26, matype=0)
aroon_down, aroon_up = xr_talib.AROON(data, timeperiod=14)
aroonosc = xr_talib.AROONOSC(data, timeperiod=14)
bop = xr_talib.BOP(data)
cci = xr_talib.CCI(data, timeperiod=14)
cmo = xr_talib.CMO(close_prices, timeperiod=14)
dx = xr_talib.DX(data, timeperiod=14)
macd, macdsignal, macdhist = xr_talib.MACD(close_prices, fastperiod=12, 
                                           slowperiod=26, signalperiod=9)
macdext, macdsignalext, macdhistext = xr_talib.MACDEXT(close_prices, fastperiod=12, 
                                                       slowperiod=26, signalperiod=9, 
                                                       fastmatype=0, slowmatype=0, 
                                                       signalmatype=0)
macdfix, macdsignalfix, macdhistfix = xr_talib.MACDFIX(close_prices, signalperiod=9)
mfi = xr_talib.MFI(data, timeperiod=14)
minus_di = xr_talib.MINUS_DI(data, timeperiod=14)
minus_dm = xr_talib.MINUS_DM(data, timeperiod=14)
mom = xr_talib.MOM(close_prices, timeperiod=10)
plus_di = xr_talib.PLUS_DI(data, timeperiod=14)
plus_dm = xr_talib.PLUS_DM(data, timeperiod=14)
ppo = xr_talib.PPO(close_prices, fastperiod=12, slowperiod=26, matype=0)
roc = xr_talib.ROC(close_prices, timeperiod=10)
rocp = xr_talib.ROCP(close_prices, timeperiod=10)
rocr = xr_talib.ROCR(close_prices, timeperiod=10)
rocr100 = xr_talib.ROCR100(close_prices, timeperiod=10)
rsi = xr_talib.RSI(close_prices, timeperiod=14)
stoch_slowk, stoch_slowd = xr_talib.STOCH(data, fastk_period=5, slowk_period=3, 
                                          slowk_matype=0, slowd_period=3, slowd_matype=0)
stochf_fastk, stochf_fastd = xr_talib.STOCHF(data, fastk_period=5, 
                                             fastd_period=3, fastd_matype=0)
stochrsi = xr_talib.STOCHRSI(close_prices, timeperiod=14, fastk_period=5, 
                             fastd_period=3, fastd_matype=0)
trix = xr_talib.TRIX(close_prices, timeperiod=30)
ultosc = xr_talib.ULTOSC(data, timeperiod1=7, timeperiod2=14, timeperiod3=28)
willr = xr_talib.WILLR(data, timeperiod=14)

print(adx, adxr, apo, aroon_down, aroon_up, aroonosc, bop, cci, cmo, dx, macd, 
      macdsignal, macdhist, macdext, macdsignalext, macdhistext, macdfix, macdsignalfix, 
      macdhistfix, mfi, minus_di, minus_dm, mom, plus_di, plus_dm, ppo, roc, rocp, rocr, 
      rocr100, rsi, stoch_slowk, stoch_slowd, stochf_fastk, stochf_fastd, stochrsi, trix, 
      ultosc, willr)

```

### Volume Indicators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| AD | Chaikin A/D Line<br>Measures the cumulative flow of money into and out of a security. | `ad = qnt.xr_talib.AD(data)` |
| ADOSC | Chaikin A/D Oscillator<br>Measures the momentum of the Chaikin A/D Line. | `adosc = qnt.xr_talib.ADOSC(data, 3, 10)` |
| OBV | On Balance Volume<br>Measures the cumulative volume in relation to price changes. | `obv = qnt.xr_talib.OBV(data)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

ad = xr_talib.AD(data)
adosc = xr_talib.ADOSC(data, 3, 10)
obv = xr_talib.OBV(data)

print(ad, adosc, obv)
```

### Cycle Indicators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| HT_DCPERIOD | Hilbert Transform - Dominant Cycle Period<br>Estimates the dominant cycle period of a time series. | `ht_dcperiod = qnt.xr_talib.HT_DCPERIOD(close)` |
| HT_DCPHASE | Hilbert Transform - Dominant Cycle Phase<br>Estimates the phase of the dominant cycle in a time series. | `ht_dcphase = qnt.xr_talib.HT_DCPHASE(close)` |
| HT_PHASOR | Hilbert Transform - Phasor Components<br>Computes the in-phase and quadrature components of a time series. | `inphase, quadrature = qnt.xr_talib.HT_PHASOR(close)` |
| HT_SINE | Hilbert Transform - SineWave<br>Computes the sine and lead sine of a time series. | `sine, leadsine = qnt.xr_talib.HT_SINE(close)` |
| HT_TRENDLINE | Hilbert Transform - Instantaneous Trendline<br>Computes a smoothed, nearly lagless trendline of a time series. | `ht_trendline = qnt.xr_talib.HT_TRENDLINE(close)` |
| HT_TRENDMODE | Hilbert Transform - Trend vs Cycle Mode<br>Determines if the dominant cycle of a time series is trending or oscillating. | `ht_trendmode = qnt.xr_talib.HT_TRENDMODE(close)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

ht_dcperiod = xr_talib.HT_DCPERIOD(data)
ht_dcphase = xr_talib.HT_DCPHASE(data)
ht_phasor = xr_talib.HT_PHASOR(data)
ht_sine = xr_talib.HT_SINE(data)
ht_trendline = xr_talib.HT_TRENDLINE(data)
ht_trendmode = xr_talib.HT_TRENDMODE(data)

print(ht_dcperiod, ht_dcphase, ht_phasor, ht_sine, ht_trendline, ht_trendmode)

```

### Volatility Indicators

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| ATR | Average True Range<br>Measures the market volatility by decomposing the entire range of an asset price for the period. | `atr = qnt.xr_talib.ATR(data, 14)` |
| NATR | Normalized Average True Range<br>Normalizes the Average True Range by dividing by the close price. | `natr = qnt.xr_talib.NATR(data, 14)` |
| TRANGE | True Range<br>Calculates the true range of a time series, accounting for gaps between periods. | `trange = qnt.xr_talib.TRANGE(data)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

atr = xr_talib.ATR(data, timeperiod=14)
natr = xr_talib.NATR(data, timeperiod=14)
trange = xr_talib.TRANGE(data)

print(atr, natr, trange)
```

### Price Transform

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| TYPPRICE | Typical Price<br>Calculates the typical price for a specified period. | `typprice = qnt.xr_talib.TYPPRICE(data)` |
| WCLPRICE | Weighted Close Price<br>Calculates the weighted close price for a specified period. | `wclprice = qnt.xr_talib.WCLPRICE(data)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

typprice = xr_talib.TYPPRICE(data)
wclprice = xr_talib.WCLPRICE(data)

print(typprice, wclprice)
```

### Pattern Recognition

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| CDL2CROWS | Two Crows<br>Identifies a bearish reversal pattern. | `cdl2crows = qnt.xr_talib.CDL2CROWS(data)` |
| CDL3BLACKCROWS | Three Black Crows<br>Identifies a bearish reversal pattern consisting of three consecutive black candles. | `cdl3blackcrows = qnt.xr_talib.CDL3BLACKCROWS(data)` |
| CDL3INSIDE | Three Inside Up/Down<br>Identifies a bullish or bearish reversal pattern. | `cdl3inside = qnt.xr_talib.CDL3INSIDE(data)` |
| CDL3LINESTRIKE | Three Line Strike<br>Identifies a bullish or bearish reversal pattern. | `cdl3linestrike = qnt.xr_talib.CDL3LINESTRIKE(data)` |
| CDL3OUTSIDE | Three Outside Up/Down<br>Identifies a bullish or bearish reversal pattern. | `cdl3outside = qnt.xr_talib.CDL3OUTSIDE(data)` |
| CDL3STARSINSOUTH | Three Stars In The South<br>Identifies a bullish reversal pattern. | `cdl3starsinsouth = qnt.xr_talib.CDL3STARSINSOUTH(data)` |
| CDL3WHITESOLDIERS | Three Advancing White Soldiers<br>Identifies a bullish reversal pattern. | `cdl3whitesoldiers = qnt.xr_talib.CDL3WHITESOLDIERS(data)` |
| CDLABANDONEDBABY | Abandoned Baby<br>Identifies a bullish or bearish reversal pattern. | `cdlabandonedbaby = qnt.xr_talib.CDLABANDONEDBABY(data, 0.3)` |
| CDLADVANCEBLOCK | Advance Block<br>Identifies a bearish reversal pattern. | `cdladvanceblock = qnt.xr_talib.CDLADVANCEBLOCK(data)` |
| CDLBELTHOLD | Belt-hold<br>Identifies a bullish or bearish opening pattern. | `cdlbelthold = qnt.xr_talib.CDLBELTHOLD(data)` |
| CDLBREAKAWAY | Breakaway<br>Identifies a bullish or bearish reversal pattern. | `cdlbreakaway = qnt.xr_talib.CDLBREAKAWAY(data)` |
| CDLCLOSINGMARUBOZU | Closing Marubozu<br>Identifies a bullish or bearish continuation pattern. | `cdlclosingmarubozu = qnt.xr_talib.CDLCLOSINGMARUBOZU(data)` |
| CDLCONCEALBABYSWALL | Concealing Baby Swallow<br>Identifies a bullish reversal pattern. | `cdlconcealbabyswall = qnt.xr_talib.CDLCONCEALBABYSWALL(data)` |
| CDLCOUNTERATTACK | Counterattack<br>Identifies a bullish or bearish reversal pattern. | `cdlcounterattack = qnt.xr_talib.CDLCOUNTERATTACK(data)` |
| CDLDARKCLOUDCOVER | Dark Cloud Cover<br>Identifies a bearish reversal pattern. | `cdldarkcloudcover = qnt.xr_talib.CDLDARKCLOUDCOVER(data, 0.5)` |
| CDLDOJI | Doji<br>Identifies a Doji candlestick pattern. | `cdldoji = qnt.xr_talib.CDLDOJI(data)` |
| CDLDOJISTAR | Doji Star<br>Identifies a Doji Star candlestick pattern. | `cdldojistar = qnt.xr_talib.CDLDOJISTAR(data)` |
| CDLDRAGONFLYDOJI | Dragonfly Doji<br>Identifies a Dragonfly Doji candlestick pattern. | `cdldragonflydoji = qnt.xr_talib.CDLDRAGONFLYDOJI(data)` |
| CDLENGULFING | Engulfing Pattern<br>Identifies a bullish or bearish engulfing pattern. | `cdlengulfing = qnt.xr_talib.CDLENGULFING(data)` |
| CDLEVENINGDOJISTAR | Evening Doji Star<br>Identifies a bearish reversal pattern. | `cdleveningdojistar = qnt.xr_talib.CDLEVENINGDOJISTAR(data, 0.3)` |
| CDLEVENINGSTAR | Evening Star<br>Identifies a bearish reversal pattern. | `cdleveningstar = qnt.xr_talib.CDLEVENINGSTAR(data, 0.3)` |
| CDLGAPSIDESIDEWHITE | Up/Down-gap side-by-side white lines<br>Identifies a bullish or bearish continuation pattern. | `cdlgapsidesidewhite = qnt.xr_talib.CDLGAPSIDESIDEWHITE(data)` |
| CDLGRAVESTONEDOJI | Gravestone Doji<br>Identifies a Gravestone Doji candlestick pattern. | `cdlgravestonedoji = qnt.xr_talib.CDLGRAVESTONEDOJI(data)` |
| CDLHAMMER | Hammer<br>Identifies a bullish reversal pattern. | `cdlhammer = qnt.xr_talib.CDLHAMMER(data)` |
| CDLHANGINGMAN | Hanging Man<br>Identifies a bearish reversal pattern. | `cdlhangingman = qnt.xr_talib.CDLHANGINGMAN(data)` |
| CDLHARAMI | Harami Pattern<br>Identifies a bullish or bearish reversal pattern. | `cdlharami = qnt.xr_talib.CDLHARAMI(data)` |
| CDLHARAMICROSS | Harami Cross Pattern<br>Identifies a bullish or bearish reversal pattern. | `cdlharamicross = qnt.xr_talib.CDLHARAMICROSS(data)` |
| CDLHIGHWAVE | High-Wave Candle<br>Identifies a High-Wave candlestick pattern. | `cdlhighwave = qnt.xr_talib.CDLHIGHWAVE(data)` |
| CDLHIKKAKE | Hikkake Pattern<br>Identifies a bullish or bearish reversal pattern. | `cdlhikkake = qnt.xr_talib.CDLHIKKAKE(data)` |
| CDLHIKKAKEMOD | Modified Hikkake Pattern<br>Identifies a bullish or bearish reversal pattern. | `cdlhikkakemod = qnt.xr_talib.CDLHIKKAKEMOD(data)` |
| CDLHOMINGPIGEON | Homing Pigeon<br>Identifies a bullish reversal pattern. | `cdlhomingpigeon = qnt.xr_talib.CDLHOMINGPIGEON(data)` |
| CDLIDENTICAL3CROWS | Identical Three Crows<br>Identifies a bearish reversal pattern. | `cdlidentical3crows = qnt.xr_talib.CDLIDENTICAL3CROWS(data)` |
| CDLINNECK | In-Neck Pattern<br>Identifies a bearish continuation pattern. | `cdlinneck = qnt.xr_talib.CDLINNECK(data)` |
| CDLINVERTEDHAMMER | Inverted Hammer<br>Identifies a bullish reversal pattern. | `cdlinvertedhammer = qnt.xr_talib.CDLINVERTEDHAMMER(data)` |
| CDLKICKING | Kicking<br>Identifies a bullish or bearish reversal pattern. | `cdlkicking = qnt.xr_talib.CDLKICKING(data)` |
| CDLKICKINGBYLENGTH | Kicking - bull/bear determined by the longer marubozu<br>Identifies a bullish or bearish reversal pattern. | `cdlkickingbylength = qnt.xr_talib.CDLKICKINGBYLENGTH(data)` |
| CDLLADDERBOTTOM | Ladder Bottom<br>Identifies a bullish reversal pattern. | `cdlladderbottom = qnt.xr_talib.CDLLADDERBOTTOM(data)` |
| CDLLONGLEGGEDDOJI | Long Legged Doji<br>Identifies a Long Legged Doji candlestick pattern. | `cdllongleggeddoji = qnt.xr_talib.CDLLONGLEGGEDDOJI(data)` |
| CDLLONGLINE | Long Line Candle<br>Identifies a Long Line candlestick pattern. | `cdllongline = qnt.xr_talib.CDLLONGLINE(data)` |
| CDLMARUBOZU | Marubozu<br>Identifies a Marubozu candlestick pattern. | `cdlmarubozu = qnt.xr_talib.CDLMARUBOZU(data)` |
| CDLMATCHINGLOW | Matching Low<br>Identifies a bullish reversal pattern. | `cdlmatchinglow = qnt.xr_talib.CDLMATCHINGLOW(data)` |
| CDLMATHOLD | Mat Hold<br>Identifies a bullish continuation pattern. | `cdlmathold = qnt.xr_talib.CDLMATHOLD(data, 0.5)` |
| CDLMORNINGDOJISTAR | Morning Doji Star<br>Identifies a bullish reversal pattern. | `cdlmorningdojistar = qnt.xr_talib.CDLMORNINGDOJISTAR(data, 0.3)` |
| CDLMORNINGSTAR | Morning Star<br>Identifies a bullish reversal pattern. | `cdlmorningstar = qnt.xr_talib.CDLMORNINGSTAR(data, 0.3)` |
| CDLONNECK | On-Neck Pattern<br>Identifies a bearish continuation pattern. | `cdlonneck = qnt.xr_talib.CDLONNECK(data)` |
| CDLPIERCING | Piercing Pattern<br>Identifies a bullish reversal pattern. | `cdlpiercing = qnt.xr_talib.CDLPIERCING(data)` |
| CDLRICKSHAWMAN | Rickshaw Man<br>Identifies a Rickshaw Man candlestick pattern. | `cdlrickshawman = qnt.xr_talib.CDLRICKSHAWMAN(data)` |
| CDLRISEFALL3METHODS | Rising/Falling Three Methods<br>Identifies a bullish or bearish continuation pattern. | `cdlrisefall3methods = qnt.xr_talib.CDLRISEFALL3METHODS(data)` |
| CDLSEPARATINGLINES | Separating Lines<br>Identifies a bullish or bearish continuation pattern. | `cdlseparatinglines = qnt.xr_talib.CDLSEPARATINGLINES(data)` |
| CDLSHOOTINGSTAR | Shooting Star<br>Identifies a bearish reversal pattern. | `cdlshootingstar = qnt.xr_talib.CDLSHOOTINGSTAR(data)` |
| CDLSHORTLINE | Short Line Candle<br>Identifies a Short Line candlestick pattern. | `cdlshortline = qnt.xr_talib.CDLSHORTLINE(data)` |
| CDLSPINNINGTOP | Spinning Top<br>Identifies a Spinning Top candlestick pattern. | `cdlspinningtop = qnt.xr_talib.CDLSPINNINGTOP(data)` |
| CDLSTALLEDPATTERN | Stalled Pattern<br>Identifies a bearish reversal pattern. | `cdlstalledpattern = qnt.xr_talib.CDLSTALLEDPATTERN(data)` |
| CDLSTICKSANDWICH | Stick Sandwich<br>Identifies a bullish reversal pattern. | `cdlsticksandwich = qnt.xr_talib.CDLSTICKSANDWICH(data)` |
| CDLTAKURI | Takuri (Dragonfly Doji with very long lower shadow)<br>Identifies a bullish reversal pattern. | `cdltakuri = qnt.xr_talib.CDLTAKURI(data)` |
| CDLTASUKIGAP | Tasuki Gap<br>Identifies a bullish or bearish continuation pattern. | `cdltasukigap = qnt.xr_talib.CDLTASUKIGAP(data)` |
| CDLTHRUSTING | Thrusting Pattern<br>Identifies a bearish continuation pattern. | `cdlthrusting = qnt.xr_talib.CDLTHRUSTING(data)` |
| CDLTRISTAR | Tristar Pattern<br>Identifies a Tristar candlestick pattern. | `cdltristar = qnt.xr_talib.CDLTRISTAR(data)` |
| CDLUNIQUE3RIVER | Unique 3 River<br>Identifies a bullish reversal pattern. | `cdlunique3river = qnt.xr_talib.CDLUNIQUE3RIVER(data)` |
| CDLUPSIDEGAP2CROWS | Upside Gap Two Crows<br>Identifies a bearish reversal pattern. | `cdlupsidegap2crows = qnt.xr_talib.CDLUPSIDEGAP2CROWS(data)` |
| CDLXSIDEGAP3METHODS | Upside/Downside Gap Three Methods<br>Identifies a bullish or bearish continuation pattern. | `cdlxsidegap3methods = qnt.xr_talib.CDLXSIDEGAP3METHODS(data)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

cdl2crows = xr_talib.CDL2CROWS(data)
cdl3blackcrows = xr_talib.CDL3BLACKCROWS(data)
cdl3inside = xr_talib.CDL3INSIDE(data)
cdl3linestrike = xr_talib.CDL3LINESTRIKE(data)
cdl3outside = xr_talib.CDL3OUTSIDE(data)
cdl3starsinsouth = xr_talib.CDL3STARSINSOUTH(data)
cdl3whitesoldiers = xr_talib.CDL3WHITESOLDIERS(data)
cdlabandonedbaby = xr_talib.CDLABANDONEDBABY(data, penetration=0.3)
cdladvanceblock = xr_talib.CDLADVANCEBLOCK(data)
cdlbelthold = xr_talib.CDLBELTHOLD(data)
cdlbreakaway = xr_talib.CDLBREAKAWAY(data)
cdlclosingmarubozu = xr_talib.CDLCLOSINGMARUBOZU(data)
cdlconcealbabyswall = xr_talib.CDLCONCEALBABYSWALL(data)
cdlcounterattack = xr_talib.CDLCOUNTERATTACK(data)
cdldarkcloudcover = xr_talib.CDLDARKCLOUDCOVER(data, penetration=0.5)
cdldoji = xr_talib.CDLDOJI(data)
cdldojistar = xr_talib.CDLDOJISTAR(data)
cdldragonflydoji = xr_talib.CDLDRAGONFLYDOJI(data)
cdlengulfing = xr_talib.CDLENGULFING(data)
cdleveningdojistar = xr_talib.CDLEVENINGDOJISTAR(data, penetration=0.3)
cdleveningstar = xr_talib.CDLEVENINGSTAR(data, penetration=0.3)
cdlgapsidesidewhite = xr_talib.CDLGAPSIDESIDEWHITE(data)
cdlgravestonedoji = xr_talib.CDLGRAVESTONEDOJI(data)
cdlhammer = xr_talib.CDLHAMMER(data)
cdlhangingman = xr_talib.CDLHANGINGMAN(data)
cdlharami = xr_talib.CDLHARAMI(data)
cdlharamicross = xr_talib.CDLHARAMICROSS(data)
cdlhighwave = xr_talib.CDLHIGHWAVE(data)
cdlhikkake = xr_talib.CDLHIKKAKE(data)
cdlhikkakemod = xr_talib.CDLHIKKAKEMOD(data)
cdlhomingpigeon = xr_talib.CDLHOMINGPIGEON(data)
cdlidentical3crows = xr_talib.CDLIDENTICAL3CROWS(data)
cdlinneck = xr_talib.CDLINNECK(data)
cdlinvertedhammer = xr_talib.CDLINVERTEDHAMMER(data)
cdlkicking = xr_talib.CDLKICKING(data)
cdlkickingbylength = xr_talib.CDLKICKINGBYLENGTH(data)
cdlladderbottom = xr_talib.CDLLADDERBOTTOM(data)
cdllongleggeddoji = xr_talib.CDLLONGLEGGEDDOJI(data)
cdllongline = xr_talib.CDLLONGLINE(data)
cdlmarubozu = xr_talib.CDLMARUBOZU(data)
cdlmatchinglow = xr_talib.CDLMATCHINGLOW(data)
cdlmathold = xr_talib.CDLMATHOLD(data, penetration=0.5)
cdlmorningdojistar = xr_talib.CDLMORNINGDOJISTAR(data, penetration=0.3)
cdlmorningstar = xr_talib.CDLMORNINGSTAR(data, penetration=0.3)
cdlonneck = xr_talib.CDLONNECK(data)
cdlpiercing = xr_talib.CDLPIERCING(data)
cdlrickshawman = xr_talib.CDLRICKSHAWMAN(data)
cdlrisefall3methods = xr_talib.CDLRISEFALL3METHODS(data)
cdlseparatinglines = xr_talib.CDLSEPARATINGLINES(data)
cdlshootingstar = xr_talib.CDLSHOOTINGSTAR(data)
cdlshortline = xr_talib.CDLSHORTLINE(data)
cdlspinningtop = xr_talib.CDLSPINNINGTOP(data)
cdlstalledpattern = xr_talib.CDLSTALLEDPATTERN(data)
cdlsticksandwich = xr_talib.CDLSTICKSANDWICH(data)
cdltakuri = xr_talib.CDLTAKURI(data)
cdltasukigap = xr_talib.CDLTASUKIGAP(data)
cdlthrusting = xr_talib.CDLTHRUSTING(data)
cdltristar = xr_talib.CDLTRISTAR(data)
cdlunique3river = xr_talib.CDLUNIQUE3RIVER(data)
cdlupsidegap2crows = xr_talib.CDLUPSIDEGAP2CROWS(data)
cdlxsidegap3methods = xr_talib.CDLXSIDEGAP3METHODS(data)

print(cdl2crows, cdl3blackcrows, cdl3inside, cdl3linestrike, 
      cdl3outside, cdl3starsinsouth, cdl3whitesoldiers, 
      cdlabandonedbaby, cdladvanceblock, cdlbelthold, 
      cdlbreakaway, cdlclosingmarubozu, cdlconcealbabyswall, 
      cdlcounterattack, cdldarkcloudcover, cdldoji, cdldojistar, 
      cdldragonflydoji, cdlengulfing, cdleveningdojistar, cdleveningstar, 
      cdlgapsidesidewhite, cdlgravestonedoji, cdlhammer, cdlhangingman, 
      cdlharami, cdlharamicross, cdlhighwave, cdlhikkake, cdlhikkakemod,
      cdlhomingpigeon, cdlidentical3crows, cdlinneck, cdlinvertedhammer, 
      cdlkicking, cdlkickingbylength, cdlladderbottom, cdllongleggeddoji, 
      cdllongline, cdlmarubozu, cdlmatchinglow, cdlmathold, 
      cdlmorningdojistar, cdlmorningstar, cdlonneck, cdlpiercing, 
      cdlrickshawman, cdlrisefall3methods, cdlseparatinglines, 
      cdlshootingstar, cdlshortline, cdlspinningtop, cdlstalledpattern, 
      cdlsticksandwich, cdltakuri, cdltasukigap, cdlthrusting, cdltristar,
      cdlunique3river, cdlupsidegap2crows, cdlxsidegap3methods)
```


### Statistic Functions

| Short Name | Full Name and Description | Code Example |
| --- | --- | --- |
| BETA | Beta<br>Calculates the beta coefficient of a stock in relation to a benchmark index. | `beta, _ = talib.BETA(high, low, timeperiod=5)` |
| CORREL | Correlation Coefficient<br>Calculates the Pearson correlation coefficient between two datasets. | `correl, _ = talib.CORREL(high, low, timeperiod=30)` |
| LINEARREG | Linear Regression<br>Performs a linear regression on the given dataset. | `linearreg, _ = talib.LINEARREG(close, timeperiod=14)` |
| LINEARREG_ANGLE | Linear Regression Angle<br>Calculates the angle of the linear regression line. | `linearreg_angle, _ = talib.LINEARREG_ANGLE(close, timeperiod=14)` |
| LINEARREG_INTERCEPT | Linear Regression Intercept<br>Calculates the intercept of the linear regression line. | `linearreg_intercept, _ = talib.LINEARREG_INTERCEPT(close, timeperiod=14)` |
| LINEARREG_SLOPE | Linear Regression Slope<br>Calculates the slope of the linear regression line. | `linearreg_slope, _ = talib.LINEARREG_SLOPE(close, timeperiod=14)` |
| STDDEV | Standard Deviation<br>Calculates the standard deviation of the given dataset. | `stddev, _ = talib.STDDEV(close, timeperiod=5)` |
| TSF | Time Series Forecast<br>Calculates the Time Series Forecast value for the given dataset. | `tsf, _ = talib.TSF(close, timeperiod=14)` |
| VAR | Variance<br>Calculates the variance of the given dataset. | `var, _ = talib.VAR(close, timeperiod=5)` |

```Python
import qnt.xr_talib as xr_talib
import qnt.data as qndata

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")
close = data.sel(field="close")
is_liquid = data.sel(field="is_liquid")

beta = xr_talib.BETA(close, is_liquid, timeperiod=5)
correl = xr_talib.CORREL(close, is_liquid, timeperiod=30)
linearreg = xr_talib.LINEARREG(data, timeperiod=14)
linearreg_angle = xr_talib.LINEARREG_ANGLE(data, timeperiod=14)
linearreg_intercept = xr_talib.LINEARREG_INTERCEPT(data, timeperiod=14)
linearreg_slope = xr_talib.LINEARREG_SLOPE(data, timeperiod=14)
stddev = xr_talib.STDDEV(data, timeperiod=5)
tsf = xr_talib.TSF(data, timeperiod=14)
var = xr_talib.VAR(data, timeperiod=5)

print(beta, correl, linearreg, linearreg_angle, linearreg_intercept, linearreg_slope, stddev, tsf, var)

```

## Examples

* [Q18 Technical Analysis using Index Data](https://quantiacs.com/documentation/en/examples/q18_technical_analysis_using_index_data.html) - This strategy uses the SP500 index data and technical indicators to trade NASDAQ stocks.

* [Technical Analysis using trix, ema](https://quantiacs.com/documentation/en/examples/technical_analysis_using_trix_ema.html) - The template defines a trading strategy that combines TRIX and EMA technical indicators to calculate weights for NASDAQ 100 stocks.

* [Technical Analysis using atr, lwma](https://quantiacs.com/documentation/en/examples/technical_analysis_using_atr_lwma.html) - The template defines a trading strategy that combines ATR and LWMA technical indicators to calculate weights for NASDAQ 100 stocks.
