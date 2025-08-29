import React from 'react';
import { Calendar } from 'lucide-react';
import HeroFeatures from '@/components/molecules/heroFeatures';
import { features } from '@/data/homepage';
import { BookVisitButton } from '@/components/molecules/modal/ModalButtons';
import { H4, H2 } from '@/components/designSystem/typography';
import Text from '@/components/designSystem/typography/Text';

interface StaticBannerContentProps {
  headingPartOne?: string;
  headingPartTwo?: string;
  description?: string;
  secondHeading?: string;
}

const StaticBannerContent: React.FC<StaticBannerContentProps> = ({
  headingPartOne,
  headingPartTwo,
  description,
  secondHeading,
}) => {
  return (
    <div className="relative z-10">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex min-h-[98vh] flex-col justify-center md:min-h-[94vh] xl:min-h-[92vh]">
          <div className="flex max-w-2xl translate-y-0 transform flex-col items-start gap-3 opacity-100 transition-all duration-500 ease-out sm:gap-4 md:max-w-3xl lg:max-w-4xl">
            <H2 as="h1" className="flex flex-col text-accent-50">
              <span className="block">{headingPartOne}</span>
              <span className="bg-home-banner-text-gradient block bg-clip-text text-transparent">
                {headingPartTwo}
              </span>
            </H2>

            <Text className="text-accent-600" variant="paragraph" size="md" weight="medium">
              {description}
            </Text>
          </div>

          <div className="mt-6 flex translate-y-0 transform flex-col items-start gap-4 opacity-100 transition-all delay-100 duration-500 ease-out sm:mt-8 lg:mt-10">
            <BookVisitButton
              variant="primary"
              size="lg"
              aria-label="Book a property visit"
              className="w-full sm:w-auto"
              leftIcon={<Calendar className="h-4 w-4" />}
            />

            <div className="mt-6 w-full sm:mt-8 lg:mt-10">
              <H4 as="h2" className="mb-3 w-full font-bold text-accent-800 sm:mb-4 lg:mb-6">
                {secondHeading}
              </H4>
              <HeroFeatures features={features} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBannerContent;
