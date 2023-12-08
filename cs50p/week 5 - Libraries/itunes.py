import requests # Use pip install requests first
import sys
import json

if len(sys.argv) != 2:
    sys.exit()

# response = requests.get("https://itunes.apple.com/search?entity=song&limit=1&term=" + sys.argv[1])

# print(response.json())
# print(json.dumps(response.json(), indent = 2)) #dump string

response = requests.get("https://itunes.apple.com/search?entity=song&limit=50&term=" + sys.argv[1])
o = response.json()
for result in o["results"]:
    print(result["trackName"])