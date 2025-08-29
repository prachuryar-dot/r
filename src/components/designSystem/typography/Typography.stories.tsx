import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Typography System

A comprehensive, interactive typography guide for the Pattem Estates design system featuring:

## Features
- **Interactive Examples** - See how typography looks with different font families, sizes, and weights
- **Copy-to-Clipboard** - One-click copying of Tailwind class names
- **Search & Filter** - Find typography styles quickly by name or description
- **Font Weights** - All available font weights for both font families
- **Usage Examples** - Real-world layouts showing typography hierarchy

## Typography Standards
- **Headings**: Raleway font family with 140% line-height and 4% letter-spacing
- **Paragraphs**: Montserrat font family with 170% line-height for optimal readability
- **Sub-headings**: Montserrat font family with 140% line-height for content hierarchy
- **Labels**: Montserrat font family with 120% line-height for compact text

## Font Families
- **Raleway**: Used for all headings (font-heading)
- **Montserrat**: Used for body text, paragraphs, and labels (font-body)

## Font Weights
- **Regular** (400): Default weight for body text
- **Medium** (500): Used for headings and emphasis
- **Semibold** (600): Used for important headings
- **Bold** (700): Used for main titles and hero text

## Usage
\`\`\`tsx
// Headings
<h1 className="font-bold font-heading text-heading-2xl text-accent-800">
  Main Title
</h1>

// Paragraphs
<p className="font-body text-paragraph-md text-accent-600">
  Standard body text with proper line height for readability.
</p>

// Labels
<span className="font-body text-label-sm text-accent-500">
  Form Label
</span>
\`\`\`
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['all', 'examples', 'weights', 'usage'],
      description: 'Select which section to display',
      table: {
        type: {
          summary: 'all | examples | weights | usage',
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
### Complete Typography System Overview

Displays all sections of the typography system:
- Interactive typography examples with search functionality
- Font weights demonstration for both font families
- Real-world usage examples showing typography hierarchy

**Features:**
- Search functionality across all typography styles
- Copy-to-clipboard for Tailwind class names
- Responsive grid layouts
- Comprehensive documentation for each typography style
        `,
      },
    },
  },
};

export const TypographyExamples: Story = {
  args: {
    variant: 'examples',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Typography Examples

Main typography display with interactive features:

**Key Features:**
- **Search**: Find typography styles by name, description, or class name
- **Live Preview**: See exactly how each typography style looks
- **Copy Functionality**: Click to copy Tailwind class names
- **Responsive Design**: Adapts to different screen sizes
- **Comprehensive Coverage**: All heading, paragraph, sub-heading, and label styles

**Typography Categories:**
- **Headings**: 6 sizes (XS to 2XL) with Raleway font, 140% line-height, 4% letter-spacing
- **Paragraphs**: 4 sizes (XS to LG) with Montserrat font, 170% line-height
- **Sub-headings**: 5 sizes (XS to XL) with Montserrat font, 140% line-height
- **Labels**: 5 sizes (XS to XL) with Montserrat font, 120% line-height

**How to Use:**
1. Browse typography styles to see live previews
2. Click copy buttons to get Tailwind class names
3. Use the search box to filter typography styles quickly
4. Read descriptions to understand when to use each style
        `,
      },
    },
  },
};

export const FontWeights: Story = {
  args: {
    variant: 'weights',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Font Weights

Available font weights for both Raleway (headings) and Montserrat (body) fonts.

**Available Weights:**
- **Regular** (400): Default weight for body text and paragraphs
- **Medium** (500): Used for headings and emphasis
- **Semibold** (600): Used for important headings and sub-headings
- **Bold** (700): Used for main titles and hero text

**Usage Examples:**
\`\`\`tsx
// Regular weight for body text
<p className="font-body text-paragraph-md font-regular">
  Standard body text
</p>

// Medium weight for headings
<h2 className="font-medium font-heading text-heading-lg">
  Section Header
</h2>

// Semibold weight for important headings
<h1 className="font-semibold font-heading text-heading-xl">
  Important Title
</h1>

// Bold weight for main titles
<h1 className="font-bold font-heading text-heading-2xl">
  Hero Title
</h1>
\`\`\`

**Font Family Guidelines:**
- **Raleway**: Used for all headings (font-heading class)
- **Montserrat**: Used for body text, paragraphs, and labels (font-body class)
        `,
      },
    },
  },
};
