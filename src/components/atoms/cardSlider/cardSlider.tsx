'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { IconButton } from '@/components/atoms/buttons';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface CardSliderItem {
  id: string | number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CardSliderProps {
  items: CardSliderItem[];
  autoPlay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  animationType?: 'slide' | 'fade';
  className?: string;
  controlVariant?: 'primary' | 'secondary' | 'light' | 'ghost';
  controlSize?: 'xs' | 'sm' | 'md' | 'lg';
  onSlideChange?: (currentIndex: number) => void;
}

export const CardSlider: React.FC<CardSliderProps> = ({
  items,
  autoPlay = false,
  showDots = true,
  showArrows = true,
  animationType = 'slide',
  className = '',
  controlVariant = 'primary',
  controlSize = 'xs',
  onSlideChange,
}) => {
  const autoPlayInterval = 4000;
  const loop = autoPlay;
  const animationDuration = 500;
  const swipeThreshold = 50;
  const preloadRange = 1;
  const trackPadSensitivity = 100;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [isVisible, setIsVisible] = useState(false);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [wheelTimeout, setWheelTimeout] = useState<NodeJS.Timeout | null>(null);
  const [wheelDelta, setWheelDelta] = useState(0);
  const wheelThreshold = trackPadSensitivity;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    const currentObserver = observerRef.current;
    if (currentObserver) {
      observer.observe(currentObserver);
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
      observer.disconnect();
    };
  }, []);

  const shouldLoadImage = useCallback(
    (index: number) => {
      const distance = Math.abs(index - currentIndex);
      return distance <= preloadRange || loadedImages.has(index);
    },
    [currentIndex, loadedImages],
  );

  useEffect(() => {
    setLoadedImages((prevLoadedImages) => {
      const newLoadedImages = new Set(prevLoadedImages);
      for (let i = 0; i < items.length; i++) {
        const distance = Math.abs(i - currentIndex);
        if (distance <= preloadRange) {
          newLoadedImages.add(i);
        }
      }
      return newLoadedImages;
    });
  }, [currentIndex, items.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;

      setIsAnimating(true);
      setCurrentIndex(index);
      onSlideChange?.(index);

      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }

      animationTimerRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration);
    },
    [currentIndex, isAnimating, onSlideChange],
  );

  const goToNext = useCallback(() => {
    const nextIndex =
      currentIndex === items.length - 1 ? (loop ? 0 : currentIndex) : currentIndex + 1;
    if (nextIndex !== currentIndex) goToSlide(nextIndex);
  }, [currentIndex, items.length, loop, goToSlide]);

  const goToPrev = useCallback(() => {
    const prevIndex =
      currentIndex === 0 ? (loop ? items.length - 1 : currentIndex) : currentIndex - 1;
    if (prevIndex !== currentIndex) goToSlide(prevIndex);
  }, [currentIndex, items.length, loop, goToSlide]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (isAnimating) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (wheelTimeout) {
          clearTimeout(wheelTimeout);
        }

        const newDelta = wheelDelta + e.deltaX;
        setWheelDelta(newDelta);

        const timeout = setTimeout(() => {
          if (Math.abs(newDelta) > wheelThreshold) {
            if (newDelta > 0) {
              goToNext();
            } else {
              goToPrev();
            }
          }
          setWheelDelta(0);
        }, 50);

        setWheelTimeout(timeout);
      } else if (Math.abs(e.deltaY) > 50) {
        if (wheelTimeout) {
          clearTimeout(wheelTimeout);
        }

        const newDelta = wheelDelta + e.deltaY;
        setWheelDelta(newDelta);

        const timeout = setTimeout(() => {
          if (Math.abs(newDelta) > wheelThreshold) {
            if (newDelta > 0) {
              goToNext();
            } else {
              goToPrev();
            }
          }
          setWheelDelta(0);
        }, 50);

        setWheelTimeout(timeout);
      }
    },
    [isAnimating, wheelTimeout, wheelDelta, wheelThreshold, goToNext, goToPrev],
  );

  useEffect(() => {
    const currentSlider = sliderRef.current;
    if (!currentSlider) return;

    currentSlider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (currentSlider) {
        currentSlider.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (isAnimating) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      setTouchStart({ x: clientX, y: clientY });
      setTouchEnd(null);
      setIsDragging(true);
    },
    [isAnimating],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!touchStart || isAnimating) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      setTouchEnd({ x: clientX, y: clientY });
    },
    [touchStart, isAnimating],
  );

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || isAnimating) {
      setIsDragging(false);
      return;
    }

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY && absDeltaX > swipeThreshold) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  }, [touchStart, touchEnd, goToNext, goToPrev, isAnimating]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleTouchStart(e);
    },
    [handleTouchStart],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleTouchMove(e);
    },
    [isDragging, handleTouchMove],
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    handleTouchEnd();
  }, [isDragging, handleTouchEnd]);

  useEffect(() => {
    if (autoPlay && isVisible && !isAnimating && !isDragging && wheelTimeout === null) {
      autoPlayTimerRef.current = setInterval(goToNext, autoPlayInterval);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, isVisible, goToNext, isAnimating, isDragging, wheelTimeout]);

  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [wheelTimeout]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleTouchMove({
        clientX: e.clientX,
        clientY: e.clientY,
        preventDefault: () => {},
      } as React.MouseEvent);
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      handleTouchEnd();
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case ' ':
          e.preventDefault();
          goToNext();
          break;
      }
    };

    const currentSlider = sliderRef.current;
    if (currentSlider) {
      currentSlider.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentSlider) {
        currentSlider.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [goToNext, goToPrev, isAnimating]);

  const getSlideStyle = (index: number) => {
    const isVisible = Math.abs(index - currentIndex) <= 1;
    const baseStyle = {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: isVisible ? 1 : 0,
    };

    if (animationType === 'fade') {
      return {
        ...baseStyle,
        opacity: index === currentIndex ? 1 : 0,
        transition: `opacity ${animationDuration}ms ease-in-out`,
      };
    }

    const offset = (index - currentIndex) * 100;
    return {
      ...baseStyle,
      transform: `translateX(${offset}%)`,
      transition: `
        transform ${animationDuration}ms ease-in-out,
        opacity ${animationDuration}ms ease-in-out
      `,
    };
  };

  const handleSliderKeyDown = (e: React.KeyboardEvent) => {
    if (isAnimating) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case ' ':
        e.preventDefault();
        goToNext();
        break;
    }
  };

  return (
    <div ref={observerRef} className={cn('relative h-full w-full', className)}>
      <div
        className={cn(
          'relative h-full w-full overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          'cursor-grab active:cursor-grabbing',
          className,
          animationType === 'fade' && 'fade-slider',
        )}
        tabIndex={0}
        role="button"
        aria-label="Image slider"
        aria-roledescription="carousel"
        onKeyDown={handleSliderKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          ref={sliderRef}
          className={cn(
            'relative h-full w-full',
            animationType === 'slide' && 'flex transition-transform duration-500 ease-in-out',
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'absolute inset-0',
                animationType === 'fade' && 'transition-opacity',
                animationType === 'slide' && 'transform transition-transform',
              )}
              style={getSlideStyle(index)}
              aria-hidden={index !== currentIndex}
            >
              {shouldLoadImage(index) ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  loading={index === currentIndex ? 'eager' : 'lazy'}
                />
              ) : (
                <div className="flex h-full w-full animate-pulse items-center justify-center bg-gray-200">
                  <div className="text-sm text-gray-400">Loading...</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showArrows && items.length > 1 && (
          <>
            <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform">
              <IconButton
                variant={controlVariant}
                size={controlSize}
                icon={
                  <ChevronLeft size={controlSize === 'lg' ? 24 : controlSize === 'sm' ? 16 : 20} />
                }
                onClick={goToPrev}
                disabled={!loop && currentIndex === 0}
                aria-label="Previous image"
                className="bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl"
              />
            </div>
            <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform">
              <IconButton
                variant={controlVariant}
                size={controlSize}
                icon={
                  <ChevronRight size={controlSize === 'lg' ? 24 : controlSize === 'sm' ? 16 : 20} />
                }
                onClick={goToNext}
                disabled={!loop && currentIndex === items.length - 1}
                aria-label="Next image"
                className="bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl"
              />
            </div>
          </>
        )}

        {showDots && items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-1.5">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-1.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  index === currentIndex
                    ? 'card-slider-highlight-gradient w-16 shadow-lg focus:ring-primary-500'
                    : 'w-3 bg-white/40 hover:bg-white/60 focus:ring-white',
                )}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        )}

        {!loadedImages.has(currentIndex) && (
          <div className="z-5 absolute inset-0 flex animate-pulse items-center justify-center bg-gray-100">
            <div className="text-gray-500">Loading image...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSlider;
