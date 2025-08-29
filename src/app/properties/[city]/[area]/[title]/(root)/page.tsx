import AmenitiesAccordionSection from '@/components/molecules/amenitiesAccordion';
import FAQSection from '@/components/molecules/faqAccordion';
import AboutPropertyLocation from '@/components/organisms/aboutPropertyLocation';
import LocationAndConnectivitySection from '@/components/organisms/locationAndConnectivitySection';
import MasterPlanSection from '@/components/organisms/masterPlanSection';
import ProductHighlights from '@/components/organisms/productHighlights';
import ProductPageBanner from '@/components/organisms/productPageBanner';
import ProductPricing from '@/components/organisms/productPricing';
import ProductSpecification from '@/components/organisms/productSpecification';
import ProjectOverview from '@/components/organisms/projectOverview';
import UnitPlan from '@/components/organisms/unitPlan';
import { PROPERTIES_DATA } from '@/data/properties.data';
import { generateAllPropertyPaths, getPropertyBySlug } from '@/lib/utils/property-utils';
import {
  generateBreadcrumbStructuredData,
  generatePropertyMetaDescription,
  generatePropertyMetaTitle,
  generatePropertyStructuredData,
} from '@/lib/utils/seo-utils';
import { PageProps } from '@/props';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = await generateAllPropertyPaths();
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = await getPropertyBySlug(params.city, params.area, params.title);

  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }

  const metaTitle = generatePropertyMetaTitle(property);
  const metaDescription = generatePropertyMetaDescription(property);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: `${property.name}, ${property.area} properties, ${property.city} real estate, ${property.type}, ${property.developer}`,
    openGraph: {
      title: `${property.name} | Pattem Estates`,
      description: property.shortDescription,
      url: `https://pattem-estates.com/properties/${params.city}/${params.area}/${params.title}`,
      images: [
        {
          url: property.featuredImage,
          width: 1200,
          height: 630,
          alt: `${property.name} - Featured Image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.name} | Pattem Estates`,
      description: property.shortDescription,
      images: [property.featuredImage],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const property = await getPropertyBySlug(params.city, params.area, params.title);

  if (!property) {
    notFound();
  }

  const structuredData = generatePropertyStructuredData(property, 'https://pattem-estates.com');
  const breadcrumbData = generateBreadcrumbStructuredData(params.city, params.area, property.name);

  const {
    propertyDetailPage: {
      propertyBannerSection,
      propertyAmenitiesSection,
      propertyDetailsFAQSection,
      propertyLocationAndConnectivitySection,
      propertyHighlightsSection,
      propertyLocationSection,
      propertyMasterPlanSection,
      propertyOverviewSection,
      propertyPricingSection,
      propertySpecificationsSection,
      propertyUnitPlansSection,
    },
    priceRange,
  } = PROPERTIES_DATA[0];

  const productPageBanner = {
    priceRange,
    ...propertyBannerSection,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="min-h-screen">
        <ProductPageBanner {...productPageBanner} />
        <LocationAndConnectivitySection {...propertyLocationAndConnectivitySection} />
        <ProjectOverview {...propertyOverviewSection} />
        <AmenitiesAccordionSection {...propertyAmenitiesSection} />
        <ProductHighlights {...propertyHighlightsSection} />
        <MasterPlanSection {...propertyMasterPlanSection} />
        <UnitPlan {...propertyUnitPlansSection} />
        <ProductPricing {...propertyPricingSection} />
        <ProductSpecification {...propertySpecificationsSection} />
        <AboutPropertyLocation {...propertyLocationSection} />
        <FAQSection {...propertyDetailsFAQSection} />
      </div>
    </>
  );
}
