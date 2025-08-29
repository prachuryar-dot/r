'use client';

import React, { memo } from 'react';
import { FloorFeaturesProps } from '@/interfaces/property.interface';
import FloorFeatureCard from './floorFeatureCard';

const FloorFeatures: React.FC<FloorFeaturesProps> = ({
  designAndQualitySectionHeading,
  designAndQualitySectionFeatures,
}) => {
  return (
    <section className="bg-accent-1000 pb-10 pt-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <h3 className="mb-4 text-nowrap font-heading text-heading-xl font-bold text-grey-50 md:text-heading-2xl">
          {designAndQualitySectionHeading}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-y-10 md:mt-8 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
          {designAndQualitySectionFeatures.map((feature) => (
            <FloorFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FloorFeatures);
