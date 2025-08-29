import { ProductSpecificationProps } from '@/interfaces/property.interface';
import {} from '@/props';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { memo, type FC } from 'react';
import { Button } from '../atoms/buttons';

const ProductSpecification: FC<ProductSpecificationProps> = ({
  specificationTitle,
  specificationDescription,
  specificationViewInDetailCta,
  specificationImageUrl,
}) => {
  return (
    <section className="flex flex-col-reverse gap-12 px-4 py-20 md:flex-row md:gap-16 md:px-10 lg:px-20 lg:py-28">
      <div className="flex flex-col gap-4 md:gap-2">
        <h3 className="font-heading text-heading-2xl font-bold">{specificationTitle}</h3>
        <p className="font-body text-paragraph-xs md:text-paragraph-md">
          {specificationDescription}
        </p>
        <Button
          variant="primary-outline"
          size="md"
          className="mt-4 w-fit text-primary-500"
          rightIcon={<ChevronRight />}
        >
          {specificationViewInDetailCta}
        </Button>
      </div>
      <div className="relative h-[224px] min-w-[370px] md:h-[296px] md:min-w-[479px]">
        <Image
          src={specificationImageUrl}
          alt={specificationTitle}
          loading="lazy"
          fill
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default memo(ProductSpecification);
