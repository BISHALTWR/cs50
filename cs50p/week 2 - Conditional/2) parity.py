# x = int(input("What is x? "))

# if (x % 2 == 0):
#     print("Even")
# else:
#     print("Odd")

def main():
    x = int(input("What's x? "))
    if is_even(x):
        print("Even")
    else:
        print("Odd")

def is_even(a):
    # if (a % 2 == 0):
    #     return True
    # else:
    #     return False
    # return True if a % 2 == 0 else False # Pythonic method1
    return (a % 2 == 0) # Pythonic method2
    
main()