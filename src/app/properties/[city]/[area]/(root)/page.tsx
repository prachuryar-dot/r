import { PageProps } from '@/props';
import { Metadata } from 'next';
import H1 from '@/components/designSystem/typography/H1';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const areaName = params.area.charAt(0).toUpperCase() + params.area.slice(1);

  return {
    title: `${areaName} Properties in ${cityName}`,
    description: `Premium properties in ${areaName}, ${cityName}. Explore residential and commercial options in this prime location.`,
    keywords: `${areaName} ${cityName}, properties in ${areaName}, ${areaName} real estate`,
    openGraph: {
      title: `${areaName} Properties | ${cityName} | Pattem Estates`,
      description: `Find your dream property in ${areaName}, ${cityName}`,
      url: `https://pattem-estates.com/properties/${params.city}/${params.area}`,
    },
  };
}

export default function AreaPropertiesPage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  const areaName = params.area.charAt(0).toUpperCase() + params.area.slice(1);

  return (
    <div className="container mx-auto px-4">
      <H1 as="h1" className="mb-6 text-center">
        {areaName} Properties in {cityName}
      </H1>
    </div>
  );
}
