---
sidebar_position: 4
---

# COUNTA

Counts the number of non-empty cells in a range.

## Quick Example

```
=COUNTA(A1:A10)
```

Returns the count of non-empty cells in the range A1 through A10.

## Syntax

```
=COUNTA(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first value, cell reference, or range to count
- **value2, ...** (optional): Additional values, cell references, or ranges to count (up to 255 arguments)

## Examples

### Count All Non-Empty Cells

```
=COUNTA(A1:A5)
```
If A1:A5 contains [10, "text", TRUE, "", 50], returns `4` (all except the empty cell)

### Count Text Entries

```
=COUNTA(B2:B100)
```
Count how many cells contain any value (numbers, text, or logical values)

### Mixed Values

```
=COUNTA(5, "hello", TRUE, "")
```
Returns `3` (empty string "" is counted as non-empty)

### Multiple Ranges

```
=COUNTA(A1:A10, C1:C10, E1:E10)
```
Counts all non-empty cells across three ranges

### Count Responses

```
=COUNTA(A1:A20)
```
Count total responses in a survey (any non-blank answer)

## How It Works

### What Gets Counted

**In ranges:**
- Numbers are counted
- Text values are counted
- Logical values (TRUE/FALSE) are counted
- Empty strings ("") are counted as non-empty
- Only truly empty cells are ignored

**Direct arguments:**
- Any non-empty value is counted
- Empty arguments (if directly passed) are ignored
- Empty strings are counted

### Truly Empty vs Empty String

```
=COUNTA(A1:A3)
```
- If A1 is blank (never had a value): not counted
- If A2 = "": counted (has a value, even though it's empty text)
- If A3 = 0: counted (zero is a value)

## Common Use Cases

### Count Survey Responses

```
=COUNTA(B2:B100)
```
Count how many people responded (any answer counts)

### Calculate Response Rate

```
=COUNTA(A2:A50)/49
```
Calculate what percentage of 49 expected responses were received

### Count Names in List

```
=COUNTA(A2:A100)
```
Count how many names are in a list

### Data Validation

```
=IF(COUNTA(A1:A10)=10, "Complete", "Missing Data")
```
Check if all cells have been filled in

### Count Column Headers

```
=COUNTA(1:1)
```
Count how many column headers are present

## Error Handling

### Error Propagation

If any argument contains an error value, COUNTA returns that error:

```
=COUNTA(10, #DIV/0!, "text")
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument | Check that arguments are valid |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =COUNTA not =COUNTA1 |

## Comparison: COUNT vs COUNTA

### COUNT - Numbers Only

```
=COUNT(A1:A5)
```
Where A1=10, A2="text", A3=TRUE, A4=empty, A5=20
Returns `2` (only 10 and 20)

### COUNTA - All Non-Empty

```
=COUNTA(A1:A5)
```
Where A1=10, A2="text", A3=TRUE, A4=empty, A5=20
Returns `4` (all except empty cell)

## Technical Details

### Implementation Notes

- Supports up to 255 arguments
- Counts any cell that is not truly empty
- An empty string ("") is considered non-empty
- Efficiently processes large ranges
- Useful for counting text entries where COUNT would return 0

### Empty String Behavior

Important distinction:

```
=COUNTA(A1)
```
- If A1 is blank: returns `0`
- If A1 = "": returns `1` (empty string is a value)
- If A1 = " ": returns `1` (space is a character)

## Related Functions

- **[COUNT](./COUNT)** - Count only numeric values
- **[COUNTIF](../conditional/COUNTIF)** - Count cells that meet a criterion
- **[COUNTIFS](../conditional/COUNTIFS)** - Count cells that meet multiple criteria
- **[ISBLANK](../logical/ISBLANK)** - Check if a cell is blank
- **[SUM](./sum)** - Add all numbers in a range
