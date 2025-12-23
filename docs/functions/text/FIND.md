---
sidebar_position: 9
---

# FIND

Finds the starting position of one text string within another text string (case-sensitive).

## Quick Example

```
=FIND("World", "Hello World")
```

Returns `7` (position where "World" starts).

## Syntax

```
=FIND(find_text, within_text, [start_num])
```

### Arguments

- **find_text** (required): The text you want to find
- **within_text** (required): The text in which you want to search
- **start_num** (optional): The character position to start searching from (1-based). Defaults to 1.

## Examples

### Basic Find

```
=FIND("World", "Hello World")
```
Returns `7`

### Find from Specific Position

```
=FIND("a", "banana", 3)
```
Returns `4` (finds first "a" starting from position 3)

### Find Space

```
=FIND(" ", "Hello World")
```
Returns `6` (position of first space)

### Case-Sensitive Search

```
=FIND("world", "Hello World")
```
Returns `#VALUE!` (lowercase "world" not found)

### Find Character

```
=FIND("@", Email)
```
Returns position of @ symbol in email address

### Find Not Present

```
=FIND("xyz", "Hello World")
```
Returns `#VALUE!` (text not found)

## How It Works

### Case-Sensitive Matching

FIND is case-sensitive:

```
=FIND("ABC", "abcdef")  // Returns #VALUE! (not found)
=FIND("abc", "abcdef")  // Returns 1 (found)
```

### 1-Based Position

Position counting starts at 1:

```
"Hello"
 12345
```
First character is position 1

### UTF-8 Character Counting

FIND counts characters, not bytes:
- Each character counts as 1, regardless of byte length
- Multi-byte UTF-8 characters are counted correctly

### Empty find_text

If find_text is empty, returns start_num position:

```
=FIND("", "Hello", 3)  // Returns 3
```

## Common Use Cases

### Extract Username from Email

```
=LEFT(Email, FIND("@", Email) - 1)
```
Get everything before @

### Extract Domain from Email

```
=MID(Email, FIND("@", Email) + 1, LEN(Email))
```
Get everything after @

### Find File Extension

```
=FIND(".", Filename)
```
Find position of period in filename

### Parse Delimited Data

```
=LEFT(Data, FIND(",", Data) - 1)
```
Extract first field from CSV

### Validate Format

```
=IF(ISERROR(FIND("@", Email)), "Invalid", "Valid")
```
Check if email contains @

### Extract Area Code

```
=MID(Phone, FIND("(", Phone) + 1, 3)
```
Extract characters between parentheses

## Error Handling

### Text Not Found

If find_text is not found, FIND returns `#VALUE!`:

```
=FIND("xyz", "Hello World")
```
Returns `#VALUE!`

### Error Propagation

If any argument contains an error, FIND returns that error:

```
=FIND("x", #DIV/0!)
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | find_text not found | Check that text exists in within_text |
| #VALUE! | start_num < 1 | Use position ≥ 1 |
| #VALUE! | start_num > text length + 1 | Use valid starting position |

### Invalid start_num

```
=FIND("a", "banana", 0)
```
Returns `#VALUE!` (start_num must be ≥ 1)

### start_num Beyond Text

```
=FIND("a", "banana", 100)
```
Returns `#VALUE!` (start_num exceeds text length + 1)

## Technical Details

### Implementation Notes

- Requires 2 or 3 arguments
- Case-sensitive search
- Uses UTF-8 character counting
- Returns 1-based position
- Empty find_text returns start_num

### UTF-8 Aware

FIND correctly handles multi-byte characters:

```
=FIND("世", "Hello世界")  // Returns 6 (character position, not byte position)
```

### Search Algorithm

- Linear search from start_num
- Returns position of first match
- Case-sensitive comparison
- Stops at first match found

## Comparison: FIND vs SEARCH

Sum Buddy provides FIND. Some spreadsheets also have SEARCH:

### FIND - Case-Sensitive

```
=FIND("World", "Hello World")  // Returns 7
=FIND("world", "Hello World")  // Returns #VALUE!
```

### SEARCH - Case-Insensitive (if available)

```
=SEARCH("World", "Hello World")  // Returns 7
=SEARCH("world", "Hello World")  // Returns 7
```

## Advanced Examples

### Find Second Occurrence

```
=FIND(" ", "First Second Third", FIND(" ", "First Second Third") + 1)
```
Find second space

### Find Nth Occurrence

```
=FIND("~", SUBSTITUTE(Text, " ", "~", N))
```
Replace Nth occurrence of delimiter, then find it

### Extract Between Delimiters

```
=MID(A1, FIND("[", A1) + 1, FIND("]", A1) - FIND("[", A1) - 1)
```
Extract text between square brackets

### Find Last Occurrence (Complex)

```
// Requires SUBSTITUTE trick or reverse search
=FIND("@", SUBSTITUTE(A1, "@", "@", LEN(A1)-LEN(SUBSTITUTE(A1,"@",""))))
```

### Conditional Extraction

```
=IF(ISERROR(FIND(":", A1)), A1, LEFT(A1, FIND(":", A1) - 1))
```
Extract text before colon if colon exists

### Validate Phone Format

```
=IF(AND(FIND("-", Phone, 3)=4, FIND("-", Phone, 5)=8), "Valid", "Invalid")
```
Check for dashes at positions 4 and 8

## Using with IFERROR

### Avoid #VALUE! Errors

```
=IFERROR(FIND("@", Email), 0)
```
Returns 0 instead of error if @ not found

### Conditional Logic

```
=IF(ISERROR(FIND(".", Filename)), "No extension", RIGHT(Filename, LEN(Filename) - FIND(".", Filename)))
```
Handle cases where delimiter might not exist

## Working with Multiple Searches

### Find First of Multiple Characters

```
=MIN(FIND(".", A1), FIND(",", A1), FIND(";", A1))
```
Find whichever delimiter comes first (with error handling needed)

### Check for Any Match

```
=OR(NOT(ISERROR(FIND("cat", A1))), NOT(ISERROR(FIND("dog", A1))))
```
Check if either "cat" or "dog" is present

## Related Functions

- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[MID](./MID)** - Extract middle characters
- **[LEN](./LEN)** - Get text length
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
