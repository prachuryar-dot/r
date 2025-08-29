import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup, IconButton, LinkButton, IconLinkButton } from './Button';
import {
  Plus,
  Download,
  Trash2,
  Check,
  ChevronRight,
  Edit,
  Save,
  Home,
  Settings,
  Heart,
  Share2,
  Phone,
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
# Button System

A complete, production-ready button library for the Pattem Estates design system featuring:

## ✨ Features
- **Color-Specific Shadows** - Each button variant uses shadows that match its color theme
- **Five Core Variants** - Primary, Secondary, Light, Danger, and Success with outline versions
- **Link Components** - Semantic \`<a>\` tags with button styling
- **Enhanced Button Groups** - Horizontal, vertical, and segmented controls
- **Floating Action Buttons** - FAB variant with positioning
- **Micro-interactions** - Subtle hover animations and scale effects
- **Improved Accessibility** - Better touch targets and ARIA support
- **Performance Optimized** - Using CVA and tailwind-merge

## 🎨 Core Variants Available
### Filled Variants
- \`primary\` - Warm brown/gold with primary shadow
- \`secondary\` - Dark accent with accent shadow  
- \`light\` - Light grey with grey shadow
- \`danger\` - Pastel red with danger shadow
- \`success\` - Pastel green with success shadow

### Outline Variants  
- \`primary-outline\` - Primary border with hover fill
- \`secondary-outline\` - Accent border with hover fill
- \`light-outline\` - Grey border with hover fill
- \`danger-outline\` - Danger border with hover fill
- \`success-outline\` - Success border with hover fill

### Special Variants
- \`ghost\` - Minimal hover effects
- \`link\` - Link styling with underlines
- \`fab\` - Floating action button

## 🎨 Color System Integration
Each button variant uses color-specific shadows and styling:
- **Primary**: Uses \`shadow-primary\` and \`hover:shadow-primary-lg\`
- **Secondary**: Uses \`shadow-accent\` and \`hover:shadow-accent-lg\`
- **Light**: Uses \`shadow-grey\` and \`hover:shadow-grey-lg\`
- **Danger**: Uses \`shadow-danger\` and \`hover:shadow-danger-lg\`
- **Success**: Uses \`shadow-success\` and \`hover:shadow-success-lg\`

## 🔗 Link Components
- **LinkButton** - Semantic links with button styling
- **IconLinkButton** - Icon-only semantic links
- Auto-detection of external links
- Proper SEO and accessibility

## 📱 Enhanced Accessibility
- **Touch Targets**: Minimum 44px for mobile compatibility
- **Focus Management**: Variant-specific focus rings
- **Screen Readers**: Proper ARIA labels and live regions
- **Keyboard Navigation**: Full keyboard support

## 🎭 Animation System
- **Subtle Scale Effects**: Hover and active states
- **Loading States**: Adaptive spinners
- **Micro-interactions**: Enhanced user feedback
- **Performance**: GPU-accelerated transforms

## Usage Examples

\`\`\`tsx
// Core button variants with color-specific shadows
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="light">Light</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>

// Outline variants
<Button variant="primary-outline">Primary Outline</Button>
<Button variant="danger-outline">Danger Outline</Button>

// Link buttons (semantic)
<LinkButton href="/about" variant="primary">About Us</LinkButton>
<LinkButton href="https://external.com" variant="secondary">
  External Link (auto-detected)
</LinkButton>

// Button groups
<ButtonGroup orientation="horizontal" segmented>
  <Button>Tab 1</Button>
  <Button>Tab 2</Button>
</ButtonGroup>

// Floating Action Button
<IconButton variant="fab" icon={<Plus />} aria-label="Add item" />

// Enhanced icon buttons with color-specific shadows
<IconButton 
  variant="danger" 
  icon={<Trash2 />} 
  aria-label="Delete" 
  size="lg" 
/>
\`\`\`
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'light',
        'light-outline',
        'danger',
        'danger-outline',
        'success',
        'success-outline',
        'ghost',
        'link',
        'fab',
      ],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    intensity: {
      control: { type: 'select' },
      options: ['subtle', 'normal', 'high'],
      description: 'Animation intensity on hover/active',
      defaultValue: 'subtle',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width button',
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state with spinner',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// STORY DEFINITIONS
// =============================================================================

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6">
      {/* Filled Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Filled Variants (with Color-Specific Shadows)</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="primary">Primary </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="light">Light</Button>
          <Button variant="danger">Danger </Button>
          <Button variant="success">Success </Button>
        </div>
      </div>

      {/* Outline Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Outline Variants</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="primary-outline">Primary Outline</Button>
          <Button variant="secondary-outline">Secondary Outline</Button>
          <Button variant="light-outline">Light Outline</Button>
          <Button variant="danger-outline">Danger Outline</Button>
          <Button variant="success-outline">Success Outline</Button>
        </div>
      </div>

      {/* Special Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Special Variants</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link Style</Button>
          <IconButton variant="fab" icon={<Plus />} aria-label="Add" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available button variants in the system including filled variants with color-specific shadows, outline variants, and special variants.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xs">Extra Small (xs)</Button>
        <Button size="sm">Small (sm)</Button>
        <Button size="md">Medium (md)</Button>
        <Button size="lg">Large (lg)</Button>
        <Button size="xl">Extra Large (xl)</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <IconButton size="xs" icon={<Plus />} aria-label="Add xs" />
        <IconButton size="sm" icon={<Plus />} aria-label="Add sm" />
        <IconButton size="md" icon={<Plus />} aria-label="Add md" />
        <IconButton size="lg" icon={<Plus />} aria-label="Add lg" />
        <IconButton size="xl" icon={<Plus />} aria-label="Add xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available button sizes from extra small to extra large, including icon buttons.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button fullWidth>Full Width</Button>
      <Button intensity="normal">Normal Intensity</Button>
      <Button intensity="high">High Intensity</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button states including default, disabled, loading, and full width.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Button leftIcon={<Download />}>Download</Button>
      <Button rightIcon={<ChevronRight />}>Continue</Button>
      <Button leftIcon={<Edit />} rightIcon={<Save />}>
        Edit & Save
      </Button>
      <Button variant="danger" leftIcon={<Trash2 />}>
        Delete
      </Button>
      <Button variant="success" leftIcon={<Check />}>
        Confirm
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Buttons with left, right, or both icons for enhanced visual communication. Note the color-specific shadows for danger and success variants.',
      },
    },
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <IconButton icon={<Home />} aria-label="Home" />
      <IconButton variant="secondary" icon={<Settings />} aria-label="Settings" />
      <IconButton variant="danger" icon={<Trash2 />} aria-label="Delete" />
      <IconButton variant="success" icon={<Check />} aria-label="Confirm" />
      <IconButton variant="ghost" icon={<Heart />} aria-label="Favorite" />
      <IconButton variant="light" icon={<Share2 />} aria-label="Share" />
      <IconButton variant="fab" icon={<Plus />} aria-label="Add" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only buttons for compact actions. Each variant uses color-specific shadows. Includes Floating Action Button (FAB) variant.',
      },
    },
  },
};

export const LinkButtons: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LinkButton href="/internal" variant="primary">
        Internal Link
      </LinkButton>
      <LinkButton href="https://example.com" variant="secondary">
        External Link (auto)
      </LinkButton>
      <LinkButton href="https://example.com" external variant="danger">
        Explicit External
      </LinkButton>
      <LinkButton href="/contact" variant="link">
        Contact Us
      </LinkButton>
      <LinkButton href="/phone" variant="ghost" leftIcon={<Phone />}>
        Call Us
      </LinkButton>
      <IconLinkButton
        href="/settings"
        icon={<Settings />}
        aria-label="Settings"
        variant="primary-outline"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Semantic link elements styled as buttons. Automatically detects external links and adds proper attributes.',
      },
    },
  },
};

export const ButtonGroups: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold">Horizontal Group</h3>
        <ButtonGroup>
          <Button>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Vertical Group</h3>
        <ButtonGroup orientation="vertical">
          <Button>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Segmented Controls</h3>
        <ButtonGroup segmented>
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroup>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Mixed Variants</h3>
        <ButtonGroup>
          <Button variant="primary">Save</Button>
          <Button variant="secondary-outline">Cancel</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Button groups with horizontal, vertical, and segmented layouts. Supports mixed variants.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing different button configurations.',
      },
    },
  },
};
