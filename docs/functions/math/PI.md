---
sidebar_position: 14
---

# PI

Returns the mathematical constant π (pi) with 15 decimal places of precision.

## Quick Example

```
=PI()
```

Returns `3.141592653589793`.

## Syntax

```
=PI()
```

### Arguments

PI takes no arguments.

## Examples

### Get Pi Value

```
=PI()
```
Returns `3.141592653589793`

### Calculate Circle Area

```
=PI() * Radius^2
```
Area of circle with given radius

### Calculate Circle Circumference

```
=2 * PI() * Radius
```
Circumference of circle

### Sphere Volume

```
=4/3 * PI() * Radius^3
```
Volume of a sphere

### Radians to Degrees

```
=Angle_in_Radians * 180 / PI()
```
Convert radians to degrees

### Degrees to Radians

```
=Angle_in_Degrees * PI() / 180
```
Convert degrees to radians

## How It Works

### Mathematical Constant

PI returns the value of π (pi):
- Ratio of circle's circumference to its diameter
- Approximately 3.14159...
- Irrational number (infinite non-repeating decimals)

### Precision

Sum Buddy returns PI with full double-precision:
- Value: `3.141592653589793`
- Precision: 15-16 significant digits
- Uses C++ `M_PI` constant

### No Arguments Required

PI is a constant, so it needs no inputs:
```
=PI()  // Correct
=PI(2)  // Error - takes no arguments
```

## Common Use Cases

### Circle Area

```
=PI() * A1^2
```
Where A1 is the radius

### Circle Circumference

```
=2 * PI() * A1
```
Where A1 is the radius

### Cylinder Volume

```
=PI() * Radius^2 * Height
```
Volume of a cylinder

### Sphere Surface Area

```
=4 * PI() * Radius^2
```
Surface area of a sphere

### Angular Calculations

```
=SIN(Angle * PI() / 180)
```
Calculate sine of angle in degrees

### Wave Calculations

```
=SIN(2 * PI() * Frequency * Time)
```
Sinusoidal wave function

## Error Handling

### Argument Error

If you provide any arguments, PI returns an error:

```
=PI(5)
```
Returns `#VALUE!` (PI takes no arguments)

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| #VALUE! | Arguments provided | Use =PI() with no arguments |
| #NAME? | Function name misspelled | Check spelling: =PI not =PIE |

## Technical Details

### Implementation Notes

- Takes exactly 0 arguments
- Returns the constant `M_PI` from C++ math library
- Value: 3.141592653589793
- Does not recalculate (constant value)
- Not a volatile function

### Precision Details

PI in Sum Buddy:
```
3.141592653589793
```

Actual π (first 50 digits):
```
3.14159265358979323846264338327950288419716939937510...
```

The function provides sufficient precision for virtually all practical calculations.

## Mathematical Applications

### Trigonometry

```
=SIN(30 * PI() / 180)
```
Sine of 30 degrees (convert to radians first)

### Geometry

```
=PI() * Diameter / 2
```
Calculate radius from diameter, then use in formulas

### Physics

```
=2 * PI() * SQRT(Length / Gravity)
```
Period of a pendulum

### Engineering

```
=PI() * (Outer_Diameter^2 - Inner_Diameter^2) / 4
```
Cross-sectional area of a pipe

## Advanced Examples

### Circle Sector Area

```
=PI() * Radius^2 * (Angle / 360)
```
Area of circle sector with given angle in degrees

### Ellipse Area

```
=PI() * Semi_Major_Axis * Semi_Minor_Axis
```
Area of an ellipse

### Arc Length

```
=2 * PI() * Radius * (Angle / 360)
```
Length of circular arc

### Torus Volume

```
=2 * PI()^2 * Major_Radius * Minor_Radius^2
```
Volume of a torus (donut shape)

## Comparison: PI vs Manual Entry

### Using PI Function

```
=PI() * 5^2
```
Returns `78.53981633974483` (accurate)

### Manual Entry

```
=3.14 * 5^2
```
Returns `78.5` (less accurate)

### Why Use PI()

- More accurate (15 digits vs 2-3 digits)
- Self-documenting code
- No risk of typos
- Consistent across all formulas

## Common Formulas with PI

### Circle Measurements

| Measurement | Formula |
|------------|---------|
| Area | `=PI() * Radius^2` |
| Circumference | `=2 * PI() * Radius` |
| Diameter | `=Circumference / PI()` |

### Sphere Measurements

| Measurement | Formula |
|------------|---------|
| Volume | `=(4/3) * PI() * Radius^3` |
| Surface Area | `=4 * PI() * Radius^2` |

### Angular Conversions

| Conversion | Formula |
|-----------|---------|
| Degrees to Radians | `=Degrees * PI() / 180` |
| Radians to Degrees | `=Radians * 180 / PI()` |

## Related Functions

- **[SQRT](./SQRT)** - Square root
- **[PRODUCT](./PRODUCT)** - Multiply numbers
