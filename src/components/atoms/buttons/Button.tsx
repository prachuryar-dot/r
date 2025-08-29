import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn'; // Utility for combining classes

// =============================================================================
// DESIGN TOKENS - Enhanced system with animations
// =============================================================================

export const DESIGN_TOKENS = {
  // Enhanced animation system
  animation: {
    transition: 'transition-all duration-200 ease-in-out',
    scale: {
      active: 'active:scale-95',
      hover: 'hover:scale-[1.02]', // Subtle hover scale for non-outline variants
      default: 'scale-100',
    },
    // Micro-interactions
    bounce: 'hover:animate-pulse', // For loading states
    ripple:
      'relative overflow-hidden before:absolute before:inset-0 before:bg-grey-50/20 before:scale-0 before:rounded-full before:transition-transform active:before:scale-100',
  },

  // Enhanced focus states with better contrast
  focus: {
    primary:
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus-visible:ring-2',
    secondary:
      'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus-visible:ring-2',
    danger:
      'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus-visible:ring-2',
    success:
      'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:ring-2',
    warning:
      'focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus-visible:ring-2',
  },

  // Enhanced shadow system
  shadows: {
    default: '',
    hover: 'hover:shadow-primary-lg',
    active: 'active:shadow-accent-sm',
    none: 'shadow-none hover:shadow-none',
  },

  // Border radius system
  radius: {
    default: 'rounded-md',
    icon: 'rounded-md',
    group: {
      first: 'rounded-l-md rounded-r-none',
      middle: 'rounded-none',
      last: 'rounded-r-md rounded-l-none',
      single: 'rounded-md',
      // Vertical grouping
      firstVertical: 'rounded-t-md rounded-b-none',
      middleVertical: 'rounded-none',
      lastVertical: 'rounded-b-md rounded-t-none',
    },
  },

  // Enhanced disabled states
  disabled: {
    base: 'disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none disabled:shadow-none',
    interactive: 'disabled:hover:scale-100 disabled:active:scale-100',
  },
} as const;

// =============================================================================
// ENHANCED BUTTON VARIANTS SYSTEM
// =============================================================================

