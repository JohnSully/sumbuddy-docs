---
sidebar_position: 1
---

# COUNTIF

Counts cells in a range that meet a single criterion.

## Quick Example

```
=COUNTIF(A1:A10, ">10")
```

Counts cells in A1:A10 that contain values greater than 10.

## Syntax

```
=COUNTIF(range, criteria)
```

### Arguments

- **range** (required): The range of cells to count
- **criteria** (required): The condition that determines which cells to count

## Examples

```
=COUNTIF(A1:A10, ">10")              // Count values > 10
=COUNTIF(B1:B20, "Yes")              // Count cells containing "Yes"
=COUNTIF(C1:C50, ">=100")            // Count values >= 100
=COUNTIF(D1:D30, "<>0")              // Count non-zero values
=COUNTIF(E1:E100, A1)                // Count cells matching A1
```

## Criteria Formats

### Comparison Operators
```
">10"      // Greater than 10
">=10"     // Greater than or equal to 10
"<10"      // Less than 10
"<=10"     // Less than or equal to 10
"<>10"     // Not equal to 10
"=10"      // Equal to 10 (or just 10)
```

### Text Matching
```
"Yes"      // Exact match "Yes" (case-insensitive)
"<>Yes"    // Not "Yes"
""         // Blank cells
"<>"       // Non-blank cells
```

### Using Cell References
```
=COUNTIF(A1:A10, B1)        // Match value in B1
=COUNTIF(A1:A10, ">"&B1)    // Greater than value in B1
```

## How It Works

### Case-Insensitive Text Matching
```
=COUNTIF(A1:A10, "yes")  // Matches "Yes", "YES", "yes"
```

### Number Comparison
```
=COUNTIF(A1:A10, ">="&AVERAGE(A1:A10))
// Count values >= average
```

### Blank Cell Handling
```
=COUNTIF(A1:A10, "")     // Count blank cells
=COUNTIF(A1:A10, "<>")   // Count non-blank cells
```

## Common Use Cases

### Count Passing Grades
```
=COUNTIF(Scores, ">=60")
```

### Count Yes Responses
```
=COUNTIF(Responses, "Yes")
```

### Count Above Average
```
=COUNTIF(Sales, ">"&AVERAGE(Sales))
```

### Count Non-Zero Values
```
=COUNTIF(Data, "<>0")
```

### Count Specific Text
```
=COUNTIF(Status, "Complete")
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Range not a range | First argument must be a range |
| Error propagation | Error in criteria | Check criteria value |

## Related Functions

- **[COUNTIFS](./COUNTIFS)** - Count with multiple criteria
- **[SUMIF](./SUMIF)** - Sum cells that meet criterion
- **[COUNT](../math/COUNT)** - Count all numbers
- **[COUNTA](../math/COUNTA)** - Count non-empty cells
