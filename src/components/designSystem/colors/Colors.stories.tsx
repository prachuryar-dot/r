import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './Colors';

const meta: Meta<typeof Colors> = {
  title: 'Design System/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Color System

A comprehensive, interactive color palette for the Pattem Estates design system featuring:

## Features
- **Interactive Utility Preview** - See how colors look with different Tailwind utilities (bg-, text-, border-, ring-, shadow-, etc.)
- **Copy-to-Clipboard** - One-click copying of hex values and Tailwind class names
- **Search & Filter** - Find colors quickly by name, shade, or hex value
- **Design Tokens** - CSS custom properties for dynamic theming
- **Gradient Showcase** - Brand gradients with copy functionality
- **Overlay Colors** - Semi-transparent overlays for layering effects

## Color Palette
- **Primary**: Warm browns and golds (#A4824B family) - conveys warmth, reliability, and premium quality
- **Accent**: Cool greys and blues (#2A2D37 family) - provides contrast and balance
- **Grey**: Neutral tones for text, borders, and backgrounds
- **Success**: Pastel greens (#15803D family) - positive actions and states
- **Danger**: Pastel reds (#B91C1C family) - errors and destructive actions

## Utility Types
- **Background** (\`bg-*\`) - Background colors
- **Text** (\`text-*\`) - Text colors  
- **Border** (\`border-*\`) - Border colors
- **Ring** (\`ring-*\`) - Focus ring colors
- **Shadow** (\`shadow-*\`) - Drop shadow colors

## Gradients
### Linear Gradients
- **Primary**: \`bg-primary-gradient\`, \`bg-primary-gradient-reverse\`
- **Accent**: \`bg-accent-gradient\`, \`bg-accent-gradient-reverse\`
- **Grey**: \`bg-grey-gradient\`, \`bg-grey-gradient-reverse\`
- **Mixed**: \`bg-primary-accent-gradient\`, \`bg-accent-primary-gradient\`, \`bg-primary-grey-gradient\`, \`bg-accent-grey-gradient\`
- **Success**: \`bg-success-gradient\`
- **Danger**: \`bg-danger-gradient\`

### Radial Gradients
- **Primary**: \`bg-primary-radial\`
- **Accent**: \`bg-accent-radial\`
- **Grey**: \`bg-grey-radial\`
- **Success**: \`bg-success-radial\`
- **Danger**: \`bg-danger-radial\`

## Overlays
### Color-Specific Overlays
- **Primary**: \`bg-overlay-primary-light\`, \`bg-overlay-primary-medium\`, \`bg-overlay-primary-strong\`
- **Accent**: \`bg-overlay-accent-light\`, \`bg-overlay-accent-medium\`, \`bg-overlay-accent-strong\`
- **Grey**: \`bg-overlay-grey-light\`, \`bg-overlay-grey-medium\`, \`bg-overlay-grey-strong\`
- **Success**: \`bg-overlay-success-light\`, \`bg-overlay-success-medium\`, \`bg-overlay-success-strong\`
- **Danger**: \`bg-overlay-danger-light\`, \`bg-overlay-danger-medium\`, \`bg-overlay-danger-strong\`

## Usage
\`\`\`tsx
// Use with any Tailwind utility
<div className="text-white bg-primary-500 border-primary-600">
  Primary styled content
</div>

// With gradients
<div className="bg-primary-gradient">
  Gradient background
</div>

// With overlays
<div className="bg-overlay-primary-medium">
  Overlay background
</div>

// With CSS custom properties
<div style={{ backgroundColor: 'var(--color-primary-500)' }}>
  Dynamic primary background
</div>
\`\`\`
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['all', 'palettes', 'tokens', 'gradients', 'overlays', 'utilities'],
      description: 'Select which section to display',
      table: {
        type: {
          summary: 'all | palettes | tokens | gradients | overlays | utilities',
        },
        defaultValue: { summary: 'all' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSections: Story = {
  args: {
    variant: 'all',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Complete Color System Overview

Displays all sections of the color system:
- Interactive color palettes with utility previews (Primary, Accent, Grey, Success, Danger)
- Design tokens (CSS custom properties)
- Brand gradients (linear and radial)
- Overlay colors for layering effects

**Features:**
- Search functionality across all colors
- Utility type selector (background, text, border, etc.)
- Copy-to-clipboard for hex values and Tailwind classes
- Responsive grid layouts
- Comprehensive gradient showcase
- Color-specific overlay system
        `,
      },
    },
  },
};

export const InteractivePalettes: Story = {
  args: {
    variant: 'palettes',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Color Palettes

Main color palette display with interactive features:

**Available Palettes:**
- **Primary**: Warm browns and golds for premium elements
- **Accent**: Cool greys and blues for contrast and balance
- **Grey**: Neutral tones for text, borders, and backgrounds
- **Success**: Pastel greens for positive actions and states
- **Danger**: Pastel reds for errors and destructive actions

**Key Features:**
- **Utility Selector**: Switch between background, text, border, ring, and shadow utilities
- **Live Preview**: See exactly how each color looks with the selected utility
- **Search**: Find colors by name, shade number, or hex value
- **Copy Functionality**: Click to copy hex values or Tailwind class names
- **Responsive Design**: Adapts to different screen sizes

**How to Use:**
1. Select a utility type from the dropdown (e.g., "Background", "Text", "Border")
2. Browse colors to see live previews with that utility
3. Click copy buttons to get hex values or Tailwind classes
4. Use the search box to filter colors quickly
        `,
      },
    },
  },
};

export const DesignTokens: Story = {
  args: {
    variant: 'tokens',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Design Tokens

CSS custom properties for dynamic theming and framework integration.

**CSS Variables Available:**
- \`--color-primary-*\` - Primary color scales
- \`--color-accent-*\` - Accent color scales  
- \`--color-grey-*\` - Grey scale colors
- \`--color-success-*\` - Success color scales
- \`--color-danger-*\` - Danger color scales

**Usage Examples:**
\`\`\`css
/* In CSS */
.custom-component {
  background-color: var(--color-primary-500);
  border: 1px solid var(--color-primary-600);
}

/* Dynamic theming */
.dark-theme {
  --color-primary-500: #6B5530;
}
\`\`\`

\`\`\`tsx
// In React with inline styles
<div style={{ 
  backgroundColor: 'var(--color-primary-500)',
  color: 'var(--color-accent-100)' 
}}>
  Dynamic themed content
</div>
\`\`\`
        `,
      },
    },
  },
};

