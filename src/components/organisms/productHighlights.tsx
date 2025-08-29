import { ProductHighlightsProps } from '@/interfaces/property.interface';
import Image from 'next/image';
import { memo } from 'react';

const ProductHighlights: React.FC<ProductHighlightsProps> = ({
  propertyHighlightsTitle,
  propertyHighlightsDescription,
  propertyHighlights,
}) => {
  return (
    <section className="bg-grey-50 pb-10 pt-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-20 xl:px-20">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-heading-xl font-bold text-grey-600 lg:text-heading-2xl">
            {propertyHighlightsTitle}
          </h2>
          <p className="lg:paragraph-md mx-auto mt-2 max-w-3xl text-paragraph-md font-regular text-grey-500">
            {propertyHighlightsDescription}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {propertyHighlights.map(({ highlightDescription, highlightImageUrl }, index) => {
            return (
              <div
                key={index}
                className={`group relative overflow-hidden shadow-md ${index === 0 || index === 5 ? 'col-span-2 rounded-xl' : 'col-span-1 rounded-xl'} ${
                  index === 0 || index === 7
                    ? 'sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2 lg:h-[544px] lg:w-[412px] lg:rounded-xl'
                    : 'sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1 lg:h-[260px] lg:w-[412px] lg:rounded-xl'
                } `}
              >
                <Image
                  src={highlightImageUrl}
                  alt={highlightDescription}
                  fill
                  className="h-full w-full lg:transition-transform lg:duration-300 lg:group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="mt-1 text-center text-label-lg font-semibold text-gray-100 md:pb-2">
                    {highlightDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(ProductHighlights);
