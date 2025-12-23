---
sidebar_position: 6
---

# SUBSTITUTE

Replaces occurrences of text within a string with new text.

## Quick Example

```
=SUBSTITUTE("Hello World", "World", "There")
```

Returns `Hello There`.

## Syntax

```
=SUBSTITUTE(text, old_text, new_text, [instance_num])
```

### Arguments

- **text** (required): The text containing the characters to replace
- **old_text** (required): The text you want to replace
- **new_text** (required): The text you want to replace old_text with
- **instance_num** (optional): Which occurrence to replace. If omitted, all occurrences are replaced.

## Examples

### Replace All Occurrences

```
=SUBSTITUTE("banana", "a", "o")
```
Returns `bonono` (replaces all 3 "a"s)

### Replace Specific Occurrence

```
=SUBSTITUTE("banana", "a", "o", 2)
```
Returns `banona` (replaces only the 2nd "a")

### Remove Text

```
=SUBSTITUTE("Hello World", " ", "")
```
Returns `HelloWorld` (removes spaces by replacing with empty string)

### Replace Multiple Characters

```
=SUBSTITUTE("555-123-4567", "-", "")
```
Returns `5551234567` (removes all dashes)

### Case-Sensitive Replacement

```
=SUBSTITUTE("Hello hello", "hello", "Hi")
```
Returns `Hello Hi` (only lowercase "hello" is replaced)

### Replace First Occurrence Only

```
=SUBSTITUTE("Error: Error in line 5", "Error", "Warning", 1)
```
Returns `Warning: Error in line 5`

## How It Works

### Global vs Specific Replacement

**Without instance_num (replace all):**
```
=SUBSTITUTE("aaa", "a", "b")  // Returns "bbb"
```

**With instance_num (replace specific):**
```
=SUBSTITUTE("aaa", "a", "b", 2)  // Returns "aba"
```

### Case Sensitivity

SUBSTITUTE is case-sensitive:

```
=SUBSTITUTE("Hello HELLO", "hello", "Hi")
```
Returns `Hi HELLO` (only lowercase matches)

### Empty old_text

If old_text is empty, the original text is returned unchanged:

```
=SUBSTITUTE("Hello", "", "X")  // Returns "Hello"
```

### Empty new_text

If new_text is empty, occurrences of old_text are removed:

```
=SUBSTITUTE("Hello World", " ", "")  // Returns "HelloWorld"
```

## Common Use Cases

### Remove Spaces

```
=SUBSTITUTE(A1, " ", "")
```
Remove all spaces from text

### Replace Line Breaks

```
=SUBSTITUTE(A1, CHAR(10), " ")
```
Replace line breaks with spaces

### Clean Data

```
=SUBSTITUTE(PhoneNumber, "-", "")
```
Remove dashes from phone numbers

### Fix Typos

```
=SUBSTITUTE(A1, "recieve", "receive")
```
Correct common misspellings

### Normalize Text

```
=SUBSTITUTE(SUBSTITUTE(A1, "/", "-"), "\\", "-")
```
Replace multiple separators with hyphens

### Remove Currency Symbols

```
=SUBSTITUTE(Price, "$", "")
```
Remove dollar signs from prices

## Error Handling

### Error Propagation

If any argument contains an error, SUBSTITUTE returns that error:

```
=SUBSTITUTE(#DIV/0!, "x", "y")
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | instance_num < 1 | Use positive number or omit |
| #VALUE! | instance_num is not numeric | Provide a number |
| Error propagation | Error in any argument | Check source data |

### Invalid instance_num

```
=SUBSTITUTE("text", "t", "T", 0)
```
Returns `#VALUE!` (instance_num must be ≥ 1)

### Occurrence Not Found

If the specified instance doesn't exist, returns original text:

```
=SUBSTITUTE("Hello", "x", "y", 5)
```
Returns `Hello` (no 5th occurrence of "x")

## Technical Details

### Implementation Notes

- Requires 3 or 4 arguments
- Case-sensitive matching
- If old_text is not found, returns original text
- Empty old_text returns original text unchanged
- instance_num must be positive integer if provided

### Search and Replace Algorithm

For global replacement (no instance_num):
- Scans text from left to right
- Replaces each occurrence as found
- Continues until end of text

For specific instance:
- Counts occurrences from left to right
- Replaces only the nth occurrence
- Returns original if instance not found

## Comparison: SUBSTITUTE vs REPLACE

### SUBSTITUTE - By Content

```
=SUBSTITUTE("Hello World", "World", "There")
```
Replaces based on what the text is

### REPLACE - By Position

```
=REPLACE("Hello World", 7, 5, "There")
```
Replaces based on character position

### Key Differences

- SUBSTITUTE finds and replaces text
- REPLACE replaces at a specific position
- SUBSTITUTE is case-sensitive
- REPLACE works by character position, not content

## Advanced Examples

### Chain Multiple Substitutions

```
=SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(A1, ".", ""), ",", ""), "-", "")
```
Remove multiple characters

### Replace nth Word

```
=SUBSTITUTE(Text, " ", "|", N)
```
Replace the Nth space with a delimiter for parsing

### Clean Phone Numbers

```
=SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(Phone, "(", ""), ")", ""), "-", "")
```
Remove all phone number formatting

### Count Occurrences

```
=LEN(Text) - LEN(SUBSTITUTE(Text, "a", ""))
```
Count how many times "a" appears

### Replace Last Occurrence

```
// Complex - requires finding last position and using REPLACE instead
```
SUBSTITUTE doesn't have built-in "last" option

### Conditional Replacement

```
=IF(FIND("Error", A1) > 0, SUBSTITUTE(A1, "Error", "Warning"), A1)
```
Replace only if text is found

## Multiple Replacements

### Replace Each Instance Differently

You need separate formulas:

```
Step1: =SUBSTITUTE(A1, "a", "X", 1)
Step2: =SUBSTITUTE(Step1, "a", "Y", 1)
```

### Replace All of Multiple Texts

Nest SUBSTITUTE calls:

```
=SUBSTITUTE(SUBSTITUTE(A1, "cat", "dog"), "bird", "fish")
```

## Related Functions

- **[REPLACE](./REPLACE)** - Replace text by position
- **[FIND](./FIND)** - Find text position
- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[MID](./MID)** - Extract middle characters
- **[LEN](./LEN)** - Get text length
