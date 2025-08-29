'use client';
import useMobileDetection from '@/hooks/useMobileDetection';
import { LoanBannerProps } from '@/props';
import { ChevronRight, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import { FC, memo } from 'react';
import EnquireNowModalButton from '../molecules/modal/EnquireNowModalButton';
import { EMICalculatorButton } from '../molecules/modal/ModalButtons';

const LoanBanner: FC<LoanBannerProps> = ({
  mainHeading,
  descriptions,
  enquireCta,
  emiCalculatorCta,
  desktopBannerImageUlr,
  mobileBannerImageUlr,
}) => {
  const isMobile = useMobileDetection();

  return (
    <>
      <div className="relative h-52 w-full lg:hidden">
        <Image
          src={mobileBannerImageUlr}
          alt="LoanBanner image"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <section
        className={`relative bg-cover bg-center bg-no-repeat pb-16 pt-12`}
        aria-labelledby="interiors-heading"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <Image
            src={desktopBannerImageUlr}
            fill
            className="absolute inset-0 z-0 object-cover transition-opacity duration-1000 ease-in-out"
            quality={90}
            sizes="100vw"
            alt={'LoanBanner image'}
          />
          <div className="flex flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-16">
            {/* Content Section */}
            <div className="flex min-w-0 flex-1 flex-col justify-between md:max-w-[671px]">
              <article className="z-10 flex flex-col gap-4 lg:gap-5">
                <h2
                  id="interiors-heading"
                  className="font-heading text-heading-xl font-bold text-grey-600 lg:text-heading-3xl"
                >
                  {mainHeading}
                </h2>
                <div className="flex flex-col gap-2">
                  {descriptions.map((desc) => (
                    <p
                      key={desc}
                      className="flex items-center gap-1 font-sans text-subheading-sm font-regular text-grey-500 lg:text-subheading-lg lg:font-medium"
                    >
                      <CircleCheck className="h-5 w-5 text-primary-500" />
                      {desc}
                    </p>
                  ))}
                </div>
              </article>

              {/* CTA Button */}
              <div className="z-10 mt-6 flex gap-4 lg:mt-12">
                <EMICalculatorButton isMobile={isMobile} emiCalculatorCta={emiCalculatorCta} />
                <EnquireNowModalButton
                  variant="light-outline"
                  size={isMobile ? 'sm' : 'lg'}
                  rightIcon={<ChevronRight className="h-4 w-4" />}
                >
                  {enquireCta}
                </EnquireNowModalButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(LoanBanner);
