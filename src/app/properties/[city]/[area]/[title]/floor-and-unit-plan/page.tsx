import FAQSection from '@/components/molecules/faqAccordion';
import FloorFeatures from '@/components/organisms/floorFeatures';
import FloorPlan from '@/components/organisms/floorPlan';
import FloorTable from '@/components/organisms/floorTable';
import UnitHighLights from '@/components/organisms/unitHighlights';
import { getPropertyBySlug } from '@/lib/utils/property-utils';
import { PageProps } from '@/props';
import { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Floor & Unit Plan - ${title}`,
    description: `View floor plans and unit layouts for ${title}. Explore detailed apartment configurations and dimensions.`,
  };
}

async function FloorAndUnitPlanPage({ params }: PageProps) {
  const property = await getPropertyBySlug(params.city, params.area, params.title);
  if (!property) {
    return <div>Property not found</div>;
  }
  const {
    propertyFloorPlanSection,
    propertyDesignAndQualitySection,
    propertyUnitSizesSection,
    propertyUnitHighlightsSection,
    propertyUnitPlanFAQSection,
  } = property.propertyUnitPlanDetailPage;

  return (
    <div className="">
      <FloorPlan {...propertyFloorPlanSection} />
      <FloorFeatures {...propertyDesignAndQualitySection} />
      <FloorTable {...propertyUnitSizesSection} />
      <UnitHighLights {...propertyUnitHighlightsSection} />
      <FAQSection {...propertyUnitPlanFAQSection} />
    </div>
  );
}

export default FloorAndUnitPlanPage;
