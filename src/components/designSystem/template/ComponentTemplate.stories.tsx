import type { Meta, StoryObj } from '@storybook/react';
import { ComponentTemplate } from './ComponentTemplate';

/**
 * COMPONENT TEMPLATE STORY
 *
 * This is a template for creating new Storybook stories.
 * Copy this file and modify it for your new component.
 *
 * GUIDELINES TO FOLLOW:
 *
 * 1. FILE STRUCTURE:
 *    - Place stories in the same directory as the component
 *    - Name: ComponentName.stories.tsx
 *    - Export: ComponentName component
 *
 * 2. META CONFIGURATION:
 *    - title: Use 'Design System/ComponentName' for design system components
 *    - title: Use 'Atoms/ComponentName' for atomic components
 *    - title: Use 'Molecules/ComponentName' for molecular components
 *    - title: Use 'Organisms/ComponentName' for organism components
 *    - component: Import and reference the actual component
 *    - tags: Always include ['autodocs'] for automatic documentation
 *
 * 3. DOCUMENTATION STRUCTURE:
 *    - Use comprehensive component description in docs.description.component
 *    - Include Features, Usage, Examples, and Design Specifications
 *    - Use markdown formatting for better readability
 *    - Include code examples with proper syntax highlighting
 *
 * 4. ARGTYPES CONFIGURATION:
 *    - Define all component props with proper types
 *    - Use descriptive options for select controls
 *    - Include table information for better documentation
 *    - Set proper default values
 *
 * 5. STORY STRUCTURE:
 *    - AllSections: Main overview story
 *    - Specific stories for each variant/feature
 *    - Use render functions for complex examples
 *    - Include comprehensive descriptions for each story
 *
 * 6. NAMING CONVENTIONS:
 *    - Use PascalCase for component names
 *    - Use camelCase for story names
 *    - Use descriptive names that explain the purpose
 *
 * 7. ACCESSIBILITY:
 *    - Include ARIA labels where appropriate
 *    - Test with a11y addon
 *    - Document accessibility features
 *
 * 8. RESPONSIVE DESIGN:
 *    - Test with different viewports
 *    - Include mobile, tablet, and desktop examples
 *    - Use responsive classes in examples
 *
 * 9. INTERACTIVE FEATURES:
 *    - Include controls for all props
 *    - Add actions for event handlers
 *    - Use argTypes for proper control types
 *
 * 10. CODE EXAMPLES:
 *     - Include TypeScript interfaces
 *     - Show usage examples
 *     - Document prop types and defaults
 */

const meta: Meta<typeof ComponentTemplate> = {
  title: 'Design System/ComponentTemplate',
  component: ComponentTemplate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Component Template

A comprehensive, interactive component template for the Pattem Estates design system featuring:

## Features
- **Interactive Examples** - See how the component looks with different props and states
- **Copy-to-Clipboard** - One-click copying of component code
- **Search & Filter** - Find component variations quickly
- **Accessibility** - Proper ARIA labels and keyboard navigation
- **Responsive Design** - Works across all device sizes

## Component Variants
- **Primary**: Main variant for primary actions
- **Secondary**: Secondary variant for less prominent actions
- **Outline**: Bordered variant for subtle interactions
- **Ghost**: Minimal variant for background interactions

## Component Sizes
- **XS**: 24px height - For compact spaces
- **SM**: 32px height - For small components
- **MD**: 40px height - Default size for most use cases
- **LG**: 48px height - For prominent actions
- **XL**: 56px height - For hero sections and CTAs

## Usage
\`\`\`tsx
// Basic usage
<ComponentTemplate variant="primary" size="md">
  Click me
</ComponentTemplate>

// With props
<ComponentTemplate 
  variant="primary" 
  size="md"
  disabled={false}
  loading={false}
>
  Interactive Component
</ComponentTemplate>

// With event handlers
<ComponentTemplate 
  variant="primary"
  onClick={() => console.log('clicked')}
  onMouseEnter={() => console.log('hovered')}
>
  Event Handler Example
</ComponentTemplate>
\`\`\`

## Design Specifications
- **Typography**: Uses design system typography classes
- **Colors**: Follows design system color palette
- **Spacing**: Uses consistent spacing scale
- **Border Radius**: 4px for consistency
- **Shadows**: Design system shadow scale
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Component variant style',
      table: {
        type: {
          summary: 'primary | secondary | outline | ghost',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Component size',
      table: {
        type: {
          summary: 'xs | sm | md | lg | xl',
        },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Component content',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Component' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: {
        type: { summary: '() => void' },
      },
    },
    onMouseEnter: {
      action: 'mouseEntered',
      description: 'Mouse enter event handler',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSections: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Component',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Complete Component Overview

Displays all component variants, sizes, and states:
- Interactive component examples with all variants
- Size demonstrations from XS to XL
- State variations including disabled and loading
- Accessibility features and best practices

**Features:**
- Interactive controls for variant, size, and state
- Copy-to-clipboard for component code
- Responsive design examples
- Comprehensive documentation for each component type
        `,
      },
    },
  },
};

