url = input("URL: ").strip()
# print(url)

# username = url.replace("https://twitter.com/", "")
# # username = url.removeprefix("https://twitter.com/", "")
# print(f"Username: {username}")

import re
# username = re.sub(r"^(https?://)?(www\.)?twitter\.com/", "" , url)
# print(f"Username: {username}")

if matches:= re.search(r"^https?://(?:www\.)?twitter\.com/(\w+)$", url, re.IGNORECASE): # ?: for non-capturing
    print(f"Username:", matches.group(1))
