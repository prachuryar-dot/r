import { CardSliderItem } from '@/components/atoms/cardSlider/cardSlider';
import { productShowCaseSlide } from '@/components/atoms/productShowCase/ProductShowcaseButton';
import {
  AmenitiesAccordionItem,
  AmenitiesAccordionSectionProps,
} from '@/components/molecules/amenitiesAccordion';
import { FAQItem, FAQSectionProps } from '@/components/molecules/faqAccordion';
import { LocationTab } from '@/components/organisms/locationAndConnectivitySection';
export interface Property {
  id: string;
  name: string;
  slug: string;
  city: string;
  area: string;
  type: 'apartment' | 'villa' | 'commercial';
  priceRange: { min: number; max: number };
  currency: string;
  description: string;
  shortDescription: string;
  features: string[];
  amenities: string[];
  specifications: {
    totalFloors?: number;
    totalUnits?: number;
    launchDate?: string;
    possessionDate?: string;
    approvals?: string[];
    constructionType?: string;
    elevators?: number;
    parkingRatio?: string;
  };
  featuredImage: string;
  masterPlan: string;
  floorPlans: FloorPlan[];
  address: string;
  coordinates?: { lat: number; lng: number };
  developer: string;
  possession: string;
  status: 'upcoming' | 'ongoing' | 'ready';
  //eslint-ignore
  [key: string]: unknown;
  createdAt: string;
  updatedAt: string;
  propertyDetailPage: {
    propertyBannerSection: PropertyBannerSection;
    propertyLocationAndConnectivitySection: PropertyLocationAndConnectivitySection;
    propertyOverviewSection: PropertyOverviewSection;
    propertyAmenitiesSection: PropertyAmenitiesAccordionSection;
    propertyHighlightsSection: PropertyHighlightsSection;
    propertyMasterPlanSection: PropertyMasterPlanSection;
    propertyUnitPlansSection: PropertyUnitPlanSection;
    propertyPricingSection: PropertyPricingSection;
    propertySpecificationsSection: PropertySpecificationsSection;
    propertyLocationSection: PropertyLocationSection;
    propertyDetailsFAQSection: PropertyDetailsFAQSection;
  };
  propertyMasterPlanDetailPage: {
    propertyMasterPlanBannerSection: PropertyMasterPlanBannerSection;
    propertyMasterPlanTowersSection: PropertyMasterPlanTowersSection;
    propertyMasterPlanFeaturesSection: PropertyMasterPlanFeaturesSection;
    propertyMasterPlanFAQSection: FAQSectionProps;
  };
  propertyUnitPlanDetailPage: {
    propertyFloorPlanSection: PropertyFloorPlanSection;
    propertyDesignAndQualitySection: PropertyDesignAndQualitySection;
    propertyUnitSizesSection: PropertyUnitSizesSection;
    propertyUnitHighlightsSection: PropertyUnitHighlightsSection;
    propertyUnitPlanFAQSection: FAQSectionProps;
  };
  propertyAmenitiesDetailPage: {
    propertyAmenitiesAccordionSection: AmenitiesAccordionSectionProps;
    propertyAmenitiesGalleryShowCaseArea: PropertyAmenitiesGallerySection[];
    propertyAmenitiesFAQSection: FAQSectionProps;
  };
  propertySpecificationsDetailPage: {
    propertySpecificationsBannerSection: PropertySpecificationsBannerSection;
    propertySpecificationsGalleryShowCaseArea: PropertySpecificationsGalleryShowCaseArea[];
    propertySpecificationFAQSection: FAQSectionProps;
  };
}

export interface PropertyAmenitiesGallerySection {
  amenitiesGalleryTitle: string;
  amenitiesGalleryDescription: string;
  amenitiesGalleryAttractions: string[];
  amenitiesGallerySlideImages: CardSliderItem[];
  amenitiesGallerySecondHeading: string;
  communityAmenities: string[];
  icon?: React.ReactNode;
  id: string;
}

export interface PropertySpecificationsBannerSection {
  specificationsBannerSectionTitle: string;
  specificationsBannerSectionDescription: string;
  specificationsBannerSectionImageUrl: string;
  specificationsBannerSectionMobileImageUrl: string;
}

