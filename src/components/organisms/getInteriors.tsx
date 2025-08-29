'use client';
import React, { memo } from 'react';
import { ChevronRight } from 'lucide-react';
// import { Button } from '../atoms/buttons';
import { GetInteriorsSectionProps } from '@/props';
import Image from 'next/image';
import useMobileDetection from '@/hooks/useMobileDetection';
import { RealEstateFeatureButton } from '../molecules/modal/ModalButtons';

const GetInteriors: React.FC<GetInteriorsSectionProps> = memo(
  ({ mainHeading, description, ctaText, desktopBannerImageUlr, mobileBannerImageUlr }) => {
    const isMobile = useMobileDetection();

    return (
      <>
        <div className="relative h-52 w-full lg:hidden">
          <Image
            src={mobileBannerImageUlr}
            alt="LoanBanner image"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <section
          className={`relative bg-cover bg-center bg-no-repeat pb-16 pt-12`}
          aria-labelledby="interiors-heading"
        >
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <Image
              src={desktopBannerImageUlr}
              fill
              className="absolute inset-0 z-0 object-cover transition-opacity duration-1000 ease-in-out"
              quality={90}
              sizes="100vw"
              alt={'LoanBanner image'}
            />
            <div className="flex flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-16">
              <div className="flex min-w-0 flex-1 flex-col justify-between md:max-w-[671px]">
                <article className="z-10 flex flex-col lg:gap-3">
                  <h2
                    id="interiors-heading"
                    className="font-heading text-heading-xl font-bold text-grey-50 lg:text-heading-3xl"
                  >
                    {mainHeading}
                  </h2>
                  <p className="font-body text-paragraph-md font-medium text-grey-50 md:text-paragraph-lg lg:text-subheading-lg">
                    {description}
                  </p>
                </article>

                <div className="mt-6 lg:mt-12">
                  <RealEstateFeatureButton
                    feature="INTERIOR_DETAILS"
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                    variant="light"
                    aria-label="Book a visit to explore interior design options"
                    size={isMobile ? 'sm' : 'lg'}
                  >
                    {ctaText}
                  </RealEstateFeatureButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
);

GetInteriors.displayName = 'GetInteriors';

export default GetInteriors;
