---
sidebar_position: 5
---

# MIN

Returns the smallest number in a set of values.

## Quick Example

```
=MIN(A1:A10)
```

Returns the minimum value from cells A1 through A10.

## Syntax

```
=MIN(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first number, cell reference, or range
- **value2, ...** (optional): Additional numbers, cell references, or ranges (up to 255 arguments)

## Examples

### Find Minimum in Range

```
=MIN(A1:A5)
```
If A1:A5 contains [45, 12, 78, 23, 56], returns `12`

### Multiple Ranges

```
=MIN(A1:A5, C1:C5)
```
Returns the minimum value across both ranges

### Mix of Values and Ranges

```
=MIN(A1:A5, 5, 100)
```
Finds the minimum among the range values and the direct values 5 and 100

### Find Lowest Price

```
=MIN(B2:B20)
```
Returns the lowest price from a list

### Compare Two Values

```
=MIN(A1, B1)
```
Returns whichever value is smaller

### With Negative Numbers

```
=MIN(-5, 10, -20, 30)
```
Returns `-20` (the smallest value)

## How It Works

### Number Processing

**In ranges:**
- Numbers are included in the comparison
- Text values are ignored
- Empty cells are ignored
- Logical values (TRUE/FALSE) are ignored

**Direct arguments:**
- Numbers are compared directly
- Text that can be coerced to numbers is converted
- TRUE converts to 1, FALSE to 0
- Empty arguments are treated as 0

### No Values Found

If no numeric values are found in any of the arguments, MIN returns `0`:

```
=MIN(A1:A5)
```
Where all cells contain text → Returns `0`

## Common Use Cases

### Find Lowest Score

```
=MIN(B2:B50)
```
Find the lowest test score

### Calculate Price Floor

```
=MIN(A1:A10)
```
Find the minimum acceptable price

### Budget Analysis

```
=MIN(Monthly_Expenses)
```
Find the lowest monthly expense

### Quality Control

```
=MIN(Temperature_Readings)
```
Find the lowest temperature reading

### Time Tracking

```
=MIN(C2:C100)
```
Find the shortest completion time

## Error Handling

### Error Propagation

If any argument contains an error value, MIN returns that error:

```
=MIN(10, #DIV/0!, 30)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument | Check that arguments are valid |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =MIN not =MINIMUM |

### Empty Range Behavior

```
=MIN(A1:A10)
```
If range contains no numbers → Returns `0` (not an error)

## Technical Details

### Implementation Notes

- Supports up to 255 arguments
- Returns 0 if no numeric values are found
- Uses standard numeric comparison
- Efficiently processes large ranges
- Handles negative numbers correctly

### Type Coercion

When arguments are provided directly:

```
=MIN(5, "10", TRUE)
```
Returns `1` (TRUE is converted to 1, "10" is converted to 10)

When values are in a range:

```
=MIN(A1:A3)
```
Where A1=5, A2="10", A3=TRUE
Returns `5` (only the number is considered; text and logical are ignored)

### Zero vs Empty

```
=MIN(A1:A5)
```
- If all cells are empty: returns `0`
- If one cell = 0 and others are empty: returns `0`
- The function cannot distinguish between "no values" and "minimum is 0"

## Comparison: MIN vs MAX

### MIN - Smallest Value

```
=MIN(10, 20, 30, 40, 50)
```
Returns `10`

### MAX - Largest Value

```
=MAX(10, 20, 30, 40, 50)
```
Returns `50`

## Related Functions

- **[MAX](./MAX)** - Find the largest value
- **[AVERAGE](./average)** - Calculate the average
- **[COUNT](./COUNT)** - Count numeric values
- **[IF](../logical/IF)** - Conditional logic
