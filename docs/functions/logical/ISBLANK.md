---
sidebar_position: 8
---

# ISBLANK

Checks whether a cell is blank and returns TRUE or FALSE.

## Quick Example

```
=ISBLANK(A1)
```

Returns TRUE if A1 is blank, FALSE otherwise.

## Syntax

```
=ISBLANK(value)
```

### Arguments

- **value** (required): The cell reference to check

## Examples

```
=ISBLANK(A1)                         // TRUE if A1 is empty
=ISBLANK("")                         // FALSE (empty string is not blank)
=IF(ISBLANK(A1), "Required", "OK")   // Validation
=COUNTIF(A1:A10, ISBLANK(A1:A10))    // Count blank cells
```

## What Counts as Blank

### Returns TRUE For
- Completely empty cells (never had content)
- Cells cleared of content

### Returns FALSE For
- Empty strings: ""
- Spaces: " "
- Zero: 0
- Text: any text value
- Numbers: any numeric value
- Formulas that return ""
- Errors: #DIV/0!, #VALUE!

## How It Works

### Empty String vs Blank
```
=ISBLANK("")      // FALSE (empty string exists)
=ISBLANK(A1)      // TRUE if A1 truly blank
```

If A1 contains `=""`, ISBLANK(A1) returns FALSE because the cell contains a formula result.

### Error Handling
Returns FALSE for errors (does not propagate them):
```
=ISBLANK(#DIV/0!)  // FALSE
```

## Common Use Cases

- Required field validation: `=IF(ISBLANK(A1), "Required", "")`
- Conditional calculations: `=IF(ISBLANK(B1), 0, A1*B1)`
- Count filled cells: `=ROWS(A1:A10) - COUNTIF(A1:A10, ISBLANK(A1:A10))`
- Data completeness: `=IF(ISBLANK(A1), "Incomplete", "Complete")`

## Using with Ranges

```
=ISBLANK(A1:A5)
```
For a range, returns TRUE only if ALL cells are blank.

## Comparison: ISBLANK vs LEN vs ""

### Check for Blank
```
=ISBLANK(A1)           // TRUE only if truly empty
```

### Check for Empty (including "")
```
=A1 = ""               // TRUE for blank or empty string
=LEN(A1) = 0           // TRUE for blank or empty string
```

## Related Functions

- **[ISNUMBER](./ISNUMBER)** - Check if number
- **[ISTEXT](./ISTEXT)** - Check if text
- **[ISERROR](./ISERROR)** - Check if error
- **[COUNTA](../math/COUNTA)** - Count non-blank cells
- **[IF](./IF)** - Conditional logic
