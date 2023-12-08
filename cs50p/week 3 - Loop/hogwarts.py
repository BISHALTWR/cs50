students = ["Hermione", "Harry", "Ron"]

# print(students[0])

# for student in students:
#     print(student)

for i in range(len(students)):
    print(i+1,students[i])

# students = {
#     "Hermione": "Gryffindor",
#     "Harry": "Gryffindor",
#     "Ron": "Gryffindor",
#     "Draco": "Slytherin"
# }

# for student in students:
#     print(student, students[student])

students = [
    {"name": "Hermione", "house": "Gryffindor", "patronous": "Otter"},
    {"name": "Harry", "house": "Gryffindor", "patronous": "Stag"},
    {"name": "Ron", "house": "Gryffindor", "patronous": "Jack Russel terrier"},
    {"name": "Draco", "house": "Slytherin", "patronous": None}
]

for student in students:
    print(student["name"], student["house"], student["patronous"], sep=", ")

# Approaching complex problem

def print_line(size): # Step3
    print("#"*size)

def print_square(size): # Step2
    for i in range(size):
        print_line(size)

print_square(3) # Step1