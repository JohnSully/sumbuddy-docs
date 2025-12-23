---
sidebar_position: 5
---

# ISERROR

Checks whether a value is an error and returns TRUE or FALSE.

## Quick Example

```
=ISERROR(A1/B1)
```

Returns TRUE if the division results in an error, FALSE otherwise.

## Syntax

```
=ISERROR(value)
```

### Arguments

- **value** (required): The value to check for an error

## Examples

```
=ISERROR(A1)                         // TRUE if A1 contains an error
=ISERROR(1/0)                        // TRUE (#DIV/0! error)
=ISERROR("text")                     // FALSE (not an error)
=IF(ISERROR(A1), "Error", A1)        // Display "Error" or value
```

## Error Types Detected

- #DIV/0! (division by zero)
- #VALUE! (wrong type)
- #REF! (invalid reference)
- #NAME? (unrecognized name)
- #NUM! (invalid number)
- #N/A (value not available)
- #NULL! (null intersection)

## How It Works

### Returns TRUE For
- Any error value
- Formula result that is an error

### Returns FALSE For
- Numbers
- Text
- Blank cells
- Logical values (TRUE/FALSE)
- Dates

### Does Not Propagate Errors
Unlike most functions, ISERROR does NOT return the error itself:
```
=ISERROR(#DIV/0!)  // Returns TRUE (not #DIV/0!)
```

## Common Use Cases

- Error checking: `=IF(ISERROR(Formula), "Check input", Formula)`
- Conditional calculations: `=IF(ISERROR(A1/B1), 0, A1/B1)`
- Data validation: `=COUNTIF(A1:A10, ISERROR(A1:A10))`
- Clean displays: `=IF(ISERROR(VLOOKUP(...)), "", VLOOKUP(...))`

## Comparison: ISERROR vs IFERROR

### Using ISERROR (Older Method)
```
=IF(ISERROR(A1/B1), 0, A1/B1)
```
Evaluates formula twice.

### Using IFERROR (Recommended)
```
=IFERROR(A1/B1, 0)
```
More efficient, evaluates once.

## Related Functions

- **[IFERROR](./IFERROR)** - Return value if error (recommended)
- **[IF](./IF)** - Conditional logic
- **[ISBLANK](./ISBLANK)** - Check if blank
- **[ISNUMBER](./ISNUMBER)** - Check if number
