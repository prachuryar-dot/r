import EnquireNowModalButton from '@/components/molecules/modal/EnquireNowModalButton';
import { cn } from '@/lib/utils/cn';
import { Calendar, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { LinkButton } from '@/components/atoms/buttons';
import { BannerSlide } from '@/interfaces';
import { RealEstateFeatureButton } from '@/components/molecules/modal/ModalButtons';
import Text from '@/components/designSystem/typography/Text';
import { H2 } from '@/components/designSystem/typography';
interface SlideContentProps {
  slides: BannerSlide[];
  currentIndex: number;
  description?: string;
}

const SlideContent: React.FC<SlideContentProps> = ({ slides, currentIndex, description }) => {
  return (
    <div className="relative z-10 min-h-[98vh] md:min-h-[94vh] xl:min-h-[92vh]">
      {slides.map((slide, index) => (
        <div
          key={`content-${slide.id}`}
          className={cn(
            'absolute inset-0 transition-transform duration-700 ease-in-out',
            index === currentIndex
              ? 'translate-x-0'
              : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full',
          )}
        >
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="flex items-center justify-start pt-48 lg:pt-24 xl:pt-28">
              <div className="flex flex-col items-start gap-3 sm:gap-4">
                {slide.collaborationImageUrl && (
                  <div className="mb-2 sm:mb-4">
                    <Image
                      src={slide.collaborationImageUrl}
                      alt="Collaboration"
                      width={120}
                      height={38}
                      className="h-8 w-auto object-contain sm:h-10 lg:h-12"
                      priority={index === 0}
                    />
                  </div>
                )}

                <H2 className="flex max-w-2xl flex-col text-accent-50 md:max-w-3xl lg:max-w-4xl">
                  <span>
                    {slide.bannerHeading}
                    <span className="bg-home-banner-text-gradient bg-clip-text text-transparent">
                      {slide.bannerPropertyLocation}
                    </span>
                  </span>
                </H2>

                <Text
                  className="max-w-2xl text-accent-600 md:max-w-3xl lg:max-w-4xl"
                  variant="paragraph"
                  size="md"
                  weight="medium"
                >
                  {slide.description || description}
                </Text>

                <div className="mt-4 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:mt-8">
                  {slide.PropertyUrl ? (
                    <LinkButton href={slide.PropertyUrl} rightIcon={<ChevronRight />}>
                      View Property
                    </LinkButton>
                  ) : (
                    <RealEstateFeatureButton
                      rightIcon={<ChevronRight />}
                      variant="light-outline"
                      className="text-gray-50 hover:text-primary-600"
                      feature="VIEW_PROPERTY"
                      size="lg"
                    >
                      View Property
                    </RealEstateFeatureButton>
                  )}
                  <EnquireNowModalButton
                    variant="primary"
                    size="lg"
                    aria-label="Book a property visit"
                    className="w-full sm:w-auto"
                    leftIcon={<Calendar className="h-4 w-4" />}
                  >
                    Contact Us
                  </EnquireNowModalButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideContent;
