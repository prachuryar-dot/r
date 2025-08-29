'use client';
import { ProductPageBannerProps } from '@/interfaces/property.interface';
import { formatCurrency } from '@/lib/utils/url-utils';
import { ArrowDownToLine, ChevronRight, Grip, MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import { Button } from '../atoms/buttons';
import EnquireNowModalButton from '../molecules/modal/EnquireNowModalButton';
import ProductShowcaseButton from '../atoms/productShowCase/ProductShowcaseButton';

const ProductPageBanner: React.FC<Partial<ProductPageBannerProps>> = ({
  headingOne,
  headingTwo,
  mainBannerImageUrl,
  primeLocationAt,
  projectStatusTitle,
  projectStatusValue,
  isReraCertified,
  reraLogo,
  reraCertifiedLabel,
  priceRange,
  grabEarlyBirdAdvantages,
  limitedSlotsAvailable,
  brochureCta,
  bookVisitCta,
  viewAllPhotosCta,
  specifications,
  priceRangeLabel,
  productShowCaseSlides,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const siteInformation = isMobile ? specifications?.slice(0, 4) : specifications;

  return (
    <section className="bg-grey-50 py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-20 xl:px-20">
        <div className="mb-4 md:hidden">
          <h3 className="font-heading text-heading-xl font-bold">
            <span className="text-primary-500">{headingOne}</span>
            {' - '}
            <span className="text-grey-600">{headingTwo}</span>
          </h3>
        </div>
        <div className="flex flex-col gap-4 md:flex-row lg:justify-between">
          <div className="relative h-[300px] w-full overflow-hidden lg:h-[608px] lg:w-[627px] lg:rounded-xl">
            <Image
              className="rounded-xl object-cover"
              src={mainBannerImageUrl as string}
              alt={headingTwo as string}
              fill
            />
            <ProductShowcaseButton
              productShowCaseSlides={productShowCaseSlides}
              variant="light"
              leftIcon={<Grip className="h-4 w-4 lg:h-5 lg:w-5" />}
              className="absolute bottom-6 right-3 font-sans text-label-xs font-semibold lg:px-3 lg:py-2 lg:text-label-sm"
            >
              {viewAllPhotosCta}
            </ProductShowcaseButton>
          </div>

          <div className="flex w-full flex-col gap-4 lg:max-w-[628px] lg:justify-between">
            <div className="flex flex-col gap-6">
              <div className="hidden p-4 md:block">
                <h3 className="font-heading font-bold lg:text-heading-2xl">
                  <span className="text-primary-500">{headingOne}</span>
                  {' - '}
                  <span className="text-grey-600">{headingTwo}</span>
                </h3>
                <p className="hidden font-sans font-regular text-grey-500 md:block lg:text-paragraph-md">
                  {primeLocationAt}
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-lg bg-primary-50 p-4 lg:flex-row-reverse lg:justify-end lg:rounded-lg">
                <div className="flex justify-start gap-2 md:flex-col lg:items-start">
                  <p className="font-sans text-subheading-sm font-semibold text-grey-500 lg:text-label-md">
                    {priceRangeLabel}
                  </p>
                  <p className="font-sans text-subheading-md font-bold text-grey-600 lg:text-subheading-lg">
                    {`${formatCurrency(priceRange?.min || 0)} - ${formatCurrency(priceRange?.max || 0)}`}
                  </p>
                </div>

                <div className="h-px w-full bg-primary-300 md:mr-5 md:h-full md:w-px" />

                <div className="flex items-center justify-between gap-2 lg:w-[50%] lg:flex-col lg:items-start">
                  <p className="font-sans text-subheading-sm font-semibold text-grey-500 lg:text-label-md lg:font-bold">
                    {projectStatusTitle}
                    <span className="text-label-sm font-medium lg:text-label-md">
                      {projectStatusValue}
                    </span>
                  </p>
                  {isReraCertified && (
                    <div className="flex items-center gap-1">
                      <Image
                        src={reraLogo!}
                        alt="RERA"
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-full"
                      />
                      <p className="font-sans text-subheading-xs font-bold text-primary-500 lg:text-subheading-md">
                        {reraCertifiedLabel}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-lg bg-accent-1000 px-4 py-6 lg:gap-20 lg:rounded-lg">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-subheading-md font-bold text-grey-50 lg:text-subheading-2xl">
                  {grabEarlyBirdAdvantages}
                </h3>
                <h3 className="font-sans text-subheading-xs font-semibold text-grey-200 lg:text-subheading-lg">
                  {limitedSlotsAvailable}
                </h3>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="secondary-outline"
                  className="border-grey-50 px-3 py-1.5 font-sans text-label-sm font-semibold text-grey-50 lg:px-6 lg:py-3 lg:text-subheading-lg"
                  leftIcon={<ArrowDownToLine />}
                >
                  {brochureCta}
                </Button>
                <EnquireNowModalButton size={isMobile ? 'sm' : 'lg'} rightIcon={<ChevronRight />}>
                  {bookVisitCta}
                </EnquireNowModalButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 rounded-lg border border-grey-500 px-4 py-3 lg:mt-6 lg:grid-cols-6 lg:gap-6 lg:rounded-xl">
          {siteInformation?.map((item, index) => {
            const icon = item.displayIcon ?? <MapPin />;

            return (
              <div
                key={index}
                className="flex items-start justify-start gap-1 text-grey-500 lg:px-2 lg:py-3"
              >
                <span className="mt-1">{icon}</span>
                <div className="flex flex-col items-start justify-start lg:gap-1">
                  <span className="text-nowrap text-label-sm font-semibold lg:text-label-md">
                    {item.value}
                  </span>
                  <span className="text-label-xs font-medium text-grey-400 lg:text-label-sm">
                    {item.displayText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default memo(ProductPageBanner);
