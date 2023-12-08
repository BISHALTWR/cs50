import re

name = input("What's your name? ").strip()

# matches = re.search(r"^(.+), *(.+)$", name)
# if matches:
#     # last, first = matches.groups()
#     # last = matches.group(1)
#     # first = matches.group(2)
#     # name = f"{first} {last}"
#     name = matches.group(2) + " " + matches.group(1)

if matches := re.search(r"^(.+), *(.+)$", name): # Walrus(:=) operator (assign as well as check)
    name = matches.group(2) + " " + matches.group(1)
print(f"hello, {name}")