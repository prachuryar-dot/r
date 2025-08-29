'use client';
import { memo, useState, useEffect, useCallback } from 'react';
import { LatestLaunchSlider, CategoryTabs, ThumbnailSlider } from '@/components';
import { LatestLaunchesSectionProps } from '@/props';

const LatestLaunchesSection: React.FC<LatestLaunchesSectionProps> = memo(
  ({ heading, categories, properties }) => {
    const [activeCategory, setActiveCategory] = useState('new-launches');
    const [activeSlide, setActiveSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const filteredProperties = properties.filter(
      (property) => property.category === activeCategory,
    );
    const currentProperty = filteredProperties[activeSlide] || filteredProperties[0];

    useEffect(() => {
      if (isHovered || filteredProperties.length <= 1) return;

      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev >= filteredProperties.length - 1 ? 0 : prev + 1));
      }, 4000);

      return () => clearInterval(timer);
    }, [isHovered, filteredProperties.length]);

    useEffect(() => {
      setActiveSlide(0);
    }, [activeCategory]);

    const handleCategoryChange = useCallback((categoryId: string) => {
      setActiveCategory(categoryId);
    }, []);

    const handleThumbnailClick = useCallback((index: number) => {
      setActiveSlide(index);
    }, []);

    const handleThumbnailHover = useCallback((index: number) => {
      setActiveSlide(index);
    }, []);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    if (!currentProperty) return null;

    return (
      <section id="latest-launches" className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex w-full flex-col text-center">
            <h2 className="mb-3 text-start text-heading-xl font-bold sm:text-4xl md:mb-8 md:text-center md:text-heading-3xl lg:text-5xl">
              {heading}
            </h2>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div
            className="space-y-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <LatestLaunchSlider property={currentProperty} />

            <div className="space-y-4">
              <ThumbnailSlider
                properties={filteredProperties}
                activeIndex={activeSlide}
                onThumbnailClick={handleThumbnailClick}
                onThumbnailHover={handleThumbnailHover}
              />
            </div>
          </div>
        </div>
      </section>
    );
  },
);

LatestLaunchesSection.displayName = 'LatestLaunchesSection';

export default LatestLaunchesSection;
