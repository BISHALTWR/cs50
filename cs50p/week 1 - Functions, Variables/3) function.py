# def hello(first, last):
#     print(f"Hello, {first} {last}. How are you? ")

# name = input("What's your name? ")
# first, last = name.strip().title().split(" ")

# hello(first, last)

def main():
    name = input("What's your name? ")
    first, last = name.strip().title().split(" ")
    hello(first, last)

def hello(first, last):
    print(f"Hello, {first} {last}. How are you? ")

main() # Call the main function