'use client';

import { ProductPricingTableItem } from '@/interfaces/property.interface';
import { memo } from 'react';
import EnquireNowModalButton from '../modal/EnquireNowModalButton';

const PricingSmallTable: React.FC<{ priceDetails: ProductPricingTableItem[] }> = ({
  priceDetails,
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:hidden">
      {priceDetails.map((priceDetail) => (
        <div
          key={priceDetail.pricingId}
          className="flex flex-col justify-between gap-6 rounded-xl border border-grey-100 p-3"
        >
          <div className="flex flex-col gap-1 font-sans font-semibold">
            <h3 className="text-subheading-md text-grey-600">{priceDetail.pricingConfigType}</h3>
            <h4 className="text-subheading-xs text-grey-400">
              {priceDetail.pricingCarpetApproxArea}
            </h4>
            {/* TODO: ADD #2961CB TO LIB */}
            <h4 className="text-subheading-xs font-semibold text-[#2961CB]">{priceDetail.price}</h4>
          </div>
          <EnquireNowModalButton
            variant="primary-outline"
            className="text-label-sm font-semibold text-primary-500"
          >
            {priceDetail.pricingEnquireCtaText}
          </EnquireNowModalButton>
        </div>
      ))}
    </div>
  );
};

export default memo(PricingSmallTable);
