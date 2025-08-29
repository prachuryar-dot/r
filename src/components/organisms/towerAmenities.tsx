import { towerAmenitiesProps } from '@/interfaces/property.interface';
import { memo } from 'react';

const TowerAmenities: React.FC<towerAmenitiesProps> = (amenitiesDetails) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-heading text-heading-md font-bold text-grey-600 lg:text-heading-xl">
        {amenitiesDetails.amenitiesHeading}
      </h2>
      <ul className="list-disc pl-4 text-grey-500">
        {amenitiesDetails.amenitiesPoints.map((item, index) => (
          <li
            className="font-sans text-paragraph-xs font-medium lg:text-paragraph-md lg:font-regular"
            key={index}
          >
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(TowerAmenities);