export const BrandGradients: Story = {
  args: {
    variant: 'gradients',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Brand Gradients

Comprehensive gradient system using your color palette.

**Linear Gradients:**
- **Primary**: \`bg-primary-gradient\` (267.3° direction), \`bg-primary-gradient-reverse\` (87.3° direction)
- **Accent**: \`bg-accent-gradient\` (135° direction), \`bg-accent-gradient-reverse\` (315° direction)
- **Grey**: \`bg-grey-gradient\` (180° direction), \`bg-grey-gradient-reverse\` (0° direction)
- **Mixed**: \`bg-primary-accent-gradient\`, \`bg-accent-primary-gradient\`, \`bg-primary-grey-gradient\`, \`bg-accent-grey-gradient\`
- **Success**: \`bg-success-gradient\` (135° direction)
- **Danger**: \`bg-danger-gradient\` (135° direction)

**Radial Gradients:**
- **Primary**: \`bg-primary-radial\` (circle at center)
- **Accent**: \`bg-accent-radial\` (circle at center)
- **Grey**: \`bg-grey-radial\` (circle at center)
- **Success**: \`bg-success-radial\` (circle at center)
- **Danger**: \`bg-danger-radial\` (circle at center)

**Best Use Cases:**
- **Primary gradients**: Hero sections, premium CTAs, brand elements
- **Accent gradients**: Secondary content, navigation, professional sections
- **Grey gradients**: Subtle backgrounds, cards, neutral elements
- **Mixed gradients**: Transitions between sections, creative layouts
- **Success/Danger gradients**: Status indicators, alerts, confirmations

**Implementation:**
\`\`\`tsx
// Linear gradient
<div className="bg-primary-gradient">
  Gradient background
</div>

// Radial gradient
<div className="bg-primary-radial">
  Radial background
</div>

// Mixed gradient
<div className="bg-primary-accent-gradient">
  Mixed color gradient
</div>
\`\`\`
        `,
      },
    },
  },
};

