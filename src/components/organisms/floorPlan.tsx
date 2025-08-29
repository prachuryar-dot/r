import { FloorPlanProps } from '@/interfaces/property.interface';
import React, { FC, memo } from 'react';
import FloorPlanCard from './floorPlanCard';

const FloorPlan: FC<FloorPlanProps> = ({
  floorPlanSectionHeading,
  floorPlanSectionDescription,
  floorPlanSectionPlans,
}) => {
  return (
    <section className="bg-grey-50 pb-10 pt-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <h3 className="mb-4 font-heading text-heading-xl font-bold md:text-heading-2xl">
          {floorPlanSectionHeading}
        </h3>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="max-w-2xl text-paragraph-xs md:text-paragraph-md">
            {floorPlanSectionDescription}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 md:mt-8 md:grid-cols-3 md:gap-x-6 md:gap-y-16">
          {floorPlanSectionPlans.map((plan) => (
            <FloorPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FloorPlan);
