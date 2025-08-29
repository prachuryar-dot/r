import { memo } from 'react';
import Image from 'next/image';
import { Scaling, LayoutTemplate, MapPin } from 'lucide-react';
import { LatestLaunchSliderProps } from '@/props';

const LatestLaunchSlider = memo<LatestLaunchSliderProps>(({ property }) => (
  <div className="relative hidden h-[520px] max-w-8xl overflow-hidden rounded-2xl md:block">
    <Image
      src={property.imageUrl}
      alt={property.title}
      fill
      sizes="(max-width: 1200px) 100vw, 1200px"
      className="object-cover transition-opacity duration-500"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
      <div className="absolute bottom-8 left-8 flex max-w-2xl flex-col gap-2 text-white">
        <span className="text-heading-2xl font-bold">{property.title}</span>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span>
              <Scaling size={16} />
            </span>
            <span>{property.area}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <LayoutTemplate size={16} />
            </span>
            <span>{property.bhk}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <MapPin size={16} />
            </span>
            <span>{property.location}</span>
          </div>
        </div>

        <p className="text-paragraph-md text-gray-200">{property.description}</p>
      </div>
    </div>
  </div>
));

LatestLaunchSlider.displayName = 'LatestLaunchSlider';

export default LatestLaunchSlider;
