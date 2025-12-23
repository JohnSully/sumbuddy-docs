---
sidebar_position: 7
---

# REPLACE

Replaces part of a text string with a different text string based on position.

## Quick Example

```
=REPLACE("Hello World", 7, 5, "There")
```

Returns `Hello There`.

## Syntax

```
=REPLACE(old_text, start_num, num_chars, new_text)
```

### Arguments

- **old_text** (required): The text containing characters you want to replace
- **start_num** (required): The position (1-based) where replacement begins
- **num_chars** (required): The number of characters to replace
- **new_text** (required): The text that will replace characters in old_text

## Examples

### Replace Middle Characters

```
=REPLACE("Hello World", 7, 5, "There")
```
Returns `Hello There` (replaces 5 characters starting at position 7)

### Replace Beginning

```
=REPLACE("Mr. Smith", 1, 3, "Dr.")
```
Returns `Dr. Smith`

### Insert Text

```
=REPLACE("Hello World", 6, 0, " Beautiful")
```
Returns `Hello Beautiful World` (inserts without removing)

### Replace with Empty

```
=REPLACE("Hello World", 6, 6, "")
```
Returns `Hello` (removes " World")

### Replace at End

```
=REPLACE("Version 1.0", 9, 3, "2.0")
```
Returns `Version 2.0`

### Replace Beyond Length

```
=REPLACE("Hello", 3, 100, "y there")
```
Returns `Hey there` (replaces from position 3 to end)

## How It Works

### Position-Based Replacement

REPLACE works by character position, not content:
1. Takes everything before start_num
2. Skips num_chars characters
3. Inserts new_text
4. Takes everything after the replaced portion

### Visual Example

```
Text: "ABCDEFGH"
=REPLACE("ABCDEFGH", 3, 4, "XY")

"AB" + "XY" + "GH" = "ABXYGH"
 ^      ^       ^
keep  insert   keep
```

### Start Position Beyond Text

If start_num is beyond the text length, new_text is appended:

```
=REPLACE("Hi", 10, 5, " there")
```
Returns `Hi there`

### Negative or Zero start_num

If start_num < 1, returns `#VALUE!` error:

```
=REPLACE("Hello", 0, 5, "Hi")  // #VALUE!
```

### Negative num_chars

If num_chars < 0, returns `#VALUE!` error:

```
=REPLACE("Hello", 1, -5, "Hi")  // #VALUE!
```

## Common Use Cases

### Mask Credit Card Numbers

```
=REPLACE(CardNumber, 1, 12, "XXXX-XXXX-XXXX-")
```
Shows only last 4 digits: XXXX-XXXX-XXXX-1234

### Update Version Numbers

```
=REPLACE("Version 1.0", 9, 3, "2.0")
```
Change version in string

### Fix Format Issues

```
=REPLACE(SSN, 4, 0, "-")
```
Insert dash in social security number

### Replace File Extension

```
=REPLACE(Filename, LEN(Filename)-2, 3, "pdf")
```
Change file extension to .pdf

### Censor Words

```
=REPLACE(Text, StartPos, WordLength, REPT("*", WordLength))
```
Replace word with asterisks

### Insert Characters

```
=REPLACE(PhoneNumber, 4, 0, "-")
```
Insert dash after 3rd character

## Error Handling

### Error Propagation

If any argument contains an error, REPLACE returns that error:

```
=REPLACE(#DIV/0!, 1, 5, "new")
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | start_num < 1 | Use position ≥ 1 |
| #VALUE! | num_chars < 0 | Use non-negative number |
| #VALUE! | Non-numeric arguments | Ensure start_num and num_chars are numbers |

### Invalid Arguments

```
=REPLACE("Text", "a", 5, "new")
```
Returns `#VALUE!` (start_num must be numeric)

## Technical Details

### Implementation Notes

- Requires exactly 4 arguments
- Uses 1-based indexing
- Can insert text (num_chars = 0)
- Can delete text (new_text = "")
- If start_num > length, appends new_text

### Algorithm

```
result = old_text[0:start_num-1] + new_text + old_text[start_num+num_chars-1:]
```

### Type Conversion

Numbers and other types are converted to text:

```
=REPLACE(12345, 2, 2, "XX")
```
Returns `1XX45` (number converted to "12345")

## Comparison: REPLACE vs SUBSTITUTE

### REPLACE - By Position

```
=REPLACE("Hello World", 7, 5, "There")
```
Replaces characters at specific position

### SUBSTITUTE - By Content

```
=SUBSTITUTE("Hello World", "World", "There")
```
Finds and replaces specific text

### Key Differences

| Feature | REPLACE | SUBSTITUTE |
|---------|---------|------------|
| Method | Position-based | Content-based |
| Case sensitive | N/A | Yes |
| Specific occurrence | One position | Can specify nth occurrence |
| Insert capability | Yes (num_chars=0) | No |

## Advanced Examples

### Mask All But Last 4

```
=REPLACE(SSN, 1, LEN(SSN)-4, REPT("*", LEN(SSN)-4))
```
Returns ***-**-1234

### Insert at Multiple Positions

```
=REPLACE(REPLACE(Text, 4, 0, "-"), 8, 0, "-")
```
Insert dashes at positions 4 and 8

### Replace with Formula Result

```
=REPLACE(A1, 1, 3, TEXT(B1, "000"))
```
Replace first 3 characters with formatted number

### Dynamic Replacement

```
=REPLACE(Text, FIND("@", Text), 1, "*")
```
Replace @ symbol with *

### Pad with Zeros

```
=REPLACE("   " & A1, 1, 0, REPT("0", 10-LEN(A1)))
```
Pad number with leading zeros

### Clean and Replace

```
=REPLACE(TRIM(A1), 1, 1, UPPER(LEFT(TRIM(A1), 1)))
```
Trim and capitalize first letter

## Inserting vs Replacing

### Insert (num_chars = 0)

```
=REPLACE("Hello", 6, 0, " World")
```
Returns `Hello World` (inserts, doesn't replace)

### Replace (num_chars > 0)

```
=REPLACE("Hello", 6, 5, " World")
```
Returns `Hello World` (replaces if there were characters)

### Delete (new_text = "")

```
=REPLACE("Hello World", 6, 6, "")
```
Returns `Hello` (deletes characters)

## Related Functions

- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text by content
- **[MID](./MID)** - Extract middle characters
- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[LEN](./LEN)** - Get text length
- **[FIND](./FIND)** - Find text position
