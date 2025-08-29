import { Button } from '@/components/atoms/buttons';
import { UnitPlanCardProps } from '@/interfaces/property.interface';
import Image from 'next/image';
import { memo } from 'react';

const UnitPlanCard: React.FC<UnitPlanCardProps> = ({ unitPlan, unitPlanEnquireCtaText }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative h-[260px] w-full md:h-[339px]">
        <Image
          src={unitPlan.unitPlanImageUrl}
          alt={unitPlan.unitPlanTitle}
          loading="lazy"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="font-heading text-heading-md font-bold md:text-heading-lg">
          {unitPlan.unitPlanTitle}
        </h3>
        <p className="font-body text-paragraph-md">{unitPlan.unitPlanDescription}</p>
      </div>
      <Button variant="primary" size="md" className="w-fit md:mt-2">
        {unitPlanEnquireCtaText}
      </Button>
    </div>
  );
};

export default memo(UnitPlanCard);
