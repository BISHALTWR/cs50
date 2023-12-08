# x = 1
# y = 2

x = input("Enter first number: ")
y = input("Enter second number: ")
# z = x + y
# print(z) # Output will be xy i.e. if x = 1, y = 2 then, 12 will be displayed. Because input will be text.

# z = int(x) + int(y)
# print(z)

# print(int(x) + int(y))

# Or you could just do x = int(input("Enter first number: ")), same for y and then use print(x+y)

z = float(x) + float(y)
z = round(z)
print(z)
print(f"{z:,}")

z = float(x) / float(y)
z = round(z,2) # 2 decimals after decimal
print(z)

# Or you could do this: print(f"{z:.2f}") can be used to round off using f string.

