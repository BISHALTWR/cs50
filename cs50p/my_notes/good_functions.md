# Docstring

## Google-style
```python
def function(arg_1, arg_2=42):
    """Description of what the function does.

    Args:
        arg_1 (str): Description of arg_1 that can break onto the next line if needed.
        arg_2 (int, optional): Write optional when an argument has default value.

    Returns:
        bool: Optional description of the return value
        Extra liines are not indented

    Raises:
        ValueError: Include any error types that the function intentionally raises.
    
    Notes:
        See https://www.datacamp.com/community/tutorials/docstrings-python for more info.
    """
```

## Numpydoc

```python
def function(arg_1, arg_2=42):
    """
    Description of what the function does.

    Parameters
    ----------
    arg_1 : expected type of arg_1
        Description of arg_1.
    arg_2 : int, optional
        Write optional when an argument has default value.
        Default=42.
    
    Returns
    -------
    The type of the return value
        Can include a description of the return value.
        Replace "Returns" with "Yields" if this function is a generator.
```

## Retrieving docstrings:

- Using .__doc__
```python
print(function_name.__doc__)
```

- Using inspect module
```python
import inspect
print(inspect.getdoc(function_name_))
```
