import pandas as pd
import numpy as np

afc = pd.read_csv("AFC.csv", encoding="utf-8-sig")
afc.columns

afc

for i in range(len(afc)):
    afc["횟수"][i] = afc["횟수"][i][:-1]
    afc["횟수"][i] = int(afc["횟수"][i])

afc

import matplotlib.pyplot as plt
import seaborn as sns

sns.set_style('whitegrid')
sns.swarmplot(x="2018 출전", y = "횟수", data=afc)
plt.show()

sns.swarmplot(x="횟수", y="횟수", hue="2018 출전", data=afc)
plt.show()

sns.scatterplot(x="횟수", y="횟수", hue="2018 출전", style="2018 출전", data=afc, x_jitter=.9)
plt.show()

sns.swarmplot(x="횟수", y="횟수", style="2018 출전", data=afc)


data = afc


plt.subplots_adjust(bottom = 0.1)
plt.scatter(
    data[:,"횟수"], data[:,"횟수"], marker='o', cmap=plt.get_cmap('Spectral'))

for label, x, y in zip(data[:,"국가"], data[:,"횟수"], data[:,"횟수"]):
    plt.annotate(
        label,
        xy=(x, y), xytext=(-20, 20),
        textcoords='offset points', ha='right', va='bottom',
        bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
        arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))

plt.show()




import numpy as np
import matplotlib.pyplot as plt

N = 10
data = np.random.random((N, 4))
labels = ['point{0}'.format(i) for i in range(N)]
data
plt.subplots_adjust(bottom = 0.1)
plt.scatter(
    data[:, 0], data[:, 1], marker='o', c=data[:, 2], s=data[:, 3] * 1500,
    cmap=plt.get_cmap('Spectral'))

for label, x, y in zip(labels, data[:, 0], data[:, 1]):
    plt.annotate(
        label,
        xy=(x, y), xytext=(-20, 20),
        textcoords='offset points', ha='right', va='bottom',
        bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
        arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))

plt.show()
