'use client';

import useMobileDetection from '@/hooks/useMobileDetection';
import { MasterPlanSectionProps } from '@/interfaces/property.interface';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { memo } from 'react';
import { Button } from '../atoms/buttons';
import EnquireNowModalButton from '../molecules/modal/EnquireNowModalButton';

const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({
  masterPlanTitle,
  masterPlanImageUrl,
  masterPlanDescription,
  masterPlanEnquireNowCta,
  masterPlanViewInDetailCta,
}) => {
  const isMobile = useMobileDetection();

  return (
    <section className="px-4 py-20 md:px-10 lg:px-20 lg:py-28">
      <h3 className="mb-4 font-heading text-heading-xl font-bold md:text-heading-2xl">
        {masterPlanTitle}
      </h3>

      <div className="flex flex-col gap-4 md:gap-8">
        <div className="relative h-[123px] w-full md:h-[563px]">
          <Image
            src={masterPlanImageUrl}
            alt={masterPlanTitle}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <p className="max-w-2xl font-body text-paragraph-xs md:text-paragraph-md">
            {masterPlanDescription}
          </p>
          <div>
            <EnquireNowModalButton variant="primary" size={isMobile ? 'sm' : 'md'}>
              {masterPlanEnquireNowCta}
            </EnquireNowModalButton>
            <Button
              variant="primary-outline"
              size="sm"
              rightIcon={<ChevronRight />}
              className="ml-4 text-primary-500"
            >
              {masterPlanViewInDetailCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MasterPlanSection);
