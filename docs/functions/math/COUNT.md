---
sidebar_position: 3
---

# COUNT

Counts the number of cells that contain numeric values in a range.

## Quick Example

```
=COUNT(A1:A10)
```

Returns the count of cells containing numbers in the range A1 through A10.

## Syntax

```
=COUNT(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first value, cell reference, or range to count
- **value2, ...** (optional): Additional values, cell references, or ranges to count (up to 255 arguments)

## Examples

### Count Numbers in a Range

```
=COUNT(A1:A5)
```
If A1:A5 contains [10, "text", 30, "", 50], returns `3` (counts only 10, 30, and 50)

### Count Multiple Ranges

```
=COUNT(A1:A5, C1:C5)
```
Counts all numeric values from both ranges

### Mixed Direct Arguments

```
=COUNT(5, 10, "text", 20)
```
Returns `3` (counts 5, 10, and 20; ignores "text")

### Count with Direct Numbers

```
=COUNT(100, 200, 300)
```
Returns `3`

### Empty Cells Are Ignored

```
=COUNT(A1:A10)
```
Empty cells and text cells are not counted, only cells with numeric values

## How It Works

### What Gets Counted

**In ranges:**
- Numeric values (numbers, dates, currency) are counted
- Text values are ignored
- Empty cells are ignored
- Logical values (TRUE/FALSE) are ignored

**Direct arguments:**
- Numbers are counted
- Text is ignored
- Empty arguments are ignored
- Logical values are ignored

### Difference from COUNTA

COUNT only counts numeric values, while COUNTA counts all non-empty cells:

```
=COUNT(A1:A5)    // Counts only numbers
=COUNTA(A1:A5)   // Counts numbers, text, and any non-empty value
```

## Common Use Cases

### Count Survey Responses

```
=COUNT(B2:B100)
```
Count how many people provided numeric ratings in a survey

### Calculate Average (Manual)

```
=SUM(A1:A10)/COUNT(A1:A10)
```
Manually calculate average (same as AVERAGE function)

### Validate Data Entry

```
=IF(COUNT(A1:A10)=10, "Complete", "Incomplete")
```
Check if all 10 cells have numeric values

### Count Completed Scores

```
=COUNT(B2:B50)
```
Count how many test scores have been entered

## Error Handling

### Error Propagation

If any argument contains an error value, COUNT returns that error:

```
=COUNT(10, #DIV/0!, 30)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument | Check that arguments are valid values or references |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =COUNT not =CONT |

## Technical Details

### Implementation Notes

- Supports up to 255 arguments
- Only counts cells that contain actual numeric values
- Does not coerce text to numbers in ranges
- Dates and currency values are counted as numbers
- Efficiently processes large ranges

### Type Checking

COUNT uses strict type checking for range values:

```
=COUNT(A1:A3)
```
Where A1=5, A2="10", A3=TRUE
Returns `1` (only A1 is counted; "10" and TRUE are ignored)

Direct arguments work the same way:

```
=COUNT(5, "10", TRUE)
```
Returns `1` (only 5 is counted)

## Related Functions

- **[COUNTA](./COUNTA)** - Count non-empty cells (includes text and numbers)
- **[COUNTIF](../conditional/COUNTIF)** - Count cells that meet a criterion
- **[COUNTIFS](../conditional/COUNTIFS)** - Count cells that meet multiple criteria
- **[SUM](./sum)** - Add all numbers in a range
- **[AVERAGE](./average)** - Calculate the average of numbers
