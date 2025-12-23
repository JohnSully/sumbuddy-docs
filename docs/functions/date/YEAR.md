---
sidebar_position: 3
---

# YEAR

Extracts the year from a date value.

## Quick Example

```
=YEAR("2025-12-25")
```

Returns `2025`.

## Syntax

```
=YEAR(serial_number)
```

### Arguments

- **serial_number** (required): The date from which to extract the year

## Examples

```
=YEAR(DATE(2025, 12, 25))  // Returns 2025
=YEAR("2025-06-15")        // Returns 2025
=YEAR(TODAY())             // Returns current year
=YEAR(A1)                  // Extract year from date in A1
```

## Common Use Cases

- Calculate age: `=YEAR(TODAY()) - YEAR(BirthDate)`
- Filter by year: `=IF(YEAR(A1)=2025, "This year", "")`
- Fiscal year calculation
- Group dates by year

## Related Functions

- **[MONTH](./MONTH)** - Extract month
- **[DAY](./DAY)** - Extract day
- **[DATE](./DATE)** - Create date
- **[TODAY](./TODAY)** - Current date
