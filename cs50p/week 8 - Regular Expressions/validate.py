# def main():
#     email = input("What's your email? ").strip()
#     # if "@" in email and "." in email:
#     #     print("Valid")
#     # else:
#     #     print("Invalid")

#     username, domain = email.split("@")

#     if username and "." in domain:
#         print("Valid")
#     else:
#         print("Invalid")

import re
def main():
    email = input("What's your email? ").strip()

    # if re.search(r".+@.+\.edu", email):
    if re.search(r"^[^@]+@[^@]+\.edu$", email):
        print("Valid")
    else:
        print("Invalid")


main()