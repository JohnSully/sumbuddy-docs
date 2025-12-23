---
sidebar_position: 2
---

# IFERROR

Returns a value you specify if a formula evaluates to an error; otherwise returns the formula result.

## Quick Example

```
=IFERROR(A1/B1, 0)
```

Returns the result of A1/B1, or 0 if the division causes an error.

## Syntax

```
=IFERROR(value, value_if_error)
```

### Arguments

- **value** (required): The formula or value to check for an error
- **value_if_error** (required): Value to return if value is an error

## Examples

```
=IFERROR(A1/B1, "N/A")               // Return "N/A" if division error
=IFERROR(VLOOKUP(...), "Not found") // Handle lookup failures
=IFERROR(A1, 0)                      // Return 0 if A1 has error
=IFERROR(FIND("@", Email), 0)        // Return 0 if @ not found
```

## How It Works

Catches all error types:
- #DIV/0! (division by zero)
- #VALUE! (wrong type)
- #REF! (invalid reference)
- #NAME? (unrecognized name)
- #NUM! (invalid number)
- #N/A (value not available)

## Common Use Cases

- Safe division: `=IFERROR(Revenue/Units, 0)`
- Lookup with default: `=IFERROR(VLOOKUP(...), "Unknown")`
- Clean error display: `=IFERROR(Formula, "")`
- Validate input: `=IFERROR(A1*2, "Invalid input")`

## Comparison: IFERROR vs IF(ISERROR())

### Using IFERROR (Cleaner)
```
=IFERROR(A1/B1, 0)
```

### Using IF(ISERROR()) (Older Method)
```
=IF(ISERROR(A1/B1), 0, A1/B1)
```

IFERROR is more efficient and doesn't evaluate the formula twice.

## Related Functions

- **[IF](./IF)** - Conditional logic
- **[ISERROR](./ISERROR)** - Check if value is error
- **[ISBLANK](./ISBLANK)** - Check if blank
