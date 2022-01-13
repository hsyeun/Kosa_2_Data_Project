import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import seaborn as sns

%matplotlib inline
%config InlineBackend.figure_format = 'retina'

plt.rcParams['font.family'] = 'NanumGothic'


import json
import mpld3
import matplotlib.pyplot as plt

f
fig = mpld3.fig_to_html(f, figid='ott-3')
print(fig)

f = plt.figure()



df1 = pd.read_csv("드라마_ott.csv", encoding="utf-8-sig")

df1

df2 = pd.DataFrame(columns=["순위", "드라마/예능", "ott"])

for index, i in enumerate(df1["ott"]):
    for l in list(i.split()) :
        data_to_insert = {'순위': df1["순위"][index], '드라마/예능': df1["드라마/예능"][index], 'ott': l}
        df2 = df2.append(data_to_insert, ignore_index=True)

df2


df3 = df2.groupby("ott").count()
df3
set(df2["ott"])
label=['MBC', 'OCN', 'SBS', 'TVING', 'TVN', '넷플릭스', '웨이브']


f = plt.figure()
wedgeprops={'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}
plt.pie(list(df3["순위"]), labels=label, autopct='%.1f%%', startangle=260, counterclock=False, wedgeprops=wedgeprops)
plt.show()


df5 = pd.read_csv("영화_ott.csv", encoding="utf-8-sig")
df5.head(5)

df5_1 = pd.DataFrame(columns=["순위", "영화", "ott"])
for index, i in enumerate(df5["ott"]):
    for l in list(i.split()) :
        data_to_insert = {'순위': df5["순위"][index], '영화': df5["영화"][index], 'ott': l}
        df5_1 = df5_1.append(data_to_insert, ignore_index=True)
df5_1
df5_2 = df5_1.groupby("ott").count()
df5_2
set(df5_1["ott"])
label=['TVING', '넷플릭스', '디즈니-플러스', '왓챠', '웨이브']

f = plt.figure()
wedgeprops={'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}
plt.pie(list(df5_2["순위"]), labels=label, autopct='%.1f%%', startangle=260, counterclock=False, wedgeprops=wedgeprops)
plt.show()

df5_2.columns


df3.to_csv("ott.csv", encoding="utf-8-sig")
df1_1 = pd.read_csv("ott.csv", encoding="utf-8-sig")
df1_1 = df1_1.loc[:,["ott","드라마/예능"]]

df1_1

df5_2.to_csv("ott.csv", encoding="utf-8-sig")
df1_2 = pd.read_csv("ott.csv", encoding="utf-8-sig")
df1_2 = df1_2.loc[:,["ott","영화"]]

df1_2

df_3 = pd.merge(df1_1,df1_2, how='outer',on='ott')
df_3

df_3 = df_3.fillna(0)
df_3
df_3["합계"] = df_3["드라마/예능"] + df_3["영화"]
df_3

f = plt.figure()
wedgeprops={'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}
plt.pie(df_3["합계"], labels=df_3["ott"], autopct='%.1f%%', startangle=260, counterclock=False, wedgeprops=wedgeprops)
plt.show()
