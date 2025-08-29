import { PageProps } from '@/props';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyBySlug } from '@/lib/utils/property-utils';
import FAQSection from '@/components/molecules/faqAccordion';
import SpecificBannerSection from '@/components/molecules/specificBannerSection';
import SpecificDetailSection from '@/components/organisms/specificDetailSection';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Amenities - ${title}`,
    description: `Explore the premium amenities available at ${title}. Discover lifestyle features and facilities.`,
  };
}

async function SpecificationsPage({ params }: PageProps) {
  const property = await getPropertyBySlug(params.city, params.area, params.title);

  if (!property) notFound();

  const {
    propertySpecificationsBannerSection,
    propertySpecificationsGalleryShowCaseArea,
    propertySpecificationFAQSection,
  } = property.propertySpecificationsDetailPage;

  return (
    <div>
      <SpecificBannerSection {...propertySpecificationsBannerSection} />
      <SpecificDetailSection
        propertySpecificationsGalleryShowCaseArea={propertySpecificationsGalleryShowCaseArea}
      />
      <FAQSection {...propertySpecificationFAQSection} />
    </div>
  );
}

export default SpecificationsPage;
