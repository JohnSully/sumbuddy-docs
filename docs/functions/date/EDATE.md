---
sidebar_position: 6
---

# EDATE

Returns a date that is a specified number of months before or after a start date.

## Quick Example

```
=EDATE("2025-01-15", 3)
```

Returns April 15, 2025 (3 months after January 15).

## Syntax

```
=EDATE(start_date, months)
```

### Arguments

- **start_date** (required): The starting date
- **months** (required): Number of months to add (positive) or subtract (negative)

## Examples

```
=EDATE(TODAY(), 3)              // 3 months from today
=EDATE("2025-01-15", -2)        // 2 months before Jan 15, 2025
=EDATE(DATE(2025,1,31), 1)      // Feb 28 or 29, 2025
=EDATE(A1, 12)                  // 1 year after date in A1
```

## How It Works

### Month Addition

EDATE adds months intelligently:
- Preserves day of month when possible
- Adjusts to last day of month if day doesn't exist
- Handles year transitions automatically

### Day Adjustment

```
=EDATE("2025-01-31", 1)  // Returns Feb 28, 2025 (Feb has no 31st)
=EDATE("2025-03-31", -1) // Returns Feb 28, 2025
```

## Common Use Cases

- Calculate payment due dates
- Find subscription renewal dates
- Project timelines
- Loan maturity dates
- Contract end dates

### Calculate Loan Maturity

```
=EDATE(StartDate, LoanTermMonths)
```

### Next Quarter

```
=EDATE(TODAY(), 3)
```

### Same Date Last Year

```
=EDATE(TODAY(), -12)
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Invalid date | Check start_date is valid date |
| #VALUE! | months not numeric | Provide number for months |

## Technical Details

- Handles leap years correctly
- Adjusts for months with different day counts
- Uses same date calculation as DATE function
- Compatible with Excel EDATE

## Related Functions

- **[DATE](./DATE)** - Create specific date
- **[TODAY](./TODAY)** - Current date
- **[YEAR](./YEAR)** - Extract year
- **[MONTH](./MONTH)** - Extract month
- **[DAY](./DAY)** - Extract day
