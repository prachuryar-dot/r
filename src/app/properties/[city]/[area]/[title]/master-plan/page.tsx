import FAQSection from '@/components/molecules/faqAccordion';
import MasterPlan from '@/components/organisms/masterPlan';
import TowersOverviewSection from '@/components/organisms/towersOverview';
import { getPropertyBySlug } from '@/lib/utils/property-utils';
import { MasterPlanProps } from '@/interfaces/property.interface';
import { PageProps } from '@/props';
import { Metadata } from 'next';
import MasterPlanBanner from '@/components/organisms/masterPlanBanner';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const title = params.title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Master Plan - ${title}`,
    description: `View the master plan layout of ${title}. Explore the property layout and development plan.`,
  };
}

async function MasterPlanPage({ params }: PageProps) {
  const property = await getPropertyBySlug(params.city, params.area, params.title);
  if (!property) {
    return <div>Property not found</div>;
  }
  const {
    propertyMasterPlanBannerSection,
    propertyMasterPlanTowersSection,
    propertyMasterPlanFeaturesSection,
    propertyMasterPlanFAQSection,
  } = property.propertyMasterPlanDetailPage;
  return (
    <div className="">
      <MasterPlanBanner {...propertyMasterPlanBannerSection} />

      <TowersOverviewSection {...propertyMasterPlanTowersSection} />
      {propertyMasterPlanFeaturesSection.features.map(
        (masterPlan: MasterPlanProps, index: number) => (
          <MasterPlan key={index} masterPlan={masterPlan} />
        ),
      )}

      <FAQSection {...propertyMasterPlanFAQSection} />
    </div>
  );
}

export default MasterPlanPage;
