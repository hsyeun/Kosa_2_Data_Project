from selenium import webdriver
from selenium.webdriver import ChromeOptions
from bs4 import BeautifulSoup

def search_url(keyword) :
    options = ChromeOptions()
    options.add_argument("--start-maximized")
    driver = webdriver.Chrome()
    url = "https://www.youtube.com/results?search_query="+keyword+ "&sp=CAMSAhAB"
    driver.get(url)
    html_source = driver.page_source
    driver.close()
    return html_source


def youtube(keyword) :
    html_source = search_url(keyword)
    soup = BeautifulSoup(html_source, "html.parser")
    a = first(soup)
    b = second(soup)
    c = soup.select_one("#video-title")
    c = ["https://www.youtube.com"+ c["href"]]
    return a, c

def first(soup) :
    title = soup.select_one("#video-title")
    a = title["aria-label"]
    z = title["title"]
    x = a[a.find("게시자:"):a.find("조회수")-1]
    c = a[a.find("조회수"):]
    img = soup.find_all("img",class_="style-scope yt-img-shadow")[1]
    v = img["src"] #썸네일
    return [z,x,c,v]


첫화면, 링크 = youtube("오징어게임")
첫화면
링크




# def youtube(keyword) :
#     html_source = search_url(keyword)
#     soup = BeautifulSoup(html_source, "html.parser")
#     a = first(soup)
#     b = second(soup)
#     c = soup.select("#video-title")[:6]
#     c = ["https://www.youtube.com"+i["href"] for i in c]
#     return a, b, c


def second(soup):
    title = soup.select("#video-title")
    list = [i["aria-label"] for i in title]
    list = list[1:6]
    return list
