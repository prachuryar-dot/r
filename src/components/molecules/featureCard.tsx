import { memo } from 'react';
import { Feature } from '@/interfaces';
import { H5 } from '../designSystem/typography';
import Text from '../designSystem/typography/Text';

const FeatureCard = memo<{ feature: Feature; index: number }>(({ feature }) => {
  const Icon = feature.icon;

  return (
    <article className="bg-home-feature-card group relative flex h-full w-full flex-col rounded border p-3 pb-7 transition-all duration-300 hover:scale-105 hover:shadow-xl md:pb-3">
      <div className="flex items-center rounded-lg transition-colors duration-300">
        <Icon
          className="mb-2 h-8 w-8 text-primary-400 transition-transform duration-300 md:mb-4 md:h-14 md:w-14 md:p-3"
          size={32}
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <H5 as="h3" className="text-accent-50">
          {feature.title}
        </H5>
        <Text as="p" variant="label" size="sm" weight="medium" className="mb-2 text-accent-600">
          {feature.description}
        </Text>
      </div>

      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
