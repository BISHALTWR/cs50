#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'reverse_words_order_and_swap_cases' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING sentence as parameter.
#

def swap_case(word):
    swapped = ""
    for letter in word:
        swapped += letter.swapcase()
    return swapped

def reverse_words_order_and_swap_cases(sentence):
    # Write your code here
    words = []
    words = sentence.split(" ")
    print(words)
    half = len(words)//2
    no_of_words = len(words)
    for i in range(half+1):
        temp_word = swap_case(words[no_of_words-1-i])
        words[no_of_words - 1 - i] = swap_case(words[i])
        words[i] = temp_word
    return_string = ""
    for word in words:
        return_string += word
    return return_string

if __name__ == '__main__':
    sentence = input()

    result = reverse_words_order_and_swap_cases(sentence)

    print(result)
