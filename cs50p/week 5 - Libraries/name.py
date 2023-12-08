import sys

# print("Hello, my name is", sys.argv[1]) # sys.argv[0] is name of file
# # If there is not sys.argv[1] then IndexError will occur

# try:
#     print("Hello, my name is ", sys.argv[1])
# except IndexError:
#     print("Please enter your name too.")

# OR
# if len(sys.argv) < 2:
#     print("Too few arguments")
# elif len(sys.argv) > 2:
#     print("Too many arguments")
# else:
#     print("Hello, my name is", sys.argv[1])

# OR better yet (separating error handling and main code)

# Check for error
# if len(sys.argv) < 2:
#     sys.exit("Too few arguments")
# elif len(sys.argv) > 2:
#     sys.exit("Too many arguments")

# print("Hello, my name is", sys.argv[1])

if len(sys.argv) < 2:
    sys.exit("Too few arguments")

for arg in sys.argv[1:]:
    print("Hello, my name is", arg)