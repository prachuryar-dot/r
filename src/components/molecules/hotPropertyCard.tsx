import { memo } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { House } from 'lucide-react';
import { HotProperty } from '@/interfaces';

interface HotPropertyCardProps {
  property: HotProperty;
  onHover: (id: number | string | null) => void;
  isMobile: boolean;
}

const HotPropertyCard = memo<HotPropertyCardProps>(({ property, onHover, isMobile }) => (
  <div
    className={`group relative flex-shrink-0 rounded-[16px] border text-grey-50 transition-all duration-500 ease-out ${
      isMobile ? 'w-64' : 'w-80 hover:w-[640px]'
    }`}
    onMouseEnter={() => !isMobile && onHover(property.id)}
    onMouseLeave={() => !isMobile && onHover(null)}
  >
    <div
      // href={`/properties/${property.id}`}
      className="block h-full overflow-hidden rounded-2xl bg-white transition-shadow duration-300 focus:outline-none focus:ring-4"
    >
      <div className="relative h-60 w-[444px] overflow-hidden lg:w-[640px]">
        <Image
          src={property.imageUrl}
          alt={`${property.title} in ${property.location}`}
          fill
          className="object-cover transition-none"
          sizes="(max-width: 768px) 320px, 480px"
          loading="lazy"
        />

        {property.isNewListing && (
          <div className="absolute left-4 top-4 flex items-center justify-center rounded-lg bg-danger-100 px-3 py-2 font-body text-paragraph-sm font-semibold text-red-600 opacity-100 shadow-lg">
            New launch
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <span className="max-w-72 text-wrap text-heading-md font-bold text-grey-600 transition-colors duration-300 lg:text-heading-lg">
          {property.title}
        </span>
        <p className="max-w-72 font-body text-subheading-xs font-regular text-grey-500 lg:text-subheading-md">
          {property.location}
        </p>

        <div className="flex h-16 flex-col items-start justify-between md:flex-row md:items-center">
          <p className="order-2 min-w-36 font-body text-subheading-sm font-semibold text-[#2961CB] md:order-1 lg:text-subheading-md">
            {property.priceRange}
          </p>
          <div className="order-1 flex items-center justify-between gap-4 overflow-hidden delay-500 group-hover:flex md:order-2 lg:hidden">
            <div className="flex items-center px-0 py-2 md:px-3">
              <div className="hidden w-9 items-center justify-center rounded-lg bg-grey-100 p-1 opacity-100 md:flex">
                <House className="text-primary-500" size={32} />
              </div>
              <div className="ml-0 flex flex-col gap-[2px] md:ml-2">
                <span className="flex items-center gap-1 font-body text-label-xs font-medium text-grey-400">
                  <div className="flex w-4 items-center justify-center rounded-lg bg-grey-100 p-[2px] opacity-100 md:hidden">
                    <House className="text-primary-500" size={14} />
                  </div>
                  Size
                </span>
                <span className="font-body text-label-sm font-semibold text-grey-500">
                  {property.size}
                </span>
              </div>
            </div>
            <div className="flex items-center px-0 py-2 md:px-3">
              <div className="hidden w-9 items-center justify-center rounded-lg bg-grey-100 p-1 opacity-100 md:flex">
                <House className="text-primary-500" size={32} />
              </div>

              <div className="ml-2 flex flex-col gap-[2px]">
                <span className="flex items-center gap-1 font-body text-label-xs font-medium text-grey-400">
                  <div className="flex w-4 items-center justify-center rounded-lg bg-grey-100 p-[2px] opacity-100 md:hidden">
                    <House className="text-primary-500" size={14} />
                  </div>
                  Units
                </span>
                <span className="font-body text-label-sm font-semibold text-gray-500">
                  {property.unit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

HotPropertyCard.displayName = 'HotPropertyCard';

export default HotPropertyCard;
