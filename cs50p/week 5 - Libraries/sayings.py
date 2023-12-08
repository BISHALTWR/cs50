def main():
    hello("world")
    goodbye("world")

def hello(name):
    print(f"hello, {name}")

def goodbye(name):
    print(f"goodbye, {name}")

# main()

if __name__ == "__main__": # If you don't add this , main() will be executed everytime you import sayings
    main()
# Value of __name__ is automatically set to "__main__" when the file is run from command line