export interface PropertySpecificationsGalleryShowCaseArea {
  specificationsGalleryTitle: string;
  specificationsGalleryDescription: string;
  specificationsGalleryFeatures: string[];
  specificationsGalleryImageUrl: string;
}
export interface PropertyMasterPlanBannerSection {
  bannerSectionHeader: string;
  bannerSectionCta: string;
  bannerSectionImageUrl: string;
  bannerSectionDescription: string;
  bannerSectionFeatures: MasterPlanBannerFeatures[];
}

export interface PropertyMasterPlanTowersSection {
  towerSectionHeading: string;
  towerSectionDescription: string;
  towerSectionAmenitiesHeading: string;
  towerSectionUnitSizesHeading: string;
  towerSectionUnitSizesSubHeading: string;
  towerSectionTableDescription: string;
  towerSectionSliderImages: CardSliderItem[];
  towerSectionTableDetails: TowerDetail[];
  towerSectionAmenitiesPoints: AmenityPoint[];
  towerSectionUnitsSizes: UnitSize[];
}

export interface PropertyMasterPlanFeaturesSection {
  features: MasterPlanProps[];
}

export interface PropertyFloorPlanSection {
  floorPlanSectionHeading: string;
  floorPlanSectionDescription: string;
  floorPlanSectionPlans: FloorOrUnitPlan[];
}

export interface PropertyDesignAndQualitySection {
  designAndQualitySectionHeading: string;
  designAndQualitySectionFeatures: FloorFeature[];
}

export interface PropertyUnitSizesSection {
  unitSizesSectionHeading: string;
  unitSizesWithinTower: FloorTableData[];
}

export interface PropertyUnitHighlightsSection {
  highlightsSectionHeading: string;
  highlightsSectionHighlights: Highlight[];
}

