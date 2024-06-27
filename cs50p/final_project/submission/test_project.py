import pytest
import time
import os
import tempfile
from project import calculate_wpm, calculate_accuracy, read_quotes

@pytest.fixture
def sample_prompt():
    return "This is a sample prompt for testing."

def test_calculate_wpm(sample_prompt):
    start_time = time.time()
    end_time = start_time + 60
    
    # Test case 1: Empty input
    wpm_empty = calculate_wpm(start_time, end_time, "")
    assert wpm_empty == 0.0, "WPM calculation not working for empty input."

    # Test case 2: Exact input
    input_text = "This is a sample prompt for testing."
    wpm_exact = calculate_wpm(start_time, end_time, input_text)
    assert wpm_exact == 7, "WPM calculation not working for some text"

def test_calculate_accuracy(sample_prompt):
    prompt = "This is a sample prompt for testing."
    user_input = "This is a simple prompt for testing."
    
    # Test case for accuracy calculation
    accuracy = calculate_accuracy(prompt, user_input)
    expected_accuracy = ((len(prompt)-5)/len(prompt)) * 100
    assert accuracy == pytest.approx(expected_accuracy, rel=1e-2), "Accuacy not working with 1 word wrong"

def test_read_quotes():
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(b'This is a sample sentence 1"|"This is another sample sentence 2')
        temp_file.flush()
        temp_file_path = temp_file.name
        sentences = read_quotes(temp_file_path)

    # Assertions
    assert isinstance(sentences, list), "read_quotes doesn't return a list of sentence"
    assert len(sentences) == 2 , "read_quotes read wrong number of text"
    assert all(isinstance(sentence, str) for sentence in sentences), "Sentence list contains something other than strings"

    os.remove(temp_file_path)

if __name__ == "__main__":
    pytest.main()
