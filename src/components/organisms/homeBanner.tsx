'use client';

import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Calendar, ChevronRight } from 'lucide-react';
import HeroFeatures from '../molecules/heroFeatures';
import { features } from '@/data/homepage';
import { BannerProps } from '@/props';
import { BookVisitButton } from '../molecules/modal/ModalButtons';
import { Button } from '../atoms/buttons';

const HomeBanner: React.FC<BannerProps> = ({
  headingPartOne,
  headingPartTwo,
  description,
  secondHeading,
  slides = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [showSlides, setShowSlides] = useState(false);
  const [isBannerLoading, setIsBannerLoading] = useState(false);
  const [startSlideTransition, setStartSlideTransition] = useState(false);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const bannerTimerRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const lastWheelTime = useRef<number>(0);

  const animationDuration = 800;
  const autoPlayInterval = 5000;
  const bannerLoadDelay = 5000;
  const hasSlides = slides && slides.length > 0;

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

  useEffect(() => {
    if (!isBannerLoading || !hasSlides) return;

    const preloadImages = async () => {
      const LOADING_TIMEOUT = 4000;

      const loadPromises = slides.map((slide, index) => {
        return new Promise<void>((resolve) => {
          let loadedCount = 0;
          const totalImages = slide.collaborationImageUrl ? 3 : 2;
          let isResolved = false;

          const timeoutId = setTimeout(() => {
            if (!isResolved) {
              setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
              isResolved = true;
              resolve();
            }
          }, LOADING_TIMEOUT);

          const checkComplete = () => {
            loadedCount++;
            if (loadedCount === totalImages && !isResolved) {
              clearTimeout(timeoutId);
              setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
              isResolved = true;
              resolve();
            }
          };

          if (typeof window !== 'undefined') {
            const mobileImg = new window.Image();
            mobileImg.onload = checkComplete;
            mobileImg.onerror = () => {
              checkComplete();
            };
            mobileImg.src = slide.mobileBannerUrl;

            const desktopImg = new window.Image();
            desktopImg.onload = checkComplete;
            desktopImg.onerror = () => {
              checkComplete();
            };
            desktopImg.src = slide.desktopBannerUrl;

            if (slide.collaborationImageUrl) {
              const collabImg = new window.Image();
              collabImg.onload = checkComplete;
              collabImg.onerror = () => {
                checkComplete();
              };
              collabImg.src = slide.collaborationImageUrl;
            }
          } else {
            // If running on the server, consider the images as loaded to avoid blocking SSR
            checkComplete();
          }
        });
      });

      try {
        await Promise.all(loadPromises);
      } catch (error) {
        console.error('Error during image preloading:', error);
      }

      setIsBannerLoading(false);
      setTimeout(() => {
        setShowSlides(true);
      }, 100);
    };

    preloadImages();
  }, [isBannerLoading, hasSlides, slides]);

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
      if (!hasSlides || !showSlides || isAnimating) return;

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
    [hasSlides, showSlides, isAnimating, goToNext, goToPrev],
  );

  useEffect(() => {
    const sectionElement = observerRef.current;
    if (!sectionElement) return;

    sectionElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      sectionElement.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  if (hasSlides && isBannerLoading && !showSlides) {
    return (
      <section
        ref={observerRef}
        className="relative h-screen overflow-hidden pt-16 lg:pt-20"
        role="banner"
        aria-labelledby="homePageBanner"
      >
        <div className="absolute inset-0">
          <div className="bg-home-banner-gradient absolute inset-0" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary-400 border-t-transparent"></div>
            <div className="text-lg font-bold text-grey-50 sm:text-xl">Loading Properties</div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="flex h-screen items-center justify-start">
              <div className="flex flex-col items-start gap-3 opacity-30 transition-opacity duration-500 sm:gap-4">
                <h1 className="flex max-w-2xl flex-col font-heading text-heading-xl font-bold text-accent-50 sm:text-heading-2xl lg:max-w-4xl lg:text-heading-3xl xl:text-heading-4xl">
                  <span>{headingPartOne}</span>
                  <span className="bg-home-banner-text-gradient bg-clip-text text-transparent">
                    {headingPartTwo}
                  </span>
                </h1>
                <p className="max-w-xl font-body text-paragraph-sm text-accent-600 sm:max-w-2xl lg:max-w-3xl lg:text-paragraph-md">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (hasSlides && showSlides) {
    return (
      <section
        ref={observerRef}
        className={cn(
          'duration-800 relative h-screen overflow-hidden pt-16 transition-opacity ease-in-out lg:pt-20',
          startSlideTransition ? 'opacity-100' : 'opacity-0',
        )}
        role="banner"
        aria-labelledby="homePageBanner"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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

        <div className="relative z-10 h-screen">
          {slides.map((slide, index) => (
            <div
              key={`content-${slide.id}`}
              className={cn(
                'absolute inset-0 transition-transform duration-700 ease-in-out',
                index === currentIndex
                  ? 'translate-x-0'
                  : index < currentIndex
                    ? '-translate-x-full'
                    : 'translate-x-full',
              )}
            >
              <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
                <div className="flex h-screen items-center justify-start">
                  <div className="flex flex-col items-start gap-3 sm:gap-4">
                    {slide.collaborationImageUrl && (
                      <div className="mb-2 sm:mb-4">
                        <Image
                          src={slide.collaborationImageUrl}
                          alt="Collaboration"
                          width={120}
                          height={38}
                          className="h-8 w-auto object-contain sm:h-10 lg:h-12"
                          priority={index === 0}
                        />
                      </div>
                    )}

                    <h1 className="flex max-w-2xl flex-col font-heading text-heading-xl font-bold text-white sm:text-heading-2xl lg:max-w-4xl lg:text-heading-3xl xl:text-heading-4xl">
                      <span>
                        {slide.bannerHeading}
                        <span className="bg-home-banner-text-gradient bg-clip-text text-transparent">
                          {slide.bannerPropertyLocation}
                        </span>
                      </span>
                    </h1>

                    <p className="max-w-xl font-body text-paragraph-sm text-grey-100 sm:max-w-2xl lg:max-w-3xl lg:text-paragraph-md">
                      {slide.description || description}
                    </p>

                    <div className="mt-4 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:mt-8">
                      <Button
                        variant="light-outline"
                        size="lg"
                        rightIcon={<ChevronRight className="h-4 w-4" />}
                        aria-label="View Property"
                        className="w-full text-green-50 hover:text-gray-950 sm:w-auto"
                      >
                        View Property
                      </Button>
                      <Button
                        variant="primary"
                        size="lg"
                        leftIcon={<Calendar className="h-4 w-4" />}
                        aria-label="Book a property visit"
                        className="w-full sm:w-auto"
                      >
                        Book Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 space-x-1 sm:bottom-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
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
        )}
      </section>
    );
  }

  return (
    <section
      ref={observerRef}
      className="duration-800 relative min-h-screen overflow-hidden pt-16 opacity-100 transition-all ease-in-out lg:pt-20"
      role="banner"
      aria-labelledby="homePageBanner"
    >
      <div className="absolute inset-0">
        <div className="bg-home-banner-gradient absolute inset-0" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex h-screen flex-col justify-center">
            <div className="flex translate-y-0 transform flex-col items-start gap-3 opacity-100 transition-all duration-500 ease-out sm:gap-4">
              <h1 className="flex max-w-2xl flex-col font-heading text-heading-xl font-bold text-accent-50 sm:text-heading-2xl lg:max-w-4xl lg:text-heading-3xl xl:text-heading-4xl">
                <span className="block">{headingPartOne}</span>
                <span className="bg-home-banner-text-gradient block bg-clip-text text-transparent">
                  {headingPartTwo}
                </span>
              </h1>

              <p className="max-w-xl font-body text-paragraph-sm text-accent-600 sm:max-w-2xl lg:max-w-3xl lg:text-paragraph-md">
                {description}
              </p>
            </div>

            <div className="mt-6 flex translate-y-0 transform flex-col items-start gap-4 opacity-100 transition-all delay-100 duration-500 ease-out sm:mt-8 lg:mt-10">
              <BookVisitButton
                variant="primary"
                size="lg"
                aria-label="Book a property visit"
                className="w-full sm:w-auto"
                leftIcon={<Calendar className="h-4 w-4" />}
              />

              <div className="mt-6 sm:mt-8 lg:mt-10">
                <h2 className="mb-3 font-heading text-heading-md font-semibold text-accent-800 sm:mb-4 sm:text-heading-lg lg:mb-6 lg:text-heading-xl">
                  {secondHeading}
                </h2>
                <HeroFeatures features={features} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeBanner.displayName = 'HomeBanner';

export default memo(HomeBanner);
