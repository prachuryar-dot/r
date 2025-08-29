'use client';
import { FloorPlanCardProps } from '@/interfaces/property.interface';
import { FC, memo } from 'react';
import { Button } from '../atoms/buttons';
import Image from 'next/image';
import useMobileDetection from '@/hooks/useMobileDetection';

const FloorPlanCard: FC<FloorPlanCardProps> = ({ plan }) => {
  const isMobile = useMobileDetection();
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative h-[260px] w-full md:h-[339px]">
        <Image
          src={plan.imageUrl}
          alt={plan.title}
          loading="lazy"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="font-heading text-heading-md font-bold md:text-heading-lg">{plan.title}</h3>
        <p className="font-body text-paragraph-xs lg:text-paragraph-sm">{plan.description}</p>
      </div>
      <Button variant="primary" size={isMobile ? 'sm' : 'lg'} className="w-fit text-grey-50">
        Enquire now
      </Button>
    </div>
  );
};

export default memo(FloorPlanCard);
