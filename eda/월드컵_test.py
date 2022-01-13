import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import seaborn as sns

%matplotlib inline
%config InlineBackend.figure_format = 'retina'

plt.rcParams['font.family'] = 'NanumGothic'

df1 = pd.read_csv("월드컵_test.csv", encoding="utf-8-sig")

len(df1)
df1
df1.loc[df1["국가"]=="대한민국"]
# !pip install plotly
import plotly.figure_factory as ff
import plotly.offline as py
import statistics
import plotly.express as px
import matplotlib.pyplot as plt


# !pip install mpld3

import json
import mpld3
import matplotlib.pyplot as plt



# f = plt.figure()
# plt.plot([1,2,3], [4,5,6])
#
# print(mpld3.fig_to_html(f, figid='THIS_IS_FIGID'))

f
fig = mpld3.fig_to_html(f, figid='w-3')
print(fig)
f.savefig("월드컵_박스플랏.png")


f = plt.figure()
sns.swarmplot(x="대륙", y = "횟수", hue="2018 출전", data=df2, s=8)
plt.ylabel("전체 월드컵 출전 횟수")
# plt.annotate("대한민국",xy=(0, df1["횟수"][0]), xytext=(-20, 20),
#     textcoords='offset points', ha='right', va='bottom',
#     bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
#     arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))
plt.show()


df2 = df1.copy()
for i in range(len(df2)) :
    if df2["2018 출전"][i] == 1 :
        df2["2018 출전"][i] = "출전O"
    else:
        df2["2018 출전"][i] = "출전X"
sns.swarmplot(x="2018 출전", y = "횟수", hue="대륙", data=df2, s=7)
plt.ylabel("전체 월드컵 출전 횟수")
plt.annotate("대한민국",xy=(0, df1["횟수"][0]), xytext=(-20, 20),
    textcoords='offset points', ha='right', va='bottom',
    bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
    arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))
plt.show()


f = plt.figure()
sns.regplot(x="횟수", y="2018 출전", data=df1, logistic=True)
plt.xlabel("전체 월드컵 출전 횟수")
plt.show()



df2
sns.pairplot(df2.iloc[:,1:], hue='2018 출전')
plt.show()

순위 = pd.read_csv("최종 순위.csv", encoding="utf-8-sig")
# for i in range(len(순위)) :
#     순위["팀"][i] = 순위["팀"][i][1:]
순위

df3 = 순위.merge(df2, how="left", left_on="팀", right_on="국가")
df3.head(10)
sns.boxplot(x="대륙", y="순위", data=df3, notch=True, orient ='v')

f = plt.figure()
sns.boxplot(y="대륙", x="순위", data=df3, palette='Spectral')
plt.xlabel("최종 순위")
plt.show()



df3_grouped = df3.groupby(df3.대륙)
df3_grouped.describe()["순위"]



토너먼트 = df3.loc[순위["비고"] != "조별리그"]

len(토너먼트)
토너먼트_1 = 토너먼트.groupby(토너먼트.대륙)
토너먼트_1.describe()
a = 토너먼트_1.describe()["순위"]["count"]
a = pd.DataFrame(a)
a
a = list(a["count"])
# label = ["남미","북중미-카리브","아시아","유럽"]
explode = [0, 0.10, 0, 0.10]
f = plt.figure()
plt.pie(a, labels=토너먼트_1["국가"], autopct='%.1f%%', startangle=260, counterclock=False, explode=explode)
plt.show()


wedgeprops={'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}
plt.pie(a, labels=토너먼트_1["국가"], autopct='%.1f%%', startangle=260, counterclock=False, wedgeprops=wedgeprops)
plt.show()


df3.head(5)
df4 = df3.drop(["Unnamed: 0_x","Unnamed: 0_y"], axis=1)

sns.pairplot(df4, hue='대륙')















sns.violinplot(x="대륙", y="순위", data=df3)












# sns.scatterplot(x="횟수", y="횟수", hue="대륙", style="2018 출전", data=df2)


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
