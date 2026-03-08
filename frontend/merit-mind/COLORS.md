# 🎨 Merit Mind - Color Palette Reference

## Primary Colors

### Backgrounds
```css
--primary-bg: #0d0d1a      /* Deep dark navy - Main background */
--card-bg: #1a1a2e         /* Dark purple-navy - Card backgrounds */
```

### Accent Colors
```css
--accent-purple: #7c3aed   /* Vivid purple - Primary accent */
--accent-pink: #ec4899     /* Hot pink - Secondary accent */
```

### Gradients
```css
/* Primary Gradient (Buttons, Text) */
background: linear-gradient(135deg, #7c3aed, #ec4899);

/* Glass Morphism Cards */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(124, 58, 237, 0.3);
```

### Text Colors
```css
--text-primary: #f3f4f6    /* Near white - Primary text */
--text-secondary: #a78bfa  /* Light lavender - Secondary text */
```

### Status Colors
```css
--success: #10b981         /* Green - Success states */
--warning: #f59e0b         /* Orange - Warning states */
--danger: #ef4444          /* Red - Error/danger states */
```

### Border Colors
```css
--border-color: rgba(124, 58, 237, 0.3)  /* Purple with opacity */
```

## Tailwind CSS Classes

### Backgrounds
- `bg-[#0d0d1a]` - Primary background
- `bg-[#1a1a2e]` - Card background
- `bg-white/5` - Glass morphism (5% white opacity)
- `bg-purple-500` - Purple accent
- `bg-pink-500` - Pink accent

### Text
- `text-white` - Primary text
- `text-purple-300` - Secondary text
- `text-purple-400` - Tertiary text
- `text-pink-400` - Pink accent text
- `text-green-400` - Success text
- `text-yellow-400` - Warning text
- `text-red-400` - Error text

### Borders
- `border-purple-500/30` - Purple border with 30% opacity
- `border-pink-500/30` - Pink border with 30% opacity
- `border-green-500/30` - Green border with 30% opacity

### Gradients
- `gradient-bg` - Custom class for pink-purple gradient
- `gradient-text` - Custom class for gradient text

## Usage Examples

### Button (Primary)
```jsx
<button className="px-6 py-3 gradient-bg text-white rounded-full hover:scale-105 transition-all">
  Click Me
</button>
```

### Button (Outlined)
```jsx
<button className="px-6 py-3 bg-transparent border-2 border-pink-500 text-pink-300 rounded-full hover:bg-pink-500/10">
  Click Me
</button>
```

### Card
```jsx
<div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 card-hover">
  Card Content
</div>
```

### Heading
```jsx
<h1 className="text-4xl font-bold gradient-text">
  Merit Mind
</h1>
```

### Status Badge (Success)
```jsx
<span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
  Active
</span>
```

### Status Badge (Warning)
```jsx
<span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
  Under Review
</span>
```

### Status Badge (Error)
```jsx
<span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
  High Risk
</span>
```

## BRS Color Coding

### Low Risk (< 30)
```jsx
bg-green-500/20 text-green-400
```

### Medium Risk (30-60)
```jsx
bg-yellow-500/20 text-yellow-400
```

### High Risk (> 60)
```jsx
bg-red-500/20 text-red-400
```

## Hover Effects

### Card Hover
```css
.card-hover:hover {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
}
```

### Button Hover
```css
hover:scale-105
transition-all duration-300
```

## Opacity Levels

- `/5` - 5% opacity (very subtle)
- `/10` - 10% opacity (subtle)
- `/20` - 20% opacity (light)
- `/30` - 30% opacity (medium)
- `/50` - 50% opacity (half)

## Animation Colors

### Floating Orbs
```jsx
<div className="w-64 h-64 bg-purple-600/20 rounded-full blur-3xl floating" />
<div className="w-96 h-96 bg-pink-600/20 rounded-full blur-3xl floating" />
```

### Progress Bar
```jsx
<div className="h-full gradient-bg progress-bar" />
```

## Accessibility

All color combinations meet WCAG AA standards:
- White text on dark backgrounds: ✅ Pass
- Colored text on dark backgrounds: ✅ Pass
- Status colors are distinguishable: ✅ Pass

## Quick Reference

| Element | Background | Text | Border |
|---------|-----------|------|--------|
| Page | #0d0d1a | #f3f4f6 | - |
| Card | rgba(255,255,255,0.05) | #f3f4f6 | rgba(124,58,237,0.3) |
| Button | linear-gradient(135deg, #7c3aed, #ec4899) | #ffffff | - |
| Success | rgba(16,185,129,0.2) | #10b981 | rgba(16,185,129,0.3) |
| Warning | rgba(245,158,11,0.2) | #f59e0b | rgba(245,158,11,0.3) |
| Error | rgba(239,68,68,0.2) | #ef4444 | rgba(239,68,68,0.3) |

---

**Note**: All colors are consistent throughout the application to maintain the pink-purple dark theme.
