---
sidebar_position: 2
---

# DATE

Creates a date value from year, month, and day components.

## Quick Example

```
=DATE(2025, 12, 25)
```

Returns the date December 25, 2025.

## Syntax

```
=DATE(year, month, day)
```

### Arguments

- **year** (required): The year (0-9999). Years 0-1899 are treated as 1900+year.
- **month** (required): The month (1-12, but can be any integer)
- **day** (required): The day of the month (1-31, but can be any integer)

## Examples

### Create Specific Date

```
=DATE(2025, 12, 25)
```
Returns December 25, 2025

### Year Shortcuts

```
=DATE(24, 6, 15)
```
Returns June 15, 2024 (24 is interpreted as 1924, add 1900)

### Month Overflow

```
=DATE(2025, 13, 1)
```
Returns January 1, 2026 (13th month becomes next year)

### Negative Month

```
=DATE(2025, -1, 1)
```
Returns November 1, 2024 (goes back 2 months from Jan 2025)

### Day Overflow

```
=DATE(2025, 1, 32)
```
Returns February 1, 2025 (32nd day of January is Feb 1)

### Calculate Future Date

```
=DATE(YEAR(TODAY()), MONTH(TODAY()), DAY(TODAY()) + 30)
```
Returns date 30 days from today

## How It Works

### Automatic Rollover

DATE handles month and day rollovers automatically:
- Months > 12 roll into next year
- Months < 1 roll back to previous year
- Days beyond month end roll into next month
- Negative days roll back to previous month

### Year Handling

- Years 0-1899: Add 1900 (e.g., 25 becomes 1925)
- Years 1900-9999: Used as-is
- Years ≥ 10000 or < 0: Return #NUM! error

### Julian Day Calculation

DATE uses Julian Day Number algorithm:
- Correctly handles leap years
- Accounts for century rules
- Compatible with Excel date system

## Common Use Cases

### Create Date from Components

```
=DATE(A1, B1, C1)
```
Where A1=year, B1=month, C1=day

### First Day of Month

```
=DATE(YEAR(A1), MONTH(A1), 1)
```

### Last Day of Month

```
=DATE(YEAR(A1), MONTH(A1) + 1, 0)
```
(Day 0 = last day of previous month)

### Add Months

```
=DATE(YEAR(A1), MONTH(A1) + 3, DAY(A1))
```
Add 3 months to date in A1

### First Day of Year

```
=DATE(2025, 1, 1)
```

### Last Day of Year

```
=DATE(2025, 12, 31)
```

## Error Handling

### Year Out of Range

```
=DATE(10000, 1, 1)
```
Returns #NUM! (year must be 0-9999)

```
=DATE(-5, 1, 1)
```
Returns #NUM! (year cannot be negative)

### Error Propagation

```
=DATE(2025, #DIV/0!, 1)
```
Returns #DIV/0!

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #NUM! | Year out of range (0-9999) | Use valid year |
| #VALUE! | Non-numeric arguments | Provide numbers for all arguments |

## Technical Details

### Implementation Notes

- Uses Julian Day Number algorithm
- Handles month/day overflow automatically
- Includes Excel's 1900 leap year bug for compatibility
- Timezone-aware (returns midnight in user's timezone)

### Leap Year Handling

DATE correctly identifies leap years:
- Divisible by 4: leap year
- Except divisible by 100: not leap year
- Except divisible by 400: leap year

```
=DATE(2024, 2, 29)  // Valid (2024 is leap year)
=DATE(2025, 2, 29)  // Returns Mar 1, 2025 (overflow)
```

## Advanced Examples

### Calculate Age

```
=(TODAY() - DATE(1990, 5, 15)) / 365.25
```

### Nth Day of Year

```
=DATE(2025, 1, 1) + (N - 1)
```
Returns Nth day of 2025

### Same Date Next Year

```
=DATE(YEAR(A1) + 1, MONTH(A1), DAY(A1))
```

### Quarter Start Date

```
=DATE(YEAR(A1), (CEIL(MONTH(A1)/3) - 1) * 3 + 1, 1)
```

## Related Functions

- **[TODAY](./TODAY)** - Current date
- **[YEAR](./YEAR)** - Extract year
- **[MONTH](./MONTH)** - Extract month
- **[DAY](./DAY)** - Extract day
- **[EDATE](./EDATE)** - Add months
