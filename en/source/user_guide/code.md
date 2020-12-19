# Code organization

When you work inside the Quantiacs Jupyter environment you will have access to a root directory with several files. The most important are:

- **strategy.ipynb** - this file contains your strategy for submission. We recommend using a separate instance of a jupyter notebook (which you can call for example research.ipynb) for research. Once you are ready to submit, you should remove unnecessary components and submit the optimized version in the strategy.ipynb file.

- **init.ipynb** - this file can be used for the additional dependencies of your strategy, like keras or sklearn.

- **precheck.ipynb** - this file allows you to pre-check your strategy. We advise you to run this notebook before submitting and fix all ERROR and WARNING cases.
