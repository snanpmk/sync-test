# Brand Colors Quick Reference

## SynConnect v3 Color Palette

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  🎨 SYNCONNECT BRAND COLORS - USE THESE EXACT HEX CODES                │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐       │
│  │   DARK GREY     │  │ ELECTRIC GREEN  │  │  PALE GREEN     │       │
│  │                 │  │                 │  │                 │       │
│  │    #1A1A1A      │  │    #67D861      │  │    #B6ECAF      │       │
│  │                 │  │                 │  │                 │       │
│  │  Backgrounds    │  │  Primary CTA    │  │  Hover States   │       │
│  │  Dark Surfaces  │  │  Active States  │  │  Secondary      │       │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘       │
│                                                                         │
│  ┌─────────────────┐                                                   │
│  │     WHITE       │                                                   │
│  │                 │                                                   │
│  │    #FFFFFF      │                                                   │
│  │                 │                                                   │
│  │  Text on Dark   │                                                   │
│  │  Light Surfaces │                                                   │
│  └─────────────────┘                                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Tailwind Config

```javascript
// tailwind.config.js
colors: {
  primary: '#67D861',      // Electric Green
  secondary: '#B6ECAF',    // Pale Green
  dark: '#1A1A1A',         // Dark Grey
  light: '#FFFFFF',        // White
}
```

## Usage Examples

### Primary Button
```jsx
<button className="bg-[#67D861] text-white hover:bg-[#67D861]/90">
  Buy Now
</button>
```

### Secondary Button
```jsx
<button className="bg-[#B6ECAF] text-[#1A1A1A] hover:bg-[#B6ECAF]/80">
  Learn More
</button>
```

### Dark Background
```jsx
<div className="bg-[#1A1A1A] text-white">
  Content
</div>
```

## ❌ DO NOT USE
- Generic Tailwind colors (blue-500, green-500, gray-800)
- Random hex codes
- Any colors not in this palette

## 📖 Full Documentation
See `DESIGN_GUIDELINES.md` for complete design standards.

---

**Last Updated**: 2026-02-10
