import csv

students = []

with open("file_to_read.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        students.append({"name": row["name"], "age": row["age"]})

for student in sorted(students, key = lambda student: student["name"], reverse = True):
    print(f"{student['name']} is of age {student['age']}")