import { useCallback, useRef } from 'react';

interface UseBannerInteractionsProps {
  hasSlides: boolean;
  goToNext: () => void;
  goToPrev: () => void;
}

export const useBannerInteractions = ({
  hasSlides,
  goToNext,
  goToPrev,
}: UseBannerInteractionsProps) => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const lastWheelTime = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && hasSlides) {
      goToNext();
    }
    if (isRightSwipe && hasSlides) {
      goToPrev();
    }
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!hasSlides) return;

      const now = Date.now();
      const timeDiff = now - lastWheelTime.current;

      if (timeDiff < 500) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 30) {
          goToNext();
          lastWheelTime.current = now;
        } else if (e.deltaX < -30) {
          goToPrev();
          lastWheelTime.current = now;
        }
      } else if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) {
          goToNext();
          lastWheelTime.current = now;
        } else {
          goToPrev();
          lastWheelTime.current = now;
        }
      }
    },
    [hasSlides, goToNext, goToPrev],
  );

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleWheel,
  };
};
