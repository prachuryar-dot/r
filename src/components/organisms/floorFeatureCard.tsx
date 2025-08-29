import { FloorFeatureCardProps } from '@/interfaces/property.interface';
import Image from 'next/image';
import { memo } from 'react';

const FloorFeatureCard: React.FC<FloorFeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative h-[260px] w-full md:h-[339px]">
        <Image
          src={feature.imageUrl}
          alt={feature.title}
          loading="lazy"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="font-heading text-heading-md font-bold text-primary-500 md:text-heading-lg">
          {feature.title}
        </h3>
        <p className="font-body text-paragraph-xs font-regular text-grey-100 lg:text-paragraph-md">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default memo(FloorFeatureCard);
