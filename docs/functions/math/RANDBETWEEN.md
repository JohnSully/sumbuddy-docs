---
sidebar_position: 12
---

# RANDBETWEEN

Returns a random integer between two specified numbers (inclusive).

## Quick Example

```
=RANDBETWEEN(1, 100)
```

Returns a random integer like `47` (value changes on each recalculation).

## Syntax

```
=RANDBETWEEN(bottom, top)
```

### Arguments

- **bottom** (required): The smallest integer to return
- **top** (required): The largest integer to return

## Examples

### Roll a Die

```
=RANDBETWEEN(1, 6)
```
Returns a random integer from 1 to 6

### Random Number 1 to 100

```
=RANDBETWEEN(1, 100)
```
Returns random integer between 1 and 100 (inclusive)

### Flip a Coin

```
=IF(RANDBETWEEN(0, 1)=0, "Heads", "Tails")
```
Randomly returns "Heads" or "Tails"

### Random Year

```
=RANDBETWEEN(2000, 2024)
```
Returns a random year between 2000 and 2024

### Random Negative Number

```
=RANDBETWEEN(-50, 50)
```
Returns random integer from -50 to 50

### Large Range

```
=RANDBETWEEN(1, 1000000)
```
Returns random integer from 1 to one million

## How It Works

### Inclusive Range

Both bottom and top are included in the possible results:
```
=RANDBETWEEN(1, 3)
```
Can return: 1, 2, or 3

### Integer Results Only

Non-integer arguments are truncated to integers:
```
=RANDBETWEEN(1.7, 10.9)
```
Treated as `=RANDBETWEEN(1, 10)`

### Volatile Function

RANDBETWEEN is a **volatile function**:
- Recalculates every time the spreadsheet calculates
- Changes every time you edit any cell
- Value is not static

### Uniform Distribution

All integers in the range have equal probability:
```
=RANDBETWEEN(1, 100)
```
Each number from 1 to 100 has exactly 1% chance

## Common Use Cases

### Generate Sample IDs

```
=RANDBETWEEN(10000, 99999)
```
Create random 5-digit ID numbers

### Random Survey Selection

```
=RANDBETWEEN(1, 1000)
```
Randomly select from 1000 participants

### Simulate Dice Rolls

```
=RANDBETWEEN(1, 6) + RANDBETWEEN(1, 6)
```
Simulate rolling two dice

### Random Test Scores

```
=RANDBETWEEN(0, 100)
```
Generate random scores for testing

### Random Day of Month

```
=RANDBETWEEN(1, 31)
```
Get random day number

### Random Priority Level

```
=RANDBETWEEN(1, 5)
```
Assign random priority from 1 (highest) to 5 (lowest)

## Error Handling

### Bottom Greater Than Top

If bottom > top, RANDBETWEEN returns `#NUM!`:

```
=RANDBETWEEN(100, 1)
```
Returns `#NUM!` error

### Error Propagation

If any argument contains an error, RANDBETWEEN returns that error:

```
=RANDBETWEEN(1, #DIV/0!)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #NUM! | Bottom > Top | Ensure bottom ≤ top |
| #VALUE! | Non-numeric argument | Ensure arguments are numbers |
| #NAME? | Function name misspelled | Check spelling |

### Non-Numeric Arguments

```
=RANDBETWEEN("A", "Z")
```
Returns `#VALUE!` (arguments must be numeric)

## Technical Details

### Implementation Notes

- Requires exactly 2 arguments
- Truncates non-integer arguments
- Uses Mersenne Twister 19937 generator
- Seeded from `std::random_device` on startup
- Creates new distribution for each call

### Random Number Generator

Uses C++ `std::uniform_int_distribution`:
- High-quality pseudo-random integers
- True uniform distribution
- Each integer in range has equal probability

### Truncation Behavior

```
=RANDBETWEEN(1.9, 10.1)
```
Interpreted as `=RANDBETWEEN(1, 10)` (truncates, doesn't round)

## Generating Different Types of Random Data

### Random Letter Index

```
=CHAR(RANDBETWEEN(65, 90))
```
Returns random uppercase letter (A-Z)

### Random Yes/No

```
=IF(RANDBETWEEN(0,1)=1, "Yes", "No")
```
Randomly returns Yes or No

### Random Date in Year

```
=DATE(2024, 1, 1) + RANDBETWEEN(0, 364)
```
Random date in 2024

### Random Time

```
=TIME(RANDBETWEEN(0,23), RANDBETWEEN(0,59), RANDBETWEEN(0,59))
```
Random time of day

## Advanced Examples

### Weighted Random Integer

```
=IF(RANDBETWEEN(1,100)<=20, 1, IF(RANDBETWEEN(1,100)<=50, 2, 3))
```
Returns 1 (20%), 2 (30%), or 3 (50%)

### Random Sample Without Replacement

Use RANDBETWEEN with helper column, sort, then take top N rows

### Simulate Lottery

```
=RANDBETWEEN(1, 49)
```
Pick random lottery numbers (combine multiple cells)

### Random Temperature

```
=RANDBETWEEN(60, 90)
```
Simulate random temperature in Fahrenheit

## Comparison: RAND vs RANDBETWEEN

### RAND - Decimal [0,1)

```
=RAND()
```
Returns: `0.7234891` (decimal between 0 and 1)

### RANDBETWEEN - Integer Range

```
=RANDBETWEEN(1, 100)
```
Returns: `47` (integer between 1 and 100)

### Create Integer from RAND

```
=INT(RAND()*100)+1
```
Similar to `=RANDBETWEEN(1, 100)` but less efficient

## Making RANDBETWEEN Static

### Copy and Paste Values

To freeze random values:
1. Calculate RANDBETWEEN formulas
2. Copy cells
3. Paste as Values

This converts formulas to static numbers.

### Use in Data Generation

```
=RANDBETWEEN(1, 1000)
```
Generate once, then paste as values for consistent test data

## Related Functions

- **[RAND](./RAND)** - Random decimal between 0 and 1
- **[IF](../logical/IF)** - Conditional logic
- **[ROUND](./ROUND)** - Round numbers
