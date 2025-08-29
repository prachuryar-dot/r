import { ProductPricingTableItem } from '@/interfaces/property.interface';
import { memo } from 'react';
import EnquireNowModalButton from '../modal/EnquireNowModalButton';

const PricingLgTable: React.FC<{ priceDetails: ProductPricingTableItem[] }> = ({
  priceDetails,
}) => {
  return (
    <div className="hidden overflow-x-auto rounded-2xl border border-grey-200 shadow-sm lg:block">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-grey-900 border bg-accent-1000 font-heading text-grey-100">
            <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit">
              Configuration Type
            </th>
            <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit">
              Carpet Area Approx*
            </th>
            <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit">
              Price
            </th>
            <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit">
              Price Enquire
            </th>
          </tr>
        </thead>
        <tbody>
          {priceDetails.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-grey-50' : 'bg-grey-100'} border border-accent-300 text-subheading-sm font-semibold`}
            >
              <td className="px-6 py-4 text-grey-600 md:w-fit md:px-4 md:py-2">
                {item.pricingConfigType}
              </td>
              <td className="px-6 py-4 text-sm text-grey-400 md:w-fit md:px-4 md:py-2">
                {item.pricingCarpetApproxArea}
              </td>
              <td className="px-6 py-4 text-sm md:w-fit md:px-4 md:py-2">
                {item.price.startsWith('₹') ? (
                  <span className="font-medium text-[#2961CB]">{item.price}</span>
                ) : (
                  <span className="text-grey-400">{item.price}</span>
                )}
              </td>
              <td className="px-6 py-4 md:w-fit md:px-4 md:py-2">
                <EnquireNowModalButton variant="primary-outline" className="text-primary-500">
                  {item.pricingEnquireCtaText}
                </EnquireNowModalButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(PricingLgTable);