export const ComponentVariants: Story = {
  args: {
    size: 'md',
    children: 'Component',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Primary</h3>
          <ComponentTemplate {...args} variant="primary">
            Primary Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Secondary</h3>
          <ComponentTemplate {...args} variant="secondary">
            Secondary Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Outline</h3>
          <ComponentTemplate {...args} variant="outline">
            Outline Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Ghost</h3>
          <ComponentTemplate {...args} variant="ghost">
            Ghost Component
          </ComponentTemplate>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Component Variants

All available component variants with their specific use cases:

**Primary**: Main component variant for primary actions
**Secondary**: Secondary variant for less prominent actions
**Outline**: Bordered variant for subtle interactions
**Ghost**: Minimal variant for background interactions

**Design Specifications:**
- **Primary**: Uses primary brand colors
- **Secondary**: Uses secondary accent colors
- **Outline**: Transparent background with borders
- **Ghost**: Minimal styling with hover effects

**Usage Guidelines:**
- Use Primary for main call-to-actions
- Use Secondary for alternative actions
- Use Outline for less prominent interactions
- Use Ghost for subtle background interactions
        `,
      },
    },
  },
};

export const ComponentSizes: Story = {
  args: {
    variant: 'primary',
    children: 'Component',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-5">
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Extra Small</h3>
          <ComponentTemplate {...args} size="xs">
            XS Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Small</h3>
          <ComponentTemplate {...args} size="sm">
            SM Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Medium</h3>
          <ComponentTemplate {...args} size="md">
            MD Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Large</h3>
          <ComponentTemplate {...args} size="lg">
            LG Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Extra Large</h3>
          <ComponentTemplate {...args} size="xl">
            XL Component
          </ComponentTemplate>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Component Sizes

All available component sizes with their specific use cases:

**XS (24px height)**: Compact spaces, inline elements
**SM (32px height)**: Small components, secondary actions
**MD (40px height)**: Default size, most common use cases
**LG (48px height)**: Prominent actions, primary CTAs
**XL (56px height)**: Hero sections, main call-to-actions

**Size Specifications:**
- **XS**: \`px-2 py-1 text-xs\`
- **SM**: \`px-3 py-2 text-sm\`
- **MD**: \`px-4 py-2 text-sm\`
- **LG**: \`px-6 py-3 text-base\`
- **XL**: \`px-8 py-4 text-lg\`

**Typography Scale:**
- **XS**: 12px font size
- **SM**: 14px font size
- **MD**: 14px font size
- **LG**: 16px font size
- **XL**: 18px font size
        `,
      },
    },
  },
};

export const ComponentStates: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Component',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Default</h3>
          <ComponentTemplate {...args}>Default Component</ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Disabled</h3>
          <ComponentTemplate {...args} disabled>
            Disabled Component
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Loading</h3>
          <ComponentTemplate {...args} loading>
            Loading Component
          </ComponentTemplate>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Component States

All available component states and their behaviors:

**Default**: Normal component state with hover effects
**Disabled**: Non-interactive state with reduced opacity
**Loading**: Shows loading indicator and prevents interaction

**State Specifications:**
- **Default**: Normal appearance with transition effects
- **Disabled**: \`cursor-not-allowed opacity-60\` for non-interactive
- **Loading**: \`cursor-wait\` with animated loading indicator

**Accessibility Features:**
- Proper focus states with ring indicators
- ARIA labels for screen readers
- Keyboard navigation support
- Loading state announcements
        `,
      },
    },
  },
};

export const InteractiveExamples: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">With Click Handler</h3>
          <ComponentTemplate {...args} onClick={() => alert('Clicked!')}>
            Click Me
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">With Hover Handler</h3>
          <ComponentTemplate {...args} onMouseEnter={() => console.log('Hovered')}>
            Hover Me
          </ComponentTemplate>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-accent-800">Complex Example</h3>
          <ComponentTemplate
            {...args}
            variant="outline"
            onClick={() => alert('Complex interaction!')}
            onMouseEnter={() => console.log('Complex hover')}
          >
            Complex Component
          </ComponentTemplate>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Examples

Examples showing component interactions and event handling:

**Event Handlers:**
- **onClick**: Primary click interaction
- **onMouseEnter**: Hover state handling
- **onMouseLeave**: Mouse leave handling
- **onFocus**: Focus state management
- **onBlur**: Blur state management

**Implementation Examples:**
\`\`\`tsx
// Basic click handler
<ComponentTemplate onClick={() => console.log('clicked')}>
  Click Me
</ComponentTemplate>

// Multiple event handlers
<ComponentTemplate 
  onClick={() => handleClick()}
  onMouseEnter={() => handleHover()}
  onFocus={() => handleFocus()}
>
  Interactive Component
</ComponentTemplate>

// With state management
const [isActive, setIsActive] = useState(false);

<ComponentTemplate 
  onClick={() => setIsActive(!isActive)}
  className={isActive ? 'active' : ''}
>
  Stateful Component
</ComponentTemplate>
\`\`\`

**Best Practices:**
- Always provide meaningful event handlers
- Use descriptive function names
- Handle loading and disabled states properly
- Provide proper ARIA labels for accessibility
        `,
      },
    },
  },
};
