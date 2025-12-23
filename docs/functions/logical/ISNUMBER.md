---
sidebar_position: 6
---

# ISNUMBER

Checks whether a value is a number and returns TRUE or FALSE.

## Quick Example

```
=ISNUMBER(A1)
```

Returns TRUE if A1 contains a number, FALSE otherwise.

## Syntax

```
=ISNUMBER(value)
```

### Arguments

- **value** (required): The value to check

## Examples

```
=ISNUMBER(123)                       // TRUE
=ISNUMBER("123")                     // FALSE (text, not number)
=ISNUMBER(A1)                        // TRUE if A1 contains number
=ISNUMBER(TODAY())                   // TRUE (dates are numbers)
=IF(ISNUMBER(A1), A1*2, "Not a number")
```

## What Counts as a Number

### Returns TRUE For
- Integers: 1, 100, -5
- Decimals: 3.14, -0.5
- Dates: DATE(2025, 12, 25)
- Times: TIME(14, 30, 0)
- Currency values
- Scientific notation: 1.5E+10

### Returns FALSE For
- Text: "Hello", "123"
- Text numbers: "123" (stored as text)
- Blank cells
- Logical values: TRUE, FALSE
- Errors: #DIV/0!, #VALUE!

## How It Works

### Does Not Coerce
ISNUMBER checks the actual data type, it doesn't try to convert text to numbers:

```
=ISNUMBER("100")  // FALSE (text that looks like number)
=ISNUMBER(100)    // TRUE (actual number)
```

### Error Handling
Returns FALSE for errors (does not propagate them):
```
=ISNUMBER(#DIV/0!)  // FALSE
```

## Common Use Cases

- Validate input: `=IF(ISNUMBER(A1), "Valid", "Enter a number")`
- Count numbers: `=COUNTIF(A1:A10, ISNUMBER(A1:A10))`
- Conditional formatting: `=ISNUMBER(A1)`
- Data type checking: `=IF(ISNUMBER(A1), A1, 0)`

## Using with Ranges

```
=ISNUMBER(A1:A5)
```
For a range, returns TRUE only if ALL cells are numbers.

## Related Functions

- **[ISTEXT](./ISTEXT)** - Check if text
- **[ISBLANK](./ISBLANK)** - Check if blank
- **[ISERROR](./ISERROR)** - Check if error
- **[COUNT](../math/COUNT)** - Count numbers in range
