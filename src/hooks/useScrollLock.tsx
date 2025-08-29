import { useEffect, useRef } from 'react';

// Global counter to track how many components are locking scroll
let scrollLockCount = 0;
let originalOverflow: string | null = null;

export const useScrollLock = (isLocked: boolean = true) => {
  const isLockedRef = useRef(false);

  useEffect(() => {
    if (!isLocked) return;
    if (typeof window === 'undefined') return;

    // Only lock if not already locked by this instance
    if (!isLockedRef.current) {
      isLockedRef.current = true;
      scrollLockCount++;

      // Store original overflow only once
      if (scrollLockCount === 1) {
        originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
      }
    }

    // Cleanup function
    return () => {
      if (isLockedRef.current) {
        isLockedRef.current = false;
        scrollLockCount--;

        // Only restore when no more locks are active
        if (scrollLockCount === 0) {
          document.body.style.overflow = originalOverflow || '';
          originalOverflow = null;
        }
      }
    };
  }, [isLocked]);

  // Manual cleanup function
  const unlockScroll = () => {
    if (isLockedRef.current) {
      isLockedRef.current = false;
      scrollLockCount--;

      if (scrollLockCount === 0 && typeof document !== 'undefined') {
        document.body.style.overflow = originalOverflow || '';
        originalOverflow = null;
      }
    }
  };

  return { unlockScroll };
};
