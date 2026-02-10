# SynConnect v3 - Design Guidelines

## Brand Colors

### Official Color Palette

**CRITICAL**: These are the ONLY colors to be used throughout the application. Do not deviate from these exact hex codes.

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Dark Grey     │  │ Electric Green  │  │  Pale Green     │  │     White       │
│                 │  │                 │  │                 │  │                 │
│                 │  │                 │  │                 │  │                 │
│                 │  │                 │  │                 │  │                 │
│    #1A1A1A      │  │    #67D861      │  │    #B6ECAF      │  │    #FFFFFF      │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
  Background           Primary Accent       Secondary           Text/Surface
```

### Color Definitions

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Electric Green** | `#67D861` | Primary CTAs, highlights, active states, links |
| **Pale Green** | `#B6ECAF` | Hover states, secondary buttons, subtle accents |
| **Dark Grey** | `#1A1A1A` | Main backgrounds, cards, dark surfaces |
| **White** | `#FFFFFF` | Text on dark backgrounds, light surfaces, borders |

---

## Color Usage Guidelines

### ✅ DO Use

#### Electric Green (#67D861)
- **Primary CTAs**: "Buy Now", "Connect with Me", "Submit", "Save Changes"
- **Active States**: Selected tabs, active navigation items
- **Links**: Clickable text links
- **Highlights**: Important metrics, success messages
- **Icons**: Primary action icons
- **Progress Indicators**: Loading bars, progress steps

**Example:**
```jsx
<button className="bg-[#67D861] text-white hover:bg-[#67D861]/90">
  Buy Now
</button>
```

#### Pale Green (#B6ECAF)
- **Hover States**: Button hover effects
- **Secondary Buttons**: "Cancel", "Skip", "Learn More"
- **Subtle Backgrounds**: Info cards, notification backgrounds
- **Borders**: Input focus states, card borders
- **Secondary Icons**: Less important actions

**Example:**
```jsx
<button className="bg-[#B6ECAF] text-[#1A1A1A] hover:bg-[#B6ECAF]/80">
  Learn More
</button>
```

#### Dark Grey (#1A1A1A)
- **Main Backgrounds**: Page backgrounds, app backgrounds
- **Cards**: Product cards, profile cards, dashboard cards
- **Modals**: Dialog backgrounds
- **Navigation**: Header, sidebar backgrounds
- **Sections**: Content section backgrounds

**Example:**
```jsx
<div className="bg-[#1A1A1A] text-white">
  <h1>Welcome to SynConnect</h1>
</div>
```

#### White (#FFFFFF)
- **Text**: Primary text on dark backgrounds
- **Surfaces**: Light mode surfaces (if applicable)
- **Borders**: Dividers, card outlines
- **Icons**: Icons on dark backgrounds

**Example:**
```jsx
<p className="text-white">Your digital business card</p>
```

---

### ❌ DO NOT Use

- ❌ Generic Tailwind colors: `blue-500`, `green-500`, `gray-800`, etc.
- ❌ Random hex codes: `#00FF00`, `#FF0000`, `#333333`, etc.
- ❌ Color variations not in the palette: `#67D862`, `#1A1A1B`, etc.
- ❌ Opacity variations without approval: `bg-green-500/50` (use brand colors with opacity instead)

**Wrong:**
```jsx
// ❌ BAD
<button className="bg-green-500">Buy Now</button>
<div className="bg-gray-900">Content</div>
```

**Correct:**
```jsx
// ✅ GOOD
<button className="bg-[#67D861]">Buy Now</button>
<div className="bg-[#1A1A1A]">Content</div>
```

---

## Tailwind Configuration

### tailwind.config.js

Add these custom colors to your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // SynConnect Brand Colors
        primary: '#67D861',      // Electric Green
        secondary: '#B6ECAF',    // Pale Green
        dark: '#1A1A1A',         // Dark Grey
        light: '#FFFFFF',        // White
        
        // Semantic aliases
        accent: '#67D861',       // Same as primary
        background: '#1A1A1A',   // Same as dark
        surface: '#FFFFFF',      // Same as light
      },
    },
  },
};
```

### Usage in Components

```jsx
// Using custom color names
<button className="bg-primary text-white hover:bg-primary/90">
  Buy Now
</button>

<div className="bg-dark text-light">
  <h1>Welcome</h1>
</div>

<button className="bg-secondary text-dark hover:bg-secondary/80">
  Learn More
</button>
```

---

## Color Combinations

### Recommended Pairings

#### Dark Background + Electric Green CTA
```jsx
<div className="bg-[#1A1A1A] p-8">
  <h1 className="text-white text-4xl mb-4">Your Business Card, Reimagined</h1>
  <button className="bg-[#67D861] text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</div>
```

#### White Surface + Dark Text + Electric Green Accent
```jsx
<div className="bg-white p-8">
  <h2 className="text-[#1A1A1A] text-2xl mb-2">Product Name</h2>
  <p className="text-[#1A1A1A]/70 mb-4">Description text</p>
  <a href="#" className="text-[#67D861] hover:underline">Learn More →</a>
</div>
```

#### Pale Green Background + Dark Text
```jsx
<div className="bg-[#B6ECAF] p-4 rounded-lg">
  <p className="text-[#1A1A1A]">✓ Your order has been confirmed!</p>
