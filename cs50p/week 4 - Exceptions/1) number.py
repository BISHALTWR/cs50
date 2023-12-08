# x = int(input("What's x? "))
# print(f"x is {x}")

# Problem would occur if user doesn't enter a number (For e.g. "blah")

# try:
#     x = int(input("What's x? ")) # This is the only part of code that can raise Value error

# except ValueError:
#     print("x is not an integer")

# print(f"x is {x}")  # This will generate NameError if there is ValueError.

# Solution to above problem - else statement
def main1():
    try:
        x = int(input("What's x? ")) # This is the only part of code that can raise Value error
    except ValueError:
        print("x is not an integer")
    else:
        print(f"x is {x}")

# You can use loop to get user to input right type of input
def get_int2(prompt):
    while True:
        try:
            return int(input(prompt))
            # x = int(input("What's x? "))
            # return x
            # break
        except ValueError:
            # print("x is not an integer")
            pass
        # else:
        #     break
    # return x

# main1()
print(get_int2("What's x? "))
