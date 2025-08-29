import { useModal } from '@/contexts/ModalContext';
import { useCallback, useEffect } from 'react';

interface UseModalTriggerOptions {
  //eslint-disable-next-line
  component: React.ComponentType<any>;
  //eslint-disable-next-line
  props?: Record<string, any>;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  delay?: number;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventBodyScroll?: boolean;
  className?: string;
}

export const useModalTrigger = (options: UseModalTriggerOptions) => {
  const { openModal, closeModal } = useModal();

  // Manual trigger function with enhanced options
  const trigger = useCallback(
    //eslint-disable-next-line
    (overrideProps?: Record<string, any>) => {
      return openModal({
        ...options,
        props: { ...options.props, ...overrideProps },
      });
    },
    [openModal, options],
  );

  // Delayed trigger function
  const triggerWithDelay = useCallback(
    //eslint-disable-next-line
    (delay: number = options.delay || 0, overrideProps?: Record<string, any>) => {
      const timeoutId = setTimeout(() => {
        trigger(overrideProps);
      }, delay);

      return () => clearTimeout(timeoutId);
    },
    [trigger, options.delay],
  );

  // Auto-trigger on mount (if delay is provided in options)
  useEffect(() => {
    if (options.delay !== undefined) {
      const cleanup = triggerWithDelay(options.delay);
      return cleanup;
    }
  }, [options.delay, triggerWithDelay]);

  return {
    trigger,
    triggerWithDelay,
    closeModal,
  };
};