const buttonVariants = cva(
  // Base styles - enhanced with micro-interactions
  [
    'inline-flex items-center justify-center font-medium',
    'cursor-pointer select-none',
    DESIGN_TOKENS.animation.transition,
    DESIGN_TOKENS.radius.default,
    DESIGN_TOKENS.disabled.base,
    DESIGN_TOKENS.disabled.interactive,
    'relative overflow-hidden', // For ripple effects
    // Better touch targets
    'touch-manipulation',
    // Prevent text selection during interactions
    'user-select-none',
  ],
  {
    variants: {
      variant: {
        // PRIMARY VARIANTS
        primary: [
          'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 disabled:bg-grey-300 disabled:text-grey-500 hover:shadow-primary-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus-visible:ring-2 hover:scale-[1.02]',
          '!text-grey-50',
        ],
        'primary-outline': [
          'bg-transparent border-2 border-primary-500 text-primary-500',
          'hover:bg-primary-500 hover:text-grey-50 hover:border-primary-500',
          'active:bg-primary-600 active:text-grey-50 active:border-primary-600',
          'disabled:border-grey-300 disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.primary,
        ],
        // SECONDARY VARIANTS
        secondary: [
          'bg-accent-1000 hover:bg-accent-800 active:bg-primary-900 disabled:bg-grey-300 disabled:text-grey-500 hover:shadow-accent-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus-visible:ring-2 hover:scale-[1.02]',
          '!text-grey-50',
        ],
        'secondary-outline': [
          'bg-transparent border-2 border-accent-1000 text-accent-1000',
          'hover:bg-accent-800 hover:text-grey-50 hover:border-accent-800',
          'active:bg-primary-900 active:text-grey-50 active:border-primary-900',
          'disabled:border-grey-300 disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.secondary,
        ],
        // DANGER VARIANTS
        danger: [
          'bg-danger-50 hover:bg-danger-100 active:bg-danger-500 active:!text-danger-50 disabled:bg-grey-300 disabled:text-grey-500 hover:shadow-danger-lg focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 focus-visible:ring-2 hover:scale-[1.02]',
          '!text-danger-500',
        ],
        'danger-outline': [
          'bg-transparent border-2 border-danger-500 text-danger-500',
          'hover:bg-danger-500 hover:text-grey-50 hover:border-danger-500',
          'active:bg-danger-600 active:text-grey-50 active:border-danger-600',
          'disabled:border-grey-300 disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.danger,
        ],
        // SUCCESS VARIANTS
        success: [
          'bg-success-50 hover:bg-success-100 active:bg-success-500 active:!text-success-50 disabled:bg-grey-300 disabled:text-grey-500 hover:shadow-success-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 focus-visible:ring-2 hover:scale-[1.02]',
          '!text-success-500',
        ],
        'success-outline': [
          'bg-transparent border-2 border-success-500 text-success-500',
          'hover:bg-success-500 hover:text-grey-50 hover:border-success-500',
          'active:bg-success-600 active:text-grey-50 active:border-success-600',
          'disabled:border-grey-300 disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.success,
        ],

        // LIGHT VARIANTS
        light: [
          'bg-grey-50 hover:bg-grey-100 active:bg-grey-200 disabled:bg-grey-300 disabled:text-grey-500 hover:shadow-grey-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus-visible:ring-2 hover:scale-[1.02]',
          '!text-accent-1000',
        ],

        'light-outline': [
          'bg-transparent border-2 border-grey-50 text-accent-1000',
          'hover:bg-grey-100 hover:text-accent-1000 hover:border-grey-100',
          'active:bg-grey-200 active:text-accent-1000 active:border-grey-200',
          'disabled:border-grey-300 disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.secondary,
        ],

        // SPECIAL VARIANTS
        ghost: [
          'bg-transparent text-primary-700',
          'hover:bg-primary-50 hover:text-primary-800',
          'active:bg-primary-100',
          'disabled:text-grey-400 disabled:bg-transparent',
          DESIGN_TOKENS.focus.primary,
          DESIGN_TOKENS.shadows.none,
        ],

        link: [
          'bg-transparent text-primary-600 underline-offset-4',
          'hover:text-primary-800 hover:underline',
          'active:text-primary-900',
          'disabled:text-grey-400 disabled:no-underline',
          DESIGN_TOKENS.focus.primary,
          DESIGN_TOKENS.shadows.none,
        ],

        // FLOATING ACTION BUTTON
        fab: [
          'bg-primary-500 text-grey-50 rounded-full',
          'hover:bg-primary-400 active:bg-primary-600',
          'hover:shadow-primary-lg',
          'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          'disabled:bg-grey-300 disabled:text-grey-500',
          'hover:scale-[1.02] active:scale-95',
        ],
      },

      size: {
        // Enhanced sizing with better touch targets
        xs: 'px-2 py-1 text-label-xs gap-1 min-h-[28px]', // Increased from 24px
        sm: 'px-3 py-2 text-label-sm gap-1.5 min-h-[36px]', // Increased from 32px
        md: 'px-4 py-2.5 text-label-md gap-2 min-h-[44px]', // Increased from 40px
        lg: 'px-6 py-3 text-label-lg gap-2 min-h-[52px]', // Increased from 48px
        xl: 'px-8 py-4 text-label-xl gap-3 min-h-[60px]', // Increased from 56px
      },

      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },

      // New: Animation intensity
      intensity: {
        subtle: '', // Default animations
        normal: DESIGN_TOKENS.animation.scale.hover,
        high: 'hover:scale-105 active:scale-95',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      intensity: 'subtle',
    },
  },
);

// =============================================================================
// ENHANCED COMPONENT INTERFACES
// =============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean;
}

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href: string;
  external?: boolean;
  loading?: boolean;
}

export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  segmented?: boolean; // New: segmented control style
  connected?: boolean; // New: connected appearance
}

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export interface IconLinkButtonProps
  extends Omit<LinkButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  'aria-label': string;
}

// =============================================================================
// ENHANCED LOADING SPINNER
// =============================================================================

const LoadingSpinner: React.FC<{
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: string;
}> = ({ size, variant }) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  };

  // Adaptive spinner color based on variant
  const spinnerColor =
    variant?.includes('outline') || variant === 'ghost' || variant === 'link'
      ? 'text-current'
      : 'text-grey-50';

  return (
    <svg
      className={cn('-ml-1 mr-2 animate-spin', sizeClasses[size], spinnerColor)}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

// =============================================================================
// ENHANCED BUTTON COMPONENT
// =============================================================================

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      fullWidth,
      intensity,
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ variant, size, fullWidth, intensity }),
          loading && 'cursor-wait',
          DESIGN_TOKENS.animation.scale.active,
          className,
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...(loading && { 'aria-busy': true, 'aria-live': 'polite' })}
        {...props}
      >
        {loading ? (
          <LoadingSpinner size={size || 'md'} variant={variant || undefined} />
        ) : (
          leftIcon && (
            <span className="flex-shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}

        <span className="flex-shrink-0">{children}</span>

        {!loading && rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

// =============================================================================
// ENHANCED BUTTON GROUP COMPONENT
// =============================================================================

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      variant,
      size,
      className,
      orientation = 'horizontal',
      segmented = false,
      connected = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          segmented && [
            'rounded-lg bg-grey-100 p-1',
            orientation === 'horizontal' ? 'space-x-1' : 'space-y-1',
          ],
          !segmented &&
            connected && [
              orientation === 'horizontal' ? 'rounded-md' : 'rounded-md',
              'shadow-primary',
            ],
          className,
        )}
        role={segmented ? 'tablist' : 'group'}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const totalChildren = React.Children.count(children);
            const isFirst = index === 0;
            const isLast = index === totalChildren - 1;
            const isMiddle = !isFirst && !isLast;

            return React.cloneElement(child, {
              ...child.props,
              variant: child.props.variant || variant,
              size: child.props.size || size,
              className: cn(
                child.props.className,
                // Segmented control styling
                segmented && [
                  'bg-transparent shadow-none hover:bg-grey-50',
                  'data-[state=active]:bg-grey-50 data-[state=active]:shadow-sm',
                ],
                // Connected button styling
                !segmented &&
                  connected && [
                    // Horizontal grouping
                    orientation === 'horizontal' && [
                      isFirst && 'rounded-r-none',
                      isLast && 'rounded-l-none',
                      isMiddle && 'rounded-none',
                      !isFirst && '-ml-px',
                    ],
                    // Vertical grouping
                    orientation === 'vertical' && [
                      isFirst && 'rounded-b-none',
                      isLast && 'rounded-t-none',
                      isMiddle && 'rounded-none',
                      !isFirst && '-mt-px',
                    ],
                  ],
              ),
              ...(segmented && {
                role: 'tab',
                'aria-selected': child.props['data-state'] === 'active',
              }),
            });
          }
          return child;
        })}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';

