import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface ModalOverlayProps {
  children: ReactNode;
  onBackdropClick?: () => void;
  className?: string;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  onBackdropClick,
  className = '',
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onBackdropClick) {
      onBackdropClick();
    }
  };

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && onBackdropClick) {
      onBackdropClick();
    }
  };

  // Set focus to the overlay when the component mounts
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className={cn(
        // Base overlay styles
        'fixed inset-0 z-[10000] flex items-center justify-center',
        // Enhanced backdrop with better visual hierarchy
        'bg-overlay-accent-strong backdrop-blur-md',
        // Improved animations
        'animate-in fade-in duration-300 ease-out',
        // Remove outline for cleaner look
        'outline-none',
        // Better mobile padding
        'p-4 md:p-6',
        className,
      )}
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Modal overlay"
    >
      {children}
    </div>
  );
};
