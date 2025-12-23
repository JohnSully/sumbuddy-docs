---
sidebar_position: 5
---

# LEN

Returns the number of characters in a text string.

## Quick Example

```
=LEN("Hello")
```

Returns `5`.

## Syntax

```
=LEN(text)
```

### Arguments

- **text** (required): The text whose length you want to find

## Examples

### Count Characters

```
=LEN("Hello World")
```
Returns `11` (includes the space)

### Empty String

```
=LEN("")
```
Returns `0`

### Count Cell Value Length

```
=LEN(A1)
```
Returns the number of characters in cell A1

### Numbers

```
=LEN(12345)
```
Returns `5` (number converted to "12345")

### With Spaces

```
=LEN("  spaced  ")
```
Returns `10` (spaces are counted)

### Multiple Words

```
=LEN("One Two Three")
```
Returns `13` (counts all characters including spaces)

## How It Works

### Character Counting

LEN counts every character in the text:
- Letters are counted
- Numbers are counted
- Spaces are counted
- Punctuation is counted
- Special characters are counted

### Type Conversion

Non-text values are converted to text before counting:

```
=LEN(123)     // Returns 3
=LEN(TRUE)    // Returns 4 ("TRUE")
=LEN(3.14)    // Returns 4 ("3.14")
```

### Empty Values

```
=LEN(A1)
```
- If A1 is empty: returns `0`
- If A1 = "": returns `0`
- If A1 = " ": returns `1` (one space)

## Common Use Cases

### Validate Input Length

```
=IF(LEN(A1) > 100, "Too long", "OK")
```
Check if input exceeds 100 characters

### Count Characters Remaining

```
=140 - LEN(A1)
```
Calculate characters remaining (like Twitter)

### Validate Phone Number

```
=IF(LEN(Phone) = 10, "Valid", "Invalid")
```
Check if phone number is exactly 10 digits

### Password Length Check

```
=IF(LEN(Password) >= 8, "Strong enough", "Too short")
```
Validate minimum password length

### Truncate Text

```
=IF(LEN(Text) > 50, LEFT(Text, 50) & "...", Text)
```
Add ellipsis to long text

### Find Last Character

```
=RIGHT(A1, 1)
```
Often combined with LEN in formulas: `=MID(A1, LEN(A1), 1)`

## Error Handling

### Error Propagation

If the argument contains an error, LEN returns that error:

```
=LEN(#DIV/0!)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Wrong number of arguments | Provide exactly 1 argument |
| Error propagation | Error in text argument | Check source data |

## Technical Details

### Implementation Notes

- Requires exactly 1 argument
- Returns number as double (0.0, 1.0, etc.)
- Counts each character as 1
- Converts non-text values to text first
- Uses standard string length function

### Character Counting

LEN counts characters, not bytes:

```
=LEN("A")      // Returns 1
=LEN("ABC")    // Returns 3
```

For multi-byte characters (UTF-8), LEN still counts characters not bytes.

### Empty vs Blank

```
=LEN("")       // Returns 0 (empty string)
=LEN(" ")      // Returns 1 (one space)
=LEN("  ")     // Returns 2 (two spaces)
```

## Comparison: LEN vs Other Functions

### Count Characters

```
=LEN("Hello World")  // Returns 11
```

### Count Words (Approximate)

```
=LEN(A1) - LEN(SUBSTITUTE(A1, " ", "")) + 1
```
Count spaces and add 1

### Count Specific Character

```
=LEN(A1) - LEN(SUBSTITUTE(A1, "a", ""))
```
Count occurrences of "a"

## Advanced Examples

### Validate Email Format

```
=IF(AND(LEN(Email) > 5, FIND("@", Email) > 0), "Valid format", "Invalid")
```
Basic email validation

### Calculate Average Word Length

```
=LEN(SUBSTITUTE(Text, " ", "")) / (LEN(Text) - LEN(SUBSTITUTE(Text, " ", "")) + 1)
```
Average characters per word

### Pad with Zeros

```
=REPT("0", 10 - LEN(A1)) & A1
```
Pad number to 10 digits with leading zeros

### Extract Last N Characters Dynamically

```
=RIGHT(A1, LEN(A1) - FIND(",", A1))
```
Get everything after first comma

### Count Lines in Text

```
=LEN(A1) - LEN(SUBSTITUTE(A1, CHAR(10), "")) + 1
```
Count line breaks + 1

### Remove Extra Spaces

```
=IF(LEN(TRIM(A1)) < LEN(A1), TRIM(A1), A1)
```
Trim only if needed

## Working with LEN in Formulas

### Extract Everything Except Last Character

```
=LEFT(A1, LEN(A1) - 1)
```

### Extract Everything Except First Character

```
=RIGHT(A1, LEN(A1) - 1)
```

### Find Middle Character(s)

```
=MID(A1, (LEN(A1) / 2), 1)
```
Get the middle character

### Reverse Text (Complex)

Requires array formula or multiple steps using LEN to determine length

## Related Functions

- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[MID](./MID)** - Extract middle characters
- **[FIND](./FIND)** - Find position of text
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