export interface FloorFeature {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
export interface Highlight {
  name: string;
  description: string;
  image: CardSliderItem[];
}
export interface TowerDetail {
  towerRange: string;
  floors: string;
  specialFeature: string;
}

export interface AmenityPoint {
  description: string;
}

export interface UnitSize {
  type: string;
  sizeRange: string;
}
export interface TowerSectionDetails {
  amenitiesHeading: string;
  towerHeading: string;
  towerDescription: string;
  towerDetails: TowerDetail[];
  towerDetailsDescription: string;
  towerImageUrls: CardSliderItem[];
  amenitiesPoints: AmenityPoint[];
}

export interface MasterPlanBannerFeatures {
  title: string;
  description: string;
}
export interface FloorOrUnitPlan {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  enquiryNowUrl: string;
  area?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export interface FloorTableData {
  configurationType: string;
  carpetAreaApprox: string;
  price: string;
  priceEnquireLabel: string;
}

export interface MasterPlanDetails {
  title: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
  masterPlanBannerCta: string;
  description: string;
  masterPlanBannerFeatures: MasterPlanBannerFeatures[];
  towerSectionDetails: TowerSectionDetails;
  unitSizesSectionDetails: UnitSizesSectionProps;
  masterPlans: MasterPlanProps[];
  faqHeading: string;
  faqSubtitle: string;
  faqContactButtonText: string;
  faqData: FAQItem[];
}

//props
export interface TowersOverviewSectionProps {
  towerSectionHeading: string;
  towerSectionDescription: string;
  towerSectionTableDescription: string;
  towerSectionTableDetails: TowerDetail[];
  towerSectionAmenitiesHeading: string;
  towerSectionAmenitiesPoints: AmenityPoint[];
  towerSectionSliderImages: CardSliderItem[];
  towerSectionUnitsSizes: UnitSize[];
  towerSectionUnitSizesHeading: string;
  towerSectionUnitSizesSubHeading: string;
}

export interface UnitSizesSectionProps {
  towerSectionUnitSizesHeading: string;
  towerSectionUnitSizesSubHeading: string;
  towerSectionUnitsSizes: UnitSize[];
}

export interface MasterPlanProps {
  featuresSectionTittle: string;
  featuresSectionFeaturesHeading: string;
  featuresSectionAccessibilityHeading: string;
  featuresSectionDescription: string;
  featuresSectionBannerImageUrl: string;
  featuresSectionFeatureRichSpaces: string[];
  featuresSectionAccessibilityLayoutStrategies: string[];
}

export interface MasterPlanBannerProps {
  bannerSectionHeader: string;
  bannerSectionCta: string;
  bannerSectionImageUrl: string;
  bannerSectionDescription: string;
  bannerSectionFeatures: MasterPlanBannerFeatures[];
}

export interface FloorPlanProps {
  floorPlanSectionHeading: string;
  floorPlanSectionDescription: string;
  floorPlanSectionPlans: FloorOrUnitPlan[];
}

export interface FloorPlanCardProps {
  plan: FloorOrUnitPlan;
}

export interface FloorFeaturesProps {
  designAndQualitySectionHeading: string;
  designAndQualitySectionFeatures: FloorFeature[];
}

export interface FloorFeatureCardProps {
  feature: FloorFeature;
}

export interface UnitHighlightsProps {
  highlightsSectionHeading: string;
  highlightsSectionHighlights: {
    name: string;
    description: string;
    image: CardSliderItem[];
  }[];
}

export interface FloorTableProps {
  unitSizesSectionHeading: string;
  unitSizesWithinTower: FloorTableData[];
}

export interface towerAmenitiesProps {
  amenitiesHeading: string;
  amenitiesPoints: AmenityPoint[];
}

export interface FloorPlan {
  id: string;
  name: string;
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  description: string;
}
export interface PropertySpecification {
  id: string;
  value: string;
  displayText: string;
  displayIcon?: string;
}

export interface KeyProjectDate {
  id: string;
  title: string;
  date: string;
}

export interface UnitPlan {
  id: string;
  unitPlanTitle: string;
  unitPlanDescription: string;
  unitPlanImageUrl: string;
  unitPlanEnquireUrl: string;
}

export interface ProductPricingTableItem {
  pricingId: string;
  pricingConfigType: string;
  pricingCarpetApproxArea: string;
  price: string;
  pricingEnquireCtaText: string;
}

export interface PropertyLoactionInformation {
  estateInfoId: string;
  estateInfoTitle: string;
  estateInfoDescription: string;
}

export interface KnowAboutEstate {
  estateName: string;
  description: string;
  information: PropertyLoactionInformation[];
  imageUrl: string;
}

export interface HighlightItem {
  highlightId: string;
  highlightImageUrl: string;
  highlightDescription: string;
}

export interface HighlightsData {
  highlightsHeading: string;
  highlightsDescription: string;
  highlightsData: HighlightItem[];
}

export interface PropertyBannerSection {
  headingOne: string;
  headingTwo: string;
  mainBannerImageUrl: string;
  primeLocationAt: string;
  projectStatusTitle: string;
  projectStatusValue: 'New Launch' | 'Pre-Launch' | 'Upcoming Launches';
  isReraCertified: boolean;
  reraLogo: string;
  reraCertifiedLabel: string;
  priceRangeLabel: string;
  grabEarlyBirdAdvantages: string;
  limitedSlotsAvailable: string;
  brochureCta: string;
  bookVisitCta: string;
  viewAllPhotosCta: string;
  specifications: PropertySpecification[];
  productShowCaseSlides?: productShowCaseSlide[];
}

export interface PropertyLocationAndConnectivitySection {
  mainHeading: string;
  locationText: string;
  locationLink: string;
  locationLinkText: string;
  locationImage: string;
  locationTabs: LocationTab[];
}

export interface PropertyOverviewSection {
  projectOverviewLabel: string;
  projectWalkthroughLabel: string;
  projectOverviewDescription: string;
  propertySpecifications: PropertySpecification[];
  isReraCertified: boolean;
  reraLogo: string;
  reraCertifiedLabel: string;
  reraNumberLabel: string;
  projectReraNumber: string;
  keyProjectDatesTitle: string;
  keyProjectDates: KeyProjectDate[];
  projectOverviewImageUrl: string;
  projectOverviewViewMoreCta: string;
}

export interface PropertyAmenitiesAccordionSection {
  variant: 'dark' | 'light';
  mainHeading?: string;
  subtitle?: string;
  footerDescription?: string;
  contactButtonText?: string;
  amenitiesAccordionItems: AmenitiesAccordionItem[];
  cardSlideItems: CardSliderItem[];
}

export interface PropertyHighlightsSection {
  propertyHighlightsTitle: string;
  propertyHighlightsDescription: string;
  propertyHighlights: HighlightItem[];
}

export interface PropertyMasterPlanSection {
  masterPlanTitle: string;
  masterPlanImageUrl: string;
  masterPlanDescription: string;
  masterPlanEnquireNowCta: string;
  masterPlanViewInDetailCta: string;
}

export interface PropertyUnitPlanSection {
  unitPlanTitle: string;
  unitPlanDescription: string;
  unitPlanViewInDetailCta: string;
  unitPlans: UnitPlan[];
}

export interface PropertyPricingSection {
  pricingTitle: string;
  pricingDescription: string;
  pricingImageUrl: string;
  completeCostingDetailsLabel: string;
  pricingEnquireNowCta: string;
  pricingData: ProductPricingTableItem[];
}

export interface PropertySpecificationsSection {
  specificationTitle: string;
  specificationDescription: string;
  specificationViewInDetailCta: string;
  specificationImageUrl: string;
}

export interface PropertyLocationSection {
  propertyLoactionTitle: string;
  propertyLoactionDescription: string;
  propertyLoactionImageUrl: string;
  propertyLoactionInformation: PropertyLoactionInformation[];
}

export interface PropertyDetailsFAQSection {
  mainHeading: string;
  subtitle: string;
  contactButtonText: string;
  faqItems: FAQItem[];
}

export interface ProductPageBannerProps {
  headingOne: string;
  headingTwo: string;
  mainBannerImageUrl: string;
  primeLocationAt: string;
  projectStatusTitle: string;
  projectStatusValue: 'New Launch' | 'Pre-Launch' | 'Upcoming Launches';
  isReraCertified: boolean;
  reraLogo: string;
  reraCertifiedLabel: string;
  priceRangeLabel: string;
  grabEarlyBirdAdvantages: string;
  limitedSlotsAvailable: string;
  brochureCta: string;
  bookVisitCta: string;
  viewAllPhotosCta: string;
  specifications: PropertySpecification[];
  priceRange: {
    min: number;
    max: number;
  };
  productShowCaseSlides?: productShowCaseSlide[];
}

export interface ProjectOverviewProps {
  projectOverviewLabel: string;
  projectWalkthroughLabel: string;
  projectOverviewDescription: string;
  propertySpecifications: PropertySpecification[];
  isReraCertified: boolean;
  reraLogo: string;
  reraCertifiedLabel: string;
  reraNumberLabel: string;
  projectReraNumber: string;
  keyProjectDatesTitle: string;
  keyProjectDates: KeyProjectDate[];
  projectOverviewImageUrl: string;
  projectOverviewViewMoreCta: string;
}

export interface MasterPlanSectionProps {
  masterPlanTitle: string;
  masterPlanImageUrl: string;
  masterPlanDescription: string;
  masterPlanEnquireNowCta: string;
  masterPlanViewInDetailCta: string;
}

export interface UnitPlanCardProps {
  unitPlan: UnitPlan;
  unitPlanEnquireCtaText: string;
}

export interface UnitPlanProps {
  unitPlanTitle: string;
  unitPlanDescription: string;
  unitPlanViewInDetailCta: string;
  unitPlans: UnitPlan[];
}

export interface ProductPricingProps {
  pricingTitle: string;
  pricingDescription: string;
  pricingImageUrl: string;
  completeCostingDetailsLabel: string;
  pricingEnquireNowCta: string;
  pricingData: ProductPricingTableItem[];
}

export interface ProductSpecificationProps {
  specificationTitle: string;
  specificationDescription: string;
  specificationViewInDetailCta: string;
  specificationImageUrl: string;
}

export interface AboutPropertyLocationProps {
  propertyLoactionTitle: string;
  propertyLoactionDescription: string;
  propertyLoactionImageUrl: string;
  propertyLoactionInformation: PropertyLoactionInformation[];
}

export interface ProductHighlightsProps {
  propertyHighlightsTitle: string;
  propertyHighlightsDescription: string;
  propertyHighlights: HighlightItem[];
}

export interface PricingEnquiryCardProps {
  priceImageUrl: string;
  productPricingCtaText: string;
  completeCostingDetailsLabel: string;
}
