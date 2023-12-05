# Local development of trading strategies

## Conda environment
You can use the Quantiacs library (QNT) for developing locally trading strategies on your computer.

The preferred option is to use **conda** because it is the most convenient, stable and tested solution.

You can follow these easy steps and create an isolated environment on your machine using **conda** for managing
dependencies and avoiding conflicts:

1. Install Anaconda from [https://www.anaconda.com/products/individual](https://www.anaconda.com/products/individual)
   or [https://repo.anaconda.com/archive/](https://repo.anaconda.com/archive/).
2. Create an isolated environment for developing strategies and install the QNT library together with needed
   dependencies (restart your terminal first):
    ```bash
    conda create -n qntdev quantiacs-source::qnt 'python>=3.10,<3.11' conda-forge::ta-lib
    conda activate qntdev1
    pip install 'ipywidgets==7.5' 'plotly==4.14' 'matplotlib==3.8.1' 'pandas==1.2.5' 'dash==1.21.0'
    ```

    *Tipp: if you do not want your conda enviroment activated by default when you open a new terminal window:*
    ```bash
    conda config --set auto_activate_base false
    ```

3. Set your API key. You can find it in your profile on your personal Quantiacs area.

   ![key](./pictures/key.png)

    ```bash
    conda env config vars set -n qntdev API_KEY={your_api_key_here}
    ```
    *The command above saves the variable in the conda environment. When you activate it, conda will set up this environment variable. If you have any problem with conda environment variables (known issue with PyCharm), you can set this environment variable in the run settings or write the key directly to the source code. Just add these lines to the head of your strategy* **before** *other imports:*
   ```python
    import os
    os.environ['API_KEY'] = "{your_api_key_here}"
    ```

4. Activate your environment if not yet activated:
   ```bash
   conda activate qntdev
   ```
   For leaving the environment:
   ```bash
   conda deactivate
   ```
   Each time you want to use the QNT library, reactivate the environment.


5. Develop your strategy using the IDE you like. For example, you can develop strategies using Jupyter notebook :
     ```bash
      conda install notebook python=3.7 &&
      conda deactivate &&
      conda activate qntdev &&
      path_to_anaconda_installation/anaconda3/envs/qntdev/bin/jupyter notebook
      ```
      You have to specify the path to your Anaconda3 installation. For example in Linux it is often /home/{USER_NAME}/anaconda3 , while in MACOS /opt/anaconda3 .



  A good starting point is represented by the following **strategy.py** file, where a simple long-short trading strategy
  based on the crossing of two simple moving averages with lookback periods of 20 and 200 trading days is implemented:

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

Here we have used the function qnt.backtester.backtest whose details can be found in your private area in the
/qnt/backtester.py file.

The function requires the following input:

* competition type: "futures" for the futures contest or "cryptofutures" for the Bitcoin futures contest;
* load data: the pre-defined load_data function. The period passed to load_data is given by test_period +
  lookback_period;
* lookback_period: the maximal lookback period in calendar days used for building indicators. In this case, as we use
  200 trading days for defining the largets simple moving average, 1 year is fine;
* test_period, in calendar days, is the In-Sample period used for the simulation. Here we use 2 years of data;
* strategy: the pre-defined strategy function which should return allocation weights for all assets at a fixed point in
  time (note that in strategy we select the last index, isel(time=-1)).

This strategy uses a lookback period of 365 calendar days for computing indicators and, after a warmup of 365 calendar
days, performs a simulation for 2 years.

**Executing and submitting your strategy:**

1. Use this command to run your strategy (replace **python** with **python3** if your default python version is 2):
   ```bash
    python strategy.py
   ```

2. When you finish with developing your strategy, you need to upload your code in the **Jupyter Notebook environment on the Quantiacs webpage.** There are 2 options:

   a) Copy and paste your code inside the cell of a Jupyter Notebook:

   ![nb](./pictures/notebook.png)

   b) Upload your python file (for example, **strategy.py**) in your Jupyter environment root directory and type in
   **strategy.ipynb**:

        import strategy

   > Place the installation commands for external dependencies to init.ipynb.

3. Run all cells to test your strategy in the Jupyter Notebook. Fix the errors if it is necessary. It is a good idea to
   run the file **precheck.ipynb**.

4. Send your strategy to the Contest from the **Development** area on your home page by clicking on the **Submit**
   button:

   ![submit](./pictures/submit.png)


5. Wait for your strategy to pass contest filters and take part in the Contest.

### Updating the conda environment

Periodically we update our library.
It makes sense to update your environment periodically.
Use this command:
```bash
    ## you can remove the old one before that
    # conda remove -n qntdev quantiacs-source::qnt

    conda install -n qntdev quantiacs-source::qnt
```

You can see the library updates [here](https://anaconda.org/quantiacs-source/qnt/files).

## Pip environment

**We do not recommend this option as for developing Quantiacs we are using conda.**

If you cannot use conda, it is possible to use pip for your environment.

We recommend you use [pyenv](https://github.com/pyenv/pyenv) for python version control and [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) for a virtual environment to avoid breaking your default environment.

After installing and configuring both you should install a suitable python version (tested with python 3.7.12):
```
pyenv install 3.7.12
```

Then create a virtual environment with this python installation:
```
pyenv virtualenv 3.7.12 name_of_environment
```

In your desired working directory you can now activate your environment:
```
pyenv local name_of_environment
```

*If everything is set up properly, the virtual environment will automatically activate/deactivate on entering/leaving the directory.*
*Alternatively use: pyenv activate/deactivate name_of_enviroment*


This command installs the Quantiacs library:
```
python -m pip install git+git://github.com/quantiacs/toolbox.git
```

Probably, you will need to install also [TA-Lib library](https://mrjbq7.github.io/ta-lib/install.html) if you need technical indicators.

If you work without jupyter, you will need dash and plotly:
```
python -m pip install dash==1.18 plotly
```

When you run your strategies, specify the api key in the head of your source file(or notebook) **before** other imports:
```python
import os
os.environ['API_KEY'] = "{your_api_key_here}"
```

You can find this api key in your profile on your personal Quantiacs area.

![key](./pictures/key.png)


**Executing and submitting your strategy:**

1. Use this command to run your strategy (replace **python** with **python3** if your default python version is 2):
   ```bash
    python strategy.py
   ```

2. When you finish with developing your strategy, you need to upload your code in the **Jupyter Notebook environment on the Quantiacs webpage.** There are 2 options:

   a) Copy and paste your code inside the cell of a Jupyter Notebook:

   ![nb](./pictures/notebook.png)

   b) Upload your python file (for example, **strategy.py**) in your Jupyter environment root directory and type in
   **strategy.ipynb**:

        import strategy

   > Place the installation commands for external dependencies to init.ipynb.

3. Run all cells to test your strategy in the Jupyter Notebook. Fix the errors if it is necessary. It is a good idea to
   run the file **precheck.ipynb**.

4. Send your strategy to the Contest from the **Development** area on your home page by clicking on the **Submit**
   button:

   ![submit](./pictures/submit.png)


5. Wait for your strategy to pass contest filters and take part in the Contest.


### Updating the pip environment

Use this command in your enviroment to install the latest version from the git repositiory:

```
python -m pip install --upgrade git+git://github.com/quantiacs/toolbox.git
```

## Google Colab support

If you want to use Google Colab with a hosted runtime, start with this [notebook](../_static/colab.ipynb).

This notebook contains the necessary commands to configure a hosted runtime.

If you use colab with a local runtime, then you can use regular conda environment. Go to the head of this page and follow the instructions for conda.
