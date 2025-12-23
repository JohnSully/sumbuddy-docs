---
sidebar_position: 7
---

# ABS

Returns the absolute value of a number (distance from zero).

## Quick Example

```
=ABS(-42)
```

Returns `42`.

## Syntax

```
=ABS(number)
```

### Arguments

- **number** (required): The number for which you want the absolute value

## Examples

### Basic Absolute Value

```
=ABS(-15)
```
Returns `15`

### Positive Number

```
=ABS(25)
```
Returns `25` (already positive)

### Calculate Difference

```
=ABS(A1-B1)
```
Returns the absolute difference between two values, regardless of which is larger

### Convert Negative to Positive

```
=ABS(A1)
```
If A1 = -100, returns `100`

### Distance Calculation

```
=ABS(Target - Actual)
```
Calculate how far off a value is from the target

### Zero

```
=ABS(0)
```
Returns `0`

## How It Works

### Mathematical Definition

The absolute value of a number is its distance from zero:
- For positive numbers: ABS(n) = n
- For negative numbers: ABS(-n) = n
- For zero: ABS(0) = 0

### Single Cell References

If you pass a range that refers to a single cell, ABS extracts the value:

```
=ABS(A1)
```
Gets the value in A1 and returns its absolute value

### Multi-Cell Ranges Not Supported

```
=ABS(A1:A10)
```
Returns `#VALUE!` error (ABS only works with single values)

## Common Use Cases

### Calculate Variance

```
=ABS(Actual - Budget)
```
Find the absolute variance between actual and budgeted amounts

### Distance Calculations

```
=ABS(X2 - X1)
```
Calculate the distance between two points on a number line

### Error Margin

```
=IF(ABS(A1-B1) <= 0.01, "Match", "No Match")
```
Check if two values are within 0.01 of each other

### Temperature Differences

```
=ABS(High_Temp - Low_Temp)
```
Calculate the temperature range

### Accounting

```
=ABS(Credits - Debits)
```
Calculate the absolute difference regardless of which is larger

## Error Handling

### Error Propagation

If the argument contains an error, ABS returns that error:

```
=ABS(#DIV/0!)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Non-numeric argument or multi-cell range | Ensure argument is a single number or cell reference |
| #REF! | Invalid cell reference | Verify cell reference exists |
| #NAME? | Function name misspelled | Check spelling: =ABS not =ABSOLUTE |

### Range Error

```
=ABS(A1:A10)
```
Returns `#VALUE!` (ABS requires a single value)

## Technical Details

### Implementation Notes

- Requires exactly 1 argument
- Only accepts single values or single-cell references
- Uses standard absolute value function from C++ `std::abs()`
- Does not work with multi-cell ranges

### Type Coercion

Text that can be converted to numbers is accepted:

```
=ABS("-42")
```
Returns `42` (string is coerced to number)

### Cell Reference Handling

```
=ABS(A1)
```
- If A1 contains a number: returns absolute value
- If A1 contains text that looks like a number: converted and absolute value returned
- If A1 is empty: returns `0` (empty is treated as 0)

## Mathematical Properties

### Always Non-Negative

The result of ABS is always ≥ 0:

```
=ABS(-1000)  // Returns 1000
=ABS(0)      // Returns 0
=ABS(1000)   // Returns 1000
```

### Idempotent

Applying ABS multiple times has the same effect as applying it once:

```
=ABS(ABS(ABS(-5)))  // Returns 5
```

## Related Functions

- **[SQRT](./SQRT)** - Calculate square root
- **[ROUND](./ROUND)** - Round numbers
- **[IF](../logical/IF)** - Conditional logic
- **[MIN](./MIN)** - Find minimum value
- **[MAX](./MAX)** - Find maximum value
