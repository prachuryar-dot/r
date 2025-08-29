'use client';
import React, { memo } from 'react';
import { UnitHighlightsProps } from '@/interfaces/property.interface';
import { CardSlider } from '../atoms/cardSlider';

const UnitHighLights: React.FC<UnitHighlightsProps> = ({
  highlightsSectionHeading,
  highlightsSectionHighlights,
}) => {
  return (
    <section className="bg-grey-50 pb-10 pt-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex flex-col gap-6 lg:gap-24">
          <h2 className="font-heading text-heading-xl font-bold text-grey-600 lg:text-heading-2xl">
            {highlightsSectionHeading}
          </h2>
          <div className="flex flex-col gap-10">
            {highlightsSectionHighlights.map((detail, index) => (
              <div key={index} className="flex flex-col gap-4 lg:flex-row">
                <div className="relative h-[260px] w-full flex-shrink-0 rounded-xl sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[397px] lg:w-[628px]">
                  <CardSlider items={detail.image} showArrows={false} autoPlay />
                </div>

                <div className="flex flex-col gap-3 lg:gap-4">
                  <h3 className="text-heading-md font-bold text-grey-600 lg:mb-4 lg:text-heading-xl">
                    {detail.name}
                  </h3>
                  <p className="text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
                    {detail.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(UnitHighLights);
