---
sidebar_position: 2
---

# ROW

Returns the row number of a reference.

## Quick Example

```
=ROW(A5)
```

Returns `5` (row 5).

## Syntax

```
=ROW([reference])
```

### Arguments

- **reference** (optional): The cell or range for which you want the row number. If omitted, returns the row of the cell containing the formula.

## Examples

```
=ROW()                   // Returns row of current cell
=ROW(A1)                 // Returns 1
=ROW(A10)                // Returns 10
=ROW(C5)                 // Returns 5
=ROW(A2:A5)              // Returns 2 (topmost row)
```

## How It Works

### Row Numbering
Standard spreadsheet row numbering (1, 2, 3, ...)

### With Ranges
Returns row of the topmost cell:
```
=ROW(A3:A10)  // Returns 3 (first row)
```

### No Argument
```
=ROW()  // Returns row number of cell containing formula
```

## Common Use Cases

### Auto-Numbering Rows
```
=ROW() - 1  // If header in row 1, numbering starts at 0
```

### Sequential IDs
```
=ROW()  // Creates sequential numbers down a column
```

### Conditional Formatting by Row
```
=MOD(ROW(), 2) = 0  // TRUE for even rows (zebra striping)
```

### Dynamic References
```
=INDEX(Data, ROW(), COLUMN())
```

### Offset Calculations
```
=A1 + ROW()  // Different calculation per row
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Reference is not valid | Provide valid cell reference |
| #VALUE! | More than 1 argument | Use 0 or 1 arguments only |

## Technical Details

- Takes 0 or 1 arguments
- Returns row number as a number (double)
- For ranges, returns topmost row
- Row 1 is the first row

## Related Functions

- **[COLUMN](./COLUMN)** - Get column number
