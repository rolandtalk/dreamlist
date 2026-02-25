import requests
from bs4 import BeautifulSoup
import json

url = "https://stockcharts.com/freecharts/sctr.html"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

try:
    response = requests.get(url, headers=headers)
    print(f"Status Code: {response.status_code}")
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        title = soup.title.string if soup.title else "No Title"
        print(f"Title: {title}")
        # Save to file for inspection
        with open("sctr_page_python.html", "w") as f:
            f.write(response.text)
    else:
        print("Failed to fetch page")
except Exception as e:
    print(f"Error: {e}")
