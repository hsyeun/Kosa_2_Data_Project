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
fig = mpld3.fig_to_html(f, figid='o-4')
print(fig)

f = plt.figure()





df1 = pd.read_csv("메달 집계_동계올림픽.csv", encoding="utf-8-sig")
df1.head(10)


len(df1)
df1["top"] = 0
a = 10
for i in range(0,len(df1),3) :
    if i == 0 :
        df1["top"][i:i+3] = "top "+str(a)+"%"
    else:
        df1["top"][i:i+3] = "top "+str(a-10)+"-"+str(a)+"%"
    a += 10
df1

df2 = df1.groupby("top")
# list(df2["합계"].sum())
pd.DataFrame(list(df2["국가"])).to_csv("예비.csv", encoding='utf-8-sig')
a = list(df2["합계"].sum())
explode = [0.10, 0, 0.10, 0, 0.10, 0, 0, 0, 0, 0, ]
label = list(df2["국가"])[:5]
label.extend(" "*5)

f = plt.figure()
plt.pie(a, labels=label, autopct='%.1f%%', startangle=260, counterclock=False, explode=explode)
plt.show()


국가 = []
for i in df1["국가"][:7] :
    a = i[1:i.find("(")-1]
    국가.append(a)
국가

n = 1  # This is our first dataset (out of 2)
t = 2 # Number of dataset
d = 7 # Number of sets of bars
w = 0.8 # Width of each bar

f = plt.figure()
def create_x(t, w, n, d):
    return [t*x + w*n for x in range(d)]
value_a_x = create_x(t, w, 1, d)
value_b_x = create_x(t, w, 2, d)
ax = plt.subplot()
def present_height(ax, bar):
	for rect in bar:
		height = rect.get_height()
		posx = rect.get_x()+rect.get_width()*0.5
		posy = height*1.01
		ax.text(posx, posy, height, ha='center', va='bottom')
bar = ax.bar(value_a_x, df1["금메달"][:7],label="금메달")
present_height(ax, bar)
bar = ax.bar(value_b_x, df1["합계"][:7], label="합계")
present_height(ax, bar)
middle_x = [(a+b)/2 for (a,b) in zip(value_a_x, value_b_x)]
ax.set_xticks(middle_x)
ax.set_xticklabels(국가)
ax.legend(loc='upper right', shadow=True, ncol=1)
plt.show()



df5 = pd.read_csv("종목별 참가 선수 및 메달 수_동계올림픽.csv", encoding="utf-8-sig")
df5.head(3)

df5 = df5.fillna(0)
df5.head(3)



f = plt.figure()
data = df5.loc[:,["참가 선수", "메달 합계", "종목 정보"]]
# data
labels = df5["종목 정보"]
# labels
data.iloc[:,0]
plt.subplots_adjust(bottom = 0.1)
plt.scatter(
    data.iloc[:,1], data.iloc[:, 0], marker='o', c=range(len(data.iloc[:, 2])), s=(data.iloc[:, 1]+0.1) * 200,
    cmap=plt.get_cmap('Spectral'), )
# plt.legend(loc='upper right', shadow=True, ncol=1)
for label, x, y in zip(labels, data.iloc[:, 1], data.iloc[:, 0]):
    plt.annotate(
        label,
        xy=(x, y), xytext=(-20, 20),
        textcoords='offset points', ha='right', va='bottom',
        bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
        arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))
plt.xlabel("메달 합계")
plt.ylabel("종목별 참가 선수 수")
plt.show()


sns.scatterplot(x="메달 합계", y="참가 선수",
    size="메달 합계",sizes=(15,1000), hue="종목 정보", data=df5)
plt.legend(labels=df5["종목 정보"], loc = 2, bbox_to_anchor = (1,1))
plt.show()





df7 = pd.read_csv("메달리스트 명단_동계올림픽.csv", encoding="utf-8-sig")
df7.head(5)


df7_1 = df7.groupby("메달").count()
df7_1

df7_2 = df7.groupby(["메달","종목"]).count()
df7_2
list(df7_2["이름"])
df7_2

f = plt.figure()
list(df7_1["이름"])
5/17 *100
label_1 = ["금메달 \n 29.41%", "동메달 \n 23.53%", "은메달 \n 47.06%"]
label_2 = ["쇼트트랙", "스켈레톤", "스피드 스케이팅", "쇼트트랙", "스피드 스케이팅", "봅슬레이",
 "쇼트트랙", "스노보드", "스피드 스케이팅", "컬링"]
# label_2 = ["쇼트트랙 \n (3)", "스켈레톤 \n (1)", "스피드 스케이팅 \n (1)", "쇼트트랙 \n (2)", "스피드 스케이팅 \n (2)", "봅슬레이 \n (1)",
#  "쇼트트랙 \n (1)", "스노보드 \n (1)", "스피드 스케이팅 \n (4)", "컬링 \n (1)"]

colors_1 = ['#ffb31c', '#1cfc36', '#2f00ff']
colors_2 = ['#ffd175', '#ffdf9e', '#ffeabf', '#8fff9c', '#c7ffcd', '#7a5cff', '#937aff', '#aa96ff', '#c3b5ff', '#dcd4ff']

bigger = plt.pie(list(df7_2["이름"]), labels=label_2, colors=colors_2,
                 autopct='%.1f%%', startangle=90, frame=True, pctdistance=0.85)
smaller = plt.pie(list(df7_1["이름"]), labels=label_1, colors=colors_1,
                  radius=0.7,
                  startangle=90, labeldistance=0.6)
centre_circle = plt.Circle((0, 0), 0.4, color='white', linewidth=0)
fig = plt.gcf()
fig.gca().add_artist(centre_circle)

plt.axis('equal')
plt.tight_layout()
# plt.xlabel("\n 국내 메달 집계")
plt.show()
