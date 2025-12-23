---
sidebar_position: 1
---

# TODAY

Returns the current date (with no time component).

## Quick Example

```
=TODAY()
```

Returns today's date, e.g., `12/23/2025`.

## Syntax

```
=TODAY()
```

### Arguments

TODAY takes no arguments.

## Examples

### Get Current Date

```
=TODAY()
```
Returns the current date

### Days Until Event

```
=EventDate - TODAY()
```
Calculate days remaining until an event

### Days Since Start

```
=TODAY() - StartDate
```
Calculate days elapsed since a start date

### Current Age

```
=(TODAY() - BirthDate) / 365.25
```
Approximate age in years

### Is Past Due

```
=IF(DueDate < TODAY(), "Overdue", "Current")
```
Check if a date has passed

### Next Week

```
=TODAY() + 7
```
Returns date 7 days from now

## How It Works

### Current Date Only

TODAY returns the date with NO time component:
- Time is set to midnight (00:00:00)
- Updates each time the spreadsheet recalculates
- Based on system date/time

### Volatile Function

TODAY is a **volatile function**:
- Recalculates every time the spreadsheet calculates
- Updates automatically when you open the file
- Cannot be "frozen" to a specific date
- Changes daily as the system date changes

### Date Serial Number

Internally, dates are stored as numbers:
- Excel epoch: Days since December 30, 1899
- Each day = 1.0
- TODAY() returns this as a formatted date

## Common Use Cases

### Calculate Age

```
=YEAR(TODAY()) - YEAR(BirthDate)
```
Calculate age in years

### Days Until Deadline

```
=Deadline - TODAY()
```
Days remaining

### Current Month

```
=MONTH(TODAY())
```
Get current month number

### Current Year

```
=YEAR(TODAY())
```
Get current year

### Is This Year

```
=YEAR(A1) = YEAR(TODAY())
```
Check if a date is in the current year

### Timestamp for Records

```
=TODAY()
```
Record when entry was created (updates daily)

## Error Handling

### Argument Error

If you provide any arguments, TODAY returns an error:

```
=TODAY(5)
```
Returns `#VALUE!` (TODAY takes no arguments)

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Arguments provided | Use =TODAY() with no arguments |
| #NAME? | Function name misspelled | Check spelling |

## Technical Details

### Implementation Notes

- Takes exactly 0 arguments
- Returns current date from system clock
- Volatile function (recalculates frequently)
- Uses Excel-compatible date epoch
- Adjusts for user's timezone

### Excel Epoch

Sum Buddy uses Excel's date system:
- Day 1 = January 1, 1900
- Includes Excel's leap year bug (treats 1900 as leap year)
- Compatible with Excel date calculations

### Timezone Handling

TODAY returns date in the user's local timezone:
- Uses system timezone offset
- Adjusts to show correct local date
- Midnight in user's timezone

## Comparison: TODAY vs NOW

### TODAY - Date Only

```
=TODAY()  // Returns 12/23/2025 (no time)
```

### NOW - Date and Time (if available)

```
=NOW()  // Returns 12/23/2025 14:30:00
```

### Key Differences

- TODAY: Midnight (no time component)
- NOW: Current date and time
- Both are volatile functions

## Advanced Examples

### First Day of Current Month

```
=DATE(YEAR(TODAY()), MONTH(TODAY()), 1)
```

### Last Day of Current Month

```
=DATE(YEAR(TODAY()), MONTH(TODAY())+1, 0)
```

### Days in Current Month

```
=DAY(DATE(YEAR(TODAY()), MONTH(TODAY())+1, 0))
```

### Business Days Until Date

```
=NETWORKDAYS(TODAY(), TargetDate)
```
(If NETWORKDAYS available)

### Age on Specific Date

```
=(SpecificDate - BirthDate) / 365.25
=((TODAY() - BirthDate) / 365.25)
```

### Conditional Formatting Helper

```
=IF(A1 < TODAY(), "Past", IF(A1 = TODAY(), "Today", "Future"))
```

## Date Arithmetic

### Add Days

```
=TODAY() + 30  // 30 days from now
```

### Subtract Days

```
=TODAY() - 7  // 7 days ago
```

### Add Months

```
=EDATE(TODAY(), 3)  // 3 months from now
```

### Difference Between Dates

```
=FutureDate - TODAY()  // Days until future date
```

## Making TODAY Static

If you need a date that doesn't update:

### Copy and Paste Values
1. Enter =TODAY()
2. Copy the cell
3. Paste as Values

This converts the formula to a static date.

### Use DATE Instead

```
=DATE(2025, 12, 23)
```
Specific date that won't change

## Related Functions

- **[DATE](./DATE)** - Create specific date
- **[YEAR](./YEAR)** - Extract year from date
- **[MONTH](./MONTH)** - Extract month from date
- **[DAY](./DAY)** - Extract day from date
- **[EDATE](./EDATE)** - Add months to date
