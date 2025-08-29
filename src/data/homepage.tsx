import {
  Feature,
  HotProperty,
  AreaFilter,
  Category,
  LatestLaunchCard,
  BlogPost,
  FinestProject,
  Service,
  LaunchFeatures,
  BannerSlide,
} from '@/interfaces';
import { HomePageDataProps } from '@/props';
import {
  CreditCard,
  Handshake,
  Building2,
  BadgeIndianRupee,
  Sofa,
  Blocks,
  Building,
  Goal,
  LandPlot,
  Sparkles,
  Trees,
  Waves,
  BuildingIcon,
} from 'lucide-react';
import {
  BUILDERS_ICON,
  END_CUSTOMERS_ICON,
  INTERIOR_ICON,
  INVESTOR_ICON,
  AI_ICON,
  SALES_ICON,
  FUTURE_ICON,
  GLOBAL_ICON,
} from './icons';
import { FAQItem } from '@/components/molecules/faqAccordion';

export const features: Feature[] = [
  {
    icon: Handshake,
    title: 'Home Match',
    description: 'Smart Property Discovery',
    ariaLabel: 'Smart property discovery service',
  },
  {
    icon: Handshake,
    title: 'Meet',
    description: 'Face 2 Face / virtually',
    ariaLabel: 'Meet face to face or virtually',
  },
  {
    icon: Building2,
    title: 'Site Visit',
    description: 'Visit online / offline',
    ariaLabel: 'Site visit options online or offline',
  },
  {
    icon: BadgeIndianRupee,
    title: 'BestPrice',
    description: 'Assured value for money',
    ariaLabel: 'Best price guarantee with value for money',
  },
  {
    icon: CreditCard,
    title: 'EasyLoan',
    description: 'Assistance to procure loans',
    ariaLabel: 'Easy loan assistance service',
  },
  {
    icon: Sofa,
    title: 'Interior',
    description: 'Decide how your home looks',
    ariaLabel: 'Interior design customization service',
  },
];
export const hotProperties: HotProperty[] = [
  {
    id: 'sattva-city-hot-property-banner',
    title: 'Sattva City',
    location: 'Chikkajala, Bengaluru',
    priceRange: '₹55L - ₹8.6Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-home-page-designs.webp',
    isNewListing: true,
    area: 'North Bengaluru',
    size: '655-7503 sq.ft.',
    unit: '1,2,3,4BHK',
  },
  {
    id: 'sattva-vasanta-skye-hot-property-banner',
    title: 'Sattva Vasanta Skye',
    location: 'Kannamangala, Bengaluru',
    priceRange: '₹50L - ₹2.4Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-home-page-designs-sattva-vasanta-skye_vone.webp',
    isNewListing: true,
    area: 'North Bengaluru',
    size: '447-2254 sq.ft.',
    unit: '1,2,3,4BHK',
  },
  {
    id: 'sattva-lumina-hot-property-banner',
    title: 'Sattva Lumina',
    location: 'Yelahanka, Bengaluru',
    priceRange: '₹45L - ₹1.9Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-web-banner-sattva-lumina.webp',
    isNewListing: true,
    area: 'North Bengaluru',
    size: '269-1091 sq.ft.',
    unit: '1,2,3BHK',
  },
  {
    id: 'sattva-aeropolis-hot-property-banner',
    title: 'Sattva Aeropolis',
    location: 'Devanahalli, Bengaluru',
    priceRange: '₹52.6L - ₹97.6L',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-web-banner-sattva-aeropilis.webp',
    isNewListing: true,
    area: 'North Bengaluru',
    size: '656-1012 sq.ft.',
    unit: '1,2,3BHK',
  },
  {
    id: 'sattva-park-cubix-hot-property-banner',
    title: 'Sattva Park Cubix Phase 2',
    location: 'Devanahalli, Bengaluru',
    priceRange: '₹36L - ₹1.4Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-web-banner-sattva-aeropilis.webp', //TODO: Change Image
    isNewListing: true,
    area: 'North Bengaluru',
    size: '449-1702 sq.ft.',
    unit: '1,2,3BHK',
  },
  {
    id: 'sattva-forest-ridge-property-banner',
    title: 'Sattva Forest Ridge',
    location: 'JP Nagar, Bengaluru',
    priceRange: '₹70L - ₹2Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-web-banner-sattva-forest-ridge-jp-nagar.webp',
    isNewListing: false,
    area: 'South Bengaluru',
    size: '732-1864 sq.ft.',
    unit: '1,2,3BHK',
  },
  {
    id: 'sattva-la-vita-property-banner',
    title: 'Sattva La Vita',
    location: 'Hennur, Bengaluru',
    priceRange: '₹5.33Cr - ₹5.34Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/hot-propeties/hot-selling-web-banner-sattva-green-grooves-neelamangala.webp',
    isNewListing: true,
    area: 'North Bengaluru',
    size: '3255-3269 sq.ft.',
    unit: '4BHK',
  },
];
export const areaFilters: AreaFilter[] = [
  { id: 'all', label: 'All', value: 'all' },
  { id: 'central', label: 'Central Bengaluru', value: 'Central Bengaluru' },
  { id: 'south', label: 'South Bengaluru', value: 'South Bengaluru' },
  { id: 'north', label: 'North Bengaluru', value: 'North Bengaluru' },
  { id: 'east', label: 'East Bengaluru', value: 'East Bengaluru' },
  { id: 'west', label: 'West Bengaluru', value: 'West Bengaluru' },
];
export const categories: Category[] = [
  { id: 'new-launches', label: 'New launches', icon: <Sparkles size={16} /> },
  { id: 'apartments', label: 'Apartments', icon: <Building size={16} /> },
  { id: 'plots', label: 'Plots', icon: <LandPlot size={16} /> },
  { id: 'villas', label: 'Villas', icon: <BuildingIcon size={16} /> },
  { id: 'luxury-homes', label: 'Luxury homes', icon: <Building2 size={16} /> },
];
export const properties: LatestLaunchCard[] = [
  {
    id: '1',
    title: 'SBR Global Queensville',
    location: 'Bengaluru',
    area: '1126 Sq. Ft. (Carpet)',
    bhk: '3, 4 BHK Flats',
    features: [{ id: '1', icon: <Goal size={16} />, label: 'Sea Facing' }],
    price: '₹3.5 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-sattva-vasanta-skye.webp-vone.webp',
    category: 'new-launches',
    description:
      'SBR Global Queensville is the brand new residential Villament project launched right off Mysore Road near Kumbalgodu, South West Bangalore...',
  },
  {
    id: '2',
    title: 'Brigade Cornerstone Utopia',
    location: 'Bengaluru',
    area: '1200 Sq. Ft. (Carpet)',
    bhk: '2, 3 BHK Flats',
    features: [{ id: '1', icon: <Trees size={16} />, label: 'Garden Facing' }],
    price: '₹2.8 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-springs-villas.webp',
    category: 'apartments',
    description:
      'Brigade Cornerstone Utopia offers modern living with premium amenities and strategic location in the heart of Bengaluru...',
  },
  {
    id: '3',
    title: 'Prestige Lakeside Habitat',
    location: 'Bengaluru',
    area: '1500 Sq. Ft. (Carpet)',
    bhk: '3, 4 BHK Flats',
    features: [{ id: '1', icon: <Waves size={16} />, label: 'Lake Facing' }],
    price: '₹4.2 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-song-bird.webp',
    category: 'luxury-homes',
    description:
      'Prestige Lakeside Habitat brings luxury living with breathtaking lake views and world-class amenities...',
  },
  {
    id: '4',
    title: 'Godrej Prime Plots',
    location: 'Bengaluru',
    area: '2400 Sq. Ft.',
    bhk: 'Plot',
    features: [{ id: '1', icon: <Blocks size={16} />, label: 'Corner Plot' }],
    price: '₹1.8 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-park-cubix-phase-two.webp',
    category: 'plots',
    description:
      'Godrej Prime Plots offers premium land parcels in a rapidly developing area with excellent connectivity...',
  },
  {
    id: '5',
    title: 'Embassy Lake Terraces',
    location: 'Bengaluru',
    area: '1800 Sq. Ft. (Carpet)',
    bhk: '4, 5 BHK Flats',
    features: [{ id: '1', icon: <Waves size={16} />, label: 'Lake Facing' }],
    price: '₹6.5 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-lumina.webp',
    category: 'luxury-homes',
    description:
      'Embassy Lake Terraces represents the pinnacle of luxury living with unmatched amenities and location...',
  },
  {
    id: '6',
    title: 'Sobha Dream Acres',
    location: 'Bengaluru',
    area: '1350 Sq. Ft. (Carpet)',
    bhk: '3, 4 BHK Flats',
    features: [{ id: '1', icon: <Trees size={16} />, label: 'Garden Facing' }],
    price: '₹3.2 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-la-vita-row-houses-thannisandra.webp',
    category: 'new-launches',
    description:
      'Sobha Dream Acres offers thoughtfully designed homes with modern amenities and green surroundings...',
  },
  {
    id: '7',
    title: 'Sattva Luxuary',
    location: 'Bengaluru',
    area: '1500 Sq. Ft. (Carpet)',
    bhk: '3, 4 BHK Flats',
    features: [{ id: '1', icon: <Goal size={16} />, label: 'Sea Facing' }],
    price: '₹4.2 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-green-grooves-neelamangala.webp',
    category: 'luxury-homes',
    description:
      'Prestige Lakeside Habitat brings luxury living with breathtaking lake views and world-class amenities...',
  },
  {
    id: '8',
    title: 'Alpha Prime Plots',
    location: 'Bengaluru',
    area: '2400 Sq. Ft.',
    bhk: 'Plot',
    features: [{ id: '1', icon: <Waves size={16} />, label: 'Lake Facing' }],
    price: '₹1.8 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-forest-ridge-jp-nagar.webp',
    category: 'plots',
    description:
      'Godrej Prime Plots offers premium land parcels in a rapidly developing area with excellent connectivity...',
  },
  {
    id: '9',
    title: 'Beta Lake Terraces',
    location: 'Bengaluru',
    area: '1800 Sq. Ft. (Carpet)',
    bhk: '4, 5 BHK Flats',
    features: [{ id: '1', icon: <Blocks size={16} />, label: 'Corner Plot' }],
    price: '₹6.5 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-city-hamlet-upcoming-vone.webp',
    category: 'luxury-homes',
    description:
      'Embassy Lake Terraces represents the pinnacle of luxury living with unmatched amenities and location...',
  },
  {
    id: '10',
    title: 'Gamma Dream Acres',
    location: 'Bengaluru',
    area: '1350 Sq. Ft. (Carpet)',
    bhk: '3, 4 BHK Flats',
    features: [{ id: '1', icon: <Trees size={16} />, label: 'Garden Facing' }],
    price: '₹3.2 Cr',
    imageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/premium-properties/banner/top-development-company-sattva-aeropilis.webp',
    category: 'villas',
    description:
      'Sobha Dream Acres offers thoughtfully designed homes with modern amenities and green surroundings...',
  },
];
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'View Real Estate',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-1',
    description: 'Comprehensive guide to presenting UX reviews in real estate projects',
  },
  {
    id: '2',
    title: 'View Apartments',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-2',
    description: 'Best practices for creating effective UX presentations',
  },
  {
    id: '3',
    title: 'View Bangalore Properties',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-3',
    description: 'Advanced techniques for UX review presentations',
  },
  {
    id: '4',
    title: 'View Bangalore Villas',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-4',
    description: 'Modern approaches to UX presentation methodology',
  },
  {
    id: '5',
    title: 'View Sundown Villas',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-5',
    description: 'Interactive UX review presentation techniques',
  },
  {
    id: '6',
    title: 'View Beach Villas',
    category: 'Real estate',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730492257-6e46019399f7',
    link: '/blog/ux-review-presentations-6',
    description: 'Collaborative UX review presentation strategies',
  },
];
export const finestProjects: FinestProject[] = [
  {
    id: 'villas-estates',
    thumbnail:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/categories/villa.webp',
    title: 'Villas & Private Estates',
    description: 'Independent luxury homes in gated, green communities.',
    link: '/projects/villas-estates',
  },
  {
    id: 'prime-plots',
    thumbnail:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/categories/prime-plots.webp',
    title: 'Prime Plots',
    description: 'Exclusive land parcels in high-potential locations.',
    link: '/projects/prime-plots',
  },
  {
    id: 'townships',
    thumbnail:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/categories/landscape-modern-city.jpg',
    title: 'Townships',
    description: 'Self-sustained communities with world-class amenities.',
    link: '/projects/townships',
  },
  {
    id: 'apartments',
    thumbnail:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/categories/apartment.Webp',
    title: 'Apartments',
    description: 'Premium residences in landmark developments.',
    link: '/projects/apartments',
  },
];
export const services: Service[] = [
  {
    id: 'channel-partner',
    title: 'Channel Partner',
    description: "We amplify premier developer's reach and customer engagement.",
    imageAlt: 'Channel Partner',
    iconPlaceholder: INVESTOR_ICON,
  },
  {
    id: 'builders',
    title: 'Builder',
    description: 'Building distinguished estates with vision and impeccable execution.',
    imageAlt: 'Builder services for enhanced project visibility',
    iconPlaceholder: BUILDERS_ICON,
  },
  {
    id: 'construction',
    title: 'Construction',
    description: 'Meticulously constructing tailored estates with precision engineering.',
    imageAlt: 'Construction',
    iconPlaceholder: END_CUSTOMERS_ICON,
  },
  {
    id: 'interior',
    title: 'Interiors',
    description: 'Crafting beautiful interiors where elegance meets purpose.',
    imageAlt: 'Interior design and consultation services',
    iconPlaceholder: INTERIOR_ICON,
  },
];
export const launchFeatures: LaunchFeatures[] = [
  {
    id: 'ai-lead-generation',
    title: 'AI-Driven Lead Generation',
    description:
      'Precisely targeting and converting high-intent buyers with intelligent automation.',
    iconPlaceholder: AI_ICON,
  },
  {
    id: 'channel-sales',
    title: 'Structured Channel Sales',
    description: 'Leveraging data-driven processes to maximize sales velocity and performance.',
    iconPlaceholder: SALES_ICON,
  },
  {
    id: 'future-vision',
    title: 'Future-Ready Vision',
    description: 'Expanding into integrated development and interior design execution.',
    iconPlaceholder: FUTURE_ICON,
  },
  {
    id: 'global-infrastructure',
    title: 'Global Infrastructure',
    description:
      "Harnessing Pattem Group's international network for scalability, trust, and credibility.",
    iconPlaceholder: GLOBAL_ICON,
  },
];
export const faqData: FAQItem[] = [
  {
    id: 'homePageFAQ1',
    question: 'Who is Pattem Estates?',
    answer:
      'Pattem Estates, part of the Pattem Group of Companies, is a global luxury real estate brand focused on premium apartments, townships, commercial hubs, and bespoke interiors.',
  },
  {
    id: 'homePageFAQ2',
    question: 'What makes Pattem Estates different?',
    answer:
      'We stand out by uniting global design excellence with sustainability and innovation. Through AI-driven marketing, immersive AR/VR tours, and modern strategies, we set new benchmarks in quality and luxury.',
  },
  {
    id: 'homePageFAQ3',
    question: 'What services do you offer?',
    answer:
      'We provide four key services: Channel Partnering, Premium Building, Bespoke Construction, and Luxury Interiors — delivering premium, sustainable, and innovative real estate solutions.',
  },
  {
    id: 'homePageFAQ4',
    question: 'How do you use technology in real estate?',
    answer:
      'We leverage AI-powered marketing, smart home automation, digital campaigns, and immersive AR/VR property tours to enhance visibility and customer experience.',
  },
  {
    id: 'homePageFAQ5',
    question: 'Who are your clients?',
    answer:
      'Our clients include developers, investors, HNIs, NRIs, and global buyers who seek premium, sustainable, and future-ready real estate solutions.',
  },
  {
    id: 'homePageFAQ6',
    question: 'Where do you operate?',
    answer:
      'In Bengaluru, India, Pattem Estates operates worldwide, bringing global standards to luxury housing, commercial projects, hospitality ventures, and interiors.',
  },
  {
    id: 'homePageFAQ7',
    question: 'What is your mission?',
    answer:
      'Our mission is to be a global luxury brand recognized for timeless design, sustainable construction, and seamless client experiences.',
  },
  {
    id: 'homePageFAQ8',
    question: 'How can I contact you for more information?',
    answer:
      'You can reach out to us through our contact page or by calling our customer service number for any inquiries or assistance.',
  },
];

