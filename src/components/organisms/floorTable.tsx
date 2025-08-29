import { FloorTableProps } from '@/interfaces/property.interface';
import React, { memo } from 'react';
import { Button } from '../atoms/buttons';

const FloorTable: React.FC<FloorTableProps> = ({
  unitSizesSectionHeading,
  unitSizesWithinTower,
}) => {
  return (
    <section className="hidden bg-grey-50 py-16 lg:block lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <h2 className="mb-4 font-heading text-heading-2xl font-bold text-grey-600">
          {unitSizesSectionHeading}
        </h2>
        <div className="hidden max-w-3xl overflow-x-auto rounded-2xl border border-grey-200 shadow-sm lg:block">
          <table className="w-full border-collapse">
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
              {unitSizesWithinTower.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-grey-50' : 'bg-grey-100'} border border-accent-300 text-subheading-sm font-semibold`}
                >
                  <td className="px-6 py-4 text-grey-600 md:w-fit md:px-4 md:py-2">
                    {item.configurationType}
                  </td>
                  <td className="px-6 py-4 text-sm text-grey-400 md:w-fit md:px-4 md:py-2">
                    {item.carpetAreaApprox}
                  </td>
                  <td className="px-6 py-4 text-sm md:w-fit md:px-4 md:py-2">
                    {item.price.startsWith('₹') ? (
                      // TODO text-[#2961CB]
                      <span className="font-medium text-[#2961CB]">{item.price}</span>
                    ) : (
                      <span className="text-grey-400">{item.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 md:w-fit md:px-4 md:py-2">
                    <Button variant="primary-outline" className="rounded-md text-primary-500">
                      {item.priceEnquireLabel}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default memo(FloorTable);
