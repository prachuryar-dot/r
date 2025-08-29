# 🎨 Component Library

A modern React component library built with Next.js 14, Storybook 8, TypeScript, and Tailwind CSS for our design system.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `20.15.1` (LTS)
- **npm**: `10.7.0+`
- **GitLab access** to this repository

### Installation

```bash
# Clone the repository
git clone <your-gitlab-repo-url>
cd <your-repo-name>

# Install dependencies
npm install

# Set up git hooks
npm run prepare
```

### Development

```bash
# Start Storybook (component development)
npm run storybook

# Start Next.js dev server (if needed)
npm run dev

# Run tests
npm test

# Run all quality checks
npm run quality
```

Visit:

- **Storybook**: http://localhost:6006
- **Next.js**: http://localhost:3000

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic components (Button, Input, etc.)
│   ├── molecules/       # Combined components (SearchBox, Card, etc.)
│   ├── organisms/       # Complex components (Header, DataTable, etc.)
│   └── templates/       # Page layouts
├── lib/                 # Utilities and helpers
├── types/              # TypeScript type definitions
└── tests/              # Test utilities and setup
```

## 🧩 Creating Components

### 1. Component Structure

Each component should have this structure:

```
src/components/atoms/button/
├── Button.tsx          # Main component
├── Button.stories.tsx  # Storybook stories
├── Button.test.tsx     # Tests
└── index.tsx          # Exports
```

### 2. Component Template

**Button.tsx**:

```typescript
import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-grey-200 text-grey-900 hover:bg-grey-300',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
```

**Button.stories.tsx**:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};
```

**Button.test.tsx**:

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-grey-200')
  })
})
```

**index.tsx**:

```typescript
export { Button, type ButtonProps } from './Button';
```

## 🔀 Git Workflow

### Branch Naming

```
<type>/<description>

Examples:
feature/add-button-component
fix/button-hover-state
docs/update-readme
chore/update-dependencies
```

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance

Examples:
feat(atoms): add Button component with variants
fix(molecules): resolve Card accessibility issue
docs: update component usage guidelines
test(organisms): add DataTable tests
```

### Development Process

1. **Create a branch** from `main`:

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:

   - Write component code
   - Add comprehensive tests
   - Create Storybook stories
   - Update documentation

3. **Test your changes**:

   ```bash
   npm run quality  # Runs linting, type-check, and tests
   npm run storybook  # Test in Storybook
   ```

4. **Commit and push**:

   ```bash
   git add .
   git commit -m "feat(atoms): add Button component with variants"
   git push origin feature/your-feature-name
   ```

5. **Create Merge Request** in GitLab:
   - Use the MR template
   - Add screenshots/GIFs if UI changes
   - Request review from team members
   - Ensure CI pipeline passes

## 🧪 Testing Standards

### Requirements

- **100% test coverage** (enforced by CI)
- **Accessibility tests** using axe-core
- **User interaction tests** with Testing Library
- **Visual regression tests** in Storybook

### Running Tests

```bash
npm test                 # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

### Test Guidelines

- Test user interactions, not implementation details
- Include accessibility tests
- Test all component variants and props
- Mock external dependencies
- Use descriptive test names

## 📚 Documentation

### Storybook Stories

- **Controls**: Make all props interactive
- **Actions**: Log event handlers
- **Docs**: Use JSDoc comments for auto-documentation
- **Accessibility**: Test with a11y addon

### Component Documentation

Use JSDoc comments for props:

```typescript
export interface ButtonProps {
  /** The visual style variant */
  variant?: 'default' | 'secondary';

  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';

  /** Additional CSS classes */
  className?: string;

  /** Click event handler */
  onClick?: () => void;
}
```

## 🔍 Code Review Guidelines

### For Authors

- [ ] All tests pass locally
- [ ] Storybook stories are comprehensive
- [ ] Component is accessible
- [ ] Documentation is updated
- [ ] No console errors or warnings

### For Reviewers

- [ ] Code follows our conventions
- [ ] Component API is intuitive
- [ ] Tests cover edge cases
- [ ] Accessibility requirements met
- [ ] Performance impact considered

## 🛠️ Available Scripts

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `npm run dev`             | Start Next.js development |
| `npm run storybook`       | Start Storybook           |
| `npm run build`           | Build Next.js app         |
| `npm run build-storybook` | Build Storybook           |
| `npm test`                | Run tests                 |
| `npm run test:watch`      | Run tests in watch mode   |
| `npm run test:coverage`   | Run tests with coverage   |
| `npm run lint`            | Run ESLint                |
| `npm run lint:fix`        | Fix ESLint issues         |
| `npm run type-check`      | Check TypeScript types    |
| `npm run quality`         | Run all quality checks    |
| `npm run clean`           | Clean build artifacts     |

## 🎯 Design System Guidelines

### Colors

Use Tailwind's color system:

- **Primary**: `blue-600` (buttons, links)
- **Secondary**: `grey-200` (secondary actions)
- **Success**: `green-600`
- **Warning**: `yellow-500`
- **Error**: `red-600`

### Typography

- **Headings**: `font-semibold` or `font-bold`
- **Body**: `font-normal`
- **Captions**: `text-sm text-grey-600`

### Spacing

Use Tailwind's spacing scale (4px increments):

- **xs**: `1` (4px)
- **sm**: `2` (8px)
- **md**: `4` (16px)
- **lg**: `6` (24px)
- **xl**: `8` (32px)

## 🚀 Deployment

### Environments

- **Staging**: Deployed on merge to `develop`
- **Production**: Deployed on merge to `main`

### Storybook URLs

- **Staging**: `https://your-project-staging.gitlab.io`
- **Production**: `https://your-project.gitlab.io`

## ❓ Troubleshooting

### Common Issues

**Tests failing?**

```bash
npm run test:coverage  # Check what's not covered
npm run lint:fix       # Fix linting issues
```

**Storybook not loading?**

```bash
rm -rf node_modules/.cache
npm run storybook
```

**Git hooks not working?**

```bash
npm run prepare
```

**Node version issues?**

```bash
node --version  # Should be 20.15.1+
nvm use 20.15.1  # If using nvm
```

## 🤝 Getting Help

- **Team Chat**: #frontend-team (internal)
- **Issues**: Create GitLab issues for bugs or feature requests
- **Documentation**: Check Storybook for component examples
- **Code Questions**: Ask in merge request comments

## 📋 Checklist for New Components

- [ ] Component follows atomic design principles
- [ ] TypeScript interfaces are properly defined
- [ ] All variants and states are implemented
- [ ] Tests achieve 100% coverage
- [ ] Storybook stories cover all use cases
- [ ] Component is accessible (keyboard + screen reader)
- [ ] Documentation is complete
- [ ] Code review is completed
- [ ] CI pipeline passes

---

**Happy coding! 🎉**

Need help? Reach out to the team or check our Storybook documentation.
