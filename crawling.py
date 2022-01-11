import requests
from bs4 import BeautifulSoup


def naver_weather():
    html = requests.get('https://search.naver.com/search.naver?query=날씨')
    soup = BeautifulSoup(html.text, 'html.parser')

    find_address     = '현재 위치 : '      + soup.find('h2', class_='blind').text  
    find_currenttemp = '현재 온도: '       + soup.select_one('div.temperature_text > strong').text
    find_dust        = '현재 미세먼지: '   + soup.select('dd span.num')[0].text
    find_ultra_dust  = '현재 초미세먼지: ' + soup.select('dd span.num')[1].text
    find_ozone       = '현재 오존지수: '   + soup.select('dd span.num')[2].text

    myList = [find_address, find_currenttemp,
              find_dust, find_ultra_dust, find_ozone]
              
    return myList


if __name__ == '__main__':
    print(naver_weather())
