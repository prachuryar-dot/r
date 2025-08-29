import React from 'react';
import { cn } from '@/lib/utils/cn';
import { BannerSlide } from '@/interfaces';

interface SlideIndicatorsProps {
  slides: BannerSlide[];
  currentIndex: number;
  onSlideSelect: (index: number) => void;
  isAnimating: boolean;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  slides,
  currentIndex,
  onSlideSelect,
  isAnimating,
}) => {
  if (slides.length <= 1) return null;

  return (
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 space-x-1 sm:bottom-8">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideSelect(index)}
          className={cn(
            'h-2 w-4 cursor-pointer rounded-full transition-all duration-300 hover:scale-110',
            index === currentIndex
              ? 'w-8 scale-125 bg-primary-400 shadow-lg sm:w-12'
              : 'bg-white/50 hover:bg-white/70',
          )}
          aria-label={`Go to slide ${index + 1}`}
          disabled={isAnimating}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
