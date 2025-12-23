---
sidebar_position: 7
---

# ISTEXT

Checks whether a value is text and returns TRUE or FALSE.

## Quick Example

```
=ISTEXT(A1)
```

Returns TRUE if A1 contains text, FALSE otherwise.

## Syntax

```
=ISTEXT(value)
```

### Arguments

- **value** (required): The value to check

## Examples

```
=ISTEXT("Hello")                     // TRUE
=ISTEXT(123)                         // FALSE (number, not text)
=ISTEXT("123")                       // TRUE (text that looks like number)
=ISTEXT(A1)                          // TRUE if A1 contains text
=IF(ISTEXT(A1), LEN(A1), 0)          // Get length if text
```

## What Counts as Text

### Returns TRUE For
- Text strings: "Hello", "ABC"
- Text numbers: "123", "3.14"
- Empty strings: ""
- Spaces: " "
- Any string value

### Returns FALSE For
- Numbers: 123, 3.14
- Dates: DATE(2025, 12, 25)
- Logical values: TRUE, FALSE
- Blank/empty cells
- Errors: #DIV/0!, #VALUE!

## How It Works

### Empty String vs Blank
```
=ISTEXT("")       // TRUE (empty string is text)
=ISTEXT(A1)       // FALSE if A1 is blank (not a string)
```

### Error Handling
Returns FALSE for errors (does not propagate them):
```
=ISTEXT(#VALUE!)  // FALSE
```

## Common Use Cases

- Validate text input: `=IF(ISTEXT(A1), "OK", "Enter text")`
- Count text cells: `=COUNTIF(A1:A10, ISTEXT(A1:A10))`
- Text-only processing: `=IF(ISTEXT(A1), UPPER(A1), "")`
- Data type checking: `=IF(ISTEXT(A1), A1, "N/A")`

## Using with Ranges

```
=ISTEXT(A1:A5)
```
For a range, returns TRUE only if ALL cells contain text.

## Related Functions

- **[ISNUMBER](./ISNUMBER)** - Check if number
- **[ISBLANK](./ISBLANK)** - Check if blank
- **[ISERROR](./ISERROR)** - Check if error
- **[LEN](../text/LEN)** - Get text length
