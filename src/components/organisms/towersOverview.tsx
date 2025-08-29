'use client';
import { TowersOverviewSectionProps } from '@/interfaces/property.interface';
import { CardSlider } from '../atoms/cardSlider';
import TowerUnitSizes from './towerUnitSizes';
import TowerAmenities from './towerAmenities';
import TowerTable from './towerTable';
import { memo } from 'react';

const TowersOverviewSection: React.FC<TowersOverviewSectionProps> = ({
  towerSectionHeading,
  towerSectionDescription,
  towerSectionTableDescription,
  towerSectionTableDetails,
  towerSectionAmenitiesHeading,
  towerSectionAmenitiesPoints,
  towerSectionSliderImages,
  towerSectionUnitsSizes,
  towerSectionUnitSizesHeading,
  towerSectionUnitSizesSubHeading,
}) => {
  return (
    <section className="relative bg-grey-50 py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-6">
              <div className="hidden flex-col gap-4 md:flex lg:gap-2">
                <h2 className="font-heading text-heading-xl font-bold text-grey-600 lg:text-heading-2xl">
                  {towerSectionHeading}
                </h2>
                <p className="font-sans text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
                  {towerSectionDescription}
                </p>
              </div>
              <TowerTable towerDetails={towerSectionTableDetails} />
              <p className="font-sans text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
                {towerSectionTableDescription}
              </p>
              <TowerAmenities
                amenitiesPoints={towerSectionAmenitiesPoints}
                amenitiesHeading={towerSectionAmenitiesHeading}
              />
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="relative h-[320px] w-full rounded-xl sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px] xl:h-[560px] xl:w-[560px]">
                <CardSlider items={towerSectionSliderImages} showArrows={false} autoPlay />
              </div>
            </div>
          </div>
          <TowerUnitSizes
            towerSectionUnitSizesHeading={towerSectionUnitSizesHeading}
            towerSectionUnitSizesSubHeading={towerSectionUnitSizesSubHeading}
            towerSectionUnitsSizes={towerSectionUnitsSizes}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(TowersOverviewSection);
