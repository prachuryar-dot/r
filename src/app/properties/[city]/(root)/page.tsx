import { PageProps } from '@/props';
import { Metadata } from 'next';

import H1 from '@/components/designSystem/typography/H1';
import H2 from '@/components/designSystem/typography/H2';
import H3 from '@/components/designSystem/typography/H3';
import Text from '@/components/designSystem/typography/Text';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return {
    title: `Properties for Sale in ${cityName} | Real Estate ${cityName} | Pattem Estates`,
    description: `Explore premium properties for sale in ${cityName}. Find luxury apartments, villas, plots and commercial spaces in ${cityName}'s best locations. RERA approved projects.`,
    keywords: [
      `${cityName} properties`,
      `${cityName} real estate`,
      `apartments in ${cityName}`,
      `villas in ${cityName}`,
      `plots in ${cityName}`,
      `commercial property ${cityName}`,
      `luxury properties ${cityName}`,
      `RERA approved properties ${cityName}`,
      `ready to move ${cityName}`,
      `under construction ${cityName}`,
      `new launch ${cityName}`,
      `property developers ${cityName}`,
      `real estate investment ${cityName}`,
    ],
    openGraph: {
      title: `Premium Properties in ${cityName} | Pattem Estates`,
      description: `Discover the best residential and commercial properties in ${cityName}. Luxury apartments, villas and plots in prime locations.`,
      url: `https://pattem-estates.com/properties/${params.city}`,
      images: [
        {
          url: `/og-${params.city}.jpg`,
          width: 1200,
          height: 630,
          alt: `Premium Properties in ${cityName} - Pattem Estates`,
        },
      ],
    },
    twitter: {
      title: `Properties in ${cityName} | Pattem Estates`,
      description: `Explore premium properties for sale in ${cityName}. Luxury apartments, villas and commercial spaces.`,
      images: [`/twitter-${params.city}.jpg`],
    },
    alternates: {
      canonical: `/properties/${params.city}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CityPropertiesPage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://pattem-estates.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Properties',
        item: 'https://pattem-estates.com/properties',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityName,
        item: `https://pattem-estates.com/properties/${params.city}`,
      },
    ],
  };

  const cityStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: cityName,
    description: `Premium real estate properties available in ${cityName}`,
    url: `https://pattem-estates.com/properties/${params.city}`,
    containsPlace: {
      '@type': 'RealEstateListing',
      name: `Properties in ${cityName}`,
      description: `Luxury apartments, villas, plots and commercial properties in ${cityName}`,
    },
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityStructuredData),
        }}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <H1 className="mb-6 text-center">Premium Properties for Sale in {cityName}</H1>

          <Text
            variant="paragraph"
            size="lg"
            className="mx-auto mb-8 max-w-3xl text-center text-grey-600"
          >
            Discover luxury real estate opportunities in {cityName}. From modern apartments to
            spacious villas, find your perfect property in {cityName}&apos;s most sought-after
            locations.
          </Text>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Residential Properties
              </H2>
              <Text variant="paragraph" size="sm" className="mb-4 text-grey-600">
                Premium apartments and villas in {cityName}&apos;s prime residential areas.
              </Text>
              <ul className="space-y-2">
                <li>
                  <Text variant="label" size="sm">
                    • Luxury Apartments
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Independent Villas
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Gated Communities
                  </Text>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Commercial Properties
              </H2>
              <Text variant="paragraph" size="sm" className="mb-4 text-grey-600">
                Strategic commercial spaces in {cityName}&apos;s business districts.
              </Text>
              <ul className="space-y-2">
                <li>
                  <Text variant="label" size="sm">
                    • Office Spaces
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Retail Outlets
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Co-working Spaces
                  </Text>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Investment Opportunities
              </H2>
              <Text variant="paragraph" size="sm" className="mb-4 text-grey-600">
                High-potential investment properties in {cityName}.
              </Text>
              <ul className="space-y-2">
                <li>
                  <Text variant="label" size="sm">
                    • Plots & Land
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Pre-launch Projects
                  </Text>
                </li>
                <li>
                  <Text variant="label" size="sm">
                    • Ready to Move
                  </Text>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-grey-50 p-8">
            <H2 as="h2" className="mb-6 text-center">
              Why Invest in {cityName} Real Estate?
            </H2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <H3 as="h3" className="mb-3">
                  Growing Infrastructure
                </H3>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  {cityName} continues to develop world-class infrastructure including metro
                  connectivity, IT parks, and modern amenities.
                </Text>
              </div>
              <div>
                <H3 as="h3" className="mb-3">
                  High Appreciation Potential
                </H3>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  Properties in {cityName} have shown consistent appreciation over the years, making
                  it an ideal investment destination.
                </Text>
              </div>
              <div>
                <H3 as="h3" className="mb-3">
                  RERA Compliance
                </H3>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  All our {cityName} properties are RERA approved, ensuring transparency and buyer
                  protection.
                </Text>
              </div>
              <div>
                <H3 as="h3" className="mb-3">
                  Prime Locations
                </H3>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  Our properties are strategically located in {cityName}&apos;s most desirable
                  neighborhoods with excellent connectivity.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
