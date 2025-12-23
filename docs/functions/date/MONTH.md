---
sidebar_position: 4
---

# MONTH

Extracts the month from a date value.

## Quick Example

```
=MONTH("2025-12-25")
```

Returns `12` (December).

## Syntax

```
=MONTH(serial_number)
```

### Arguments

- **serial_number** (required): The date from which to extract the month

## Examples

```
=MONTH(DATE(2025, 12, 25))  // Returns 12
=MONTH("2025-06-15")        // Returns 6
=MONTH(TODAY())             // Returns current month (1-12)
=MONTH(A1)                  // Extract month from date in A1
```

## Common Use Cases

- Group by month: `=IF(MONTH(A1)=12, "December", "")`
- Calculate months between dates
- Filter quarterly data: `=IF(MONTH(A1)<=3, "Q1", ...)`
- Find seasonal patterns

## Related Functions

- **[YEAR](./YEAR)** - Extract year
- **[DAY](./DAY)** - Extract day
- **[DATE](./DATE)** - Create date
- **[TODAY](./TODAY)** - Current date
