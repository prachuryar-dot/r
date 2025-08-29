'use client';

import React, { memo, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { BannerProps } from '@/props';

// Components
import LoadingSpinner from './LoadingSpinner';
import SlideBackground from './SlideBackground';
import SlideContent from './SlideContent';
import SlideIndicators from './SlideIndicators';
import StaticBannerContent from './StaticBannerContent';

// Hooks
import { useSlideNavigation } from './useSlideNavigation';
import { useImagePreloader } from './useImagePreloader';
import { useBannerInteractions } from './useBannerInteractions';

// Typography
import Text from '@/components/designSystem/typography/Text';
import { H2 } from '@/components/designSystem/typography';

const HomeBanner: React.FC<BannerProps> = ({
  headingPartOne,
  headingPartTwo,
  description,
  secondHeading,
  slides = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [startSlideTransition, setStartSlideTransition] = useState(false);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const bannerTimerRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const animationDuration = 800;
  const autoPlayInterval = 5000;
  const bannerLoadDelay = 5000;
  const hasSlides = slides && slides.length > 0;

  // Custom hooks
  const { currentIndex, isAnimating, goToSlide, goToNext, goToPrev } = useSlideNavigation({
    slides,
    hasSlides,
    animationDuration,
  });

  const { loadedImages, showSlides } = useImagePreloader({
    slides,
    isBannerLoading,
    hasSlides,
  });

  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleWheel } = useBannerInteractions({
    hasSlides,
    goToNext,
    goToPrev,
  });

  // Intersection Observer for visibility
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

  // Banner loading timer
  useEffect(() => {
    if (!hasSlides) return;

    bannerTimerRef.current = setTimeout(() => {
      setIsBannerLoading(true);
      setStartSlideTransition(true);
    }, bannerLoadDelay);

    return () => {
      if (bannerTimerRef.current) {
        clearTimeout(bannerTimerRef.current);
      }
    };
  }, [hasSlides, bannerLoadDelay]);

  // Image preloading complete handler
  useEffect(() => {
    if (showSlides && isBannerLoading) {
      setIsBannerLoading(false);
    }
  }, [showSlides, isBannerLoading]);

  // Auto-play functionality
  useEffect(() => {
    if (isVisible && !isAnimating && hasSlides && showSlides && loadedImages.size > 0) {
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
  }, [
    isVisible,
    goToNext,
    isAnimating,
    hasSlides,
    showSlides,
    loadedImages.size,
    autoPlayInterval,
  ]);

  // Wheel event handler
  useEffect(() => {
    const sectionElement = observerRef.current;
    if (!sectionElement) return;

    const wheelHandler = (e: WheelEvent) => {
      if (!showSlides || isAnimating) return;
      handleWheel(e);
    };

    sectionElement.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      sectionElement.removeEventListener('wheel', wheelHandler);
    };
  }, [handleWheel, showSlides, isAnimating]);

  // Loading state
  if (hasSlides && isBannerLoading && !showSlides) {
    return (
      <section
        ref={observerRef}
        className="relative min-h-[98vh] overflow-hidden pt-16 md:min-h-[94vh] lg:pt-20 xl:min-h-[92vh]"
        role="banner"
        aria-labelledby="homePageBanner"
      >
        <div className="absolute inset-0">
          <div className="bg-home-banner-gradient absolute inset-0" />
        </div>

        <LoadingSpinner
          headingPartOne={headingPartOne}
          headingPartTwo={headingPartTwo}
          description={description}
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="flex min-h-[98vh] items-center justify-start md:min-h-[94vh] xl:min-h-[92vh]">
              <div className="flex max-w-2xl flex-col items-start gap-3 opacity-30 transition-opacity duration-500 sm:gap-4 md:max-w-3xl lg:max-w-4xl">
                <H2 className="flex flex-col text-accent-50">
                  <span>{headingPartOne}</span>
                  <span className="bg-home-banner-text-gradient bg-clip-text text-transparent">
                    {headingPartTwo}
                  </span>
                </H2>
                <Text variant="paragraph" size="sm" className="text-accent-600">
                  {description}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Slideshow with images
  if (hasSlides && showSlides) {
    return (
      <section
        ref={observerRef}
        className={cn(
          'duration-800 relative min-h-[98vh] overflow-hidden pt-16 transition-opacity ease-in-out md:min-h-[94vh] lg:pt-20 xl:min-h-[92vh]',
          startSlideTransition ? 'opacity-100' : 'opacity-0',
        )}
        role="banner"
        aria-labelledby="homePageBanner"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <SlideBackground slides={slides} currentIndex={currentIndex} loadedImages={loadedImages} />

        <SlideContent slides={slides} currentIndex={currentIndex} description={description} />

        <SlideIndicators
          slides={slides}
          currentIndex={currentIndex}
          onSlideSelect={goToSlide}
          isAnimating={isAnimating}
        />
      </section>
    );
  }

  // Static banner (no slides)
  return (
    <section
      ref={observerRef}
      className="duration-800 relative min-h-[98vh] overflow-hidden pt-16 opacity-100 transition-all ease-in-out md:min-h-[94vh] lg:pt-20 xl:min-h-[92vh]"
      role="banner"
      aria-labelledby="homePageBanner"
    >
      <div className="absolute inset-0">
        <div className="bg-home-banner-gradient absolute inset-0" />
      </div>

      <StaticBannerContent
        headingPartOne={headingPartOne}
        headingPartTwo={headingPartTwo}
        description={description}
        secondHeading={secondHeading}
      />
    </section>
  );
};

HomeBanner.displayName = 'HomeBanner';

export default memo(HomeBanner);
