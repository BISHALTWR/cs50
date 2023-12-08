import csv

name = input("What's you name? ")
age = input("Where's your age? ")

with open("file_to_read.csv", "a") as file:
    writer = csv.writer(file)
    writer.writerow([name, age])

# with open("file_to_read.csv", "a") as file:
#     writer = csv.DictWriter(file, fieldnames=["names", "home"])
#     writer.writerow({"name": name, "age": age])
