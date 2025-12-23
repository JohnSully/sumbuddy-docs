---
sidebar_position: 4
---

# MID

Returns characters from the middle of a text string, given a starting position and length.

## Quick Example

```
=MID("Hello World", 7, 5)
```

Returns `World`.

## Syntax

```
=MID(text, start_num, num_chars)
```

### Arguments

- **text** (required): The text string from which to extract characters
- **start_num** (required): The starting position (1-based). The first character is position 1.
- **num_chars** (required): The number of characters to extract

## Examples

### Extract Middle Characters

```
=MID("Hello World", 7, 5)
```
Returns `World` (starts at position 7, takes 5 characters)

### Extract Month from Date

```
=MID("2024-12-25", 6, 2)
```
Returns `12` (the month)

### Extract Middle Name

```
=MID(FullName, Start, Length)
```
Extract characters between first and last name

### Extract Substring

```
=MID("Product-ABC-123", 9, 3)
```
Returns `ABC`

### Extract from Position 1

```
=MID("Hello", 1, 3)
```
Returns `Hel` (same as LEFT("Hello", 3))

### Request More Than Available

```
=MID("Short", 2, 100)
```
Returns `hort` (returns all available from position 2)

## How It Works

### Position-Based Extraction

MID extracts characters starting from start_num:
- Position 1 is the first character
- Extracts num_chars characters from that position
- Stops at end of string if not enough characters remain

### Start Position Beyond String

If start_num is beyond the string length, MID returns empty string:

```
=MID("Hello", 10, 5)  // Returns ""
```

### num_chars Exceeds Remainder

If num_chars extends beyond the string, MID returns all remaining characters:

```
=MID("Hello", 3, 100)  // Returns "llo"
```

### Invalid Arguments

- If start_num < 1: returns `#VALUE!` error
- If num_chars < 0: returns `#VALUE!` error

## Common Use Cases

### Extract Area Code

```
=MID(Phone, 2, 3)
```
If Phone = "(555)123-4567", returns `555`

### Parse Date Components

```
=MID("2024-12-25", 6, 2)
```
Extract month from ISO date string

### Extract ID Components

```
=MID(ProductID, 4, 3)
```
Extract specific segment from product code

### Get Middle Initial

```
=MID(FullName, FIND(" ", FullName) + 1, 1)
```
Extract first character after first space

### Parse Fixed-Width Data

```
=MID(DataLine, 11, 20)
```
Extract characters 11-30 from fixed-width format

### Extract Username from Email

```
=MID(Email, 1, FIND("@", Email) - 1)
```
Get everything before @ symbol

## Error Handling

### Error Propagation

If any argument contains an error, MID returns that error:

```
=MID(#DIV/0!, 1, 5)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | start_num < 1 | Use position ≥ 1 |
| #VALUE! | num_chars < 0 | Use positive number |
| #VALUE! | Arguments not numeric | Provide numbers for start_num and num_chars |

### Start Position Less Than 1

```
=MID("Text", 0, 5)
```
Returns `#VALUE!` (start position must be at least 1)

### Negative num_chars

```
=MID("Text", 1, -5)
```
Returns `#VALUE!` (num_chars cannot be negative)

## Technical Details

### Implementation Notes

- Requires exactly 3 arguments
- Uses 1-based indexing (first character is position 1)
- Returns empty string if start_num is beyond text length
- Truncates result if num_chars extends beyond end
- Works with any text value

### Type Conversion

Numbers and other types are converted to text:

```
=MID(123456, 2, 3)
```
Returns `234` (number converted to "123456", then extracted)

### Empty String

```
=MID("", 1, 5)
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

### MID - From Any Position

```
=MID("Hello World", 7, 5)  // "World"
=MID("Hello World", 1, 5)  // "Hello" (same as LEFT)
```

## Advanced Examples

### Extract Between Delimiters

```
=MID(A1, FIND("[", A1) + 1, FIND("]", A1) - FIND("[", A1) - 1)
```
Extract text between square brackets

### Parse CSV Field

```
=MID(CSVLine, StartPos, FIND(",", CSVLine, StartPos) - StartPos)
```
Extract field from CSV data

### Extract Nth Word

```
=MID(Text, FIND("~", SUBSTITUTE(Text, " ", "~", N-1)) + 1,
     FIND("~", SUBSTITUTE(Text, " ", "~", N)) - FIND("~", SUBSTITUTE(Text, " ", "~", N-1)) - 1)
```
Extract the Nth word from text

### Validate Code Format

```
=IF(MID(Code, 3, 1)="-", "Valid", "Invalid")
```
Check if character at position 3 is a dash

### Extract Year/Month/Day

```
Year: =MID(Date, 1, 4)
Month: =MID(Date, 6, 2)
Day: =MID(Date, 9, 2)
```
Parse "YYYY-MM-DD" format

## Related Functions

- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[LEN](./LEN)** - Get text length
- **[FIND](./FIND)** - Find position of text
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
