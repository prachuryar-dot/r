'use client';
import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { FinestProjectSliderProps } from '@/props';
import { IconButton } from '../atoms/buttons';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FinestProjectCard from './finestProjectCard';

export const FinestProjectSlider = memo<FinestProjectSliderProps>(({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const slideWidth = 302;
  const gap = 16;

  const getVisibleItemsCount = useCallback(() => {
    if (typeof window === 'undefined') return 4;

    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 4;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newVisibleItems = getVisibleItemsCount();
      setVisibleItems(newVisibleItems);
      setShowControls(projects.length > newVisibleItems);

      if (currentIndex > projects.length - newVisibleItems) {
        setCurrentIndex(Math.max(0, projects.length - newVisibleItems));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.length, currentIndex, getVisibleItemsCount]);

  const handlePrevious = useCallback(() => {
    isClickScrolling.current = true;
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    isClickScrolling.current = true;
    setCurrentIndex((prev) => Math.min(projects.length - visibleItems, prev + 1));
  }, [projects.length, visibleItems]);

  useEffect(() => {
    if (containerRef.current) {
      const scrollLeft = currentIndex * (slideWidth + gap);
      containerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
      const timeout = setTimeout(() => {
        isClickScrolling.current = false;
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, slideWidth, gap]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollLeft = container.scrollLeft;
      const slideIndex = Math.round(scrollLeft / (slideWidth + gap));
      setCurrentIndex(slideIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [slideWidth, gap]);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < projects.length - visibleItems;

  return (
    <>
      <div
        ref={containerRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth py-3 lg:gap-5"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, index) => (
          <FinestProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {showControls && (
        <div className="mt-6 flex justify-end gap-4">
          <IconButton
            onClick={handlePrevious}
            variant="secondary-outline"
            disabled={!canGoPrevious}
            aria-label="Previous developers"
            size="md"
            icon={<ChevronLeft className="h-5 w-5" />}
          ></IconButton>

          <IconButton
            onClick={handleNext}
            variant="secondary-outline"
            disabled={!canGoNext}
            aria-label="Next developers"
            size="md"
            icon={<ChevronRight className="h-5 w-5" />}
          ></IconButton>
        </div>
      )}
    </>
  );
});

FinestProjectSlider.displayName = 'FinestProjectSlider';
