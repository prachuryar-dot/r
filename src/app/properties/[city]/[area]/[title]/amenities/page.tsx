import { PROPERTIES_DATA } from '@/data/properties.data';
import { PageProps } from '@/props';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/molecules/faqAccordion';
import AmenitiesGalleryShowCaseArea from '@/components/organisms/amenitiesGalleryShowCaseArea';
import AmenitiesAccordionSection from '@/components/molecules/amenitiesAccordion';

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

export default function AmenitiesPage({ params }: PageProps) {
  const property = PROPERTIES_DATA.find((p) => p.slug === params.title);

  if (!property) notFound();

  const {
    propertyAmenitiesAccordionSection,
    propertyAmenitiesGalleryShowCaseArea,
    propertyAmenitiesFAQSection,
  } = property.propertyAmenitiesDetailPage;

  return (
    <div className="mt-12">
      <AmenitiesAccordionSection {...propertyAmenitiesAccordionSection} />
      <AmenitiesGalleryShowCaseArea
        propertyAmenitiesGalleryShowCaseArea={propertyAmenitiesGalleryShowCaseArea}
      />
      <FAQSection {...propertyAmenitiesFAQSection} />
    </div>
  );
}
