---
sidebar_position: 5
---

# DAY

Extracts the day of the month from a date value.

## Quick Example

```
=DAY("2025-12-25")
```

Returns `25`.

## Syntax

```
=DAY(serial_number)
```

### Arguments

- **serial_number** (required): The date from which to extract the day

## Examples

```
=DAY(DATE(2025, 12, 25))  // Returns 25
=DAY("2025-06-15")        // Returns 15
=DAY(TODAY())             // Returns current day of month (1-31)
=DAY(A1)                  // Extract day from date in A1
```

## Common Use Cases

- Find day of month: `=DAY(Date)`
- Calculate days remaining in month
- Validate date entry
- Create date from components

## Related Functions

- **[YEAR](./YEAR)** - Extract year
- **[MONTH](./MONTH)** - Extract month
- **[DATE](./DATE)** - Create date
- **[TODAY](./TODAY)** - Current date
