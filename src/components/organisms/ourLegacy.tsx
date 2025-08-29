import { OurLegacySectionProps } from '@/props';
import Image from 'next/image';
import React, { memo } from 'react';
const OurLegacy: React.FC<OurLegacySectionProps> = memo(
  ({ mainHeading, descriptionOne, descriptionTwo }) => {
    return (
      <>
        <section
          id="about-us"
          className="bg-legacy-section py-16 lg:py-24"
          aria-labelledby="legacy-heading"
        >
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <header className="mb-2 lg:mb-12">
              <h2
                id="legacy-heading"
                className="max-w-4xl font-heading text-heading-xl font-bold leading-tight text-grey-50 sm:text-heading-5xl lg:text-heading-5xl"
              >
                {mainHeading}
              </h2>
            </header>

            <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
              <article className="flex max-w-3xl flex-col gap-6 lg:flex-1">
                <div className="space-y-6">
                  <p className="font-sans text-paragraph-xs font-regular leading-relaxed text-grey-200 lg:text-paragraph-sm">
                    {descriptionOne}
                  </p>
                  <p className="font-sans text-paragraph-xs font-regular leading-relaxed text-grey-200 lg:text-paragraph-sm">
                    {descriptionTwo}
                  </p>
                </div>
              </article>

              <div className="relative w-full max-w-md flex-shrink-0 lg:w-[480px] lg:max-w-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-grey-400 lg:aspect-[6/5]">
                  <Image
                    src="https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/about-us.webp"
                    alt="About Pattem Estates"
                    fill
                    sizes="100%"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
);

OurLegacy.displayName = 'OurLegacy';

export default OurLegacy;
