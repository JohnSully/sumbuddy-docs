---
sidebar_position: 3
---

# COUNTIFS

Counts cells that meet multiple criteria.

## Quick Example

```
=COUNTIFS(A1:A10, ">10", B1:B10, "Yes")
```

Counts rows where A > 10 AND B = "Yes".

## Syntax

```
=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)
```

### Arguments

- **criteria_range1** (required): First range to evaluate
- **criteria1** (required): Criteria for first range
- **criteria_range2, criteria2, ...** (optional): Additional range/criteria pairs

## Examples

```
=COUNTIFS(A:A, ">10", B:B, "Yes")
// Count where A > 10 AND B = "Yes"

=COUNTIFS(Sales, ">1000", Region, "West", Status, "Complete")
// Count sales > 1000 in West region that are complete

=COUNTIFS(A:A, ">=100", A:A, "<=200")
// Count values between 100 and 200 (inclusive)
```

## How It Works

### All Criteria Must Match (AND Logic)
```
=COUNTIFS(A:A, ">50", B:B, "<100")
// A > 50 AND B < 100 (both must be true)
```

### Range Dimensions Must Match
All criteria ranges must be the same size:
```
=COUNTIFS(A1:A10, ">10", B1:B10, "Yes")  // ✓ Same size
=COUNTIFS(A1:A10, ">10", B1:B20, "Yes")  // ✗ Error
```

## Common Use Cases

### Multi-Condition Filtering
```
=COUNTIFS(Status, "Active", Amount, ">1000", Region, "North")
```

### Date Range Count
```
=COUNTIFS(Date, ">="&StartDate, Date, "<="&EndDate)
```

### Between Two Values
```
=COUNTIFS(Score, ">=60", Score, "<=100")
```

### Excluding Blanks with Criteria
```
=COUNTIFS(A:A, "<>", B:B, ">50")
// Non-blank in A AND B > 50
```

## Criteria Formats

Same as COUNTIF:
- Comparison: `">10"`, `">=10"`, `"<10"`, `"<=10"`, `"<>10"`
- Text: `"Yes"`, `"<>"` (non-blank)
- Cell references: `">"&A1`

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Mismatched range dimensions | All ranges must be same size |
| #VALUE! | Odd number of arguments | Must have range/criteria pairs |

## Multiple Criteria on Same Range

```
=COUNTIFS(A:A, ">=10", A:A, "<=100")
// Count A values between 10 and 100
```

## Related Functions

- **[COUNTIF](./COUNTIF)** - Count with single criterion
- **[SUMIFS](./SUMIFS)** - Sum with multiple criteria
- **[COUNT](../math/COUNT)** - Count all numbers
