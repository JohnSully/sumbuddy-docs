---
sidebar_position: 1
---

# CONCATENATE

Joins multiple text strings into one string.

## Quick Example

```
=CONCATENATE("Hello", " ", "World")
```

Returns `Hello World`.

## Syntax

```
=CONCATENATE(text1, [text2], ...)
```

### Arguments

- **text1** (required): The first text string, cell reference, or range to join
- **text2, ...** (optional): Additional text strings, cell references, or ranges to join

## Examples

### Join Two Strings

```
=CONCATENATE("First", "Second")
```
Returns `FirstSecond`

### Join with Space

```
=CONCATENATE(A1, " ", B1)
```
If A1="John" and B1="Doe", returns `John Doe`

### Join Multiple Cells

```
=CONCATENATE(A1, A2, A3)
```
Combines values from three cells

### Create Full Name

```
=CONCATENATE(First_Name, " ", Last_Name)
```
Creates full name from separate fields

### Create Address

```
=CONCATENATE(Street, ", ", City, ", ", State, " ", ZIP)
```
Combines address components

### Join Range Values

```
=CONCATENATE(A1:A5)
```
Joins all values in the range into one string

## How It Works

### Text Conversion

All arguments are converted to text:
- Numbers become text: 123 → "123"
- Dates become text representations
- TRUE → "TRUE", FALSE → "FALSE"
- Empty cells contribute nothing

### Range Handling

When a range is provided:
- All non-empty cells in the range are concatenated
- Cells are processed in row-major order (left to right, top to bottom)
- Empty cells are skipped
- Errors in the range are propagated

### No Automatic Separators

CONCATENATE does not add spaces or separators:

```
=CONCATENATE("Hello", "World")
```
Returns `HelloWorld` (no space)

To add separators, include them explicitly:

```
=CONCATENATE("Hello", " ", "World")
```
Returns `Hello World`

## Common Use Cases

### Create Full Names

```
=CONCATENATE(A2, " ", B2, " ", C2)
```
Combine first, middle, and last names

### Build Email Addresses

```
=CONCATENATE(Username, "@", Domain)
```
Create email address from components

### Create File Paths

```
=CONCATENATE(Folder, "/", Filename, ".txt")
```
Build complete file path

### Format Phone Numbers

```
=CONCATENATE("(", Area, ") ", Prefix, "-", Line)
```
Format phone number with separators

### Create Labels

```
=CONCATENATE("ID: ", A1)
```
Add label prefix to values

### Build URLs

```
=CONCATENATE("https://", Domain, "/", Path)
```
Construct complete URLs

## Error Handling

### Error Propagation

If any argument contains an error, CONCATENATE returns that error:

```
=CONCATENATE("Hello", #DIV/0!, "World")
```
Returns `#DIV/0!`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Less than 1 argument | Provide at least one argument |
| #REF! | Invalid cell reference | Verify cell references exist |
| Error propagation | Error in any argument | Check all arguments for errors |

## Technical Details

### Implementation Notes

- Accepts 1 or more arguments
- Supports both individual values and ranges
- Empty cells in ranges are ignored
- Empty strings are included in concatenation
- No maximum length enforced by function (system limits apply)

### Range Processing

When concatenating a range:

```
=CONCATENATE(A1:C2)
```
Where cells contain: A1="a", B1="b", C1="c", A2="d", B2="e", C2="f"
Returns `abcdef` (row-major order)

### Type Coercion Examples

```
=CONCATENATE(100, " dollars")
```
Returns `100 dollars` (number converted to text)

```
=CONCATENATE("Value: ", TRUE)
```
Returns `Value: TRUE` (boolean converted to text)

## Comparison: CONCATENATE vs & Operator

### Using CONCATENATE

```
=CONCATENATE(A1, " ", B1)
```

### Using & Operator

```
=A1 & " " & B1
```

Both produce the same result. The & operator is often more concise.

## Alternative: CONCAT Function

Sum Buddy also provides CONCAT, which works identically to CONCATENATE:

```
=CONCAT("Hello", " ", "World")
```

CONCAT is the newer, more concise name for the same functionality.

## Advanced Examples

### Conditional Concatenation

```
=CONCATENATE(A1, IF(B1<>"", ", ", ""), B1)
```
Only add comma if B1 is not empty

### Multi-Line Text

```
=CONCATENATE(Line1, CHAR(10), Line2)
```
Join with newline character (CHAR(10))

### Build SQL Query

```
=CONCATENATE("SELECT * FROM ", Table, " WHERE id = ", ID)
```
Construct database query

### Create CSV Line

```
=CONCATENATE(A1, ",", B1, ",", C1)
```
Join values with commas

## Related Functions

- **[LEFT](./LEFT)** - Extract leftmost characters
- **[RIGHT](./RIGHT)** - Extract rightmost characters
- **[MID](./MID)** - Extract middle characters
- **[LEN](./LEN)** - Get text length
- **[SUBSTITUTE](./SUBSTITUTE)** - Replace text
