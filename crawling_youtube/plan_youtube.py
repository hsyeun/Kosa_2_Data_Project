from selenium import webdriver
from selenium.webdriver import ChromeOptions
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import time

options = ChromeOptions()
options.add_argument("--start-maximized")

driver = webdriver.Chrome()
url = "https://www.youtube.com/results?search_query=%EC%8B%A0%EB%85%84+%EA%B3%84%ED%9A%8D&sp=EgIIBA%253D%253D"
driver.get(url)
time.sleep(3)

last_page_height = driver.execute_script("return document.documentElement.scrollHeight")

page_count = 0
while True:
    scroll_script = "window.scrollTo(0, document.documentElement.scrollHeight);"
    driver.execute_script(scroll_script)
    time.sleep(2)
    scroll_height = "return document.documentElement.scrollHeight"
    new_page_height = driver.execute_script(scroll_height)
    if new_page_height==last_page_height:
        break
    last_page_height = new_page_height
    if page_count > 3:
        break
    else:
        page_count += 1

html_source = driver.page_source
driver.close()

soup = BeautifulSoup(html_source, "html.parser")

title = soup.select("#video-title")

title_url = [ 'https://www.youtube.com' + title_i["href"] for title_i in title]
title_name = [title_i["title"] for title_i in title]

title_df = pd.DataFrame(np.c_[title_url, title_name], columns=["url", "title"])
title_df
# title_df.to_csv("plan_youtube_title.csv", encoding="utf-8-sig")
