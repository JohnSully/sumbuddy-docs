---
sidebar_position: 9
---

# ROUND

Rounds a number to a specified number of digits.

## Quick Example

```
=ROUND(3.14159, 2)
```

Returns `3.14`.

## Syntax

```
=ROUND(number, num_digits)
```

### Arguments

- **number** (required): The number you want to round
- **num_digits** (optional): The number of digits to which you want to round. Defaults to 0 if omitted.

## Examples

### Round to Integer

```
=ROUND(3.7)
```
Returns `4` (rounds to nearest whole number)

### Round to Two Decimal Places

```
=ROUND(3.14159, 2)
```
Returns `3.14`

### Round to Tens

```
=ROUND(1234, -1)
```
Returns `1230` (rounds to nearest 10)

### Round to Hundreds

```
=ROUND(1567, -2)
```
Returns `1600` (rounds to nearest 100)

### Round Negative Numbers

```
=ROUND(-3.7, 0)
```
Returns `-4` (rounds away from zero)

### Financial Rounding

```
=ROUND(123.456, 2)
```
Returns `123.46` (useful for currency)

## How It Works

### Rounding Direction

ROUND uses standard "round half up" logic:
- 0.5 and above rounds up
- Below 0.5 rounds down

Examples:
```
=ROUND(2.5, 0)  // Returns 3
=ROUND(2.4, 0)  // Returns 2
=ROUND(2.6, 0)  // Returns 3
```

### Positive num_digits

Rounds to decimal places to the right of the decimal point:

```
=ROUND(3.14159, 0)  // Returns 3
=ROUND(3.14159, 1)  // Returns 3.1
=ROUND(3.14159, 2)  // Returns 3.14
=ROUND(3.14159, 3)  // Returns 3.142
```

### Negative num_digits

Rounds to the left of the decimal point:

```
=ROUND(1234.56, 0)   // Returns 1235
=ROUND(1234.56, -1)  // Returns 1230
=ROUND(1234.56, -2)  // Returns 1200
=ROUND(1234.56, -3)  // Returns 1000
```

## Common Use Cases

### Currency Rounding

```
=ROUND(Price * Quantity, 2)
```
Ensure currency values have exactly 2 decimal places

### Grade Rounding

```
=ROUND(Average_Score, 0)
```
Round grades to whole numbers

### Display Friendly Numbers

```
=ROUND(Population, -3)
```
Round population to thousands for readability

### Statistical Reporting

```
=ROUND(AVERAGE(A1:A100), 1)
```
Round average to one decimal place

### Tax Calculations

```
=ROUND(Subtotal * 0.08, 2)
```
Calculate tax rounded to cents

## Error Handling

### Error Propagation

If any argument contains an error, ROUND returns that error:

```
=ROUND(#DIV/0!, 2)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Non-numeric argument or multi-cell range | Ensure arguments are numbers |
| #REF! | Invalid cell reference | Verify cell reference exists |
| #NAME? | Function name misspelled | Check spelling: =ROUND not =ROUNDING |

### Single Cell References

```
=ROUND(A1, 2)
```
If A1 is a multi-cell range, returns `#VALUE!`

## Technical Details

### Implementation Notes

- Requires 1 or 2 arguments
- num_digits defaults to 0 if omitted
- Uses standard rounding algorithm
- Handles both positive and negative num_digits
- Works with single values or single-cell references

### Rounding Algorithm

For positive num_digits:
```
result = round(number * 10^num_digits) / 10^num_digits
```

For negative num_digits:
```
result = round(number / 10^(-num_digits)) * 10^(-num_digits)
```

### Precision Considerations

Floating-point arithmetic may introduce tiny rounding errors:

```
=ROUND(2.675, 2)
```
May return `2.67` or `2.68` depending on floating-point representation

## Comparison: ROUND vs ROUNDUP

### ROUND - Standard Rounding

```
=ROUND(2.4, 0)  // Returns 2
=ROUND(2.5, 0)  // Returns 3
=ROUND(2.6, 0)  // Returns 3
```

### ROUNDUP - Always Round Away from Zero

```
=ROUNDUP(2.1, 0)  // Returns 3
=ROUNDUP(2.5, 0)  // Returns 3
=ROUNDUP(2.9, 0)  // Returns 3
```

## Advanced Examples

### Round to Nearest Quarter

```
=ROUND(A1*4, 0)/4
```
Rounds to nearest 0.25 (e.g., 3.7 → 3.75)

### Round Time to Nearest 15 Minutes

```
=ROUND(A1*96, 0)/96
```
Rounds time values to nearest 15-minute interval

### Conditional Rounding

```
=IF(A1>=100, ROUND(A1, 0), ROUND(A1, 2))
```
Round large numbers to integers, small numbers to 2 decimals

## Related Functions

- **[ROUNDUP](./ROUNDUP)** - Always round away from zero
