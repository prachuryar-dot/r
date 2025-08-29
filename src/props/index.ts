import { FAQSectionProps } from '@/components/molecules/faqAccordion';
import {
  AreaFilter,
  Category,
  Feature,
  HotProperty,
  LatestLaunchCard,
  BlogPost,
  FinestProject,
  BannerSlide,
} from '@/interfaces';

export interface HomePageDataProps {
  banner: BannerProps;
  hotPropertiesSection: HotPropertiesProps;
  finestProjectsSection: FinestProjectSectionProps;
  latestLaunchesSection: LatestLaunchesSectionProps;
  blogSection: BlogsSectionProps;
  getInteriorsSection: GetInteriorsSectionProps;
  ourLegacySection: OurLegacySectionProps;
  reraSection: ReraSectionProps;
  faqSection: FAQSectionProps;
  loanBanner: LoanBannerProps;
}

export interface BannerProps {
  headingPartOne: string;
  headingPartTwo: string;
  description: string;
  secondHeading: string;
  features?: Feature[];
  slides?: BannerSlide[];
}

export interface HotPropertiesProps {
  mainHeading: string;
  description: string;
  hotProperties: HotProperty[];
  areaFilters: AreaFilter[];
}

export interface LatestLaunchesSectionProps {
  heading: string;
  categories: Category[];
  properties: LatestLaunchCard[];
}

export interface HeroFeaturesProps {
  features: Feature[];
}

export interface AreaFilterPillsProps {
  filters: AreaFilter[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export interface HotPropertiesSliderProps {
  properties: HotProperty[];
  isMobile: boolean;
}

export interface LatestLaunchesCardProps {
  property: LatestLaunchCard;
  isActive: boolean;
}

export interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export interface LatestLaunchSliderProps {
  property: LatestLaunchCard;
}

export interface ThumbnailSliderProps {
  properties: LatestLaunchCard[];
  activeIndex: number;
  onThumbnailClick: (index: number) => void;
  onThumbnailHover: (index: number) => void;
}

export interface BlogCardProps {
  post: BlogPost;
}
export interface BlogsSliderProps {
  posts: BlogPost[];
}
export interface BlogsSectionProps {
  mainHeading: string;
  description: string;
  blogPosts: BlogPost[];
}

export interface ProjectCardProps {
  project: FinestProject;
  index: number;
}

export interface FinestProjectSliderProps {
  projects: FinestProject[];
}

export interface ProjectSectionHeaderProps {
  title: string;
  headingId: string;
}

export interface FinestProjectSectionProps {
  mainHeading: string;
  projects: FinestProject[];
}
export interface GetInteriorsSectionProps {
  mainHeading: string;
  description: string;
  desktopBannerImageUlr: string;
  mobileBannerImageUlr: string;
  ctaText: string;
}

export interface OurLegacySectionProps {
  mainHeading: string;
  descriptionOne: string;
  descriptionTwo: string;
  legacyImageUrl: string;
}

export interface ReraSectionProps {
  mainHeadingPartOne: string;
  mainHeadingPartTwo: string;
  mainHeadingPartThree: string;
  reraNumber: string;
  description: string;
  reraTitle: string;
  reraImageUrl: string;
}

export interface PageProps {
  params: {
    city: string;
    area: string;
    title: string;
  };
}
export interface LoanBannerProps {
  mainHeading: string;
  descriptions: string[];
  emiCalculatorCta: string;
  desktopBannerImageUlr: string;
  mobileBannerImageUlr: string;
  enquireCta: string;
}

export interface PromotionalBanner2Props {
  mainHeading: string;
  descriptions: string[];
  ctaText: string;
}
