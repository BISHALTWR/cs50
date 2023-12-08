# def main():
#     # name = input("Name: ")
#     # house = input("House: ")
#     # name = get_name()
#     # house = get_house()

#     # name,house = get_student()
#     student = get_student()
#     # You can't do student[0] = "something" if student is tuple
#     print(f"{student[0]} from {student[1]}")

# def get_student():
#     name = input("Name: ")
#     house = input("House: ")
#     # return name,house # This is returning tuple
#     return (name,house) # This is same as above

# # def get_name():
# #     return input("Name: ")

# # def get_house():
# #     return input("House: ")

# if __name__ == "__main__":
#     main()

# class Student():
#     # def __init__(self, name, house, patronus):
#     def __init__(self, name, house):
#         # if not name:
#         #     # sys.exit("Missing name")
#         #     # return None
#         #     raise ValueError # Now you can add exception handling to maybe reprompt
#         # if house not in ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]:
#         #     raise ValueError("Invalid house")
#         self.name = name
#         self.house = house # no underscore here
#         # self.patronus = patronus
    
#     def __str__(self):
#         # return f"{self.name} is in {self.house}. Patronus = {self.patronus}" 
#         return f"{self.name} is in {self.house}." 

#     # Getter
#     @property
#     def house(self):
#         return self._house # underscore here
    
#     # Setter
#     @house.setter # This prevents funciton from assigning value without going through this function
#     def house(self, house): # This will get called any time .house is accessed
#         if house not in ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]:
#             raise ValueError("Invalid house")
#         self._house = house
    
#     @property
#     def name(self):
#         return self._name

#     @name.setter
#     def name(self, name):
#         if not name:
#             raise ValueError("Missing name")
#         self._name = name
#     # def charm(self):
#     #     match self.patronus:
#     #         case "Stag":
#     #             return "🐴"
#     #         case "Otter":
#     #             return "🦦"
#     #         case "Jack Russel terrier":
#     #             return "🐶"
#     #         case _:
#     #             return "✨"

# def main():
#     student = get_student()
#     # print(f"{student.name} from {student.house}")
#     # student.house = "Number Four, Privet Drive" # This will still work though despite the if condition in __init__ method 
#         # but raises error due to setter
#     print(student) # Doesn't work without __str__
#     # print("Expecto Patronum!")
#     # print(student.charm())

# def get_student():
#     # student = Student()
#     # student.name = input("Name: ")
#     # student.house = input("House: ")

#     name = input("Name: ")
#     house = input("House: ")
#     # patronus = input("Patronus: ")
#     # return Student(name, house, patronus)
#     return Student(name, house)

# main()

class Student:
    def __init__(self, name, house):
        self.name = name
        self.house = house
    
    def __str__(self):
        return f"{self.name} from {self.house}"
    
    @classmethod
    def get(cls):
        name = input("Name: ")
        house = input("House: ")
        return cls(name, house)

def main():
    student = Student.get()
    print(student)

if __name__ == "__main__":
    main()