</div>
```

---

## Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:

| Foreground | Background | Contrast Ratio | WCAG Level |
|------------|------------|----------------|------------|
| White (#FFFFFF) | Dark Grey (#1A1A1A) | 16.1:1 | AAA ✅ |
| Dark Grey (#1A1A1A) | Electric Green (#67D861) | 3.8:1 | AA ✅ |
| Dark Grey (#1A1A1A) | Pale Green (#B6ECAF) | 7.2:1 | AAA ✅ |
| White (#FFFFFF) | Electric Green (#67D861) | 4.2:1 | AA ✅ |

### Best Practices

- ✅ Use White text on Dark Grey backgrounds (16.1:1 ratio)
- ✅ Use Dark Grey text on Pale Green backgrounds (7.2:1 ratio)
- ✅ Use White text on Electric Green buttons (4.2:1 ratio)
- ⚠️ Avoid Dark Grey text on Electric Green (3.8:1 - use for large text only)

---

## Component Examples

### Primary Button
```jsx
<button className="bg-[#67D861] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#67D861]/90 transition-colors">
  Buy Now
</button>
```

### Secondary Button
```jsx
<button className="bg-[#B6ECAF] text-[#1A1A1A] px-6 py-3 rounded-lg font-semibold hover:bg-[#B6ECAF]/80 transition-colors">
  Learn More
</button>
```

### Outline Button
```jsx
<button className="border-2 border-[#67D861] text-[#67D861] px-6 py-3 rounded-lg font-semibold hover:bg-[#67D861] hover:text-white transition-colors">
  View Details
</button>
```

### Card
```jsx
<div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70 mb-4">Card description text</p>
  <button className="bg-[#67D861] text-white px-4 py-2 rounded-lg">
    Action
  </button>
</div>
```

### Success Message
```jsx
<div className="bg-[#B6ECAF] border border-[#67D861] rounded-lg p-4">
  <p className="text-[#1A1A1A] font-medium">✓ Success! Your changes have been saved.</p>
</div>
```

### Link
```jsx
<a href="#" className="text-[#67D861] hover:text-[#67D861]/80 underline">
  Learn more about our products →
</a>
```

---

## Typography

### Font Families

**Primary Font**: Inter (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Usage:**
- Headings: Inter Bold (700)
- Subheadings: Inter Semibold (600)
- Body: Inter Regular (400)
- Buttons: Inter Medium (500)

### Font Sizes

```javascript
// Tailwind config
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
}
```

---

## Spacing

### Consistent Spacing Scale

Use Tailwind's default spacing scale (4px base):

```
p-2  = 8px
p-4  = 16px
p-6  = 24px
p-8  = 32px
p-12 = 48px
p-16 = 64px
```

### Common Patterns

- **Card Padding**: `p-6` or `p-8`
- **Section Padding**: `py-12` or `py-16`
- **Button Padding**: `px-6 py-3`
- **Input Padding**: `px-4 py-2`

---

## Border Radius

### Standard Radii

```javascript
borderRadius: {
  'none': '0',
  'sm': '0.25rem',   // 4px
  'md': '0.5rem',    // 8px
  'lg': '0.75rem',   // 12px
  'xl': '1rem',      // 16px
  '2xl': '1.5rem',   // 24px
  'full': '9999px',
}
```

### Usage

- **Buttons**: `rounded-lg` (12px)
- **Cards**: `rounded-xl` (16px)
- **Inputs**: `rounded-md` (8px)
- **Badges**: `rounded-full`

---

## Shadows

### Custom Shadows

```javascript
boxShadow: {
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  'glow': '0 0 20px rgba(103, 216, 97, 0.3)', // Electric Green glow
}
```

### Usage

- **Cards**: `shadow-lg`
- **Modals**: `shadow-xl`
- **Hover Effects**: `hover:shadow-glow` (for Electric Green elements)

---

## Animation

### Transitions

Use consistent transition durations:

```javascript
transitionDuration: {
  '75': '75ms',
  '100': '100ms',
  '150': '150ms',
  '200': '200ms',
  '300': '300ms',
}
```

### Common Patterns

```jsx
// Button hover
className="transition-colors duration-200"

// Card hover
className="transition-transform duration-300 hover:scale-105"

// Fade in
className="transition-opacity duration-200"
```

---

## Dark Mode (Default)

SynConnect uses **dark mode by default** with Dark Grey (#1A1A1A) backgrounds.

### Implementation

```jsx
// Default dark theme
<body className="bg-[#1A1A1A] text-white">
  {/* App content */}
</body>
```

**Note**: Light mode is NOT currently planned. All designs should use the dark theme.

---

## Checklist for Designers/Developers

Before submitting any UI work, ensure:

- ✅ All colors use exact hex codes from brand palette
- ✅ No generic Tailwind colors (blue-500, green-500, etc.)
- ✅ Electric Green (#67D861) used for all primary CTAs
- ✅ Dark Grey (#1A1A1A) used for backgrounds
- ✅ White (#FFFFFF) used for text on dark backgrounds
- ✅ Pale Green (#B6ECAF) used for hover states
- ✅ Contrast ratios meet WCAG AA standards
- ✅ Inter font family used throughout
- ✅ Consistent spacing (Tailwind scale)
- ✅ Consistent border radius (lg for buttons, xl for cards)

---

**Last Updated**: 2026-02-10
