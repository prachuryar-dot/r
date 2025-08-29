import { memo, useMemo } from 'react';
import { LaunchFeatures } from '@/interfaces';
import { launchFeatures } from '@/data/homepage';

const FeatureCard = memo<{ feature: LaunchFeatures; index: number }>(({ feature, index }) => (
  <article
    className="group relative flex min-h-48 flex-col items-center bg-primary-400 p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 hover:scale-[1.02] hover:shadow-lg lg:min-h-60"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div className="flex flex-col">
      <span className="mb-1 font-heading text-heading-sm font-bold text-accent-1000 lg:text-heading-md">
        {feature.title}
      </span>
      <p className="font-sans text-subheading-xs font-medium text-accent-900 lg:text-subheading-sm">
        {feature.description}
      </p>
    </div>

    <div
      className="absolute bottom-0 right-0 h-16 w-16 transition-transform duration-300 group-hover:scale-110 md:h-[134px] md:w-[134px] lg:left-[165px] lg:top-[106px] lg:h-[134px] lg:w-[134px]"
      aria-hidden="true"
    >
      {feature.iconPlaceholder()}
    </div>
  </article>
));

FeatureCard.displayName = 'FeatureCard';
const GrandLaunch: React.FC = memo(() => {
  const featureList = useMemo(() => launchFeatures, []);

  return (
    <section className="bg-grand-launch py-16 lg:py-24" aria-labelledby="grand-launch-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <header className="mb-10 lg:mb-12">
          <h2
            id="grand-launch-heading"
            className="mb-1 max-w-4xl font-heading text-heading-2xl font-bold leading-tight text-accent-1000 sm:text-heading-5xl lg:text-heading-5xl"
          >
            Grand Launch Coming Soon
          </h2>
          <p className="max-w-4xl font-heading text-heading-md font-semibold leading-tight text-accent-1000 sm:text-heading-2xl lg:text-heading-2xl">
            Our edge in real estate is built on
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {featureList.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

GrandLaunch.displayName = 'GrandLaunch';

export default GrandLaunch;
