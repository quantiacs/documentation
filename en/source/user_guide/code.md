# Code organization

Here are some notes about the code organization. In the root of jupyter, you will find:

- `strategy.ipynb` - place your strategy code here.
Please optimize the final version of your code before submitting it. Parts with useless code affect the calculation time and, finally, testing time. 
A separate jupyter notebook is more suitable for experiments (for instance,`research.ipynb`).

- `init.ipynb` - one can use it for additional dependencies of your strategy.
(e.g., keras or sklearn). With a step-by-step calculation, this notebook will only run once to prepare the environment before launch `strategy.ipynb`.

- `precheck.ipynb` - allows you to pre-check your strategy. We advise you to run this notebook before submitting and fix all ERROR and WARNING cases. Solving `precheck.ipynb` is much faster than a day-to-day strategy test when submitting to a competition.