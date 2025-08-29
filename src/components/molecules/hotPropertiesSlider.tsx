import { memo, useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../atoms/buttons';
import HotPropertyCard from './hotPropertyCard';
import { HotPropertiesSliderProps } from '@/props';

const HotPropertiesSlider = memo<HotPropertiesSliderProps>(({ properties, isMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_expandedCard, setExpandedCard] = useState<number | string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideWidth = isMobile ? 320 : 320;
  const maxSlide = Math.max(0, properties.length - (isMobile ? 1 : 3));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleCardHover = useCallback((id: number | null | string) => {
    setExpandedCard(id);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth',
      });
    }
  }, [currentSlide, slideWidth]);

  if (properties.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center text-gray-500">
        No properties found in this area
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {properties.map((property) => (
          <HotPropertyCard
            key={property.id}
            property={property}
            onHover={handleCardHover}
            isMobile={isMobile}
          />
        ))}
      </div>

      {properties.length > (isMobile ? 1 : 3) && (
        <div className="mt-6 flex justify-end gap-4">
          <IconButton
            onClick={prevSlide}
            variant="secondary-outline"
            size="md"
            disabled={currentSlide === 0}
            aria-label="Previous properties"
            icon={<ChevronLeft className="h-5 w-5" />}
          ></IconButton>

          <IconButton
            onClick={nextSlide}
            variant="secondary-outline"
            size="md"
            disabled={currentSlide === maxSlide}
            aria-label="Next properties"
            icon={<ChevronRight className="h-5 w-5" />}
          ></IconButton>
        </div>
      )}
    </div>
  );
});

HotPropertiesSlider.displayName = 'HotPropertiesSlider';

export default HotPropertiesSlider;
