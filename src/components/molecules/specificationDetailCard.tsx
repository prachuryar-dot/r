'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { PropertySpecificationsGalleryShowCaseArea } from '@/interfaces/property.interface';

interface SpecificDetailCardProps {
  detail: PropertySpecificationsGalleryShowCaseArea;
  index: number;
}

const SpecificDetailCard: React.FC<SpecificDetailCardProps> = ({ detail, index }) => {
  const {
    specificationsGalleryTitle,
    specificationsGalleryDescription,
    specificationsGalleryImageUrl,
    specificationsGalleryFeatures,
  } = detail;

  return (
    <section className="pb-8 pt-12 sm:pb-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div
          className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:flex lg:items-start lg:text-left ${
            index % 2 === 1 ? 'md:flex-row-reverse lg:flex-row' : ''
          }`}
        >
          <div className="relative h-[260px] w-full flex-shrink-0 overflow-hidden rounded-[12px] bg-gray-200 sm:h-[300px] md:h-[360px] lg:h-[480px] lg:w-[480px]">
            <Image
              src={specificationsGalleryImageUrl}
              alt={specificationsGalleryTitle}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-1 lg:mt-1">
            <h3 className="mb-3 text-heading-xl font-bold text-grey-600 lg:mb-4 lg:text-heading-2xl">
              {specificationsGalleryTitle}
            </h3>
            <p className="mb-3 text-paragraph-xs font-regular text-grey-500 lg:mb-5 lg:text-paragraph-md">
              {specificationsGalleryDescription}
            </p>

            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {specificationsGalleryFeatures.map((feature, fIndex) => (
                <li
                  key={fIndex}
                  className="rounded-md bg-primary-50 px-4 py-3 text-subheading-xs font-semibold text-primary-600 shadow-sm sm:text-sm lg:py-3 lg:pl-4 lg:pr-5 lg:text-subheading-md"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

SpecificDetailCard.displayName = 'SpecificDetailCard';
export default memo(SpecificDetailCard);
