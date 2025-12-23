---
sidebar_position: 3
---

# AND

Returns TRUE if all arguments are TRUE.

## Quick Example

```
=AND(A1 > 0, B1 > 0)
```

Returns TRUE only if both A1 and B1 are greater than 0.

## Syntax

```
=AND(logical1, [logical2], ...)
```

### Arguments

- **logical1, logical2, ...** (required): 1 or more conditions to test

## Examples

```
=AND(A1 > 10, A1 < 100)              // TRUE if A1 between 10 and 100
=AND(B1 = "Yes", C1 = "Yes")         // TRUE if both are "Yes"
=AND(D1 > 0, E1 > 0, F1 > 0)         // TRUE if all three positive
=IF(AND(Score >= 90, Attendance >= 95), "Honors", "Regular")
```

## How It Works

### Truth Table

- All TRUE → Returns TRUE
- Any FALSE → Returns FALSE
- Empty cells in ranges are ignored
- Errors are propagated

### Evaluation

```
=AND(TRUE, TRUE, TRUE)   // TRUE
=AND(TRUE, FALSE, TRUE)  // FALSE
=AND(TRUE, TRUE)         // TRUE
=AND(FALSE, FALSE)       // FALSE
```

## Common Use Cases

- Range validation: `=AND(A1 >= 0, A1 <= 100)`
- Multiple criteria: `=IF(AND(Age >= 18, HasLicense = TRUE), "Can drive", "Cannot drive")`
- Data quality: `=AND(NOT(ISBLANK(A1)), NOT(ISBLANK(B1)))`
- Form validation: `=AND(LEN(Name) > 0, LEN(Email) > 5)`

## Using with Ranges

```
=AND(A1:A5)  // TRUE if all cells in A1:A5 evaluate to TRUE
```

Empty cells in ranges are ignored.

## Related Functions

- **[OR](./OR)** - TRUE if any argument is TRUE
- **[IF](./IF)** - Conditional logic
