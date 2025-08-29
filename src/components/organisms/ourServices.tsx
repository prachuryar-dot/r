import { memo, useMemo } from 'react';
import { Service } from '@/interfaces';
import { services } from '@/data/homepage';

const ServiceCard = memo<{ service: Service; index: number }>(({ service, index }) => (
  <article
    className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div className="relative mb-5 h-16 w-16 overflow-hidden lg:h-28 lg:w-28">
      <div className="bg-grey-900 flex h-full w-full items-center justify-center rounded-xl border border-accent-800 bg-accent-900 transition-all duration-300 group-hover:shadow-lg">
        <div className="flex h-9 w-9 items-center justify-center text-grey-300 lg:h-20 lg:w-20">
          {service.iconPlaceholder()}
        </div>
      </div>
    </div>

    <div className="space-y-2">
      <span className="bg-home-banner-text-gradient font-heading text-heading-md font-semibold transition-colors duration-300 lg:text-heading-xl">
        {service.title}
      </span>
      <p className="mx-auto max-w-xs font-sans text-subheading-xs font-regular leading-relaxed text-accent-500 lg:px-4 lg:text-subheading-md">
        {service.description}
      </p>
    </div>
  </article>
));

ServiceCard.displayName = 'ServiceCard';

const OurServices: React.FC = memo(() => {
  const serviceList = useMemo(() => services, []);

  return (
    <section className="bg-services-section py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <header className="mb-12 text-center lg:mb-16">
          <h2
            id="services-heading"
            className="mx-auto max-w-4xl font-heading text-heading-2xl font-bold text-grey-50 sm:text-heading-5xl lg:text-heading-5xl"
          >
            Diversified Ventures in Real Estate
          </h2>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {serviceList.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <footer className="mt-20">
          <p className="mx-auto max-w-[979px] text-center font-heading text-heading-xl font-semibold leading-tight text-accent-800 sm:text-heading-3xl lg:text-heading-3xl">
            Pattem Estates is your{' '}
            <span className="bg-home-banner-text-gradient">
              trusted partner in premium real estate
            </span>
            , creating a 360° ecosystem of value, visibility, and global impact.
          </p>
        </footer>
      </div>
    </section>
  );
});

OurServices.displayName = 'OurServices';

export default OurServices;
