---
sidebar_position: 2
---

# AVERAGE

Calculates the arithmetic mean of a set of numbers.

## Quick Example

```
=AVERAGE(A1:A10)
```

Returns the average of values in cells A1 through A10.

## Syntax

```
=AVERAGE(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first number, cell reference, or range
- **value2, ...** (optional): Additional numbers, cell references, or ranges (up to 255 arguments)

## Examples

### Basic Average

```
=AVERAGE(10, 20, 30)
```
Returns `20`

### Average a Range

```
=AVERAGE(A1:A5)
```
If A1:A5 contains [10, 20, 30, 40, 50], returns `30`

### Multiple Ranges

```
=AVERAGE(A1:A5, C1:C5)
```
Averages all values from both ranges

### Excluding Zeros

```
=AVERAGE(A1:A10)
```
Empty cells are ignored, but cells containing 0 are included in the calculation.

## How It Works

### Calculation Method

AVERAGE sums all numbers and divides by the count of numbers (not the count of all cells).

Formula: `SUM(values) / COUNT(values)`

### What Gets Counted

**In ranges:**
- Numbers are included
- Empty cells are ignored
- Text values are ignored
- Logical values (TRUE/FALSE) are ignored

**Direct arguments:**
- Numbers are included
- Text that looks like a number is converted
- TRUE = 1, FALSE = 0
- Empty arguments are treated as 0

## Common Use Cases

### Test Score Average

```
=AVERAGE(B2:B10)
```
Average of 9 test scores

### Average of Top Values

Combine with LARGE to average the top 3 values:
```
=AVERAGE(LARGE(A1:A10,{1,2,3}))
```

### Weighted Average

For a weighted average, use SUMPRODUCT:
```
=SUMPRODUCT(A1:A5,B1:B5)/SUM(B1:B5)
```
Where A1:A5 are values and B1:B5 are weights

## Error Handling

### Division by Zero

If no numeric values are found, AVERAGE returns `#DIV/0!`

```
=AVERAGE(A1:A5)
```
Where A1:A5 contains only text → Returns `#DIV/0!`

### Error Propagation

If any argument contains an error, AVERAGE returns that error:

```
=AVERAGE(10, #VALUE!, 30)
```
Returns `#VALUE!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #DIV/0! | No numeric values in range | Add numbers or check your range |
| #VALUE! | Invalid argument | Verify all arguments are valid |
| #REF! | Invalid cell reference | Check cell references |

## Technical Details

### Precision

- Uses floating-point arithmetic
- Maintains precision through the calculation
- Subject to standard floating-point rounding

### Empty Cell Handling

```
=AVERAGE(A1:A5)
```
Where A1=10, A2=(empty), A3=20, A4=(empty), A5=30

Result: `20` (calculated as (10+20+30)/3, not divided by 5)

## Comparison: AVERAGE vs Manual Calculation

### Using AVERAGE

```
=AVERAGE(A1:A10)
```

### Manual Equivalent

```
=SUM(A1:A10)/COUNT(A1:A10)
```

Both produce the same result, but AVERAGE is more concise.

## Related Functions

- **[SUM](./sum)** - Add all numbers
- **[COUNT](./COUNT)** - Count numeric values
