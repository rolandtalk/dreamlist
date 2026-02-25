
import json
from bs4 import BeautifulSoup
import sys

def parse_sctr_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the table - usually has an id or class. Let's look for the header 'SCTR'
    table = None
    for t in soup.find_all('table'):
        if 'SCTR' in t.get_text():
            table = t
            break
            
    if not table:
        print("Table not found")
        return

    rows = table.find_all('tr')
    
    results = []
    
    # Skip header row(s). Usually the first one.
    # Let's inspect the first row to find column indices
    header_row = rows[0]
    headers = [th.get_text().strip() for th in header_row.find_all(['th', 'td'])]
    
    try:
        symbol_idx = -1
        sctr_idx = -1
        
        for i, h in enumerate(headers):
            if 'SYMBOL' in h.upper():
                symbol_idx = i
            if 'SCTR' in h.upper():
                sctr_idx = i
                
        if symbol_idx == -1 or sctr_idx == -1:
            # Fallback to hardcoded indices if headers aren't clear
            # Based on screenshot: Icon, Symbol, Name, Sector, Industry, SCTR
            symbol_idx = 1
            sctr_idx = 5 
            
    except Exception as e:
        print(f"Error finding headers: {e}")
        return

    count = 0
    for row in rows[1:]: # Skip header
        cols = row.find_all('td')
        if not cols:
            continue
            
        try:
            # Check if indices are valid
            if len(cols) <= max(symbol_idx, sctr_idx):
                continue
                
            symbol = cols[symbol_idx].get_text().strip()
            sctr_text = cols[sctr_idx].get_text().strip()
            
            # SCTR might have extra text or be empty
            if not sctr_text or sctr_text == '--':
                continue
                
            try:
                sctr = float(sctr_text)
                if 0 <= sctr <= 100:
                    results.append({"symbol": symbol, "sctr": sctr})
                    count += 1
            except ValueError:
                continue
                
        except Exception as e:
            continue
            
    print(json.dumps(results))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python parse_sctr.py <html_file>")
    else:
        parse_sctr_html(sys.argv[1])
