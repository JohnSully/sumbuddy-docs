---
sidebar_position: 1
---

# IF

Returns one value if a condition is true and another value if it's false.

## Quick Example

```
=IF(A1 > 10, "Large", "Small")
```

If A1 is greater than 10, returns "Large", otherwise "Small".

## Syntax

```
=IF(logical_test, value_if_true, [value_if_false])
```

### Arguments

- **logical_test** (required): Condition to test (cannot be a range)
- **value_if_true** (required): Value returned if condition is TRUE
- **value_if_false** (optional): Value returned if condition is FALSE. Defaults to FALSE if omitted.

## Examples

```
=IF(A1 > 100, "Pass", "Fail")
=IF(B1 = "Yes", 1, 0)
=IF(C1 < 0, "Negative", "Positive or Zero")
=IF(LEN(D1) > 10, "Too long", "OK")
=IF(AND(A1>0, B1>0), "Both positive", "At least one negative")
```

## How It Works

### Logical Test Evaluation

- Numbers: 0 = FALSE, non-zero = TRUE
- Text: "TRUE" = TRUE, "FALSE" = FALSE, other text = #VALUE!
- Empty cells = FALSE
- Logical values: TRUE/FALSE directly

### Omitted value_if_false

```
=IF(A1 > 10, "Large")  // Returns FALSE if A1 ≤ 10
```

## Common Use Cases

- Grade calculation: `=IF(Score >= 60, "Pass", "Fail")`
- Bonus eligibility: `=IF(Sales > Target, Sales * 0.1, 0)`
- Status indicators: `=IF(DueDate < TODAY(), "Overdue", "Current")`
- Data validation: `=IF(ISBLANK(A1), "Required", "")`

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | logical_test is a range | Use single cell or comparison |
| #VALUE! | Text can't be coerced | Use proper logical expression |

## Nested IF Statements

```
=IF(Score >= 90, "A", IF(Score >= 80, "B", IF(Score >= 70, "C", "F")))
```

## Related Functions

- **[AND](./AND)** - Test multiple conditions (all must be true)
- **[OR](./OR)** - Test multiple conditions (any can be true)
- **[IFERROR](./IFERROR)** - Handle errors
- **[ISBLANK](./ISBLANK)** - Check if blank
- **[ISNUMBER](./ISNUMBER)** - Check if number
