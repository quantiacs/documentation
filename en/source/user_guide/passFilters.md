# Competition filters

For submitting a strategy to a contest you have to click on the **Submit** button:

![submit](./pictures/submit.png)
   
After submission your code will be checked on our servers and its status will appear in the **Competition** section of your account under the tab **Checking**:

![test](./pictures/test.png)


Your algorithm will be admitted to the Contest if it passes checks (filters). In case of success you will find your code under the **Running** tab. Otherwise it will be listed under the **Filtered** tab where you will be able to inspect the logs and determine the reason for the error.

## Technical filters

### Source file must exist
An error message stating that the **strategy.ipynb** file was not found is connected to a non-standard name for the file containing your strategy. This file must be named **strategy.ipynb**.

### Source file must be compiled
If you see an error message stating that the **strategy.ipynb** file does not compile, then you should check the logs as they will contain the necessary information. Pay special attention to the dates in the logs: you can use this information to reproduce the problem in the **precheck.ipynb** file you find in your root directory. Substitute these **dates** when calling **evaluate_passes**.

### Weights must be written
If you see an error message stating that the calling to the **write_output** function is skipped, then your strategy does not save the final weights. Your last call in the **strategy.ipynb** file should be **qnt.output.write(weights)**, assuming that you used **weights** for the final allocation weights.

### All data must be loaded
An error message stating that data are loaded only until a certain day is due to the fact that you are loading the data cropping the number of days. Do not crop data when you submit, as your system needs to run on a daily basis on new data.

### Weights must be generated for all trading days
An error message stating that the strategy does not display weights for all trading days means that weights for some days are not generated, for example because of a **drop** operation. This problem can be avoided using the function **qnt.output.check(weights, data, "futures")**, assuming that you are working with futures and you are generating **weights** on **data**.


## Timeout
An error message stating that the strategy calculation exceeds a given time implies that you need to optimize the code and reduce the execution time. Futures systems should be evaluated in 10 minutes and Bitcoin futures systems in 5 minutes of time.


## Number of strategies
An error message stating that the limit for strategies has been exceeded is connected to the number of running strategies in your area. You can have at most 50 of them and you should select 5 for the contest.

## Sharpe ratio
An error message stating that the Sharpe ratio is smaller than 1 means that the risk-adjusted performance of your system in the In-Sample period is too low and it should be improved.
