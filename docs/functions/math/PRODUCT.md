---
sidebar_position: 13
---

# PRODUCT

Multiplies all numbers in a range or list of arguments.

## Quick Example

```
=PRODUCT(A1:A5)
```

Multiplies all values from cell A1 through A5.

## Syntax

```
=PRODUCT(number1, [number2], ...)
```

### Arguments

- **number1** (required): The first number, cell reference, or range to multiply
- **number2, ...** (optional): Additional numbers, cell references, or ranges to multiply (up to 255 arguments)

## Examples

### Multiply Range

```
=PRODUCT(A1:A3)
```
If A1:A3 contains [2, 3, 4], returns `24` (2 × 3 × 4)

### Multiply Direct Numbers

```
=PRODUCT(5, 10, 2)
```
Returns `100` (5 × 10 × 2)

### Multiple Ranges

```
=PRODUCT(A1:A3, C1:C2)
```
Multiplies all values from both ranges together

### Calculate Area

```
=PRODUCT(Length, Width)
```
Multiply length by width to get area

### Calculate Volume

```
=PRODUCT(Length, Width, Height)
```
Multiply three dimensions to get volume

### Compound Interest

```
=Principal * PRODUCT(1+Rate, 1+Rate, 1+Rate)
```
Calculate compound growth (better to use POWER for this)

## How It Works

### Multiplication Process

**In ranges:**
- Numbers are multiplied together
- Text values are ignored
- Empty cells are ignored
- Logical values (TRUE/FALSE) are ignored

**Direct arguments:**
- Numbers are multiplied
- Text that looks like a number is converted
- TRUE converts to 1, FALSE to 0
- Empty arguments are treated as 1 (identity element)

### No Values Found

If no numeric values are found in any arguments, PRODUCT returns `0`:

```
=PRODUCT(A1:A5)
```
Where all cells contain text → Returns `0`

### Zero Handling

If any value is 0, the result is 0:

```
=PRODUCT(5, 10, 0, 20)
```
Returns `0` (any zero makes the product zero)

## Common Use Cases

### Calculate Total Price

```
=PRODUCT(Quantity, Unit_Price)
```
Multiply quantity by price

### Area Calculations

```
=PRODUCT(A1, B1)
```
Calculate area of rectangle (length × width)

### Volume Calculations

```
=PRODUCT(A1:A3)
```
Where A1=length, A2=width, A3=height

### Compound Growth

```
=Initial_Value * PRODUCT(Growth_Rates)
```
Apply multiple growth rates sequentially

### Unit Conversions

```
=PRODUCT(A1, 2.54)
```
Convert inches to centimeters

### Probability of Independent Events

```
=PRODUCT(B2:B5)
```
Multiply probabilities of independent events occurring

## Error Handling

### Error Propagation

If any argument contains an error value, PRODUCT returns that error:

```
=PRODUCT(10, #DIV/0!, 30)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid argument type | Check that arguments are numbers or valid references |
| #REF! | Invalid cell reference | Verify cell references exist |
| #NAME? | Function name misspelled | Check spelling: =PRODUCT not =MULTIPLY |

## Technical Details

### Implementation Notes

- Supports up to 255 arguments
- Starts with product = 1 (identity element)
- If no values found, returns 0
- Efficiently processes large ranges
- Text and logical values in ranges are ignored

### Identity Element

Multiplication starts with 1:
```
=PRODUCT(5)  // Returns 5 (1 × 5)
=PRODUCT(5, 10)  // Returns 50 (1 × 5 × 10)
```

### Type Coercion

When arguments are provided directly:

```
=PRODUCT(5, "10", TRUE)
```
Returns `50` (5 × 10 × 1, where "10" → 10 and TRUE → 1)

When values are in a range:

```
=PRODUCT(A1:A3)
```
Where A1=5, A2="10", A3=TRUE
Returns `5` (only the number is multiplied; text and logical are ignored)

## Comparison: PRODUCT vs Manual Multiplication

### Using PRODUCT

```
=PRODUCT(A1:A5)
```
Simple and clean

### Manual Multiplication

```
=A1*A2*A3*A4*A5
```
Cumbersome for many cells

### PRODUCT is Better For

- Multiple cells
- Dynamic ranges
- Variable number of factors

## Advanced Examples

### Factorial (Limited)

```
=PRODUCT(1, 2, 3, 4, 5)
```
Returns `120` (5 factorial)

### Geometric Mean Component

```
=PRODUCT(A1:A10)^(1/COUNT(A1:A10))
```
Calculate geometric mean

### Scaling Factor

```
=Value * PRODUCT(Scale_Factors)
```
Apply multiple scaling factors

### Probability Chain

```
=PRODUCT(Success_Rates) * 100
```
Calculate overall success percentage

## Related Functions

- **[SUM](./sum)** - Add all numbers
- **[SQRT](./SQRT)** - Square root
- **[COUNT](./COUNT)** - Count numbers
