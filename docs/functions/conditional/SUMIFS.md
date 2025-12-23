---
sidebar_position: 4
---

# SUMIFS

Sums cells that meet multiple criteria.

## Quick Example

```
=SUMIFS(C1:C10, A1:A10, ">10", B1:B10, "Yes")
```

Sums C values where A > 10 AND B = "Yes".

## Syntax

```
=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)
```

### Arguments

- **sum_range** (required): The range to sum
- **criteria_range1** (required): First range to evaluate
- **criteria1** (required): Criteria for first range
- **criteria_range2, criteria2, ...** (optional): Additional range/criteria pairs

## Examples

```
=SUMIFS(Amount, Status, "Complete", Region, "West")
// Sum amounts where status = "Complete" AND region = "West"

=SUMIFS(Sales, Date, ">="&StartDate, Date, "<="&EndDate)
// Sum sales within date range

=SUMIFS(Revenue, Category, "A", Value, ">1000")
// Sum revenue for category A where value > 1000
```

## How It Works

### All Criteria Must Match (AND Logic)
```
=SUMIFS(C:C, A:A, ">50", B:B, "Yes")
// Sum C where A > 50 AND B = "Yes"
```

### Range Dimensions Must Match
All ranges must be the same size:
```
=SUMIFS(C1:C10, A1:A10, ">10", B1:B10, "Yes")  // ✓ Valid
=SUMIFS(C1:C10, A1:A5, ">10", B1:B10, "Yes")   // ✗ Error
```

### Argument Order Difference
**SUMIFS**: sum_range comes FIRST
**SUMIF**: sum_range comes LAST

```
=SUMIF(range, criteria, [sum_range])     // SUMIF
=SUMIFS(sum_range, range, criteria, ...) // SUMIFS
```

## Common Use Cases

### Sum by Multiple Categories
```
=SUMIFS(Sales, Region, "North", Product, "Widget", Status, "Sold")
```

### Sum Within Date Range
```
=SUMIFS(Amount, Date, ">="&DATE(2025,1,1), Date, "<"&DATE(2025,2,1))
```

### Sum with Exclusions
```
=SUMIFS(Revenue, Status, "<>Cancelled", Amount, ">0")
```

### Complex Conditions
```
=SUMIFS(Value, A:A, ">=100", A:A, "<=500", B:B, "<>")
// Sum where A between 100-500 AND B is not blank
```

## Criteria Formats

Same as COUNTIFS:
- Comparison: `">10"`, `">=10"`, `"<10"`, `"<=10"`, `"<>10"`
- Text: `"Yes"`, `"<>"` (non-blank), `""` (blank)
- Cell references: `">"&A1`

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Mismatched range dimensions | All ranges must be same size |
| #VALUE! | Wrong number of arguments | Must have sum_range + pairs of criteria_range/criteria |

## Multiple Criteria on Same Range

```
=SUMIFS(C:C, A:A, ">=10", A:A, "<=100")
// Sum C where A is between 10 and 100
```

## Comparison: SUMIF vs SUMIFS

### SUMIF (Single Criterion)
```
=SUMIF(A:A, ">10", B:B)
```

### SUMIFS (Multiple Criteria)
```
=SUMIFS(B:B, A:A, ">10", C:C, "Yes")
```

## Related Functions

- **[SUMIF](./SUMIF)** - Sum with single criterion
- **[COUNTIFS](./COUNTIFS)** - Count with multiple criteria
- **[SUM](../math/sum)** - Sum all values
