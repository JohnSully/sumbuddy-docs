---
sidebar_position: 1
---

# SUM

Adds all numbers in a range of cells or list of values.

## Quick Example

```
=SUM(A1:A10)
```

Adds all values from cell A1 through A10.

## Syntax

```
=SUM(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first number, cell reference, or range to add
- **value2, ...** (optional): Additional numbers, cell references, or ranges to add (up to 255 arguments)

## Examples

### Basic Addition

```
=SUM(5, 10, 15)
```
Returns `30`

### Sum a Range

```
=SUM(A1:A5)
```
If A1:A5 contains [10, 20, 30, 40, 50], returns `150`

### Multiple Ranges

```
=SUM(A1:A5, C1:C5, 100)
```
Adds values from two ranges plus an additional value

### Currency Values

```
=SUM(A1:A10)
```
If the range contains currency-formatted values, the result will also be formatted as currency.

## How It Works

### Number Processing

- Numbers are added directly
- Text values in ranges are ignored
- Empty cells are treated as 0
- Logical values (TRUE/FALSE) in ranges are ignored

### Direct Arguments vs Ranges

When you pass values directly (not as a range):
- Numbers are added
- Text that looks like a number is converted and added
- TRUE is converted to 1, FALSE to 0

When values are in a range reference:
- Only numeric values are summed
- Text, blank cells, and logical values are ignored

### Currency Handling

If any cell in the range is formatted as currency, the SUM result will automatically be formatted as currency.

## Common Use Cases

### Monthly Totals

```
=SUM(B2:B13)
```
Total revenue across 12 months

### Running Total

In cell C2:
```
=SUM($B$2:B2)
```
Copy down to create a running total (use absolute reference for start, relative for end)

### Conditional Sums

For sums with conditions, use SUMIF or SUMIFS instead:
```
=SUMIF(A1:A10, ">100")
```

## Error Handling

### Error Propagation

If any argument contains an error value (like #VALUE!, #DIV/0!), SUM returns that error.

```
=SUM(A1, #DIV/0!, A3)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument type | Check that arguments are numbers or valid references |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =SUM not =SUMM |

## Technical Details

### Implementation Notes

- Supports up to 255 arguments
- Uses high-precision arithmetic to minimize rounding errors
- Efficiently processes large ranges
- Automatically handles mixed number and currency types

### Type Coercion

When arguments are provided directly (not as range references):

```
=SUM(5, "10", TRUE)
```
Returns `16` (5 + 10 + 1)

When values are in a range:
```
=SUM(A1:A3)
```
Where A1=5, A2="10", A3=TRUE
Returns `5` (only the number is summed; text and logical are ignored)

## Related Functions

- **[SUMIF](../conditional/SUMIF)** - Sum cells that meet a criterion
- **[SUMIFS](../conditional/SUMIFS)** - Sum cells that meet multiple criteria
- **[AVERAGE](./average)** - Calculate the average of numbers
- **[COUNT](./COUNT)** - Count how many numbers are in a range
- **[PRODUCT](./PRODUCT)** - Multiply numbers together
