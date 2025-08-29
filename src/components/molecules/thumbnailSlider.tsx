import { memo, useRef, useCallback, useEffect } from 'react';
import LatestLaunchesCard from './latestLaunchesCard';
import { ThumbnailSliderProps } from '@/props';

const ThumbnailSlider = memo<ThumbnailSliderProps>(({ properties, activeIndex }) => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isUserInteracting = useRef(false);

  const handleUserInteraction = useCallback(() => {
    isUserInteracting.current = true;
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    if (isUserInteracting.current) return;

    const activeEl = itemRefs.current[activeIndex];
    const container = containerRef.current;

    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const isContainerVisible = containerRect.top < window.innerHeight && containerRect.bottom > 0;

      if (isContainerVisible) {
        const activeElRect = activeEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollLeft =
          activeEl.offsetLeft -
          container.offsetLeft -
          containerRect.width / 2 +
          activeElRect.width / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide flex gap-3 overflow-x-auto md:ml-0"
      onMouseEnter={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
      {properties.map((property, index) => (
        <div
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          key={property.id}
          // onClick={() => {
          //   handleUserInteraction();
          //   onThumbnailClick(index);
          // }}
          // onMouseEnter={() => {
          //   handleUserInteraction();
          //   onThumbnailHover(index);
          // }}
          className={`flex-shrink-0 rounded-3xl transition-all duration-300 ${
            activeIndex === index
              ? 'border-primary-400'
              : 'bg-grey-50 hover:ring-2 hover:ring-amber-300 hover:ring-offset-2'
          }`}
          aria-label={`View ${property.title} details`}
          aria-pressed={activeIndex === index}
        >
          <LatestLaunchesCard property={property} isActive={activeIndex === index} />
        </div>
      ))}
    </div>
  );
});

ThumbnailSlider.displayName = 'ThumbnailSlider';

export default ThumbnailSlider;
