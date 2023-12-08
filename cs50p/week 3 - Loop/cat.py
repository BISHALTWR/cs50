# i = 0
# while(i < 3):
#     print("meow")
#     i += 1

# for i in [0, 1, 2]:
#     print("meow")

# That was a poorly designed loop

# for i in range(3):
#     print("meow")

# You don't necessarily need a variable i. You can use _ instead if you are not going to use i again

for _ in range(3):
    print("meow")

# You can also do print("meow\n" * 3, end="")
while True:
    n = int(input("What's n? "))
    if n > 0:
        break
print("meow\n" * n, end="")
