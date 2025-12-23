---
sidebar_position: 1
---

# PMT

Calculates the payment for a loan based on constant payments and a constant interest rate.

## Quick Example

```
=PMT(5%/12, 60, 10000)
```

Returns the monthly payment for a $10,000 loan at 5% annual interest over 60 months.

## Syntax

```
=PMT(rate, nper, pv, [fv], [type])
```

### Arguments

- **rate** (required): Interest rate per period
- **nper** (required): Total number of payment periods
- **pv** (required): Present value (loan amount)
- **fv** (optional): Future value (balloon payment). Defaults to 0.
- **type** (optional): When payments are due: 0 = end of period (default), 1 = beginning of period

## Examples

### Monthly Car Loan Payment

```
=PMT(6%/12, 36, 20000)
// 6% annual rate, 3 years (36 months), $20,000 loan
// Returns approximately -$608.44
```

### Mortgage Payment

```
=PMT(4.5%/12, 30*12, 200000)
// 4.5% annual rate, 30 years, $200,000 mortgage
// Returns approximately -$1,013.37
```

### Payment with Balloon

```
=PMT(5%/12, 60, 15000, -5000)
// $15,000 loan, $5,000 balloon payment at end
```

### Beginning of Period

```
=PMT(6%/12, 36, 20000, 0, 1)
// Payment at beginning of each month
```

## How It Works

### Negative Result

PMT returns a NEGATIVE number because it represents money going out (payment):
```
=PMT(5%/12, 60, 10000)  // Returns -188.71
```

To display as positive: `=-PMT(5%/12, 60, 10000)`

### Rate Per Period

Convert annual rate to period rate:
- Monthly: Annual Rate / 12
- Quarterly: Annual Rate / 4
- Semi-annual: Annual Rate / 2

```
=PMT(6%/12, 36, 20000)  // 6% annual → 0.5% monthly
```

### Number of Periods

Convert years to periods:
- Monthly payments: Years × 12
- Quarterly payments: Years × 4

```
=PMT(4%/12, 30*12, 200000)  // 30 years = 360 months
```

## Financial Formula

The payment calculation uses this formula:

For rate ≠ 0:
```
PMT = (-pv × rate × (1 + rate)^nper - fv × rate) / ((1 + rate)^nper - 1) × (1 + rate × type)
```

For rate = 0:
```
PMT = (-pv - fv) / nper
```

## Common Use Cases

### Auto Loan

```
=PMT(APR/12, Years*12, LoanAmount)
```

### Mortgage

```
=PMT(AnnualRate/12, Years*12, HomePrice - DownPayment)
```

### Student Loan

```
=PMT(InterestRate/12, Months, PrincipalAmount)
```

### Lease Payment

```
=PMT(Rate/12, Term, -ResidualValue, ResidualValue)
```

## Calculating Related Values

### Total Amount Paid

```
=-PMT(rate, nper, pv) * nper
```

### Total Interest Paid

```
=-PMT(rate, nper, pv) * nper - pv
```

### Affordable Loan Amount

```
=PV(rate, nper, -MonthlyPayment)
```

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| #NUM! | Calculation error | Check rate and nper values |
| #DIV/0! | nper = 0 when rate = 0 | Provide valid nper |
| #VALUE! | Non-numeric arguments | Ensure all arguments are numbers |

### Type Must Be 0 or 1

```
=PMT(5%/12, 60, 10000, 0, 2)  // Returns #NUM! (type must be 0 or 1)
```

## Advanced Examples

### Compare Different Terms

```
36-month: =PMT(6%/12, 36, 20000)
48-month: =PMT(6%/12, 48, 20000)
60-month: =PMT(6%/12, 60, 20000)
```

### Bi-Weekly Payments

```
=PMT(AnnualRate/26, Years*26, LoanAmount)
// 26 bi-weekly periods per year
```

### Interest-Only Period

Use combination of PMT for interest-only and PMT for principal+interest

## Tips

### Display as Positive

```
=-PMT(5%/12, 60, 10000)
```

### Round to Cents

```
=ROUND(PMT(5%/12, 60, 10000), 2)
```

### Annual Payment from Monthly

```
=PMT(5%/12, 60, 10000) * 12
```

## Related Functions

PMT is currently the only financial function in Sum Buddy. Additional financial functions (PV, FV, RATE, NPER) may be added in future versions.
