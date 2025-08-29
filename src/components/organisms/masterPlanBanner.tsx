'use client';
import Image from 'next/image';
import React, { memo, type FC } from 'react';
import { Button } from '../atoms/buttons';
import { ChevronRight, MapPin } from 'lucide-react';
import { MasterPlanBannerProps } from '@/interfaces/property.interface';
import useMobileDetection from '@/hooks/useMobileDetection';

const MasterPlanBanner: FC<MasterPlanBannerProps> = ({
  bannerSectionHeader,
  bannerSectionCta,
  bannerSectionImageUrl,
  bannerSectionDescription,
  bannerSectionFeatures,
}) => {
  const isMobile = useMobileDetection();
  return (
    <section className="bg-grey-50 py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <h3 className="mb-4 font-heading text-heading-xl font-bold md:text-heading-2xl">
          {bannerSectionHeader}
        </h3>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="relative h-[250px] w-full md:h-[563px]">
            <Image
              src={bannerSectionImageUrl}
              alt={bannerSectionHeader}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-6">
              <p className="max-w-4xl font-body text-paragraph-xs md:text-paragraph-md">
                {bannerSectionDescription}
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:flex lg:max-w-4xl lg:gap-6">
                {bannerSectionFeatures.map((feature) => (
                  <div key={feature.title} className="flex flex-col gap-2 lg:flex-row">
                    <div className="h-5 w-5 shrink-0 md:h-6 md:w-6">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-sans text-label-sm font-semibold text-grey-500 lg:text-label-md">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-label-xs font-medium text-grey-500 lg:text-label-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Button variant="primary" size={isMobile ? 'sm' : 'lg'}>
                {bannerSectionCta}
              </Button>
              {bannerSectionFeatures ? (
                ''
              ) : (
                <Button
                  variant="primary-outline"
                  size={isMobile ? 'sm' : 'lg'}
                  rightIcon={<ChevronRight />}
                  className="ml-4 text-primary-500"
                >
                  View in detail
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MasterPlanBanner);
