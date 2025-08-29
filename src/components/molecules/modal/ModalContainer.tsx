import { cn } from '@/lib/utils/cn';
import React, { ReactNode, useEffect, useRef } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
  preventBodyScroll?: boolean;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  auto: 'max-w-max', // For custom sized modals
};

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  size = 'md',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Base container styles
        'relative mx-4 w-full',
        // Responsive behavior - full screen on mobile, sized on desktop
        'h-full md:h-auto md:max-h-[90vh]',
        // Size variants for desktop
        sizeClasses[size],
        // Background and styling using your design tokens
        'rounded-none md:rounded-xl',
        'shadow-accent-lg',
        // Animation improvements
        'animate-in zoom-in-95 fade-in duration-300 ease-out',
        // Scrollable content
        'overflow-hidden',
        // Focus styles
        'focus:outline-none',
        className,
      )}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div className="scrollbar-hide h-full overflow-y-auto">{children}</div>
    </div>
  );
};
