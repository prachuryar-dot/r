import { memo } from 'react';
import Image from 'next/image';
import { ChevronRight, Goal } from 'lucide-react';
// import { LinkButton } from '../atoms/buttons';

import { LatestLaunchesCardProps } from '@/props';
import { RealEstateFeatureButton } from './modal/ModalButtons';

const LatestLaunchesCard = memo<LatestLaunchesCardProps>(({ property, isActive }) => (
  <div
    className={`w-[256px] rounded-3xl border-2 p-4 font-body transition-shadow duration-300 hover:shadow-md md:w-[540px] ${isActive ? 'border-primary-400' : 'border-grey-100'}`}
  >
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="h-[180px] w-[224px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[143px] md:w-[162px]">
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={162}
          height={143}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start justify-between">
        <div>
          <span className="mb-1 text-heading-md font-bold text-gray-900 md:text-heading-lg">
            {property.title}
          </span>
          <p className="mb-3 text-start text-paragraph-xs font-medium text-grey-400 md:text-sm">
            {property.location}
          </p>
        </div>

        <span className="mb-4 flex items-center font-semibold italic text-grey-400 md:hidden">
          Starts at {property.price}
        </span>

        {property.features.map((feature) => (
          <div className="mb-6 flex items-center gap-4 md:mb-4" key={feature.id}>
            <div className="flex items-center gap-1 text-xs text-grey-400">
              <span>{feature.icon}</span>
              <span className="font-medium">{feature.label}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-grey-400">
              <Goal size={16} />
              <span className="font-medium">{property.bhk}</span>
            </div>
          </div>
        ))}

        <div className="flex w-full items-center justify-between">
          {/* <LinkButton href="/" variant="primary" rightIcon={<ChevronRight size={18} />}>
            View in detail
          </LinkButton> */}

          <RealEstateFeatureButton
            variant="primary"
            size="sm"
            aria-label="View in detail"
            rightIcon={<ChevronRight size={18} />}
            feature="VIEW_PROPERTY"
          >
            View in detail
          </RealEstateFeatureButton>
          <span className="hidden items-center font-semibold italic text-grey-400 md:flex">
            Starts at {property.price}
          </span>
        </div>
      </div>
    </div>
  </div>
));

LatestLaunchesCard.displayName = 'LatestLaunchCard';

export default LatestLaunchesCard;
