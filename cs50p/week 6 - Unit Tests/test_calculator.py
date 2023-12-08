from calculator import square
import pytest
# def test_square():
#     # if square(2) != 4:
#     #     print("2 squared was not 4")
#     # if square(3) != 9:
#     #     print("3 squared was not 9")

#     # assert square(2) == 4
#     # assert square(3) == 9

#     # try:
#     #     assert square(3) == 9
#     # except AssertionError:
#     #     print("3 squared was not 9")
#     # You could add multiple of these

#     assert square(2) == 4
#     assert square(3) == 9
#     assert square(-2) == 4
#     assert square(-3) == 9
#     assert square(0) == 0
#     # And in terminal pytest test_calculator.py

# Better to break your test into categories

def test_positive():
    assert square(2) == 4
    assert square(3) == 9


def test_negative():
    assert square(-2) == 4
    assert square(-3) == 9


def test_zero():
    assert square(0) == 0

def test_str():
    with pytest.raises(TypeError):
        square("cat")