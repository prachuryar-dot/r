import { TowerDetail } from '@/interfaces/property.interface';
import { memo } from 'react';

const TowerTable: React.FC<{ towerDetails: TowerDetail[] }> = ({ towerDetails }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:hidden">
        {towerDetails.map((towerDetail, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-grey-100 p-3 font-sans"
          >
            <div className="mb-3 flex flex-col gap-1">
              <h3 className="text-subheading-md font-bold text-grey-600">
                {towerDetail.towerRange}
              </h3>
              <h4 className="text-subheading-sm font-medium text-grey-400">{towerDetail.floors}</h4>
            </div>
            <h4 className="text-subheading-xs text-grey-600 md:text-subheading-md md:text-grey-500">
              {towerDetail.specialFeature}
            </h4>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-2xl border border-grey-200 shadow-sm md:block">
        <table className="min-w-full max-w-6xl border-collapse">
          <thead>
            <tr className="bg-grey-900 border bg-accent-1000 font-heading text-grey-100">
              <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit lg:px-4 lg:py-5">
                Tower range
              </th>
              <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit lg:px-4 lg:py-5">
                Floors
              </th>
              <th className="border border-accent-800 px-6 py-4 text-left text-heading-md font-semibold md:w-fit lg:px-4 lg:py-5">
                Special Feature
              </th>
            </tr>
          </thead>
          <tbody>
            {towerDetails.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-grey-50' : 'bg-grey-100'} border-spacing-x-4 border-spacing-y-5 border border-accent-300 font-semibold`}
              >
                <td className="text-grey-600 md:w-fit md:px-4 md:py-2 lg:p-4">
                  <span className="font-semibol text-subheading-md text-grey-600">
                    {item.towerRange}
                  </span>
                </td>
                <td className="text-subheading-md font-semibold text-grey-400 md:w-fit md:px-4 md:py-2 lg:p-4">
                  {item.floors}
                </td>
                <td className="text-paragraph-sm font-medium md:w-fit md:px-4 md:py-2 lg:p-4">
                  <span className="text-grey-400">{item.specialFeature}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default memo(TowerTable);
