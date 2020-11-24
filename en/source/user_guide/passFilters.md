# Passing filters

The algorithm must pass all the filters in order to be admitted to the competition. This section denotes to filters description and explanation on how to pass them.

## Technical filters

### strategy.ipynb
If you see the message "strategy.ipynb was not found", then please check the name of the main strategy file, it should be named `strategy.ipynb`.

### Timeout
The strategy calculation should not take more than 30 minutes.
If you see the message "Calculation time exceeded", then you need to optimize the code and reduce the execution time.

### strategy.ipynb compilation
If you see the message "strategy.ipynb does not compile", then most likely an error occurred while calculating the strategy and converting the book from ipynb to html.

- Be sure to check the logs, most often it contains the necessary information.

- Also, pay attention to the reference date in the logs. You can use it to reproduce the bug in `precheck.ipynb`. (Substitute this date in the `dates` array when calling ʻevaluate_passes`.)

### Write_output
If you see the message "The call to the write_output function is skipped", then your strategy does not save the result of calculations.
I.е. the call of `write_output` is skipped. Add this call to the end of the `strategy.ipynb`.

### last data
If you see the message "Data is loaded only until a certain day", then in your template the data is loaded with the specified `max_date` parameter.
Take it away.

### Number of strategies
If you see the message "Strategy limit exceeded", it means that you have submitted too many strategies.
There is a limitation on the platform: no more than 5 per week.
I.e. you can send another algorithm after one week.

### output dates
If you see the message "The strategy does not display weights for all trading days", it means that days are missing in the output of your strategy.
Check if you are using a drop operation on the time axis.

### Trade only BTC
Only relevant for CRYPTO. If you see the message
"Other cryptocurrencies are traded besides BTC", which means you are using other instruments, which is prohibited by the rules. Please, use only BTC.

## Sharpe Ratio
If you see the message "Sharpe Ratio for the last 3 years is less than 1.0", it means that the performance of your strategy is low during step by step  calculation.

You need to improve your algorithm and increase the Sharpe ratio.

You may face the *forward looking* problem when your the algorithm uses data from the future (looks ahead). Functions from package `qnt.forward_looking` will help you solve this problem. Usage examples can be found in templates.

A step-by-step calculation is the best way to test a model and exclude forward-looking, but it takes quite a long time. You can perform a step-by-step calculation as the system does. For these purposes, please use `precheck.ipynb` and set` passes`> = 1000 when calling ʻevaluate_passes`. Fewer passes (100 or 200) can provide useful information about the real performance of your strategy.

## Correlation
If you see the message "The strategy is highly correlated ..." then your strategy is very similar to the other strategy posted earlier.

According to the rules, you cannot send a strategy that strongly correlates with one of the previous ones.

In this case, you can try:

- change the tools used in the strategy
- mix several strategies
- write a new strategy

## Exposure
Relevant for STOCKS. If you see the message "The strategy has a high level of risk (Exposure)." then your strategy uses a weak number of instruments.
 
You can fix the strategy in 3 ways:

- improve the strategy so that it will use more tools
- mix the weights of your strategy with a strategy that has passed the exposure filter. For this perpose, you can use `qnt.exposure.mix_weights`
- exclude days with high exposure from your strategy weights using `qnt.exposure.drop_bad_days`

[More details.](../reference/improve_algorithm.md/#Exposure improving).

## Hold Time
Only relevant for CRYPTO. If you see the message "Insufficient hold time"
It means that your strategy changes positions too often. Reduce the number of these changes.