// =============================================================================
// ENHANCED ICON BUTTON COMPONENT
// =============================================================================

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, 'aria-label': ariaLabel, size = 'md', variant, className, ...props }, ref) => {
    // Enhanced touch targets with proper aspect ratios
    const iconSizeClasses = {
      xs: 'h-7 w-7 p-1.5', // 28px total
      sm: 'h-9 w-9 p-2', // 36px total
      md: 'h-11 w-11 p-2.5', // 44px total
      lg: 'h-13 w-13 p-3', // 52px total
      xl: 'h-15 w-15 p-3.5', // 60px total
    };

    // FAB styling for floating action buttons
    const isFab = variant === 'fab';

    return (
      <Button
        ref={ref}
        size={size}
        variant={variant}
        className={cn(
          iconSizeClasses[size || 'md'],
          'flex-shrink-0',
          isFab && 'fixed bottom-6 right-6 z-50', // FAB positioning
          className,
        )}
        aria-label={ariaLabel}
        {...props}
      >
        <span className="flex items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

// =============================================================================
// ENHANCED LINK BUTTON COMPONENT
// =============================================================================

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      fullWidth,
      intensity,
      leftIcon,
      rightIcon,
      loading = false,
      href,
      external = false,
      ...props
    },
    ref,
  ) => {
    // Determine if link is external
    const isExternal = external || href.startsWith('http') || href.startsWith('//');

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({ variant, size, fullWidth, intensity }),
          loading && 'pointer-events-none cursor-wait',
          DESIGN_TOKENS.animation.scale.active,
          'no-underline', // Override default link underline
          variant === 'link' && 'underline hover:no-underline', // Except for link variant
          className,
        )}
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        {...(loading && { 'aria-busy': true, 'aria-live': 'polite' })}
        {...props}
      >
        {loading ? (
          <LoadingSpinner size={size || 'md'} variant={variant || undefined} />
        ) : (
          leftIcon && (
            <span className="flex-shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}

        <span className="flex-shrink-0">{children}</span>

        {!loading && rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}

        {isExternal && !rightIcon && !loading && (
          <svg
            className="ml-1.5 h-4 w-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  },
);

LinkButton.displayName = 'LinkButton';

// =============================================================================
// ENHANCED ICON LINK BUTTON COMPONENT
// =============================================================================

export const IconLinkButton = React.forwardRef<HTMLAnchorElement, IconLinkButtonProps>(
  (
    { icon, 'aria-label': ariaLabel, size = 'md', className, href, external, variant, ...props },
    ref,
  ) => {
    // Enhanced touch targets
    const iconSizeClasses = {
      xs: 'h-7 w-7 p-1.5', // 28px total
      sm: 'h-9 w-9 p-2', // 36px total
      md: 'h-11 w-11 p-2.5', // 44px total
      lg: 'h-13 w-13 p-3', // 52px total
      xl: 'h-15 w-15 p-3.5', // 60px total
    };

    // FAB styling for floating action buttons
    const isFab = variant === 'fab';

    return (
      <LinkButton
        ref={ref}
        size={size}
        href={href}
        external={external}
        variant={variant}
        className={cn(
          iconSizeClasses[size || 'md'],
          'flex-shrink-0',
          isFab && 'fixed bottom-6 right-6 z-50', // FAB positioning
          className,
        )}
        aria-label={ariaLabel}
        {...props}
      >
        <span className="flex items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      </LinkButton>
    );
  },
);

IconLinkButton.displayName = 'IconLinkButton';

// =============================================================================
// EXPORTS
// =============================================================================

export { buttonVariants };
export type { VariantProps };
