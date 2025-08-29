import { ReraSectionProps } from '@/props';
import React, { memo } from 'react';
import Image from 'next/image';

const ReraSection: React.FC<ReraSectionProps> = memo(
  ({
    mainHeadingPartOne,
    mainHeadingPartTwo,
    mainHeadingPartThree,
    reraNumber,
    description,
    reraTitle,
    reraImageUrl,
  }) => {
    return (
      <>
        <section className="bg-legacy-section py-16 lg:py-24" aria-labelledby="rera-heading">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="flex flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-16">
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <article className="flex flex-col items-center justify-center gap-2.5 lg:items-start lg:gap-4">
                  <h2
                    id="rera-heading"
                    className="text-center font-heading text-heading-2xl font-bold text-accent-800 lg:mb-4 lg:text-start lg:text-heading-5xl"
                  >
                    {mainHeadingPartOne}
                    <span className="bg-home-banner-text-gradient block font-heading text-heading-2xl font-bold lg:inline lg:text-heading-5xl">
                      {mainHeadingPartTwo}
                    </span>
                    {mainHeadingPartThree}
                  </h2>
                  <p className="mb-3 flex max-w-2xl items-center justify-center text-center font-sans text-paragraph-xs font-regular text-grey-200 lg:mb-4 lg:text-start lg:text-paragraph-md">
                    {description}
                  </p>
                  <p className="font- font-heading text-heading-xl text-gray-50">{reraTitle}</p>
                  <p className="rounded-lg bg-primary-50 px-5 py-3 text-subheading-md font-semibold text-primary-600">
                    {reraNumber}
                  </p>
                </article>
              </div>

              <div className="relative h-64 w-full flex-shrink-0 sm:h-80 lg:h-[342px] lg:w-[280px]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image src={reraImageUrl} alt="RERA Image" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
);

ReraSection.displayName = 'ReraSection';

export default ReraSection;
