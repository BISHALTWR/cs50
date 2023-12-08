# name = input("What's your name? ")
# file = open("name.txt","w")
# file.write(f"{name}\n")
# file.close()

# with open("names.txt", "r") as file:
#     lines = file.readlines()

# for line in lines:
#     print("hello,",line.strip())

# with open("names.txt", "r") as file:
#     for line in file:
#         print("hello,", line.rstrip())

names = []

with open("names.txt") as file:
    for line in file:
        names.append(line.rstrip())

for name in sorted(names, reverse = True):
    print(f"hello, {name}")