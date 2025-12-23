---
sidebar_position: 3
---

# RIGHT

Returns the rightmost characters from a text string.

## Quick Example

```
=RIGHT("Hello World", 5)
```

Returns `World`.

## Syntax

```
=RIGHT(text, [num_chars])
```

### Arguments

- **text** (required): The text string from which to extract characters
- **num_chars** (optional): The number of characters to extract. Defaults to 1 if omitted.

## Examples

### Extract Last Character

```
=RIGHT("Apple")
```
Returns `e` (default is 1 character)

### Extract Last 5 Characters

```
=RIGHT("Hello World", 5)
```
Returns `World`

### Extract File Extension

```
=RIGHT(Filename, 3)
```
If Filename = "document.pdf", returns `pdf`

### Extract Last Name Initial

```
=RIGHT(LastName, 1)
```
Returns last letter of the name

### Extract Last 4 Digits

```
=RIGHT(CreditCard, 4)
```
Get last 4 digits of credit card number

### Request More Than Available

```
=RIGHT("Hi", 10)
```
Returns `Hi` (returns all available characters)

## How It Works

### Character Extraction

RIGHT extracts characters from the end (right side) of the text:
- Counts from the end of the string
- Extracts the specified number of characters
- Returns entire string if num_chars exceeds length

### Default Behavior

If num_chars is omitted, RIGHT returns 1 character:

```
=RIGHT("ABC")  // Returns "C"
```

### Exceeding String Length

If num_chars is greater than the string length, RIGHT returns the entire string:

```
=RIGHT("Short", 100)  // Returns "Short"
```

### Negative num_chars

If num_chars is negative, RIGHT returns a `#VALUE!` error:

```
=RIGHT("Text", -5)  // Returns #VALUE!
```

## Common Use Cases

### Extract Last Name

```
=RIGHT(FullName, LEN(FullName) - FIND(" ", FullName))
```
Extract everything after the first space

### Extract File Extension

```
=RIGHT(Filename, LEN(Filename) - FIND(".", Filename))
```
Get file extension (everything after last period)

### Extract Last 4 of SSN

```
=RIGHT(SSN, 4)
```
Get last 4 digits for display/verification

### Parse Domain

```
=RIGHT(URL, LEN(URL) - FIND(".", URL))
```
Extract top-level domain

### Get Line Number

```
=RIGHT(InvoiceNumber, 5)
```
Extract last 5 characters as line number

### Extract Suffix

```
=RIGHT(PartNumber, 2)
```
Get variant code from part number

## Error Handling

### Error Propagation

If the text argument contains an error, RIGHT returns that error:

```
=RIGHT(#DIV/0!, 5)
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
=RIGHT("Text", "abc")
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
=RIGHT(12345, 3)
```
Returns `345` (number converted to "12345", then extracted)

### Empty String

```
=RIGHT("", 5)
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

### Extract Extension with Period

```
=RIGHT(Filename, LEN(Filename) - FIND("~", SUBSTITUTE(Filename, ".", "~", LEN(Filename) - LEN(SUBSTITUTE(Filename, ".", "")))))
```
Get extension after last period in filename

### Mask All But Last 4

```
=CONCATENATE(REPT("*", LEN(A1)-4), RIGHT(A1, 4))
```
Show ****1234 for credit card

### Extract State from Address

```
=RIGHT(LEFT(Address, LEN(Address) - 6), 2)
```
Extract 2-letter state code (assuming format "City, ST 12345")

### Validate Suffix

```
=IF(RIGHT(SKU, 1)="X", "Discontinued", "Active")
```
Check if SKU ends with X

## Related Functions

- **[LEFT](./LEFT)** - Extract leftmost characters
- **[MID](./MID)** - Extract middle characters
- **[LEN](./LEN)** - Get text length
- **[FIND](./FIND)** - Find position of text
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