export const bannerSlides: BannerSlide[] = [
  {
    id: 'sattva-city-banner-image',
    desktopBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-city-desktop-banner-b4ZIhy786BDAyk7TDnLxYVD5EdzVmB.webp',
    mobileBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-city-mobile-banner-5C2dWeare2tblUQCoHm5oaSboqU9gx.webp',
    collaborationImageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/pattem-sattva-collobaration-XdZfJdBdw1S95heACxk4v8Yris1Mmd.svg',
    alt: 'Sattva City',
    bannerHeading: 'Sattva City - A Mega Township at ',
    bannerPropertyLocation: 'Chikkajala',
    description:
      'Discover a mega township that complements your lifestyle and aspirations with Sattva City, offering a curated collection of premium residences at Chikkajala.',
  },
  {
    id: 'sattva-vasanta-skye-banner-image',
    desktopBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-vasantha-skype-desktop-banner-muCgGiYHYGPyp0RKhvkEzmY1W4afdg.webp',
    mobileBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-vasantha-skype-mobile-banner-BfHna47spixXIbFJjNIVVJReVKuoUY.webp',
    collaborationImageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/pattem-sattva-collobaration-XdZfJdBdw1S95heACxk4v8Yris1Mmd.svg',
    alt: 'Sattva Vasanta Skye - Garden Apartments at Kannamangala',
    bannerHeading: 'Sattva Vasanta Skye - Garden Apartments at ',
    bannerPropertyLocation: 'Kannamangala',
    description:
      'Discover refined living at Sattva Vasanta Skye, offering garden residences set amidst elegant architecture, lush landscapes, and premium amenities for a lifestyle of comfort and prestige.',
  },
  {
    id: 'sattva-songbird-banner-image',
    desktopBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-songbird-desktop-banner-m1raYsdHPIH4u1urGl6qXUqJbU9eUm.webp',
    mobileBannerUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/sattva-songbird-mobile-banner-8EU2MgAR3b76boXJxuTLGhXzsKtKar.webp',
    collaborationImageUrl:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/banner/pattem-sattva-collobaration-XdZfJdBdw1S95heACxk4v8Yris1Mmd.svg',
    alt: 'Sattva Songbird - Elegant Apartments at Cheemasandra',
    bannerHeading: 'Sattva Songbird - Elegant Apartments at ',
    bannerPropertyLocation: 'Cheemasandra',
    description:
      'Step into beautifully designed spaces that combine comfort, style, and sophistication in every detail.',
  },
];

