---
sidebar_position: 6
---

# MAX

Returns the largest number in a set of values.

## Quick Example

```
=MAX(A1:A10)
```

Returns the maximum value from cells A1 through A10.

## Syntax

```
=MAX(value1, [value2], ...)
```

### Arguments

- **value1** (required): The first number, cell reference, or range
- **value2, ...** (optional): Additional numbers, cell references, or ranges (up to 255 arguments)

## Examples

### Find Maximum in Range

```
=MAX(A1:A5)
```
If A1:A5 contains [45, 12, 78, 23, 56], returns `78`

### Multiple Ranges

```
=MAX(A1:A5, C1:C5)
```
Returns the maximum value across both ranges

### Mix of Values and Ranges

```
=MAX(A1:A5, 100, 200)
```
Finds the maximum among the range values and the direct values 100 and 200

### Find Highest Score

```
=MAX(B2:B20)
```
Returns the highest score from a list

### Compare Two Values

```
=MAX(A1, B1)
```
Returns whichever value is larger

### With Negative Numbers

```
=MAX(-5, 10, -20, 30)
```
Returns `30` (the largest value)

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

If no numeric values are found in any of the arguments, MAX returns `0`:

```
=MAX(A1:A5)
```
Where all cells contain text → Returns `0`

## Common Use Cases

### Find Highest Score

```
=MAX(B2:B50)
```
Find the highest test score

### Peak Performance

```
=MAX(Sales_Data)
```
Find the best sales day

### Temperature Monitoring

```
=MAX(Temperature_Readings)
```
Find the highest temperature

### Budget Analysis

```
=MAX(Monthly_Expenses)
```
Find the highest monthly expense

### Growth Tracking

```
=MAX(C2:C100)
```
Find the maximum growth value

## Error Handling

### Error Propagation

If any argument contains an error value, MAX returns that error:

```
=MAX(10, #DIV/0!, 30)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument | Check that arguments are valid |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =MAX not =MAXIMUM |

### Empty Range Behavior

```
=MAX(A1:A10)
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
=MAX(5, "10", TRUE)
```
Returns `10` ("10" is converted to 10, TRUE is converted to 1)

When values are in a range:

```
=MAX(A1:A3)
```
Where A1=5, A2="10", A3=TRUE
Returns `5` (only the number is considered; text and logical are ignored)

### Zero vs Empty

```
=MAX(A1:A5)
```
- If all cells are empty: returns `0`
- If one cell = 0 and others are empty: returns `0`
- The function cannot distinguish between "no values" and "maximum is 0"

## Comparison: MAX vs MIN

### MAX - Largest Value

```
=MAX(10, 20, 30, 40, 50)
```
Returns `50`

### MIN - Smallest Value

```
=MIN(10, 20, 30, 40, 50)
```
Returns `10`

## Advanced Examples

### Find Range of Values

```
=MAX(A1:A10) - MIN(A1:A10)
```
Calculate the difference between highest and lowest values

### Cap Values at Maximum

```
=MIN(A1, 100)
```
Ensure a value doesn't exceed 100 (use MIN to "cap" at a max)

### Set Floor and Ceiling

```
=MAX(MIN(A1, 100), 0)
```
Ensure value is between 0 and 100

## Related Functions

- **[MIN](./MIN)** - Find the smallest value
- **[AVERAGE](./average)** - Calculate the average
- **[COUNT](./COUNT)** - Count numeric values
- **[IF](../logical/IF)** - Conditional logic
