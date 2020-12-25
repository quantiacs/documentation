# Local development of trading strategies

You can use this QNT library for trading strategies development on your PC.

For this purpose, do these steps: 

1. Install [anaconda](https://www.anaconda.com/products/individual) (v2020.03 is recommended)
2. Create an isolated environment for strategies development:
    ```bash
    conda create --name qntdev quantnet::qnt quantnet::ta-lib conda-forge::dash
    ```

3. Activate your environment:
   ```bash
   conda activate qntdev
   ```
   You should use this command to reactivate the isolated environment.


4. Develop your strategy. You can use this code as a starting point:

   *strategy.py:*
   ```python
   import qnt.ta as qnta
   import qnt.data as qndata
   import qnt.backtester as qnbk
   
   import xarray as xr
   
   
   def load_data(period):
       data = qndata.futures_load_data(tail=period)
       return data
   
   
   def strategy(data):
       close = data.sel(field='close')
       sma200 = qnta.sma(close, 200).isel(time=-1)
       sma20 = qnta.sma(close, 20).isel(time=-1)
       return xr.where(sma200 < sma20, 1, -1)
   
   
   qnbk.backtest(
       competition_type="futures",
       load_data=load_data,
       lookback_period=365,
       test_period=2*365,
       strategy=strategy
   )
   ```

5. Use this command to start your strategy:
   ```bash
   API_KEY='{your_api_key}' python3 strategy.py
   ```

   > API_KEY can be found in the user's [personal account](https://quantiacs.com/personalpage/homepage).

6. When you finish with your strategy, you need to upload 
your code the Jupyter Notebook on [https://quantiacs.com](https://quantiacs.com).

   You can copy and past your code in Jupyter Notebook. 
   Or you can upload your python file (strategy.py) and run it from Jupyter Notebook:
   ```python
   import strategy
   ```

7. Run all cells to test your strategy in the Jupyter Notebook.

   [https://quantiacs.com/personalpage/strategies](https://quantiacs.com/personalpage/strategies)
   
   Fix the errors if it is necessary.


8. Send your strategy to the Contest from the ["Development"](https://quantiacs.com/personalpage/strategies) page.

9. Wait for your strategy pass filters and win the Contest.