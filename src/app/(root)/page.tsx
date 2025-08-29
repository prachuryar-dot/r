import type { Metadata } from 'next';
import { generateOrganizationStructuredData } from '@/lib/utils/seo-utils';
import HomeBanner from '@/components/organisms/homeBanner/HomeBanner';

// import BlogsSection from '@/components/organisms/blogsSection';
import HotProperties from '@/components/organisms/hotProperties';
import LatestLaunchesSection from '@/components/organisms/latestLaunches';
import FinestProjectsSection from '@/components/organisms/finestProjectsSection';
// import TopDevelopersSection from '@/components/organisms/topDevelopers';
import GetInteriors from '@/components/organisms/getInteriors';
import OurLegacy from '@/components/organisms/ourLegacy';
import OurServices from '@/components/organisms/ourServices';
import GrandLaunch from '@/components/organisms/grandLaunch';

import { homePageData } from '@/data/homepage';
import ReraSection from '@/components/organisms/reraSection';
import FAQSection from '@/components/molecules/faqAccordion';
import LoanBanner from '@/components/organisms/loanBanner';
import H1 from '@/components/designSystem/typography/H1';
const {
  banner,
  hotPropertiesSection,
  latestLaunchesSection,
  // blogSection,
  finestProjectsSection,
  getInteriorsSection,
  ourLegacySection,
  reraSection,
  faqSection,
  loanBanner,
} = homePageData;
export const metadata: Metadata = {
  title: 'Buy Property | Real Estate in Bangalore | Pattem Estates',
  description:
    'Buy premium property in Bangalore with Pattem Estates. Explore top real estate projects, luxury apartments, villas & plots. Trusted real estate experts since 2010.',
  keywords: [
    'Buy Property in Bangalore',
    'Real Estate in Bangalore',
    'Property in Bangalore',
    'Real Estate Developers in Bangalore',
    'Top Property Developers in Bangalore',
    'Luxury Properties in Bangalore',
    'Villas in Bangalore',
    'Apartments in Bangalore',
    'Commercial Property in Bangalore',
    'Plots in Bangalore',
    'RERA Approved Properties',
    'Ready to Move Properties',
    'Under Construction Properties',
    'New Launch Properties',
  ],
  authors: [{ name: 'Pattem Estates' }],
  creator: 'Pattem Estates',
  publisher: 'Pattem Estates',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pattem-estates.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Buy Property in Bangalore | Real Estate in Bangalore – Pattem Estates',
    description:
      'Buy premium property in Bangalore with Pattem Estates. Explore top real estate projects and buy your dream property in Bangalore with trusted experts.',
    url: '/',
    siteName: 'Pattem Estates',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Pattem Estates - Discover Next Generation Home Buying Luxury',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pattem Estates - Premium Real Estate in Bangalore',
    description:
      'Leading real estate company in Bangalore offering premium properties, luxury apartments, villas and commercial spaces.',
    images: ['/twitter-home.jpg'],
    creator: '@pattemestates',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};
export default function Home() {
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      {/* Main page heading for SEO - hidden but accessible */}
      <H1 className="sr-only">
        Premium Real Estate Properties in Bangalore - Buy Apartments, Villas & Plots | Pattem
        Estates
      </H1>

      {/* Main content sections */}
      <main>
        <HomeBanner {...banner} />
        <HotProperties {...hotPropertiesSection} />
        <FinestProjectsSection {...finestProjectsSection} />
        <LatestLaunchesSection {...latestLaunchesSection} />
        <LoanBanner {...loanBanner} />
        {/* <TopDevelopersSection /> */}
        <GetInteriors {...getInteriorsSection} />
        <OurLegacy {...ourLegacySection} />
        <ReraSection {...reraSection} />
        <GrandLaunch />
        <OurServices />
        <FAQSection {...faqSection} />
        {/* <BlogsSection {...blogSection} /> */}
      </main>
    </>
  );
}
