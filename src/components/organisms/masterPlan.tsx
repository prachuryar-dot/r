'use client';
import { MasterPlanProps } from '@/interfaces/property.interface';
import { memo, useState } from 'react';
import Image from 'next/image';
import { Button } from '../atoms/buttons';
import { MapPin } from 'lucide-react';
import useMobileDetection from '@/hooks/useMobileDetection';

const MasterPlan: React.FC<{ masterPlan: MasterPlanProps }> = ({ masterPlan }) => {
  const isMobile = useMobileDetection();

  const [isViewMoreClicked, setIsViewMoreClicked] = useState(false);
  return (
    <section className="bg-grey-50 pb-10 pt-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="space-y-12 sm:space-y-16">
          <div
            className={`grid items-center md:flex-row-reverse lg:flex-row lg:items-start lg:text-left`}
          >
            <h3 className="mb-4 text-heading-xl font-bold text-grey-600 lg:mb-6 lg:text-heading-2xl">
              {masterPlan.featuresSectionTittle}
            </h3>
            <div className="relative mb-4 h-[163px] w-full max-w-[1297px] overflow-hidden rounded-[12px] lg:mb-6 lg:h-[480px]">
              <Image
                src={masterPlan.featuresSectionBannerImageUrl}
                alt={masterPlan.featuresSectionTittle}
                fill
                className="rounded-[12px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex-1 lg:mt-1">
              <div className="flex-1 lg:mt-1">
                <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <p className="mb-4 text-paragraph-xs font-regular text-grey-500 lg:mb-0 lg:flex-[0_0_60%] lg:text-paragraph-md">
                    {masterPlan.featuresSectionDescription}
                  </p>
                  <div className="lg:flex lg:flex-[0_0_40%] lg:justify-end">
                    <Button size={isMobile ? 'sm' : 'lg'}>Enquire now</Button>
                  </div>
                </div>
              </div>

              <p className="mb-3 text-heading-md font-bold text-grey-600 lg:mb-4 lg:text-heading-xl">
                {masterPlan.featuresSectionFeaturesHeading}
              </p>

              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:hidden">
                {(isViewMoreClicked
                  ? masterPlan.featuresSectionFeatureRichSpaces
                  : masterPlan.featuresSectionFeatureRichSpaces.slice(0, 6)
                ).map((pItem, pIndex) => (
                  <li key={pIndex} className="p-1 text-label-sm font-semibold text-grey-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                      {pItem}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2">
                <ul className="mb-10 mt-4 hidden gap-4 lg:grid lg:grid-cols-3">
                  {masterPlan.featuresSectionFeatureRichSpaces.map((pItem, pIndex) => (
                    <li
                      key={pIndex}
                      className="p-1 text-label-sm font-semibold text-grey-500 lg:text-label-md"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-6 w-6" />
                        {pItem}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:hidden">
                {!isViewMoreClicked && masterPlan.featuresSectionFeatureRichSpaces.length > 6 && (
                  <div className="lg:hidden">
                    <Button
                      variant="secondary-outline"
                      size="md"
                      className="mb-10 mt-4 px-3 py-2 text-label-sm font-semibold text-accent-1000 sm:mt-6"
                      onClick={() => setIsViewMoreClicked(true)}
                    >
                      View More
                    </Button>
                  </div>
                )}
              </div>

              <p className="mb-4 text-heading-md font-bold text-grey-600 lg:mb-4 lg:text-paragraph-xl">
                {masterPlan.featuresSectionAccessibilityHeading}
              </p>
              <ul className="list-disc pl-4 text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
                {masterPlan.featuresSectionAccessibilityLayoutStrategies.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MasterPlan);
