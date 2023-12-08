## How to Test Your Code

### For the file you want to test:

- Keep the main code in `main()`.
- At the end of the file, add:
    ```
    if __name__ == "__main__":
            main()
    ```
    
### For testing the program:

- Create a program.
- Import the program you want to check or function.
- Add conditionals, or use assert statements:
    ```
    assert function_name(value) == expected_value
    ```
    - It asserts something is true, and if not, it generates an AssertionError.
    - Use exception handling for those cases to display a message.
- Alternatively, use pytest:
    - Use assert statements in code in a function starting with `test_`.
    - In the terminal: `pytest test_code.py`.
    - If that doesn't work: `py -m pytest test_code.py`.
    - If you need to test for some error:
        - Import pytest:
            ```
            import pytest
            ```
        - Inside the test function:
            ```
            with pytest.raises(TypeError):
                    square("cat")
            ```
    - You can create a separate folder for tests:
        - Inside that folder, create a file named `__init__.py`, which even if empty tells Python to treat the folder as a package, not just a module.
        - Now: `pytest test_folder_name`.
