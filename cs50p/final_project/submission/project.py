import sys
import random
import time
from PyQt6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QTextEdit, QPushButton
from PyQt6.QtCore import Qt, QEvent
from PyQt6.QtGui import QPixmap, QTextCursor, QTextCharFormat, QColor

def read_quotes(filename):
    with open(f'{filename}', 'r', encoding='utf-8') as file:
        sentences = file.read().strip().split('|')
    sentences = [sentence.strip("\"") for sentence in sentences if sentence.strip()]
    return sentences

sentences = read_quotes('sentences.txt')

class NoCopyPasteTextEdit(QTextEdit):
    def __init__(self, parent=None):
        super().__init__(parent)
    
    def contextMenuEvent(self, event):
        menu = self.createStandardContextMenu()
        menu.clear()
        event.accept()

class TypingTestApp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()
        
    def initUI(self):
        self.setWindowTitle('Typing Speed Test')
        self.setFixedSize(600, 400)
        self.setStyleSheet("background-color: lightblue;")

        self.layout = QVBoxLayout()
        
        self.image_label = QLabel(self)
        pixmap = QPixmap('typing.png') 
        self.image_label.setPixmap(pixmap)
        self.image_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.layout.addWidget(self.image_label)

        self.prompt_label = QLabel("", self)
        self.prompt_label.setWordWrap(True)
        self.layout.addWidget(self.prompt_label)
        self.prompt_label.setStyleSheet("color: black;")
        
        self.input_text = NoCopyPasteTextEdit(self)
        self.input_text.setStyleSheet("color: black;")
        self.input_text.setVisible(False)
        self.input_text.setAcceptRichText(False)
        self.layout.addWidget(self.input_text)
        
        self.start_button = QPushButton('Start Test', self)
        self.start_button.setStyleSheet("background-color: green; color: black;")
        self.start_button.clicked.connect(self.start_test)
        self.layout.addWidget(self.start_button)

        self.result_label = QLabel("", self)
        self.layout.addWidget(self.result_label)
        
        self.next_button = QPushButton('Next Test', self)
        self.next_button.setVisible(False)
        self.next_button.setStyleSheet("background-color: green; color: black;")
        self.next_button.clicked.connect(self.start_test)
        self.layout.addWidget(self.next_button)

        self.reset_button = QPushButton('Main Menu', self)
        self.reset_button.setVisible(False)
        self.reset_button.setStyleSheet("background-color: orange; color: black;")
        self.reset_button.clicked.connect(self.reset_test)
        self.layout.addWidget(self.reset_button)
        
        self.exit_button = QPushButton('Exit', self)
        self.exit_button.setStyleSheet("background-color: red; color: black;")
        self.exit_button.clicked.connect(self.exit_app)
        self.layout.addWidget(self.exit_button)

        self.setLayout(self.layout)
        
        self.prompt = ""
        self.start_time = 0
        self.end_time = 0
        
        # Install event filter on the input_text widget
        self.input_text.installEventFilter(self)
        
    def start_test(self):
        self.input_text.setReadOnly(False)
        self.input_text.setVisible(True)
        self.input_text.setFocus()
        self.start_button.setVisible(False)
        self.next_button.setVisible(False)
        self.image_label.setVisible(False)
        self.reset_button.setVisible(True)
        self.prompt = random.choice(sentences)
        self.prompt_label.setText(self.prompt)
        self.current_word_index = 0
        self.update_prompt_label()
        self.input_text.clear()
        self.result_label.setText("")
        self.start_time = time.time()
        
    def end_test(self):
        self.end_time = time.time()
        self.next_button.setVisible(True)
        self.input_text.setReadOnly(True)
        user_input = self.input_text.toPlainText().strip()
        # print(self.prompt)
        wpm, accuracy = self.result(user_input, self.prompt)

        self.result_label.setText(f"WPM: {wpm:.2f}, Accuracy: {accuracy:.2f}%")
        if accuracy >= 95:
            self.result_label.setStyleSheet("color: green;")
        elif accuracy >= 80:
            self.result_label.setStyleSheet("color: black;")
        else:
            self.result_label.setStyleSheet("color: red;")

        self.update_text_colors()

    def update_prompt_label(self):
        words = self.prompt.split()
        underlined_word = f"<u>{words[self.current_word_index]}</u>"
        words[self.current_word_index] = underlined_word
        self.prompt_label.setText(" ".join(words))

    def update_text_colors(self):
        prompt_words = self.prompt.split()
        user_input = self.input_text.toPlainText().strip()
        user_words = user_input.split()

        default_format = QTextCharFormat()
        default_format.setForeground(QColor("black"))

        self.input_text.clear()
        cursor = self.input_text.textCursor()
        cursor.movePosition(QTextCursor.MoveOperation.Start)

        cursor.select(QTextCursor.SelectionType.Document)
        cursor.setCharFormat(default_format)
        cursor.clearSelection()

        for prompt_word, user_word in zip(prompt_words, user_words):
            if prompt_word == user_word:
                format = QTextCharFormat()
                format.setForeground(QColor("green"))
                cursor.insertText(prompt_word + " ", format)
            else:
                format = QTextCharFormat()
                format.setForeground(QColor("red"))
                cursor.insertText(user_word + " ", format)
            cursor.movePosition(QTextCursor.MoveOperation.WordRight)

        cursor.setCharFormat(default_format)
        self.input_text.setTextCursor(cursor)

    def result(self, user_input, prompt):
        # print(prompt)
        wpm = calculate_wpm(self.start_time, self.end_time, user_input)
        accuracy = calculate_accuracy(user_input, prompt)

        return wpm, accuracy

    
    def reset_test(self):
        self.image_label.setVisible(True)
        self.start_button.setVisible(True)
        self.next_button.setVisible(False)
        self.prompt_label.setText("")
        self.reset_button.setVisible(False)
        self.input_text.clear()
        self.input_text.setVisible(False)
        self.result_label.setText("")
        self.start_time = 0
        self.end_time = 0

    def exit_app(self):
        QApplication.quit()

    def eventFilter(self, obj, event):
        if obj == self.input_text and event.type() == QEvent.Type.KeyPress:
            if event.key() in (Qt.Key.Key_Enter, Qt.Key.Key_Return):
                if self.start_time != 0:  # Check if the test has started
                    self.end_test()
                    return True
            elif event.key() == Qt.Key.Key_Space:
                user_words = self.input_text.toPlainText().strip().split()
                self.current_word_index = len(user_words)
                if self.current_word_index < len(self.prompt.split()):
                    self.update_prompt_label()
                self.update_text_colors()
        return super().eventFilter(obj, event)

def calculate_wpm(start_time, end_time, user_input):
    time_taken = end_time - start_time
    words_per_minute = len(user_input.split()) / (time_taken / 60)
    return words_per_minute

def calculate_accuracy(user_input, prompt):
    user_words = user_input.split()
    prompt_words = prompt.split()
    total_words = len(prompt_words)
    if not prompt_words:
        return 0.0
    
    correct_words = sum(1 for u, p in zip(user_words, prompt_words) if u == p)
    accuracy = (correct_words / total_words) * 100 if total_words > 0 else 0 / len(prompt) * 100
    return accuracy

def main():
    app = QApplication(sys.argv)
    ex = TypingTestApp()
    ex.show()
    try:
        sys.exit(app.exec())
    except SystemExit:
        print("Thank you for using the Typing Speed Test application!\nHave a wonderful day my friend. :bishaltwr@gmail.com")

if __name__ == '__main__':
    main()
