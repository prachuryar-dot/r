import { AboutPropertyLocationProps } from '@/interfaces/property.interface';
import Image from 'next/image';
import { memo } from 'react';

const AboutPropertyLocation: React.FC<AboutPropertyLocationProps> = ({
  propertyLoactionTitle,
  propertyLoactionDescription,
  propertyLoactionImageUrl,
  propertyLoactionInformation,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-accent-1000 px-4 py-20 md:px-10 lg:px-20 lg:py-28">
      <h2 className="text-heading-2xl font-bold text-accent-900 md:text-heading-5xl">
        {propertyLoactionTitle}
      </h2>
      <div className="flex flex-col-reverse gap-6 font-body text-paragraph-xs text-grey-300 md:flex-row md:gap-16 md:text-paragraph-md">
        <div className="flex flex-col gap-6">
          <p>{propertyLoactionDescription}</p>

          {propertyLoactionInformation.map((info) => (
            <div key={info.estateInfoId}>
              <h3 className="font-body text-heading-lg font-semibold">{info.estateInfoTitle}</h3>
              <p>{info.estateInfoDescription}</p>
            </div>
          ))}
        </div>
        <div className="relative h-[224px] w-full md:h-[485px] md:min-w-[479px]">
          <Image
            src={propertyLoactionImageUrl}
            alt={propertyLoactionTitle}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPropertyLocation);
