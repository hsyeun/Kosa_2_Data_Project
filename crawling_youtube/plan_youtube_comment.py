from selenium import webdriver
from selenium.webdriver import ChromeOptions
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import time

title = pd.read_csv("plan_youtube_title.csv", encoding="utf-8-sig")
title.columns

# title = title[:5]
options = ChromeOptions()
options.add_argument("--start-maximized")

driver = webdriver.Chrome()
df1 = pd.DataFrame(columns=["user", "comment", "title_ID"])
for i in range(len(title)) :
    url = title['url'][i]
    driver.get(url)
    time.sleep(1)

    last_page_height = driver.execute_script("return document.documentElement.scrollHeight")
    driver.execute_script("window.scrollTo(0, 500);") # 500픽셀만 스크롤
    time.sleep(3)

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
        if page_count > 2:
            break
        else:
            page_count += 1

    html_source = driver.page_source
    # driver.close()

    soup = BeautifulSoup(html_source, "html.parser")

    comments = soup.select("yt-formatted-string#content-text")
    users = soup.select("a#author-text > span")

    comment_list = [ comment.text.strip() for comment in comments]
    user_list = [ user.text.strip() for user in users]

    comment_df = pd.DataFrame(np.c_[user_list, comment_list], columns=["user", "comment"])
    comment_df["title_ID"] = title["ID"][i]

    df1 = pd.concat([df1, comment_df], ignore_index=True)

driver.close()
# df1.to_csv("plan_youtube_comment.csv", encoding="utf-8-sig", index=False)
