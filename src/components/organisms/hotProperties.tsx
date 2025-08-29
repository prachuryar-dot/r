'use client';
import { memo, useState, useMemo, useCallback } from 'react';
import AreaFilterPills from '@/components/molecules/areaFilterPills';
import HotPropertiesSlider from '@/components/molecules/hotPropertiesSlider';
import useMobileDetection from '@/hooks/useMobileDetection';
import { HotPropertiesProps } from '@/props';

const HotPropertiesSection: React.FC<HotPropertiesProps> = ({
  mainHeading,
  description,
  hotProperties,
  areaFilters,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const isMobile = useMobileDetection(768);

  const filteredProperties = useMemo(() => {
    return activeFilter === 'all'
      ? hotProperties
      : hotProperties.filter((property) => property.area === activeFilter);
  }, [activeFilter, hotProperties]);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  return (
    <section id="top-properties" className="bg-grey-50 py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="mb-6 gap-2">
          <div className="mb-4">
            <h2
              id={mainHeading}
              className="text-heading-xl font-bold text-grey-600 lg:text-heading-2xl"
            >
              {mainHeading}
            </h2>
          </div>
          <p className="text-paragraph-xs font-regular text-grey-500 lg:font-body lg:text-paragraph-lg">
            {description}
          </p>
        </div>

        <div className="mb-4 gap-2">
          <AreaFilterPills
            filters={areaFilters}
            selectedFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <HotPropertiesSlider properties={filteredProperties} isMobile={isMobile} />
      </div>
    </section>
  );
};

HotPropertiesSection.displayName = 'HotPropertiesSection';

export default memo(HotPropertiesSection);
