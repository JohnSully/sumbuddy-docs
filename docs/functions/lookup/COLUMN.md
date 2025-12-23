---
sidebar_position: 1
---

# COLUMN

Returns the column number of a reference.

## Quick Example

```
=COLUMN(C5)
```

Returns `3` (C is the 3rd column).

## Syntax

```
=COLUMN([reference])
```

### Arguments

- **reference** (optional): The cell or range for which you want the column number. If omitted, returns the column of the cell containing the formula.

## Examples

```
=COLUMN()                // Returns column of current cell
=COLUMN(A1)              // Returns 1
=COLUMN(C5)              // Returns 3
=COLUMN(Z1)              // Returns 26
=COLUMN(AA1)             // Returns 27
=COLUMN(B2:E2)           // Returns 2 (leftmost column)
```

## How It Works

### Column Numbering
- A = 1, B = 2, C = 3, ..., Z = 26
- AA = 27, AB = 28, etc.

### With Ranges
Returns column of the leftmost cell:
```
=COLUMN(C1:F1)  // Returns 3 (column C)
```

### No Argument
```
=COLUMN()  // Returns column number of cell containing formula
```

## Common Use Cases

### Create Column Headers
```
=CHAR(64 + COLUMN())  // Returns A, B, C, etc.
```

### Conditional Formatting by Column
```
=MOD(COLUMN(), 2) = 0  // TRUE for even columns
```

### Dynamic References
```
=INDEX(Data, ROW(), COLUMN())
```

### Column-Based Calculations
```
=IF(COLUMN() > 5, "Past deadline", "")
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Reference is not valid | Provide valid cell reference |
| #VALUE! | More than 1 argument | Use 0 or 1 arguments only |

## Technical Details

- Takes 0 or 1 arguments
- Returns column number as a number (double)
- For ranges, returns leftmost column
- Column A = 1, B = 2, etc.

## Related Functions

- **[ROW](./ROW)** - Get row number
