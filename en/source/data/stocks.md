# Stocks

## Stocks S&P500

Quantiacs provides historic, split adjusted, data for more than 750 stocks, all have been **S&P500** index constituents at some point from 2006.

```python
import qnt.data as qndata

stocks_list = qndata.stocks.load_spx_list(min_date='2006-01-01')
data = qndata.stocks.load_spx_data(min_date="2006-01-01", assets=stocks_list)
print([x['id'] for x in stocks_list])

['NAS:AAL', 'NAS:AAPL', 'NAS:ABKFQ', 'NAS:ABNB', 'NAS:ACAS', 'NAS:ACGL', 'NAS:ADBE', 'NAS:ADCT', 'NAS:ADI', 'NAS:ADP',
 'NAS:ADSK', 'NAS:AEP', 'NAS:AKAM', 'NAS:ALGN', 'NAS:ALTR', 'NAS:ALTR~1', 'NAS:ALXN', 'NAS:AMAT', 'NAS:AMCC', 'NAS:AMD',
 'NAS:AMGN', 'NAS:AMZN', 'NAS:ANSS', 'NAS:APA', 'NAS:APOL', 'NAS:ATVI', 'NAS:AVGO', 'NAS:AXON', 'NAS:BBBY', 'NAS:BHF',
 'NAS:BIIB', 'NAS:BKNG', 'NAS:BKR', 'NAS:BMC', 'NAS:BRCM', 'NAS:CA', 'NAS:CAR', 'NAS:CA~1', 'NAS:CCEP', 'NAS:CDNS',
 'NAS:CDW', 'NAS:CEG', 'NAS:CELG', 'NAS:CEPH', 'NAS:CERN', 'NAS:CHRW', 'NAS:CHTR', 'NAS:CINF', 'NAS:CMCSA', 'NAS:CMCSK',
 'NAS:CME', 'NAS:CMVT', 'NAS:COO', 'NAS:COST', 'NAS:CPB', 'NAS:CPRT', 'NAS:CPWR', 'NAS:CRWD', 'NAS:CSCO', 'NAS:CSGP',
 'NAS:CSX', 'NAS:CTAS', 'NAS:CTSH', 'NAS:CTXS', 'NAS:CZR', 'NAS:DELL', 'NAS:DISCA', 'NAS:DISCK', 'NAS:DISH', 'NAS:DLTR',
 'NAS:DTV', 'NAS:DXCM', 'NAS:DYNIQ', 'NAS:EA', 'NAS:EBAY', 'NAS:EMBC', 'NAS:ENDP', 'NAS:ENPH', 'NAS:EQIX', 'NAS:ESRX',
 'NAS:ETSY', 'NAS:EVRG', 'NAS:EXC', 'NAS:EXPE', 'NAS:FANG', 'NAS:FAST', 'NAS:FFIV', 'NAS:FITB', 'NAS:FLIR', 'NAS:FOSL',
 'NAS:FOX', 'NAS:FOXA', 'NAS:FSLR', 'NAS:FTNT', 'NAS:GEHC', 'NAS:GEN', 'NAS:GENZ', 'NAS:GILD', 'NAS:GMCR', 'NAS:GOOG',
 'NAS:GOOGL', 'NAS:GT', 'NAS:HAS', 'NAS:HBAN', 'NAS:HOLX', 'NAS:HON', 'NAS:HSIC', 'NAS:HST', 'NAS:IACI', 'NAS:IDXX',
 'NAS:ILMN', 'NAS:INCY', 'NAS:INTC', 'NAS:INTU', 'NAS:IPGP', 'NAS:ISRG', 'NAS:JAVA', 'NAS:JBHT', 'NAS:JKHY', 'NAS:KDP',
 'NAS:KHC', 'NAS:KLAC', 'NAS:KRFT', 'NAS:LEHMQ', 'NAS:LIFE', 'NAS:LIN', 'NAS:LKQ', 'NAS:LLTC', 'NAS:LNT', 'NAS:LRCX',
 'NAS:LULU', 'NAS:MAR', 'NAS:MAT', 'NAS:MCHP', 'NAS:MDLZ', 'NAS:META', 'NAS:MKTX', 'NAS:MNST', 'NAS:MOLX', 'NAS:MPWR',
 'NAS:MRNA', 'NAS:MSFT', 'NAS:MTCH', 'NAS:MU', 'NAS:MXIM', 'NAS:MYL', 'NAS:NAVI', 'NAS:NDAQ', 'NAS:NDSN', 'NAS:NFLX',
 'NAS:NKTR', 'NAS:NOVL', 'NAS:NTAP', 'NAS:NTRS', 'NAS:NVDA', 'NAS:NWL', 'NAS:NWS', 'NAS:NWSA', 'NAS:NXPI', 'NAS:ODFL',
 'NAS:ON', 'NAS:ORLY', 'NAS:PANW', 'NAS:PARA', 'NAS:PAYX', 'NAS:PCAR', 'NAS:PDCO', 'NAS:PENN', 'NAS:PEP', 'NAS:PETM',
 'NAS:PFG', 'NAS:PMCS', 'NAS:PODD', 'NAS:POOL', 'NAS:PTC', 'NAS:PYPL', 'NAS:QCOM', 'NAS:QLGC', 'NAS:QRVO', 'NAS:REG',
 'NAS:REGN', 'NAS:ROP', 'NAS:ROST', 'NAS:SANM', 'NAS:SBAC', 'NAS:SBUX', 'NAS:SEDG', 'NAS:SIAL', 'NAS:SLM', 'NAS:SMCI',
 'NAS:SNDK', 'NAS:SNI', 'NAS:SNPS', 'NAS:SPLS', 'NAS:SRCL', 'NAS:SSP', 'NAS:STI', 'NAS:STLD', 'NAS:STX', 'NAS:SWKS',
 'NAS:TECH', 'NAS:TER', 'NAS:TFCF', 'NAS:TFCFA', 'NAS:TLAB', 'NAS:TMUS', 'NAS:TRIP', 'NAS:TRMB', 'NAS:TROW', 'NAS:TSCO',
 'NAS:TSLA', 'NAS:TTWO', 'NAS:TXN', 'NAS:UAL', 'NAS:ULTA', 'NAS:URBN', 'NAS:VIAB', 'NAS:VIAV', 'NAS:VRSK', 'NAS:VRSN',
 'NAS:VRTX', 'NAS:VTRS', 'NAS:WAMUQ', 'NAS:WBA', 'NAS:WBD', 'NAS:WDC', 'NAS:WFM', 'NAS:WTW', 'NAS:WYNN', 'NAS:XEL',
 'NAS:XLNX', 'NAS:XRAY', 'NAS:XRX', 'NAS:ZBRA', 'NAS:ZIMV', 'NAS:ZION', 'NYS:A', 'NYS:AA', 'NYS:AAP', 'NYS:ABBV',
 'NYS:ABT', 'NYS:ACN', 'NYS:ADCT', 'NYS:ADM', 'NYS:ADNT', 'NYS:AEE', 'NYS:AES', 'NYS:AET', 'NYS:AFL', 'NYS:AGN',
 'NYS:AIG', 'NYS:AIV', 'NYS:AIZ', 'NYS:AJG', 'NYS:AKS', 'NYS:ALB', 'NYS:ALK', 'NYS:ALL', 'NYS:ALLE', 'NYS:AMCR',
 'NYS:AME', 'NYS:AMG', 'NYS:AMP', 'NYS:AMT', 'NYS:AN', 'NYS:ANDV', 'NYS:ANET', 'NYS:ANF', 'NYS:AON', 'NYS:AOS',
 'NYS:APA', 'NYS:APC', 'NYS:APD', 'NYS:APH', 'NYS:APTV', 'NYS:ARE', 'NYS:ARG', 'NYS:ASH', 'NYS:ATGE', 'NYS:ATI',
 'NYS:ATO', 'NYS:AVB', 'NYS:AVP', 'NYS:AVY', 'NYS:AWK', 'NYS:AXP', 'NYS:AYI', 'NYS:AZO', 'NYS:BA', 'NYS:BAC',
 'NYS:BALL', 'NYS:BAX', 'NYS:BBWI', 'NYS:BBY', 'NYS:BC', 'NYS:BCR', 'NYS:BDX', 'NYS:BEN', 'NYS:BF.B', 'NYS:BFH',
 'NYS:BG', 'NYS:BHI', 'NYS:BIG', 'NYS:BIO', 'NYS:BK', 'NYS:BLDR', 'NYS:BLK', 'NYS:BMS', 'NYS:BMY', 'NYS:BR',
 'NYS:BRK.B', 'NYS:BRO', 'NYS:BSX', 'NYS:BWA', 'NYS:BX', 'NYS:BXLT', 'NYS:BXP', 'NYS:C', 'NYS:CAG', 'NYS:CAH',
 'NYS:CAM', 'NYS:CARR', 'NYS:CAT', 'NYS:CB', 'NYS:CBE', 'NYS:CBOE', 'NYS:CBRE', 'NYS:CCI', 'NYS:CCL', 'NYS:CE',
 'NYS:CEG', 'NYS:CF', 'NYS:CFG', 'NYS:CFN', 'NYS:CHD', 'NYS:CI', 'NYS:CIEN', 'NYS:CL', 'NYS:CLF', 'NYS:CLX', 'NYS:CMA',
 'NYS:CMG', 'NYS:CMI', 'NYS:CMS', 'NYS:CNC', 'NYS:CNP', 'NYS:CNX', 'NYS:COF', 'NYS:COL', 'NYS:COP', 'NYS:COR',
 'NYS:COTY', 'NYS:COV', 'NYS:CPAY', 'NYS:CPGX', 'NYS:CPRI', 'NYS:CPT', 'NYS:CRL', 'NYS:CRM', 'NYS:CSC', 'NYS:CSRA',
 'NYS:CTLT', 'NYS:CTRA', 'NYS:CTVA', 'NYS:CVC', 'NYS:CVG', 'NYS:CVH', 'NYS:CVS', 'NYS:CVX', 'NYS:CXO', 'NYS:D',
 'NYS:DAL', 'NYS:DAY', 'NYS:DD', 'NYS:DDS', 'NYS:DD~1', 'NYS:DE', 'NYS:DECK', 'NYS:DELL', 'NYS:DFS', 'NYS:DG',
 'NYS:DGX', 'NYS:DHI', 'NYS:DHR', 'NYS:DIS', 'NYS:DLR', 'NYS:DLX', 'NYS:DOC', 'NYS:DOV', 'NYS:DOW', 'NYS:DOW~1',
 'NYS:DPZ', 'NYS:DRI', 'NYS:DTE', 'NYS:DTM', 'NYS:DUK', 'NYS:DVA', 'NYS:DVN', 'NYS:DXC', 'NYS:ECL', 'NYS:ED', 'NYS:EFX',
 'NYS:EG', 'NYS:EIX', 'NYS:EL', 'NYS:ELV', 'NYS:EMC', 'NYS:EMN', 'NYS:EMR', 'NYS:EOG', 'NYS:EP', 'NYS:EPAM', 'NYS:EP~1',
 'NYS:EQR', 'NYS:EQT', 'NYS:ES', 'NYS:ESS', 'NYS:ETN', 'NYS:ETR', 'NYS:EW', 'NYS:EXPD', 'NYS:EXR', 'NYS:F', 'NYS:FBIN',
 'NYS:FCX', 'NYS:FDO', 'NYS:FDS', 'NYS:FDX', 'NYS:FE', 'NYS:FHI', 'NYS:FHN', 'NYS:FI', 'NYS:FICO', 'NYS:FIS', 'NYS:FL',
 'NYS:FLR', 'NYS:FLS', 'NYS:FMC', 'NYS:FRT', 'NYS:FTI', 'NYS:FTV', 'NYS:GAS', 'NYS:GD', 'NYS:GDDY', 'NYS:GE', 'NYS:GEV',
 'NYS:GGP', 'NYS:GHC', 'NYS:GIS', 'NYS:GL', 'NYS:GLW', 'NYS:GM', 'NYS:GME', 'NYS:GNRC', 'NYS:GNW', 'NYS:GPC', 'NYS:GPN',
 'NYS:GR', 'NYS:GRMN', 'NYS:GS', 'NYS:GWW', 'NYS:HAL', 'NYS:HAR', 'NYS:HBI', 'NYS:HCA', 'NYS:HD', 'NYS:HES', 'NYS:HFC',
 'NYS:HIG', 'NYS:HII', 'NYS:HLT', 'NYS:HMA', 'NYS:HNZ', 'NYS:HOG', 'NYS:HOT', 'NYS:HP', 'NYS:HPE', 'NYS:HPQ', 'NYS:HRB',
 'NYS:HRL', 'NYS:HSH', 'NYS:HSP', 'NYS:HSY', 'NYS:HUBB', 'NYS:HUM', 'NYS:HWM', 'NYS:IBM', 'NYS:ICE', 'NYS:IEX',
 'NYS:IFF', 'NYS:INVH', 'NYS:IP', 'NYS:IPG', 'NYS:IQV', 'NYS:IR', 'NYS:IRM', 'NYS:IT', 'NYS:ITT', 'NYS:ITW', 'NYS:IVZ',
 'NYS:J', 'NYS:JBL', 'NYS:JCI', 'NYS:JEF', 'NYS:JNJ', 'NYS:JNPR', 'NYS:JNS', 'NYS:JNY', 'NYS:JOY', 'NYS:JPM', 'NYS:JWN',
 'NYS:K', 'NYS:KATE', 'NYS:KBH', 'NYS:KEY', 'NYS:KEYS', 'NYS:KIM', 'NYS:KKR', 'NYS:KMB', 'NYS:KMI', 'NYS:KMX', 'NYS:KO',
 'NYS:KR', 'NYS:KSS', 'NYS:KVUE', 'NYS:L', 'NYS:LDOS', 'NYS:LEG', 'NYS:LEN', 'NYS:LH', 'NYS:LHX', 'NYS:LLL', 'NYS:LLY',
 'NYS:LM', 'NYS:LMT', 'NYS:LNC', 'NYS:LO', 'NYS:LOW', 'NYS:LPX', 'NYS:LUMN', 'NYS:LUV', 'NYS:LVLT', 'NYS:LVS', 'NYS:LW',
 'NYS:LXK', 'NYS:LYB', 'NYS:LYV', 'NYS:M', 'NYS:MA', 'NYS:MAA', 'NYS:MAC', 'NYS:MAS', 'NYS:MBI', 'NYS:MCD', 'NYS:MCK',
 'NYS:MCO', 'NYS:MDT', 'NYS:MET', 'NYS:MGM', 'NYS:MHK', 'NYS:MHS', 'NYS:MI', 'NYS:MI~1', 'NYS:MJN', 'NYS:MKC',
 'NYS:MLM', 'NYS:MMC', 'NYS:MMM', 'NYS:MO', 'NYS:MOH', 'NYS:MOS', 'NYS:MPC', 'NYS:MRK', 'NYS:MRO', 'NYS:MS', 'NYS:MSCI',
 'NYS:MSI', 'NYS:MTB', 'NYS:MTD', 'NYS:MTG', 'NYS:MTW', 'NYS:MUR', 'NYS:MWV', 'NYS:MWW', 'NYS:NBL', 'NYS:NBR',
 'NYS:NCLH', 'NYS:NEE', 'NYS:NEM', 'NYS:NFX', 'NYS:NI', 'NYS:NKE', 'NYS:NOC', 'NYS:NOV', 'NYS:NOW', 'NYS:NRG',
 'NYS:NSC', 'NYS:NUE', 'NYS:NVR', 'NYS:NYT', 'NYS:O', 'NYS:OGN', 'NYS:OI', 'NYS:OKE', 'NYS:OMC', 'NYS:OMX', 'NYS:ONL',
 'NYS:ORCL', 'NYS:OTIS', 'NYS:OXY', 'NYS:PAYC', 'NYS:PBI', 'NYS:PCG', 'NYS:PCL', 'NYS:PCP', 'NYS:PEG', 'NYS:PFE',
 'NYS:PG', 'NYS:PGR', 'NYS:PH', 'NYS:PHM', 'NYS:PKG', 'NYS:PLD', 'NYS:PM', 'NYS:PNC', 'NYS:PNR', 'NYS:PNW', 'NYS:POM',
 'NYS:PPG', 'NYS:PPL', 'NYS:PRGO', 'NYS:PRU', 'NYS:PSA', 'NYS:PSX', 'NYS:PVH', 'NYS:PWR', 'NYS:PX', 'NYS:R', 'NYS:RAI',
 'NYS:RCL', 'NYS:RDC', 'NYS:RF', 'NYS:RHI', 'NYS:RHT', 'NYS:RIG', 'NYS:RJF', 'NYS:RL', 'NYS:RMD', 'NYS:ROK', 'NYS:ROL',
 'NYS:RRC', 'NYS:RSG', 'NYS:RTN', 'NYS:RTX', 'NYS:RVTY', 'NYS:SCG', 'NYS:SCHW', 'NYS:SEE', 'NYS:SHW', 'NYS:SIG',
 'NYS:SITC', 'NYS:SJM', 'NYS:SLB', 'NYS:SLG', 'NYS:SLVM', 'NYS:SNA', 'NYS:SNV', 'NYS:SO', 'NYS:SOLV', 'NYS:SPG',
 'NYS:SPGI', 'NYS:SRE', 'NYS:STE', 'NYS:STI', 'NYS:STJ', 'NYS:STR', 'NYS:STR~1', 'NYS:STT', 'NYS:STZ', 'NYS:SVU',
 'NYS:SW', 'NYS:SWK', 'NYS:SWN', 'NYS:SWY', 'NYS:SYF', 'NYS:SYK', 'NYS:SYY', 'NYS:T', 'NYS:TAP', 'NYS:TDC', 'NYS:TDG',
 'NYS:TDY', 'NYS:TEG', 'NYS:TEL', 'NYS:TEX', 'NYS:TFC', 'NYS:TFX', 'NYS:TGNA', 'NYS:TGT', 'NYS:THC', 'NYS:TIE',
 'NYS:TIF', 'NYS:TIN', 'NYS:TJX', 'NYS:TMO', 'NYS:TNL', 'NYS:TPR', 'NYS:TRGP', 'NYS:TRV', 'NYS:TSN', 'NYS:TSS',
 'NYS:TT', 'NYS:TUP', 'NYS:TWC', 'NYS:TWX', 'NYS:TXT', 'NYS:TYL', 'NYS:UA', 'NYS:UAA', 'NYS:UBER', 'NYS:UDR', 'NYS:UHS',
 'NYS:UIS', 'NYS:UNH', 'NYS:UNM', 'NYS:UNP', 'NYS:UPS', 'NYS:URI', 'NYS:USB', 'NYS:V', 'NYS:VFC', 'NYS:VICI', 'NYS:VLO',
 'NYS:VLTO', 'NYS:VMC', 'NYS:VNO', 'NYS:VNT', 'NYS:VSCO', 'NYS:VST', 'NYS:VTR', 'NYS:VYX', 'NYS:VZ', 'NYS:WAB',
 'NYS:WAT', 'NYS:WCG', 'NYS:WEC', 'NYS:WELL', 'NYS:WFC', 'NYS:WHR', 'NYS:WM', 'NYS:WMB', 'NYS:WMT', 'NYS:WOR',
 'NYS:WRB', 'NYS:WST', 'NYS:WU', 'NYS:WY', 'NYS:X', 'NYS:XOM', 'NYS:XYL', 'NYS:YUM', 'NYS:ZBH', 'NYS:ZTS']
```

### Examples

```python
import xarray as xr
import qnt.ta as qnta
import qnt.data as qndata
import qnt.output as qnout
import qnt.stats as qns

data = qndata.stocks.load_spx_data(min_date="2005-01-01")
contest_type = "stocks_s&p500"

def calculate_weights(data):
    close = data.sel(field="close")
    is_liquid = data.sel(field="is_liquid")
    sma_slow = qnta.sma(close, 200)
    sma_fast = qnta.sma(close, 20)
    # 1 buy; -1 sell; 0 no trade
    weights = xr.where(sma_slow < sma_fast, 1, 0)
    weights = weights * is_liquid
    return weights

weights = calculate_weights(data)
weights = qnout.clean(weights, data, contest_type)

# calc stats
stats = qns.calc_stat(data, weights.sel(time=slice("2006-01-01", None)))
display(stats.to_pandas().tail())

# graph
performance = stats.to_pandas()["equity"]
import qnt.graph as qngraph

qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")

weights = weights.sel(time=slice("2006-01-01",None))

qnout.check(weights, data, contest_type, check_correlation=False)
qnout.write(weights) # to participate in the competition
```

## Stocks NASDAQ100

Quantiacs provides historic, split adjusted, data for more than 250 stocks, all have been **NASDAQ100** index constituents at some point from 2001. (the beginning of index membership data). Most of stocks from the set are still active, but part of them aren't, and the main reason for keeping them still is to avoid survivorship bias occurrence.

```python
import qnt.data as qndata
stocks_list = qndata.stocks.load_ndx_list(min_date='2006-01-01')
data = qndata.stocks.load_ndx_data(min_date="2006-01-01", assets=stocks_list)
print([x['id'] for x in stocks_list])

[
    "NAS:AAL", "NAS:AAPL", "NAS:ABNB", "NAS:ADBE", "NAS:ADI", "NAS:ADP", "NAS:ADSK", "NAS:AEP",
    "NAS:AKAM", "NAS:ALGN", "NAS:ALTR", "NAS:ALTR~1", "NAS:ALXN", "NAS:AMAT", "NAS:AMD", "NAS:AMGN",
    "NAS:AMLN", "NAS:AMZN", "NAS:ANSS", "NAS:APOL", "NAS:ASML", "NAS:ATVI", "NAS:AVGO", "NAS:AZN",
    "NAS:BATRA", "NAS:BATRK", "NAS:BBBY", "NAS:BIDU", "NAS:BIIB", "NAS:BKNG", "NAS:BKR", "NAS:BMC",
    "NAS:BMRN", "NAS:BRCM", "NAS:CA", "NAS:CDNS", "NAS:CDW", "NAS:CEG", "NAS:CELG", "NAS:CEPH",
    "NAS:CERN", "NAS:CHKP", "NAS:CHRW", "NAS:CHTR", "NAS:CMCSA", "NAS:CMCSK", "NAS:CMVT", "NAS:COST",
    "NAS:CPRT", "NAS:CPWR", "NAS:CRWD", "NAS:CSCO", "NAS:CSGP", "NAS:CSX", "NAS:CTAS", "NAS:CTRX",
    "NAS:CTSH", "NAS:CTXS", "NAS:DDOG", "NAS:DELL", "NAS:DISCA", "NAS:DISCK", "NAS:DISH", "NAS:DLTR",
    "NAS:DOCU", "NAS:DTV", "NAS:DXCM", "NAS:EA", "NAS:EBAY", "NAS:ENDP", "NAS:ENPH", "NAS:EQIX",
    "NAS:ERIC", "NAS:ESRX", "NAS:EXC", "NAS:EXPD", "NAS:EXPE", "NAS:FANG", "NAS:FAST", "NAS:FB",
    "NAS:FFIV", "NAS:FISV", "NAS:FLEX", "NAS:FLIR", "NAS:FMCN", "NAS:FOSL", "NAS:FOX", "NAS:FOXA",
    "NAS:FSLR", "NAS:FTNT", "NAS:FWLT", "NAS:FWONA", "NAS:FWONK", "NAS:GENZ", "NAS:GFS", "NAS:GILD",
    "NAS:GMCR", "NAS:GNTX", "NAS:GOOG", "NAS:GOOGL", "NAS:HAS", "NAS:HOLX", "NAS:HON", "NAS:HSIC",
    "NAS:IACI", "NAS:IDXX", "NAS:ILMN", "NAS:INCY", "NAS:INTC", "NAS:INTU", "NAS:ISIL", "NAS:ISRG",
    "NAS:JAVA", "NAS:JBHT", "NAS:JD", "NAS:KDP", "NAS:KHC", "NAS:KLAC", "NAS:KRFT", "NAS:LAMR",
    "NAS:LBTYA", "NAS:LBTYK", "NAS:LCID","NAS:LEAP", "NAS:LIFE", "NAS:LIFE~1", "NAS:LLTC", "NAS:LNCR", 
    "NAS:LOGI", "NAS:LRCX", "NAS:LULU", "NAS:LVNTA", "NAS:MAR", "NAS:MAT", "NAS:MCHP", "NAS:MDLZ",
    "NAS:MOLX", "NAS:MRNA", "NAS:MRVL", "NAS:MSFT", "NAS:MTCH", "NAS:MU", "NAS:MXIM", "NAS:MYL",
    "NAS:NFLX", "NAS:NIHDQ", "NAS:NLOK", "NAS:NTAP", "NAS:NTES", "NAS:NUAN", "NAS:NVDA", "NAS:NXPI",
    "NAS:ODFL", "NAS:OKTA", "NAS:ORLY", "NAS:PANW", "NAS:PAYX", "NAS:PCAR", "NAS:PDCO", "NAS:PDD",
    "NAS:PEP", "NAS:PETM", "NAS:PPDI", "NAS:PRDO", "NAS:PTEN", "NAS:PTON", "NAS:PYPL", "NAS:QCOM",
    "NAS:QLGC", "NAS:QRTEA", "NAS:REGN", "NAS:RIVN", "NAS:ROST", "NAS:RYAAY", "NAS:SANM", "NAS:SBAC",
    "NAS:SBUX", "NAS:SEPR", "NAS:SGEN", "NAS:SHPG", "NAS:SIAL", "NAS:SIRI", "NAS:SNDK", "NAS:SNPS",
    "NAS:SPLK", "NAS:SPLS", "NAS:SRCL", "NAS:STLD", "NAS:STRZA", "NAS:SWKS", "NAS:TCOM", "NAS:TEAM",
    "NAS:TFCF", "NAS:TFCFA", "NAS:TIGO", "NAS:TLAB", "NAS:TMUS", "NAS:TRIP", "NAS:TSCO", "NAS:TSLA",
    "NAS:TTWO", "NAS:TXN", "NAS:UAL", "NAS:ULTA", "NAS:URBN", "NAS:VEON", "NAS:VIAB", "NAS:VIAV",
    "NAS:VMED", "NAS:VOD", "NAS:VRSK", "NAS:VRSN", "NAS:VRTX", "NAS:WBA", "NAS:WBD", "NAS:WCRX",
    "NAS:WDAY", "NAS:WDC", "NAS:WFM", "NAS:WTW", "NAS:WYNN", "NAS:XEL", "NAS:XLNX", "NAS:XRAY",
    "NAS:MELI", "NAS:META", "NAS:MNST", "NAS:ZM", "NAS:ZS", "NYS:AEO", "NYS:BB", "NYS:DELL", 
    "NYS:GRMN", "NYS:INFY", "NYS:JNPR","NYS:JOY", "NYS:LVLT", "NYS:MWW", "NYS:NCLH", "NYS:ORCL", 
    "NYS:PRGO", "NYS:QGEN", "NYS:RHT", "NYS:TEVA"]
```

