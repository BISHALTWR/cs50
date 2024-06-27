# Typing test
#### Video Demo:  [Click here](https://youtu.be/F935RAdBz6s)

## Plan and Description

- Generate random text
- OR keep a list of sentences in a file

- Typing test:
    - First phase: (Just terminal based)
        - Display text to type on top
        - Let user type for a min or until he/she types all the text above(number of characters)
        - Compare the text typed with the text to type
        - Keep track of start and end time and use it to calculate speed

    - Seond phase: (GUI using tkinter or PyQt)
        - Display the prompt on top
        - Disable typing after typing is done
        - After completion of typing, change the color of typed stuff (green/red)
        - Display wpm and accuracy when the user presses enter
    
    - Third phase:
        - Real time error highlighting
        - Underline what to type in prompt
        - Update the interface to make it look good.

## First phase:

- This phase required me to create a simple mockup to test typing in terminal
- I used the following libraries:
    - time module for time. duh!
    - zip function was really helpful in comparing input and prompt
    - error was characterwise which wasn't quite good as you could enter an extra character and the text after that would be considered wrong as it would be out of phase from original

```markdown
# List of Sentences, characterwise comparision, space-split word count

- There is a list of sentence
    - One is randomly selected for test
- The "player" is shown the sentence to type
- Players hits enter and types the sentence

- For Accuracy:
    - The user_input and prompt is zipped using zip(user_input, prompt) which creates a list of tuples of characters.
    - Character wise comparision is done

- For Time:
    - Time module is used
    - Time starts just before the input box is shown
    - Time stops after input
    - Difference is used for time

- **For words:**
    - User input is split and len is used
```

> This is the first version
```py
import time
import random

# List of sentences AI generated
sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "The only thing we have to fear is fear itself.",
    "I think, therefore I am.",
    "In the beginning God created the heavens and the earth.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans."
]

def calculate_speed_and_accuracy(user_input, start_time, end_time, prompt):
    time_taken = end_time - start_time
    words_per_minute = len(user_input.split()) / (time_taken / 60)
    
    accuracy = sum(1 for a, b in zip(user_input, prompt) if a == b) / len(prompt) * 100
    
    return words_per_minute, accuracy

def typing_test():
    print('*'*25+"Welcome to the Typing Speed Test!"+'*'*25)
    
    prompt = random.choice(sentences)
    print("\n"+" "*25+"Sentence to type:")
    print(f"\n{prompt}\n")
    
    input("Press Enter to start typing...")

    start_time = time.time()
    user_input = input("\nType here: ")
    end_time = time.time()
    
    wpm, accuracy = calculate_speed_and_accuracy(user_input, start_time, end_time, prompt)
    
    print(f"\nTime taken: {end_time - start_time:.2f} seconds")
    print(f"Words per minute (WPM): {wpm:.2f}")
    print(f"Accuracy: {accuracy:.2f}%")

if __name__ == "__main__":
    typing_test()
```

## Second version:

> Mainly GUI selection and rough mockup

- I had to decide what library to use for graphics
- First I searched online for suggestion.
- tkinter, pygame and PyQt were the libraries I had heard about

- Pygame felt like an overkill for the project
- tkinter interface looked dull and there were suggestions online to not use it
- PyQt is widget based so I could allocate more time to making the program look better(or try my best at least).
    - Also, I wanted to try it.

> So, PyQt was selected because it is such a cutie.

- This is what i learnt about PyQt before actually starting to program:

``` markdown
## Some PyQt theory:
PyQt is a Python binding for Qt, which is a set of C++ libraries and development tools providing platform-independent abstractions for graphical user interfaces (GUIs). Qt also provides tools for networking, threads, regular expressions, SQL databases, SVG, OpenGL, XML, and many other powerful features.
Source: realpython.com

### Widgets
> Rectangular graphical component that you can place on application's window. There are around 40 of these.

- Common ones are:
    - Buttons
        - `QPushButton` class
    - Labels
        - `Qlabel` class
    - Line edits
        - This is input box
        - `QLineEdit` class
    - Combo boxes
        - `QComboBox` class
        - Dropdown
    - Radio buttons
        - `QRadioButton` class

### Layout Managers

> Instead of using .resize() and .move(), you can use layout managers. Layout managers are classes that allow you to size and position your widgets on the application's window or form.

- Four basic layout manager classes:
    - `QHBoxLayout` - Horizontal box layout
    - `QVBoxLayout` - Vertical box layout
    - `QGridLayout` - Grid layout (You can change span as well)
    - `QFormLayout` - Label+Widget Pair

### Dialogs

> With PyQt, you can develop two types of GUI applications. WindowStyle or DialogStyle.

- Dialog Style layout creates an independent window. They can also provide a return value and have default buttons such as Ok and Cancel.

- QMainWindow has following methods:
self.display.setText(text)
self.display.setFocus()
self.setDisplayText()
sef.display.text() can be used to access the current text


### Signals and Slots

> PyQt widgets act as event-catchers. I.e. they can catch specific events, like mouse clicks, keypresses and so on. They can emit signal that can be connected to a function or method called slot.
```

- So this is what I used:
    - Button and labels widgets for obvious usage
    - Input widgets for taking user input
    - Signals and slots was important for:
        - showing result when enter is pressed
        - navigating around the project using buttons
    - In this phase, I decided to make the comparision wordwise which worked wayy better.

- Issues:
    - The interface was really bad.
    - Error was hard to see and correct as the player types.
    - Since the comparision is word based, not knowing what word to type next made the text confusing after i typed few words wrong.

## Third version:

> Mostly interface update and testing

- File Handling:
    - Upto this point, sentences was hardcoded into the program as a list.
    - A file sentences.txt was created and some AI generated quotes were added. 
    - This file was read and the string was split and stripped and converted to a list of sentences.
    - Now, I could add sentences to the file and it would be part of the text.

- Changing color of text as the user typed:
    - Previously, input got colored to show correct and incorrect part after the test ended(i.e. the user pressed enter).
    - Now, coloring was done after each word(Signal was when user pressed Space key)

- Underlining what word to type next:
    - It was hard to see what word of prompt would the input would be compared to next.
    - I underlined what to type next using Space key as signal.
    - So, now, after each word and space, input would get colored and next word to type underlined.

- UI changes:
    - Added exit button to end the app
    - Added main menu button and next test button
    - Changed background color and button colors
    - Made the window size fixed