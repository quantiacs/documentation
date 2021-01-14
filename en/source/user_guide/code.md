# Your Environment

When you work inside the Quantiacs Jupyter environment you will have access to a root directory with several sub-directories and files.

- **data-cache**- This directory stores loaded data for a faster evaluation.

- **qnt** - This directory contains the source code of the Quantiacs backtester, including all functions to deal with data and statistical indicators. You can use it as a reference if you are interested in the details of the evaluation. If you have a question or find a bug, please contact us at info@quantiacs.com. Note that the sub-directory **ta** contains useful technical indicators.

- **init.ipynb** - This file can be used for installing the additional libraries needed by your strategy, like keras or sklearn. The evaluator will run this file once to prepare the environment for your strategy. Let us suppose you want to use seaborn for visualizing data,https://seaborn.pydata.org/. As Jupyter allows you to run shell commands using !, you can for example type:

```python
! conda install -y seaborn
```


- **precheck.ipynb** - this file allows you to pre-check your strategy. We advise you to run this notebook before submitting and fix all ERROR and WARNING cases.

- **strategy.ipynb** - this file contains your strategy for submission. We recommend using a separate instance of a jupyter notebook (which you can call for example research.ipynb) for research. Once you are ready to submit, you should remove unnecessary components and submit the optimized version in the strategy.ipynb file.

