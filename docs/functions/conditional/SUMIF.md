---
sidebar_position: 2
---

# SUMIF

Sums cells in a range that meet a single criterion.

## Quick Example

```
=SUMIF(A1:A10, ">10")
```

Sums all values in A1:A10 that are greater than 10.

## Syntax

```
=SUMIF(range, criteria, [sum_range])
```

### Arguments

- **range** (required): The range to evaluate with the criteria
- **criteria** (required): The condition that determines which cells to sum
- **sum_range** (optional): The actual cells to sum. If omitted, sums the cells in range.

## Examples

```
=SUMIF(A1:A10, ">10")                // Sum values > 10
=SUMIF(B1:B10, "Yes", C1:C10)        // Sum C values where B = "Yes"
=SUMIF(A1:A10, ">=100", B1:B10)      // Sum B where A >= 100
=SUMIF(Status, "Complete", Amount)   // Sum amounts for complete items
```

## How It Works

### Without sum_range
```
=SUMIF(A1:A10, ">50")
// Evaluates A1:A10, sums cells that meet criteria
```

### With sum_range
```
=SUMIF(A1:A10, ">50", B1:B10)
// Evaluates A1:A10, sums corresponding B cells
```

### Criteria Matching
Same as COUNTIF:
- `">10"`, `">=10"`, `"<10"`, `"<=10"`, `"<>10"`, `"=10"`
- Text matching (case-insensitive)
- Cell references: `">"&A1`

## Common Use Cases

### Sum Sales Above Target
```
=SUMIF(Sales, ">"&Target)
```

### Sum for Specific Category
```
=SUMIF(Category, "Electronics", Revenue)
```

### Sum Positive Values Only
```
=SUMIF(Values, ">0")
```

### Sum Non-Zero Values
```
=SUMIF(Data, "<>0")
```

### Sum by Status
```
=SUMIF(Status, "Approved", Amount)
```

## Criteria Formats

### Comparison
```
=SUMIF(A:A, ">100", B:B)
=SUMIF(A:A, ">=100", B:B)
=SUMIF(A:A, "<>0", B:B)
```

### Text Matching
```
=SUMIF(A:A, "Yes", B:B)
=SUMIF(A:A, "<>", B:B)    // Non-blank
```

### Dynamic Criteria
```
=SUMIF(A:A, ">"&C1, B:B)  // Greater than C1
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Range not a range | First argument must be range |
| Error propagation | Error in criteria | Check criteria value |

## Related Functions

- **[SUMIFS](./SUMIFS)** - Sum with multiple criteria
- **[COUNTIF](./COUNTIF)** - Count cells that meet criterion
- **[SUM](../math/sum)** - Sum all values
