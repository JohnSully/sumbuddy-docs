---
sidebar_position: 11
---

# RAND

Returns a random number greater than or equal to 0 and less than 1.

## Quick Example

```
=RAND()
```

Returns a random decimal like `0.7521` (value changes on each recalculation).

## Syntax

```
=RAND()
```

### Arguments

RAND takes no arguments.

## Examples

### Basic Random Number

```
=RAND()
```
Returns a random number like `0.342891` (between 0 and 1)

### Random Number Between 0 and 100

```
=RAND()*100
```
Returns a random number between 0 and 100

### Random Number in Range

```
=RAND()*(max-min)+min
```
Returns a random number between min and max

### Random Number Between 50 and 100

```
=RAND()*50+50
```
Returns a random number between 50 and 100

### Generate Random Percentage

```
=RAND()*100
```
Returns random percentage between 0% and 100%

### Random True/False

```
=IF(RAND()>0.5, TRUE, FALSE)
```
Randomly returns TRUE or FALSE

## How It Works

### Random Distribution

RAND generates evenly distributed random numbers:
- Every value between 0 and 1 has equal probability
- Minimum value: 0 (inclusive)
- Maximum value: 1 (exclusive - never quite reaches 1)

### Volatile Function

RAND is a **volatile function**:
- Recalculates every time the spreadsheet calculates
- Changes every time you edit any cell
- Cannot be "frozen" to a specific value

### Random Number Generator

Uses the Mersenne Twister algorithm (C++ `std::mt19937`):
- High-quality pseudo-random numbers
- Seeded from hardware random device on startup
- Different sequence each time the application runs

## Common Use Cases

### Random Sampling

```
=IF(RAND()<0.1, "Sample", "")
```
Randomly select approximately 10% of rows

### Simulation and Modeling

```
=RAND()*1000
```
Generate random values for Monte Carlo simulations

### Random Sort

```
=RAND()
```
Put in helper column, then sort by that column for random order

### A/B Testing Assignment

```
=IF(RAND()<0.5, "Group A", "Group B")
```
Randomly assign to test groups

### Generate Test Data

```
=RAND()*10000
```
Create random test data for development

## Error Handling

### Argument Error

If you provide any arguments, RAND returns an error:

```
=RAND(5)
```
Returns `#VALUE!` (RAND takes no arguments)

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Arguments provided | Use =RAND() with no arguments |
| #NAME? | Function name misspelled | Check spelling: =RAND not =RANDOM |

## Technical Details

### Implementation Notes

- Takes exactly 0 arguments
- Returns floating-point number in range [0, 1)
- Uses Mersenne Twister 19937 generator
- Seeded from `std::random_device` on startup
- Thread-safe implementation

### Range Details

- Minimum: 0.0 (inclusive - can be exactly 0)
- Maximum: < 1.0 (exclusive - never reaches 1)
- Distribution: Uniform (all values equally likely)

### Recalculation

RAND recalculates:
- When you edit any cell
- When you manually recalculate
- When the spreadsheet is opened
- On any formula evaluation

## Generating Different Ranges

### Integer Between 1 and 10

```
=RANDBETWEEN(1, 10)
```
Use RANDBETWEEN for random integers

### Decimal Between 10 and 20

```
=RAND()*10+10
```
Formula: `=RAND()*(max-min)+min`

### Random Negative Number

```
=RAND()*-100
```
Returns random number between -100 and 0

### Random Around Zero

```
=RAND()*200-100
```
Returns random number between -100 and 100

## Advanced Examples

### Random Selection with Probability

```
=IF(RAND()<0.2, "Win", "Lose")
```
20% chance of "Win", 80% chance of "Lose"

### Weighted Random Choice

```
=IF(RAND()<0.5, "Common", IF(RAND()<0.8, "Uncommon", "Rare"))
```
Different probabilities for different outcomes

### Random Date in Range

```
=DATE(2024,1,1) + RAND()*365
```
Random date in 2024

### Normal Distribution Approximation

```
=AVERAGE(RAND(), RAND(), RAND(), RAND(), RAND())
```
Approximates normal distribution (Central Limit Theorem)

## Comparison: RAND vs RANDBETWEEN

### RAND - Decimal [0,1)

```
=RAND()
```
Returns: `0.7234891` (decimal)

### RANDBETWEEN - Integer Range

```
=RANDBETWEEN(1, 100)
```
Returns: `47` (integer between 1 and 100)

## Making RAND Static

### Copy and Paste Values

To freeze random values:
1. Calculate RAND formulas
2. Copy cells
3. Paste as Values

This converts formulas to static numbers.

## Related Functions

- **[RANDBETWEEN](./RANDBETWEEN)** - Random integer in a range
- **[IF](../logical/IF)** - Conditional logic
- **[ROUND](./ROUND)** - Round numbers
- **[SUM](./sum)** - Add numbers
