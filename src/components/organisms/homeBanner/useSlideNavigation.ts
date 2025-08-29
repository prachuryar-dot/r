import { BannerSlide } from '@/interfaces';
import { useState, useCallback } from 'react';

interface UseSlideNavigationProps {
  slides: BannerSlide[];
  hasSlides: boolean;
  animationDuration: number;
}

export const useSlideNavigation = ({
  slides,
  hasSlides,
  animationDuration,
}: UseSlideNavigationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex || !hasSlides) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    },
    [currentIndex, isAnimating, hasSlides, animationDuration],
  );

  const goToNext = useCallback(() => {
    if (!hasSlides) return;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  }, [currentIndex, slides?.length, goToSlide, hasSlides]);

  const goToPrev = useCallback(() => {
    if (!hasSlides) return;
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, slides?.length, goToSlide, hasSlides]);

  return {
    currentIndex,
    isAnimating,
    goToSlide,
    goToNext,
    goToPrev,
  };
};
