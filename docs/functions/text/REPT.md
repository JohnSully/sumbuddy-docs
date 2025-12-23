---
sidebar_position: 8
---

# REPT

Repeats text a specified number of times.

## Quick Example

```
=REPT("*", 5)
```

Returns `*****`.

## Syntax

```
=REPT(text, number_times)
```

### Arguments

- **text** (required): The text you want to repeat
- **number_times** (required): The number of times to repeat the text (must be non-negative)

## Examples

### Create Pattern

```
=REPT("*", 10)
```
Returns `**********`

### Create Separator Line

```
=REPT("-", 50)
```
Returns 50 dashes

### Repeat Word

```
=REPT("Hello ", 3)
```
Returns `Hello Hello Hello `

### Zero Repetitions

```
=REPT("text", 0)
```
Returns `""` (empty string)

### Repeat Single Character

```
=REPT("x", 1)
```
Returns `x`

### Create Visual Bar

```
=REPT("|", A1)
```
If A1 = 5, returns `|||||` (bar chart effect)

## How It Works

### Repetition Process

REPT creates a new string by repeating text:
1. Takes the input text
2. Repeats it number_times
3. Concatenates all repetitions

### Truncation of number_times

Non-integer values are truncated (not rounded):

```
=REPT("x", 3.9)  // Returns "xxx" (repeats 3 times)
=REPT("x", 3.1)  // Returns "xxx" (repeats 3 times)
```

### Empty text

If text is empty, returns empty string regardless of number_times:

```
=REPT("", 100)  // Returns ""
```

### Zero or Negative number_times

- If number_times = 0, returns empty string
- If number_times < 0, returns `#VALUE!` error

## Common Use Cases

### Create Visual Bar Charts

```
=REPT("|", Sales/1000)
```
Create bar representing sales value

### Mask Passwords

```
=REPT("*", LEN(Password))
```
Display asterisks matching password length

### Create Padding

```
=REPT(" ", 10) & Text
```
Add leading spaces for alignment

### Generate Test Data

```
=REPT("Test ", 5)
```
Create repeated test strings

### Create Borders

```
=REPT("=", 80)
```
Create separator line in reports

### Indent Text

```
=REPT(" ", IndentLevel * 4) & Text
```
Create indentation for hierarchical display

## Error Handling

### Error Propagation

If any argument contains an error, REPT returns that error:

```
=REPT(#DIV/0!, 5)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | number_times < 0 | Use non-negative number |
| #VALUE! | number_times not numeric | Provide a number |
| #VALUE! | Result too long (>32767) | Reduce repetitions or text length |

### Negative Repetitions

```
=REPT("text", -5)
```
Returns `#VALUE!` (cannot repeat negative times)

### Result Too Long

```
=REPT("LongText", 10000)
```
Returns `#VALUE!` if result exceeds 32,767 characters

## Technical Details

### Implementation Notes

- Requires exactly 2 arguments
- Truncates non-integer number_times
- Maximum result length: 32,767 characters
- Returns empty string for 0 repetitions
- Empty text always returns empty string

### Length Limit

The total length of the result cannot exceed 32,767 characters:

```
text length × number_times ≤ 32,767
```

If this limit is exceeded, REPT returns `#VALUE!` error.

### Performance

For large repetitions:
- Efficient implementation
- Linear time complexity
- May hit length limit before performance issues

## Advanced Examples

### Progress Bar

```
=REPT("█", A1/10) & REPT("░", 10-A1/10)
```
Shows filled and unfilled portions (assuming A1 is 0-100)

### Padding Numbers

```
=REPT("0", 5-LEN(A1)) & A1
```
Pad number with leading zeros to 5 digits

### Create Histogram

```
=A1 & ": " & REPT("■", B1)
```
Label followed by bar representing value

### Star Rating

```
=REPT("★", Rating) & REPT("☆", 5-Rating)
```
Show filled and empty stars (assuming Rating is 0-5)

### Dynamic Spacer

```
=REPT(" ", MAX(0, 20-LEN(A1)))
```
Create variable spacing

### Bullet Points

```
=REPT("  ", Level) & "• " & Text
```
Create indented bullet points

### Table Border

```
="+" & REPT("-", 10) & "+" & REPT("-", 20) & "+"
```
Create table divider line

## Combining with Other Functions

### With LEN for Masking

```
=REPT("X", LEN(A1)-4) & RIGHT(A1, 4)
```
Mask all but last 4 characters

### With CONCATENATE

```
=CONCATENATE(REPT("-", 5), " Header ", REPT("-", 5))
```
Create centered header with borders

### With IF

```
=IF(A1>0, REPT("↑", A1), REPT("↓", ABS(A1)))
```
Show up or down arrows based on value

### With MOD

```
=REPT("🔵", MOD(A1, 5))
```
Show remainder as visual indicator

## Visual Applications

### Simple Bar Chart

```
=REPT("█", Value)
```

### Percentage Bar

```
=REPT("█", Percentage/10) & " " & Percentage & "%"
```

### Temperature Indicator

```
=REPT("🌡️", Temperature/10)
```

### Level Indicator

```
="Level: " & REPT("▰", Level) & REPT("▱", MaxLevel-Level)
```

## Related Functions

- **[CONCATENATE](./CONCATENATE)** - Join text strings
- **[LEN](./LEN)** - Get text length
- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