export const OverlayColors: Story = {
  args: {
    variant: 'overlays',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Overlay Colors

Comprehensive overlay system for creating depth and layering effects.

**Available Overlays:**
- **Primary**: \`bg-overlay-primary-light\` (5%), \`bg-overlay-primary-medium\` (10%), \`bg-overlay-primary-strong\` (20%)
- **Accent**: \`bg-overlay-accent-light\` (5%), \`bg-overlay-accent-medium\` (10%), \`bg-overlay-accent-strong\` (20%)
- **Grey**: \`bg-overlay-grey-light\` (5%), \`bg-overlay-grey-medium\` (10%), \`bg-overlay-grey-strong\` (20%)
- **Success**: \`bg-overlay-success-light\` (5%), \`bg-overlay-success-medium\` (10%), \`bg-overlay-success-strong\` (20%)
- **Danger**: \`bg-overlay-danger-light\` (5%), \`bg-overlay-danger-medium\` (10%), \`bg-overlay-danger-strong\` (20%)

**Usage Examples:**
\`\`\`tsx
// Over hero images
<div className="relative">
  <img src="hero.jpg" alt="Hero" />
  <div className="absolute inset-0 bg-overlay-primary-medium">
    <h1 className="text-white">Readable text over image</h1>
  </div>
</div>

// For modal backgrounds
<div className="fixed inset-0 bg-overlay-accent-strong">
  <div className="p-6 bg-white rounded-lg">
    Modal content
  </div>
</div>

// For status overlays
<div className="relative">
  <div className="bg-success-50 p-4">
    <div className="absolute inset-0 bg-overlay-success-light"></div>
    Success message
  </div>
</div>
\`\`\`

**Opacity Levels:**
- **Light (5%)**: Subtle overlay for light effects
- **Medium (10%)**: Moderate overlay for better contrast
- **Strong (20%)**: Strong overlay for high contrast text
        `,
      },
    },
  },
};

// Additional utility-focused story
export const UtilityShowcase: Story = {
  args: {
    variant: 'utilities',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Tailwind Utility Showcase

Interactive demonstration of how colors work with different Tailwind utilities.

**Supported Utilities:**
- **\`bg-*\`** - Background colors
- **\`text-*\`** - Text colors
- **\`border-*\`** - Border colors  
- **\`ring-*\`** - Focus ring colors
- **\`shadow-*\`** - Drop shadow colors

**Interactive Features:**
- Switch between utility types to see live previews
- Copy Tailwind class names with one click
- Search across all colors and shades
- Visual representation of each utility type

**Color Naming Convention:**
- **Primary colors**: \`primary-50\` through \`primary-600\`
- **Accent colors**: \`accent-50\` through \`accent-1000\`
- **Grey colors**: \`grey-50\` through \`grey-600\`
- **Success colors**: \`success-50\`, \`success-100\`, \`success-500\`, \`success-600\`
- **Danger colors**: \`danger-50\`, \`danger-100\`, \`danger-500\`, \`danger-600\`

**Example Usage:**
\`\`\`tsx
<button className="text-white bg-primary-500 border-primary-600 ring-primary-300 shadow-primary">
  Primary button with focus ring
</button>

<input className="border-grey-300 placeholder-grey-500 focus:ring-accent-500" 
       placeholder="Search..." />

<div className="bg-success-50 text-success-500 border-success-600">
  Success styled content
</div>
\`\`\`
        `,
      },
    },
  },
};
