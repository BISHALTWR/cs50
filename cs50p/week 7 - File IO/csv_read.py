# with open("name_age.csv","r") as file:
#     for line in file:
#             # row = line.strip().split(",")
#             # print(f"{row[0]}'s age is{row[1]}")
#             name, age = line.strip().split(",")
#             print(f"{name}'s age is {age}")

# students = []

# with open("name_age.csv") as file:
#     for line in file:
#         name, house = line.rstrip().split(",")
#         students.append(f"{name}'s age is {house}")

# for student in sorted(students):
#     print(student)

# students = []

# with open("name_age.csv") as file:
#     for line in file:
#         name, age = line.rstrip().split(",")
#         student = {}
#         student["name"] = name
#         student["age"] = age
#         students.append(student)

# print(students)

# for student in students:
#     print(f"{student['name']} is in {student['age']}")

# def get_name(student):
#     return student["name"]

# for student in sorted(students, key = get_name, reverse = True):
#     print(f"{student['name']} is in {student['age']}")


# for student in sorted(students, key = lambda student: student["name"], reverse = True):
#     print(f"{student['name']} is in {student['age']}")

import csv

students = []

with open("name_age.csv") as file:
    reader = csv.reader(file)
    for name,age in reader:
        students.append({"name": name, "age": age})

for student in sorted(students, key = lambda student: student["name"], reverse = True):
    print(f"{student['name']} is in {student['age']}")

