'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { PropertySpecificationsBannerSection } from '@/interfaces/property.interface';

const SpecificBannerSection: React.FC<PropertySpecificationsBannerSection> = ({
  specificationsBannerSectionTitle,
  specificationsBannerSectionDescription,
  specificationsBannerSectionImageUrl,
  specificationsBannerSectionMobileImageUrl,
}) => {
  return (
    <section className="bg-grey-50 pb-8 pt-20 sm:pb-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <h2 className="mb-3 text-heading-xl font-bold text-grey-600 lg:mb-4 lg:text-heading-2xl">
          {specificationsBannerSectionTitle}
        </h2>
        <p className="mb-4 max-w-4xl text-paragraph-xs font-medium text-grey-500 lg:mb-10 lg:text-paragraph-md">
          {specificationsBannerSectionDescription}
        </p>
        <div className="relative mb-10 h-[302px] overflow-hidden rounded-[12px] bg-gray-200 shadow-md lg:mb-16 lg:h-[480px] lg:w-full">
          <Image
            src={specificationsBannerSectionMobileImageUrl}
            alt={specificationsBannerSectionTitle}
            fill
            className="object-cover lg:hidden"
            loading="lazy"
          />

          <Image
            src={specificationsBannerSectionImageUrl}
            alt={specificationsBannerSectionTitle}
            fill
            className="hidden object-cover lg:block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

SpecificBannerSection.displayName = 'SpecificBannerSection';
export default memo(SpecificBannerSection);
