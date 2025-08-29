# Typography Guidelines

## Overview

This document outlines the typography system and rules for maintaining consistency across the Pattem Estates website.

## Typography Components

### Available Components

- `H1` - Main page heading (only one per page)
- `H2` - Section headings
- `H3` - Subsection headings
- `H4` - Card and component headings
- `H5` - Small headings (when needed)
- `Text` - Paragraph and body text

## Core Rules

### 1. H1 Usage Rule

- **Only ONE H1 per page**
- For the main page: Use `<H1>` for the primary page heading
- For sliders and banners: Use `<H2 as="h1">` to get H1 styles while maintaining semantic structure
- This ensures proper SEO and accessibility

### 2. Heading Hierarchy

- Each section should have one `<H2>` as the main section heading
- Subsequent headings within sections should use `<H3>`, `<H4>`, etc.
- Maintain proper heading hierarchy for SEO and accessibility

### 3. Typography Classes at Component Level

- **Font size, line height, and font weight are set at the component level**
- **DO NOT** add text-based classes at usage level:
  - ❌ `font-heading`, `font-body`
  - ❌ `text-heading-*`, `text-paragraph-*`, `text-label-*`
  - ❌ `font-bold`, `font-semibold`, `font-medium`, `font-regular`
  - ❌ `leading-*`

### 4. Usage Level Properties

- **Allowed at usage level:**
  - ✅ `color` classes (e.g., `text-accent-50`, `text-grey-600`)
  - ✅ `margin` and `padding` classes
  - ✅ `text-align` classes
  - ✅ `max-width` and other layout classes
  - ✅ `background` and `gradient` classes

### 5. Enhanced Tag Support

- **All typography components now support all text tags via the `as` prop**
- You can use any component with any text tag: `<H1 as="p">`, `<Text as="h2">`, etc.
- This allows for flexible semantic HTML while maintaining consistent styling

## Component Specifications

### H1 Component

```tsx
<H1 className="text-accent-50">Main Page Heading</H1>
<H1 as="p" className="text-accent-50">Paragraph with H1 styles</H1>
```

- Default: `font-heading font-bold text-heading-3xl lg:text-heading-4xl`
- Usage: Main page heading only
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `label`, `small`

### H2 Component

```tsx
<H2 as="h2" className="text-accent-800">Section Heading</H2>
<H2 as="h1" className="text-accent-50">Banner Heading (H1 styles)</H2>
<H2 as="p" className="text-accent-800">Paragraph with H2 styles</H2>
```

- Default: `font-heading font-bold text-heading-2xl lg:text-heading-3xl`
- Usage: Section headings, or as H1 alternative in banners
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `label`, `small`

### H3 Component

```tsx
<H3 as="h3" className="text-grey-600">
  Subsection Heading
</H3>
<H3 as="p" className="text-grey-600">Paragraph with H3 styles</H3>
```

- Default: `font-heading font-semibold text-heading-xl lg:text-heading-2xl`
- Usage: Subsection headings
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `label`, `small`

### H4 Component

```tsx
<H4 as="h4" className="text-grey-900">
  Card Heading
</H4>
<H4 as="span" className="text-grey-900">Span with H4 styles</H4>
```

- Default: `font-heading font-semibold text-heading-lg lg:text-heading-xl`
- Usage: Card and component headings
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `label`, `small`

### H5 Component

```tsx
<H5 as="h5" className="text-grey-700">
  Small Heading
</H5>
<H5 as="label" className="text-grey-700">Label with H5 styles</H5>
```

- Default: `font-heading font-medium text-heading-md lg:text-heading-lg`
- Usage: Small headings when needed
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `label`, `small`

### Text Component

```tsx
<Text variant="paragraph" size="md" weight="regular" className="text-grey-600">
  Body text content
</Text>
<Text as="h2" variant="paragraph" size="xl" weight="bold" className="text-grey-600">
  Heading with Text styles
</Text>
```

- Variants: `paragraph`, `label`
- Sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- Weights: `regular`, `medium`, `semibold`, `bold`
- Supported tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `div`, `label`, `small`

## Examples

### ✅ Correct Usage

```tsx
// Main page
<H1 className="sr-only">Page Title for SEO</H1>

// Banner with H1 styles
<H2 as="h1" className="text-accent-50">Banner Heading</H2>

// Section heading
<H2 as="h2" className="text-accent-800 mb-6">Section Title</H2>

// Subsection
<H3 as="h3" className="text-grey-600">Subsection</H3>

// Card heading
<H4 as="h4" className="text-grey-900">Card Title</H4>

// Body text
<Text variant="paragraph" size="md" className="text-grey-600">
  Description text
</Text>

// Flexible tag usage
<H1 as="p" className="text-accent-50">Paragraph with H1 styles</H1>
<Text as="h2" variant="paragraph" size="xl" weight="bold" className="text-grey-600">
  Heading with Text component
</Text>
```

### ❌ Incorrect Usage

```tsx
// Multiple H1s on same page
<H1>First Heading</H1>
<H1>Second Heading</H1> // ❌ Violates H1 rule

// Text classes at usage level
<H2 className="font-heading text-heading-2xl font-bold">Heading</H2> // ❌ Font classes at usage

// Direct text classes
<div className="font-body text-paragraph-md font-regular">Text</div> // ❌ Use Text component instead
```

## Migration Guide

### Before (Incorrect)

```tsx
<div className="font-heading text-heading-2xl font-bold text-accent-800">Section Heading</div>
```

### After (Correct)

```tsx
<H2 as="h2" className="text-accent-800">
  Section Heading
</H2>
```

### Before (Incorrect)

```tsx
<h1 className="text-3xl font-bold text-gray-900">Page Title</h1>
```

### After (Correct)

```tsx
<H1 as="h1" className="text-gray-900">
  Page Title
</H1>
```

## Benefits

1. **Consistency**: All typography styles are centralized
2. **Maintainability**: Changes to typography only need to be made in component files
3. **SEO**: Proper heading hierarchy with single H1 per page
4. **Accessibility**: Semantic HTML structure maintained
5. **Performance**: Reduced CSS bundle size by eliminating duplicate classes
6. **Flexibility**: Any component can be used with any text tag for maximum flexibility

## Enforcement

- Use ESLint rules to catch text-based classes at usage level
- Code reviews should check for typography rule compliance
- Automated tests can verify heading hierarchy
