'use client';

import useMobileDetection from '@/hooks/useMobileDetection';
import { PricingEnquiryCardProps } from '@/interfaces/property.interface';
import Image from 'next/image';
import { memo } from 'react';
import EnquireNowModalButton from '../modal/EnquireNowModalButton';

const PricingEnquiryCard: React.FC<PricingEnquiryCardProps> = ({
  priceImageUrl,
  productPricingCtaText,
  completeCostingDetailsLabel,
}) => {
  const isMobile = useMobileDetection();

  return (
    <div className="mt-16 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
      <div className="flex flex-col gap-4">
        <div className="relative h-56 w-full rounded-xl sm:h-[150px] sm:w-[243px] md:h-[200px] md:w-[324px] lg:h-[250px] lg:w-[405px] xl:h-[296px] xl:w-[479px]">
          <Image alt="Pricing image" src={priceImageUrl} className="rounded-xl object-cover" fill />
        </div>
        <h2 className="text-heading-md font-bold text-grey-600 lg:text-heading-lg">
          {completeCostingDetailsLabel}
        </h2>
      </div>
      <div className="w-fit">
        <EnquireNowModalButton variant="primary" size={isMobile ? 'sm' : 'lg'}>
          {productPricingCtaText}
        </EnquireNowModalButton>
      </div>
    </div>
  );
};

export default memo(PricingEnquiryCard);
