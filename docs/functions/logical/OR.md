---
sidebar_position: 4
---

# OR

Returns TRUE if any argument is TRUE.

## Quick Example

```
=OR(A1 > 100, B1 > 100)
```

Returns TRUE if either A1 or B1 (or both) are greater than 100.

## Syntax

```
=OR(logical1, [logical2], ...)
```

### Arguments

- **logical1, logical2, ...** (required): 1 or more conditions to test

## Examples

```
=OR(A1 = "Yes", A1 = "Y")            // TRUE if A1 is "Yes" or "Y"
=OR(B1 < 0, B1 > 100)                // TRUE if B1 out of 0-100 range
=OR(C1 = "Red", C1 = "Blue", C1 = "Green")
=IF(OR(Status = "Complete", Status = "Closed"), "Done", "In Progress")
```

## How It Works

### Truth Table

- All FALSE → Returns FALSE
- Any TRUE → Returns TRUE
- Empty cells in ranges are ignored
- Errors are propagated

### Evaluation

```
=OR(TRUE, FALSE, FALSE)  // TRUE
=OR(FALSE, FALSE, FALSE) // FALSE
=OR(TRUE, TRUE)          // TRUE
=OR(FALSE, FALSE)        // FALSE
```

## Common Use Cases

- Multiple valid values: `=OR(Status="Approved", Status="Complete")`
- Out of range check: `=IF(OR(Value<Min, Value>Max), "Invalid", "Valid")`
- Error detection: `=OR(ISERROR(A1), ISERROR(B1))`
- Multiple criteria match: `=OR(Type="A", Type="B", Type="C")`

## Using with Ranges

```
=OR(A1:A5)  // TRUE if any cell in A1:A5 evaluates to TRUE
```

## Comparison: OR vs AND

```
=AND(A1>0, B1>0)  // Both must be positive
=OR(A1>0, B1>0)   // At least one must be positive
```

## Related Functions

- **[AND](./AND)** - TRUE if all arguments are TRUE
- **[IF](./IF)** - Conditional logic