| N   | ID         | Name                                                                                                    | Sector                | SIC ID  | FIGI          |
|-----|------------|---------------------------------------------------------------------------------------------------------|-----------------------|---------|---------------|
| 1   | NAS:AAL    | American Airlines Group                                                                                 | Consumer Goods        | 6201    | tts-67645939  | 
| 2   | NAS:AAPL   | Apple                                                                                                   | IT/Telecommunications | 320193  | tts-831814    | 
| 3   | NAS:ABNB   | Airbnb Inc                                                                                              |                       | 1559720 | tts-207966789 | 
| 4   | NAS:ADBE   | Adobe                                                                                                   | IT/Telecommunications | 796343  | tts-827038    | 
| 5   | NAS:ADI    | Analog Devices                                                                                          | IT/Telecommunications | 6281    | tts-41568568  | 
| 6   | NAS:ADP    | Automatic Data Processing                                                                               | Finance               | 8670    | tts-15888595  | 
| 7   | NAS:ADSK   | Autodesk                                                                                                | IT/Telecommunications | 769397  | tts-831838    | 
| 8   | NAS:AEP    | American Electric Power Company                                                                         | Energy                | 4904    | tts-203738081 | 
| 9   | NAS:AKAM   | Akamai Technologies                                                                                     | IT/Telecommunications | 1086222 | tts-831856    | 
| 10  | NAS:ALGN   | Align Technology                                                                                        | Healthcare            | 1097149 | tts-827425    | 
| 11  | NAS:ALTR   | Altair Engineering                                                                                      |                       |         | tts-827511    | 
| 12  | NAS:ALTR~1 | Altair Engineering Inc                                                                                  | IT/Telecommunication  |         | tts-130097863 | 
| 13  | NAS:ALXN   | Alexion Pharmaceuticals                                                                                 | Healthcare            | 899866  | tts-831866    | 
| 14  | NAS:AMAT   | Applied Materials                                                                                       | IT/Telecommunications | 6951    | tts-827539    | 
| 15  | NAS:AMD    | Advanced Micro Devices                                                                                  | IT/Telecommunications | 2488    | tts-80383707  | 
| 16  | NAS:AMGN   | Amgen                                                                                                   | Healthcare            | 318154  | tts-827593    | 
| 17  | NAS:AMLN   | Amylin Pharmaceuticals, Inc.                                                                            |                       |         | tts-831872    | 
| 18  | NAS:AMZN   | Amazon.com                                                                                              | IT/Telecommunications | 1018724 | tts-827705    | 
| 19  | NAS:ANSS   | ANSYS                                                                                                   | IT/Telecommunications | 1013462 | tts-827769    | 
| 20  | NAS:APOL   | Apollo Education Group, Inc.                                                                            | Industry              |         | tts-827801    | 
| 21  | NAS:ASML   | ASML Holding NV                                                                                         | IT/Telecommunications |         | tts-827847    | 
| 22  | NAS:ATVI   | Activision Blizzard                                                                                     | IT/Telecommunications | 718877  | tts-827879    | 
| 23  | NAS:AVGO   | Broadcom                                                                                                |                       | 1730168 | tts-3685519   | 
| 24  | NAS:AZN    | AstraZeneca PLC                                                                                         | Healthcare            |         | tts-203249662 | 
| 25  | NAS:BATRA  | Liberty Media Corp                                                                                      |                       |         | tts-104028640 | 
| 26  | NAS:BATRK  | Liberty Media Corp                                                                                      |                       |         | tts-104028642 | 
| 27  | NAS:BBBY   | Bed Bath & Beyond                                                                                       | Consumer Goods        | 886158  | tts-827919    | 
| 28  | NAS:BIDU   | Baidu                                                                                                   | IT/Telecommunications |         | tts-3138949   | 
| 29  | NAS:BIIB   | Biogen                                                                                                  | Healthcare            | 875045  | tts-1076458   | 
| 30  | NAS:BKNG   | Booking Holdings                                                                                        |                       | 1075531 | tts-136266150 | 
| 31  | NAS:BKR    | Baker Hughes Company                                                                                    |                       | 1701605 | tts-234941877 | 
| 32  | NAS:BMC    | BMC Software, Inc.                                                                                      | IT/Telecommunication  |         | tts-17914522  | 
| 33  | NAS:BMRN   | BioMarin Pharmaceutical                                                                                 | Healthcare            | 1048477 | tts-831964    | 
| 34  | NAS:BRCM   | Broadcom Corporation - Class A                                                                          | IT/Telecommunication  |         | tts-828037    | 
| 35  | NAS:CA     | CA INC                                                                                                  | IT/Telecommunication  |         | tts-14011355  | 
| 36  | NAS:CDNS   | Cadence Design Systems                                                                                  | IT/Telecommunications | 813672  | tts-3468716   | 
| 37  | NAS:CDW    | CDW Corp                                                                                                | IT/Telecommunications | 1402057 | tts-61020822  | 
| 38  | NAS:CEG    | Constellation Energy Corp                                                                               |                       | 1868275 | tts-239110702 | 
| 39  | NAS:CELG   | Celgene Corp                                                                                            | Healthcare            |         | tts-832022    | 
| 40  | NAS:CEPH   | CEPHALON INC                                                                                            |                       |         | tts-832024    | 
| 41  | NAS:CERN   | Cerner Corp                                                                                             | IT/Telecommunications | 804753  | tts-832025    | 
| 42  | NAS:CHKP   | Check Point Software Technologies Ltd                                                                   | IT/Telecommunications |         | tts-828255    | 
| 43  | NAS:CHRW   | C.H. Robinson Worldwide                                                                                 | Industry              | 1043277 | tts-828266    | 
| 44  | NAS:CHTR   | Charter Communications                                                                                  |                       | 1091667 | tts-828275    | 
| 45  | NAS:CMCSA  | Comcast Corp                                                                                            | IT/Telecommunications | 1166691 | tts-828340    | 
| 46  | NAS:CMCSK  | Comcast Corporation - Class A Special                                                                   | IT/Telecommunication  |         | tts-828342    | 
| 47  | NAS:CMVT   | Comverse Technology, Inc.                                                                               |                       |         | tts-828356    | 
| 48  | NAS:COST   | Costco Wholesale Corp                                                                                   | Consumer Goods        | 909832  | tts-828403    | 
| 49  | NAS:CPRT   | Copart                                                                                                  | Consumer Goods        | 900075  | tts-828408    | 
| 50  | NAS:CPWR   | Compuware Corporation                                                                                   | IT/Telecommunication  |         | tts-828418    | 
| 51  | NAS:CRWD   | CrowdStrike Holdings                                                                                    |                       |         | tts-167018563 | 
| 52  | NAS:CSCO   | Cisco Systems                                                                                           | IT/Telecommunications | 858877  | tts-828468    | 
| 53  | NAS:CSGP   | CoStar Group                                                                                            | Industry              | 1057352 | tts-832092    | 
| 54  | NAS:CSX    | CSX Corp                                                                                                | Industry              | 277948  | tts-98691180  | 
| 55  | NAS:CTAS   | Cintas Corp                                                                                             | Industry              | 723254  | tts-832098    | 
| 56  | NAS:CTRX   | Catamaran Corporation                                                                                   | Healthcare            |         | tts-48237584  | 
| 57  | NAS:CTSH   | Cognizant Technology Solutions Corp                                                                     | IT/Telecommunications | 1058290 | tts-828513    | 
| 58  | NAS:CTXS   | Citrix Systems                                                                                          | IT/Telecommunications | 877890  | tts-828516    | 
| 59  | NAS:DDOG   | Datadog                                                                                                 |                       | 1561550 | tts-174002103 | 
| 60  | NAS:DELL   | Dell Inc.                                                                                               | IT/Telecommunication  |         | tts-828600    | 
| 61  | NAS:DISCA  | Discovery                                                                                               | IT/Telecommunications |         | tts-3103596   | 
| 62  | NAS:DISCK  | Discovery                                                                                               | IT/Telecommunications |         | tts-15427298  | 
| 63  | NAS:DISH   | DISH Network Corp                                                                                       | IT/Telecommunications | 1001082 | tts-832145    | 
| 64  | NAS:DLTR   | Dollar Tree                                                                                             | Consumer Goods        | 935703  | tts-828632    | 
| 65  | NAS:DOCU   | DocuSign                                                                                                |                       |         | tts-140322345 | 
| 66  | NAS:DTV    | DIRECTV                                                                                                 | IT/Telecommunication  |         | tts-12035732  | 
| 67  | NAS:DXCM   | DexCom                                                                                                  | Healthcare            | 1093557 | tts-2711488   | 
| 68  | NAS:EA     | Electronic Arts                                                                                         | IT/Telecommunications | 712515  | tts-36769516  | 
| 69  | NAS:EBAY   | eBay                                                                                                    | IT/Telecommunications | 1065088 | tts-832177    | 
| 70  | NAS:ENDP   | Endo International plc                                                                                  | Healthcare            |         | tts-828772    | 
| 71  | NAS:ENPH   | Enphase Energy                                                                                          | Energy                |         | tts-40948542  | 
| 72  | NAS:EQIX   | Equinix                                                                                                 |                       | 1101239 | tts-828800    | 
| 73  | NAS:ERIC   | Ericsson                                                                                                | IT/Telecommunications |         | tts-4794202   | 
| 74  | NAS:ESRX   | Express Scripts Holding Company                                                                         | Healthcare            |         | tts-828820    | 
| 75  | NAS:EXC    | Exelon Corp                                                                                             | Energy                | 1109357 | tts-175405676 | 
| 76  | NAS:EXPD   | Expeditors International of Washington                                                                  | Industry              | 746515  | tts-828860    | 
| 77  | NAS:EXPE   | Expedia Group                                                                                           | IT/Telecommunications | 1324424 | tts-828861    | 
| 78  | NAS:FANG   | Diamondback Energy                                                                                      | Energy                | 1539838 | tts-51776389  | 
| 79  | NAS:FAST   | Fastenal Company                                                                                        | Consumer Goods        | 815556  | tts-828870    | 
| 80  | NAS:FB     | Meta Platforms                                                                                          | IT/Telecommunications |         | tts-43902240  | 
| 81  | NAS:FFIV   | F5, Inc.                                                                                                | IT/Telecommunications | 1048695 | tts-828913    | 
| 82  | NAS:FISV   | Fiserv                                                                                                  | IT/Telecommunications | 798354  | tts-832260    | 
| 83  | NAS:FLEX   | Flex Ltd                                                                                                | IT/Telecommunications |         | tts-832265    | 
| 84  | NAS:FLIR   | FLIR Systems                                                                                            | IT/Telecommunications | 354908  | tts-832266    | 
| 85  | NAS:FMCN   | Focus Media Holding Limited - American depositary shares, each of which represents five ordinary shares | IT/Telecommunication  |         | tts-3055259   | 
| 86  | NAS:FOSL   | Fossil Group                                                                                            | Consumer Goods        | 883569  | tts-832280    | 
| 87  | NAS:FOX    | Fox Corp                                                                                                |                       | 1754301 | tts-61149825  | 
| 88  | NAS:FOXA   | Fox Corp                                                                                                |                       | 1754301 | tts-61149824  | 
| 89  | NAS:FSLR   | First Solar                                                                                             | Energy                | 1274494 | tts-5211016   | 
| 90  | NAS:FTNT   | Fortinet                                                                                                | IT/Telecommunications | 1262039 | tts-20508704  | 
| 91  | NAS:FWLT   | Foster Wheeler AG.                                                                                      | Industry              |         | tts-2880955   | 
| 92  | NAS:FWONA  | Liberty Media Corp                                                                                      |                       |         | tts-117027845 | 
| 93  | NAS:FWONK  | Liberty Media Corp                                                                                      |                       |         | tts-117027846 | 
| 94  | NAS:GENZ   | GENZYME CORPORATION                                                                                     |                       |         | tts-829049    | 
| 95  | NAS:GFS    | GlobalFoundries                                                                                         |                       |         | tts-231055357 | 
| 96  | NAS:GILD   | Gilead Sciences                                                                                         | Healthcare            | 882095  | tts-829063    | 
| 97  | NAS:GMCR   | Keurig Green Mountain, Inc.                                                                             | Consumer Goods        |         | tts-832321    | 
| 98  | NAS:GNTX   | Gentex Corp                                                                                             | Industry              | 355811  | tts-832326    | 
| 99  | NAS:GOOG   | Alphabet C                                                                                              |                       | 1652044 | tts-1947579   | 
| 100 | NAS:GOOGL  | Alphabet A                                                                                              |                       | 1652044 | tts-71625495  | 
| 101 | NAS:HAS    | Hasbro                                                                                                  | Consumer Goods        | 46080   | tts-17914161  | 
| 102 | NAS:HOLX   | Hologic                                                                                                 | Healthcare            | 859737  | tts-832375    | 
| 103 | NAS:HON    | Honeywell International                                                                                 | Industry              | 773840  | tts-219587327 | 
| 104 | NAS:HSIC   | Henry Schein                                                                                            | Healthcare            | 1000228 | tts-829202    | 
| 105 | NAS:IACI   | IAC/InterActiveCorp                                                                                     | IT/Telecommunication  |         | tts-914970    | 
| 106 | NAS:IDXX   | IDEXX Laboratories                                                                                      | Healthcare            | 874716  | tts-832406    | 
| 107 | NAS:ILMN   | Illumina                                                                                                | Healthcare            | 1110803 | tts-829281    | 
| 108 | NAS:INCY   | Incyte Corp                                                                                             | Healthcare            | 879169  | tts-829309    | 
| 109 | NAS:INTC   | Intel Corp                                                                                              | IT/Telecommunications | 50863   | tts-829352    | 
| 110 | NAS:INTU   | Intuit                                                                                                  | IT/Telecommunications | 896878  | tts-829359    | 
| 111 | NAS:ISIL   | Intersil Corporation                                                                                    | IT/Telecommunication  |         | tts-832438    | 
| 112 | NAS:ISRG   | Intuitive Surgical                                                                                      | Healthcare            | 1035267 | tts-829383    | 
| 113 | NAS:JAVA   | SUN MICROSYSTEMS INC                                                                                    |                       |         | tts-11317091  | 
| 114 | NAS:JBHT   | J.B. Hunt Transport Services                                                                            | Industry              | 728535  | tts-829418    | 
| 115 | NAS:JD     | JD.com                                                                                                  | IT/Telecommunications |         | tts-72890301  | 
| 116 | NAS:KDP    | Keurig Dr Pepper                                                                                        |                       | 1418135 | tts-203738082 | 
| 117 | NAS:KHC    | Kraft Heinz Company (The)                                                                               |                       | 1637459 | tts-90308539  | 
| 118 | NAS:KLAC   | KLA Corp                                                                                                | IT/Telecommunications | 319201  | tts-832472    | 
| 119 | NAS:KRFT   | Kraft Foods Group, Inc.                                                                                 | Consumer Goods        |         | tts-51196276  | 
| 120 | NAS:LAMR   | Lamar Advertising Company                                                                               |                       | 1090425 | tts-829488    | 
| 121 | NAS:LBTYA  | Liberty Global plc                                                                                      | IT/Telecommunications | 1570585 | tts-1784188   | 
| 122 | NAS:LBTYK  | Liberty Global plc                                                                                      | IT/Telecommunications | 1570585 | tts-3250167   | 
| 123 | NAS:LCID   | Lucid Group                                                                                             |                       | 1811210 | tts-224517911 | 
| 124 | NAS:LEAP   | Leap Wireless International, Inc.                                                                       | IT/Telecommunication  |         | tts-2995163   | 
| 125 | NAS:LIFE   | ATYR PHARMA INC COM USD0.001                                                                            | Healthcare            |         | tts-88339869  | 
| 126 | NAS:LIFE~1 | aTyr Pharma                                                                                             |                       |         | tts-829528    | 
| 127 | NAS:LLTC   | Linear Technology Corporation                                                                           | IT/Telecommunication  |         | tts-832500    | 
| 128 | NAS:LNCR   | Lincare Holdings Inc.                                                                                   |                       |         | tts-829543    | 
| 129 | NAS:LOGI   | Logitech International SA                                                                               | IT/Telecommunications |         | tts-829549    | 
| 130 | NAS:LRCX   | Lam Research Corp                                                                                       | IT/Telecommunications | 707549  | tts-832505    | 
| 131 | NAS:LULU   | lululemon athletica                                                                                     | Consumer Goods        | 1397187 | tts-11159809  | 
| 132 | NAS:LVNTA  | Liberty Interactive Corporation                                                                         |                       |         | tts-49260269  | 
| 133 | NAS:MAR    | Marriott International                                                                                  | Consumer Goods        | 1048286 | tts-65832501  | 
| 134 | NAS:MAT    | Mattel                                                                                                  | Consumer Goods        | 63276   | tts-17916214  | 
| 135 | NAS:MCHP   | Microchip Technology                                                                                    | IT/Telecommunications | 827054  | tts-829623    | 
| 136 | NAS:MDLZ   | Mondelez International                                                                                  | Consumer Goods        | 1103982 | tts-51210920  | 
| 137 | NAS:MELI   | MercadoLibre                                                                                            | IT/Telecommunications | 1099590 | tts-11222722  | 
| 138 | NAS:META   | Meta Platforms                                                                                          | IT/Telecommunications | 1326801 | tts-222568848 | 
| 139 | NAS:MNST   | Monster Beverage Corp                                                                                   |                       | 865752  | tts-37214168  | 
| 140 | NAS:MOLX   | Molex Incorporated                                                                                      | IT/Telecommunication  |         | tts-829749    | 
| 141 | NAS:MRNA   | Moderna                                                                                                 |                       | 1682852 | tts-14359676  | 
| 142 | NAS:MRVL   | Marvell Technology                                                                                      |                       |         | tts-829786    | 
| 143 | NAS:MSFT   | Microsoft Corp                                                                                          | IT/Telecommunications | 789019  | tts-829802    | 
| 144 | NAS:MTCH   | Match Group                                                                                             |                       | 891103  | tts-97315627  | 
| 145 | NAS:MU     | Micron Technology                                                                                       | IT/Telecommunications | 723125  | tts-17914799  | 
| 146 | NAS:MXIM   | Maxim Integrated Products                                                                               | IT/Telecommunications | 743316  | tts-829854    | 
| 147 | NAS:MYL    | Mylan NV                                                                                                |                       |         | tts-16784810  | 
| 148 | NAS:NFLX   | Netflix                                                                                                 | IT/Telecommunications | 1065280 | tts-829933    | 
| 149 | NAS:NIHDQ  | NII HOLDINGS, INC.                                                                                      | IT/Telecommunication  |         | tts-76885714  | 
| 150 | NAS:NLOK   | NortonLifeLock                                                                                          |                       | 849399  | tts-177780551 | 
| 151 | NAS:NTAP   | NetApp                                                                                                  | IT/Telecommunications | 1002047 | tts-830016    | 
| 152 | NAS:NTES   | NetEase                                                                                                 | IT/Telecommunications |         | tts-830020    | 
| 153 | NAS:NUAN   | Nuance Communications                                                                                   | IT/Telecommunications |         | tts-830036    | 
| 154 | NAS:NVDA   | NVIDIA Corp                                                                                             | IT/Telecommunications | 1045810 | tts-830046    | 
| 155 | NAS:NXPI   | NXP Semiconductors NV                                                                                   | IT/Telecommunications | 1413447 | tts-24429604  | 
| 156 | NAS:ODFL   | Old Dominion Freight Line                                                                               | Industry              | 878927  | tts-818221    | 
| 157 | NAS:OKTA   | Okta                                                                                                    |                       | 1660134 | tts-120195246 | 
| 158 | NAS:ORLY   | O'Reilly Automotive                                                                                     | Consumer Goods        | 898173  | tts-818315    | 
| 159 | NAS:PANW   | Palo Alto Networks                                                                                      | IT/Telecommunications | 1327567 | tts-231697626 | 
| 160 | NAS:PAYX   | Paychex                                                                                                 | IT/Telecommunications | 723531  | tts-818433    | 
| 161 | NAS:PCAR   | PACCAR                                                                                                  | Industry              | 75362   | tts-830133    | 
| 162 | NAS:PDCO   | Patterson Companies                                                                                     | Healthcare            | 891024  | tts-830145    | 
| 163 | NAS:PDD    | PDD Holdings                                                                                            |                       |         | tts-146910073 | 
| 164 | NAS:PEP    | PepsiCo                                                                                                 | Consumer Goods        | 77476   | tts-132468358 | 
| 165 | NAS:PETM   | PetSmart, Inc                                                                                           | Consumer Goods        |         | tts-818586    | 
| 166 | NAS:PPDI   | PHARMACEUTICAL PROD DEV INC                                                                             |                       |         | tts-818958    | 
| 167 | NAS:PRDO   | Perdoceo Education Corp                                                                                 |                       | 1046568 | tts-181197429 | 
| 168 | NAS:PTEN   | Patterson-UTI Energy                                                                                    | Energy                | 889900  | tts-830241    | 
| 169 | NAS:PTON   | Peloton Interactive                                                                                     |                       | 1639825 | tts-174238383 | 
| 170 | NAS:PYPL   | PayPal Holdings                                                                                         |                       | 1633917 | tts-91263224  | 
| 171 | NAS:QCOM   | QUALCOMM                                                                                                | IT/Telecommunications | 804328  | tts-830263    | 
| 172 | NAS:QLGC   | QLogic Corporation                                                                                      | IT/Telecommunication  |         | tts-830271    | 
| 173 | NAS:QRTEA  | Qurate Retail                                                                                           |                       | 1355096 | tts-137012693 | 
| 174 | NAS:REGN   | Regeneron Pharmaceuticals                                                                               | Healthcare            | 872589  | tts-830313    | 
| 175 | NAS:RIVN   | Rivian Automotive                                                                                       |                       | 1874178 | tts-232151446 | 
| 176 | NAS:ROST   | Ross Stores                                                                                             | Consumer Goods        | 745732  | tts-830361    | 
| 177 | NAS:RYAAY  | Ryanair Holdings plc                                                                                    |                       |         | tts-830379    | 
| 178 | NAS:SANM   | Sanmina Corp                                                                                            | Industry              | 897723  | tts-819878    | 
| 179 | NAS:SBAC   | SBA Communications Corp                                                                                 |                       | 1034054 | tts-819921    | 
| 180 | NAS:SBUX   | Starbucks Corp                                                                                          | Consumer Goods        | 829224  | tts-830408    | 
| 181 | NAS:SEPR   | Sepracor Inc.                                                                                           |                       |         | tts-830444    | 
| 182 | NAS:SGEN   | Seagen                                                                                                  |                       |         | tts-830459    | 
| 183 | NAS:SHPG   | Shire plc - American Depositary Shares, each representing three Ordinary Shares                         | Healthcare            |         | tts-48237583  | 
| 184 | NAS:SIAL   | Sigma-Aldrich Corporation                                                                               | Commodities           |         | tts-830475    | 
| 185 | NAS:SIRI   | Sirius XM Holdings                                                                                      | IT/Telecommunications | 908937  | tts-830484    | 
| 186 | NAS:SNDK   | SanDisk Corporation                                                                                     | IT/Telecommunication  |         | tts-830518    | 
| 187 | NAS:SNPS   | Synopsys                                                                                                | IT/Telecommunications | 883241  | tts-830523    | 
| 188 | NAS:SPLK   | Splunk                                                                                                  | IT/Telecommunications |         | tts-41981429  | 
| 189 | NAS:SPLS   | Staples, Inc.                                                                                           | Consumer Goods        |         | tts-820309    | 
| 190 | NAS:SRCL   | Stericycle                                                                                              | Utilities             | 861878  | tts-830564    | 
| 191 | NAS:STLD   | Steel Dynamics                                                                                          | Commodities           | 1022671 | tts-830598    | 
| 192 | NAS:STRZA  | Starz - Series A                                                                                        | IT/Telecommunication  |         | tts-54963811  | 
| 193 | NAS:SWKS   | Skyworks Solutions                                                                                      | IT/Telecommunications | 4127    | tts-830638    | 
| 194 | NAS:TCOM   | Trip.com Group Limited                                                                                  |                       |         | tts-177780548 | 
| 195 | NAS:TEAM   | Atlassian Corp                                                                                          |                       | 1650372 | tts-830674    | 
| 196 | NAS:TFCF   | Twenty-First Century Fox, Inc. - Class B                                                                |                       |         | tts-161284558 | 
| 197 | NAS:TFCFA  | Twenty-First Century Fox, Inc.                                                                          |                       |         | tts-161284560 | 
| 198 | NAS:TIGO   | Millicom International Cellular SA                                                                      | IT/Telecommunications |         | tts-157604153 | 
| 199 | NAS:TLAB   | Tellabs, Inc.                                                                                           | IT/Telecommunication  |         | tts-830736    | 
| 200 | NAS:TMUS   | T-Mobile US                                                                                             | IT/Telecommunications | 1283699 | tts-96423906  | 
| 201 | NAS:TRIP   | TripAdvisor                                                                                             | IT/Telecommunications | 1526520 | tts-36804965  | 
| 202 | NAS:TSCO   | Tractor Supply Company                                                                                  | Consumer Goods        | 916365  | tts-830823    | 
| 203 | NAS:TSLA   | Tesla                                                                                                   | Industry              | 1318605 | tts-23947362  | 
| 204 | NAS:TTWO   | Take-Two Interactive Software                                                                           | IT/Telecommunications | 946581  | tts-830842    | 
| 205 | NAS:TXN    | Texas Instruments                                                                                       | IT/Telecommunications | 97476   | tts-37090221  | 
| 206 | NAS:UAL    | United Airlines Holdings                                                                                | Consumer Goods        |         | tts-149357573 | 
| 207 | NAS:ULTA   | Ulta Beauty                                                                                             | Consumer Goods        | 1403568 | tts-11704179  | 
| 208 | NAS:URBN   | Urban Outfitters                                                                                        | Consumer Goods        | 912615  | tts-820920    | 
| 209 | NAS:VEON   | VEON Ltd                                                                                                |                       |         | tts-120075582 | 
| 210 | NAS:VIAB   | Viacom                                                                                                  | IT/Telecommunication  |         | tts-36228692  | 
| 211 | NAS:VIAV   | Viavi Solutions                                                                                         |                       |         | tts-92502185  | 
| 212 | NAS:VMED   | Virgin Media Inc.                                                                                       | IT/Telecommunication  |         | tts-6191934   | 
| 213 | NAS:VOD    | Vodafone Group Plc                                                                                      | IT/Telecommunications |         | tts-17917826  | 
| 214 | NAS:VRSK   | Verisk Analytics                                                                                        | Industry              | 1442145 | tts-20189978  | 
| 215 | NAS:VRSN   | VeriSign                                                                                                | IT/Telecommunications | 1014473 | tts-830966    | 
| 216 | NAS:VRTX   | Vertex Pharmaceuticals                                                                                  | Healthcare            | 875320  | tts-821074    | 
| 217 | NAS:WBA    | Walgreens Boots Alliance                                                                                |                       | 1618921 | tts-80360010  | 
| 218 | NAS:WBD    | Warner Bros Discovery                                                                                   |                       | 1437107 | tts-245373754 | 
| 219 | NAS:WCRX   | Warner Chilcott plc                                                                                     | Healthcare            |         | tts-1839830   | 
| 220 | NAS:WDAY   | Workday                                                                                                 | IT/Telecommunications | 1327811 | tts-127962865 | 
| 221 | NAS:WDC    | Western Digital Corp                                                                                    | IT/Telecommunications | 106040  | tts-45576417  | 
| 222 | NAS:WFM    | Whole Foods Market, Inc.                                                                                | Consumer Goods        |         | tts-29400599  | 
| 223 | NAS:WTW    | Willis Towers Watson Public Limited                                                                     |                       | 1140536 | tts-159320127 | 
| 224 | NAS:WYNN   | Wynn Resorts Limited                                                                                    | Consumer Goods        | 1174922 | tts-831069    | 
| 225 | NAS:XEL    | Xcel Energy                                                                                             | Energy                | 72903   | tts-132814882 | 
| 226 | NAS:XLNX   | Xilinx                                                                                                  | IT/Telecommunications | 743988  | tts-821283    | 
| 227 | NAS:XRAY   | DENTSPLY SIRONA                                                                                         |                       | 818479  | tts-821304    | 
| 228 | NAS:ZM     | Zoom Video Communications                                                                               |                       | 1585521 | tts-163839424 | 
| 229 | NAS:ZS     | Zscaler                                                                                                 |                       | 1713683 | tts-137190768 | 
| 230 | NYS:AEO    | American Eagle Outfitters Inc                                                                           | Consumer Goods        | 919012  | tts-3682397   | 
| 231 | NYS:BB     | BlackBerry Ltd                                                                                          | IT/Telecommunications |         | tts-129193787 | 
| 232 | NYS:DELL   | Dell Technologies Inc                                                                                   |                       | 1571996 | tts-157040141 | 
| 233 | NYS:GRMN   | Garmin Ltd                                                                                              | Industry              | 1121788 | tts-237275457 | 
| 234 | NYS:INFY   | Infosys Ltd                                                                                             | IT/Telecommunications |         | tts-53833112  | 
| 235 | NYS:JNPR   | Juniper Networks Inc                                                                                    | IT/Telecommunications | 1043604 | tts-20366359  | 
| 236 | NYS:JOY    | Joy Global Inc.                                                                                         | Industry              |         | tts-36299719  | 
| 237 | NYS:LVLT   | Level 3 Communications, Inc.                                                                            | IT/Telecommunication  |         | tts-33659182  | 
| 238 | NYS:MWW    | Monster Worldwide, Inc.                                                                                 | Industry              |         | tts-16189359  | 
| 239 | NYS:NCLH   | Norwegian Cruise Line Holdings Ltd                                                                      | Consumer Goods        | 1513761 | tts-132399257 | 
| 240 | NYS:ORCL   | Oracle Corp                                                                                             | IT/Telecommunications | 1341439 | tts-61604636  | 
| 241 | NYS:PRGO   | Perrigo Co PLC                                                                                          | Healthcare            | 1585364 | tts-60267672  | 
| 242 | NYS:QGEN   | Qiagen NV                                                                                               |                       |         | tts-133282628 | 
| 243 | NYS:RHT    | Red Hat Inc                                                                                             | IT/Telecommunication  |         | tts-821236    | 
| 244 | NYS:TEVA   | Teva Pharmaceutical Industries Ltd                                                                      | Healthcare            |         | tts-45504153  | 

### Examples

```python
import xarray as xr
import qnt.ta as qnta
import qnt.data as qndata
import qnt.output as qnout
import qnt.stats as qns

data = qndata.stocks.load_ndx_data(min_date="2005-06-01")

def calculate_weights(data):
    close = data.sel(field="close")
    is_liquid = data.sel(field="is_liquid")
    sma_slow = qnta.sma(close, 200)
    sma_fast = qnta.sma(close, 20)
    # 1 buy; -1 sell; 0 no trade
    weights = xr.where(sma_slow < sma_fast, 1, -1)
    weights = weights * is_liquid
    return weights

weights = calculate_weights(data)
weights = qnout.clean(weights, data, "stocks_nasdaq100")

# calc stats
stats = qns.calc_stat(data, weights.sel(time=slice("2006-01-01", None)))
display(stats.to_pandas().tail())

# graph
performance = stats.to_pandas()["equity"]
import qnt.graph as qngraph

qngraph.make_plot_filled(performance.index, performance, name="PnL (Equity)", type="log")

weights = weights.sel(time=slice("2006-01-01",None))

qnout.check(weights, data, "stocks_nasdaq100")
qnout.write(weights) # to participate in the competition
```

## Stocks NYSE and NASDAQ

```python
import qnt.data as qndata
stocks_list = qndata.stocks.load_list(min_date='2006-01-01')
data = qndata.stocks.load_data(min_date="2006-01-01", assets=stocks_list)
print([x['id'] for x in stocks_list])
```

