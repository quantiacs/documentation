# Улучшение алгоритмов

## Maximum stock weight

Неразумно полагаться на одну-две компании при написании алгоритма. В
таком случае, даже если стратегия верна, непредсказуемые мировые
события/новости могут нанести непоправимый ущерб инвестиционному
портфелю (Например,
[1](https://www.ft.com/content/be040b3a-5c96-11ea-b0ab-339c2307bcd4) и
[2](https://www.themoscowtimes.com/2020/03/06/russias-tinkoff-bank-shares-fall-as-founder-indicted-in-us-a69538)).

Каждый год таких новостей много. Они сливаются с информационным шумом, и
мы их забываем. Однако они отражаются в исторических данных, а так же
сильно повлияют на прибыль в будущем.

Хороший способ диверсифицировать риски - **увеличить количество
инструментов** в инвестиционном портфеле. После этого мы можем **maximum
stock weight** сделать равным 0.05. Это означает, что мы будем **выделять не
более 5% нашего капитала на каждую инструмент** в портфеле.

```python
def get_weights_bordering_max_capital(weights, border=0.1):
    weights_return = weights.fillna(0)
    under_border = weights_return <= border
    weights_return = weights_return.where(under_border)
    weights_return = weights_return.fillna(border)

    up_border = weights_return >= -1 * border
    weights_return = weights_return.where(up_border)
    weights_return = weights_return.fillna(-1 * border)

    return weights_return
```

Пример использования


```python
import qnt.data as qndata
import qnt.stats   as qnstats
import qnt.stepper as qnstepper
import datetime as dt

data = qndata.load_data(
                       tail = dt.timedelta(days=4*365),
                       forward_order=True)

def get_weights_strategy(data):

    strategy = data.sel(field="open") * data.sel(field="is_liquid")

    weights = strategy / abs(strategy).sum('asset')
    return weights


def get_weights_bordering_max_capital(weights, border=0.1):
    weights_return = weights.fillna(0)
    under_border = weights_return <= border
    weights_return = weights_return.where(under_border)
    weights_return = weights_return.fillna(border)

    up_border = weights_return >= -1 * border
    weights_return = weights_return.where(up_border)
    weights_return = weights_return.fillna(-1 * border)

    return weights_return


weights_clean = get_weights_strategy(data)
weights = get_weights_bordering_max_capital(weights_clean,
                                   0.05)



stat = qnstats.calc_stat(data, weights)
display(stat.to_pandas().tail())

qnstats.print_correlation(weights, data)

qnstepper.write_output(weights)
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>field</th>
      <th>equity</th>
      <th>relative_return</th>
      <th>volatility</th>
      <th>underwater</th>
      <th>max_drawdown</th>
      <th>sharpe_ratio</th>
      <th>mean_return</th>
      <th>bias</th>
      <th>instruments</th>
      <th>avg_turnover</th>
      <th>avg_holding_time</th>
    </tr>
    <tr>
      <th>time</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2020-08-17</th>
      <td>1.775526</td>
      <td>0.007091</td>
      <td>0.209698</td>
      <td>0.000000</td>
      <td>-0.309622</td>
      <td>0.709352</td>
      <td>0.148750</td>
      <td>1.0</td>
      <td>951.0</td>
      <td>0.023546</td>
      <td>109.270150</td>
    </tr>
    <tr>
      <th>2020-08-18</th>
      <td>1.782287</td>
      <td>0.003808</td>
      <td>0.209700</td>
      <td>0.000000</td>
      <td>-0.309622</td>
      <td>0.710370</td>
      <td>0.148965</td>
      <td>1.0</td>
      <td>951.0</td>
      <td>0.023550</td>
      <td>109.262512</td>
    </tr>
    <tr>
      <th>2020-08-19</th>
      <td>1.775737</td>
      <td>-0.003675</td>
      <td>0.209498</td>
      <td>-0.003675</td>
      <td>-0.309622</td>
      <td>0.733613</td>
      <td>0.153691</td>
      <td>1.0</td>
      <td>951.0</td>
      <td>0.023553</td>
      <td>109.253208</td>
    </tr>
    <tr>
      <th>2020-08-20</th>
      <td>1.780279</td>
      <td>0.002558</td>
      <td>0.209498</td>
      <td>-0.001127</td>
      <td>-0.309622</td>
      <td>0.740572</td>
      <td>0.155149</td>
      <td>1.0</td>
      <td>951.0</td>
      <td>0.023550</td>
      <td>109.264783</td>
    </tr>
    <tr>
      <th>2020-08-21</th>
      <td>1.785862</td>
      <td>0.003136</td>
      <td>0.209503</td>
      <td>0.000000</td>
      <td>-0.309622</td>
      <td>0.746723</td>
      <td>0.156440</td>
      <td>1.0</td>
      <td>951.0</td>
      <td>0.023554</td>
      <td>117.762112</td>
    </tr>
  </tbody>
</table>
</div>


    
    WARNING! This strategy correlates with other strategies.
    The number of systems with a larger Sharpe ratio and correlation larger than 0.8: 2
    The max correlation value (with systems with a larger Sharpe ratio): 0.9009298804903136
    Current sharpe ratio(3y): 0.7467229068047863
    
    write output: /root/fractions.nc.gz



## Neutralization


  Давайте проанализируем показатели акций 500 самых крупных компаний,
котирующихся на фондовых биржах США. Так называемый индекс S&P500 (рис. 1). Видно,
что в среднем рынок растёт. Доход S&P500 сильно варьируется от
нескольких процентов до более чем 20% для некоторых
[годов](https://www.cnbc.com/2017/06/18/the-sp-500-has-already-met-its-average-return-for-a-full-year.html).
Значит ли это, что просто держать длинные позиции хорошая идея?

![sp500](./pictures/snp500.png)
_Рис.1_


Несмотря на рост S&P500, его Sharpe ratio менее 1. Одна из главных
причин - периодические финансовые кризисы. Вот некоторые из них:

-   1987 год. «Черный понедельник». Индекс Dow Jones упал на 22,6%.
    Причина - массовый отток инвесторов с региональных рынков.

-   2000-2003. Крах доткомов. Кризис вызван массовым вложением денег в
    интернет-проекты.

-   2007--2008. Мировой экономический кризис. Начался с ипотечного
    кризиса в США, банкротства банков и падения цен на акции, проложив
    путь мировому экономическому кризису (иногда называемому «великой
    рецессией»)

  Последствия кризисов видны на графике S&P 500 и проявляются в падении
рынка до 30%. Наивно думать, что кризис это страшные истории из
прошлого. Начало 2020 года ознаменовалось падением экономики, вызванным
коронавирусом.


Мы можем исключить влияние рынка, если уравновесим длинные и короткие
позиции для нашего алгоритма. Таким образом, суммарные инвестиции в
рынок составят $0. Нейтрализация может быть сделана для всего рынка или
для каждого сектора экономики отдельно (в целом для любой группы).
Математическая формулировка нейтрализации крайне проста.

Допустим алгоритм определил вектор весов **weights<sub>i</sub>** для i-ого дня.
Для того что бы сделать алгоритм нейтральным относительно всего рынка
(market-neutral), достаточно изменить веса алгоритма следующим образом:

**neutralized\_weights<sub>i</sub>** = **weights<sub>i</sub>** - mean(**weights<sub>i</sub>**).

Теперь среднее вектора весов для каждого дня равно нулю. Это означает,
что мы не вкладываем деньги и не выводим их с рынка.


```python
from qnt.neutralization import neutralize

weights = neutralize(weights, weights.asset ,group = 'market')
```

Пример использования

```python
import qnt.data as qndata
import qnt.stats   as qnstats
import qnt.stepper as qnstepper
import datetime as dt
from qnt.neutralization import neutralize

data = qndata.load_data(
                       tail = dt.timedelta(days=4*365),
                       forward_order=True)

def get_weights_strategy(data):

    strategy = data.sel(field="open") * data.sel(field="is_liquid")

    weights = strategy / abs(strategy).sum('asset')
    return weights


weights_clean = get_weights_strategy(data)
weights = neutralize(weights_clean, weights_clean.asset ,group = 'market')



stat = qnstats.calc_stat(data, weights)
display(stat.to_pandas().tail())

qnstats.print_correlation(weights, data)

qnstepper.write_output(weights)
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>field</th>
      <th>equity</th>
      <th>relative_return</th>
      <th>volatility</th>
      <th>underwater</th>
      <th>max_drawdown</th>
      <th>sharpe_ratio</th>
      <th>mean_return</th>
      <th>bias</th>
      <th>instruments</th>
      <th>avg_turnover</th>
      <th>avg_holding_time</th>
    </tr>
    <tr>
      <th>time</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2020-08-17</th>
      <td>1.371047</td>
      <td>0.003825</td>
      <td>0.085536</td>
      <td>0.000000</td>
      <td>-0.103292</td>
      <td>0.967307</td>
      <td>0.082739</td>
      <td>0.525606</td>
      <td>951.0</td>
      <td>0.018116</td>
      <td>92.184119</td>
    </tr>
    <tr>
      <th>2020-08-18</th>
      <td>1.380413</td>
      <td>0.006832</td>
      <td>0.085615</td>
      <td>0.000000</td>
      <td>-0.103292</td>
      <td>0.989071</td>
      <td>0.084680</td>
      <td>0.525149</td>
      <td>951.0</td>
      <td>0.018120</td>
      <td>92.183188</td>
    </tr>
    <tr>
      <th>2020-08-19</th>
      <td>1.377511</td>
      <td>-0.002102</td>
      <td>0.085543</td>
      <td>-0.002102</td>
      <td>-0.103292</td>
      <td>1.007448</td>
      <td>0.086180</td>
      <td>0.523804</td>
      <td>951.0</td>
      <td>0.018130</td>
      <td>92.173027</td>
    </tr>
    <tr>
      <th>2020-08-20</th>
      <td>1.383244</td>
      <td>0.004161</td>
      <td>0.085570</td>
      <td>0.000000</td>
      <td>-0.103292</td>
      <td>1.027185</td>
      <td>0.087896</td>
      <td>0.523686</td>
      <td>951.0</td>
      <td>0.018136</td>
      <td>92.178857</td>
    </tr>
    <tr>
      <th>2020-08-21</th>
      <td>1.387808</td>
      <td>0.003299</td>
      <td>0.085586</td>
      <td>0.000000</td>
      <td>-0.103292</td>
      <td>1.040333</td>
      <td>0.089038</td>
      <td>0.522531</td>
      <td>951.0</td>
      <td>0.018140</td>
      <td>96.456512</td>
    </tr>
  </tbody>
</table>
</div>


    
    WARNING! This strategy correlates with other strategies.
    The number of systems with a larger Sharpe ratio and correlation larger than 0.8: 2
    The max correlation value (with systems with a larger Sharpe ratio): 0.9132571807203661
    Current sharpe ratio(3y): 1.0403329174432017
    
    write output: /root/fractions.nc.gz
