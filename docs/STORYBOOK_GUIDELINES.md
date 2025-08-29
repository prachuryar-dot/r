# Storybook Guidelines & Best Practices

This document provides comprehensive guidelines for creating and maintaining Storybook stories in the Pattem Estates design system.

## 📁 File Structure

```
src/
├── components/
│   ├── atoms/           # Atomic components (buttons, inputs, etc.)
│   │   └── buttons/
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.tsx
│   ├── molecules/       # Molecular components (forms, cards, etc.)
│   ├── organisms/       # Organism components (headers, footers, etc.)
│   └── designSystem/    # Design system components (colors, typography, etc.)
│       ├── colors/
│       ├── typography/
│       └── template/    # Template for new components
```

## 🎯 Story Naming Conventions

### Title Structure

- **Design System**: `Design System/ComponentName`
- **Atoms**: `Atoms/ComponentName`
- **Molecules**: `Molecules/ComponentName`
- **Organisms**: `Organisms/ComponentName`

### Story Names

- Use camelCase for story names
- Be descriptive and explain the purpose
- Examples: `AllSections`, `ComponentVariants`, `InteractiveExamples`

## 📝 Story Structure Template

### 1. Meta Configuration

```tsx
const meta: Meta<typeof Component> = {
  title: 'Design System/ComponentName',
  component: Component,
  tags: ['autodocs'], // Always include for automatic documentation
  parameters: {
    docs: {
      description: {
        component: `
# Component Name

Comprehensive description with features, usage, and examples.
        `,
      },
    },
    layout: 'padded',
  },
  argTypes: {
    // Define all props with proper types and descriptions
  },
};
```

### 2. Story Types

```tsx
export default meta;
type Story = StoryObj<typeof meta>; // Use meta, not component
```

### 3. Story Examples

```tsx
export const AllSections: Story = {
  args: {
    // Default props
  },
  parameters: {
    docs: {
      description: {
        story: `
### Story Description

Detailed description of what this story demonstrates.
        `,
      },
    },
  },
};
```

## 🎨 Documentation Guidelines

### Component Description Structure

1. **Title**: Clear, descriptive title
2. **Features**: Bullet points of key features
3. **Variants/Sizes**: Available options
4. **Usage**: Code examples
5. **Design Specifications**: Technical details

### Story Description Structure

1. **Overview**: What the story demonstrates
2. **Features**: Key interactive features
3. **Usage Guidelines**: When to use each variant
4. **Implementation**: Code examples
5. **Best Practices**: Development guidelines

## 🔧 ArgTypes Configuration

### Basic Props

```tsx
argTypes: {
  variant: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'outline'],
    description: 'Component variant style',
    table: {
      type: { summary: 'primary | secondary | outline' },
      defaultValue: { summary: 'primary' },
    },
  },
  size: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Component size',
    table: {
      type: { summary: 'xs | sm | md | lg | xl' },
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
}
```

### Event Handlers

```tsx
onClick: {
  action: 'clicked',
  description: 'Click event handler',
  table: {
    type: { summary: '() => void' },
  },
},
```

## 🎭 Story Examples

### 1. AllSections Story

```tsx
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

Displays all component variants, sizes, and states.
        `,
      },
    },
  },
};
```

### 2. Variants Story

```tsx
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
          <Component {...args} variant="primary">
            Primary Component
          </Component>
        </div>
        {/* More variants */}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Component Variants

All available component variants with their specific use cases.
        `,
      },
    },
  },
};
```

### 3. Interactive Story

