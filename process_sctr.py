import gzip
import json
import sys

try:
    with gzip.open('data.json.gz', 'rb') as f:
        file_content = f.read()
        try:
            data = json.loads(file_content)
        except json.JSONDecodeError:
            # Maybe it wasn't gzipped but just binary trash? Or maybe it was plain JSON?
            # If gzip fails, it raises OSError usually.
            print("Failed to decode JSON from gzip stream")
            sys.exit(1)
except OSError:
    # Not a gzip file? Try reading as plain text
    with open('data.json.gz', 'rb') as f:
        file_content = f.read()
        try:
            data = json.loads(file_content)
        except json.JSONDecodeError:
            print("Failed to decode JSON from plain file")
            sys.exit(1)

# Inspect the data structure
# The user wants [{"symbol": "XXX", "sctr": 99.9}, ...]
# The JS code says:
# for (var key in data) {
#   var d = data[key];
#   if (d.date) ... else sctrData.push(g)
# }
# where g is an array. But here we have the raw data object.
# The raw data object likely has keys which are symbols or indices, and values are objects.
# The JS code:
# var g = ["", d.symbol, d.name, d.sector, d.industry, formatSCTR(d.SCTR), ...]
# The user wants `symbol` and `sctr`.
# `d.SCTR` is the field.

result = []
if isinstance(data, dict):
    for key, d in data.items():
        if isinstance(d, dict) and 'symbol' in d and 'SCTR' in d:
             # SCTR might be a string or number. User wants number.
             try:
                 sctr_val = float(d['SCTR'])
             except (ValueError, TypeError):
                 sctr_val = 0.0 # or skip
             
             result.append({
                 "symbol": d['symbol'],
                 "sctr": sctr_val
             })
        elif isinstance(d, list): 
             # Maybe array of objects?
             pass 
elif isinstance(data, list):
    for d in data:
        if isinstance(d, dict) and 'symbol' in d and 'SCTR' in d:
             try:
                 sctr_val = float(d['SCTR'])
             except (ValueError, TypeError):
                 sctr_val = 0.0
             result.append({
                 "symbol": d['symbol'],
                 "sctr": sctr_val
             })

# Sort by SCTR descending
result.sort(key=lambda x: x['sctr'], reverse=True)

# Sort by SCTR descending
result.sort(key=lambda x: x['sctr'], reverse=True)

# Print result to stdout
print(json.dumps(result, indent=2))
