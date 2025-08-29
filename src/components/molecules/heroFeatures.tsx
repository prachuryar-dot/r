import { memo } from 'react';
import { HeroFeaturesProps } from '@/props';
import FeatureCard from './featureCard';

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {
  return (
    <div
      className="grid w-full grid-cols-2 items-stretch gap-x-2.5 gap-y-4 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-6"
      role="list"
      aria-label="Home buying process features"
    >
      {features.map((feature, index) => (
        <div key={feature.title} role="listitem" className="flex">
          <FeatureCard feature={feature} index={index} />
        </div>
      ))}
    </div>
  );
};

HeroFeatures.displayName = 'HeroFeatures';

export default memo(HeroFeatures);
