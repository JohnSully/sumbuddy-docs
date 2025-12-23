---
sidebar_position: 10
---

# ROUNDUP

Rounds a number up, away from zero, to a specified number of digits.

## Quick Example

```
=ROUNDUP(3.14159, 2)
```

Returns `3.15`.

## Syntax

```
=ROUNDUP(number, num_digits)
```

### Arguments

- **number** (required): The number you want to round up
- **num_digits** (optional): The number of digits to which you want to round. Defaults to 0 if omitted.

## Examples

### Round Up to Integer

```
=ROUNDUP(3.1, 0)
```
Returns `4` (always rounds up)

### Round Up to Two Decimal Places

```
=ROUNDUP(3.141, 2)
```
Returns `3.15` (rounds up at the third decimal)

### Round Up to Tens

```
=ROUNDUP(1234, -1)
```
Returns `1240` (rounds up to nearest 10)

### Round Up to Hundreds

```
=ROUNDUP(1501, -2)
```
Returns `1600` (rounds up to nearest 100)

### Round Up Negative Numbers

```
=ROUNDUP(-3.1, 0)
```
Returns `-4` (rounds away from zero, so more negative)

### Always Round Up

```
=ROUNDUP(2.01, 0)
```
Returns `3` (even tiny fractions round up)

## How It Works

### Always Rounds Away from Zero

Unlike ROUND which uses standard rounding, ROUNDUP always rounds away from zero:
- Positive numbers round up (toward positive infinity)
- Negative numbers round down (toward negative infinity)
- Both directions move "away from zero"

### Positive num_digits

Rounds up to decimal places to the right of the decimal point:

```
=ROUNDUP(3.14159, 0)  // Returns 4
=ROUNDUP(3.14159, 1)  // Returns 3.2
=ROUNDUP(3.14159, 2)  // Returns 3.15
=ROUNDUP(3.14159, 3)  // Returns 3.142
```

### Negative num_digits

Rounds up to the left of the decimal point:

```
=ROUNDUP(1234, 0)   // Returns 1234
=ROUNDUP(1234, -1)  // Returns 1240
=ROUNDUP(1234, -2)  // Returns 1300
=ROUNDUP(1234, -3)  // Returns 2000
```

### Negative Number Behavior

For negative numbers, "up" means away from zero (more negative):

```
=ROUNDUP(-3.1, 0)   // Returns -4
=ROUNDUP(-3.14, 1)  // Returns -3.2
=ROUNDUP(-1234, -1) // Returns -1240
```

## Common Use Cases

### Conservative Estimates

```
=ROUNDUP(Material_Needed, 0)
```
Always order enough materials (round up quantities)

### Inventory Planning

```
=ROUNDUP(Units_Required/Package_Size, 0)
```
Calculate how many full packages to order

### Billing

```
=ROUNDUP(Hours_Worked * Rate, 2)
```
Round billing amounts up to favor the service provider

### Capacity Planning

```
=ROUNDUP(Attendees/Room_Capacity, 0)
```
Calculate minimum number of rooms needed

### Buffer Calculations

```
=ROUNDUP(Estimated_Time * 1.2, 0)
```
Add buffer and round up for scheduling

## Error Handling

### Error Propagation

If any argument contains an error, ROUNDUP returns that error:

```
=ROUNDUP(#DIV/0!, 2)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Non-numeric argument or multi-cell range | Ensure arguments are numbers |
| #REF! | Invalid cell reference | Verify cell reference exists |
| #NAME? | Function name misspelled | Check spelling: =ROUNDUP not =ROUNDU |

### Single Cell References

```
=ROUNDUP(A1, 2)
```
If A1 is a multi-cell range, returns `#VALUE!`

## Technical Details

### Implementation Notes

- Requires 1 or 2 arguments
- num_digits defaults to 0 if omitted
- Always rounds away from zero
- Works with single values or single-cell references

### Rounding Algorithm

For positive numbers:
```
result = ceil(number * 10^num_digits) / 10^num_digits
```

For negative numbers:
```
result = floor(number * 10^num_digits) / 10^num_digits
```

### Type Coercion

Text that can be converted to numbers is accepted:

```
=ROUNDUP("3.14", 1)
```
Returns `3.2` (string is coerced to number)

## Comparison: ROUNDUP vs ROUND

### ROUNDUP - Always Away from Zero

```
=ROUNDUP(2.1, 0)  // Returns 3
=ROUNDUP(2.5, 0)  // Returns 3
=ROUNDUP(2.9, 0)  // Returns 3
```

### ROUND - Standard Rounding

```
=ROUND(2.1, 0)  // Returns 2
=ROUND(2.5, 0)  // Returns 3 (rounds 0.5 up)
=ROUND(2.9, 0)  // Returns 3
```

## Comparison: Positive vs Negative Numbers

### Positive Number

```
=ROUNDUP(3.14, 1)  // Returns 3.2 (rounds up)
```

### Negative Number

```
=ROUNDUP(-3.14, 1)  // Returns -3.2 (rounds away from zero = more negative)
```

## Advanced Examples

### Calculate Required Packages

```
=ROUNDUP(Total_Units/Units_Per_Package, 0)
```
If you need 47 units and packages contain 10, returns 5 packages

### Round Up to Next Interval

```
=ROUNDUP(A1/0.25, 0)*0.25
```
Round up to next quarter (0.25 increment)

### Ensure Minimum Value

```
=ROUNDUP(Calculated_Fee, 2)
```
Ensure fees are always rounded up, never down

## Related Functions

- **[ROUND](./ROUND)** - Standard rounding