```tsx
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
          <Component {...args} onClick={() => alert('Clicked!')}>
            Click Me
          </Component>
        </div>
        {/* More examples */}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Examples

Examples showing component interactions and event handling.
        `,
      },
    },
  },
};
```

## 🎨 Design System Integration

### Colors

- Use design system color classes: `text-primary-500`, `bg-accent-100`
- Follow the established color palette
- Document color usage in stories

### Typography

- Use design system typography classes: `text-heading-lg`, `text-paragraph-md`
- Follow typography hierarchy
- Include font weight examples

### Spacing

- Use consistent spacing: `space-y-6`, `gap-4`, `p-4`
- Follow the spacing scale
- Use responsive spacing classes

## ♿ Accessibility Guidelines

### ARIA Labels

```tsx
// Always include ARIA labels for interactive components
<IconButton icon={<Plus />} aria-label="Add item" />
```

### Keyboard Navigation

```tsx
// Test keyboard navigation
// Include focus states in stories
<Component className="focus:ring-2 focus:ring-primary-500" />
```

### Screen Reader Support

```tsx
// Include proper descriptions
// Test with a11y addon
// Document accessibility features
```

## 📱 Responsive Design

### Viewport Testing

- Test with mobile (375px), tablet (768px), desktop (1440px)
- Include responsive examples in stories
- Use responsive classes: `md:grid-cols-2 lg:grid-cols-4`

### Mobile-First Approach

```tsx
// Use mobile-first responsive classes
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{/* Content */}</div>
```

## 🔍 Testing Guidelines

### Storybook Addons

- **Controls**: Test all props interactively
- **Actions**: Test event handlers
- **A11y**: Test accessibility
- **Viewport**: Test responsive design
- **Backgrounds**: Test with different backgrounds

### Manual Testing Checklist

- [ ] All variants display correctly
- [ ] All sizes work properly
- [ ] Interactive features work
- [ ] Accessibility features work
- [ ] Responsive design works
- [ ] Code examples are accurate

## 📚 Code Examples

### TypeScript Interfaces

```tsx
export interface ComponentProps {
  children: React.ReactNode;
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}
```

### Usage Examples

```tsx
// Basic usage
<Component variant="primary" size="md">
  Click me
</Component>

// With event handlers
<Component
  variant="primary"
  onClick={() => console.log('clicked')}
>
  Interactive Component
</Component>

// With state management
const [isActive, setIsActive] = useState(false);

<Component
  onClick={() => setIsActive(!isActive)}
  className={isActive ? 'active' : ''}
>
  Stateful Component
</Component>
```

## 🚀 Quick Start Template

1. **Copy the template**:

   ```bash
   cp src/components/designSystem/template/ComponentTemplate.stories.tsx src/components/your-component/YourComponent.stories.tsx
   ```

2. **Update the imports**:

   ```tsx
   import { YourComponent } from './YourComponent';
   ```

3. **Update the meta**:

   ```tsx
   const meta: Meta<typeof YourComponent> = {
     title: 'Design System/YourComponent',
     component: YourComponent,
     // ... rest of configuration
   };
   ```

4. **Customize the stories** for your component's specific props and variants

5. **Test thoroughly** with all Storybook addons

## 📋 Checklist for New Stories

- [ ] Proper file structure and naming
- [ ] Comprehensive component description
- [ ] All props documented in argTypes
- [ ] All variants/sizes demonstrated
- [ ] Interactive examples included
- [ ] Accessibility features documented
- [ ] Responsive design tested
- [ ] Code examples accurate
- [ ] TypeScript types correct
- [ ] Story descriptions comprehensive
- [ ] Controls work properly
- [ ] Actions work properly
- [ ] A11y tests pass
- [ ] Viewport tests pass

## 🎯 Best Practices

1. **Consistency**: Follow established patterns
2. **Completeness**: Document all features
3. **Clarity**: Use clear, descriptive names
4. **Accessibility**: Always consider a11y
5. **Responsiveness**: Test all viewports
6. **Interactivity**: Include interactive examples
7. **Documentation**: Comprehensive descriptions
8. **Code Quality**: Clean, readable examples
9. **Testing**: Thorough testing with addons
10. **Maintenance**: Keep stories updated

## 🔗 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook Addons](https://storybook.js.org/addons)
- [Design System Template](./src/components/designSystem/template/)
- [Existing Stories](./src/components/) for reference

---

**Remember**: Good stories are the foundation of a great design system. Take the time to create comprehensive, well-documented stories that help developers understand and use your components effectively.
