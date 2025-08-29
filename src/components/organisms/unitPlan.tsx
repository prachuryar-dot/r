import { UnitPlanProps } from '@/interfaces/property.interface';
import { ChevronRight } from 'lucide-react';
import { memo } from 'react';
import { Button } from '../atoms/buttons';
import UnitPlanCard from '../molecules/unitPlan/unitPlanCard';

const UnitPlan: React.FC<UnitPlanProps> = ({
  unitPlanTitle,
  unitPlanDescription,
  unitPlanViewInDetailCta,
  unitPlans,
}) => {
  return (
    <section className="px-4 py-20 md:px-10 lg:px-20 lg:py-28">
      <h3 className="mb-4 font-heading text-heading-xl font-bold md:text-heading-2xl">
        {unitPlanTitle}
      </h3>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <p className="max-w-2xl text-paragraph-xs md:text-paragraph-md">{unitPlanDescription}</p>
        <Button
          size="sm"
          variant="primary-outline"
          rightIcon={<ChevronRight />}
          className="h-fit w-fit text-primary-500"
        >
          {unitPlanViewInDetailCta}
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-10 md:mt-8 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
        {unitPlans.map((unitPlan) => (
          <UnitPlanCard
            key={unitPlan.id}
            unitPlan={unitPlan}
            unitPlanEnquireCtaText={unitPlanViewInDetailCta}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(UnitPlan);
