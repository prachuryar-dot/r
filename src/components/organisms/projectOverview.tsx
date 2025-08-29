'use client';

import { ProjectOverviewProps } from '@/interfaces/property.interface';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import { memo, useState } from 'react';
import { Button } from '../atoms/buttons';

const MAX_VISIBLE_MOBILE_FEATURES = 6;

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  projectOverviewLabel,
  projectWalkthroughLabel,
  projectOverviewDescription,
  propertySpecifications,
  isReraCertified,
  reraLogo,
  reraCertifiedLabel,
  reraNumberLabel,
  projectReraNumber,
  keyProjectDatesTitle,
  keyProjectDates,
  projectOverviewImageUrl,
  projectOverviewViewMoreCta,
}) => {
  const [showAllEstateFeatures, setShowAllEstateFeatures] = useState(false);

  const visibleSpecifications = showAllEstateFeatures
    ? propertySpecifications
    : propertySpecifications.slice(0, 6);

  return (
    <section className="px-4 py-20 md:px-10 lg:px-20 lg:py-28">
      <h3 className="mb-4 font-heading text-heading-xl font-bold md:text-heading-2xl">
        {projectOverviewLabel}
      </h3>
      <div className="flex w-full flex-col gap-4 md:flex-row-reverse md:gap-16">
        <div className="flex w-full flex-shrink-0 flex-col gap-4 md:w-[479px]">
          <h3 className="hidden font-heading text-heading-lg font-bold md:block">
            {projectWalkthroughLabel}
          </h3>

          <div className="relative h-[223px] md:h-[295px]">
            <Image
              src={projectOverviewImageUrl}
              alt={projectOverviewLabel}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <p className="font-body text-paragraph-xs text-grey-500 md:text-paragraph-md">
            {projectOverviewDescription}
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {visibleSpecifications.map((spec, index) => {
              const icon = spec.displayIcon ?? <MapPin />;

              return (
                <div
                  key={spec.id}
                  className={`flex items-start gap-1 ${
                    index >= MAX_VISIBLE_MOBILE_FEATURES && !showAllEstateFeatures
                      ? 'hidden md:flex'
                      : ''
                  }`}
                >
                  <div className="h-5 w-5 shrink-0 md:h-6 md:w-6">{icon}</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-nowrap font-body text-heading-sm font-bold text-grey-500 md:text-heading-md">
                      {spec.value}
                    </span>
                    <span className="text-nowrap text-paragraph-xs text-grey-500 md:text-paragraph-md">
                      {spec.displayText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {!showAllEstateFeatures && propertySpecifications.length > 6 && (
            <div className="sm:hidden">
              <Button
                variant="secondary-outline"
                onClick={() => setShowAllEstateFeatures(true)}
                className="border border-accent-1000 px-4 py-2 font-body text-paragraph-sm font-semibold text-accent-1000"
              >
                {projectOverviewViewMoreCta}
              </Button>
            </div>
          )}

          {isReraCertified && (
            <div className="my-10 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src={reraLogo}
                  alt="RERA"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full"
                />
                <span className="font-body text-heading-md font-bold text-primary-500">
                  {reraCertifiedLabel}
                </span>
              </div>
              <span className="w-full rounded-lg bg-primary-50 px-4 py-2.5 text-center text-paragraph-xs font-semibold text-primary-600 md:w-[473px] md:text-paragraph-md">
                {reraNumberLabel} {projectReraNumber}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-accent-1000 px-4 py-6 md:gap-6">
        <div className="flex items-center gap-1 font-heading text-heading-md font-bold text-white md:text-heading-lg">
          <CalendarDays className="h-5 w-5 md:h-6 md:w-6" />
          {keyProjectDatesTitle}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {keyProjectDates.map((date) => (
            <div key={date.id} className="flex flex-col gap-1">
              <span className="font-body text-paragraph-sm font-semibold text-primary-500 md:text-paragraph-lg">
                {date.title}
              </span>
              <span className="font-body text-paragraph-xs text-white md:text-paragraph-md">
                {date.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectOverview);
