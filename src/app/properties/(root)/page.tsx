import { Metadata } from 'next';
import H1 from '@/components/designSystem/typography/H1';
import H2 from '@/components/designSystem/typography/H2';
import Text from '@/components/designSystem/typography/Text';

export const metadata: Metadata = {
  title: 'Properties for Sale in India | Premium Real Estate | Pattem Estates',
  description:
    'Explore premium properties for sale across India. Find luxury apartments, villas, plots and commercial spaces in Bangalore, Mumbai, Delhi, Hyderabad and more cities.',
  keywords: [
    'Properties for Sale',
    'Real Estate India',
    'Properties in Bangalore',
    'Properties in Mumbai',
    'Properties in Delhi',
    'Properties in Hyderabad',
    'Luxury Properties India',
    'Apartments for Sale',
    'Villas for Sale',
    'Plots for Sale',
    'Commercial Properties',
    'RERA Approved Properties',
    'Ready to Move Properties',
    'Under Construction Properties',
  ],
  openGraph: {
    title: 'Properties for Sale in India | Premium Real Estate | Pattem Estates',
    description:
      'Explore premium properties for sale across India. Find luxury apartments, villas, plots and commercial spaces.',
    url: '/properties',
    images: [
      {
        url: '/og-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Properties for Sale in India - Pattem Estates',
      },
    ],
  },
  twitter: {
    title: 'Properties for Sale in India | Pattem Estates',
    description:
      'Explore premium properties for sale across India. Find luxury apartments, villas, plots and commercial spaces.',
    images: ['/twitter-properties.jpg'],
  },
  alternates: {
    canonical: '/properties',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PropertiesPage() {
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
    ],
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

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <H1 className="mb-6 text-center">Premium Properties for Sale in India</H1>

          <Text variant="paragraph" size="lg" className="mb-8 text-center text-grey-600">
            Discover your dream property with Pattem Estates. We offer a curated selection of
            premium real estate across India&apos;s major cities.
          </Text>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Luxury Apartments
              </H2>
              <Text variant="paragraph" size="sm" className="text-grey-600">
                Premium apartments in prime locations with world-class amenities and modern designs.
              </Text>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Independent Villas
              </H2>
              <Text variant="paragraph" size="sm" className="text-grey-600">
                Spacious villas with private gardens, premium finishes and exclusive community
                features.
              </Text>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <H2 as="h2" className="mb-4">
                Commercial Spaces
              </H2>
              <Text variant="paragraph" size="sm" className="text-grey-600">
                Strategic commercial properties for businesses looking for prime office and retail
                spaces.
              </Text>
            </div>
          </div>

          <div className="mt-12 text-center">
            <H2 as="h2" className="mb-4">
              Why Choose Pattem Estates?
            </H2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Text variant="paragraph" size="md" weight="semibold" className="mb-2">
                  RERA Approved Properties
                </Text>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  All our properties are RERA approved ensuring transparency and legal compliance.
                </Text>
              </div>
              <div>
                <Text variant="paragraph" size="md" weight="semibold" className="mb-2">
                  Expert Guidance
                </Text>
                <Text variant="paragraph" size="sm" className="text-grey-600">
                  Our experienced team provides end-to-end support throughout your property journey.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
