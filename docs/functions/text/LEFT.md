---
sidebar_position: 2
---

# LEFT

Returns the leftmost characters from a text string.

## Quick Example

```
=LEFT("Hello World", 5)
```

Returns `Hello`.

## Syntax

```
=LEFT(text, [num_chars])
```

### Arguments

- **text** (required): The text string from which to extract characters
- **num_chars** (optional): The number of characters to extract. Defaults to 1 if omitted.

## Examples

### Extract First Character

```
=LEFT("Apple")
```
Returns `A` (default is 1 character)

### Extract First 5 Characters

```
=LEFT("Hello World", 5)
```
Returns `Hello`

### Extract Area Code

```
=LEFT(PhoneNumber, 3)
```
If PhoneNumber = "5551234567", returns `555`

### Extract First Name Initial

```
=LEFT(A1, 1)
```
Returns first letter of the value in A1

### Extract Year from Date String

```
=LEFT("2024-12-25", 4)
```
Returns `2024`

### Request More Than Available

```
=LEFT("Hi", 10)
```
Returns `Hi` (returns all available characters)

## How It Works

### Character Extraction

LEFT extracts characters from the beginning (left side) of the text:
- Counts from position 1 (first character)
- Extracts the specified number of characters
- Stops at the end of the string if num_chars exceeds length

### Default Behavior

If num_chars is omitted, LEFT returns 1 character:

```
=LEFT("ABC")  // Returns "A"
```

### Exceeding String Length

If num_chars is greater than the string length, LEFT returns the entire string:

```
=LEFT("Short", 100)  // Returns "Short"
```

### Negative num_chars

If num_chars is negative, LEFT returns a `#VALUE!` error:

```
=LEFT("Text", -5)  // Returns #VALUE!
```

## Common Use Cases

### Extract First Name

```
=LEFT(FullName, FIND(" ", FullName) - 1)
```
Extract everything before the first space

### Extract File Extension Prefix

```
=LEFT(Filename, 3)
```
Get first 3 characters of filename

### Parse Codes

```
=LEFT(ProductCode, 2)
```
Extract category code from product ID

### Extract Initials

```
=LEFT(FirstName, 1) & LEFT(LastName, 1)
```
Create initials from first and last names

### Truncate Long Text

```
=LEFT(Description, 50) & "..."
```
Show only first 50 characters with ellipsis

### Extract Country Code

```
=LEFT(PhoneNumber, 2)
```
Extract country code from phone number

## Error Handling

### Error Propagation

If the text argument contains an error, LEFT returns that error:

```
=LEFT(#DIV/0!, 5)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | num_chars is negative | Use positive number |
| #VALUE! | num_chars is not numeric | Provide a number |
| Error propagation | Error in text argument | Check source data |

### Non-Numeric num_chars

```
=LEFT("Text", "abc")
```
Returns `#VALUE!` (num_chars must be a number)

## Technical Details

### Implementation Notes

- Requires 1 or 2 arguments
- num_chars defaults to 1
- Returns entire string if num_chars exceeds length
- Works with any text value
- Converts non-text arguments to text

### Type Conversion

Numbers and other types are converted to text:

```
=LEFT(12345, 3)
```
Returns `123` (number converted to "12345", then extracted)

### Empty String

```
=LEFT("", 5)
```
Returns `""` (empty string)

## Comparison: LEFT vs RIGHT vs MID

### LEFT - From Start

```
=LEFT("Hello World", 5)  // "Hello"
```

### RIGHT - From End

```
=RIGHT("Hello World", 5)  // "World"
```

### MID - From Middle

```
=MID("Hello World", 7, 5)  // "World"
```

## Advanced Examples

### Extract Domain from Email

```
=RIGHT(Email, LEN(Email) - FIND("@", Email))
```
Get everything after @

### Extract First Word

```
=LEFT(A1, IF(ISERROR(FIND(" ",A1)), LEN(A1), FIND(" ",A1)-1))
```
Extract first word, handling single-word cases

### Validate Prefix

```
=IF(LEFT(Code, 2)="AB", "Valid", "Invalid")
```
Check if code starts with "AB"

### Create Abbreviation

```
=LEFT(Word1, 1) & LEFT(Word2, 1) & LEFT(Word3, 1)
```
Create 3-letter abbreviation

## Related Functions

- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[MID](./MID)** - Extract middle characters
- **[LEN](./LEN)** - Get text length
- **[FIND](./FIND)** - Find position of text
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
