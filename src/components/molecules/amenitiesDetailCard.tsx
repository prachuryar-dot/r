'use client';

import { useState, memo } from 'react';
import { Button } from '../atoms/buttons';
import { CardSlider } from '../atoms/cardSlider';
import { PropertyAmenitiesGallerySection } from '@/interfaces/property.interface';
import { MapPin } from 'lucide-react';
const AmenitiesDetailsSection = memo<{
  amenities: PropertyAmenitiesGallerySection;
  index: number;
}>(({ amenities, index }) => {
  const {
    amenitiesGalleryTitle,
    amenitiesGalleryDescription,
    amenitiesGalleryAttractions,
    amenitiesGallerySlideImages,
    amenitiesGallerySecondHeading,
    communityAmenities,
  } = amenities;

  const [isViewMoreClicked, setIsViewMoreClicked] = useState(false);

  const displayedAmenities = communityAmenities
    ? isViewMoreClicked
      ? communityAmenities
      : communityAmenities.slice(0, 6)
    : [];

  return (
    <section className="pb-8 pt-12 sm:pb-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div
          className={`lg:gap-15 mt-12 flex flex-col items-center gap-8 md:gap-12 lg:min-h-[85vh] lg:flex-row lg:items-start lg:text-left ${
            index % 2 === 1 ? 'flex-row-reverse lg:flex-row' : ''
          }`}
        >
          <div className="h-[260px] w-full rounded-[12px] sm:h-[300px] md:top-20 md:h-[360px] lg:sticky lg:top-24 lg:h-[480px] lg:w-[480px]">
            <CardSlider
              items={amenitiesGallerySlideImages}
              autoPlay={true}
              showDots
              showArrows={false}
              animationType="slide"
              controlVariant="light"
              controlSize="sm"
              className="h-full w-full"
            />
          </div>

          <div className="flex-1 lg:mt-1">
            <h3 className="mb-3 text-heading-md font-bold text-grey-600 lg:mb-4 lg:text-heading-2xl">
              {amenitiesGalleryTitle}
            </h3>
            <p className="mb-4 text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
              {amenitiesGalleryDescription}
            </p>

            {!!amenitiesGalleryAttractions?.length && (
              <ul className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3 lg:gap-5">
                {amenitiesGalleryAttractions.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="rounded-md bg-primary-50 px-3 py-4 text-subheading-xs font-semibold text-primary-600 shadow-sm lg:text-subheading-md"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <p className="mb-3 text-heading-md font-bold text-grey-600 lg:mb-4 lg:text-heading-xl">
              {amenitiesGallerySecondHeading}
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:hidden">
              {displayedAmenities.map((item, idx) => (
                <li
                  key={idx}
                  className="p-1 text-label-sm font-semibold text-grey-500 lg:text-label-md"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    {item}
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-4 hidden gap-5 lg:grid lg:grid-cols-3">
              {communityAmenities?.map((item, idx) => (
                <li
                  key={idx}
                  className="p-1 text-label-sm font-semibold text-grey-500 lg:text-label-md"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    {item}
                  </div>
                </li>
              ))}
            </ul>

            {!isViewMoreClicked && (communityAmenities?.length ?? 0) > 6 && (
              <div className="lg:hidden">
                <Button
                  variant="secondary-outline"
                  size="md"
                  className="mt-4 px-3 py-2 text-label-sm font-semibold text-accent-1000 sm:mt-6"
                  onClick={() => setIsViewMoreClicked(true)}
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

AmenitiesDetailsSection.displayName = 'AmenitiesDetailsSection';
export default AmenitiesDetailsSection;
