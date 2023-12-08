# print("hello, world")

name = input("What's your name? ")
# print("Hello, " + name)
# print("Hello, ", end="") # So that there is no new line at end
# print(name)
# print("hello, ", name, sep = "#")

# name = name.strip()
# name = name.lstrip()
# name = name.rstrip()
# name = name.capitalize()
# name = name.title()
name = name.strip().title() # You can combine multiple methods

first, last = name.split(" ")
print(f"Hello, {first}, {last}. How are you ?")

# print("\" is double inverted comma.") # using escape character