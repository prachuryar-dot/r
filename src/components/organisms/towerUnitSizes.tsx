import { UnitSizesSectionProps } from '@/interfaces/property.interface';
import { memo } from 'react';

const TowerUnitSizes: React.FC<UnitSizesSectionProps> = ({
  towerSectionUnitSizesHeading,
  towerSectionUnitSizesSubHeading,
  towerSectionUnitsSizes,
}) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h2 className="font-heading text-heading-md font-bold text-grey-600 lg:text-heading-xl">
        {towerSectionUnitSizesHeading}
      </h2>
      <h3>{towerSectionUnitSizesSubHeading}</h3>

      <div className="relative grid grid-cols-2 lg:flex lg:justify-between">
        {towerSectionUnitsSizes.map((unit, index) => (
          <div key={index} className="relative flex flex-col gap-3 px-4 py-3 lg:px-6">
            <h3 className="font-sans text-subheading-md font-semibold text-grey-600">
              {unit.type}
            </h3>
            <p className="text-nowrap font-sans text-subheading-sm font-semibold text-grey-500 lg:text-grey-400">
              {unit.sizeRange}
            </p>

            {index % 2 === 0 && index !== towerSectionUnitsSizes.length - 1 && (
              <span className="absolute right-0 top-1/2 h-2/4 -translate-y-1/2 border-r border-grey-500 md:-right-28 lg:hidden"></span>
            )}
            {index !== towerSectionUnitsSizes.length - 1 && (
              <span className="absolute right-0 top-1/2 hidden h-2/4 -translate-y-1/2 border-r border-grey-500 lg:block"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TowerUnitSizes);