export const homePageData: HomePageDataProps = {
  banner: {
    headingPartOne: 'Discover Next Generation',
    headingPartTwo: 'Home Buying Luxury',
    description:
      'Seamless consultation, exclusive site visits, unmatched pricing, effortless financing, & bespoke interiors, everything you need for flawless home Buying journey',
    secondHeading: 'Smarter Path to Your Perfect Home',
    slides: bannerSlides,
  },
  hotPropertiesSection: {
    mainHeading: 'Prestigious Real Estate Projects in Bengaluru',
    description:
      'Presenting a curated portfolio of distinguished properties, architected to yield an exceptional lifestyle and sustained asset appreciation',
    hotProperties,
    areaFilters,
  },
  latestLaunchesSection: {
    heading: 'Premium Property Launches',
    categories,
    properties,
  },
  blogSection: {
    mainHeading: 'Latest Blogs',
    description:
      'Stay updated with the latest trends, insights, and expert advice in real estate through our curated blog posts',
    blogPosts,
  },

  finestProjectsSection: {
    mainHeading: 'Experience Curated Premium Property Categories',
    projects: finestProjects,
  },

  getInteriorsSection: {
    mainHeading: 'Inspire Distinctive Ambience within Your Interior Spaces',
    description:
      'Premium factory-made interiors with swift, seamless installation, or Elegant factory-built interiors for fast, flawless execution.',
    ctaText: 'View in detail',
    desktopBannerImageUlr:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/get-interiors-banner.webp',
    mobileBannerImageUlr:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/get-interior-mobile.webp',
  },
  ourLegacySection: {
    mainHeading: 'A Legacy of Innovation, Built to Elevate Real Estate',
    descriptionOne:
      'Pattem Group, headquartered in Bengaluru, India, is an innovation-driven global conglomerate with diverse ventures spanning technology (Pattem Digital), social impact (Pattem Foundation), global food production (Pattem FoodWorks), omniChannel retail (Pattem Retail), and real estate (Pattem Estates).',
    descriptionTwo:
      'At Pattem Estates, we are re-imagining the real estate landscape through tech-powered, end-to-end solutions designed to elevate project visibility, accelerate sales, and deliver exceptional property experiences for developers, investors, and discerning buyers alike.',
    legacyImageUrl: '/images/legacy-showcase.jpg',
  },
  reraSection: {
    mainHeadingPartOne: 'Pattem Estates, ',
    mainHeadingPartTwo: 'RERA Certified ',
    mainHeadingPartThree: 'Your Real Estate Partner.',
    description:
      'Pattem Estates blends RERA-certified credibility with advanced technology to deliver a seamless, informed, and premium property-buying experience. By partnering with esteemed builders, we ensure every client enjoys unmatched quality, transparency, and confidence throughout their purchase on our platform.',
    reraTitle: 'RERA Number',
    reraNumber: 'PRM/KA/RERA/1250/303/PR/080525/007730',
    reraImageUrl: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/rera-logo.svg',
  },
  faqSection: {
    mainHeading: 'Frequently asked questions',
    subtitle: "Didn't find the question",
    contactButtonText: 'Contact us',
    faqItems: faqData,
  },
  loanBanner: {
    mainHeading: 'Connect with Leading Banks for Your Home Purchase',
    descriptions: ['Low Interest Rates', 'Easy application process', 'Quick Approvals'],
    emiCalculatorCta: 'EMI Calculator',
    mobileBannerImageUlr:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/home-loan-mobile.webp',
    desktopBannerImageUlr:
      'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/home-loan-banner-U0SwzTOKhv4yssOBLGsBfbqBzZ9Cxr.webp',
    enquireCta: 'Enquire Now',
  },
};
