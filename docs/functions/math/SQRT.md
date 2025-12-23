---
sidebar_position: 8
---

# SQRT

Returns the square root of a number.

## Quick Example

```
=SQRT(16)
```

Returns `4`.

## Syntax

```
=SQRT(number)
```

### Arguments

- **number** (required): The number for which you want the square root. Must be non-negative (≥ 0).

## Examples

### Basic Square Root

```
=SQRT(25)
```
Returns `5`

### Perfect Square

```
=SQRT(100)
```
Returns `10`

### Non-Perfect Square

```
=SQRT(50)
```
Returns `7.071067811865476` (approximately 7.07)

### Square Root of 2

```
=SQRT(2)
```
Returns `1.4142135623730951`

### Zero

```
=SQRT(0)
```
Returns `0`

### Cell Reference

```
=SQRT(A1)
```
If A1 = 144, returns `12`

## How It Works

### Mathematical Definition

The square root of a number n is the value that, when multiplied by itself, equals n:
- SQRT(16) = 4 because 4 × 4 = 16
- SQRT(2) ≈ 1.414 because 1.414 × 1.414 ≈ 2

### Non-Negative Requirement

The number must be ≥ 0. Negative numbers return an error:

```
=SQRT(-4)
```
Returns `#NUM!` error (cannot take square root of negative number)

### Single Cell References

If you pass a range that refers to a single cell, SQRT extracts the value:

```
=SQRT(A1)
```
Gets the value in A1 and returns its square root

### Multi-Cell Ranges Not Supported

```
=SQRT(A1:A10)
```
Returns `#VALUE!` error (SQRT only works with single values)

## Common Use Cases

### Calculate Standard Deviation Components

```
=SQRT(SUM((A1:A10-AVERAGE(A1:A10))^2)/COUNT(A1:A10))
```
Part of standard deviation calculation

### Distance Formula

```
=SQRT((X2-X1)^2 + (Y2-Y1)^2)
```
Calculate distance between two points

### Pythagorean Theorem

```
=SQRT(A1^2 + B1^2)
```
Find the hypotenuse of a right triangle

### Root Mean Square

```
=SQRT(AVERAGE(A1:A10^2))
```
Calculate RMS of a set of values

### Normalize Values

```
=A1/SQRT(SUM(A1:A10^2))
```
Normalize a value

## Error Handling

### Negative Number Error

If the argument is negative, SQRT returns `#NUM!`:

```
=SQRT(-16)
```
Returns `#NUM!` error

### Error Propagation

If the argument contains an error, SQRT returns that error:

```
=SQRT(#DIV/0!)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #NUM! | Negative number | Ensure the number is ≥ 0 |
| #VALUE! | Non-numeric argument or multi-cell range | Ensure argument is a single number or cell reference |
| #REF! | Invalid cell reference | Verify cell reference exists |
| #NAME? | Function name misspelled | Check spelling: =SQRT not =SQR |

## Technical Details

### Implementation Notes

- Requires exactly 1 argument
- Only accepts single values or single-cell references
- Uses standard square root function from C++ `std::sqrt()`
- Returns floating-point result with full precision
- Does not work with multi-cell ranges

### Type Coercion

Text that can be converted to numbers is accepted:

```
=SQRT("64")
```
Returns `8` (string is coerced to number)

### Precision

SQRT returns results with full floating-point precision:

```
=SQRT(2)
```
Returns `1.4142135623730951` (15+ decimal places)

## Mathematical Properties

### Inverse of Squaring

SQRT is the inverse operation of squaring:

```
=SQRT(5^2)  // Returns 5
=(SQRT(5))^2  // Returns 5
```

### Square Root of Product

```
=SQRT(A1*B1) = SQRT(A1) * SQRT(B1)
```
The square root of a product equals the product of the square roots

## Advanced Examples

### Ensure Non-Negative Input

```
=SQRT(ABS(A1))
```
Use ABS to ensure the value is non-negative

### Conditional Square Root

```
=IF(A1>=0, SQRT(A1), "Invalid")
```
Check if value is non-negative before calculating

### Geometric Mean

```
=SQRT(A1*B1)
```
Calculate geometric mean of two numbers

## Related Functions

- **[ABS](./ABS)** - Absolute value
- **[ROUND](./ROUND)** - Round numbers
- **[PI](./PI)** - Pi constant
- **[SUM](./sum)** - Add numbers
