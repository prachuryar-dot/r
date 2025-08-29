import React from 'react';
import { clsx } from 'clsx';

// Component size variants
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Component variant types
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ComponentTemplateProps {
  children: React.ReactNode;
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  className?: string;
}

const componentSizeClasses: Record<ComponentSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
};

const componentVariantClasses: Record<ComponentVariant, string> = {
  primary:
    'bg-primary-800 text-white shadow-lg hover:bg-primary-700 active:bg-primary-900 disabled:bg-grey-300 disabled:text-grey-500',
  secondary:
    'bg-accent-500 text-white shadow-lg hover:bg-accent-600 active:bg-accent-700 disabled:bg-grey-300 disabled:text-grey-500',
  outline:
    'bg-transparent border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white active:bg-primary-900 disabled:border-grey-300 disabled:text-grey-500',
  ghost:
    'bg-transparent text-primary-800 hover:bg-primary-50 active:bg-primary-100 disabled:text-grey-500',
};

export const ComponentTemplate: React.FC<ComponentTemplateProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  onMouseEnter,
  className,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = componentSizeClasses[size];
  const variantClasses = componentVariantClasses[variant];
  const stateClasses = disabled ? 'cursor-not-allowed opacity-60' : loading ? 'cursor-wait' : '';

  const componentClasses = clsx(baseClasses, sizeClasses, variantClasses, stateClasses, className);

  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={componentClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={isDisabled}
    >
      {loading && (
        <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span className="flex-shrink-0">{children}</span>
    </button>
  );
};
