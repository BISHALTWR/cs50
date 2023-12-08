import sys

from sayings import hello # this will import hello but also if there is a function call at end, that will be executed


if len(sys.argv) == 2:
    hello(sys.argv[1])