| N    | Id            | Name                                                   | Sector                                                                   | SIC ID     | FIGI         |
|------|---------------|--------------------------------------------------------|--------------------------------------------------------------------------|------------|--------------|
| 1    | AMEX:APT      | Alpha Pro Tech Ltd.                                    | Health Technology                                                        | 884269     | BBG000C1H7Y2 | 
| 2    | AMEX:IBIO     | iBio Inc.                                              | Health Technology                                                        | 1420720    | BBG000D5F2L9 | 
| 3    | AMEX:IGC      | India Globalization Capital Inc.                       | Health Technology                                                        | 1326205    | BBG000NSSLY8 | 
| 4    | AMEX:LNG      | Cheniere Energy Inc.                                   | Industrial Services                                                      | 3570       | BBG000C3HSR0 | 
| 5    | AMEX:NG       | Novagold Resources Inc                                 | Non-Energy Minerals                                                      | 1173420    | BBG000D25424 | 
| 6    | AMEX:NGD      | New Gold Inc.                                          | Non-Energy Minerals                                                      | 800166     | BBG000KD2ZL5 | 
| 7    | AMEX:NOG      | Northern Oil and Gas Inc.                              | Energy Minerals                                                          | 1388955    | BBG000DRTDR6 | 
| 8    | AMEX:SVM      | Silvercorp Metals Inc.                                 | Non-Energy Minerals                                                      | 1052045    | BBG000CY5S22 | 
| 9    | NASDAQ:AAL    | American Airlines Group Inc                            | Transportation and Warehousing                                           | 6201       | BBG005P7Q881 | 
| 10   | NASDAQ:AAOI   | Applied Optoelectronics Inc                            | Manufacturing                                                            | 1158114    | BBG000D6VW15 | 
| 11   | NASDAQ:AAPL   | Apple Inc                                              | Manufacturing                                                            | 320193     | BBG000B9XRY4 | 
| 12   | NASDAQ:ABCB   | Ameris Bancorp                                         | Finance and Insurance                                                    | 351569     | BBG000CDY3H5 | 
| 13   | NASDAQ:ABEO   | Abeona Therapeutics Inc                                | Manufacturing                                                            | 318306     | BBG000DT5D52 | 
| 14   | NASDAQ:ABMD   | Abiomed Inc.                                           | Manufacturing                                                            | 815094     | BBG000C101X4 | 
| 15   | NASDAQ:ABUS   | Arbutus Biopharma Corp                                 | Manufacturing                                                            | 1447028    | BBG000RR8V85 | 
| 16   | NASDAQ:ACAD   | Acadia Pharmaceuticals Inc                             | Manufacturing                                                            | 1070494    | BBG000BHG9K0 | 
| 17   | NASDAQ:ACB    | Aurora Cannabis Inc                                    | Manufacturing                                                            | 1683541    | BBG006SCSYG7 | 
| 18   | NASDAQ:ACGL   | Arch Capital Group Ltd                                 | Finance and Insurance                                                    | 947484     | BBG000HXNN20 | 
| 19   | NASDAQ:ACHC   | Acadia Healthcare Company Inc                          | Health Care and Social Assistance                                        | 1520697    | BBG000FPNN38 | 
| 20   | NASDAQ:ACHN   | Achillion Pharmaceuticals, Inc.                        | Health Care                                                              |            | BBG000BPPV05 | 
| 21   | NASDAQ:ACIA   | Acacia Communications Inc                              | Manufacturing                                                            | 1651235    | BBG00359HX70 | 
| 22   | NASDAQ:ACIW   | ACI Worldwide Inc                                      | Information                                                              | 935036     | BBG000PMBV39 | 
| 23   | NASDAQ:ACOR   | Acorda Therapeutics Inc                                | Manufacturing                                                            | 1008848    | BBG000FD10V8 | 
| 24   | NASDAQ:ACRS   | Aclaris Therapeutics Inc                               | Manufacturing                                                            | 1557746    | BBG003LF0QR9 | 
| 25   | NASDAQ:ADBE   | Adobe Inc                                              | Information                                                              | 796343     | BBG000BB5006 | 
| 26   | NASDAQ:ADI    | Analog Devices Inc.                                    | Manufacturing                                                            | 6281       | BBG000BB6G37 | 
| 27   | NASDAQ:ADMA   | Adma Biologics Inc                                     | Manufacturing                                                            | 1368514    | BBG002NCK5M5 | 
| 28   | NASDAQ:ADP    | Automatic Data Processing Inc.                         | Information                                                              | 8670       | BBG000JG0547 | 
| 29   | NASDAQ:ADSK   | Autodesk Inc.                                          | Information                                                              | 769397     | BBG000BM7HL0 | 
| 30   | NASDAQ:ADTN   | Adtran Inc.                                            | Manufacturing                                                            | 926282     | BBG000C4K3D4 | 
| 31   | NASDAQ:ADXS   | Advaxis, Inc.                                          | Manufacturing                                                            | 1100397    | BBG000KVF074 | 
| 32   | NASDAQ:AEHR   | Aehr Test Systems                                      | Manufacturing                                                            | 1040470    | BBG000BWM083 | 
| 33   | NASDAQ:AEIS   | Advanced Energy Industries Inc.                        | Manufacturing                                                            | 927003     | BBG000FKMP26 | 
| 34   | NASDAQ:AEMD   | Aethlon Medical Inc                                    | Manufacturing                                                            | 882291     | BBG000L78XT8 | 
| 35   | NASDAQ:AEP    | American Electric Power Company Inc.                   | Utilities                                                                | 4904       | BBG000BB9KF2 | 
| 36   | NASDAQ:AERI   | Aerie Pharmaceuticals Inc                              | Manufacturing                                                            | 1337553    | BBG001KJ7WJ5 | 
| 37   | NASDAQ:AGFS   | AgroFresh Solutions Inc                                | Manufacturing                                                            | 1592016    | BBG00699CVL2 | 
| 38   | NASDAQ:AGIO   | Agios Pharmaceuticals Inc                              | Manufacturing                                                            | 1439222    | BBG000QY4ZD0 | 
| 39   | NASDAQ:AHPI   | Allied Healthcare Product Inc.                         | Manufacturing                                                            | 874710     | BBG000C2RD58 | 
| 40   | NASDAQ:AIMC   | Altra Industrial Motion Corp                           | Manufacturing                                                            | 1374535    | BBG000Q26KW0 | 
| 41   | NASDAQ:AKAM   | Akamai Technologies Inc                                | Information                                                              | 1086222    | BBG000BJQWD2 | 
| 42   | NASDAQ:AKRX   | Akorn Inc.                                             | Health Technology                                                        | 3116       | BBG000BBJB07 | 
| 43   | NASDAQ:ALDR   | Alder BioPharmaceuticals, Inc.                         | Health Care                                                              |            | BBG0027DTTL1 | 
| 44   | NASDAQ:ALEC   | Alector Inc                                            | Manufacturing                                                            | 1653087    | BBG00N0PL198 | 
| 45   | NASDAQ:ALGN   | Align Technology, Inc.                                 | Manufacturing                                                            | 1097149    | BBG000BRNLL2 | 
| 46   | NASDAQ:ALKS   | Alkermes plc                                           | Manufacturing                                                            | 1520262    | BBG000C9F2F9 | 
| 47   | NASDAQ:ALLK   | Allakos Inc                                            | Professional, Scientific, and Technical Services                         | 1564824    | BBG003QBJKN0 | 
| 48   | NASDAQ:ALNY   | Alnylam Pharmaceuticals Inc                            | Manufacturing                                                            | 1178670    | BBG000BFGNJ5 | 
| 49   | NASDAQ:ALT    | Altimmune Inc                                          | Manufacturing                                                            | 1326190    | BBG000FXML90 | 
| 50   | NASDAQ:ALTO   | Alto Ingredients Inc                                   | Manufacturing                                                            | 778164     | BBG000K4WSD7 | 
| 51   | NASDAQ:ALXN   | Alexion Pharmaceuticals Inc.                           | Manufacturing                                                            | 899866     | BBG000G30YX4 | 
| 52   | NASDAQ:AMAG   | AMAG Pharmaceuticals Inc.                              | Health Technology                                                        | 792977     | BBG000CHF7G9 | 
| 53   | NASDAQ:AMAT   | Applied Materials Inc.                                 | Manufacturing                                                            | 6951       | BBG000BBPFB9 | 
| 54   | NASDAQ:AMBA   | Ambarella Inc                                          | Manufacturing                                                            | 1280263    | BBG001QZCPJ2 | 
| 55   | NASDAQ:AMCX   | AMC Networks Inc - Class A                             | Information                                                              | 1514991    | BBG000H01H92 | 
| 56   | NASDAQ:AMD    | Advanced Micro Devices Inc.                            | Manufacturing                                                            | 2488       | BBG000BBQCY0 | 
| 57   | NASDAQ:AMED   | Amedisys Inc.                                          | Health Care and Social Assistance                                        | 896262     | BBG000B9ZV28 | 
| 58   | NASDAQ:AMGN   | AMGEN Inc.                                             | Manufacturing                                                            | 318154     | BBG000BBS2Y0 | 
| 59   | NASDAQ:AMKR   | AMKOR Technology Inc.                                  | Manufacturing                                                            | 1047127    | BBG000BCKGW7 | 
| 60   | NASDAQ:AMSC   | American Superconductor Corp.                          | Manufacturing                                                            | 880807     | BBG000CP3D44 | 
| 61   | NASDAQ:AMTD   | TD Ameritrade Holding Corporation                      | Finance                                                                  | 1173431    | BBG000BMFD58 | 
| 62   | NASDAQ:AMZN   | Amazon.com Inc.                                        | Retail Trade                                                             | 1018724    | BBG000BVPV84 | 
| 63   | NASDAQ:ANAB   | AnaptysBio Inc                                         | Manufacturing                                                            | 1370053    | BBG0026ZDHR0 | 
| 64   | NASDAQ:ANDE   | Andersons Inc.                                         | Wholesale Trade                                                          | 821026     | BBG000BF8CN3 | 
| 65   | NASDAQ:ANSS   | Ansys Inc. - Registered Shares                         | Information                                                              | 1013462    | BBG000GXZ4W7 | 
| 66   | NASDAQ:ANY    | Sphere 3D Corp                                         | Information                                                              | 1591956    | BBG004Z3JRW1 | 
| 67   | NASDAQ:AOSL   | Alpha & Omega Semiconductor Ltd                        | Manufacturing                                                            | 1387467    | BBG000QLW222 | 
| 68   | NASDAQ:APA    | Apache Corp.                                           | Mining, Quarrying, and Oil and Gas Extraction                            | 6769       | BBG000BC2C10 | 
| 69   | NASDAQ:APEN   | Apollo Endosurgery Inc                                 | Manufacturing                                                            | 1251769    | BBG000K5WM92 | 
| 70   | NASDAQ:APHA   | Aphria Inc                                             | Manufacturing                                                            | 0001733418 | BBG00805D2Z3 | 
| 71   | NASDAQ:APLS   | Apellis Pharmaceuticals Inc                            | Manufacturing                                                            | 1492242    | BBG007KGRPY4 | 
| 72   | NASDAQ:APPN   | Appian Corp - Class A                                  | Information                                                              | 1441683    | BBG001C7PMJ2 | 
| 73   | NASDAQ:APPS   | Digital Turbine Inc                                    | Real Estate and Rental and Leasing                                       | 317788     | BBG000HZ3562 | 
| 74   | NASDAQ:ARCC   | Ares Capital Corp                                      | Finance and Insurance                                                    | 1287750    | BBG000PD6X77 | 
| 75   | NASDAQ:ARCE   | Arco Platform Ltd - Class A                            | Educational Services                                                     | 1740594    | BBG00LV0Z3L0 | 
| 76   | NASDAQ:ARNA   | Arena Pharmaceuticals Inc                              | Manufacturing                                                            | 1080709    | BBG000BKXBV7 | 
| 77   | NASDAQ:ARQL   | ArQule, Inc.                                           | Health Care                                                              |            | BBG000HBL486 | 
| 78   | NASDAQ:ARVN   | Arvinas Inc                                            | Manufacturing                                                            | 1655759    | BBG00LW7YK82 | 
| 79   | NASDAQ:ARWR   | Arrowhead Pharmaceuticals Inc.                         | Manufacturing                                                            | 879407     | BBG000BRVKH0 | 
| 80   | NASDAQ:ASNA   | Ascena Retail Group Inc.                               | Retail Trade                                                             | 1498301    | BBG000BGZ9V9 | 
| 81   | NASDAQ:ASRT   | Assertio Holdings Inc                                  | Health Technology                                                        | 1005201    | BBG000C1TJH2 | 
| 82   | NASDAQ:ATEX   | Anterix Inc                                            | Information                                                              | 1304492    | BBG0081NLHR0 | 
| 83   | NASDAQ:ATHX   | Athersys Inc                                           | Manufacturing                                                            | 1368148    | BBG000QBZBS3 | 
| 84   | NASDAQ:ATOS   | Atossa Therapeutics Inc                                | Manufacturing                                                            | 1488039    | BBG002NCD8C8 | 
| 85   | NASDAQ:ATVI   | Activision Blizzard Inc                                | Information                                                              | 718877     | BBG000CVWGS6 | 
| 86   | NASDAQ:ATXI   | Avenue Therapeutics Inc                                | Manufacturing                                                            | 1644963    | BBG00GLTS4V4 | 
| 87   | NASDAQ:AUDC   | Audiocodes                                             | Manufacturing                                                            | 1086434    | BBG000BVW716 | 
| 88   | NASDAQ:AUPH   | Aurinia Pharmaceuticals Inc                            | Manufacturing                                                            | 1600620    | BBG000BCRJM5 | 
| 89   | NASDAQ:AVGO   | Broadcom Inc                                           | Manufacturing                                                            | 1730168    | BBG00KHY5S69 | 
| 90   | NASDAQ:AVID   | Avid Technology, Inc.                                  | Manufacturing                                                            | 896841     | BBG000BHHQ76 | 
| 91   | NASDAQ:AVT    | Avnet Inc.                                             | Wholesale Trade                                                          | 8858       | BBG000BCPB71 | 
| 92   | NASDAQ:AXON   | Axon Enterprise Inc                                    | Manufacturing                                                            | 1069183    | BBG000BHJWG1 | 
| 93   | NASDAQ:AXSM   | Axsome Therapeutics Inc                                | Manufacturing                                                            | 1579428    | BBG00B6G7GL7 | 
| 94   | NASDAQ:AYRO   | AYRO Inc                                               | Information                                                              | 1086745    | BBG000F4HP82 | 
| 95   | NASDAQ:AZPN   | Aspen Technology Inc.                                  | Professional, Scientific, and Technical Services                         | 929940     | BBG000DFMXT3 | 
| 96   | NASDAQ:BAND   | Bandwidth Inc - Class A                                | Information                                                              | 1514416    | BBG001K003W2 | 
| 97   | NASDAQ:BBBY   | Bed, Bath & Beyond Inc.                                | Retail Trade                                                             | 886158     | BBG000CSY9H9 | 
| 98   | NASDAQ:BBIG   | Vinco Ventures Inc                                     | Manufacturing                                                            | 1717556    | BBG00KP45MJ5 | 
| 99   | NASDAQ:BBSI   | Barrett Business Services Inc.                         | Professional, Scientific, and Technical Services                         | 902791     | BBG000BHJSC4 | 
| 100  | NASDAQ:BCRX   | Biocryst Pharmaceuticals Inc.                          | Manufacturing                                                            | 882796     | BBG000BLYWX6 | 
| 101  | NASDAQ:BECN   | Beacon Roofing Supply Inc - Class A                    | Wholesale Trade                                                          | 1124941    | BBG000BKTXF2 | 
| 102  | NASDAQ:BGCP   | BGC Partners Inc - Class A                             | Finance and Insurance                                                    | 1094831    | BBG000C4MWH4 | 
| 103  | NASDAQ:BHF    | Brighthouse Financial Inc                              | Finance and Insurance                                                    | 1685040    | BBG00DYPZ4T0 | 
| 104  | NASDAQ:BIIB   | Biogen Inc                                             | Manufacturing                                                            | 875045     | BBG000C17X76 | 
| 105  | NASDAQ:BKNG   | Booking Holdings Inc                                   | Manufacturing                                                            | 1075531    | BBG000BLBVN4 | 
| 106  | NASDAQ:BLDP   | Ballard Power Systems Inc.                             | Manufacturing                                                            | 933777     | BBG000BNJRZ8 | 
| 107  | NASDAQ:BLIN   | Bridgeline Digital Inc                                 | Information                                                              | 1378590    | BBG000PMGM61 | 
| 108  | NASDAQ:BLUE   | Bluebird bio Inc                                       | Manufacturing                                                            | 1293971    | BBG000QGWY50 | 
| 109  | NASDAQ:BMRN   | Biomarin Pharmaceutical Inc. - Registered Shares       | Manufacturing                                                            | 1048477    | BBG000CZWZ05 | 
| 110  | NASDAQ:BNGO   | Bionano Genomics Inc                                   | Professional, Scientific, and Technical Services                         | 1411690    | BBG001KWWRS9 | 
| 111  | NASDAQ:BOKF   | BOK Financial Corp.                                    | Finance and Insurance                                                    | 875357     | BBG000CFZ003 | 
| 112  | NASDAQ:BOLD   | Audentes Therapeutics, Inc.                            | Health Care                                                              |            | BBG004V7T4C8 | 
| 113  | NASDAQ:BOOM   | DMC Global Inc                                         | Manufacturing                                                            | 34067      | BBG000BDLPF3 | 
| 114  | NASDAQ:BOXL   | Boxlight Corporation - Class A                         | Manufacturing                                                            | 1624512    | BBG007G8KFW8 | 
| 115  | NASDAQ:BPOP   | Popular Inc.                                           | Finance and Insurance                                                    | 763901     | BBG000BDNB35 | 
| 116  | NASDAQ:BPTH   | Bio-Path Holdings Inc                                  | Manufacturing                                                            | 1133818    | BBG000PQXTT3 | 
| 117  | NASDAQ:BRKL   | Brookline Bancorp, Inc.                                | Finance and Insurance                                                    | 1049782    | BBG000BFYGX4 | 
| 118  | NASDAQ:BRP    | BRP Group Inc - Class A                                | Finance and Insurance                                                    | 1502554    | BBG00QDCHF36 | 
| 119  | NASDAQ:BTBT   | Bit Digital Inc                                        | Finance and Insurance                                                    | 1710350    | BBG00JM2HVP5 | 
| 120  | NASDAQ:BYND   | Beyond Meat Inc                                        | Manufacturing                                                            | 1655210    | BBG003CVJP50 | 
| 121  | NASDAQ:BYSI   | BeyondSpring Inc                                       | Manufacturing                                                            | 1677940    | BBG00F9YLST6 | 
| 122  | NASDAQ:CACC   | Credit Acceptance Corp.                                | Finance and Insurance                                                    | 885550     | BBG000CS0D96 | 
| 123  | NASDAQ:CAKE   | Cheesecake Factory Inc.                                | Accommodation and Food Services                                          | 887596     | BBG000CS8TM8 | 
| 124  | NASDAQ:CAMP   | Calamp Corp.                                           | Manufacturing                                                            | 730255     | BBG000BDYB06 | 
| 125  | NASDAQ:CAR    | Avis Budget Group Inc                                  | Real Estate and Rental and Leasing                                       | 723612     | BBG000FLPRH1 |
| 126  | NASDAQ:CASY   | Casey`s General Stores, Inc.                           | Retail Trade                                                             | 726958     | BBG000BF0672 |
| 127  | NASDAQ:CBAT   | CBAK Energy Technology Inc                             | Manufacturing                                                            | 1117171    | BBG000DZX6K5 | 
| 128  | NASDAQ:CBOE   | Cboe Global Markets, Inc.                              | n/a                                                                      |            | BBG000QH56C1 | 
| 129  | NASDAQ:CBRL   | Cracker Barrel Old Country Store Inc                   | Accommodation and Food Services                                          | 1067294    | BBG000BF33K1 | 
| 130  | NASDAQ:CBTX   | CBTX Inc                                               | Finance and Insurance                                                    | 0001473844 | BBG00HZ69KP9 | 
| 131  | NASDAQ:CCEP   | Coca-Cola Europacific Partners Plc                     | Consumer Non-Durables                                                    | 1650107    | BBG00B6BFWH9 | 
| 132  | NASDAQ:CCXI   | ChemoCentryx Inc                                       | Manufacturing                                                            | 1340652    | BBG000PTSB12 | 
| 133  | NASDAQ:CDK    | CDK Global Inc                                         | Information                                                              | 1609702    | BBG006B6PVN9 | 
| 134  | NASDAQ:CDNS   | Cadence Design Systems, Inc.                           | Information                                                              | 813672     | BBG000C13CD9 | 
| 135  | NASDAQ:CDW    | CDW Corp                                               | Wholesale Trade                                                          | 1402057    | BBG001P63B80 | 
| 136  | NASDAQ:CDXC   | Chromadex Corp                                         | Manufacturing                                                            | 0001386570 | BBG000BG1J71 | 
| 137  | NASDAQ:CELG   | Celgene Corporation                                    | Health Care                                                              |            | BBG000BFC8J2 | 
| 138  | NASDAQ:CEMI   | Chembio Diagnostics Inc.                               | Manufacturing                                                            | 1092662    | BBG000BLDXT2 | 
| 139  | NASDAQ:CENX   | Century Aluminum Co.                                   | Manufacturing                                                            | 949157     | BBG000BW1LS8 | 
| 140  | NASDAQ:CERN   | Cerner Corp.                                           | Professional, Scientific, and Technical Services                         | 804753     | BBG000BFDLV8 | 
| 141  | NASDAQ:CG     | Carlyle Group Inc (The)                                | Finance and Insurance                                                    | 1527166    | BBG000BH3F20 | 
| 142  | NASDAQ:CGBD   | TCG BDC Inc                                            | Finance and Insurance                                                    | 1544206    | BBG00GQVWWP4 | 
| 143  | NASDAQ:CGC    | Canopy Growth Corporation                              | Manufacturing                                                            | 1737927    | BBG0069FB082 | 
| 144  | NASDAQ:CGNX   | Cognex Corp.                                           | Manufacturing                                                            | 851205     | BBG000BPBVW5 | 
| 145  | NASDAQ:CHKP   | Check Point Software Technolgies                       | Information                                                              | 1015922    | BBG000K82ZT8 | 
| 146  | NASDAQ:CHNG   | Change Healthcare Inc                                  | Information                                                              | 1756497    | BBG0059KNH10 | 
| 147  | NASDAQ:CHRW   | C.H. Robinson Worldwide, Inc.                          | Transportation and Warehousing                                           | 1043277    | BBG000BTCH57 | 
| 148  | NASDAQ:CHTR   | Charter Communications Inc. - Class A                  | Information                                                              | 1091667    | BBG000VPGNR2 | 
| 149  | NASDAQ:CHX    | ChampionX Corporation                                  | Manufacturing                                                            | 1723089    | BBG00JH9TZ56 | 
| 150  | NASDAQ:CINF   | Cincinnati Financial Corp.                             | Finance and Insurance                                                    | 20286      | BBG000BFPK65 | 
| 151  | NASDAQ:CLDX   | Celldex Therapeutics Inc.                              | Manufacturing                                                            | 744218     | BBG000FW8LZ9 | 
| 152  | NASDAQ:CLFD   | Clearfield Inc                                         | Manufacturing                                                            | 796505     | BBG000BC35R6 | 
| 153  | NASDAQ:CLNE   | Clean Energy Fuels Corp                                | Utilities                                                                | 1368265    | BBG000J5J943 | 
| 154  | NASDAQ:CLVS   | Clovis Oncology Inc                                    | Manufacturing                                                            | 1466301    | BBG001QSGW81 | 
| 155  | NASDAQ:CMCSA  | Comcast Corp - Class A                                 | Information                                                              | 1166691    | BBG000BFT2L4 | 
| 156  | NASDAQ:CME    | CME Group Inc - Class A                                | Finance and Insurance                                                    | 1156375    | BBG000BHLYP4 | 
| 157  | NASDAQ:CMPR   | Cimpress Plc                                           | Commercial Services                                                      | 1262976    | BBG00R0TMXH1 | 
| 158  | NASDAQ:CMPR~1 | Cimpress plc                                           | Manufacturing                                                            | 0001262976 | BBG000DFGRY7 | 
| 159  | NASDAQ:CMTL   | Comtech Telecommunications Corp.                       | Manufacturing                                                            | 23197      | BBG000BFW9K6 | 
| 160  | NASDAQ:CNDT   | Conduent Inc                                           | Information                                                              | 1677703    | BBG00C1BZMT9 | 
| 161  | NASDAQ:CNOB   | ConnectOne Bancorp Inc.                                | Finance and Insurance                                                    | 712771     | BBG000BD2D25 | 
| 162  | NASDAQ:CODX   | Co-Diagnostics Inc                                     | Manufacturing                                                            | 1692415    | BBG004HTR2D1 | 
| 163  | NASDAQ:COHR   | Coherent Inc.                                          | Manufacturing                                                            | 21510      | BBG000BG1DH3 | 
| 164  | NASDAQ:COLM   | Columbia Sportswear Co.                                | Retail Trade                                                             | 1050797    | BBG000BKKQ84 | 
| 165  | NASDAQ:COMM   | CommScope Holding Company Inc                          | Manufacturing                                                            | 1517228    | BBG004LTL7L2 | 
| 166  | NASDAQ:CONN   | Conns Inc                                              | Retail Trade                                                             | 1223389    | BBG000BRWGM2 | 
| 167  | NASDAQ:CORT   | Corcept Therapeutics Inc                               | Manufacturing                                                            | 1088856    | BBG000BKJG33 | 
| 168  | NASDAQ:COST   | Costco Wholesale Corp                                  | Retail Trade                                                             | 909832     | BBG000F6H8W8 | 
| 169  | NASDAQ:COUP   | Coupa Software Inc                                     | Information                                                              | 1385867    | BBG001J4BCN4 | 
| 170  | NASDAQ:CPRT   | Copart, Inc.                                           | Retail Trade                                                             | 900075     | BBG000BM9RH1 | 
| 171  | NASDAQ:CRIS   | Curis Inc                                              | Manufacturing                                                            | 1108205    | BBG000C1GTC9 | 
| 172  | NASDAQ:CRON   | Cronos Group Inc                                       | Manufacturing                                                            | 1656472    | BBG00D1PMS80 | 
| 173  | NASDAQ:CROX   | Crocs Inc                                              | Manufacturing                                                            | 1334036    | BBG000BLY663 | 
| 174  | NASDAQ:CRSP   | CRISPR Therapeutics AG                                 | Manufacturing                                                            | 1674416    | BBG00DBBGRX1 | 
| 175  | NASDAQ:CRUS   | Cirrus Logic, Inc.                                     | Manufacturing                                                            | 772406     | BBG000C1DHF5 | 
| 176  | NASDAQ:CRVS   | Corvus Pharmaceuticals Inc                             | Manufacturing                                                            | 1626971    | BBG009F0TGH8 | 
| 177  | NASDAQ:CRWD   | Crowdstrike Holdings Inc - Class A                     | Manufacturing                                                            | 1535527    | BBG00BLYKS03 | 
| 178  | NASDAQ:CRZO   | Carrizo Oil & Gas, Inc.                                | Energy                                                                   |            | BBG000BXZ416 | 
| 179  | NASDAQ:CSCO   | Cisco Systems, Inc.                                    | Manufacturing                                                            | 858877     | BBG000C3J3C9 | 
| 180  | NASDAQ:CSGP   | Costar Group, Inc.                                     | Information                                                              | 1057352    | BBG000D7JKW9 | 
| 181  | NASDAQ:CSIQ   | Canadian Solar Inc                                     | Manufacturing                                                            | 1375877    | BBG000K1J931 | 
| 182  | NASDAQ:CSTL   | Castle Biosciences Inc                                 | Professional, Scientific, and Technical Services                         | 1447362    | BBG006YWVSR3 | 
| 183  | NASDAQ:CSX    | CSX Corp.                                              | Transportation and Warehousing                                           | 277948     | BBG000BGJRC8 | 
| 184  | NASDAQ:CTAS   | Cintas Corporation                                     | Public Administration                                                    | 723254     | BBG000H3YXF8 | 
| 185  | NASDAQ:CTIC   | CTI BioPharma Corp.                                    | Health Technology                                                        | 891293     | BBG00JWV3M66 | 
| 186  | NASDAQ:CTMX   | CytomX Therapeutics Inc                                | Manufacturing                                                            | 1501989    | BBG001J472L3 | 
| 187  | NASDAQ:CTSH   | Cognizant Technology Solutions Corp. - Class A         | Information                                                              | 1058290    | BBG000BBDV81 | 
| 188  | NASDAQ:CTXS   | Citrix Systems, Inc.                                   | Information                                                              | 877890     | BBG000FQ6PY6 | 
| 189  | NASDAQ:CUTR   | Cutera Inc                                             | Manufacturing                                                            | 1162461    | BBG000BBRVR5 | 
| 190  | NASDAQ:CVET   | Covetrus Inc                                           | Retail Trade                                                             | 1752836    | BBG00KR691K8 | 
| 191  | NASDAQ:CY     | Cypress Semiconductor Corporation                      | Technology                                                               |            | BBG000BXNJ07 | 
| 192  | NASDAQ:CYBR   | CyberArk Software Ltd                                  | Information                                                              | 1598110    | BBG006Q52QV2 | 
| 193  | NASDAQ:CYRX   | CryoPort Inc                                           | Manufacturing                                                            | 0001124524 | BBG000PNTXP0 | 
| 194  | NASDAQ:CYTK   | Cytokinetics Inc                                       | Manufacturing                                                            | 1061983    | BBG000F0R4N9 | 
| 195  | NASDAQ:CZR    | Caesars Entertainment Inc                              | Arts, Entertainment, and Recreation                                      | 1590895    | BBG0074Q3NK6 | 
| 196  | NASDAQ:CZR~1  | Caesars Entertainment Corporation                      | Consumer Services                                                        | 858339     | BBG0017T9998 | 
| 197  | NASDAQ:DAKT   | Daktronics Inc.                                        | Manufacturing                                                            | 915779     | BBG000BMC8K5 | 
| 198  | NASDAQ:DBX    | Dropbox Inc - Class A                                  | Information                                                              | 1467623    | BBG0018SLDN0 | 
| 199  | NASDAQ:DDOG   | Datadog Inc - Class A                                  | Manufacturing                                                            | 0001561550 | BBG003NJHZT9 | 
| 200  | NASDAQ:DGII   | Digi International, Inc.                               | Manufacturing                                                            | 854775     | BBG000BZ50L0 | 
| 201  | NASDAQ:DISCA  | Discovery Inc - Class A                                | Information                                                              | 1437107    | BBG000CHWP52 | 
| 202  | NASDAQ:DISCK  | Discovery Inc - Series C                               | Information                                                              | 1437107    | BBG000VMWHH5 | 
| 203  | NASDAQ:DISH   | Dish Network Corp - Class A                            | Information                                                              | 1001082    | BBG000C2YHG9 | 
| 204  | NASDAQ:DLPN   | Dolphin Entertainment Inc.                             | Information                                                              | 1282224    | BBG000H4XLP2 | 
| 205  | NASDAQ:DLTR   | Dollar Tree Inc                                        | Retail Trade                                                             | 935703     | BBG000BSC0K9 | 
| 206  | NASDAQ:DNKN   | Dunkin Brands Group Inc                                | Accommodation and Food Services                                          | 1357204    | BBG001P3K000 | 
| 207  | NASDAQ:DOCU   | DocuSign Inc                                           | Information                                                              | 1261333    | BBG000N7KJX8 | 
| 208  | NASDAQ:DOOO   | BRP Inc                                                | Manufacturing                                                            | 0001748797 | BBG004TPGP47 | 
| 209  | NASDAQ:DOX    | Amdocs Ltd                                             | Professional, Scientific, and Technical Services                         | 1062579    | BBG000C3MXG5 | 
| 210  | NASDAQ:DRNA   | Dicerna Pharmaceuticals Inc                            | Manufacturing                                                            | 1399529    | BBG001J1DB23 | 
| 211  | NASDAQ:DRYS   | DryShips Inc.                                          | Transportation                                                           |            | BBG000QRSL13 | 
| 212  | NASDAQ:DXCM   | Dexcom Inc                                             | Manufacturing                                                            | 1093557    | BBG000QTF8K1 | 
| 213  | NASDAQ:DXPE   | DXP Enterprises, Inc.                                  | Real Estate and Rental and Leasing                                       | 1020710    | BBG000HTY991 | 
| 214  | NASDAQ:EA     | Electronic Arts, Inc.                                  | Information                                                              | 712515     | BBG000BP0KQ8 | 
| 215  | NASDAQ:EBAY   | EBay Inc.                                              | Information                                                              | 1065088    | BBG000C43RR5 | 
| 216  | NASDAQ:ECPG   | Encore Capital Group, Inc.                             | Finance and Insurance                                                    | 1084961    | BBG000F369C7 | 
| 217  | NASDAQ:EDIT   | Editas Medicine Inc                                    | Manufacturing                                                            | 1650664    | BBG005MX5GZ2 | 
| 218  | NASDAQ:EEFT   | Euronet Worldwide Inc                                  | Information                                                              | 1029199    | BBG000BMNBY1 | 
| 219  | NASDAQ:EFSC   | Enterprise Financial Services Corp.                    | Finance and Insurance                                                    | 1025835    | BBG000DZN289 | 
| 220  | NASDAQ:EHTH   | eHealth Inc                                            | Finance and Insurance                                                    | 1333493    | BBG000P5JQX6 | 
| 221  | NASDAQ:ENDP   | Endo International plc                                 | Manufacturing                                                            | 1593034    | BBG000C0HQ54 | 
| 222  | NASDAQ:ENPH   | Enphase Energy Inc                                     | Manufacturing                                                            | 1463101    | BBG001R3MNY9 | 
| 223  | NASDAQ:ENTA   | Enanta Pharmaceuticals Inc                             | Manufacturing                                                            | 1177648    | BBG001V9NSB4 | 
| 224  | NASDAQ:ENTG   | Entegris Inc                                           | Manufacturing                                                            | 1101302    | BBG000CTV4N4 | 
| 225  | NASDAQ:EPAY   | Bottomline Technologies (Delaware) Inc                 | Information                                                              | 1073349    | BBG000BRNH31 | 
| 226  | NASDAQ:EQ     | Equillium Inc                                          | Manufacturing                                                            | 1746466    | BBG00LSL8C10 | 
| 227  | NASDAQ:ESPR   | Esperion Therapeutics Inc.                             | Manufacturing                                                            | 1434868    | BBG004KB3S72 | 
| 228  | NASDAQ:ETFC   | E*TRADE Financial Corporation                          | Finance                                                                  | 1015780    | BBG000N746D6 | 
| 229  | NASDAQ:ETSY   | Etsy Inc                                               | Manufacturing                                                            | 1370637    | BBG000N7MXL8 | 
| 230  | NASDAQ:EVBG   | Everbridge Inc                                         | Information                                                              | 1437352    | BBG0022FMPD5 | 
| 231  | NASDAQ:EXAS   | Exact Sciences Corp.                                   | Professional, Scientific, and Technical Services                         | 1124140    | BBG000CWL0F5 | 
| 232  | NASDAQ:EXC    | Exelon Corp.                                           | Utilities                                                                | 1109357    | BBG000J6XT05 | 
| 233  | NASDAQ:EXEL   | Exelixis Inc                                           | Professional, Scientific, and Technical Services                         | 939767     | BBG000BQ4WF8 | 
| 234  | NASDAQ:EXPD   | Expeditors International Of Washington, Inc.           | Transportation and Warehousing                                           | 746515     | BBG000BJ5GK2 | 
| 235  | NASDAQ:EXPE   | Expedia Group Inc                                      | Administrative and Support and Waste Management and Remediation Services | 1324424    | BBG000QY3XZ2 | 
| 236  | NASDAQ:EXPO   | Exponent Inc.                                          | Professional, Scientific, and Technical Services                         | 851520     | BBG000F31Z34 | 
| 237  | NASDAQ:EYES   | Second Sight Medical Products Inc                      | Manufacturing                                                            | 1266806    | BBG002ZQP3H7 | 
| 238  | NASDAQ:FAMI   | Farmmi Inc                                             | Manufacturing                                                            | 1701261    | BBG00J7PN8S2 | 
| 239  | NASDAQ:FANG   | Diamondback Energy Inc                                 | Mining, Quarrying, and Oil and Gas Extraction                            | 1539838    | BBG002PHSYX9 | 
| 240  | NASDAQ:FARO   | Faro Technologies Inc.                                 | Manufacturing                                                            | 917491     | BBG000BJD7C2 | 
| 241  | NASDAQ:FAST   | Fastenal Co.                                           | Wholesale Trade                                                          | 815556     | BBG000BJ8YN7 | 
| 242  | NASDAQ:FATE   | Fate Therapeutics Inc                                  | Manufacturing                                                            | 1434316    | BBG000QP35H2 | 
| 243  | NASDAQ:FB     | Meta Platforms Inc - Class A                           | Information                                                              | 1326801    | BBG000MM2P62 | 
| 244  | NASDAQ:FBMS   | First Bancshares Inc Miss                              | Finance and Insurance                                                    | 947559     | BBG000BHWFN5 | 
| 245  | NASDAQ:FCEL   | Fuelcell Energy Inc                                    | Utilities                                                                | 886128     | BBG000HQ1LB3 | 
| 246  | NASDAQ:FCFS   | FirstCash Inc                                          | Finance and Insurance                                                    | 840489     | BBG000DNF659 | 
| 247  | NASDAQ:FFIV   | F5 Inc                                                 | Professional, Scientific, and Technical Services                         | 1048695    | BBG000CXYSZ6 | 
| 248  | NASDAQ:FHB    | First Hawaiian INC                                     | Finance and Insurance                                                    | 36377      | BBG0046LJYT2 | 
| 249  | NASDAQ:FISV   | Fiserv, Inc.                                           | Information                                                              | 798354     | BBG000BJKPG0 | 
| 250  | NASDAQ:FITB   | Fifth Third Bancorp                                    | Finance and Insurance                                                    | 35527      | BBG000BJL3N0 | 
| 251  | NASDAQ:FIVE   | Five Below Inc                                         | Retail Trade                                                             | 1177609    | BBG001636CR2 | 
| 252  | NASDAQ:FIVN   | Five9 Inc                                              | Information                                                              | 1288847    | BBG001KHJM17 | 
| 253  | NASDAQ:FLDM   | Fluidigm Corp                                          | Manufacturing                                                            | 1162194    | BBG000S8WQB6 | 
| 254  | NASDAQ:FLEX   | Flex Ltd                                               | Manufacturing                                                            | 866374     | BBG000BP5YT0 | 
| 255  | NASDAQ:FLGT   | Fulgent Genetics Inc                                   | Manufacturing                                                            | 1674930    | BBG00DR7LTG2 | 
| 256  | NASDAQ:FLIR   | Flir Systems, Inc.                                     | Manufacturing                                                            | 354908     | BBG000BHK836 | 
| 257  | NASDAQ:FMBI   | First Midwest Bancorp, Inc.                            | Finance and Insurance                                                    | 702325     | BBG000BJNV83 | 
| 258  | NASDAQ:FNSR   | Finisar Corporation                                    | Technology                                                               |            | BBG000C26K28 | 
| 259  | NASDAQ:FORM   | FormFactor Inc.                                        | Manufacturing                                                            | 1039399    | BBG000D1Y3P1 | 
| 260  | NASDAQ:FOSL   | Fossil Group Inc                                       | Manufacturing                                                            | 883569     | BBG000C37332 | 
| 261  | NASDAQ:FOXA   | Fox Corporation - Class A                              | Information                                                              | 1754301    | BBG00JHNJW99 | 
| 262  | NASDAQ:FPRX   | Five Prime Therapeutics Inc                            | Manufacturing                                                            | 1175505    | BBG000TYL740 | 
| 263  | NASDAQ:FRAN   | Francesca`s Holdings Corp                              | Retail Trade                                                             | 1399935    | BBG000QDSSR1 | 
| 264  | NASDAQ:FSCT   | ForeScout Technologies Inc.                            | Technology Services                                                      | 1145057    | BBG0026ZGPW3 | 
| 265  | NASDAQ:FSLR   | First Solar Inc                                        | Manufacturing                                                            | 1274494    | BBG000BFL116 | 
| 266  | NASDAQ:FTDR   | Frontdoor Inc.                                         | Professional, Scientific, and Technical Services                         | 1727263    | BBG00H9MNDZ2 | 
| 267  | NASDAQ:FTFT   | Future FinTech Group Inc                               | Manufacturing                                                            | 1066923    | BBG000F57BQ1 | 
| 268  | NASDAQ:FTNT   | Fortinet Inc                                           | Information                                                              | 1262039    | BBG000BCMBG4 | 
| 269  | NASDAQ:FTR    | Frontier Communications Corporation                    | Public Utilities                                                         |            | BBG000FH5YM1 | 
| 270  | NASDAQ:FTSV   | Forty Seven, Inc.                                      | Health Care                                                              |            | BBG00CB9FCM4 | 
| 271  | NASDAQ:FULC   | Fulcrum Therapeutics Inc                               | Manufacturing                                                            | 1680581    | BBG00DDY1RK9 | 
| 272  | NASDAQ:GBDC   | Golub Capital BDC Inc                                  | Finance and Insurance                                                    | 1476765    | BBG000PXNF64 | 
| 273  | NASDAQ:GBT    | Global Blood Therapeutics Inc.                         | Manufacturing                                                            | 1629137    | BBG00341H6M0 | 
| 274  | NASDAQ:GEC    | Great Elm Capital Group Inc.                           | Technology Services                                                      | 1082506    | BBG000FDTVD0 | 
| 275  | NASDAQ:GERN   | Geron Corp.                                            | Manufacturing                                                            | 886744     | BBG000GX1891 | 
| 276  | NASDAQ:GEVO   | Gevo Inc                                               | Manufacturing                                                            | 1392380    | BBG000P7S7L7 | 
| 277  | NASDAQ:GH     | Guardant Health Inc                                    | Manufacturing                                                            | 1576280    | BBG006D97VY9 | 
| 278  | NASDAQ:GILD   | Gilead Sciences, Inc.                                  | Manufacturing                                                            | 882095     | BBG000CKGBP2 | 
| 279  | NASDAQ:GLNG   | Golar Lng                                              | Mining, Quarrying, and Oil and Gas Extraction                            | 1207179    | BBG000K14TT5 | 
| 280  | NASDAQ:GLUU   | Glu Mobile Inc                                         | Professional, Scientific, and Technical Services                         | 1366246    | BBG000QL9YL7 | 
| 281  | NASDAQ:GNTX   | Gentex Corp.                                           | Manufacturing                                                            | 355811     | BBG000BKJ092 | 
| 282  | NASDAQ:GNUS   | Genius Brands International Inc                        | Information                                                              | 0001355848 | BBG000NNBY60 | 
| 283  | NASDAQ:GO     | Grocery Outlet Holding Corp                            | Retail Trade                                                             | 1771515    | BBG00P4R3079 | 
| 284  | NASDAQ:GOGO   | Gogo Inc                                               | Information                                                              | 1537054    | BBG002CN8XN5 | 
| 285  | NASDAQ:GOOG   | Alphabet Inc - Class C                                 | Information                                                              | 1652044    | BBG009S3NB30 | 
| 286  | NASDAQ:GOOGL  | Alphabet Inc - Class A                                 | Information                                                              | 1652044    | BBG009S39JX6 | 
| 287  | NASDAQ:GPOR   | Gulfport Energy Corporation                            | Energy Minerals                                                          | 874499     | BBG000BG09F5 | 
| 288  | NASDAQ:GPRO   | GoPro Inc. - Class A                                   | Manufacturing                                                            | 1500435    | BBG001LWHLJ8 | 
| 289  | NASDAQ:GRMN   | Garmin Ltd                                             | Manufacturing                                                            | 1121788    | BBG000C4LN67 | 
| 290  | NASDAQ:GROW   | U.S. Global Investors, Inc. - Class A                  | Finance and Insurance                                                    | 754811     | BBG000BBVVP2 | 
| 291  | NASDAQ:GRPN   | Groupon Inc                                            | Professional, Scientific, and Technical Services                         | 1490281    | BBG000QRKJ70 | 
| 292  | NASDAQ:GRTS   | Gritstone Bio Inc                                      | Manufacturing                                                            | 1656634    | BBG00B8N2C16 | 
| 293  | NASDAQ:GRTX   | Galera Therapeutics Inc                                | Manufacturing                                                            | 0001563577 | BBG00M0WD1J3 | 
| 294  | NASDAQ:GRWG   | GrowGeneration Corp                                    | Wholesale Trade                                                          | 0001604868 | BBG00DBKBYB5 | 
| 295  | NASDAQ:GSKY   | GreenSky Inc - Class A                                 | Information                                                              | 1712923    | BBG00KT2SCV8 | 
| 296  | NASDAQ:GT     | Goodyear Tire & Rubber Co.                             | Manufacturing                                                            | 42582      | BBG000BKNX95 | 
| 297  | NASDAQ:HAIN   | Hain Celestial Group Inc                               | Manufacturing                                                            | 910406     | BBG000BQW085 | 
| 298  | NASDAQ:HALO   | Halozyme Therapeutics Inc.                             | Manufacturing                                                            | 1159036    | BBG000CZ8W54 | 
| 299  | NASDAQ:HAS    | Hasbro, Inc.                                           | Manufacturing                                                            | 46080      | BBG000BKVJK4 | 
| 300  | NASDAQ:HBAN   | Huntington Bancshares, Inc.                            | Finance and Insurance                                                    | 49196      | BBG000BKWSR6 | 
| 301  | NASDAQ:HDS    | HD Supply Holdings Inc                                 | Wholesale Trade                                                          | 1573097    | BBG0033377Y3 | 
| 302  | NASDAQ:HEAR   | Turtle Beach Corp                                      | Manufacturing                                                            | 1493761    | BBG000BM6N47 | 
| 303  | NASDAQ:HEES   | H&E Equipment Services Inc                             | Real Estate and Rental and Leasing                                       | 1339605    | BBG000K1XFJ4 | 
| 304  | NASDAQ:HLIT   | Harmonic, Inc.                                         | Manufacturing                                                            | 851310     | BBG000BTXZ45 | 
| 305  | NASDAQ:HOLX   | Hologic, Inc.                                          | Manufacturing                                                            | 859737     | BBG000C3NTN5 | 
| 306  | NASDAQ:HON    | Honeywell International Inc                            | Manufacturing                                                            | 773840     | BBG000H556T9 | 
| 307  | NASDAQ:HOPE   | Hope Bancorp Inc                                       | Finance and Insurance                                                    | 1128361    | BBG000DXHBN4 | 
| 308  | NASDAQ:HQY    | Healthequity Inc                                       | Information                                                              | 1428336    | BBG000TYXCT9 | 
| 309  | NASDAQ:HRTX   | Heron Therapeutics Inc                                 | Manufacturing                                                            | 818033     | BBG000G2GJT7 | 
| 310  | NASDAQ:HSIC   | Henry Schein Inc.                                      | Wholesale Trade                                                          | 1000228    | BBG000BNMMJ3 | 
| 311  | NASDAQ:HTBX   | Heat Biologics Inc                                     | Manufacturing                                                            | 1476963    | BBG004JDZPJ8 | 
| 312  | NASDAQ:HURN   | Huron Consulting Group Inc                             | Professional, Scientific, and Technical Services                         | 1289848    | BBG000PV2M48 | 
| 313  | NASDAQ:HWC    | Hancock Whitney Corp.                                  | Finance and Insurance                                                    | 750577     | BBG000CBC7D8 | 
| 314  | NASDAQ:HYRE   | HyreCar Inc                                            | Real Estate and Rental and Leasing                                       | 1713832    | BBG00L07HM73 | 
| 315  | NASDAQ:HZNP   | Horizon Therapeutics Plc                               | Manufacturing                                                            | 1492426    | BBG0014FFY08 | 
| 316  | NASDAQ:IAC    | IAC/InterActiveCorp.                                   | Technology Services                                                      | 891103     | BBG000BKQG80 | 
| 317  | NASDAQ:IBKR   | Interactive Brokers Group Inc - Class A                | Finance and Insurance                                                    | 1381197    | BBG000LV0836 | 
| 318  | NASDAQ:IBOC   | International Bancshares Corp.                         | Finance and Insurance                                                    | 315709     | BBG000BS0N59 | 
| 319  | NASDAQ:ICHR   | Ichor Holdings Ltd                                     | Manufacturing                                                            | 1652535    | BBG00F9VSCH3 | 
| 320  | NASDAQ:ICLR   | Icon Plc                                               | Professional, Scientific, and Technical Services                         | 1060373    | BBG000CTSZQ6 | 
| 321  | NASDAQ:ICPT   | Intercept Pharmaceuticals Inc                          | Manufacturing                                                            | 1270073    | BBG001J1QN87 | 
| 322  | NASDAQ:ICUI   | ICU Medical, Inc.                                      | Manufacturing                                                            | 883984     | BBG000CQV2N4 | 
| 323  | NASDAQ:IDCC   | Interdigital Inc                                       | Real Estate and Rental and Leasing                                       | 1405495    | BBG000HLJ7M4 | 
| 324  | NASDAQ:IDEX   | Ideanomics Inc                                         | Information                                                              | 837852     | BBG000BM2S95 | 
| 325  | NASDAQ:IDXX   | Idexx Laboratories, Inc.                               | Manufacturing                                                            | 874716     | BBG000BLRT07 | 
| 326  | NASDAQ:IHRT   | iHeartMedia Inc - Class A New                          | Information                                                              | 1400891    | BBG00P2FSNZ9 | 
| 327  | NASDAQ:IIVI   | Ii-Vi Inc.                                             | Manufacturing                                                            | 820318     | BBG000BLW102 | 
| 328  | NASDAQ:ILMN   | Illumina Inc                                           | Manufacturing                                                            | 1110803    | BBG000DSMS70 | 
| 329  | NASDAQ:IMGN   | Immunogen, Inc.                                        | Manufacturing                                                            | 855654     | BBG000C2JTB5 | 
| 330  | NASDAQ:IMMU   | Immunomedics Inc.                                      | Health Technology                                                        | 722830     | BBG000BLXT19 | 
| 331  | NASDAQ:INCY   | Incyte Corp.                                           | Professional, Scientific, and Technical Services                         | 879169     | BBG000BNPSQ9 | 
| 332  | NASDAQ:INDB   | Independent Bank Corp.                                 | Finance and Insurance                                                    | 776901     | BBG000BM0597 | 
| 333  | NASDAQ:INGN   | Inogen Inc                                             | Manufacturing                                                            | 1294133    | BBG0021PH456 | 
| 334  | NASDAQ:INMD   | Inmode Ltd                                             | Manufacturing                                                            | 1742692    | BBG00PPS73P4 | 
| 335  | NASDAQ:INO    | Inovio Pharmaceuticals Inc                             | Manufacturing                                                            | 1055726    | BBG000BK6YX5 | 
| 336  | NASDAQ:INSM   | Insmed Inc                                             | Manufacturing                                                            | 1104506    | BBG000BWM5P3 | 
| 337  | NASDAQ:INTC   | Intel Corp.                                            | Manufacturing                                                            | 50863      | BBG000C0G1D1 | 
| 338  | NASDAQ:INTU   | Intuit Inc                                             | Information                                                              | 896878     | BBG000BH5DV1 | 
| 339  | NASDAQ:INVA   | Innoviva Inc                                           | Manufacturing                                                            | 1080014    | BBG000CG9XT7 | 
| 340  | NASDAQ:IONS   | Ionis Pharmaceuticals Inc                              | Manufacturing                                                            | 874015     | BBG000JH6683 | 
| 341  | NASDAQ:IOVA   | Iovance Biotherapeutics Inc                            | Manufacturing                                                            | 1425205    | BBG000FTLBV7 | 
| 342  | NASDAQ:IPGP   | IPG Photonics Corp                                     | Manufacturing                                                            | 1111928    | BBG000DCGRL8 | 
| 343  | NASDAQ:IPHI   | Inphi Corp                                             | Manufacturing                                                            | 1160958    | BBG000R23VW8 | 
| 344  | NASDAQ:IRBT   | Irobot Corp                                            | Manufacturing                                                            | 1159167    | BBG000HXJB21 | 
| 345  | NASDAQ:IRDM   | Iridium Communications Inc                             | Manufacturing                                                            | 1418819    | BBG000VC0FC1 | 
| 346  | NASDAQ:IRTC   | iRhythm Technologies Inc                               | Manufacturing                                                            | 1388658    | BBG001J19V24 | 
| 347  | NASDAQ:ISBC   | Investors Bancorp Inc                                  | Finance and Insurance                                                    | 1326807    | BBG000FRNTH6 | 
| 348  | NASDAQ:ISEE   | IVERIC bio Inc                                         | Manufacturing                                                            | 1410939    | BBG0019K7J31 | 
| 349  | NASDAQ:ISIG   | Insignia Systems, Inc.                                 | Professional, Scientific, and Technical Services                         | 875355     | BBG000CBDQY2 | 
| 350  | NASDAQ:ISRG   | Intuitive Surgical Inc                                 | Manufacturing                                                            | 1035267    | BBG000BJPDZ1 | 
| 351  | NASDAQ:ITCI   | Intra-Cellular Therapies Inc                           | Manufacturing                                                            | 1567514    | BBG0026ZFZC4 | 
| 352  | NASDAQ:ITRI   | Itron Inc.                                             | Manufacturing                                                            | 780571     | BBG000BD2167 | 
| 353  | NASDAQ:JACK   | Jack In The Box, Inc.                                  | Accommodation and Food Services                                          | 807882     | BBG000GZYVY1 | 
| 354  | NASDAQ:JAGX   | Jaguar Health Inc                                      | Manufacturing                                                            | 1585608    | BBG005Z20406 | 
| 355  | NASDAQ:JAZZ   | Jazz Pharmaceuticals plc                               | Manufacturing                                                            | 1232524    | BBG000G9CGL0 | 
| 356  | NASDAQ:JBHT   | J.B. Hunt Transport Services, Inc.                     | Transportation and Warehousing                                           | 728535     | BBG000BMDBZ1 | 
| 357  | NASDAQ:JBLU   | Jetblue Airways Corp                                   | Transportation and Warehousing                                           | 1158463    | BBG000BRQ6L2 | 
| 358  | NASDAQ:JKHY   | Jack Henry & Associates, Inc.                          | Professional, Scientific, and Technical Services                         | 779152     | BBG000BMH2Q7 | 
| 359  | NASDAQ:JOUT   | Johnson Outdoors Inc - Class A                         | Manufacturing                                                            | 788329     | BBG000HCXFS4 | 
| 360  | NASDAQ:JRVR   | James River Group Holdings Ltd                         | Finance and Insurance                                                    | 1620459    | BBG007HRJXJ3 | 
| 361  | NASDAQ:KALU   | Kaiser Aluminum Corp                                   | Manufacturing                                                            | 811596     | BBG000PKZDX4 | 
| 362  | NASDAQ:KDMN   | Kadmon Holdings Inc                                    | Manufacturing                                                            | 1557142    | BBG00B9P9V84 | 
| 363  | NASDAQ:KDP    | Keurig Dr Pepper Inc                                   | Manufacturing                                                            | 1418135    | BBG000TJM7F0 | 
| 364  | NASDAQ:KELYA  | Kelly Services, Inc. - Class A                         | Professional, Scientific, and Technical Services                         | 55135      | BBG000BMNC97 | 
| 365  | NASDAQ:KHC    | Kraft Heinz Co                                         | Manufacturing                                                            | 1637459    | BBG005CPNTQ2 | 
| 366  | NASDAQ:KIDS   | OrthoPediatrics corp                                   | Manufacturing                                                            | 1425450    | BBG00HFFRW39 | 
| 367  | NASDAQ:KLAC   | KLA Corp.                                              | Manufacturing                                                            | 319201     | BBG000BMTFR4 | 
| 368  | NASDAQ:KLIC   | Kulicke & Soffa Industries, Inc.                       | Manufacturing                                                            | 56978      | BBG000BMTX31 | 
| 369  | NASDAQ:KNDI   | Kandi Technologies Group Inc                           | Manufacturing                                                            | 1316517    | BBG000PNF2V6 | 
| 370  | NASDAQ:KOSS   | Koss Corp.                                             | Manufacturing                                                            | 56701      | BBG000BMXYW2 | 
| 371  | NASDAQ:KRTX   | Karuna Therapeutics Inc                                | Manufacturing                                                            | 1771917    | BBG00NN875G0 | 
| 372  | NASDAQ:KXIN   | Kaixin Auto Holdings                                   | Retail Trade                                                             | 1713539    | BBG00J54QHD4 | 
| 373  | NASDAQ:LAKE   | Lakeland Industries, Inc.                              | Manufacturing                                                            | 798081     | BBG000BN1807 | 
| 374  | NASDAQ:LANC   | Lancaster Colony Corp.                                 | Manufacturing                                                            | 57515      | BBG000BN1M88 | 
| 375  | NASDAQ:LASR   | nLIGHT Inc                                             | Manufacturing                                                            | 1124796    | BBG0020BCPX5 | 
| 376  | NASDAQ:LAZR   | Luminar Technologies Inc - Class A                     |                                                                          | 1758057    | BBG00MS90LK2 | 
| 377  | NASDAQ:LBRDK  | Liberty Broadband Corp - Series C                      | Information                                                              | 1611983    | BBG006GNSZW5 | 
| 378  | NASDAQ:LBTYA  | Liberty Global plc - Class A                           | Information                                                              | 1570585    | BBG000H0QBS7 | 
| 379  | NASDAQ:LBTYK  | Liberty Global plc - Class C                           | Information                                                              | 1570585    | BBG000BXWBN9 | 
| 380  | NASDAQ:LECO   | Lincoln Electric Holdings, Inc.                        | Manufacturing                                                            | 59527      | BBG000BB72K8 | 
| 381  | NASDAQ:LEDS   | Semileds Corp                                          | Manufacturing                                                            | 1333822    | BBG0014JY744 | 
| 382  | NASDAQ:LGND   | Ligand Pharmaceuticals, Inc. - Class B                 | Manufacturing                                                            | 886163     | BBG000BKF014 | 
| 383  | NASDAQ:LHCG   | LHC Group Inc                                          | Health Care and Social Assistance                                        | 1303313    | BBG000G7W420 | 
| 384  | NASDAQ:LIFE   | Atyr Pharma Inc                                        | Manufacturing                                                            | 1073431    | BBG001J2P692 | 
| 385  | NASDAQ:LIND   | Lindblad Expeditions Holdings Inc                      | Transportation and Warehousing                                           | 1512499    | BBG004MDWKS8 | 
| 386  | NASDAQ:LITE   | Lumentum Holdings Inc                                  | Manufacturing                                                            | 1633978    | BBG0073F9RT7 | 
| 387  | NASDAQ:LIVN   | LivaNova PLC                                           | Manufacturing                                                            | 1639691    | BBG009LGHG16 | 
| 388  | NASDAQ:LKFN   | Lakeland Financial Corp.                               | Finance and Insurance                                                    | 721994     | BBG000BHR1R8 | 
| 389  | NASDAQ:LKQ    | LKQ Corp                                               | Manufacturing                                                            | 1065696    | BBG000PXDL44 | 
| 390  | NASDAQ:LLL    | JX Luxventure Limited                                  | Wholesale Trade                                                          | 1546383    | BBG00429YTD4 | 
| 391  | NASDAQ:LNT    | Alliant Energy Corp.                                   | Utilities                                                                | 352541     | BBG000DW4Q75 | 
| 392  | NASDAQ:LOCO   | El Pollo Loco Holdings Inc                             | Accommodation and Food Services                                          | 1606366    | BBG000LC2VD4 | 
| 393  | NASDAQ:LOGC   | LogicBio Therapeutics Inc                              | Manufacturing                                                            | 1664106    | BBG00D2PTTW3 | 
| 394  | NASDAQ:LOGI   | Logitech International S.A.                            | Electronic Technology                                                    | 1032975    | BBG000BQNBN4 | 
| 395  | NASDAQ:LOGM   | LogMeIn Inc.                                           | Technology Services                                                      | 1420302    | BBG000Q0SZJ2 | 
| 396  | NASDAQ:LOPE   | Grand Canyon Education Inc                             | Educational Services                                                     | 1434588    | BBG000FV28W9 | 
| 397  | NASDAQ:LPLA   | LPL Financial Holdings Inc                             | Finance and Insurance                                                    | 1397911    | BBG000P2TYL8 | 
| 398  | NASDAQ:LQDT   | Liquidity Services Inc                                 | Information                                                              | 1235468    | BBG000QXXMF7 | 
| 399  | NASDAQ:LRCX   | Lam Research Corp.                                     | Manufacturing                                                            | 707549     | BBG000BNFLM9 | 
| 400  | NASDAQ:LSCC   | Lattice Semiconductor Corp.                            | Manufacturing                                                            | 855658     | BBG000C2D1C1 | 
| 401  | NASDAQ:LSTR   | Landstar System, Inc.                                  | Transportation and Warehousing                                           | 853816     | BBG000BB2KN0 | 
| 402  | NASDAQ:LULU   | Lululemon Athletica inc.                               | Retail Trade                                                             | 1397187    | BBG000R8ZVD1 | 
| 403  | NASDAQ:LUMO   | Lumos Pharma Inc                                       | Manufacturing                                                            | 0001126234 | BBG001CDB921 | 
| 404  | NASDAQ:LVGO   | Livongo Health Inc.                                    | Technology Services                                                      | 1639225    | BBG0073X4TB8 | 
| 405  | NASDAQ:LXRX   | Lexicon Pharmaceuticals Inc                            | Manufacturing                                                            | 1062822    | BBG000BQ85G2 | 
| 406  | NASDAQ:LYFT   | Lyft Inc Cls A                                         | Transportation and Warehousing                                           | 1759509    | BBG004M9ZHX5 | 
| 407  | NASDAQ:MARA   | Marathon Digital Holdings Inc                          | Professional, Scientific, and Technical Services                         | 1507605    | BBG001K7WBT8 | 
| 408  | NASDAQ:MARK   | Remark Holdings Inc                                    | Information                                                              | 1368365    | BBG000PDGBB9 | 
| 409  | NASDAQ:MASI   | Masimo Corp                                            | Manufacturing                                                            | 937556     | BBG000C3W281 | 
| 410  | NASDAQ:MAT    | Mattel, Inc.                                           | Manufacturing                                                            | 63276      | BBG000BNNYW1 | 
| 411  | NASDAQ:MCHP   | Microchip Technology, Inc.                             | Manufacturing                                                            | 827054     | BBG000BHCP19 | 
| 412  | NASDAQ:MCRB   | Seres Therapeutics Inc                                 | Manufacturing                                                            | 1609809    | BBG0099X6859 | 
| 413  | NASDAQ:MDB    | MongoDB Inc - Class A                                  | Information                                                              | 1441816    | BBG0022FDRY8 | 
| 414  | NASDAQ:MDCO   | The Medicines Company                                  | Health Care                                                              |            | BBG000DX5DX2 | 
| 415  | NASDAQ:MDGL   | Madrigal Pharmaceuticals Inc                           | Manufacturing                                                            | 1157601    | BBG000QS6NV8 | 
| 416  | NASDAQ:MDLZ   | Mondelez International Inc. - Class A                  | Manufacturing                                                            | 1103982    | BBG000D4LWF6 | 
| 417  | NASDAQ:MDRX   | Allscripts Healthcare Solutions Inc                    | Professional, Scientific, and Technical Services                         | 1124804    | BBG000BLDXH5 | 
| 418  | NASDAQ:MDSO   | Medidata Solutions, Inc.                               | Technology                                                               |            | BBG000VCQPM0 | 
| 419  | NASDAQ:MDVL   | MedAvail Holdings Inc                                  | Manufacturing                                                            | 1402479    | BBG000J1MZJ4 | 
| 420  | NASDAQ:MELI   | MercadoLibre Inc                                       | Information                                                              | 1099590    | BBG000GQPB11 | 
| 421  | NASDAQ:MERC   | Mercer International Inc.                              | Manufacturing                                                            | 75659      | BBG000CDMMM0 | 
| 422  | NASDAQ:MGNI   | Magnite Inc                                            | Professional, Scientific, and Technical Services                         | 1595974    | BBG000PBDRC0 | 
| 423  | NASDAQ:MGNX   | Macrogenics Inc                                        | Manufacturing                                                            | 1125345    | BBG000BM2SF8 | 
| 424  | NASDAQ:MGPI   | MGP Ingredients, Inc.                                  | Manufacturing                                                            | 835011     | BBG000BXK6C5 | 
| 425  | NASDAQ:MIDD   | Middleby Corp.                                         | Manufacturing                                                            | 769520     | BBG000DQN9R3 | 
| 426  | NASDAQ:MIK    | Michaels Companies Inc                                 | Retail Trade                                                             | 1593936    | BBG005CPNTS0 | 
| 427  | NASDAQ:MIST   | Milestone Pharmaceuticals Inc                          | Manufacturing                                                            | 1408443    | BBG009DR4MN8 | 
| 428  | NASDAQ:MKSI   | MKS Instruments, Inc.                                  | Manufacturing                                                            | 1049502    | BBG000BVMG26 | 
| 429  | NASDAQ:MKTX   | MarketAxess Holdings Inc.                              | Finance and Insurance                                                    | 1278021    | BBG000BJBZ23 | 
| 430  | NASDAQ:MLNX   | Mellanox Technologies, Ltd.                            | Technology                                                               |            | BBG000H1F895 | 
| 431  | NASDAQ:MMAT   | Meta Materials Inc                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1431959    | BBG000K6Y764 | 
| 432  | NASDAQ:MMYT   | MakeMyTrip Ltd                                         | Information                                                              | 1495153    | BBG000BB34J0 | 
| 433  | NASDAQ:MNDT   | Mandiant Inc                                           | Information                                                              | 1370880    | BBG0020B4JG7 | 
| 434  | NASDAQ:MNKD   | Mannkind Corp                                          | Manufacturing                                                            | 899460     | BBG000PPL3G9 | 
| 435  | NASDAQ:MNRO   | Monro Inc                                              | Other Services (except Public Administration)                            | 876427     | BBG000C0BZD1 | 
| 436  | NASDAQ:MNST   | Monster Beverage Corp.                                 | Manufacturing                                                            | 865752     | BBG008NVB1C0 | 
| 437  | NASDAQ:MNTA   | Momenta Pharmaceuticals Inc.                           | Health Technology                                                        | 1235010    | BBG000M5QDX0 | 
| 438  | NASDAQ:MORN   | Morningstar Inc                                        | Finance and Insurance                                                    | 1289419    | BBG000CGQ4F7 | 
| 439  | NASDAQ:MOXC   | Moxian (BVI) Inc                                       | Information                                                              | 1516805    | BBG001LWMD73 | 
| 440  | NASDAQ:MPWR   | Monolithic Power System Inc                            | Manufacturing                                                            | 1280452    | BBG000C30L48 | 
| 441  | NASDAQ:MRIN   | Marin Software Inc                                     | Information                                                              | 1389002    | BBG001M6NQK4 | 
| 442  | NASDAQ:MRNA   | Moderna Inc                                            | Manufacturing                                                            | 1682852    | BBG003PHHZT1 | 
| 443  | NASDAQ:MRSN   | Mersana Therapeutics Inc                               | Manufacturing                                                            | 1442836    | BBG001CPSVF3 | 
| 444  | NASDAQ:MRTX   | Mirati Therapeutics Inc                                | Manufacturing                                                            | 1576263    | BBG004TPGBP5 | 
| 445  | NASDAQ:MRUS   | Merus N.V                                              | Manufacturing                                                            | 1651311    | BBG00B8LXMS5 | 
| 446  | NASDAQ:MRVL   | Marvell Technology Group Ltd                           | Manufacturing                                                            | 1058057    | BBG000BYWTX7 | 
| 447  | NASDAQ:MSEX   | Middlesex Water Co.                                    | Utilities                                                                | 66004      | BBG000BPGQ60 | 
| 448  | NASDAQ:MSFT   | Microsoft Corporation                                  | Information                                                              | 789019     | BBG000BPH459 | 
| 449  | NASDAQ:MSTR   | Microstrategy Inc. - Class A                           | Information                                                              | 1050446    | BBG000GQJPZ0 | 
| 450  | NASDAQ:MTCH   | Match Group Inc.                                       | Technology Services                                                      | 1575189    | BBG00B6WH9G3 | 
| 451  | NASDAQ:MU     | Micron Technology Inc.                                 | Manufacturing                                                            | 723125     | BBG000C5Z1S3 | 
| 452  | NASDAQ:MVIS   | Microvision Inc.                                       | Manufacturing                                                            | 65770      | BBG000BVKXQ5 | 
| 453  | NASDAQ:MXIM   | Maxim Integrated Products, Inc.                        | Manufacturing                                                            | 743316     | BBG000BPNP00 | 
| 454  | NASDAQ:MYGN   | Myriad Genetics, Inc.                                  | Manufacturing                                                            | 899923     | BBG000D9H9F1 | 
| 455  | NASDAQ:MYL    | Mylan N.V.                                             | Health Technology                                                        | 1623613    | BBG000BPQD31 | 
| 456  | NASDAQ:MYOK   | MyoKardia Inc.                                         | Health Technology                                                        | 1552451    | BBG003DKQRK4 | 
| 457  | NASDAQ:NAKD   | Naked Brand Group Ltd                                  | Manufacturing                                                            | 1707919    | BBG00HC854K5 | 
| 458  | NASDAQ:NAVI   | Navient Corp                                           | Finance and Insurance                                                    | 1593538    | BBG004MN1R41 | 
| 459  | NASDAQ:NBEV   | NewAge Inc                                             | Manufacturing                                                            | 1579823    | BBG005YW6FV6 | 
| 460  | NASDAQ:NBIX   | Neurocrine Biosciences, Inc.                           | Manufacturing                                                            | 914475     | BBG000GJS7C1 | 
| 461  | NASDAQ:NBL    | Noble Energy Inc.                                      | Energy Minerals                                                          | 72207      | BBG000BPT0C6 | 
| 462  | NASDAQ:NBTB   | NBT Bancorp. Inc.                                      | Finance and Insurance                                                    | 790359     | BBG000CJN801 | 
| 463  | NASDAQ:NCMI   | National Cinemedia Inc                                 | Professional, Scientific, and Technical Services                         | 1377630    | BBG000Q5VCD4 | 
| 464  | NASDAQ:NDAQ   | Nasdaq Inc - 144A                                      | Finance and Insurance                                                    | 1120193    | BBG000F5VVB6 | 
| 465  | NASDAQ:NEOG   | Neogen Corp.                                           | Manufacturing                                                            | 711377     | BBG000C1BCK2 | 
| 466  | NASDAQ:NFLX   | NetFlix Inc                                            | Information                                                              | 1065280    | BBG000CL9VN6 | 
| 467  | NASDAQ:NGHC   | National General Holdings Corp                         | Finance and Insurance                                                    | 1578735    | BBG004N1KPJ5 | 
| 468  | NASDAQ:NGM    | Ngm Biopharmaceuticals Inc                             | Manufacturing                                                            | 1426332    | BBG001J1BNT0 | 
| 469  | NASDAQ:NKLA   | Nikola Corporation                                     | Manufacturing                                                            | 1731289    | BBG00L4CWQ45 | 
| 470  | NASDAQ:NKTR   | Nektar Therapeutics                                    | Manufacturing                                                            | 906709     | BBG000BHCYJ1 | 
| 471  | NASDAQ:NLOK   | NortonLifeLock Inc                                     | Information                                                              | 0000849399 | BBG000BH2JM1 | 
| 472  | NASDAQ:NMFC   | New Mountain Finance Corp                              | Finance and Insurance                                                    | 1496099    | BBG000BG22J4 | 
| 473  | NASDAQ:NMIH   | NMI Holdings Inc - Class A                             | Finance and Insurance                                                    | 1547903    | BBG005DLMMZ6 | 
| 474  | NASDAQ:NOVN   | Novan Inc                                              | Manufacturing                                                            | 1467154    | BBG002V17386 | 
| 475  | NASDAQ:NRXP   | NRX Pharmaceuticals Inc                                | Manufacturing                                                            | 1719406    | BBG00JCWDN63 | 
| 476  | NASDAQ:NTAP   | Netapp Inc                                             | Manufacturing                                                            | 1002047    | BBG000FP1N32 | 
| 477  | NASDAQ:NTCT   | Netscout Systems Inc                                   | Professional, Scientific, and Technical Services                         | 1078075    | BBG000C136Z8 | 
| 478  | NASDAQ:NTLA   | Intellia Therapeutics Inc                              | Manufacturing                                                            | 1652130    | BBG007KC7PB0 | 
| 479  | NASDAQ:NTNX   | Nutanix Inc - Class A                                  | Information                                                              | 1618732    | BBG001NDW1Z7 | 
| 480  | NASDAQ:NTRA   | Natera Inc                                             | Health Care and Social Assistance                                        | 1604821    | BBG001J1BQ86 | 
| 481  | NASDAQ:NTRS   | Northern                                               | Finance                                                                  |            | BBG000BQ74K1 | 
| 482  | NASDAQ:NUAN   | Nuance Communications Inc                              | Information                                                              | 1002517    | BBG000BD3LM4 | 
| 483  | NASDAQ:NURO   | Neurometrix Inc.                                       | Manufacturing                                                            | 1289850    | BBG000BB88M2 | 
| 484  | NASDAQ:NUVA   | Nuvasive Inc                                           | Manufacturing                                                            | 1142596    | BBG000LNL298 | 
| 485  | NASDAQ:NVAX   | Novavax, Inc.                                          | Manufacturing                                                            | 1000694    | BBG000NVSBL7 | 
| 486  | NASDAQ:NVCR   | NovoCure Ltd                                           | Manufacturing                                                            | 1645113    | BBG009XW8PY2 | 
| 487  | NASDAQ:NVDA   | NVIDIA Corp                                            | Manufacturing                                                            | 1045810    | BBG000BBJQV0 | 
| 488  | NASDAQ:NVEC   | NVE Corp                                               | Manufacturing                                                            | 724910     | BBG000N22GR2 | 
| 489  | NASDAQ:NWBI   | Northwest Bancshares Inc                               | Finance and Insurance                                                    | 1471265    | BBG000BG8NP5 | 
| 490  | NASDAQ:NWL    | Newell Brands Inc                                      | Manufacturing                                                            | 814453     | BBG000BQC9V2 | 
| 491  | NASDAQ:NWLI   | National Western Life Group Inc - Class A              | Finance and Insurance                                                    | 1635984    | BBG008HNHZ07 | 
| 492  | NASDAQ:NWSA   | News Corp - Class A                                    | Information                                                              | 1564708    | BBG0035LY913 | 
| 493  | NASDAQ:NXPI   | NXP Semiconductors NV                                  | Manufacturing                                                            | 1413447    | BBG000BND699 | 
| 494  | NASDAQ:OAS    | Oasis Petroleum Inc.                                   | Energy Minerals                                                          | 1486159    | BBG000QFJ7H3 | 
| 495  | NASDAQ:OCGN   | Ocugen Inc                                             | Manufacturing                                                            | 0001372299 | BBG00194VJB1 | 
| 496  | NASDAQ:OCSL   | Oaktree Specialty Lending Corp                         | Finance and Insurance                                                    | 1414932    | BBG000TKZRB3 | 
| 497  | NASDAQ:ODFL   | Old Dominion Freight Line, Inc.                        | Transportation and Warehousing                                           | 878927     | BBG000CHSS88 | 
| 498  | NASDAQ:ODP    | ODP Corporation (The)                                  | Retail Trade                                                             | 800240     | BBG000CNZC55 | 
| 499  | NASDAQ:OFIX   | Orthofix Medical Inc                                   | Manufacturing                                                            | 884624     | BBG000G1C210 | 
| 500  | NASDAQ:OFLX   | Omega Flex Inc                                         | Manufacturing                                                            | 1317945    | BBG000QSGFZ0 | 
| 501  | NASDAQ:OGI    | OrganiGram Holdings Inc.                               | Manufacturing                                                            | 1620737    | BBG0071L00W0 | 
| 502  | NASDAQ:OKTA   | Okta Inc - Class A                                     | Information                                                              | 1660134    | BBG001YV1SM4 | 
| 503  | NASDAQ:OLED   | Universal Display Corp.                                | Manufacturing                                                            | 1005284    | BBG000BLRP41 | 
| 504  | NASDAQ:OLLI   | Ollies Bargain Outlet Holdings Inc                     | Retail Trade                                                             | 1639300    | BBG0098VVDT9 | 
| 505  | NASDAQ:ON     | ON Semiconductor Corp.                                 | Manufacturing                                                            | 1097864    | BBG000DV7MX4 | 
| 506  | NASDAQ:ONCE   | Spark Therapeutics, Inc.                               | Health Care                                                              |            | BBG006KFB6F8 | 
| 507  | NASDAQ:ONEW   | Onewater Marine Inc - Class A                          | Retail Trade                                                             | 0001772921 | BBG00PPXGH18 | 
| 508  | NASDAQ:ONVO   | Organovo Holdings Inc                                  | Manufacturing                                                            | 0001497253 | BBG001M8GFD0 | 
| 509  | NASDAQ:OPCH   | Option Care Health Inc. - Registered Shares            | Retail Trade                                                             | 0001014739 | BBG000BQK480 | 
| 510  | NASDAQ:OPK    | Opko Health Inc                                        | Manufacturing                                                            | 944809     | BBG000N49069 | 
| 511  | NASDAQ:ORLY   | O`Reilly Automotive, Inc.                              | Retail Trade                                                             | 898173     | BBG000BGYWY6 | 
| 512  | NASDAQ:OSBC   | Old Second Bancorporation Inc.                         | Finance and Insurance                                                    | 357173     | BBG000BLFSZ4 | 
| 513  | NASDAQ:OSPN   | OneSpan Inc                                            | Professional, Scientific, and Technical Services                         | 1044777    | BBG000BJ3R48 | 
| 514  | NASDAQ:OSTK   | Overstock.com Inc                                      | Retail Trade                                                             | 1130713    | BBG000BF7BV7 | 
| 515  | NASDAQ:OSW    | OneSpaWorld Holdings Limited                           | Professional, Scientific, and Technical Services                         | 1758488    | BBG00MKMQ6M4 | 
| 516  | NASDAQ:OTEX   | Open Text Corp                                         | Information                                                              | 1002638    | BBG000K712R6 | 
| 517  | NASDAQ:OTIC   | Otonomy Inc                                            | Manufacturing                                                            | 1493566    | BBG000R16894 | 
| 518  | NASDAQ:OTTR   | Otter Tail Corporation                                 | Utilities                                                                | 1466593    | BBG000BQNM78 | 
| 519  | NASDAQ:OZK    | Bank OZK                                               | Finance and Insurance                                                    | 1038205    | BBG000QFJJW0 | 
| 520  | NASDAQ:PAAS   | Pan American Silver Corp                               | Mining, Quarrying, and Oil and Gas Extraction                            | 771992     | BBG000C0RGY3 | 
| 521  | NASDAQ:PACB   | Pacific Biosciences of California Inc                  | Manufacturing                                                            | 1299130    | BBG000QKXH20 | 
| 522  | NASDAQ:PACW   | Pacwest Bancorp                                        | Finance and Insurance                                                    | 1102112    | BBG000BWQLY4 | 
| 523  | NASDAQ:PAGP   | Plains GP Holdings LP - Class A                        | Transportation and Warehousing                                           | 1581990    | BBG000TBYFR3 | 
| 524  | NASDAQ:PAHC   | Phibro Animal Health Corp. - Class A                   | Manufacturing                                                            | 1069899    | BBG000C31ZH2 | 
| 525  | NASDAQ:PANW   | Palo Alto Networks Inc                                 | Manufacturing                                                            | 1327567    | BBG0014GJCT9 | 
| 526  | NASDAQ:PAYX   | Paychex Inc.                                           | Professional, Scientific, and Technical Services                         | 723531     | BBG000BQSQ38 | 
| 527  | NASDAQ:PBCT   | People`s United Financial Inc                          | Finance and Insurance                                                    | 1378946    | BBG000BQT4L6 | 
| 528  | NASDAQ:PBTS   | Powerbridge Technologies Co Ltd                        | Information                                                              | 1754323    | BBG00N0D0PZ6 | 
| 529  | NASDAQ:PBYI   | Puma Biotechnology Inc                                 | Manufacturing                                                            | 1401667    | BBG0018YXYX7 | 
| 530  | NASDAQ:PCAR   | Paccar Inc.                                            | Manufacturing                                                            | 75362      | BBG000BQVTF5 | 
| 531  | NASDAQ:PCRX   | Pacira BioSciences Inc                                 | Manufacturing                                                            | 1396814    | BBG0018FQNS6 | 
| 532  | NASDAQ:PCTY   | Paylocity Holding Corp                                 | Information                                                              | 1591698    | BBG006598YS8 | 
| 533  | NASDAQ:PDCE   | PDC Energy Inc                                         | Mining, Quarrying, and Oil and Gas Extraction                            | 77877      | BBG000BR1KR2 | 
| 534  | NASDAQ:PDCO   | Patterson Companies Inc.                               | Wholesale Trade                                                          | 891024     | BBG000BQY289 | 
| 535  | NASDAQ:PDLI   | PDL Biopharma Inc                                      | Manufacturing                                                            | 882104     | BBG000CPZ0F5 | 
| 536  | NASDAQ:PENN   | Penn National Gaming, Inc.                             | Arts, Entertainment, and Recreation                                      | 921738     | BBG000CDZLV8 | 
| 537  | NASDAQ:PEP    | PepsiCo Inc                                            | Manufacturing                                                            | 77476      | BBG000DH7JK6 | 
| 538  | NASDAQ:PFBC   | Preferred Bank (Los Angeles, CA)                       | Finance and Insurance                                                    | 1492165    | BBG000BRF6K5 | 
| 539  | NASDAQ:PFG    | Principal Financial Group Inc - Registered Shares      | Finance and Insurance                                                    | 1126328    | BBG000NSCNT7 | 
| 540  | NASDAQ:PFPT   | Proofpoint Inc                                         | Information                                                              | 1212458    | BBG000RQ2GY7 | 
| 541  | NASDAQ:PGEN   | Precigen Inc                                           | Professional, Scientific, and Technical Services                         | 0001356090 | BBG000QL8VH9 | 
| 542  | NASDAQ:PHUN   | Phunware Inc                                           | Information                                                              | 1665300    | BBG00DL9GZJ3 | 
| 543  | NASDAQ:PINC   | Premier Inc - Class A                                  | Manufacturing                                                            | 1577916    | BBG000G7QX50 | 
| 544  | NASDAQ:PLAB   | Photronics, Inc.                                       | Manufacturing                                                            | 810136     | BBG000BR9JS6 | 
| 545  | NASDAQ:PLAY   | Dave & Buster`s Entertainment Inc                      | Accommodation and Food Services                                          | 1525769    | BBG001WWJTK5 | 
| 546  | NASDAQ:PLCE   | Childrens Place Inc                                    | Retail Trade                                                             | 1041859    | BBG000JK9DK4 | 
| 547  | NASDAQ:PLMR   | Palomar Holdings Inc                                   | Finance and Insurance                                                    | 1761312    | BBG00NLMRY30 | 
| 548  | NASDAQ:PLUG   | Plug Power Inc                                         | Manufacturing                                                            | 1093691    | BBG000C1XSP8 | 
| 549  | NASDAQ:PLXS   | Plexus Corp.                                           | Manufacturing                                                            | 785786     | BBG000BRBX66 | 
| 550  | NASDAQ:PNFP   | Pinnacle Financial Partners Inc.                       | Finance and Insurance                                                    | 1115055    | BBG000C1XKF6 | 
| 551  | NASDAQ:PNNT   | PennantPark Investment Corporation                     | Finance and Insurance                                                    | 1383414    | BBG000QVWX13 | 
| 552  | NASDAQ:PNTG   | Pennant Group Inc                                      | Health Care and Social Assistance                                        | 0001766400 | BBG00P33SY72 | 
| 553  | NASDAQ:PODD   | Insulet Corporation                                    | Manufacturing                                                            | 1145197    | BBG000R7XX87 | 
| 554  | NASDAQ:POOL   | Pool Corporation                                       | Wholesale Trade                                                          | 945841     | BBG000BCVG28 | 
| 555  | NASDAQ:POWI   | Power Integrations Inc.                                | Manufacturing                                                            | 833640     | BBG000BTT3D1 | 
| 556  | NASDAQ:PPBI   | Pacific Premier Bancorp, Inc.                          | Finance and Insurance                                                    | 1028918    | BBG000BNS256 | 
| 557  | NASDAQ:PPD    | PPD Inc                                                | Professional, Scientific, and Technical Services                         | 311657     | BBG005485Y51 | 
| 558  | NASDAQ:PPSI   | Pioneer Power Solutions Inc                            | Manufacturing                                                            | 1449792    | BBG000CBVB20 | 
| 559  | NASDAQ:PRAH   | PRA Health Sciences Inc                                | Professional, Scientific, and Technical Services                         | 1613859    | BBG007387YL8 | 
| 560  | NASDAQ:PRDO   | Perdoceo Education Corporation                         | Educational Services                                                     | 0001046568 | BBG000BDCQ25 | 
| 561  | NASDAQ:PRNB   | Principia Biopharma Inc.                               | Health Technology                                                        | 1510487    | BBG0026ZK3M8 | 
| 562  | NASDAQ:PSEC   | Prospect Capital Corp                                  | Finance and Insurance                                                    | 1287032    | BBG000Q3RGN4 | 
| 563  | NASDAQ:PTC    | PTC Inc                                                | Information                                                              | 857005     | BBG000C2VBB0 | 
| 564  | NASDAQ:PTCT   | PTC Therapeutics Inc                                   | Manufacturing                                                            | 1070081    | BBG000QT15P7 | 
| 565  | NASDAQ:PTEN   | Patterson-UTI Energy Inc                               | Mining, Quarrying, and Oil and Gas Extraction                            | 889900     | BBG000BKXFN7 | 
| 566  | NASDAQ:PTLA   | Portola Pharmaceuticals Inc.                           | Health Technology                                                        | 1269021    | BBG000R8RSL8 | 
| 567  | NASDAQ:PTON   | Peloton Interactive Inc - Class A                      | Manufacturing                                                            | 1639825    | BBG00JG0FFZ2 | 
| 568  | NASDAQ:PYPL   | PayPal Holdings Inc                                    | Information                                                              | 1633917    | BBG0077VNXV6 | 
| 569  | NASDAQ:PZZA   | Papa John`s International, Inc.                        | Accommodation and Food Services                                          | 901491     | BBG000BFWF13 | 
| 570  | NASDAQ:QCOM   | Qualcomm, Inc.                                         | Manufacturing                                                            | 804328     | BBG000CGC1X8 | 
| 571  | NASDAQ:QDEL   | Quidel Corp.                                           | Manufacturing                                                            | 353569     | BBG000C6GN04 | 
| 572  | NASDAQ:QRTEA  | Qurate Retail Inc - Series A                           | Retail Trade                                                             | 1355096    | BBG000PCQQL6 | 
| 573  | NASDAQ:QRVO   | Qorvo Inc                                              | Manufacturing                                                            | 1604778    | BBG007TJF1N7 | 
| 574  | NASDAQ:QURE   | uniQure N.V.                                           | Manufacturing                                                            | 1590560    | BBG005SSJYH3 | 
| 575  | NASDAQ:RAPT   | RAPT Therapeutics Inc                                  | Professional, Scientific, and Technical Services                         | 0001673772 | BBG00PGK50M2 | 
| 576  | NASDAQ:RARX   | Ra Pharmaceuticals, Inc.                               | Health Care                                                              |            | BBG0038P3DM3 | 
| 577  | NASDAQ:RCKT   | Rocket Pharmaceuticals Inc                             | Manufacturing                                                            | 1281895    | BBG000WG3567 | 
| 578  | NASDAQ:RCMT   | RCM Technologies, Inc.                                 | Professional, Scientific, and Technical Services                         | 700841     | BBG000BRYSR9 | 
| 579  | NASDAQ:RDFN   | Redfin Corp                                            | Real Estate and Rental and Leasing                                       | 1382821    | BBG001Q7HP63 | 
| 580  | NASDAQ:RDNT   | Radnet Inc                                             | Manufacturing                                                            | 790526     | BBG000CXSF54 | 
| 581  | NASDAQ:RDUS   | Radius Health Inc.                                     | Manufacturing                                                            | 1428522    | BBG001Q9P0K9 | 
| 582  | NASDAQ:RDWR   | Radware                                                | Manufacturing                                                            | 1094366    | BBG000BKWR89 | 
| 583  | NASDAQ:REGI   | Renewable Energy Group Inc                             | Manufacturing                                                            | 1463258    | BBG0016SSV00 | 
| 584  | NASDAQ:REGN   | Regeneron Pharmaceuticals, Inc.                        | Manufacturing                                                            | 872589     | BBG000C734W3 | 
| 585  | NASDAQ:RETA   | Reata Pharmaceuticals Inc - Class A                    | Manufacturing                                                            | 1358762    | BBG000R33BD1 | 
| 586  | NASDAQ:RGEN   | Repligen Corp.                                         | Manufacturing                                                            | 730272     | BBG000BS48J3 | 
| 587  | NASDAQ:RGLD   | Royal Gold, Inc.                                       | Mining, Quarrying, and Oil and Gas Extraction                            | 85535      | BBG000BS5170 | 
| 588  | NASDAQ:RIDE   | Lordstown Motors Corp. - Class A                       | Manufacturing                                                            | 1759546    | BBG00N6NL712 | 
| 589  | NASDAQ:RIGL   | Rigel Pharmaceuticals                                  | Manufacturing                                                            | 1034842    | BBG000BPWTW7 | 
| 590  | NASDAQ:RIOT   | Riot Blockchain Inc                                    | Manufacturing                                                            | 1167419    | BBG000BQ4512 | 
| 591  | NASDAQ:RMBS   | Rambus Inc.                                            | Manufacturing                                                            | 917273     | BBG000BR32C6 | 
| 592  | NASDAQ:RNST   | Renasant Corp.                                         | Finance and Insurance                                                    | 715072     | BBG000BR40B0 | 
| 593  | NASDAQ:ROKU   | Roku Inc - Class A                                     | Information                                                              | 1428439    | BBG001ZZPQJ6 | 
| 594  | NASDAQ:ROST   | Ross Stores, Inc.                                      | Retail Trade                                                             | 745732     | BBG000BSBZH7 | 
| 595  | NASDAQ:RP     | RealPage Inc.                                          | Information                                                              | 1286225    | BBG000CN5CJ3 | 
| 596  | NASDAQ:RPD    | Rapid7 Inc                                             | Information                                                              | 1560327    | BBG009DFHWG6 | 
| 597  | NASDAQ:RRGB   | Red Robin Gourmet Burgers Inc                          | Accommodation and Food Services                                          | 1171759    | BBG000MXH9C1 | 
| 598  | NASDAQ:RSLS   | ReShape Lifesciences Inc.                              | Manufacturing                                                            | 1427570    | BBG0036S6JY0 | 
| 599  | NASDAQ:RUBY   | Rubius Therapeutics Inc                                | Professional, Scientific, and Technical Services                         | 1709401    | BBG00BMBK8B4 | 
| 600  | NASDAQ:RUN    | Sunrun Inc                                             | Utilities                                                                | 1469367    | BBG0025XVR85 | 
| 601  | NASDAQ:RVMD   | Revolution Medicines Inc                               | Manufacturing                                                            | 0001628171 | BBG00829F4P8 | 
| 602  | NASDAQ:RVNC   | Revance Therapeutics Inc                               | Manufacturing                                                            | 1479290    | BBG001J2MJH8 | 
| 603  | NASDAQ:RYTM   | Rhythm Pharmaceuticals Inc.                            | Manufacturing                                                            | 1649904    | BBG007DLZ601 | 
| 604  | NASDAQ:SABR   | Sabre Corp                                             | Professional, Scientific, and Technical Services                         | 1597033    | BBG005WQVVH4 | 
| 605  | NASDAQ:SAFM   | Sanderson Farms, Inc.                                  | Manufacturing                                                            | 812128     | BBG000BSHJ96 | 
| 606  | NASDAQ:SAGE   | Sage Therapeutics Inc                                  | Manufacturing                                                            | 1597553    | BBG0025X16Y5 | 
| 607  | NASDAQ:SAIA   | Saia Inc.                                              | Transportation and Warehousing                                           | 1177702    | BBG000P5LMQ0 | 
| 608  | NASDAQ:SANM   | Sanmina Corp                                           | Manufacturing                                                            | 897723     | BBG000BHBTX7 | 
| 609  | NASDAQ:SATS   | EchoStar Corp                                          | Manufacturing                                                            | 1415404    | BBG000TGLV00 | 
| 610  | NASDAQ:SAVA   | Cassava Sciences Inc                                   | Manufacturing                                                            | 1069530    | BBG000BK9YW3 | 
| 611  | NASDAQ:SBGI   | Sinclair Broadcast Group, Inc. - Class A               | Information                                                              | 912752     | BBG000F2XXP2 | 
| 612  | NASDAQ:SBNY   | Signature Bank                                         | Finance and Insurance                                                    | 1288784    | BBG000M6TR37 | 
| 613  | NASDAQ:SBUX   | Starbucks Corp.                                        | Manufacturing                                                            | 829224     | BBG000CTQBF3 | 
| 614  | NASDAQ:SCHL   | Scholastic Corp.                                       | Information                                                              | 866729     | BBG000BSDM66 | 
| 615  | NASDAQ:SCHN   | Schnitzer Steel Industries, Inc. - Class A             | Manufacturing                                                            | 912603     | BBG000BL18V7 | 
| 616  | NASDAQ:SCKT   | Socket Mobile Inc                                      | Manufacturing                                                            | 944075     | BBG000BZMKF4 | 
| 617  | NASDAQ:SDC    | Smiledirectclub Inc - Class A                          | Manufacturing                                                            | 1775625    | BBG00PZZ94F4 | 
| 618  | NASDAQ:SDGR   | Schrodinger Inc                                        | Manufacturing                                                            | 0001490978 | BBG000T88BN2 | 
| 619  | NASDAQ:SEDG   | Solaredge Technologies Inc                             | Manufacturing                                                            | 1419612    | BBG0084BBZY6 | 
| 620  | NASDAQ:SEED   | Origin Agritech Ltd.                                   | Agriculture, Forestry, Fishing and Hunting                               | 1321851    | BBG000NBPMH5 | 
| 621  | NASDAQ:SEIC   | SEI Investments Co.                                    | Finance and Insurance                                                    | 350894     | BBG000BSQLT9 | 
| 622  | NASDAQ:SFIX   | Stitch Fix Inc - Class A                               | Retail Trade                                                             | 1576942    | BBG0046L1KL9 | 
| 623  | NASDAQ:SFM    | Sprouts Farmers Market Inc                             | Retail Trade                                                             | 0001575515 | BBG001KFKQM7 | 
| 624  | NASDAQ:SGEN   | Seagen Inc                                             | Manufacturing                                                            | 1060736    | BBG000BH0FR6 | 
| 625  | NASDAQ:SGMS   | Scientific Games Corporation                           | Consumer Services                                                        | 750004     | BBG00JR5MM31 | 
| 626  | NASDAQ:SHEN   | Shenandoah Telecommunications Co.                      | Information                                                              | 354963     | BBG000BTC2N0 | 
| 627  | NASDAQ:SHYF   | Shyft Group Inc (The)                                  | Manufacturing                                                            | 743238     | BBG000BTDHV7 | 
| 628  | NASDAQ:SIGA   | SIGA Technologies Inc                                  | Manufacturing                                                            | 1010086    | BBG000BKXWV1 | 
| 629  | NASDAQ:SIGI   | Selective Insurance Group Inc.                         | Finance and Insurance                                                    | 230557     | BBG000BSZ738 | 
| 630  | NASDAQ:SINA   | Sina Corp.                                             | Information                                                              | 1094005    | BBG000CJZ2W6 | 
| 631  | NASDAQ:SIRI   | Sirius XM Holdings Inc                                 | Information                                                              | 908937     | BBG000BT0093 | 
| 632  | NASDAQ:SITM   | SiTime Corp                                            | Manufacturing                                                            | 0001451809 | BBG00QNSY1H7 | 
| 633  | NASDAQ:SIVB   | SVB Financial Group                                    | Finance and Insurance                                                    | 719739     | BBG000BT0CM2 | 
| 634  | NASDAQ:SLAB   | Silicon Laboratories Inc                               | Manufacturing                                                            | 1038074    | BBG000BB99S3 | 
| 635  | NASDAQ:SLGG   | Super League Gaming Inc                                |                                                                          | 1621672    | BBG009XZYH65 | 
| 636  | NASDAQ:SLGN   | Silgan Holdings Inc.                                   | Manufacturing                                                            | 849869     | BBG000BPDDB6 | 
| 637  | NASDAQ:SLM    | SLM Corp.                                              | Finance and Insurance                                                    | 1032033    | BBG000BBCQD7 | 
| 638  | NASDAQ:SLS    | SELLAS Life Sciences Group Inc                         | Manufacturing                                                            | 1390478    | BBG000VC77H7 | 
| 639  | NASDAQ:SNBR   | Sleep Number Corp                                      | Manufacturing                                                            | 827187     | BBG000DM2BF3 | 
| 640  | NASDAQ:SNDL   | Sundial Growers Inc                                    | Manufacturing                                                            | 1766600    | BBG00PNJJW42 | 
| 641  | NASDAQ:SNOA   | Sonoma Pharmaceuticals Inc.                            | Manufacturing                                                            | 1367083    | BBG000M75YR0 | 
| 642  | NASDAQ:SNPS   | Synopsys, Inc.                                         | Information                                                              | 883241     | BBG000BSFRF3 | 
| 643  | NASDAQ:SOLO   | Electrameccanica Vehicles Corp                         | Manufacturing                                                            | 1637736    | BBG00DZVQMD3 | 
| 644  | NASDAQ:SONO   | Sonos Inc                                              | Manufacturing                                                            | 1314727    | BBG001JZPSQ2 | 
| 645  | NASDAQ:SPI    | SPI Energy Co Ltd                                      | Manufacturing                                                            | 1641771    | BBG00BSDYRR0 | 
| 646  | NASDAQ:SPLK   | Splunk Inc                                             | Information                                                              | 1353283    | BBG001C7TST4 | 
| 647  | NASDAQ:SPNS   | Sapiens International Corp NV                          | Information                                                              | 885740     | BBG000G3YP84 | 
| 648  | NASDAQ:SPRT   | Support.com Inc                                        | Information                                                              | 1104855    | BBG000CVSVP1 | 
| 649  | NASDAQ:SPSC   | SPS Commerce Inc.                                      | Information                                                              | 1092699    | BBG000PZGB75 | 
| 650  | NASDAQ:SPT    | Sprout Social Inc Class A                              | Information                                                              | 0001517375 | BBG001K1CT23 | 
| 651  | NASDAQ:SPWH   | Sportsman`s Warehouse Holdings Inc                     | Retail Trade                                                             | 1132105    | BBG002G8Q1H1 | 
| 652  | NASDAQ:SPWR   | Sunpower Corp                                          | Manufacturing                                                            | 867773     | BBG000FVQ185 | 
| 653  | NASDAQ:SRCE   | 1st Source Corp.                                       | Finance and Insurance                                                    | 34782      | BBG000BTH4T5 | 
| 654  | NASDAQ:SRCL   | Stericycle Inc.                                        | Utilities                                                                | 861878     | BBG000H3FZM6 | 
| 655  | NASDAQ:SRNE   | Sorrento Therapeutics Inc                              | Professional, Scientific, and Technical Services                         | 850261     | BBG000BDLWR5 | 
| 656  | NASDAQ:SRPT   | Sarepta Therapeutics Inc                               | Manufacturing                                                            | 873303     | BBG000BCJ161 | 
| 657  | NASDAQ:SRRK   | Scholar Rock Holding Corp                              | Professional, Scientific, and Technical Services                         | 1727196    | BBG00KT2RRM6 | 
| 658  | NASDAQ:SSNC   | SS&C Technologies Holdings Inc                         | Information                                                              | 1402436    | BBG000RJ2J04 | 
| 659  | NASDAQ:SSP    | E.W. Scripps Co. - Class A                             | Information                                                              | 832428     | BBG000C78J55 | 
| 660  | NASDAQ:SSYS   | Stratasys Ltd                                          | Manufacturing                                                            | 1517396    | BBG002S5ZRF9 | 
| 661  | NASDAQ:STLD   | Steel Dynamics Inc.                                    | Manufacturing                                                            | 1022671    | BBG000HGYNZ9 | 
| 662  | NASDAQ:STMP   | Stamps.com Inc.                                        | Information                                                              | 1082923    | BBG000CZ4KF3 | 
| 663  | NASDAQ:STNE   | StoneCo Ltd - Class A                                  | Information                                                              | 1745431    | BBG00M4ZQDK0 | 
| 664  | NASDAQ:STRA   | Strategic Education Inc                                | Educational Services                                                     | 1013934    | BBG000GRZDV1 | 
| 665  | NASDAQ:STX    | Seagate Technology Plc                                 | Manufacturing                                                            | 1137789    | BBG000F0KF42 | 
| 666  | NASDAQ:SUPN   | Supernus Pharmaceuticals Inc                           | Manufacturing                                                            | 1356576    | BBG000BP0HX7 | 
| 667  | NASDAQ:SVA    | Sinovac Biotech, Ltd.                                  | Manufacturing                                                            | 1084201    | BBG000D0D8P5 | 
| 668  | NASDAQ:SWBI   | Smith & Wesson Brands Inc                              | Manufacturing                                                            | 1092796    | BBG000BM0QL7 | 
| 669  | NASDAQ:SWKS   | Skyworks Solutions, Inc.                               | Manufacturing                                                            | 4127       | BBG000KLB4Q1 | 
| 670  | NASDAQ:SYBT   | Stock Yards Bancorp Inc                                | Finance and Insurance                                                    | 835324     | BBG000FLKSG5 | 
| 671  | NASDAQ:SYNA   | Synaptics Inc                                          | Professional, Scientific, and Technical Services                         | 817720     | BBG000BQV1S2 | 
| 672  | NASDAQ:SYNH   | Syneos Health Inc - Class A                            | Professional, Scientific, and Technical Services                         | 1610950    | BBG0078Y1D92 | 
| 673  | NASDAQ:TBBK   | Bancorp Inc. (The)                                     | Finance and Insurance                                                    | 1258754    | BBG000Q50XK4 | 
| 674  | NASDAQ:TBIO   | Translate Bio Inc                                      | Manufacturing                                                            | 1693415    | BBG002DVGMW1 | 
| 675  | NASDAQ:TBLT   | Toughbuilt Industries Inc                              | Manufacturing                                                            | 1668370    | BBG00LDFP150 | 
| 676  | NASDAQ:TCBI   | Texas Capital Bancshares, Inc.                         | Finance and Insurance                                                    | 1077428    | BBG000DN4ZT1 | 
| 677  | NASDAQ:TCMD   | Tactile Systems Technology Inc                         | Manufacturing                                                            | 1027838    | BBG001B12Z39 | 
| 678  | NASDAQ:TCPC   | BlackRock TCP Capital Corp                             | Finance and Insurance                                                    | 1370755    | BBG001P0TNW2 | 
| 679  | NASDAQ:TCX    | Tucows, Inc. - Class A                                 | Information                                                              | 909494     | BBG000L69KL5 | 
| 680  | NASDAQ:TEAM   | Atlassian Corporation Plc - Class A                    | Information                                                              | 1650372    | BBG00BDQ1H13 | 
| 681  | NASDAQ:TECD   | Tech Data Corporation                                  | Distribution Services                                                    | 790703     | BBG000BV2BR2 | 
| 682  | NASDAQ:TECH   | Bio-Techne Corp                                        | Manufacturing                                                            | 842023     | BBG000C15114 | 
| 683  | NASDAQ:TER    | Teradyne, Inc.                                         | Manufacturing                                                            | 97210      | BBG000BV4DR6 | 
| 684  | NASDAQ:TGTX   | TG Therapeutics Inc                                    | Manufacturing                                                            | 1001316    | BBG000FVZQY1 | 
| 685  | NASDAQ:TIGO   | Millicom International Cellular S.A.                   | Information                                                              | 0000912958 | BBG000BQBFQ5 | 
| 686  | NASDAQ:TILE   | Interface Inc.                                         | Manufacturing                                                            | 715787     | BBG000BLTV73 | 
| 687  | NASDAQ:TIVO   | TiVo Corp.                                             | Technology Services                                                      | 1675820    | BBG00D1WLVH9 | 
| 688  | NASDAQ:TLRY   | Tilray Inc - Class 2                                   | Manufacturing                                                            | 1731348    | BBG00L7XTP60 | 
| 689  | NASDAQ:TMUS   | T-Mobile US Inc                                        | Information                                                              | 1283699    | BBG000NDV1D4 | 
| 690  | NASDAQ:TNDM   | Tandem Diabetes Care Inc                               | Manufacturing                                                            | 1438133    | BBG0019V9M65 | 
| 691  | NASDAQ:TREE   | LendingTree Inc.                                       | Finance and Insurance                                                    | 1434621    | BBG000TVRB50 | 
| 692  | NASDAQ:TRIP   | TripAdvisor Inc.                                       | Administrative and Support and Waste Management and Remediation Services | 1526520    | BBG001M8HHB7 | 
| 693  | NASDAQ:TRMB   | Trimble Inc                                            | Manufacturing                                                            | 864749     | BBG000BNPS52 | 
| 694  | NASDAQ:TRMK   | Trustmark Corp.                                        | Finance and Insurance                                                    | 36146      | BBG000C3SB31 | 
| 695  | NASDAQ:TROO   | TROOPS Inc                                             | Manufacturing                                                            | 1412095    | BBG000BT5RZ0 | 
| 696  | NASDAQ:TROW   | T. Rowe Price Group Inc.                               | Finance and Insurance                                                    | 1113169    | BBG000BVMPN3 | 
| 697  | NASDAQ:TRS    | Trimas Corporation                                     | Manufacturing                                                            | 842633     | BBG000C1NCH3 | 
| 698  | NASDAQ:TRUE   | Truecar Inc                                            | Information                                                              | 1327318    | BBG001P6MYV3 | 
| 699  | NASDAQ:TRUP   | Trupanion Inc                                          | Finance and Insurance                                                    | 1371285    | BBG002BC7WC5 | 
| 700  | NASDAQ:TSCO   | Tractor Supply Co.                                     | Wholesale Trade                                                          | 916365     | BBG000BLXZN1 | 
| 701  | NASDAQ:TSG    | The Stars Group Inc.                                   | Technology                                                               |            | BBG0016WLGY4 | 
| 702  | NASDAQ:TSLA   | Tesla Inc                                              | Manufacturing                                                            | 1318605    | BBG000N9MNX3 | 
| 703  | NASDAQ:TTD    | Trade Desk Inc - Class A                               | Information                                                              | 1671933    | BBG00629NGT2 | 
| 704  | NASDAQ:TTMI   | TTM Technologies Inc                                   | Manufacturing                                                            | 1116942    | BBG000BYQ0B1 | 
| 705  | NASDAQ:TVTY   | Tivity Health Inc                                      | Health Care and Social Assistance                                        | 704415     | BBG000C1THJ4 | 
| 706  | NASDAQ:TW     | Tradeweb Markets Inc Cls A                             | Finance and Insurance                                                    | 1758730    | BBG00NK8H8T2 | 
| 707  | NASDAQ:TWOU   | 2U Inc                                                 | Information                                                              | 1459417    | BBG001KS9450 | 
| 708  | NASDAQ:TWST   | Twist Bioscience Corp                                  | Professional, Scientific, and Technical Services                         | 0001581280 | BBG006KDCHJ4 | 
| 709  | NASDAQ:TXG    | 10x Genomics Inc - Class A                             | Professional, Scientific, and Technical Services                         | 1770787    | BBG007WX14X0 | 
| 710  | NASDAQ:TXMD   | TherapeuticsMD Inc                                     | Manufacturing                                                            | 25743      | BBG000LKB954 | 
| 711  | NASDAQ:TXN    | Texas Instruments Inc.                                 | Manufacturing                                                            | 97476      | BBG000BVV7G1 | 
| 712  | NASDAQ:TZOO   | Travelzoo                                              | Professional, Scientific, and Technical Services                         | 1133311    | BBG000F7RHK8 | 
| 713  | NASDAQ:UAL    | United Airlines Holdings Inc                           | Transportation and Warehousing                                           | 100517     | BBG000M65M61 | 
| 714  | NASDAQ:UBSI   | United Bankshares, Inc.                                | Finance and Insurance                                                    | 729986     | BBG000BVXC87 | 
| 715  | NASDAQ:UCTT   | Ultra Clean Hldgs Inc                                  | Manufacturing                                                            | 1275014    | BBG000HSLV70 | 
| 716  | NASDAQ:UFCS   | United Fire Group Inc                                  | Finance and Insurance                                                    | 101199     | BBG000BVY6C4 | 
| 717  | NASDAQ:UFPI   | UFP Industries Inc                                     | Manufacturing                                                            | 912767     | BBG000BL0T06 | 
| 718  | NASDAQ:ULH    | Universal Logistics Holdings Inc                       | Transportation and Warehousing                                           | 1308208    | BBG000LGP1K8 | 
| 719  | NASDAQ:ULTA   | Ulta Beauty Inc                                        | Other Services (except Public Administration)                            | 1403568    | BBG00FWQ4VD6 | 
| 720  | NASDAQ:UONE   | Urban One Inc - Class A                                | Information                                                              | 1041657    | BBG000C2WTG5 | 
| 721  | NASDAQ:UPWK   | Upwork Inc                                             | Information                                                              | 1627475    | BBG00FBJ6390 | 
| 722  | NASDAQ:URBN   | Urban Outfitters, Inc.                                 | Retail Trade                                                             | 912615     | BBG000BL79J3 | 
| 723  | NASDAQ:UTHR   | United Therapeutics Corp                               | Manufacturing                                                            | 1082554    | BBG000BV4XJ1 | 
| 724  | NASDAQ:VC     | Visteon Corp.                                          | Manufacturing                                                            | 1111335    | BBG0016T3GQ0 | 
| 725  | NASDAQ:VCYT   | Veracyte Inc                                           | Health Care and Social Assistance                                        | 1384101    | BBG001J2M542 | 
| 726  | NASDAQ:VECO   | Veeco Instruments Inc                                  | Manufacturing                                                            | 103145     | BBG000BDCB28 | 
| 727  | NASDAQ:VERI   | Veritone Inc                                           | Information                                                              | 1615165    | BBG007NJLS39 | 
| 728  | NASDAQ:VERU   | Veru Inc                                               | Manufacturing                                                            | 863894     | BBG000G12J78 | 
| 729  | NASDAQ:VG     | Vonage Holdings Corp                                   | Information                                                              | 1272830    | BBG000BRB5D9 | 
| 730  | NASDAQ:VIAB   | Viacom Inc.                                            | Consumer Services                                                        |            | BBG000DHSPT0 | 
| 731  | NASDAQ:VIAC   | ViacomCBS Inc - Class B                                | Information                                                              | 1114529    | BBG000C496P7 | 
| 732  | NASDAQ:VIR    | Vir Biotechnology Inc                                  | Professional, Scientific, and Technical Services                         | 0001706431 | BBG00H2QQ8T5 | 
| 733  | NASDAQ:VKTX   | Viking Therapeutics Inc                                | Manufacturing                                                            | 1607678    | BBG006LGV869 | 
| 734  | NASDAQ:VLDR   | Velodyne Lidar Inc                                     | Manufacturing                                                            | 1745317    | BBG00M0X4584 | 
| 735  | NASDAQ:VLY    | Valley National Bancorp                                | Finance and Insurance                                                    | 714310     | BBG000D4YTR6 | 
| 736  | NASDAQ:VRA    | Vera Bradley Inc                                       | Manufacturing                                                            | 1495320    | BBG000R50SY9 | 
| 737  | NASDAQ:VRAY   | ViewRay Inc.                                           | Manufacturing                                                            | 0001597313 | BBG005XKG722 | 
| 738  | NASDAQ:VRNS   | Varonis Systems Inc                                    | Information                                                              | 1361113    | BBG001Y04TN6 | 
| 739  | NASDAQ:VRNT   | Verint Systems, Inc.                                   | Professional, Scientific, and Technical Services                         | 1166388    | BBG000BCBYT2 | 
| 740  | NASDAQ:VRRM   | Verra Mobility Corp - Class A                          | Information                                                              | 1682745    | BBG00G4XQ9Z1 | 
| 741  | NASDAQ:VRSK   | Verisk Analytics Inc                                   | Information                                                              | 1442145    | BBG000BCZL41 | 
| 742  | NASDAQ:VRSN   | Verisign Inc.                                          | Professional, Scientific, and Technical Services                         | 1014473    | BBG000BGKHZ3 | 
| 743  | NASDAQ:VRTX   | Vertex Pharmaceuticals, Inc.                           | Manufacturing                                                            | 875320     | BBG000C1S2X2 | 
| 744  | NASDAQ:VSEC   | VSE Corp.                                              | Professional, Scientific, and Technical Services                         | 102752     | BBG000BWJYL8 | 
| 745  | NASDAQ:VSTM   | Verastem Inc                                           | Manufacturing                                                            | 1526119    | BBG001J2LSK5 | 
| 746  | NASDAQ:VTNR   | Vertex Energy Inc                                      | Manufacturing                                                            | 890447     | BBG000BGGXH3 | 
| 747  | NASDAQ:VUZI   | Vuzix Corporation                                      | Manufacturing                                                            | 0001463972 | BBG000QKVV49 | 
| 748  | NASDAQ:VVPR   | VivoPower International PLC                            | Utilities                                                                | 1681348    | BBG00FNFTYM7 | 
| 749  | NASDAQ:VVUS   | VIVUS Inc.                                             | Health Technology                                                        | 881524     | BBG000BH8TT6 | 
| 750  | NASDAQ:WATT   | Energous Corp                                          | Manufacturing                                                            | 1575793    | BBG005XNV9D3 | 
| 751  | NASDAQ:WBA    | Walgreens Boots Alliance Inc                           | Retail Trade                                                             | 1618921    | BBG000BWLMJ4 | 
| 752  | NASDAQ:WDAY   | Workday Inc - Class A                                  | Information                                                              | 1327811    | BBG000VC0T95 | 
| 753  | NASDAQ:WDC    | Western Digital Corp.                                  | Manufacturing                                                            | 106040     | BBG000BWNFZ9 | 
| 754  | NASDAQ:WEN    | Wendy`s Co - Class A                                   | Accommodation and Food Services                                          | 30697      | BBG000D52545 | 
| 755  | NASDAQ:WERN   | Werner Enterprises, Inc.                               | Transportation and Warehousing                                           | 793074     | BBG000BWPP85 | 
| 756  | NASDAQ:WETF   | Wisdomtree Investments Inc                             | Finance and Insurance                                                    | 880631     | BBG000KLDTJ2 | 
| 757  | NASDAQ:WINA   | Winmark Corporation                                    | Retail Trade                                                             | 908315     | BBG000BQ5GY1 | 
| 758  | NASDAQ:WING   | Wingstop Inc                                           | Accommodation and Food Services                                          | 1636222    | BBG008N298Y8 | 
| 759  | NASDAQ:WIRE   | Encore Wire Corp.                                      | Wholesale Trade                                                          | 850460     | BBG000CQCCK6 | 
| 760  | NASDAQ:WIX    | Wix.com Ltd                                            | Professional, Scientific, and Technical Services                         | 1576789    | BBG005CM7J89 | 
| 761  | NASDAQ:WKHS   | Workhorse Group Inc                                    | Manufacturing                                                            | 0001425287 | BBG000BDPB15 | 
| 762  | NASDAQ:WLTW   | Willis Towers Watson Public Limited Co                 | Finance and Insurance                                                    | 1140536    | BBG000DB3KT1 | 
| 763  | NASDAQ:WMGI   | Wright Medical Group NV                                | Health Technology                                                        | 1492658    | BBG000BBXJV0 | 
| 764  | NASDAQ:WPRT   | Westport Fuel Systems Inc                              | Manufacturing                                                            | 1370416    | BBG000P9D329 | 
| 765  | NASDAQ:WSBC   | Wesbanco, Inc.                                         | Finance and Insurance                                                    | 203596     | BBG000BX0BJ9 | 
| 766  | NASDAQ:WW     | WW International Inc                                   | Other Services (except Public Administration)                            | 105319     | BBG000DY6735 | 
| 767  | NASDAQ:WWR    | Westwater Resources Inc                                | Mining, Quarrying, and Oil and Gas Extraction                            | 839470     | BBG000C04VB0 | 
| 768  | NASDAQ:WYNN   | Wynn Resorts Ltd.                                      | Arts, Entertainment, and Recreation                                      | 1174922    | BBG000LD9JQ8 | 
| 769  | NASDAQ:XEL    | Xcel Energy, Inc.                                      | Utilities                                                                | 72903      | BBG000BCTQ65 | 
| 770  | NASDAQ:XELA   | Exela Technologies Inc                                 | Information                                                              | 1620179    | BBG008839HK8 | 
| 771  | NASDAQ:XENE   | Xenon Pharmaceuticals Inc                              | Manufacturing                                                            | 1582313    | BBG0073DM784 | 
| 772  | NASDAQ:XENT   | Intersect ENT Inc                                      | Manufacturing                                                            | 1271214    | BBG001J41G83 | 
| 773  | NASDAQ:XLNX   | Xilinx, Inc.                                           | Manufacturing                                                            | 743988     | BBG000C0F570 | 
| 774  | NASDAQ:XLRN   | Acceleron Pharma Inc                                   | Manufacturing                                                            | 1280600    | BBG000R5HWZ1 | 
| 775  | NASDAQ:XONE   | ExOne Co                                               | Manufacturing                                                            | 1561627    | BBG003T67W19 | 
| 776  | NASDAQ:XP     | XP Inc - Class A                                       | Finance and Insurance                                                    | 0001787425 | BBG00QVJYGM9 | 
| 777  | NASDAQ:XPER   | Xperi Holding Corp                                     | Manufacturing                                                            | 1690666    | BBG00F2YLPY3 | 
| 778  | NASDAQ:XRAY   | DENTSPLY Sirona Inc                                    | Manufacturing                                                            | 818479     | BBG000BX57K1 | 
| 779  | NASDAQ:YELL   | Yellow Corporation                                     | Transportation and Warehousing                                           | 716006     | BBG000BX6PW7 | 
| 780  | NASDAQ:YNDX   | Yandex NV - Class A                                    | Information                                                              | 1513845    | BBG001NVJ6W4 | 
| 781  | NASDAQ:Z      | Zillow Group Inc - Class C                             | Information                                                              | 1617640    | BBG009NRSWJ4 | 
| 782  | NASDAQ:ZBRA   | Zebra Technologies Corp. - Class A                     | Manufacturing                                                            | 877212     | BBG000CC7LQ7 | 
| 783  | NASDAQ:ZD     | Ziff Davis Inc                                         | Information                                                              | 1084048    | BBG000F3CWW7 | 
| 784  | NASDAQ:ZG     | Zillow Group Inc - Class A                             | Information                                                              | 1617640    | BBG000D13GN8 | 
| 785  | NASDAQ:ZM     | Zoom Video Communications Inc - Class A                | Information                                                              | 1585521    | BBG0042V6JM8 | 
| 786  | NASDAQ:ZNGA   | Zynga Inc - Class A                                    | Information                                                              | 1439404    | BBG000VD6768 | 
| 787  | NASDAQ:ZS     | Zscaler Inc                                            | Information                                                              | 1713683    | BBG003338H34 | 
| 788  | NASDAQ:ZVO    | Zovio Inc                                              | Educational Services                                                     | 1305323    | BBG000C3CQP1 | 
| 789  | NYSE:A        | Agilent Technologies Inc.                              | Professional, Scientific, and Technical Services                         | 1090872    | BBG000C2V3D6 | 
| 790  | NYSE:AA       | Alcoa Corp                                             | Manufacturing                                                            | 1675149    | BBG00B3T3HD3 | 
| 791  | NYSE:AAP      | Advance Auto Parts Inc                                 | Retail Trade                                                             | 1158449    | BBG000F7RCJ1 | 
| 792  | NYSE:ABBV     | Abbvie Inc                                             | Manufacturing                                                            | 1551152    | BBG0025Y4RY4 | 
| 793  | NYSE:ABC      | Amerisource Bergen Corp.                               | Wholesale Trade                                                          | 1140859    | BBG000MDCQC2 | 
| 794  | NYSE:ABT      | Abbott Laboratories                                    | Manufacturing                                                            | 1800       | BBG000B9ZXB4 | 
| 795  | NYSE:ACM      | AECOM                                                  | Professional, Scientific, and Technical Services                         | 868857     | BBG000F61RJ8 | 
| 796  | NYSE:ACN      | Accenture plc - Class A                                | Information                                                              | 1467373    | BBG000D9D830 | 
| 797  | NYSE:ADM      | Archer Daniels Midland Co.                             | Manufacturing                                                            | 7084       | BBG000BB6WG8 | 
| 798  | NYSE:ADNT     | Adient plc                                             | Manufacturing                                                            | 1670541    | BBG009PN0C87 | 
| 799  | NYSE:ADS      | Alliance Data System                                   | Information                                                              | 1101215    | BBG000BFNR17 | 
| 800  | NYSE:ADT      | ADT Inc                                                | Administrative and Support and Waste Management and Remediation Services | 1703056    | BBG000BP9WJ1 | 
| 801  | NYSE:AEE      | Ameren Corp.                                           | Utilities                                                                | 1002910    | BBG000B9X8C0 | 
| 802  | NYSE:AEM      | Agnico Eagle Mines Ltd                                 | Mining, Quarrying, and Oil and Gas Extraction                            | 2809       | BBG000DLVDK3 | 
| 803  | NYSE:AEO      | American Eagle Outfitters Inc.                         | Retail Trade                                                             | 919012     | BBG000BGXZB5 | 
| 804  | NYSE:AER      | Aercap Holdings N.V.                                   | Real Estate and Rental and Leasing                                       | 1378789    | BBG000Q9FZL4 | 
| 805  | NYSE:AES      | AES Corp.                                              | Utilities                                                                | 874761     | BBG000C23KJ3 | 
| 806  | NYSE:AFL      | Aflac Inc.                                             | Finance and Insurance                                                    | 4977       | BBG000BBBNC6 | 
| 807  | NYSE:AG       | First Majestic Silver Corporation                      | Mining, Quarrying, and Oil and Gas Extraction                            | 1308648    | BBG000CH7WB8 | 
| 808  | NYSE:AGCO     | AGCO Corp.                                             | Manufacturing                                                            | 880266     | BBG000DCCZW2 | 
| 809  | NYSE:AGN      | Allergan plc.                                          | Health Care                                                              |            | BBG000FH8PX5 | 
| 810  | NYSE:AGO      | Assured Guaranty Ltd                                   | Finance and Insurance                                                    | 1273813    | BBG000CQB185 | 
| 811  | NYSE:AIG      | American International Group Inc                       | Finance and Insurance                                                    | 5272       | BBG000BBDZG3 | 
| 812  | NYSE:AIZ      | Assurant Inc                                           | Finance and Insurance                                                    | 1267238    | BBG000BZX1N5 | 
| 813  | NYSE:AJG      | Arthur J. Gallagher & Co.                              | Finance and Insurance                                                    | 354190     | BBG000BBHXQ3 | 
| 814  | NYSE:AKS      | AK Steel Holding Corporation                           | Basic Industries                                                         |            | BBG000BL8GJ6 | 
| 815  | NYSE:ALB      | Albemarle Corp.                                        | Manufacturing                                                            | 915913     | BBG000BJ26K7 | 
| 816  | NYSE:ALC      | Alcon Inc. - Registered Shares                         | Health Technology                                                        | 1167379    | BBG00NPWH832 | 
| 817  | NYSE:ALK      | Alaska Air Group Inc.                                  | Transportation and Warehousing                                           | 766421     | BBG000BBL0Y1 | 
| 818  | NYSE:ALL      | Allstate Corp (The)                                    | Finance and Insurance                                                    | 899051     | BBG000BVMGF2 | 
| 819  | NYSE:ALLE     | Allegion plc                                           | Administrative and Support and Waste Management and Remediation Services | 1579241    | BBG003PS7JV1 | 
| 820  | NYSE:ALLY     | Ally Financial Inc                                     | Finance and Insurance                                                    | 40729      | BBG000BC2R71 | 
| 821  | NYSE:ALSN     | Allison Transmission Holdings Inc                      | Manufacturing                                                            | 1411207    | BBG001KY3845 | 
| 822  | NYSE:ALV      | Autoliv Inc.                                           | Manufacturing                                                            | 1034670    | BBG000BVLRY8 | 
| 823  | NYSE:AMC      | AMC Entertainment Holdings Inc - Class A               | Information                                                              | 1411579    | BBG000TDCVT6 | 
| 824  | NYSE:AMCR     | Amcor Plc                                              |                                                                          | 1748790    | BBG00LNJRQ09 | 
| 825  | NYSE:AME      | Ametek Inc                                             | Manufacturing                                                            | 1037868    | BBG000B9XG87 | 
| 826  | NYSE:AMG      | Affiliated Managers Group Inc.                         | Finance and Insurance                                                    | 1004434    | BBG000C060M4 | 
| 827  | NYSE:AMP      | Ameriprise Financial Inc                               | Finance and Insurance                                                    | 820027     | BBG000G3QLY3 | 
| 828  | NYSE:AN       | Autonation Inc.                                        | Retail Trade                                                             | 350698     | BBG000BBXLW4 | 
| 829  | NYSE:ANET     | Arista Networks Inc                                    | Professional, Scientific, and Technical Services                         | 1596532    | BBG000N2HDY5 | 
| 830  | NYSE:ANF      | Abercrombie & Fitch Co. - Class A                      | Retail Trade                                                             | 1018840    | BBG000H9G7X2 | 
| 831  | NYSE:ANTM     | Anthem Inc                                             | Finance and Insurance                                                    | 1156039    | BBG000BCG930 | 
| 832  | NYSE:AON      | Aon plc. - Class A                                     | Finance and Insurance                                                    | 315293     | BBG00SSQFPK6 | 
| 833  | NYSE:AON~1    | Aon plc                                                | Finance                                                                  |            | BBG000BC15S7 | 
| 834  | NYSE:AOS      | A.O. Smith Corp.                                       | Manufacturing                                                            | 91142      | BBG000BC1L02 | 
| 835  | NYSE:APD      | Air Products & Chemicals Inc.                          | Manufacturing                                                            | 2969       | BBG000BC4JJ4 | 
| 836  | NYSE:APH      | Amphenol Corp. - Class A                               | Manufacturing                                                            | 820313     | BBG000B9YJ35 | 
| 837  | NYSE:APO      | Apollo Global Management Inc - Class A                 | Finance and Insurance                                                    | 1411494    | BBG001LRKS55 | 
| 838  | NYSE:APTV     | Aptiv PLC                                              | Manufacturing                                                            | 1521332    | BBG001QD41M9 | 
| 839  | NYSE:AR       | Antero Resources Corp                                  | Mining, Quarrying, and Oil and Gas Extraction                            | 1433270    | BBG000PW5VX1 | 
| 840  | NYSE:ARCH     | Arch Resources Inc - Class A                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1037676    | BBG00DZB5D77 | 
| 841  | NYSE:ARCO     | Arcos Dorados Holdings Inc - Class A                   | Accommodation and Food Services                                          | 1508478    | BBG001LR99L2 | 
| 842  | NYSE:ARMK     | Aramark                                                | Accommodation and Food Services                                          | 1584509    | BBG001KY4N87 | 
| 843  | NYSE:AROC     | Archrock Inc                                           | Transportation and Warehousing                                           | 1389050    | BBG000RWH1V4 | 
| 844  | NYSE:ARW      | Arrow Electronics Inc.                                 | Wholesale Trade                                                          | 7536       | BBG000BCD3D5 | 
| 845  | NYSE:ASB      | Associated Banc-Corp.                                  | Finance and Insurance                                                    | 7789       | BBG000BCFQC3 | 
| 846  | NYSE:ASGN     | ASGN Inc                                               | Administrative and Support and Waste Management and Remediation Services | 890564     | BBG000CRN8N8 | 
| 847  | NYSE:ASH      | Ashland Global Holdings Inc                            | Manufacturing                                                            | 1674862    | BBG00D0Y81M1 | 
| 848  | NYSE:ATGE     | Adtalem Global Education Inc                           | Educational Services                                                     | 730464     | BBG000DQBZJ7 | 
| 849  | NYSE:ATH      | Athene Holding Ltd - Class A                           | Finance and Insurance                                                    | 1527469    | BBG00CW2JCN1 | 
| 850  | NYSE:ATI      | Allegheny Technologies Inc                             | Manufacturing                                                            | 1018963    | BBG000LC1FS4 | 
| 851  | NYSE:ATO      | Atmos Energy Corp.                                     | Utilities                                                                | 731802     | BBG000BRNGM2 | 
| 852  | NYSE:ATUS     | Altice USA Inc - Class A                               | Information                                                              | 1702780    | BBG00GFMPRK0 | 
| 853  | NYSE:AUD      | Audacy Inc - Class A                                   | Information                                                              | 1067837    | BBG000C55NZ0 | 
| 854  | NYSE:AUY      | Yamana Gold Inc.                                       | Mining, Quarrying, and Oil and Gas Extraction                            | 1264089    | BBG000NSQ9M0 | 
| 855  | NYSE:AVLR     | Avalara Inc                                            | Information                                                              | 1348036    | BBG000R4Y9C1 | 
| 856  | NYSE:AVNS     | Avanos Medical Inc                                     | Manufacturing                                                            | 1606498    | BBG005L86G05 | 
| 857  | NYSE:AVP      | Avon Products, Inc.                                    | Consumer Non-Durables                                                    |            | BBG000BCNYT9 | 
| 858  | NYSE:AVTR     | Avantor Inc.                                           | Manufacturing                                                            | 1722482    | BBG00G2HHYD7 | 
| 859  | NYSE:AVY      | Avery Dennison Corp.                                   | Manufacturing                                                            | 8818       | BBG000BCQ4P6 | 
| 860  | NYSE:AWK      | American Water Works Co. Inc.                          | Utilities                                                                | 1410636    | BBG000TRJ294 | 
| 861  | NYSE:AWR      | American States Water Co.                              | Utilities                                                                | 1056903    | BBG000F964B6 | 
| 862  | NYSE:AX       | Axos Financial Inc.                                    | Finance and Insurance                                                    | 1299709    | BBG000QPHD08 | 
| 863  | NYSE:AXE      | Anixter International Inc.                             | Distribution Services                                                    | 52795      | BBG000DPW6P3 | 
| 864  | NYSE:AXL      | American Axle & Manufacturing Holdings Inc             | Manufacturing                                                            | 1062231    | BBG000BPYZV2 | 
| 865  | NYSE:AXP      | American Express Co.                                   | Finance and Insurance                                                    | 4962       | BBG000BCQZS4 | 
| 866  | NYSE:AXR      | AMREP Corp.                                            | Transportation and Warehousing                                           | 6207       | BBG000BCRB60 | 
| 867  | NYSE:AXS      | Axis Capital Holdings Ltd                              | Finance and Insurance                                                    | 1214816    | BBG000FLF615 | 
| 868  | NYSE:AXTA     | Axalta Coating Systems Ltd                             | Manufacturing                                                            | 1616862    | BBG0060CPLJ5 | 
| 869  | NYSE:AYI      | Acuity Brands, Inc.                                    | Manufacturing                                                            | 1144215    | BBG000BJ5HK0 | 
| 870  | NYSE:AYX      | Alteryx Inc - Class A                                  | Information                                                              | 1689923    | BBG000BGZT72 | 
| 871  | NYSE:AZO      | Autozone Inc.                                          | Retail Trade                                                             | 866787     | BBG000C7LMS8 | 
| 872  | NYSE:BA       | Boeing Co.                                             | Manufacturing                                                            | 12927      | BBG000BCSST7 | 
| 873  | NYSE:BAC      | Bank Of America Corp.                                  | Finance and Insurance                                                    | 70858      | BBG000BCTLF6 | 
| 874  | NYSE:BAH      | Booz Allen Hamilton Holding Corp - Class A             | Professional, Scientific, and Technical Services                         | 1443646    | BBG000R2YFG7 | 
| 875  | NYSE:BAM      | Brookfield Asset Management Inc. - Class A             | Finance and Insurance                                                    | 1001085    | BBG000C9KL89 | 
| 876  | NYSE:BAP      | Credicorp Ltd                                          | Finance and Insurance                                                    | 1001290    | BBG000FKX7Z8 | 
| 877  | NYSE:BAX      | Baxter International Inc.                              | Manufacturing                                                            | 10456      | BBG000BCVJ77 | 
| 878  | NYSE:BB       | BlackBerry Ltd                                         | Manufacturing                                                            | 1070235    | BBG000CR90K4 | 
| 879  | NYSE:BBDC     | Barings BDC Inc                                        | Finance and Insurance                                                    | 1379785    | BBG000F54FK1 | 
| 880  | NYSE:BBW      | Build A Bear Workshop Inc                              | Retail Trade                                                             | 0001113809 | BBG000H8XPS1 | 
| 881  | NYSE:BBY      | Best Buy Co. Inc.                                      | Retail Trade                                                             | 764478     | BBG000BCWCG1 | 
| 882  | NYSE:BC       | Brunswick Corp.                                        | Manufacturing                                                            | 14930      | BBG000BCWSS3 | 
| 883  | NYSE:BCC      | Boise Cascade Co                                       | Wholesale Trade                                                          | 1328581    | BBG000RQKCR4 | 
| 884  | NYSE:BCE      | BCE Inc                                                | Information                                                              | 718940     | BBG000BCXNS3 | 
| 885  | NYSE:BCO      | Brink`s Co.                                            | Administrative and Support and Waste Management and Remediation Services | 78890      | BBG000DR5QP5 | 
| 886  | NYSE:BDX      | Becton, Dickinson And Co.                              | Manufacturing                                                            | 10795      | BBG000BCZYD3 | 
| 887  | NYSE:BE       | Bloom Energy Corp - Class A                            | Manufacturing                                                            | 1664703    | BBG000N7KBZ3 | 
| 888  | NYSE:BEN      | Franklin Resources, Inc.                               | Finance and Insurance                                                    | 38777      | BBG000BD0TF8 | 
| 889  | NYSE:BERY     | Berry Global Group Inc                                 | Manufacturing                                                            | 1378992    | BBG000Q1R1Y9 | 
| 890  | NYSE:BG       | Bunge Ltd.                                             | Manufacturing                                                            | 1144519    | BBG000DGPR66 | 
| 891  | NYSE:BHC      | Bausch Health Companies Inc                            | Manufacturing                                                            | 885590     | BBG000DLFM21 | 
| 892  | NYSE:BHLB     | Berkshire Hills Bancorp Inc.                           | Finance and Insurance                                                    | 1108134    | BBG000BB00D7 | 
| 893  | NYSE:BID      | Sotheby&#39;s                                          | Miscellaneous                                                            |            | BBG000BD6GP9 | 
| 894  | NYSE:BIG      | Big Lots Inc                                           | Retail Trade                                                             | 768835     | BBG000J0D904 | 
| 895  | NYSE:BILL     | Bill.com Holdings Inc                                  | Manufacturing                                                            | 0001786352 | BBG00QVJV6V4 | 
| 896  | NYSE:BIO      | Bio-Rad Laboratories Inc. - Class A                    | Manufacturing                                                            | 12208      | BBG000DY28W5 | 
| 897  | NYSE:BJ       | BJ`s Wholesale Club Holdings Inc                       | Retail Trade                                                             | 1531152    | BBG00FQ8T4G3 | 
| 898  | NYSE:BK       | Bank Of New York Mellon Corp                           | Finance and Insurance                                                    | 1390777    | BBG000BD8PN9 | 
| 899  | NYSE:BKD      | Brookdale Senior Living Inc                            | Health Care and Social Assistance                                        | 1332349    | BBG000J4L211 | 
| 900  | NYSE:BKE      | Buckle, Inc.                                           | Retail Trade                                                             | 885245     | BBG000BD9525 | 
| 901  | NYSE:BKI      | Black Knight Inc - Class A                             | Information                                                              | 1627014    | BBG00GX77LW3 | 
| 902  | NYSE:BKR      | Baker Hughes Co - Class A                              | Manufacturing                                                            | 9263       | BBG00GBVBK51 | 
| 903  | NYSE:BLDR     | Builders Firstsource Inc                               | Manufacturing                                                            | 1316835    | BBG000BKD3K9 | 
| 904  | NYSE:BLK      | Blackrock Inc.                                         | Finance and Insurance                                                    | 1364742    | BBG000C2PW58 | 
| 905  | NYSE:BLL      | Ball Corp.                                             | Manufacturing                                                            | 9389       | BBG000BDDNH5 | 
| 906  | NYSE:BMO      | Bank of Montreal                                       | Finance and Insurance                                                    | 927971     | BBG000DLY9B9 | 
| 907  | NYSE:BMY      | Bristol-Myers Squibb Co.                               | Manufacturing                                                            | 14272      | BBG000DQLV23 | 
| 908  | NYSE:BOX      | Box Inc - Class A                                      | Information                                                              | 1372612    | BBG000PMSK08 | 
| 909  | NYSE:BR       | Broadridge Financial Solutions, Inc.                   | Information                                                              | 1383312    | BBG000PPFKQ7 | 
| 910  | NYSE:BRO      | Brown & Brown, Inc.                                    | Finance and Insurance                                                    | 79282      | BBG000BWSGF4 | 
| 911  | NYSE:BSX      | Boston Scientific Corp.                                | Manufacturing                                                            | 885725     | BBG000C0LW92 | 
| 912  | NYSE:BTU      | Peabody Energy Corp. New                               | Mining, Quarrying, and Oil and Gas Extraction                            | 1064728    | BBG00GBV88T6 | 
| 913  | NYSE:BURL     | Burlington Stores Inc                                  | Retail Trade                                                             | 1579298    | BBG004S641N5 | 
| 914  | NYSE:BWA      | BorgWarner Inc                                         | Manufacturing                                                            | 908255     | BBG000BJ49H3 | 
| 915  | NYSE:BWXT     | BWX Technologies Inc                                   | Professional, Scientific, and Technical Services                         | 1486957    | BBG000D86F25 | 
| 916  | NYSE:BX       | Blackstone Inc                                         | Finance and Insurance                                                    | 1393818    | BBG000BH0106 | 
| 917  | NYSE:BYD      | Boyd Gaming Corp.                                      | Arts, Entertainment, and Recreation                                      | 906553     | BBG000BHX9P6 | 
| 918  | NYSE:BZH      | Beazer Homes USA Inc.                                  | Construction                                                             | 915840     | BBG000BDLQJ7 | 
| 919  | NYSE:C        | Citigroup Inc                                          | Finance and Insurance                                                    | 831001     | BBG000FY4S11 | 
| 920  | NYSE:CABO     | Cable One Inc                                          | Information                                                              | 1632127    | BBG000F02T51 | 
| 921  | NYSE:CACI     | Caci International Inc. - Registered Shares - Class A  | Professional, Scientific, and Technical Services                         | 16058      | BBG000KQY8Y7 | 
| 922  | NYSE:CAG      | Conagra Brands Inc                                     | Manufacturing                                                            | 23217      | BBG000BDXGP9 | 
| 923  | NYSE:CAH      | Cardinal Health, Inc.                                  | Wholesale Trade                                                          | 721371     | BBG000D898T9 | 
| 924  | NYSE:CARR     | Carrier Global Corp                                    | Manufacturing                                                            | 0001783180 | BBG00RP5HYS8 | 
| 925  | NYSE:CARS     | Cars.com                                               | Information                                                              | 1683606    | BBG000HGTH33 | 
| 926  | NYSE:CAT      | Caterpillar Inc.                                       | Manufacturing                                                            | 18230      | BBG000BF0K17 | 
| 927  | NYSE:CB       | Chubb Limited                                          | Finance and Insurance                                                    | 896159     | BBG000BR14K5 | 
| 928  | NYSE:CBRE     | CBRE Group Inc - Class A                               | Real Estate and Rental and Leasing                                       | 1138118    | BBG000C04224 | 
| 929  | NYSE:CC       | Chemours Company                                       | Manufacturing                                                            | 1627223    | BBG005H82GB2 | 
| 930  | NYSE:CCJ      | Cameco Corp.                                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1009001    | BBG000DSZTN6 | 
| 931  | NYSE:CCK      | Crown Holdings, Inc.                                   | Manufacturing                                                            | 1219601    | BBG000BF6756 | 
| 932  | NYSE:CCL      | Carnival Corp. (Paired Stock)                          | Administrative and Support and Waste Management and Remediation Services | 815097     | BBG000BF6LY3 | 
| 933  | NYSE:CCS      | Century Communities Inc                                | Construction                                                             | 1576940    | BBG006G412Q6 | 
| 934  | NYSE:CDAY     | Ceridian HCM Holding Inc.                              | Professional, Scientific, and Technical Services                         | 1725057    | BBG005D7PF34 | 
| 935  | NYSE:CDE      | Coeur Mining Inc                                       | Mining, Quarrying, and Oil and Gas Extraction                            | 215466     | BBG000BF8TF5 | 
| 936  | NYSE:CE       | Celanese Corp - Series A                               | Manufacturing                                                            | 1306830    | BBG000JYP7L8 | 
| 937  | NYSE:CF       | CF Industries Holdings Inc                             | Manufacturing                                                            | 1324404    | BBG000BWJFZ4 | 
| 938  | NYSE:CFG      | Citizens Financial Group Inc                           | Finance and Insurance                                                    | 759944     | BBG006Q0HY77 | 
| 939  | NYSE:CFR      | Cullen Frost Bankers Inc.                              | Finance and Insurance                                                    | 39263      | BBG000C2PL98 | 
| 940  | NYSE:CHD      | Church & Dwight Co., Inc.                              | Manufacturing                                                            | 313927     | BBG000BFJT36 | 
| 941  | NYSE:CHE      | Chemed Corp.                                           | Health Care and Social Assistance                                        | 19584      | BBG000C19QW1 | 
| 942  | NYSE:CHGG     | Chegg Inc                                              | Educational Services                                                     | 1364954    | BBG0014XR0N5 | 
| 943  | NYSE:CHH      | Choice Hotels International, Inc.                      | Administrative and Support and Waste Management and Remediation Services | 1046311    | BBG000BPBTL2 | 
| 944  | NYSE:CHK      | Chesapeake Energy Corporation                          | Energy Minerals                                                          | 895126     | BBG000BL4504 | 
| 945  | NYSE:CHPT     | ChargePoint Holdings Inc - Class A                     | Manufacturing                                                            | 1777393    | BBG00Q741Z16 | 
| 946  | NYSE:CHS      | Chico`s Fas, Inc.                                      | Retail Trade                                                             | 897429     | BBG000BLVBC8 | 
| 947  | NYSE:CHWY     | Chewy Inc - Class A                                    | Retail Trade                                                             | 1766502    | BBG00P19DKZ6 | 
| 948  | NYSE:CI       | Cigna Corp.                                            | Finance and Insurance                                                    | 1739940    | BBG00KXRCDP0 | 
| 949  | NYSE:CIEN     | CIENA Corp.                                            | Manufacturing                                                            | 936395     | BBG000BP1152 | 
| 950  | NYSE:CIT      | CIT Group Inc                                          | Finance and Insurance                                                    | 1171825    | BBG000Q0BPZ4 | 
| 951  | NYSE:CIVI     | Civitas Resources Inc New                              | Mining, Quarrying, and Oil and Gas Extraction                            | 1509589    | BBG00GLNJ018 | 
| 952  | NYSE:CL       | Colgate-Palmolive Co.                                  | Manufacturing                                                            | 21665      | BBG000BFQYY3 | 
| 953  | NYSE:CLB      | Core Laboratories N.V.                                 | Mining, Quarrying, and Oil and Gas Extraction                            | 1000229    | BBG000JKCWS0 | 
| 954  | NYSE:CLDR     | Cloudera Inc                                           | Information                                                              | 1535379    | BBG000DRJFC8 | 
| 955  | NYSE:CLF      | Cleveland-Cliffs Inc                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 764065     | BBG000BFRF55 | 
| 956  | NYSE:CLGX     | CoreLogic Inc                                          | Information                                                              | 36047      | BBG000C2H3F0 | 
| 957  | NYSE:CLH      | Clean Harbors, Inc.                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 822818     | BBG000BFRRX8 | 
| 958  | NYSE:CLR      | Continental Resources Inc (OKLA)                       | Mining, Quarrying, and Oil and Gas Extraction                            | 732834     | BBG000BHBGN6 | 
| 959  | NYSE:CLVT     | Clarivate Plc                                          | Information                                                              | 1764046    | BBG00P1919G5 | 
| 960  | NYSE:CLX      | Clorox Co.                                             | Manufacturing                                                            | 21076      | BBG000BFS7D3 | 
| 961  | NYSE:CM       | Canadian Imperial Bank Of Commerce                     | Finance and Insurance                                                    | 1045520    | BBG000FKTHQ1 | 
| 962  | NYSE:CMA      | Comerica, Inc.                                         | Finance and Insurance                                                    | 28412      | BBG000C75N77 | 
| 963  | NYSE:CMC      | Commercial Metals Co.                                  | Manufacturing                                                            | 22444      | BBG000BFSND8 | 
| 964  | NYSE:CMG      | Chipotle Mexican Grill                                 | Accommodation and Food Services                                          | 1058090    | BBG000QX74T1 | 
| 965  | NYSE:CMI      | Cummins Inc.                                           | Manufacturing                                                            | 26172      | BBG000BGPTV6 | 
| 966  | NYSE:CMP      | Compass Minerals International Inc                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1227654    | BBG000C42WS4 | 
| 967  | NYSE:CMS      | CMS Energy Corporation                                 | Utilities                                                                | 811156     | BBG000BFVXX0 | 
| 968  | NYSE:CNC      | Centene Corp.                                          | Finance and Insurance                                                    | 1071739    | BBG000BDXCJ5 | 
| 969  | NYSE:CNK      | Cinemark Holdings Inc                                  | Information                                                              | 1385280    | BBG000QDVR53 | 
| 970  | NYSE:CNO      | CNO Financial Group Inc                                | Finance and Insurance                                                    | 1224608    | BBG000Q1GK24 | 
| 971  | NYSE:CNP      | Centerpoint Energy Inc.                                | Utilities                                                                | 1130310    | BBG000FDBX90 | 
| 972  | NYSE:CNQ      | Canadian Natural Resources Ltd.                        | Mining, Quarrying, and Oil and Gas Extraction                            | 1017413    | BBG000HW5GX3 | 
| 973  | NYSE:CNS      | Cohen & Steers Inc.                                    | Finance and Insurance                                                    | 1284812    | BBG000BB0WG4 | 
| 974  | NYSE:CNX      | CNX Resources Corp                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1070412    | BBG000CKVSG8 | 
| 975  | NYSE:COF      | Capital One Financial Corp.                            | Finance and Insurance                                                    | 927628     | BBG000BGKTF9 | 
| 976  | NYSE:COO      | Cooper Companies, Inc.                                 | Manufacturing                                                            | 711404     | BBG000BG3445 | 
| 977  | NYSE:COP      | Conoco Phillips                                        | Manufacturing                                                            | 1163165    | BBG000BQQH30 | 
| 978  | NYSE:COTY     | Coty Inc - Class A                                     | Manufacturing                                                            | 1024305    | BBG000F395V1 | 
| 979  | NYSE:CP       | Canadian Pacific Railway Ltd                           | Transportation and Warehousing                                           | 16875      | BBG000BCVMH9 | 
| 980  | NYSE:CPA      | Copa Holdings S.A. - Class A                           | Transportation and Warehousing                                           | 1345105    | BBG000C29813 | 
| 981  | NYSE:CPB      | Campbell Soup Co.                                      | Manufacturing                                                            | 16732      | BBG000BG4202 | 
| 982  | NYSE:CPE      | Callon Petroleum Co.                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 928022     | BBG000JSTBB9 | 
| 983  | NYSE:CPRI     | Capri Holdings Ltd                                     | Manufacturing                                                            | 1530721    | BBG0029SNR63 | 
| 984  | NYSE:CRI      | Carters Inc                                            | Retail Trade                                                             | 1060822    | BBG000CTM4J9 | 
| 985  | NYSE:CRK      | Comstock Resources, Inc.                               | Mining, Quarrying, and Oil and Gas Extraction                            | 23194      | BBG000DNBK89 | 
| 986  | NYSE:CRL      | Charles River Laboratories International Inc.          | Professional, Scientific, and Technical Services                         | 1100682    | BBG000BG5BL8 | 
| 987  | NYSE:CRM      | Salesforce.Com Inc                                     | Information                                                              | 1108524    | BBG000BN2DC2 | 
| 988  | NYSE:CRR      | Carbo Ceramics, Inc.                                   | Capital Goods                                                            |            | BBG000M1WLY3 | 
| 989  | NYSE:CRS      | Carpenter Technology Corp.                             | Manufacturing                                                            | 17843      | BBG000BGCQT9 | 
| 990  | NYSE:CTB      | Cooper Tire & Rubber Co.                               | Manufacturing                                                            | 24491      | BBG000BGKXV2 | 
| 991  | NYSE:CTLT     | Catalent Inc.                                          | Manufacturing                                                            | 1596783    | BBG005XR47P5 | 
| 992  | NYSE:CTRA     | Coterra Energy Inc                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 858470     | BBG000C3GN47 | 
| 993  | NYSE:CTVA     | Corteva Inc                                            | Manufacturing                                                            | 1755672    | BBG00BN969C1 | 
| 994  | NYSE:CUBI     | Customers Bancorp Inc                                  | Finance and Insurance                                                    | 1488813    | BBG0023XX761 | 
| 995  | NYSE:CVE      | Cenovus Energy Inc                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1475260    | BBG000PSJP22 | 
| 996  | NYSE:CVI      | CVR Energy Inc                                         | Manufacturing                                                            | 1376139    | BBG000QHV8S1 | 
| 997  | NYSE:CVNA     | Carvana Co. - Class A                                  | Retail Trade                                                             | 1690820    | BBG00GCTWDJ3 | 
| 998  | NYSE:CVS      | CVS Health Corp                                        | Retail Trade                                                             | 64803      | BBG000BGRY34 | 
| 999  | NYSE:CVX      | Chevron Corp.                                          | Manufacturing                                                            | 93410      | BBG000K4ND22 | 
| 1000 | NYSE:CWH      | Camping World Holdings Inc - Class A                   | Retail Trade                                                             | 1669779    | BBG00D2Z7X83 | 
| 1001 | NYSE:CWK      | Cushman & Wakefield plc                                | Real Estate and Rental and Leasing                                       | 1628369    | BBG00L7XVND4 | 
| 1002 | NYSE:CXO      | Concho Resources Inc                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 1358071    | BBG000R7RDB4 | 
| 1003 | NYSE:CYH      | Community Health Systems, Inc.                         | Health Care and Social Assistance                                        | 1108109    | BBG000BDY3Y7 | 
| 1004 | NYSE:D        | Dominion Energy Inc                                    | Utilities                                                                | 715957     | BBG000BGVW60 | 
| 1005 | NYSE:DAL      | Delta Air Lines, Inc.                                  | Transportation and Warehousing                                           | 27904      | BBG000R7Z112 | 
| 1006 | NYSE:DAN      | Dana Inc                                               | Manufacturing                                                            | 26780      | BBG000TCD088 | 
| 1007 | NYSE:DAR      | Darling Ingredients Inc                                | Manufacturing                                                            | 916540     | BBG000BN8ZK8 | 
| 1008 | NYSE:DB       | Deutsche Bank AG - Registered Shares                   | Finance                                                                  | 0000948046 | BBG000BR1W32 | 
| 1009 | NYSE:DBD      | Diebold Nixdorf Inc                                    | Manufacturing                                                            | 28823      | BBG000BGYDX9 | 
| 1010 | NYSE:DBI      | Designer Brands Inc - Class A                          | Retail Trade                                                             | 1319947    | BBG000CF8227 | 
| 1011 | NYSE:DD       | DuPont de Nemours Inc                                  | Manufacturing                                                            | 1666700    | BBG00BN961G4 | 
| 1012 | NYSE:DDD      | 3D Systems Corp.                                       | Manufacturing                                                            | 910638     | BBG000D42FJ0 | 
| 1013 | NYSE:DDS      | Dillard`s Inc. - Class A                               | Retail Trade                                                             | 28917      | BBG000BS4MP5 | 
| 1014 | NYSE:DE       | Deere & Co.                                            | Manufacturing                                                            | 315189     | BBG000BH1NH9 | 
| 1015 | NYSE:DECK     | Deckers Outdoor Corp.                                  | Manufacturing                                                            | 910521     | BBG000BKXYX5 | 
| 1016 | NYSE:DELL     | Dell Technologies Inc - Class C                        | Information                                                              | 1571996    | BBG00DW3SZS1 | 
| 1017 | NYSE:DEN      | Denbury Inc. - New                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 945764     | BBG000FBK808 | 
| 1018 | NYSE:DF       | Dean Foods Company                                     | Consumer Non-Durables                                                    |            | BBG000BBMT95 | 
| 1019 | NYSE:DFS      | Discover Financial Services                            | Finance and Insurance                                                    | 1393612    | BBG000QBR5J5 | 
| 1020 | NYSE:DG       | Dollar General Corp.                                   | Retail Trade                                                             | 29534      | BBG000NV1KK7 | 
| 1021 | NYSE:DGX      | Quest Diagnostics, Inc.                                | Manufacturing                                                            | 1022079    | BBG000BN84F3 | 
| 1022 | NYSE:DHI      | D.R. Horton Inc.                                       | Construction                                                             | 882184     | BBG000DQTXY6 | 
| 1023 | NYSE:DHR      | Danaher Corp.                                          | Manufacturing                                                            | 313616     | BBG000BH3JF8 | 
| 1024 | NYSE:DIS      | Walt Disney Co (The)                                   |                                                                          | 1744489    | BBG000BH4R78 | 
| 1025 | NYSE:DK       | Delek US Holdings Inc                                  | Manufacturing                                                            | 1694426    | BBG00FZYFVC5 | 
| 1026 | NYSE:DKS      | Dicks Sporting Goods, Inc.                             | Retail Trade                                                             | 1089063    | BBG000F6ZWH2 | 
| 1027 | NYSE:DLB      | Dolby Laboratories Inc - Class A                       | Manufacturing                                                            | 1308547    | BBG000DGLTG5 | 
| 1028 | NYSE:DLPH     | Delphi Technologies Plc                                | Producer Manufacturing                                                   | 1707092    | BBG00GTWPCQ0 | 
| 1029 | NYSE:DNOW     | NOW Inc                                                | Real Estate and Rental and Leasing                                       | 1599617    | BBG005BLN209 | 
| 1030 | NYSE:DO       | Diamond Offshore Drilling, Inc.                        | Energy                                                                   |            | BBG000FJRZ68 | 
| 1031 | NYSE:DOOR     | Masonite International Corp                            | Manufacturing                                                            | 893691     | BBG000N35HC1 | 
| 1032 | NYSE:DOV      | Dover Corp.                                            | Manufacturing                                                            | 29905      | BBG000BHB3M6 | 
| 1033 | NYSE:DOW      | Dow Inc                                                | Mining, Quarrying, and Oil and Gas Extraction                            | 1751788    | BBG00BN96922 | 
| 1034 | NYSE:DPZ      | Dominos Pizza Inc                                      | Accommodation and Food Services                                          | 1286681    | BBG000P458P3 | 
| 1035 | NYSE:DRI      | Darden Restaurants, Inc.                               | Accommodation and Food Services                                          | 940944     | BBG000BBNYF6 | 
| 1036 | NYSE:DRQ      | Dril-Quip, Inc.                                        | Manufacturing                                                            | 1042893    | BBG000BVDBY2 | 
| 1037 | NYSE:DS       | Drive Shack Inc                                        | Finance and Insurance                                                    | 1175483    | BBG000BNFJF2 | 
| 1038 | NYSE:DSX      | Diana Shipping Inc                                     | Transportation and Warehousing                                           | 1318885    | BBG000BV1NV2 | 
| 1039 | NYSE:DT       | Dynatrace Inc                                          | Information                                                              | 1773383    | BBG00PNN7C40 | 
| 1040 | NYSE:DTE      | DTE Energy Co.                                         | Utilities                                                                | 936340     | BBG000BB29X4 | 
| 1041 | NYSE:DUK      | Duke Energy Corp.                                      | Utilities                                                                | 1326160    | BBG000BHGDH5 | 
| 1042 | NYSE:DVA      | DaVita Inc                                             | Health Care and Social Assistance                                        | 927066     | BBG000MQ1SN9 | 
| 1043 | NYSE:DVN      | Devon Energy Corp.                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1090012    | BBG000BBVJZ8 | 
| 1044 | NYSE:DXC      | DXC Technology Co                                      | Professional, Scientific, and Technical Services                         | 1688568    | BBG00FN64XT9 | 
| 1045 | NYSE:DY       | Dycom Industries, Inc.                                 | Construction                                                             | 67215      | BBG000C4SKT1 | 
| 1046 | NYSE:EAT      | Brinker International, Inc.                            | Accommodation and Food Services                                          | 703351     | BBG000BK28N7 | 
| 1047 | NYSE:EBS      | Emergent Biosolutions Inc                              | Manufacturing                                                            | 1367644    | BBG000GW06J7 | 
| 1048 | NYSE:ECL      | Ecolab, Inc.                                           | Manufacturing                                                            | 31462      | BBG000BHKYH4 | 
| 1049 | NYSE:ECOM     | ChannelAdvisor Corp                                    | Information                                                              | 1169652    | BBG000QM5H72 | 
| 1050 | NYSE:ED       | Consolidated Edison, Inc.                              | Utilities                                                                | 1047862    | BBG000BHLYS1 | 
| 1051 | NYSE:EFX      | Equifax, Inc.                                          | Information                                                              | 33185      | BBG000BHPL78 | 
| 1052 | NYSE:EGO      | Eldorado Gold Corp.                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 918608     | BBG000BN7277 | 
| 1053 | NYSE:EGY      | VAALCO Energy, Inc.                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 894627     | BBG000BTBH21 | 
| 1054 | NYSE:EIX      | Edison International                                   | Utilities                                                                | 827052     | BBG000D7RKJ5 | 
| 1055 | NYSE:EL       | Estee Lauder Cos., Inc. - Class A                      | Manufacturing                                                            | 1001250    | BBG000FKJRC5 | 
| 1056 | NYSE:ELAN     | Elanco Animal Health Inc                               | Manufacturing                                                            | 1739104    | BBG00LJYS1P8 | 
| 1057 | NYSE:ELY      | Callaway Golf Co.                                      | Manufacturing                                                            | 837465     | BBG000CPCVY1 | 
| 1058 | NYSE:EMN      | Eastman Chemical Co                                    | Manufacturing                                                            | 915389     | BBG000BLW530 | 
| 1059 | NYSE:EMR      | Emerson Electric Co.                                   | Manufacturing                                                            | 32604      | BBG000BHX7N2 | 
| 1060 | NYSE:ENB      | Enbridge Inc                                           | Utilities                                                                | 895728     | BBG000K5M1S8 | 
| 1061 | NYSE:ENR      | Energizer Holdings Inc                                 | Manufacturing                                                            | 1632790    | BBG006FCB019 | 
| 1062 | NYSE:ENVA     | Enova International Inc.                               | Finance and Insurance                                                    | 1529864    | BBG0022PSJ14 | 
| 1063 | NYSE:EOG      | EOG Resources, Inc.                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 821189     | BBG000BZ9223 | 
| 1064 | NYSE:EPAC     | Enerpac Tool Group Corp - Class A                      | Manufacturing                                                            | 0000006955 | BBG000B9WX45 | 
| 1065 | NYSE:EPAM     | EPAM Systems Inc                                       | Professional, Scientific, and Technical Services                         | 1352010    | BBG000MHTV89 | 
| 1066 | NYSE:EPC      | Edgewell Personal Care Co                              | Manufacturing                                                            | 1096752    | BBG000BRW644 | 
| 1067 | NYSE:EQH      | Equitable Holdings Inc                                 | Finance and Insurance                                                    | 1333986    | BBG00J7CBVW8 | 
| 1068 | NYSE:EQT      | EQT Corp                                               | Mining, Quarrying, and Oil and Gas Extraction                            | 33213      | BBG000BHZ5J9 | 
| 1069 | NYSE:ERF      | Enerplus Corporation                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 1126874    | BBG000N0G2Z3 | 
| 1070 | NYSE:ES       | Eversource Energy                                      | Utilities                                                                | 72741      | BBG000BQ87N0 | 
| 1071 | NYSE:ESTC     | Elastic N.V                                            | Information                                                              | 1707753    | BBG00LWZDYB9 | 
| 1072 | NYSE:ETN      | Eaton Corporation plc                                  | Manufacturing                                                            | 1551182    | BBG000BJ3PD2 | 
| 1073 | NYSE:ETR      | Entergy Corp.                                          | Utilities                                                                | 65984      | BBG000C1FQS9 | 
| 1074 | NYSE:ETRN     | Equitrans Midstream Corporation                        | Transportation and Warehousing                                           | 1747009    | BBG00K53L394 | 
| 1075 | NYSE:EV       | Eaton Vance Corp. (Non Voting)                         | Finance and Insurance                                                    | 350797     | BBG000DBVBY4 | 
| 1076 | NYSE:EVRG     | Evergy Inc                                             | Utilities                                                                | 1711269    | BBG00H433CR2 | 
| 1077 | NYSE:EVRI     | Everi Holdings Inc                                     | Finance and Insurance                                                    | 1318568    | BBG000H1B407 | 
| 1078 | NYSE:EW       | Edwards Lifesciences Corp                              | Manufacturing                                                            | 1099800    | BBG000BRXP69 | 
| 1079 | NYSE:EXK      | Endeavour Silver Corp.                                 | Mining, Quarrying, and Oil and Gas Extraction                            | 1277866    | BBG000K2HB18 | 
| 1080 | NYSE:EXP      | Eagle Materials Inc.                                   | Manufacturing                                                            | 918646     | BBG000BJW241 | 
| 1081 | NYSE:EXPR     | Express Inc.                                           | Retail Trade                                                             | 1483510    | BBG000QB2L61 | 
| 1082 | NYSE:F        | Ford Motor Co.                                         | Manufacturing                                                            | 37996      | BBG000BQPC32 | 
| 1083 | NYSE:FBHS     | Fortune Brands Home & Security Inc                     | Manufacturing                                                            | 1519751    | BBG001B4BV87 | 
| 1084 | NYSE:FCF      | First Commonwealth Financial Corp.                     | Finance and Insurance                                                    | 712537     | BBG000CND7W0 | 
| 1085 | NYSE:FCN      | FTI Consulting Inc.                                    | Professional, Scientific, and Technical Services                         | 887936     | BBG000K88H58 | 
| 1086 | NYSE:FCX      | Freeport-McMoRan Inc                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 831259     | BBG000BJDB15 | 
| 1087 | NYSE:FDP      | Fresh Del Monte Produce Inc                            | Agriculture, Forestry, Fishing and Hunting                               | 1047340    | BBG000JLQGN3 | 
| 1088 | NYSE:FDS      | Factset Research Systems Inc.                          | Information                                                              | 1013237    | BBG000BDJL83 | 
| 1089 | NYSE:FDX      | Fedex Corp                                             | Transportation and Warehousing                                           | 1048911    | BBG000BJF1Z8 | 
| 1090 | NYSE:FE       | Firstenergy Corp.                                      | Utilities                                                                | 1031296    | BBG000BB6M98 | 
| 1091 | NYSE:FHI      | Federated Hermes Inc - Class B                         | Finance and Insurance                                                    | 0001056288 | BBG000BP0929 | 
| 1092 | NYSE:FHN      | First Horizon Corporation                              | Finance and Insurance                                                    | 36966      | BBG000GHZSZ6 | 
| 1093 | NYSE:FICO     | Fair, Isaac Corp.                                      | Information                                                              | 814547     | BBG000DW76Y6 | 
| 1094 | NYSE:FIS      | Fidelity National Information Services, Inc.           | Information                                                              | 1136893    | BBG000BK2F42 | 
| 1095 | NYSE:FIT      | Fitbit Inc - Class A                                   | Manufacturing                                                            | 1447599    | BBG0025YWQ66 | 
| 1096 | NYSE:FIX      | Comfort Systems USA, Inc.                              | Construction                                                             | 1035983    | BBG000BWN2Y9 | 
| 1097 | NYSE:FL       | Foot Locker Inc                                        | Retail Trade                                                             | 850209     | BBG000BX8DC4 | 
| 1098 | NYSE:FLO      | Flowers Foods, Inc.                                    | Manufacturing                                                            | 1128928    | BBG000BB4D72 | 
| 1099 | NYSE:FLR      | Fluor Corporation                                      | Professional, Scientific, and Technical Services                         | 1124198    | BBG000BB1TH9 | 
| 1100 | NYSE:FLS      | Flowserve Corp.                                        | Manufacturing                                                            | 30625      | BBG000FFH4P5 | 
| 1101 | NYSE:FLT      | Fleetcor Technologies Inc                              | Information                                                              | 1175454    | BBG000GPXKX9 | 
| 1102 | NYSE:FMC      | FMC Corp.                                              | Manufacturing                                                            | 37785      | BBG000BJP882 | 
| 1103 | NYSE:FNF      | Fidelity National Financial Inc                        | Finance and Insurance                                                    | 1331875    | BBG006N7S6K9 | 
| 1104 | NYSE:FNV      | Franco-Nevada Corporation                              | Mining, Quarrying, and Oil and Gas Extraction                            | 1456346    | BBG000RD3CL8 | 
| 1105 | NYSE:FRC      | First Republic Bank                                    | Finance and Insurance                                                    | 1132979    | BBG0019LSQ49 | 
| 1106 | NYSE:FRO      | Frontline Ltd                                          | Transportation and Warehousing                                           | 913290     | BBG000BTQNQ6 | 
| 1107 | NYSE:FSLY     | Fastly Inc - Class A                                   | Manufacturing                                                            | 1517413    | BBG004NLQHL0 | 
| 1108 | NYSE:FSR      | Fisker Inc - Class A                                   | Manufacturing                                                            | 1720990    | BBG00LPWLFD4 | 
| 1109 | NYSE:FSS      | Federal Signal Corp.                                   | Manufacturing                                                            | 277509     | BBG000BJXWX2 | 
| 1110 | NYSE:FTCH     | Farfetch Ltd - Class A                                 | Retail Trade                                                             | 1740915    | BBG00LSD4456 | 
| 1111 | NYSE:FTI      | TechnipFMC plc                                         | Professional, Scientific, and Technical Services                         | 1681459    | BBG00DL8NMV2 | 
| 1112 | NYSE:FTV      | Fortive Corp                                           | Manufacturing                                                            | 1659166    | BBG00BLVZ228 | 
| 1113 | NYSE:FVRR     | Fiverr International Ltd                               | Manufacturing                                                            | 1762301    | BBG002YSC5M7 | 
| 1114 | NYSE:G        | Genpact Ltd                                            | Information                                                              | 1398659    | BBG000RQBFV2 | 
| 1115 | NYSE:GBX      | Greenbrier Cos., Inc.                                  | Manufacturing                                                            | 923120     | BBG000CF5097 | 
| 1116 | NYSE:GCO      | Genesco Inc.                                           | Retail Trade                                                             | 18498      | BBG000BK5S78 | 
| 1117 | NYSE:GD       | General Dynamics Corp.                                 | Manufacturing                                                            | 40533      | BBG000BK67C7 | 
| 1118 | NYSE:GDDY     | Godaddy Inc - Class A                                  | Professional, Scientific, and Technical Services                         | 1609711    | BBG006MDLY05 | 
| 1119 | NYSE:GE       | General Electric Co.                                   | Manufacturing                                                            | 40545      | BBG000BK6MB5 | 
| 1120 | NYSE:GES      | Guess Inc.                                             | Retail Trade                                                             | 912463     | BBG000BC26P7 | 
| 1121 | NYSE:GHC      | Graham Holdings Co. - Class B                          | Educational Services                                                     | 104889     | BBG000C3FGH9 | 
| 1122 | NYSE:GHL      | Greenhill & Co Inc                                     | Finance and Insurance                                                    | 1282977    | BBG000C34WJ4 | 
| 1123 | NYSE:GIL      | Gildan Activewear Inc                                  | Manufacturing                                                            | 1061894    | BBG000BH2CW5 | 
| 1124 | NYSE:GIS      | General Mills, Inc.                                    | Manufacturing                                                            | 40704      | BBG000BKCFC2 | 
| 1125 | NYSE:GKOS     | Glaukos Corporation                                    | Manufacturing                                                            | 1192448    | BBG000WG2LQ1 | 
| 1126 | NYSE:GL       | Globe Life Inc                                         | Finance and Insurance                                                    | 320335     | BBG000BVD6X4 | 
| 1127 | NYSE:GLOB     | Globant S.A.                                           | Information                                                              | 1557860    | BBG00564Y443 | 
| 1128 | NYSE:GLW      | Corning, Inc.                                          | Manufacturing                                                            | 24741      | BBG000BKFZM4 | 
| 1129 | NYSE:GM       | General Motors Company                                 | Manufacturing                                                            | 1467858    | BBG000NDYB67 | 
| 1130 | NYSE:GME      | Gamestop Corporation - Class A                         | Retail Trade                                                             | 1326380    | BBG000BB5BF6 | 
| 1131 | NYSE:GMS      | GMS Inc                                                | Wholesale Trade                                                          | 1600438    | BBG009Q036D0 | 
| 1132 | NYSE:GNC      | GNC Holdings Inc. Class A                              | Retail Trade                                                             | 1502034    | BBG0016WLQ18 | 
| 1133 | NYSE:GNRC     | Generac Holdings Inc                                   | Manufacturing                                                            | 1474735    | BBG000PQ4W72 | 
| 1134 | NYSE:GNW      | Genworth Financial Inc - Class A                       | Finance and Insurance                                                    | 1276520    | BBG000J5Q6L2 | 
| 1135 | NYSE:GOOS     | Canada Goose Holdings Inc (Subord Vot Shs)             | Manufacturing                                                            | 1690511    | BBG00G41B914 | 
| 1136 | NYSE:GPC      | Genuine Parts Co.                                      | Wholesale Trade                                                          | 40987      | BBG000BKL348 | 
| 1137 | NYSE:GPI      | Group 1 Automotive, Inc.                               | Retail Trade                                                             | 1031203    | BBG000BB88K4 | 
| 1138 | NYSE:GPN      | Global Payments, Inc.                                  | Information                                                              | 1123360    | BBG000CX0P89 | 
| 1139 | NYSE:GPS      | Gap, Inc.                                              | Retail Trade                                                             | 39911      | BBG000BKLH74 | 
| 1140 | NYSE:GRA      | W.R. Grace & Co.                                       | Manufacturing                                                            | 1045309    | BBG000BB8PG1 | 
| 1141 | NYSE:GRC      | Gorman-Rupp Co.                                        | Manufacturing                                                            | 42682      | BBG000BKN0V2 | 
| 1142 | NYSE:GRUB     | GrubHub Inc                                            | Information                                                              | 1594109    | BBG001KWG293 | 
| 1143 | NYSE:GS       | Goldman Sachs Group, Inc.                              | Finance and Insurance                                                    | 886982     | BBG000C6CFJ5 | 
| 1144 | NYSE:GSBD     | Goldman Sachs BDC Inc                                  | Finance and Insurance                                                    | 1572694    | BBG004DDDKH1 | 
| 1145 | NYSE:GTLS     | Chart Industries Inc                                   | Manufacturing                                                            | 892553     | BBG000P1K2X6 | 
| 1146 | NYSE:GVA      | Granite Construction Inc.                              | Construction                                                             | 861459     | BBG000DVB833 | 
| 1147 | NYSE:GWR      | Genesee & Wyoming, Inc.                                | Transportation                                                           |            | BBG000GMDMK8 | 
| 1148 | NYSE:GWRE     | Guidewire Software Inc                                 | Information                                                              | 1528396    | BBG001C7PM75 | 
| 1149 | NYSE:GWW      | W.W. Grainger Inc.                                     | Wholesale Trade                                                          | 277135     | BBG000BKR1D6 | 
| 1150 | NYSE:H        | Hyatt Hotels Corporation - Class A                     | Administrative and Support and Waste Management and Remediation Services | 1468174    | BBG000CVRFS4 | 
| 1151 | NYSE:HAE      | Haemonetics Corp.                                      | Manufacturing                                                            | 313143     | BBG000C7TF41 | 
| 1152 | NYSE:HAL      | Halliburton Co.                                        | Mining, Quarrying, and Oil and Gas Extraction                            | 45012      | BBG000BKTFN2 | 
| 1153 | NYSE:HBI      | Hanesbrands Inc                                        | Manufacturing                                                            | 1359841    | BBG000D2ZTS8 | 
| 1154 | NYSE:HCA      | HCA Healthcare Inc                                     | Health Care and Social Assistance                                        | 860730     | BBG000QW7VC1 | 
| 1155 | NYSE:HD       | Home Depot, Inc.                                       | Retail Trade                                                             | 354950     | BBG000BKZB36 | 
| 1156 | NYSE:HEI      | Heico Corp.                                            | Manufacturing                                                            | 46619      | BBG000BL16Q7 | 
| 1157 | NYSE:HES      | Hess Corporation                                       | Manufacturing                                                            | 4447       | BBG000BBD070 | 
| 1158 | NYSE:HESM     | Hess Midstream LP - Class A                            | Transportation and Warehousing                                           | 1619739    | BBG00R02H8D5 | 
| 1159 | NYSE:HFC      | HollyFrontier Corp                                     | Manufacturing                                                            | 48039      | BBG000BL9JQ1 | 
| 1160 | NYSE:HI       | Hillenbrand Inc                                        | Manufacturing                                                            | 1417398    | BBG000KT0GV3 | 
| 1161 | NYSE:HIG      | Hartford Financial Services Group Inc.                 | Finance and Insurance                                                    | 874766     | BBG000G0Z878 | 
| 1162 | NYSE:HII      | Huntington Ingalls Industries Inc                      | Manufacturing                                                            | 1501585    | BBG001KJ2HM9 | 
| 1163 | NYSE:HL       | Hecla Mining Co.                                       | Mining, Quarrying, and Oil and Gas Extraction                            | 719413     | BBG000BL5W86 | 
| 1164 | NYSE:HLF      | Herbalife Nutrition Ltd                                | Manufacturing                                                            | 1180262    | BBG000MM5VL9 | 
| 1165 | NYSE:HLIO     | Helios Technologies Inc                                | Manufacturing                                                            | 1024795    | BBG000HL4L03 | 
| 1166 | NYSE:HLT      | Hilton Worldwide Holdings Inc                          | Accommodation and Food Services                                          | 1585689    | BBG0058KMH30 | 
| 1167 | NYSE:HLX      | Helix Energy Solutions Group Inc                       | Mining, Quarrying, and Oil and Gas Extraction                            | 866829     | BBG000J7Q1L9 | 
| 1168 | NYSE:HOG      | Harley-Davidson, Inc.                                  | Manufacturing                                                            | 793952     | BBG000BKZTP3 | 
| 1169 | NYSE:HOS      | Hornbeck Offshore Services                             | Consumer Services                                                        |            | BBG000BB5VJ8 | 
| 1170 | NYSE:HP       | Helmerich & Payne, Inc.                                | Mining, Quarrying, and Oil and Gas Extraction                            | 46765      | BBG000BLCPY4 | 
| 1171 | NYSE:HPE      | Hewlett Packard Enterprise Co                          | Manufacturing                                                            | 1645590    | BBG0078W3NQ3 | 
| 1172 | NYSE:HPQ      | HP Inc                                                 | Manufacturing                                                            | 47217      | BBG000KHWT55 | 
| 1173 | NYSE:HRB      | H&R Block Inc.                                         | Professional, Scientific, and Technical Services                         | 12659      | BBG000BLDV98 | 
| 1174 | NYSE:HRC      | Hill-Rom Holdings Inc                                  | Manufacturing                                                            | 47518      | BBG000BKWCS0 | 
| 1175 | NYSE:HRI      | Herc Holdings Inc                                      | Real Estate and Rental and Leasing                                       | 1364479    | BBG000FNRZ69 | 
| 1176 | NYSE:HRL      | Hormel Foods Corp.                                     | Manufacturing                                                            | 48465      | BBG000BLF8D2 | 
| 1177 | NYSE:HSY      | Hershey Company                                        | Manufacturing                                                            | 47111      | BBG000BLHRS2 | 
| 1178 | NYSE:HTH      | Hilltop Holdings Inc                                   | Finance and Insurance                                                    | 1265131    | BBG000GM73Y2 | 
| 1179 | NYSE:HTZ      | Hertz Global Holdings Inc.                             | Finance                                                                  | 1657853    | BBG00D1WHZD9 | 
| 1180 | NYSE:HUBS     | HubSpot Inc                                            | Information                                                              | 1404655    | BBG000N7MZ06 | 
| 1181 | NYSE:HUM      | Humana Inc.                                            | Health Care and Social Assistance                                        | 49071      | BBG000BLKK03 | 
| 1182 | NYSE:HUN      | Huntsman Corp                                          | Manufacturing                                                            | 1307954    | BBG000NS26Q8 | 
| 1183 | NYSE:HWM      | Howmet Aerospace Inc                                   | Manufacturing                                                            | 0000004281 | BBG00DYNJGH9 | 
| 1184 | NYSE:HXL      | Hexcel Corp.                                           | Manufacturing                                                            | 717605     | BBG000BLMDQ9 | 
| 1185 | NYSE:HYLN     | Hyliion Holdings Corporation - Class A                 | Manufacturing                                                            | 1759631    | BBG00N9MJTZ9 | 
| 1186 | NYSE:I        | Intelsat S.A.                                          | Communications                                                           | 1525773    | BBG002ZY3W71 | 
| 1187 | NYSE:IAA      | IAA Inc                                                | Transportation and Warehousing                                           | 1745041    | BBG00K7ZQ662 | 
| 1188 | NYSE:IAG      | Iamgold Corp.                                          | Mining, Quarrying, and Oil and Gas Extraction                            | 1203464    | BBG000LL9LQ5 | 
| 1189 | NYSE:IBM      | International Business Machines Corp.                  | Professional, Scientific, and Technical Services                         | 51143      | BBG000BLNNH6 | 
| 1190 | NYSE:IBP      | Installed Building Products Inc                        | Construction                                                             | 1580905    | BBG005TJKDZ6 | 
| 1191 | NYSE:ICE      | Intercontinental Exchange Inc                          | Finance and Insurance                                                    | 1571949    | BBG000C1FB75 | 
| 1192 | NYSE:IDA      | Idacorp, Inc.                                          | Utilities                                                                | 1057877    | BBG000BLR3Y7 | 
| 1193 | NYSE:IEX      | Idex Corporation                                       | Manufacturing                                                            | 832101     | BBG000C1HN22 | 
| 1194 | NYSE:IGT      | International Game Technology PLC                      | Arts, Entertainment, and Recreation                                      | 1619762    | BBG0081VHTP3 | 
| 1195 | NYSE:IMAX     | Imax Corp                                              | Information                                                              | 921582     | BBG000K8KKL9 | 
| 1196 | NYSE:INFO     | IHS Markit Ltd                                         | Administrative and Support and Waste Management and Remediation Services | 1598014    | BBG006G063F9 | 
| 1197 | NYSE:INGR     | Ingredion Inc                                          | Manufacturing                                                            | 1046257    | BBG000BXPZB7 | 
| 1198 | NYSE:INSP     | Inspire Medical Systems Inc                            | Professional, Scientific, and Technical Services                         | 1609550    | BBG00209SZJ7 | 
| 1199 | NYSE:INSW     | International Seaways Inc                              | Transportation and Warehousing                                           | 1679049    | BBG003MN93C9 | 
| 1200 | NYSE:INXN     | InterXion Holding N.V.                                 | Technology                                                               |            | BBG001D8G1B3 | 
| 1201 | NYSE:IO       | ION Geophysical Corp                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 866609     | BBG000DLQ8W7 | 
| 1202 | NYSE:IP       | International Paper Co.                                | Manufacturing                                                            | 51434      | BBG000BM5SR2 | 
| 1203 | NYSE:IPG      | Interpublic Group Of Cos., Inc.                        | Professional, Scientific, and Technical Services                         | 51644      | BBG000C90DH9 | 
| 1204 | NYSE:IPI      | Intrepid Potash Inc                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 1421461    | BBG000V1Y6Q3 | 
| 1205 | NYSE:IQV      | IQVIA Holdings Inc                                     | Health Care and Social Assistance                                        | 1478242    | BBG00333FYS2 | 
| 1206 | NYSE:IR       | Ingersoll-Rand Inc                                     | Manufacturing                                                            | 1466258    | BBG002R1CW27 | 
| 1207 | NYSE:IT       | Gartner, Inc.                                          | Information                                                              | 749251     | BBG000BB65D0 | 
| 1208 | NYSE:ITT      | ITT Inc                                                | Manufacturing                                                            | 216228     | BBG00CVQZQ96 | 
| 1209 | NYSE:ITW      | Illinois Tool Works, Inc.                              | Manufacturing                                                            | 49826      | BBG000BMBL90 | 
| 1210 | NYSE:IVZ      | Invesco Ltd                                            | Finance and Insurance                                                    | 914208     | BBG000BY2Y78 | 
| 1211 | NYSE:J        | Jacobs Engineering Group, Inc.                         | Professional, Scientific, and Technical Services                         | 0000052988 | BBG000BMFFQ0 | 
| 1212 | NYSE:JBL      | Jabil Inc                                              | Manufacturing                                                            | 898293     | BBG000BJNGN9 | 
| 1213 | NYSE:JCI      | Johnson Controls International plc - Registered Shares | Manufacturing                                                            | 833444     | BBG000BVWLJ6 | 
| 1214 | NYSE:JCP      | J. C. Penney Company Inc.                              | Retail Trade                                                             | 1166126    | BBG000BMF5J0 | 
| 1215 | NYSE:JEF      | Jefferies Financial Group Inc                          | Finance and Insurance                                                    | 96223      | BBG000BNHSP9 | 
| 1216 | NYSE:JHG      | Janus Henderson Group PLC                              | Finance                                                                  | 1274173    | BBG00GSNPM07 | 
| 1217 | NYSE:JLL      | Jones Lang Lasalle Inc.                                | Real Estate and Rental and Leasing                                       | 1037976    | BBG000C2L2L0 | 
| 1218 | NYSE:JNJ      | Johnson & Johnson                                      | Manufacturing                                                            | 200406     | BBG000BMHYD1 | 
| 1219 | NYSE:JNPR     | Juniper Networks Inc                                   | Manufacturing                                                            | 1043604    | BBG000BY33P5 | 
| 1220 | NYSE:JOE      | St. Joe Co.                                            | Construction                                                             | 745308     | BBG000D6TC94 | 
| 1221 | NYSE:JPM      | JPMorgan Chase & Co.                                   | Finance and Insurance                                                    | 19617      | BBG000DMBXR2 | 
| 1222 | NYSE:JWN      | Nordstrom, Inc.                                        | Retail Trade                                                             | 72333      | BBG000G8N9C6 | 
| 1223 | NYSE:K        | Kellogg Co                                             | Manufacturing                                                            | 55067      | BBG000BMKDM3 | 
| 1224 | NYSE:KAR      | KAR Auction Services Inc                               | Retail Trade                                                             | 1395942    | BBG000VZHLL9 | 
| 1225 | NYSE:KBH      | KB Home                                                | Construction                                                             | 795266     | BBG000BMLWX8 | 
| 1226 | NYSE:KBR      | KBR Inc                                                | Construction                                                             | 1357615    | BBG000P28YZ6 | 
| 1227 | NYSE:KEX      | Kirby Corp.                                            | Transportation and Warehousing                                           | 56047      | BBG000BMQCP6 | 
| 1228 | NYSE:KEY      | Keycorp                                                | Finance and Insurance                                                    | 91576      | BBG000BMQPL1 | 
| 1229 | NYSE:KEYS     | Keysight Technologies Inc                              | Manufacturing                                                            | 1601046    | BBG0059FN811 | 
| 1230 | NYSE:KGC      | Kinross Gold Corp.                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 701818     | BBG000BB2DM7 | 
| 1231 | NYSE:KKR      | KKR & Co. Inc.                                         | Finance and Insurance                                                    | 1404912    | BBG000BCQ6J8 | 
| 1232 | NYSE:KL       | Kirkland Lake Gold Ltd                                 | Mining, Quarrying, and Oil and Gas Extraction                            | 1713443    | BBG009NRNMY4 | 
| 1233 | NYSE:KMB      | Kimberly-Clark Corp.                                   | Manufacturing                                                            | 55785      | BBG000BMW2Z0 | 
| 1234 | NYSE:KMI      | Kinder Morgan Inc - Class P                            | Transportation and Warehousing                                           | 1506307    | BBG0019JZ882 | 
| 1235 | NYSE:KMT      | Kennametal Inc.                                        | Manufacturing                                                            | 55242      | BBG000BMWKC5 | 
| 1236 | NYSE:KMX      | Carmax Inc                                             | Retail Trade                                                             | 1170010    | BBG000BLMZK6 | 
| 1237 | NYSE:KN       | Knowles Corp                                           | Manufacturing                                                            | 1587523    | BBG004M8M6J1 | 
| 1238 | NYSE:KNX      | Knight-Swift Transportation Holdings Inc - Class A     | Transportation and Warehousing                                           | 1492691    | BBG000BFC848 | 
| 1239 | NYSE:KO       | Coca-Cola Co                                           | Manufacturing                                                            | 21344      | BBG000BMX289 | 
| 1240 | NYSE:KODK     | Eastman Kodak Company                                  | Electronic Technology                                                    | 31235      | BBG0057GTG80 | 
| 1241 | NYSE:KOS      | Kosmos Energy Ltd                                      | Mining, Quarrying, and Oil and Gas Extraction                            | 1509991    | BBG000L2Q7C4 | 
| 1242 | NYSE:KR       | Kroger Co.                                             | Retail Trade                                                             | 56873      | BBG000BMY992 | 
| 1243 | NYSE:KSS      | Kohl`s Corp.                                           | Retail Trade                                                             | 885639     | BBG000CS7CT9 | 
| 1244 | NYSE:KSU      | Kansas City Southern                                   | Transportation and Warehousing                                           | 54480      | BBG000BMZ7P7 | 
| 1245 | NYSE:KW       | Kennedy-Wilson Holdings Inc                            | Real Estate and Rental and Leasing                                       | 1408100    | BBG000CTY4J6 | 
| 1246 | NYSE:L        | Loews Corp.                                            | Finance and Insurance                                                    | 60086      | BBG000C45984 | 
| 1247 | NYSE:LAC      | Lithium Americas Corp                                  | Mining, Quarrying, and Oil and Gas Extraction                            | 0001440972 | BBG000BGM5P8 | 
| 1248 | NYSE:LAD      | Lithia Motors, Inc. - Class A                          | Retail Trade                                                             | 1023128    | BBG000K3BC83 | 
| 1249 | NYSE:LAZ      | Lazard Ltd. - Class A                                  | Finance and Insurance                                                    | 1311370    | BBG000BT4C39 | 
| 1250 | NYSE:LB       | L Brands Inc                                           | Retail Trade                                                             | 701985     | BBG000BNGTQ7 | 
| 1251 | NYSE:LC       | LendingClub Corp                                       | Finance and Insurance                                                    | 1409970    | BBG001YKDND6 | 
| 1252 | NYSE:LDOS     | Leidos Holdings Inc                                    | Professional, Scientific, and Technical Services                         | 1336920    | BBG000C23PB0 | 
| 1253 | NYSE:LEA      | Lear Corp.                                             | Manufacturing                                                            | 842162     | BBG000PTLGZ1 | 
| 1254 | NYSE:LEG      | Leggett & Platt, Inc.                                  | Manufacturing                                                            | 58492      | BBG000BN53G7 | 
| 1255 | NYSE:LEN      | Lennar Corp. - Class A                                 | Construction                                                             | 920760     | BBG000BN5HF7 | 
| 1256 | NYSE:LHX      | L3Harris Technologies Inc                              | Manufacturing                                                            | 202058     | BBG000BLGFJ9 | 
| 1257 | NYSE:LII      | Lennox International Inc                               | Manufacturing                                                            | 1069202    | BBG000BB5B84 | 
| 1258 | NYSE:LIN      | Linde Plc                                              |                                                                          | 1707925    | BBG00GVR8YQ9 | 
| 1259 | NYSE:LL       | Lumber Liquidators Holdings Inc                        | Retail Trade                                                             | 1396033    | BBG000QKPTS5 | 
| 1260 | NYSE:LLY      | Lilly(Eli) & Co                                        | Manufacturing                                                            | 59478      | BBG000BNBDC2 | 
| 1261 | NYSE:LM       | Legg Mason Inc.                                        | Finance                                                                  | 704051     | BBG000BNBPQ0 | 
| 1262 | NYSE:LMT      | Lockheed Martin Corp.                                  | Manufacturing                                                            | 936468     | BBG000C1BW00 | 
| 1263 | NYSE:LNC      | Lincoln National Corp.                                 | Finance and Insurance                                                    | 59558      | BBG000BNC3Y9 | 
| 1264 | NYSE:LNN      | Lindsay Corporation                                    | Manufacturing                                                            | 836157     | BBG000FJS1S8 | 
| 1265 | NYSE:LOW      | Lowe`s Cos., Inc.                                      | Retail Trade                                                             | 60667      | BBG000BNDN65 | 
| 1266 | NYSE:LPX      | Louisiana-Pacific Corp.                                | Manufacturing                                                            | 60519      | BBG000BNF508 | 
| 1267 | NYSE:LRN      | Stride Inc                                             | Educational Services                                                     | 1157408    | BBG000QSXPZ9 | 
| 1268 | NYSE:LTHM     | Livent Corp                                            | Manufacturing                                                            | 1742924    | BBG00LV3NRG0 | 
| 1269 | NYSE:LUMN     | Lumen Technologies Inc                                 | Information                                                              | 18926      | BBG000BGLRN3 | 
| 1270 | NYSE:LUV      | Southwest Airlines Co                                  | Transportation and Warehousing                                           | 92380      | BBG000BNJHS8 | 
| 1271 | NYSE:LVS      | Las Vegas Sands Corp                                   | Arts, Entertainment, and Recreation                                      | 1300514    | BBG000JWD753 | 
| 1272 | NYSE:LW       | Lamb Weston Holdings Inc                               | Manufacturing                                                            | 1679273    | BBG003CVMLQ2 | 
| 1273 | NYSE:LXU      | LSB Industries, Inc.                                   | Manufacturing                                                            | 60714      | BBG000C1C526 | 
| 1274 | NYSE:LYB      | LyondellBasell Industries NV - Class A                 | Manufacturing                                                            | 1489393    | BBG000WCFV84 | 
| 1275 | NYSE:LYV      | Live Nation Entertainment Inc                          | Professional, Scientific, and Technical Services                         | 1335258    | BBG000FQ7YR4 | 
| 1276 | NYSE:M        | Macy`s Inc                                             | Retail Trade                                                             | 794367     | BBG000C46HM9 | 
| 1277 | NYSE:MA       | Mastercard Incorporated - Class A                      | Information                                                              | 1141391    | BBG000F1ZSQ2 | 
| 1278 | NYSE:MAN      | ManpowerGroup                                          | Professional, Scientific, and Technical Services                         | 871763     | BBG000BNMHS4 | 
| 1279 | NYSE:MAS      | Masco Corp.                                            | Manufacturing                                                            | 62996      | BBG000BNNKG9 | 
| 1280 | NYSE:MATX     | Matson Inc                                             | Transportation and Warehousing                                           | 3453       | BBG000BBK401 | 
| 1281 | NYSE:MBI      | MBIA Inc.                                              | Finance and Insurance                                                    | 814585     | BBG000BNQN34 | 
| 1282 | NYSE:MC       | Moelis & Co - Class A                                  | Finance and Insurance                                                    | 1596967    | BBG000RNBH63 | 
| 1283 | NYSE:MCD      | McDonald`s Corp                                        | Accommodation and Food Services                                          | 63908      | BBG000BNSZP1 | 
| 1284 | NYSE:MCK      | Mckesson Corporation                                   | Wholesale Trade                                                          | 927653     | BBG000DYGNW7 | 
| 1285 | NYSE:MCO      | Moody`s Corp.                                          | Administrative and Support and Waste Management and Remediation Services | 1059556    | BBG000F86GP6 | 
| 1286 | NYSE:MD       | MEDNAX Inc                                             | Health Care and Social Assistance                                        | 893949     | BBG000H8LGK2 | 
| 1287 | NYSE:MDC      | M.D.C. Holdings, Inc.                                  | Construction                                                             | 773141     | BBG000BNTTY4 | 
| 1288 | NYSE:MDLA     | Medallia Inc                                           | Information                                                              | 1540184    | BBG001BPKGT0 | 
| 1289 | NYSE:MDT      | Medtronic Plc                                          | Manufacturing                                                            | 1613103    | BBG000BNWG87 | 
| 1290 | NYSE:MDU      | MDU Resources Group Inc                                |                                                                          | 67716      | BBG000BNX3R4 | 
| 1291 | NYSE:MED      | Medifast Inc                                           | Manufacturing                                                            | 910329     | BBG000BWBW76 | 
| 1292 | NYSE:MET      | Metlife Inc                                            | Finance and Insurance                                                    | 1099219    | BBG000BB6KF5 | 
| 1293 | NYSE:MFC      | Manulife Financial Corp.                               | Finance and Insurance                                                    | 1086888    | BBG000C0Q0K4 | 
| 1294 | NYSE:MGA      | Magna International Inc.                               | Manufacturing                                                            | 749098     | BBG000BNLPJ7 | 
| 1295 | NYSE:MGM      | MGM Resorts International                              | Arts, Entertainment, and Recreation                                      | 789570     | BBG000C2BXK4 | 
| 1296 | NYSE:MHK      | Mohawk Industries, Inc.                                | Manufacturing                                                            | 851968     | BBG000FLZN98 | 
| 1297 | NYSE:MIC      | Macquarie Infrastructure Corp                          | Transportation and Warehousing                                           | 1289790    | BBG000M34GG1 | 
| 1298 | NYSE:MKC      | McCormick & Co., Inc. (Non Voting)                     | Manufacturing                                                            | 63754      | BBG000G6Y5W4 | 
| 1299 | NYSE:MKL      | Markel Corp                                            | Finance and Insurance                                                    | 1096343    | BBG000FC7366 | 
| 1300 | NYSE:MLM      | Martin Marietta Materials, Inc.                        | Mining, Quarrying, and Oil and Gas Extraction                            | 916076     | BBG000BGYMH7 | 
| 1301 | NYSE:MMC      | Marsh & McLennan Cos., Inc.                            | Finance and Insurance                                                    | 62709      | BBG000BP4MH0 | 
| 1302 | NYSE:MMM      | 3M Co.                                                 | Management of Companies and Enterprises                                  | 66740      | BBG000BP52R2 | 
| 1303 | NYSE:MNK      | Mallinckrodt Plc                                       | Health Technology                                                        | 1567892    | BBG002BHBHM1 | 
| 1304 | NYSE:MO       | Altria Group Inc.                                      | Manufacturing                                                            | 764180     | BBG000BP6LJ8 | 
| 1305 | NYSE:MOH      | Molina Healthcare Inc                                  | Finance and Insurance                                                    | 1179929    | BBG000MBHNC8 | 
| 1306 | NYSE:MOS      | Mosaic Company                                         | Manufacturing                                                            | 1285785    | BBG000BFXHL6 | 
| 1307 | NYSE:MOV      | Movado Group, Inc.                                     | Manufacturing                                                            | 72573      | BBG000BL30Y9 | 
| 1308 | NYSE:MPC      | Marathon Petroleum Corp                                | Manufacturing                                                            | 1510295    | BBG001DCCGR8 | 
| 1309 | NYSE:MRK      | Merck & Co Inc                                         | Manufacturing                                                            | 310158     | BBG000BPD168 | 
| 1310 | NYSE:MRO      | Marathon Oil Corporation                               | Mining, Quarrying, and Oil and Gas Extraction                            | 101778     | BBG000C8H633 | 
| 1311 | NYSE:MS       | Morgan Stanley                                         | Finance and Insurance                                                    | 895421     | BBG000BLZRJ2 | 
| 1312 | NYSE:MSCI     | MSCI Inc                                               | Finance and Insurance                                                    | 1408198    | BBG000RTDY25 | 
| 1313 | NYSE:MSI      | Motorola Solutions Inc                                 | Manufacturing                                                            | 68505      | BBG000BP8Z50 | 
| 1314 | NYSE:MSM      | MSC Industrial Direct Co., Inc. - Class A              | Real Estate and Rental and Leasing                                       | 1003078    | BBG000BCLYL9 | 
| 1315 | NYSE:MTB      | M & T Bank Corp                                        | Finance and Insurance                                                    | 36270      | BBG000D9KWL9 | 
| 1316 | NYSE:MTD      | Mettler-Toledo International, Inc.                     | Manufacturing                                                            | 1037646    | BBG000BZCKH3 | 
| 1317 | NYSE:MTDR     | Matador Resources Co                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 1520006    | BBG000JCPGZ1 | 
| 1318 | NYSE:MTG      | MGIC Investment Corp                                   | Finance and Insurance                                                    | 876437     | BBG000CBMH27 | 
| 1319 | NYSE:MTH      | Meritage Homes Corp.                                   | Construction                                                             | 833079     | BBG000F4F1N0 | 
| 1320 | NYSE:MTN      | Vail Resorts Inc.                                      | Accommodation and Food Services                                          | 812011     | BBG000BCMWM1 | 
| 1321 | NYSE:MTOR     | Meritor Inc                                            | Manufacturing                                                            | 1113256    | BBG000BH92D1 | 
| 1322 | NYSE:MTRN     | Materion Corp                                          | Manufacturing                                                            | 1104657    | BBG000BDTT76 | 
| 1323 | NYSE:MTZ      | Mastec Inc.                                            | Construction                                                             | 15615      | BBG000DYXD23 | 
| 1324 | NYSE:MUR      | Murphy Oil Corp.                                       | Manufacturing                                                            | 717423     | BBG000BPMH90 | 
| 1325 | NYSE:MXL      | MaxLinear Inc                                          | Manufacturing                                                            | 1288469    | BBG000BB6R33 | 
| 1326 | NYSE:MYE      | Myers Industries Inc.                                  | Manufacturing                                                            | 69488      | BBG000BPQ0F6 | 
| 1327 | NYSE:NAT      | Nordic American Tankers Ltd                            | Transportation and Warehousing                                           | 1000177    | BBG000JK57G6 | 
| 1328 | NYSE:NAV      | Navistar International Corp.                           | Manufacturing                                                            | 808450     | BBG000BPS2V2 | 
| 1329 | NYSE:NBR      | Nabors Industries Ltd                                  | Mining, Quarrying, and Oil and Gas Extraction                            | 1163739    | BBG000BZTW70 | 
| 1330 | NYSE:NCLH     | Norwegian Cruise Line Holdings Ltd                     | Transportation and Warehousing                                           | 1513761    | BBG000BSRN78 | 
| 1331 | NYSE:NCR      | NCR Corp.                                              | Manufacturing                                                            | 70866      | BBG000BMXK89 | 
| 1332 | NYSE:NE       | Noble Corporation plc                                  | Industrial Services                                                      | 1458891    | BBG000DTMH63 | 
| 1333 | NYSE:NEE      | NextEra Energy Inc                                     | Utilities                                                                | 753308     | BBG000BJSBJ0 | 
| 1334 | NYSE:NEM      | Newmont Corp                                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1164727    | BBG000BPWXK1 | 
| 1335 | NYSE:NET      | Cloudflare Inc - Class A                               | Manufacturing                                                            | 0001477333 | BBG001WMKHH5 | 
| 1336 | NYSE:NEWR     | New Relic Inc                                          | Information                                                              | 1448056    | BBG001NFKJ68 | 
| 1337 | NYSE:NFG      | National Fuel Gas Co.                                  | Utilities                                                                | 70145      | BBG000BPYD87 | 
| 1338 | NYSE:NI       | Nisource Inc. (Holding Co.)                            | Utilities                                                                | 1111711    | BBG000BPZBB6 | 
| 1339 | NYSE:NINE     | Nine Energy Service Inc                                | Mining, Quarrying, and Oil and Gas Extraction                            | 1532286    | BBG004M28MF9 | 
| 1340 | NYSE:NKE      | Nike, Inc. - Class B                                   | Manufacturing                                                            | 320187     | BBG000C5HS04 | 
| 1341 | NYSE:NLSN     | Nielsen Holdings Plc                                   | Commercial Services                                                      | 1492633    | BBG0088CYPX8 | 
| 1342 | NYSE:NOC      | Northrop Grumman Corp.                                 | Manufacturing                                                            | 1133421    | BBG000BQ2C28 | 
| 1343 | NYSE:NOV      | NOV Inc                                                | Manufacturing                                                            | 1021860    | BBG000BJX8C8 | 
| 1344 | NYSE:NOVA     | Sunnova Energy International Inc                       | Utilities                                                                | 1772695    | BBG00PLQ1JR1 | 
| 1345 | NYSE:NOW      | ServiceNow Inc                                         | Information                                                              | 1373715    | BBG000M1R011 | 
| 1346 | NYSE:NPO      | EnPro Industries Inc                                   | Manufacturing                                                            | 1164863    | BBG000BW2FF4 | 
| 1347 | NYSE:NRG      | NRG Energy Inc.                                        | Utilities                                                                | 1013871    | BBG000D8RG11 | 
| 1348 | NYSE:NSC      | Norfolk Southern Corp.                                 | Transportation and Warehousing                                           | 702165     | BBG000BQ5DS5 | 
| 1349 | NYSE:NTR      | Nutrien Ltd                                            | Wholesale Trade                                                          | 1725964    | BBG00JM9XLN6 | 
| 1350 | NYSE:NUE      | Nucor Corp.                                            | Manufacturing                                                            | 73309      | BBG000BQ8KV2 | 
| 1351 | NYSE:NUS      | Nu Skin Enterprises, Inc. - Class A                    | Manufacturing                                                            | 1021561    | BBG000HG21Y3 | 
| 1352 | NYSE:NVR      | NVR Inc.                                               | Construction                                                             | 906163     | BBG000BQBYR3 | 
| 1353 | NYSE:NVRO     | Nevro Corp                                             | Manufacturing                                                            | 1444380    | BBG001K61W36 | 
| 1354 | NYSE:NVST     | Envista Holdings Corp                                  | Manufacturing                                                            | 0001757073 | BBG00LN4B5N0 | 
| 1355 | NYSE:NVT      | nVent Electric plc                                     | Manufacturing                                                            | 1720635    | BBG00GNT7999 | 
| 1356 | NYSE:NVTA     | Invitae Corp                                           | Health Care and Social Assistance                                        | 1501134    | BBG005DJFD43 | 
| 1357 | NYSE:NX       | Quanex Building Products Corp                          | Construction                                                             | 1423221    | BBG000TXVLZ6 | 
| 1358 | NYSE:NYCB     | New York Community Bancorp Inc.                        | Finance and Insurance                                                    | 910073     | BBG000BVXPZ8 | 
| 1359 | NYSE:NYT      | New York Times Co. - Class A                           | Information                                                              | 71691      | BBG000FFC0B3 | 
| 1360 | NYSE:OC       | Owens Corning                                          | Manufacturing                                                            | 1370946    | BBG000M44VW8 | 
| 1361 | NYSE:OCN      | Ocwen Financial Corp.                                  | Finance and Insurance                                                    | 873860     | BBG000BPYHJ6 | 
| 1362 | NYSE:OEC      | Orion Engineered Carbons S.A.                          | Manufacturing                                                            | 1609804    | BBG006MC4LP7 | 
| 1363 | NYSE:OGE      | Oge Energy Corp.                                       | Utilities                                                                | 1021635    | BBG000BQGLS5 | 
| 1364 | NYSE:OI       | O-I Glass Inc                                          | Process Industries                                                       | 812074     | BBG00R2JZG39 | 
| 1365 | NYSE:OII      | Oceaneering International, Inc.                        | Mining, Quarrying, and Oil and Gas Extraction                            | 73756      | BBG000CPBCL8 | 
| 1366 | NYSE:OIS      | Oil States International, Inc.                         | Manufacturing                                                            | 1121484    | BBG000BDDN94 | 
| 1367 | NYSE:OI~1     | O-I Glass Inc                                          | Manufacturing                                                            | 0000812233 | BBG000CNWNL6 | 
| 1368 | NYSE:OKE      | Oneok Inc.                                             | Transportation and Warehousing                                           | 1039684    | BBG000BQHGR6 | 
| 1369 | NYSE:OLN      | Olin Corp.                                             | Wholesale Trade                                                          | 74303      | BBG000BQHTV3 | 
| 1370 | NYSE:OMC      | Omnicom Group, Inc.                                    | Professional, Scientific, and Technical Services                         | 29989      | BBG000BS9489 | 
| 1371 | NYSE:OMF      | OneMain Holdings Inc                                   | Finance and Insurance                                                    | 1584207    | BBG005497GZ3 | 
| 1372 | NYSE:ONTO     | Onto Innovation Inc.                                   | Manufacturing                                                            | 0000704532 | BBG000BPRN29 | 
| 1373 | NYSE:ORA      | Ormat Technologies Inc                                 | Utilities                                                                | 1296445    | BBG000Q5BQ63 | 
| 1374 | NYSE:ORCL     | Oracle Corp.                                           | Information                                                              | 1341439    | BBG000BQLTW7 | 
| 1375 | NYSE:OSK      | Oshkosh Corp                                           | Manufacturing                                                            | 775158     | BBG000CC53X1 | 
| 1376 | NYSE:OVV      | Ovintiv Inc                                            | Mining, Quarrying, and Oil and Gas Extraction                            | 0001792580 | BBG00R2NHQ65 | 
| 1377 | NYSE:OXY      | Occidental Petroleum Corp.                             | Mining, Quarrying, and Oil and Gas Extraction                            | 797468     | BBG000BQQ2S6 | 
| 1378 | NYSE:PAG      | Penske Automotive Group Inc                            | Retail Trade                                                             | 1019849    | BBG000H6K1B0 | 
| 1379 | NYSE:PAGS     | PagSeguro Digital Ltd - Class A                        | Information                                                              | 1712807    | BBG00JM7QBR6 | 
| 1380 | NYSE:PAR      | Par Technology Corp.                                   | Manufacturing                                                            | 708821     | BBG000BRP9K8 | 
| 1381 | NYSE:PAYC     | Paycom Software Inc                                    | Information                                                              | 1590955    | BBG0064N0ZZ5 | 
| 1382 | NYSE:PBF      | PBF Energy Inc - Class A                               | Manufacturing                                                            | 1534504    | BBG002832GV8 | 
| 1383 | NYSE:PBH      | Prestige Consumer Healthcare Inc                       | Manufacturing                                                            | 1295947    | BBG000QM0RZ4 | 
| 1384 | NYSE:PBI      | Pitney Bowes, Inc.                                     | Professional, Scientific, and Technical Services                         | 78814      | BBG000BQTMJ9 | 
| 1385 | NYSE:PCG      | PG&E Corp.                                             | Utilities                                                                | 1004980    | BBG000BQWPC5 | 
| 1386 | NYSE:PDS      | Precision Drilling Corp                                | Mining, Quarrying, and Oil and Gas Extraction                            | 1013605    | BBG000BBK2X9 | 
| 1387 | NYSE:PE       | Parsley Energy Inc - Class A                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1594466    | BBG006BFYZP8 | 
| 1388 | NYSE:PEG      | Public Service Enterprise Group Inc.                   | Utilities                                                                | 788784     | BBG000BQZMH4 | 
| 1389 | NYSE:PEN      | Penumbra Inc                                           | Manufacturing                                                            | 1321732    | BBG001BP92V1 | 
| 1390 | NYSE:PFE      | Pfizer Inc.                                            | Manufacturing                                                            | 78003      | BBG000BR2B91 | 
| 1391 | NYSE:PG       | Procter & Gamble Co.                                   | Manufacturing                                                            | 80424      | BBG000BR2TH3 | 
| 1392 | NYSE:PGR      | Progressive Corp.                                      | Finance and Insurance                                                    | 80661      | BBG000BR37X2 | 
| 1393 | NYSE:PGTI     | PGT Innovations Inc                                    | Manufacturing                                                            | 1354327    | BBG000FX3Y66 | 
| 1394 | NYSE:PH       | Parker-Hannifin Corp.                                  | Manufacturing                                                            | 76334      | BBG000BR3KL6 | 
| 1395 | NYSE:PHM      | PulteGroup Inc                                         | Construction                                                             | 822416     | BBG000BR54L0 | 
| 1396 | NYSE:PII      | Polaris Inc                                            | Manufacturing                                                            | 931015     | BBG000D5S4M0 | 
| 1397 | NYSE:PING     | Ping Identity Holding Corp                             | Information                                                              | 0001679826 | BBG00Q3GDB13 | 
| 1398 | NYSE:PINS     | Pinterest Inc - Class A                                |                                                                          | 1506293    | BBG002583CV8 | 
| 1399 | NYSE:PIR      | Pier 1 Imports, Inc.                                   | Consumer Services                                                        |            | BBG000BR7JQ0 | 
| 1400 | NYSE:PKG      | Packaging Corp Of America                              | Manufacturing                                                            | 75677      | BBG000BB8SW7 | 
| 1401 | NYSE:PKI      | Perkinelmer, Inc.                                      | Manufacturing                                                            | 31791      | BBG000FXW512 | 
| 1402 | NYSE:PLAN     | Anaplan Inc                                            | Information                                                              | 1540755    | BBG002DZS299 | 
| 1403 | NYSE:PLNT     | Planet Fitness Inc - Class A                           | Arts, Entertainment, and Recreation                                      | 1637207    | BBG009H04M17 | 
| 1404 | NYSE:PLOW     | Douglas Dynamics Inc                                   | Manufacturing                                                            | 1287213    | BBG000Q90C31 | 
| 1405 | NYSE:PM       | Philip Morris International Inc                        | Manufacturing                                                            | 1413329    | BBG000J2XL74 | 
| 1406 | NYSE:PNC      | PNC Financial Services Group                           | Finance and Insurance                                                    | 713676     | BBG000BRD0D8 | 
| 1407 | NYSE:PNM      | PNM Resources Inc                                      | Utilities                                                                | 1108426    | BBG000BRDFF3 | 
| 1408 | NYSE:PNR      | Pentair plc                                            | Manufacturing                                                            | 77360      | BBG000C221G9 | 
| 1409 | NYSE:PNW      | Pinnacle West Capital Corp.                            | Utilities                                                                | 764622     | BBG000BRDSX5 | 
| 1410 | NYSE:POLY     | Plantronics, Inc.                                      | Manufacturing                                                            | 914025     | BBG000BH9955 | 
| 1411 | NYSE:POST     | Post Holdings Inc                                      | Manufacturing                                                            | 1530950    | BBG001WTBC36 | 
| 1412 | NYSE:PPG      | PPG Industries, Inc.                                   | Manufacturing                                                            | 79879      | BBG000BRJ809 | 
| 1413 | NYSE:PPL      | PPL Corp                                               | Utilities                                                                | 922224     | BBG000BRJL00 | 
| 1414 | NYSE:PRGO     | Perrigo Company plc                                    | Manufacturing                                                            | 1585364    | BBG000CNFQW6 | 
| 1415 | NYSE:PRLB     | Proto Labs Inc                                         | Professional, Scientific, and Technical Services                         | 1443669    | BBG000BT13B3 | 
| 1416 | NYSE:PRSP     | Perspecta Inc                                          | Information                                                              | 1724670    | BBG00KMXKWF9 | 
| 1417 | NYSE:PRTY     | Party City Holdco Inc                                  | Retail Trade                                                             | 1592058    | BBG005WX31L1 | 
| 1418 | NYSE:PRU      | Prudential Financial Inc.                              | Finance and Insurance                                                    | 1137774    | BBG000HCJMF9 | 
| 1419 | NYSE:PSTG     | Pure Storage Inc - Class A                             | Manufacturing                                                            | 1474432    | BBG00212PVZ5 | 
| 1420 | NYSE:PSX      | Phillips 66                                            | Manufacturing                                                            | 1534701    | BBG00286S4N9 | 
| 1421 | NYSE:PVG      | Pretium Resources Inc                                  | Mining, Quarrying, and Oil and Gas Extraction                            | 1508844    | BBG001DM5W62 | 
| 1422 | NYSE:PVH      | PVH Corp                                               | Manufacturing                                                            | 78239      | BBG000BRRG02 | 
| 1423 | NYSE:PVTL     | Pivotal Software, Inc.                                 | Technology                                                               |            | BBG00BQZBV26 | 
| 1424 | NYSE:PWR      | Quanta Services, Inc.                                  | Construction                                                             | 1050915    | BBG000BBL8V7 | 
| 1425 | NYSE:PXD      | Pioneer Natural Resources Co.                          | Mining, Quarrying, and Oil and Gas Extraction                            | 1038357    | BBG000BXRPH1 | 
| 1426 | NYSE:PYX      | Pyxus International Inc.                               | Consumer Non-Durables                                                    | 939930     | BBG000BV0800 | 
| 1427 | NYSE:QEP      | QEP Resources Inc                                      | Mining, Quarrying, and Oil and Gas Extraction                            | 1108827    | BBG000BLCL55 | 
| 1428 | NYSE:QGEN     | Qiagen NV                                              | Manufacturing                                                            | 1015820    | BBG000GTYWL7 | 
| 1429 | NYSE:QSR      | Restaurant Brands International Inc                    | Accommodation and Food Services                                          | 1618756    | BBG0076WG2V1 | 
| 1430 | NYSE:QTWO     | Q2 Holdings Inc                                        | Information                                                              | 1410384    | BBG005ZVK9P2 | 
| 1431 | NYSE:R        | Ryder System, Inc.                                     | Real Estate and Rental and Leasing                                       | 85961      | BBG000BRVP70 | 
| 1432 | NYSE:RACE     | Ferrari N.V.                                           | Manufacturing                                                            | 1648416    | BBG009PH3Q86 | 
| 1433 | NYSE:RAD      | Rite Aid Corp.                                         | Retail Trade                                                             | 84129      | BBG000BRWGG9 | 
| 1434 | NYSE:RAMP     | LiveRamp Holdings Inc                                  | Information                                                              | 733269     | BBG000BB4HM6 | 
| 1435 | NYSE:RCL      | Royal Caribbean Group                                  | Transportation and Warehousing                                           | 884887     | BBG000BB5792 | 
| 1436 | NYSE:RDN      | Radian Group, Inc.                                     | Finance and Insurance                                                    | 890926     | BBG000BMWV95 | 
| 1437 | NYSE:RE       | Everest Re Group Ltd                                   | Finance and Insurance                                                    | 1095073    | BBG000C1XVK6 | 
| 1438 | NYSE:RF       | Regions Financial Corp.                                | Finance and Insurance                                                    | 1281761    | BBG000Q3JN03 | 
| 1439 | NYSE:RFP      | Resolute Forest Products Inc                           | Manufacturing                                                            | 1393066    | BBG001B585N8 | 
| 1440 | NYSE:RH       | RH - Class A                                           | Retail Trade                                                             | 1528849    | BBG002293PJ4 | 
| 1441 | NYSE:RHI      | Robert Half International Inc.                         | Professional, Scientific, and Technical Services                         | 315213     | BBG000BS5DR2 | 
| 1442 | NYSE:RIG      | Transocean Ltd                                         | Mining, Quarrying, and Oil and Gas Extraction                            | 1451505    | BBG000BH5LT6 | 
| 1443 | NYSE:RJF      | Raymond James Financial, Inc.                          | Finance and Insurance                                                    | 720005     | BBG000BS73J1 | 
| 1444 | NYSE:RL       | Ralph Lauren Corp - Class A                            | Wholesale Trade                                                          | 1037038    | BBG000BS0ZF1 | 
| 1445 | NYSE:RLGY     | Realogy Holdings Corp                                  | Real Estate and Rental and Leasing                                       | 1398987    | BBG000QN4GY3 | 
| 1446 | NYSE:RMD      | Resmed Inc.                                            | Manufacturing                                                            | 943819     | BBG000L4M7F1 | 
| 1447 | NYSE:RMO      | Romeo Power Inc - Class A                              | Manufacturing                                                            | 1757932    | BBG00NQ6RNF1 | 
| 1448 | NYSE:RNG      | RingCentral Inc. - Class A                             | Information                                                              | 1384905    | BBG000J094P3 | 
| 1449 | NYSE:RNR      | RenaissanceRe Holdings Ltd                             | Finance and Insurance                                                    | 913144     | BBG000BFVZ83 | 
| 1450 | NYSE:ROG      | Rogers Corp.                                           | Manufacturing                                                            | 84748      | BBG000BS9HN3 | 
| 1451 | NYSE:ROK      | Rockwell Automation Inc                                | Manufacturing                                                            | 1024478    | BBG000BBCDZ2 | 
| 1452 | NYSE:ROL      | Rollins, Inc.                                          | Administrative and Support and Waste Management and Remediation Services | 84839      | BBG000BSBBP1 | 
| 1453 | NYSE:ROP      | Roper Technologies Inc                                 | Manufacturing                                                            | 882835     | BBG000F1ZSN5 | 
| 1454 | NYSE:RPM      | RPM International, Inc.                                | Manufacturing                                                            | 110621     | BBG000DCNK80 | 
| 1455 | NYSE:RRC      | Range Resources Corp                                   | Mining, Quarrying, and Oil and Gas Extraction                            | 315852     | BBG000FVXD63 | 
| 1456 | NYSE:RRD      | R.R. Donnelley & Sons Co.                              | Manufacturing                                                            | 29669      | BBG000BH93Y6 | 
| 1457 | NYSE:RRX      | Regal Rexnord Corp                                     | Manufacturing                                                            | 82811      | BBG000BRXTR8 | 
| 1458 | NYSE:RS       | Reliance Steel & Aluminum Co.                          | Manufacturing                                                            | 861884     | BBG000CJ2181 | 
| 1459 | NYSE:RSG      | Republic Services, Inc.                                | Administrative and Support and Waste Management and Remediation Services | 1060391    | BBG000BPXVJ6 | 
| 1460 | NYSE:RTN      | Raytheon Company                                       | Capital Goods                                                            |            | BBG000BSD7C2 | 
| 1461 | NYSE:RTX      | Raytheon Technologies Corporation                      | Manufacturing                                                            | 0000101829 | BBG000BW8S60 | 
| 1462 | NYSE:RVLV     | Revolve Group Inc - Class A                            | Retail Trade                                                             | 1746618    | BBG00M4RHBD0 | 
| 1463 | NYSE:RY       | Royal Bank Of Canada                                   | Finance and Insurance                                                    | 1000275    | BBG000BSSC44 | 
| 1464 | NYSE:RYAM     | Rayonier Advanced Materials Inc                        | Manufacturing                                                            | 1597672    | BBG005XVML66 | 
| 1465 | NYSE:S        | Sprint Corporation                                     | Public Utilities                                                         |            | BBG004S5X3Y9 | 
| 1466 | NYSE:SAIL     | SailPoint Technologies Holdings Inc                    | Information                                                              | 1627857    | BBG00J0BBZL0 | 
| 1467 | NYSE:SAM      | Boston Beer Co., Inc. - Class A                        | Manufacturing                                                            | 949870     | BBG000BCZBF1 | 
| 1468 | NYSE:SAVE     | Spirit Airlines Inc                                    | Transportation and Warehousing                                           | 1498710    | BBG000BF6RQ9 | 
| 1469 | NYSE:SBH      | Sally Beauty Holdings Inc                              | Retail Trade                                                             | 1368458    | BBG000LR8515 | 
| 1470 | NYSE:SBOW     | SilverBow Resources Inc                                | Mining, Quarrying, and Oil and Gas Extraction                            | 351817     | BBG00CTNNZ26 | 
| 1471 | NYSE:SCCO     | Southern Copper Corporation                            | Mining, Quarrying, and Oil and Gas Extraction                            | 1001838    | BBG000BSHH72 | 
| 1472 | NYSE:SCL      | Stepan Co.                                             | Manufacturing                                                            | 94049      | BBG000BSMFN2 | 
| 1473 | NYSE:SCU      | Sculptor Capital Management Inc - Class A              | Finance and Insurance                                                    | 1403256    | BBG000N08GQ1 | 
| 1474 | NYSE:SD       | Sandridge Energy Inc New                               | Mining, Quarrying, and Oil and Gas Extraction                            | 1349436    | BBG000RKR4R8 | 
| 1475 | NYSE:SDRL     | Seadrill Ltd.                                          | Industrial Services                                                      | 1737706    | BBG00LBLD3F7 | 
| 1476 | NYSE:SEAS     | SeaWorld Entertainment Inc                             | Arts, Entertainment, and Recreation                                      | 1564902    | BBG003RY97K2 | 
| 1477 | NYSE:SEE      | Sealed Air Corp.                                       | Manufacturing                                                            | 1012100    | BBG000C22QV7 | 
| 1478 | NYSE:SEM      | Select Medical Holdings Corporation                    | Health Care and Social Assistance                                        | 1320414    | BBG000QCHMH9 | 
| 1479 | NYSE:SFBS     | ServisFirst Bancshares Inc                             | Finance and Insurance                                                    | 1430723    | BBG000FB8PF8 | 
| 1480 | NYSE:SFL      | SFL Corporation Ltd                                    | Transportation and Warehousing                                           | 1289877    | BBG000BW22R0 | 
| 1481 | NYSE:SHAK     | Shake Shack Inc - Class A                              | Accommodation and Food Services                                          | 1620533    | BBG0063GCHH8 | 
| 1482 | NYSE:SHOP     | Shopify Inc - Class A                                  | Information                                                              | 1594805    | BBG008HBD923 | 
| 1483 | NYSE:SHW      | Sherwin-Williams Co.                                   | Manufacturing                                                            | 89800      | BBG000BSXQV7 | 
| 1484 | NYSE:SI       | Silvergate Capital Corp - Class A                      | Finance and Insurance                                                    | 1135644    | BBG00MMM95S7 | 
| 1485 | NYSE:SIG      | Signet Jewelers Ltd                                    | Retail Trade                                                             | 832988     | BBG000C4ZZ10 | 
| 1486 | NYSE:SIX      | Six Flags Entertainment Corp                           | Arts, Entertainment, and Recreation                                      | 701374     | BBG000F4W0M4 | 
| 1487 | NYSE:SJI      | South Jersey Industries Inc.                           | Utilities                                                                | 91928      | BBG000BT0T72 | 
| 1488 | NYSE:SJM      | J.M. Smucker Co.                                       | Manufacturing                                                            | 91419      | BBG000BT1715 | 
| 1489 | NYSE:SJR      | Shaw Communications Inc. - Class B                     | Information                                                              | 932872     | BBG000BBP6J1 | 
| 1490 | NYSE:SKX      | Skechers U S A, Inc. - Class A                         | Wholesale Trade                                                          | 1065837    | BBG000C4HKK2 | 
| 1491 | NYSE:SLB      | Schlumberger Ltd.                                      | Mining, Quarrying, and Oil and Gas Extraction                            | 87347      | BBG000BT41Q8 | 
| 1492 | NYSE:SLCA     | U.S. Silica Holdings Inc                               | Mining, Quarrying, and Oil and Gas Extraction                            | 1524741    | BBG001XJRMF5 | 
| 1493 | NYSE:SM       | SM Energy Co                                           | Mining, Quarrying, and Oil and Gas Extraction                            | 893538     | BBG000BFV115 | 
| 1494 | NYSE:SMAR     | Smartsheet Inc - Class A                               | Information                                                              | 1366561    | BBG00GQK3WB5 | 
| 1495 | NYSE:SMG      | Scotts Miracle-Gro Company - Class A                   | Administrative and Support and Waste Management and Remediation Services | 825542     | BBG000BT5PG5 | 
| 1496 | NYSE:SMP      | Standard Motor Products, Inc.                          | Manufacturing                                                            | 93389      | BBG000BT68C6 | 
| 1497 | NYSE:SNA      | Snap-on, Inc.                                          | Other Services (except Public Administration)                            | 91440      | BBG000BT7JW9 | 
| 1498 | NYSE:SNAP     | Snap Inc - Class A                                     | Information                                                              | 1564408    | BBG00441QMJ7 | 
| 1499 | NYSE:SNV      | Synovus Financial Corp.                                | Finance and Insurance                                                    | 18349      | BBG000BLNZL4 | 
| 1500 | NYSE:SO       | Southern Company                                       | Utilities                                                                | 92122      | BBG000BT9DW0 | 
| 1501 | NYSE:SON      | Sonoco Products Co.                                    | Manufacturing                                                            | 91767      | BBG000D7HF89 | 
| 1502 | NYSE:SPCE     | Virgin Galactic Holdings Inc - Class A                 | Manufacturing                                                            | 0001706946 | BBG00HTN2CQ3 | 
| 1503 | NYSE:SPGI     | S&P Global Inc                                         | Finance and Insurance                                                    | 64040      | BBG000BP1Q11 | 
| 1504 | NYSE:SPN      | Superior Energy Services Inc.                          | Industrial Services                                                      | 886835     | BBG000FBMY72 | 
| 1505 | NYSE:SPOT     | Spotify Technology S.A.                                | Information                                                              | 1639920    | BBG003T4VFC2 | 
| 1506 | NYSE:SPR      | Spirit Aerosystems Holdings Inc - Class A              | Manufacturing                                                            | 1364885    | BBG000PRJ2Z9 | 
| 1507 | NYSE:SQ       | Square Inc - Class A                                   | Information                                                              | 1512673    | BBG0018SLC07 | 
| 1508 | NYSE:SRE      | Sempra Energy                                          | Utilities                                                                | 1032208    | BBG000C2ZCH8 | 
| 1509 | NYSE:ST       | Sensata Technologies Holding Plc                       | Manufacturing                                                            | 1477294    | BBG00JPGYW43 | 
| 1510 | NYSE:STC      | Stewart Information Services Corp.                     | Finance and Insurance                                                    | 94344      | BBG000D6YCQ9 | 
| 1511 | NYSE:STE      | Steris Plc                                             | Manufacturing                                                            | 1757898    | BBG00MRHG523 | 
| 1512 | NYSE:STI      | SunTrust Banks, Inc.                                   | Finance                                                                  |            | BBG000BTKGG8 | 
| 1513 | NYSE:STLA     | Stellantis N.V                                         | Manufacturing                                                            | 1605484    | BBG0078ZLDG9 | 
| 1514 | NYSE:STT      | State Street Corp.                                     | Finance and Insurance                                                    | 93751      | BBG000BKFBD7 | 
| 1515 | NYSE:STZ      | Constellation Brands Inc - Class A                     | Manufacturing                                                            | 16918      | BBG000J1QLT0 | 
| 1516 | NYSE:SU       | Suncor Energy, Inc.                                    | Manufacturing                                                            | 311337     | BBG000BRK7L6 | 
| 1517 | NYSE:SWK      | Stanley Black & Decker Inc                             | Manufacturing                                                            | 93556      | BBG000BTQR96 | 
| 1518 | NYSE:SWM      | Schweitzer-Mauduit International, Inc.                 | Manufacturing                                                            | 1000623    | BBG000C3CWZ7 | 
| 1519 | NYSE:SWN      | Southwestern Energy Company                            | Mining, Quarrying, and Oil and Gas Extraction                            | 7332       | BBG000BTR593 | 
| 1520 | NYSE:SYF      | Synchrony Financial                                    | Finance and Insurance                                                    | 1601712    | BBG00658F3P3 | 
| 1521 | NYSE:SYK      | Stryker Corp.                                          | Manufacturing                                                            | 310764     | BBG000DN7P92 | 
| 1522 | NYSE:SYY      | Sysco Corp.                                            | Retail Trade                                                             | 96021      | BBG000BTVJ25 | 
| 1523 | NYSE:T        | AT&T, Inc.                                             | Information                                                              | 732717     | BBG000BSJK37 | 
| 1524 | NYSE:TAP      | Molson Coors Beverage Company - Class B                | Manufacturing                                                            | 24545      | BBG000BS7KS3 | 
| 1525 | NYSE:TCS      | Container Store Group Inc                              | Retail Trade                                                             | 1411688    | BBG005CHSS32 | 
| 1526 | NYSE:TD       | Toronto Dominion Bank                                  | Finance and Insurance                                                    | 947263     | BBG000BXBHJ4 | 
| 1527 | NYSE:TDC      | Teradata Corp                                          | Manufacturing                                                            | 816761     | BBG000R0L5J4 | 
| 1528 | NYSE:TDG      | Transdigm Group Incorporated                           | Manufacturing                                                            | 1260221    | BBG000L8CBX4 | 
| 1529 | NYSE:TDOC     | Teladoc Health Inc                                     | Health Care and Social Assistance                                        | 1477449    | BBG0019T5SG0 | 
| 1530 | NYSE:TDW      | Tidewater Inc. - New                                   | Transportation and Warehousing                                           | 98222      | BBG00HBQ35R8 | 
| 1531 | NYSE:TDY      | Teledyne Technologies Inc                              | Manufacturing                                                            | 1094285    | BBG000BMT9T6 | 
| 1532 | NYSE:TECK     | Teck Resources Ltd - Class B                           | Mining, Quarrying, and Oil and Gas Extraction                            | 886986     | BBG000BSJTT0 | 
| 1533 | NYSE:TEL      | TE Connectivity Ltd - Registered Shares                | Manufacturing                                                            | 1385157    | BBG000RGM5P1 | 
| 1534 | NYSE:TEX      | Terex Corp.                                            | Manufacturing                                                            | 97216      | BBG000C7B436 | 
| 1535 | NYSE:TFC      | Truist Financial Corporation                           | Finance and Insurance                                                    | 0000092230 | BBG000BYYLS8 | 
| 1536 | NYSE:TFX      | Teleflex Incorporated                                  | Manufacturing                                                            | 96943      | BBG000BV59Y6 | 
| 1537 | NYSE:TGE      | Tallgrass Energy, LP                                   | Public Utilities                                                         |            | BBG0086BLKY6 | 
| 1538 | NYSE:TGH      | Textainer Group Holdings Limited                       | Real Estate and Rental and Leasing                                       | 1413159    | BBG000TG66M8 | 
| 1539 | NYSE:TGNA     | TEGNA Inc                                              | Information                                                              | 39899      | BBG000BK5DP1 | 
| 1540 | NYSE:TGT      | Target Corp                                            | Retail Trade                                                             | 27419      | BBG000H8TVT2 | 
| 1541 | NYSE:THC      | Tenet Healthcare Corp.                                 | Health Care and Social Assistance                                        | 70318      | BBG000CPHYL4 | 
| 1542 | NYSE:THO      | Thor Industries, Inc.                                  | Manufacturing                                                            | 730263     | BBG000BV6R84 | 
| 1543 | NYSE:THS      | Treehouse Foods Inc                                    | Manufacturing                                                            | 1320695    | BBG000GQGJT4 | 
| 1544 | NYSE:TIF      | Tiffany & Co.                                          | Retail Trade                                                             | 98246      | BBG000BV75B7 | 
| 1545 | NYSE:TJX      | TJX Companies, Inc.                                    | Retail Trade                                                             | 109198     | BBG000BV8DN6 | 
| 1546 | NYSE:TKR      | Timken Co.                                             | Manufacturing                                                            | 98362      | BBG000BV95H9 | 
| 1547 | NYSE:TLRD     | Tailored Brands Inc.                                   | Retail Trade                                                             | 884217     | BBG00C0B4TP3 | 
| 1548 | NYSE:TLYS     | Tillys Inc - Class A                                   | Retail Trade                                                             | 1524025    | BBG001VGVJF5 | 
| 1549 | NYSE:TMHC     | Taylor Morrison Home Corp.                             | Construction                                                             | 1562476    | BBG003PGJHP5 | 
| 1550 | NYSE:TMO      | Thermo Fisher Scientific Inc.                          | Professional, Scientific, and Technical Services                         | 97745      | BBG000BVDLH9 | 
| 1551 | NYSE:TMX      | Terminix Global Holdings Inc                           | Professional, Scientific, and Technical Services                         | 1428875    | BBG002WMH2F2 | 
| 1552 | NYSE:TNL      | Travel+Leisure Co                                      | Administrative and Support and Waste Management and Remediation Services | 1361658    | BBG000PV2L86 | 
| 1553 | NYSE:TOL      | Toll Brothers Inc.                                     | Construction                                                             | 794170     | BBG000BVHBM1 | 
| 1554 | NYSE:TPH      | Tri Pointe Homes Inc.                                  | Construction                                                             | 1561680    | BBG0016YQTR5 | 
| 1555 | NYSE:TPR      | Tapestry Inc                                           | Manufacturing                                                            | 1116132    | BBG000BY29C7 | 
| 1556 | NYSE:TPX      | Tempur Sealy International Inc                         | Manufacturing                                                            | 1206264    | BBG000PXGT62 | 
| 1557 | NYSE:TREX     | TREX Co., Inc.                                         | Manufacturing                                                            | 1069878    | BBG000BTGKK9 | 
| 1558 | NYSE:TRGP     | Targa Resources Corp                                   | Transportation and Warehousing                                           | 1389170    | BBG0015XMW40 | 
| 1559 | NYSE:TRI      | Thomson-Reuters Corp                                   | Finance and Insurance                                                    | 1075124    | BBG000BBS9F6 | 
| 1560 | NYSE:TRN      | Trinity Industries, Inc.                               | Manufacturing                                                            | 99780      | BBG000BVL2G3 | 
| 1561 | NYSE:TRP      | TC Energy Corporation                                  | Transportation and Warehousing                                           | 1232384    | BBG000BVN235 | 
| 1562 | NYSE:TRQ      | Turquoise Hill Resources Ltd                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1158041    | BBG000NSHMZ7 | 
| 1563 | NYSE:TRTN     | Triton International Ltd                               | Real Estate and Rental and Leasing                                       | 1660734    | BBG00BS054W5 | 
| 1564 | NYSE:TRU      | TransUnion                                             | Administrative and Support and Waste Management and Remediation Services | 1552033    | BBG002Q7J5Z1 | 
| 1565 | NYSE:TRV      | Travelers Companies Inc.                               | Finance and Insurance                                                    | 86312      | BBG000BJ81C1 | 
| 1566 | NYSE:TSN      | Tyson Foods, Inc. - Class A                            | Manufacturing                                                            | 100493     | BBG000DKCC19 | 
| 1567 | NYSE:TT       | Trane Technologies plc - Class A                       | Manufacturing                                                            | 836102     | BBG000BM6788 | 
| 1568 | NYSE:TTI      | Tetra Technologies, Inc.                               | Mining, Quarrying, and Oil and Gas Extraction                            | 844965     | BBG000BVRQD7 | 
| 1569 | NYSE:TUFN     | Tufin Software Technologies Ltd                        | Information                                                              | 1757399    | BBG00G9DV0R2 | 
| 1570 | NYSE:TUP      | Tupperware Brands Corporation                          | Manufacturing                                                            | 1008654    | BBG000GQ1G25 | 
| 1571 | NYSE:TWLO     | Twilio Inc Class A                                     | Information                                                              | 1447669    | BBG0029ZX840 | 
| 1572 | NYSE:TWTR     | Twitter Inc                                            | Information                                                              | 1418091    | BBG000H6HNW3 | 
| 1573 | NYSE:TXT      | Textron Inc.                                           | Manufacturing                                                            | 217346     | BBG000BVVQQ8 | 
| 1574 | NYSE:TYL      | Tyler Technologies, Inc.                               | Information                                                              | 860731     | BBG000BVWZF9 | 
| 1575 | NYSE:UA       | Under Armour Inc - Class C                             | Manufacturing                                                            | 1336917    | BBG009DTD8H2 | 
| 1576 | NYSE:UAA      | Under Armour Inc - Class A                             | Manufacturing                                                            | 1336917    | BBG000BXM6V2 | 
| 1577 | NYSE:UBER     | Uber Technologies Inc                                  | Transportation and Warehousing                                           | 1543151    | BBG002B04MT8 | 
| 1578 | NYSE:UFS      | Domtar Corporation                                     | Manufacturing                                                            | 1381531    | BBG000BHFHP8 | 
| 1579 | NYSE:UGI      | UGI Corp.                                              | Utilities                                                                | 884614     | BBG000BVYN55 | 
| 1580 | NYSE:UHS      | Universal Health Services, Inc. - Class B              | Health Care and Social Assistance                                        | 352915     | BBG000CB8Q50 | 
| 1581 | NYSE:UI       | Ubiquiti Inc                                           | Manufacturing                                                            | 1511737    | BBG001R72SR9 | 
| 1582 | NYSE:UNH      | Unitedhealth Group Inc                                 | Finance and Insurance                                                    | 731766     | BBG000CH5208 | 
| 1583 | NYSE:UNM      | Unum Group                                             | Finance and Insurance                                                    | 5513       | BBG000BW2QX0 | 
| 1584 | NYSE:UNP      | Union Pacific Corp.                                    | Transportation and Warehousing                                           | 100885     | BBG000BW3299 | 
| 1585 | NYSE:UNT      | Unit Corporation                                       | Energy Minerals                                                          | 798949     | BBG000BW4804 | 
| 1586 | NYSE:UPS      | United Parcel Service, Inc. - Class B                  | Transportation and Warehousing                                           | 1090727    | BBG000L9CV04 | 
| 1587 | NYSE:URI      | United Rentals, Inc.                                   | Real Estate and Rental and Leasing                                       | 1067701    | BBG000BXMFC3 | 
| 1588 | NYSE:USB      | U.S. Bancorp.                                          | Finance and Insurance                                                    | 36104      | BBG000FFDM15 | 
| 1589 | NYSE:USFD     | US Foods Holding Corp                                  | Retail Trade                                                             | 1665918    | BBG00C6H6D40 | 
| 1590 | NYSE:USM      | United States Cellular Corporation                     | Information                                                              | 821130     | BBG000BW6P59 | 
| 1591 | NYSE:USPH     | U.S. Physical Therapy, Inc.                            | Health Care and Social Assistance                                        | 885978     | BBG000CSRSG6 | 
| 1592 | NYSE:UVV      | Universal Corp.                                        | Manufacturing                                                            | 102037     | BBG000BW93R1 | 
| 1593 | NYSE:V        | Visa Inc - Class A                                     | Information                                                              | 1403161    | BBG000PSKYX7 | 
| 1594 | NYSE:VAL      | Valaris PLC Class A                                    | Industrial Services                                                      | 314808     | BBG000BJ2VQ6 | 
| 1595 | NYSE:VAR      | Varian Medical Systems, Inc.                           | Manufacturing                                                            | 203527     | BBG000BWBZN1 | 
| 1596 | NYSE:VEEV     | Veeva Systems Inc - Class A                            | Manufacturing                                                            | 1393052    | BBG001CGB489 | 
| 1597 | NYSE:VHC      | Virnetx Holding Corp                                   | Real Estate and Rental and Leasing                                       | 1082324    | BBG000BP25X1 | 
| 1598 | NYSE:VLO      | Valero Energy Corp.                                    | Manufacturing                                                            | 1035002    | BBG000BBGGQ1 | 
| 1599 | NYSE:VMC      | Vulcan Materials Co                                    | Mining, Quarrying, and Oil and Gas Extraction                            | 1396009    | BBG000BWGYF8 | 
| 1600 | NYSE:VMI      | Valmont Industries, Inc.                               | Manufacturing                                                            | 102729     | BBG000BWB7V4 | 
| 1601 | NYSE:VMW      | Vmware Inc. - Class A                                  | Information                                                              | 1124610    | BBG000BC9938 | 
| 1602 | NYSE:VOYA     | Voya Financial Inc                                     | Finance and Insurance                                                    | 1535929    | BBG000BCWKD6 | 
| 1603 | NYSE:VPG      | Vishay Precision Group Inc                             | Manufacturing                                                            | 1487952    | BBG000PRQ0V9 | 
| 1604 | NYSE:VSH      | Vishay Intertechnology, Inc.                           | Manufacturing                                                            | 103730     | BBG000BWKB81 | 
| 1605 | NYSE:VSM      | Versum Materials, Inc.                                 | Basic Industries                                                         |            | BBG00BBHBMF8 | 
| 1606 | NYSE:VST      | Vistra Corp                                            | Utilities                                                                | 0001692819 | BBG00DXDL6Q1 | 
| 1607 | NYSE:VVI      | Viad Corp.                                             | Transportation and Warehousing                                           | 884219     | BBG000D79DL8 | 
| 1608 | NYSE:VVV      | Valvoline Inc                                          | Wholesale Trade                                                          | 1674910    | BBG003DNHV56 | 
| 1609 | NYSE:VZ       | Verizon Communications Inc                             | Information                                                              | 732712     | BBG000HS77T5 | 
| 1610 | NYSE:W        | Wayfair Inc - Class A                                  | Retail Trade                                                             | 1616707    | BBG001B17MV2 | 
| 1611 | NYSE:WAB      | Westinghouse Air Brake Technologies Corp               | Manufacturing                                                            | 943452     | BBG000BDD940 | 
| 1612 | NYSE:WAT      | Waters Corp.                                           | Manufacturing                                                            | 1000697    | BBG000FQRVM3 | 
| 1613 | NYSE:WBC      | WABCO Holdings Inc.                                    | Producer Manufacturing                                                   | 1390844    | BBG000BB6MM3 | 
| 1614 | NYSE:WBT      | Welbilt Inc                                            | Manufacturing                                                            | 1650962    | BBG0081JXTR0 | 
| 1615 | NYSE:WCC      | Wesco International, Inc.                              | Real Estate and Rental and Leasing                                       | 929008     | BBG000D0FNV3 | 
| 1616 | NYSE:WCG      | WellCare Health Plans, Inc.                            | Health Care                                                              |            | BBG000CLVM51 | 
| 1617 | NYSE:WCN      | Waste Connections Inc                                  | Administrative and Support and Waste Management and Remediation Services | 1318220    | BBG000FLHZZ2 | 
| 1618 | NYSE:WEC      | WEC Energy Group Inc                                   | Utilities                                                                | 783325     | BBG000BWP7D9 | 
| 1619 | NYSE:WEX      | WEX Inc                                                | Information                                                              | 1309108    | BBG000BVZP59 | 
| 1620 | NYSE:WFC      | Wells Fargo & Co.                                      | Finance and Insurance                                                    | 72971      | BBG000BWQFY7 | 
| 1621 | NYSE:WGO      | Winnebago Industries, Inc.                             | Manufacturing                                                            | 107687     | BBG000BWS3F3 | 
| 1622 | NYSE:WH       | Wyndham Hotels & Resorts Inc                           | Accommodation and Food Services                                          | 1722684    | BBG00HCY3Q67 | 
| 1623 | NYSE:WHR      | Whirlpool Corp.                                        | Manufacturing                                                            | 106640     | BBG000BWSV34 | 
| 1624 | NYSE:WLH      | William Lyon                                           | Capital Goods                                                            |            | BBG003QD77Y6 | 
| 1625 | NYSE:WLK      | Westlake Chemical Corp                                 | Manufacturing                                                            | 1262823    | BBG000PXZFW2 | 
| 1626 | NYSE:WLL      | Whiting Petroleum Corporation                          | Energy Minerals                                                          | 1255474    | BBG000PX3XC0 | 
| 1627 | NYSE:WM       | Waste Management, Inc.                                 | Administrative and Support and Waste Management and Remediation Services | 823768     | BBG000BWVSR1 | 
| 1628 | NYSE:WMB      | Williams Cos Inc                                       | Transportation and Warehousing                                           | 107263     | BBG000BWVCP8 | 
| 1629 | NYSE:WMT      | Walmart Inc                                            | Retail Trade                                                             | 104169     | BBG000BWXBC2 | 
| 1630 | NYSE:WOLF     | Wolfspeed Inc                                          | Manufacturing                                                            | 895419     | BBG000BG14P4 | 
| 1631 | NYSE:WORK     | Slack Technologies Inc - Class A                       | Information                                                              | 1764925    | BBG007G7V505 | 
| 1632 | NYSE:WPM      | Wheaton Precious Metals Corp                           | Mining, Quarrying, and Oil and Gas Extraction                            | 1323404    | BBG000PVRDL2 | 
| 1633 | NYSE:WPX      | WPX Energy Inc                                         | Mining, Quarrying, and Oil and Gas Extraction                            | 1518832    | BBG001NY45K9 | 
| 1634 | NYSE:WRB      | W.R. Berkley Corp.                                     | Finance and Insurance                                                    | 11544      | BBG000BD1HP2 | 
| 1635 | NYSE:WRK      | WestRock Co                                            | Manufacturing                                                            | 1732845    | BBG008NXC572 | 
| 1636 | NYSE:WSM      | Williams-Sonoma, Inc.                                  | Retail Trade                                                             | 719955     | BBG000FSMWC3 | 
| 1637 | NYSE:WST      | West Pharmaceutical Services, Inc.                     | Health Care and Social Assistance                                        | 105770     | BBG000BX24N8 | 
| 1638 | NYSE:WTI      | W & T Offshore Inc                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1288403    | BBG000FFFQR6 | 
| 1639 | NYSE:WTRG     | Essential Utilities Inc                                | Utilities                                                                | 0000078128 | BBG000BRMJN6 | 
| 1640 | NYSE:WU       | Western Union Company                                  | Information                                                              | 1365135    | BBG000BB5373 | 
| 1641 | NYSE:WWE      | World Wrestling Entertainment, Inc. - Class A          | Information                                                              | 1091907    | BBG000F5YH15 | 
| 1642 | NYSE:X        | United States Steel Corp.                              | Manufacturing                                                            | 1163302    | BBG000BX3TD3 | 
| 1643 | NYSE:XEC      | Cimarex Energy Co.                                     | Mining, Quarrying, and Oil and Gas Extraction                            | 1168054    | BBG000D6L294 | 
| 1644 | NYSE:XL       | XL Fleet Corporation - Class A                         | Manufacturing                                                            | 1772720    | BBG00PP0KRL1 | 
| 1645 | NYSE:XOM      | Exxon Mobil Corp.                                      | Manufacturing                                                            | 34088      | BBG000GZQ728 | 
| 1646 | NYSE:XPO      | XPO Logistics Inc                                      | Transportation and Warehousing                                           | 1166003    | BBG000L5CJF3 | 
| 1647 | NYSE:XYL      | Xylem Inc                                              | Manufacturing                                                            | 1524472    | BBG001D8R5D0 | 
| 1648 | NYSE:Y        | Alleghany Corp.                                        | Finance and Insurance                                                    | 775368     | BBG000BX6BJ3 | 
| 1649 | NYSE:YELP     | Yelp Inc                                               | Information                                                              | 1345016    | BBG000Q2HM09 | 
| 1650 | NYSE:YETI     | YETI Holdings Inc                                      | Manufacturing                                                            | 1670592    | BBG00D8JC882 | 
| 1651 | NYSE:YUM      | Yum Brands Inc.                                        | Accommodation and Food Services                                          | 1041061    | BBG000BH3GZ2 | 
| 1652 | NYSE:YUMC     | Yum China Holdings Inc                                 | Accommodation and Food Services                                          | 1673358    | BBG00B8N0HG1 | 
| 1653 | NYSE:ZAYO     | Zayo Group Holdings, Inc.                              | Public Utilities                                                         |            | BBG002ZM63J5 | 
| 1654 | NYSE:ZBH      | Zimmer Biomet Holdings Inc                             | Manufacturing                                                            | 1136869    | BBG000BKPL53 | 
| 1655 | NYSE:ZEN      | Zendesk Inc                                            | Information                                                              | 1463172    | BBG001HRFJG4 | 
| 1656 | NYSE:ZTS      | Zoetis Inc - Class A                                   | Manufacturing                                                            | 1555280    | BBG0039320N9 | 