import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { BannerSlide } from '@/interfaces';

interface SlideBackgroundProps {
  slides: BannerSlide[];
  currentIndex: number;
  loadedImages: Set<number>;
}

const SlideBackground: React.FC<SlideBackgroundProps> = ({
  slides,
  currentIndex,
  loadedImages,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={cn(
            'absolute inset-0 transition-transform duration-700 ease-in-out',
            index === currentIndex
              ? 'translate-x-0'
              : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full',
          )}
        >
          {loadedImages.has(index) && (
            <>
              <div className="absolute inset-0 md:hidden">
                <Image
                  src={slide.mobileBannerUrl}
                  alt={slide.alt || `Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: 'center center',
                  }}
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src={slide.desktopBannerUrl}
                  alt={slide.alt || `Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: 'center center',
                  }}
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlideBackground;
