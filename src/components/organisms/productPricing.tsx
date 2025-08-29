'use client';

import { ProductPricingProps } from '@/interfaces/property.interface';
import { memo } from 'react';
import PricingEnquiryCard from '../molecules/productPricing/pricingEnquiryCard';
import PricingLgTable from '../molecules/productPricing/pricingLgTable';
import PricingSmallTable from '../molecules/productPricing/pricingSmallTable';

const ProductPricing: React.FC<ProductPricingProps> = ({
  pricingTitle,
  pricingDescription,
  pricingImageUrl,
  completeCostingDetailsLabel,
  pricingEnquireNowCta,
  pricingData,
}) => {
  return (
    <section className="relative bg-grey-50 py-16 lg:py-24">
      <div className="mx-auto flex max-w-8xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8 xl:px-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:gap-2">
            <h2 className="font-heading text-heading-xl font-bold text-grey-600 lg:text-heading-2xl">
              {pricingTitle}
            </h2>
            <p className="font-sans text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
              {pricingDescription}
            </p>
          </div>
          <PricingSmallTable priceDetails={pricingData} />
          <PricingLgTable priceDetails={pricingData} />
        </div>
        <PricingEnquiryCard
          priceImageUrl={pricingImageUrl}
          productPricingCtaText={pricingEnquireNowCta}
          completeCostingDetailsLabel={completeCostingDetailsLabel}
        />
      </div>
    </section>
  );
};

export default memo(ProductPricing);
