import { Property } from '@/interfaces/property.interface';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'sattva-city-prestige-residence-apartment',
    name: 'Sattva City Prestige Residence Apartment',
    slug: 'sattva-city-prestige-residence-apartment',
    city: 'bangalore',
    area: 'north',
    type: 'apartment',
    priceRange: { min: 5500000, max: 86200000 },
    currency: 'INR',
    description:
      'Experience luxury living at Aparna Constructions Premium in West Bangalore. This premium residential project offers world-class amenities and modern architecture with excellent connectivity to major IT hubs.',
    shortDescription: 'Premium residential project with world-class amenities in West Bangalore.',
    features: [
      '24x7 Security with CCTV Surveillance',
      'Swimming Pool with Kids Pool',
      'State-of-the-art Gymnasium',
      'Children Play Area',
      'Covered Car Parking',
      'Power Backup',
      'Rainwater Harvesting',
      'Landscaped Gardens',
    ],
    amenities: [
      'Club House',
      'Swimming Pool',
      'Gymnasium',
      'Landscaped Gardens',
      'Children Play Area',
      'Jogging Track',
      'Basketball Court',
      'Multipurpose Hall',
      'Yoga/Meditation Area',
      'Senior Citizens Sitout',
    ],
    specifications: {
      totalFloors: 15,
      totalUnits: 120,
      launchDate: '2024',
      possessionDate: '2026',
      approvals: ['RERA', 'BDA', 'BESCOM', 'BWSSB'],
      constructionType: 'RCC Framed Structure',
      elevators: 2,
      parkingRatio: '1:1',
    },
    featuredImage: '/images/properties/aparna-constructions-premium/featured.jpg',
    masterPlan: '/images/properties/aparna-constructions-premium/master-plan.jpg',
    floorPlans: [
      {
        id: 'floorPlan1',
        name: '2BHK Premium',
        type: 'apartment',
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        price: 75000000,
        image: '/images/properties/aparna-constructions-premium/floor-plan-2bhk.jpg',
        description: 'Spacious 2BHK apartment with modern amenities and luxury finishes.',
      },
      {
        id: 'floorPlan2',
        name: '3BHK Luxury',
        type: 'apartment',
        area: 1800,
        bedrooms: 3,
        bathrooms: 3,
        price: 120000000,
        image: '/images/properties/aparna-constructions-premium/floor-plan-3bhk.jpg',
        description: 'Luxurious 3BHK apartment with premium interiors and expansive views.',
      },
    ],
    address: '123, Prestige Road, Bangalore,    Karnataka, India',
    coordinates: { lat: 12.9715987, lng: 77.594566 },
    developer: 'Aparna Constructions',
    possession: '2026',
    status: 'upcoming',
    updatedAt: '2025-08-22',
    createdAt: '2025-08-22',
    productShowCaseSlides: [
      {
        id: '1',
        src: '/images/properties/aparna-constructions-premium/featured.jpg',
        title: '',
        description: '',
      },
      {
        id: '2',
        src: '/images/properties/aparna-constructions-premium/master-plan.jpg',
        title: '',
        description: '',
      },
    ],
    propertyDetailPage: {
      propertyBannerSection: {
        headingOne: 'Sattva City',
        headingTwo: 'Prestige Residence Apartment',
        mainBannerImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/hamlet-one.webp',
        primeLocationAt: 'Prime Location at Chikkajala, North Bengaluru',
        projectStatusTitle: 'Project status: ',
        projectStatusValue: 'New Launch',
        isReraCertified: true,
        reraLogo: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/rera-logo.svg',
        reraCertifiedLabel: 'RERA Certified',
        priceRangeLabel: 'Price range',
        grabEarlyBirdAdvantages: 'Grab early bird advantages',
        limitedSlotsAvailable: 'Limited slots available',
        brochureCta: 'Brochure',
        bookVisitCta: 'Book visit',
        viewAllPhotosCta: 'View all photos',
        specifications: [
          { id: 'total-area', value: '53 Acres', displayText: 'Total area' },
          { id: 'size', value: '655 - 7503 Sq. ft.', displayText: 'Size' },
          { id: 'units', value: '3460', displayText: 'Number of Units' },
          {
            id: 'unit-config',
            value: '1, 2, 3 & 4 BHK flats',
            displayText: 'Unit config.',
          },
          {
            id: 'studio',
            value: 'Studio',
            displayText: 'Apartment Variant',
          },
          {
            id: 'penthouse',
            value: 'Penthouse',
            displayText: 'Apartment Variant',
          },
        ],
        productShowCaseSlides: [
          {
            id: '1',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/hamlet-one.webp',
            title: 'Main Title',
            description: 'Main Description',
          },
          {
            id: '2',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/flooring-page-desktop.webp',
            title: 'Sub Title',
            description: 'Sub Description',
          },
        ],
      },
      propertyLocationAndConnectivitySection: {
        mainHeading: 'Location & Connectivity',
        locationText: 'Chikkajala, North Bengaluru, Karnataka, 560035',
        locationImage:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/location-connectivity.webp',
        locationLinkText: 'View in detail',
        locationLink: 'https://maps.app.goo.gl/XgsP1SJNzLBRRzEh7',
        locationTabs: [
          {
            id: 'connectivity',
            tabName: 'Connectivity',
            connectivity: [
              { name: 'Doddajala Metro Station', time: '', distance: '2.7 km' },
              { name: 'Doddajala Bus Stop', time: '', distance: '2.1 km' },
              { name: 'Doddajala Railway Station', time: '', distance: '1.0 km' },
              { name: 'Kempegowda Airport', time: '', distance: '10.8 km' },
            ],
          },
          {
            id: 'healthcare',
            tabName: 'Healthcare',
            connectivity: [
              { name: 'New Manasa Hospital', time: '', distance: '14.4 km' },
              { name: 'Sri Shirdi Sai Hospital', time: '', distance: '13.9 km' },
              { name: 'Aster CMI Hospital', time: '', distance: '29 km' },
              { name: 'Akash Hospital', time: '', distance: '15.5 km' },
              { name: 'Ramaiah Leena Hospital', time: '', distance: '13.7 km' },
              { name: 'Nakshthra Hospital', time: '', distance: '14.2 km' },
              { name: 'NRV Hospital', time: '', distance: '2.9 km' },
            ],
          },
          {
            id: 'education',
            tabName: 'Education',
            connectivity: [
              { name: 'MVM School', time: '', distance: '7.4 km' },
              { name: 'Vidyashilpa Academy', time: '', distance: '12.4 km' },
              { name: 'Embassy Academy', time: '', distance: '9 km' },
              { name: 'Delhi Public School', time: '', distance: '12.1 km' },
              { name: 'Akash School', time: '', distance: '15.3 km' },
              { name: 'Sterling English School', time: '', distance: '14.3 km' },
            ],
          },
          {
            id: 'malls-restaurants',
            tabName: 'Malls and Restaurants',
            connectivity: [
              { name: 'Garuda Mall', time: '', distance: '27.6 km' },
              { name: 'Esteem Mall', time: '', distance: '16.6 km' },
              { name: 'DRV Plaza', time: '', distance: '14.4 km' },
              { name: 'PVR Orion Uptown Mall', time: '', distance: '30.7 km' },
              { name: 'Galleria Mall', time: '', distance: '14.8 km' },
              { name: 'Restaurants', time: '', distance: 'Not given by the product website' },
            ],
          },
          {
            id: 'others',
            tabName: 'Others',
            connectivity: [
              { name: 'Lalbagh Botanical Garden', time: '', distance: '29.2 km' },
              { name: 'Cubbon Park', time: '', distance: '26.1 km' },
              { name: 'Devanahalli Fort', time: '', distance: '14.1 km' },
              { name: "Tipu Sultan's Summer Palace", time: '', distance: '29.8 km' },
              { name: 'Bangalore Palace', time: '', distance: '23.3 km' },
              { name: 'Prestige Tech Cloud', time: '', distance: '4.8 km' },
              { name: 'KIADB', time: '', distance: '12.4 km' },
              { name: 'Manyata Tech Park', time: '', distance: '18.7 km' },
              { name: 'Ecopolis', time: '', distance: '7.6 km' },
              { name: 'IFCI Financial City', time: '', distance: '10.1 km' },
            ],
          },
        ],
      },
      propertyOverviewSection: {
        projectOverviewLabel: 'Project Overview',
        projectWalkthroughLabel: 'Project walkthrough',
        projectOverviewDescription:
          'Sattva City at Chikkajala is a premium pre-launch township by Sattva Group, spanning 53 acres with 80% open space. Comprising 13 G+17 high-rise towers and 3,460 (shown in homepage) luxury residences, including Studio to Penthouse variants, it blends modern architecture with a village-inspired gated community. Sattva City offers 50+ world-class amenities and exceptional connectivity. This landmark project promises refined living and strong investment potential, with completion scheduled for March 2029.',
        propertySpecifications: [
          { id: 'total-area', value: '53 Acres', displayText: 'Total area' },
          { id: 'size', value: '655 - 7503 Sq. ft.', displayText: 'Size' },
          { id: 'units', value: '3460', displayText: 'Number of Units' },
          {
            id: 'unit-config',
            value: '1, 2, 3 & 4 BHK flats',
            displayText: 'Unit config.',
          },
          {
            id: 'studio',
            value: 'Studio',
            displayText: 'Apartment Variant',
          },
          {
            id: 'penthouse',
            value: 'Penthouse',
            displayText: 'Apartment Variant',
          },
        ],
        isReraCertified: true,
        reraLogo: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/homePage/rera-logo.svg',
        reraCertifiedLabel: 'Project RERA certified',
        reraNumberLabel: 'RERA No: ',
        projectReraNumber: 'PRM/KA/RERA/1250/303/PR/080525/007730',
        keyProjectDatesTitle: 'Key Project Dates',
        keyProjectDates: [
          { id: 'prelaunch-date', title: 'Prelaunch Date', date: 'May 2024' },
          { id: 'launch-date', title: 'Launch Date', date: '2nd October 2025' },
          { id: 'completion-time', title: 'Completion Time', date: '4 Years' },
          { id: 'completion-date-1', title: 'Completion Date', date: 'March 2029' },
          { id: 'completion-date-2', title: 'Completion Date', date: 'March 2029' },
        ],
        projectOverviewImageUrl:
          'https://images.unsplash.com/photo-1755217908514-785dbc5ad381?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        projectOverviewViewMoreCta: 'View more',
      },
      propertyAmenitiesSection: {
        variant: 'dark',
        mainHeading: 'Sattva City Amenities',
        subtitle:
          'Sattva City offers thoughtfully curated amenities to suit diverse lifestyles. From verdant landscapes fostering serenity to modern facilities ensuring convenience, every element is designed to enrich daily living and cater to individual tastes.',
        amenitiesAccordionItems: [
          {
            id: 'nature-tranquility',
            amenitiesTitle: 'Nature & Tranquility',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'nature-trail',
                title: 'Nature Trail',
              },
              {
                id: 'landscaped-garden',
                title: 'Landscaped Garden',
              },
              {
                id: 'urban-farming',
                title: 'Urban Farming',
              },
            ],
          },
          {
            id: 'fitness-wellness',
            amenitiesTitle: 'Fitness & Wellness',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'gym-gymnasium',
                title: 'Gym / Gymnasium',
              },
              {
                id: 'yoga-area',
                title: 'Yoga / Yoga Pavilion / Yoga Deck / Yoga Area',
              },
              {
                id: 'squash-court',
                title: 'Squash Court',
              },
              {
                id: 'sauna',
                title: 'Sauna',
              },
              {
                id: 'steam-room',
                title: 'Steam Room',
              },
              {
                id: 'cycling-track',
                title: 'Cycling Track',
              },
              {
                id: 'adult-fitness-frame',
                title: 'Adult Fitness Frame',
              },
              {
                id: 'walking-track',
                title: 'Walking Track',
              },
              {
                id: 'aerobics',
                title: 'Aerobics',
              },
              {
                id: 'foot-reflexology',
                title: 'Foot Reflexology',
              },
              {
                id: 'spa',
                title: 'Spa',
              },
              {
                id: 'health-fitness-amenities',
                title: 'Health and Fitness Amenities',
              },
            ],
          },
          {
            id: 'splash-leisure',
            amenitiesTitle: 'Splash & Leisure',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'swimming-pool',
                title: 'Swimming Pool (all mentions)',
              },
              {
                id: 'jacuzzi',
                title: 'Jacuzzi',
              },
            ],
          },
          {
            id: 'community-lifestyle',
            amenitiesTitle: 'Community and Lifestyle',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'club-house',
                title: 'Club House (all mentions)',
              },
              {
                id: 'party-hall',
                title: 'Party Hall / Party Area',
              },
              {
                id: 'mini-theater',
                title: 'Mini Theater',
              },
              {
                id: 'dance-music',
                title: 'Dance/Music',
              },
              {
                id: 'indoor-games-room',
                title: 'Indoor Games Room',
              },
              {
                id: 'outdoor-courts',
                title: 'Outdoor Courts',
              },
              {
                id: 'snooker',
                title: 'Snooker',
              },
              {
                id: 'billiards',
                title: 'Billiards',
              },
              {
                id: 'board-games',
                title: 'Board Games / Board Games Room',
              },
              {
                id: 'table-tennis',
                title: 'Table Tennis',
              },
              {
                id: 'skating-area',
                title: 'Skating Area',
              },
              {
                id: 'multisports-court',
                title: 'Multisports Court',
              },
              {
                id: 'lifestyle',
                title: 'Lifestyle',
              },
              {
                id: 'community-amenities',
                title: 'Community Amenities',
              },
            ],
          },
          {
            id: 'play-area-kids',
            amenitiesTitle: "Play Area and Kids' Zones",
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'kids-activity-zone',
                title: 'Kids Activity Zone',
              },
              {
                id: 'kids-playground',
                title: 'Kids Playground',
              },
              {
                id: 'kids-play-area',
                title: 'Kids Play Area',
              },
            ],
          },
          {
            id: 'infrastructure-utility',
            amenitiesTitle: 'Infrastructure and Utility',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'video-door-phone',
                title: 'Video Door Phone',
              },
              {
                id: 'cctv-monitoring',
                title: '24/7 CCTV Monitoring',
              },
            ],
          },
        ],
        cardSlideItems: [
          {
            id: 'slider-one',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/sattva-city-amenities-living-room-one.webp',
            alt: 'Slider One',
          },
          {
            id: 'slider-two',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/sattva-city-amenities-play-ground-two.webp',
            alt: 'Slider Two',
          },
          {
            id: 'slider-three',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/sattva-city-amenities-gym-three.webp',
            alt: 'Slider Three',
          },
        ],
      },
      propertyHighlightsSection: {
        propertyHighlightsTitle: 'Sattva City Highlights',
        propertyHighlightsDescription:
          'Sattva City unfolds across 53 acres with 80% verdant expanse, presenting landscaped grandeur and serene environs for elevated living.',
        propertyHighlights: [
          {
            highlightId: 'luxury-living',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/lavish-community-offering-luxury-living-amidst-serene-surroundings-one.webp',
            highlightDescription:
              'Lavish community offering luxury living amidst serene surroundings',
          },
          {
            highlightId: 'green-expanse',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/sprawling-acres-expanse-of-curated-green-luxury-living-two.webp',
            highlightDescription: 'Sprawling 53-acres expanse of curated green luxury living.',
          },
          {
            highlightId: 'elegant-homes',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/elegant-homes-from-compact-luxury-to-expansive-family-residences-three.webp',
            highlightDescription:
              'Elegant homes from compact luxury to expansive family residences.',
          },
          {
            highlightId: 'majestic-towers',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/majestic-towers-structured-with-precision-for-skyline-dominance-four.webp',
            highlightDescription:
              'Majestic towers structured with precision for skyline dominance.',
          },
          {
            highlightId: 'residential-offering',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/vast-residential-offering-elegant-living-spaces-five.webp',
            highlightDescription: 'Vast residential offering of 3,640 elegant living spaces.',
          },
          {
            highlightId: 'flexible-plans',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/flexible-floor-plans-spanning-six.webp',
            highlightDescription: 'Flexible floor plans spanning 450 to 2,895 square feet.',
          },
          {
            highlightId: 'completion-date',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/completion-scheduled-seven.webp',
            highlightDescription: 'Completion scheduled for 31 March, 2029.',
          },
          {
            highlightId: 'luxury-community',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/lavish-community-offering-luxury–living-amidst-serene-surroundings-eight.webp',
            highlightDescription:
              'Lavish community offering luxury living amidst serene surroundings',
          },
          {
            highlightId: 'serene-living',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/rera-approval-process-underway-for-official-project-endorsement-nine.webp',
            highlightDescription:
              'Lavish community offering luxury living amidst serene surroundings',
          },
          {
            highlightId: 'rera-approval',
            highlightImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/rera-approval-process-underway-for-official-project-endorsement-nine.webp',
            highlightDescription:
              'RERA approval process underway for official project endorsement.',
          },
        ],
      },
      propertyMasterPlanSection: {
        masterPlanTitle: 'Master Plan',
        masterPlanImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan.webp',
        masterPlanDescription:
          'Sattva City’s master plan spans 49.65 acres in Chikkajala, featuring 13 iconic towers, defined entry-exit points, 50+ outdoor experiences, and provisions for future developments.',
        masterPlanEnquireNowCta: 'Enquire now',
        masterPlanViewInDetailCta: 'View in detail',
      },
      propertyUnitPlansSection: {
        unitPlanTitle: 'Floor Plan',
        unitPlanDescription:
          'The Sattva City floor plan offers residences from elegant studios to lavish penthouses, spanning 450 to 2,895 sq. ft. Across 3640 units in 13 towers, the design blends privacy, seamless layouts, and panoramic views, embodying grandeur and refined living. Every detail reflects architectural finesse, curating an elevated lifestyle experience.',
        unitPlanViewInDetailCta: 'View in detail',
        unitPlans: [
          {
            id: 'studio',
            unitPlanTitle: 'Studio',
            unitPlanDescription:
              'The studio residence exudes minimalist elegance with every inch crafted for optimal functionality and chic sophistication.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/studio-floor-plan.one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '1bhk',
            unitPlanTitle: '1 BHK Floor Plan',
            unitPlanDescription:
              'A refined urban retreat, blending graceful interiors with functional layouts, perfect for singles or couples seeking comfort with a touch of exclusivity.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '2bhk',
            unitPlanTitle: '2 BHK Floor Plan',
            unitPlanDescription:
              'Spacious and contemporary, the 2 BHK residence harmonizes privacy and openness, creating a luxurious abode for discerning families.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '2_5bhk',
            unitPlanTitle: '2.5 BHK Floor Plan',
            unitPlanDescription:
              'A versatile masterpiece, offering an additional space ideal for a study or guest room, combining practicality with premium aesthetics.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-point-five-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '3bhk',
            unitPlanTitle: '3 BHK Floor Plan',
            unitPlanDescription:
              'The epitome of family luxury, 3 BHK residences boast expansive living areas and refined finishes for an elevated lifestyle.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '3_5bhk',
            unitPlanTitle: '3.5 BHK Floor Plan',
            unitPlanDescription:
              'Balancing grandeur with adaptability, these homes offer ample room for entertainment, relaxation, and work-from-home elegance.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-point-five-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: '4bhk',
            unitPlanTitle: '4 BHK Floor Plan',
            unitPlanDescription:
              'A statement of luxury, the 4 BHK residence delivers palatial proportions, bespoke interiors, and unmatched comfort for the elite.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/four-bhk-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
          {
            id: 'penthouse',
            unitPlanTitle: 'Pent House Floor Plan',
            unitPlanDescription:
              'Crowning the towers, these 7503 sq. ft. residences redefine indulgence with double-height ceilings, private terraces, and panoramic skyline views.',
            unitPlanImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/penthouse-floor-plan-one.webp',
            unitPlanEnquireUrl: '#',
          },
        ],
      },
      propertyPricingSection: {
        pricingTitle: 'Sattva City Price',
        pricingDescription:
          'Experience premium living at Sattva City with pre-launch pricing of ₹8,400 per sq. ft., open until October 2025. Residences, from 655 to 2,895 sq. ft., embody architectural excellence and strategic value. Post-launch, rates are expected to climb to ₹11,000–₹11,500 per sq. ft., making early acquisition highly advantageous.',
        pricingImageUrl:
          'https://plus.unsplash.com/premium_photo-1753447376861-5654adb548f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        completeCostingDetailsLabel: 'Complete costing details',
        pricingEnquireNowCta: 'Enquire now',
        pricingData: [
          {
            pricingId: 'studio',
            pricingConfigType: 'Studio',
            pricingCarpetApproxArea: '450 - 550 Sq Ft',
            price: 'Only on request',
            pricingEnquireCtaText: 'Request',
          },
          {
            pricingId: '1-bhk',
            pricingConfigType: '1 BHK',
            pricingCarpetApproxArea: '600 - 700 Sq Ft',
            price: 'Only on request',
            pricingEnquireCtaText: 'Request',
          },
          {
            pricingId: '2-bhk',
            pricingConfigType: '2 BHK',
            pricingCarpetApproxArea: '1100 - 1350 Sq Ft',
            price: '₹ 1.25 - 1.55 crores Onwards',
            pricingEnquireCtaText: 'Enquire',
          },
          {
            pricingId: '2.5-bhk',
            pricingConfigType: '2.5 BHK',
            pricingCarpetApproxArea: '1500 – 1700 Sq Ft',
            price: '₹ 1.6 - 1.8 crores Onwards',
            pricingEnquireCtaText: 'Enquire',
          },
          {
            pricingId: '3-bhk',
            pricingConfigType: '3 BHK',
            pricingCarpetApproxArea: '1916 Sq Ft',
            price: '₹ 2.4 - 2.5 crores onwards',
            pricingEnquireCtaText: 'Enquire',
          },
          {
            pricingId: '3.5-bhk',
            pricingConfigType: '3.5 BHK',
            pricingCarpetApproxArea: '2239 Sq Ft',
            price: '₹ 3 crores onwards',
            pricingEnquireCtaText: 'Enquire',
          },
          {
            pricingId: '4-bhk',
            pricingConfigType: '4 BHK',
            pricingCarpetApproxArea: '2895 Sq Ft',
            price: '₹ 4 crores onwards',
            pricingEnquireCtaText: 'Enquire',
          },
          {
            pricingId: 'pent-house',
            pricingConfigType: 'Pent House',
            pricingCarpetApproxArea: '7503 Sq Ft',
            price: 'Only on request',
            pricingEnquireCtaText: 'Enquire',
          },
        ],
      },
      propertySpecificationsSection: {
        specificationTitle: 'Sattva specification',
        specificationDescription:
          'At Sattva City, every element is built on a foundation of trust, precision, and thoughtful design. From sturdy structures to elegant finishes, we ensure that each detail reflects long-term value and timeless style. The materials and techniques used are curated to elevate everyday living while standing the test of time.',
        specificationViewInDetailCta: 'View in detail',
        specificationImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/specification-page-mobile.webp',
      },
      propertyLocationSection: {
        propertyLoactionTitle: 'Know about Chikkajala',
        propertyLoactionDescription:
          'Chikkajala, in Bangalore Urban district, blends heritage charm with modern convenience. Known for the historic Chikkajala Fort, the area offers excellent proximity to highways, tech parks, railway stations, and Kempegowda International Airport. Metro access via the Blue Line and a strong BMTC bus network ensure quick connectivity to prime city zones, making it a top investment hotspot in North Bangalore.',
        propertyLoactionImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/homePage/chikkajala-map.webp',
        propertyLoactionInformation: [
          {
            estateInfoId: 'history',
            estateInfoTitle: 'History',
            estateInfoDescription:
              'Chikkajala’s roots date back centuries, with the ancient fort as its defining landmark. Once a quiet settlement, it has evolved into a vibrant locality that preserves its cultural identity while embracing rapid urban growth.',
          },
          {
            estateInfoId: 'attractions',
            estateInfoTitle: 'Attractions',
            estateInfoDescription:
              'Prestigious schools like Delhi Public School and Vidyashilpa Academy, IT hubs such as Manyata Tech Park, and malls like Orion Uptown add to its appeal. With unmatched connectivity and amenities, projects like Sattva City position Chikkajala as a prime choice for luxury living.',
          },
        ],
      },
      propertyDetailsFAQSection: {
        mainHeading: 'Frequently asked questions',
        subtitle: "Didn't find the question?",
        contactButtonText: 'Contact us',
        faqItems: [
          {
            id: 'faq-1',
            question: 'Who is Pattem Estates?',
            answer:
              'Pattem Estates, part of the Pattem Group of Companies, is a global luxury real estate brand focused on premium apartments, townships, commercial hubs, and bespoke interiors.',
          },
          {
            id: 'faq-2',
            question: 'What makes Pattem Estates different?',
            answer:
              'We stand out by uniting global design excellence with sustainability and innovation. Through AI-driven marketing, immersive AR/VR tours, and modern strategies, we set new benchmarks in quality and luxury.',
          },
          {
            id: 'faq-3',
            question: 'What services do you offer?',
            answer:
              'We provide four key services: Channel Partnering, Premium Building, Bespoke Construction, and Luxury Interiors — delivering premium, sustainable, and innovative real estate solutions.',
          },
          {
            id: 'faq-4',
            question: 'How do you use technology in real estate?',
            answer:
              'We leverage AI-powered marketing, smart home automation, digital campaigns, and immersive AR/VR property tours to enhance visibility and customer experience.',
          },
          {
            id: 'faq-5',
            question: 'Who are your clients?',
            answer:
              'Our clients include developers, investors, HNIs, NRIs, and global buyers who seek premium, sustainable, and future-ready real estate solutions.',
          },
          {
            id: 'faq-6',
            question: 'Where do you operate?',
            answer:
              'In Bengaluru, India, Pattem Estates operates worldwide, bringing global standards to luxury housing, commercial projects, hospitality ventures, and interiors.',
          },
          {
            id: 'faq-7',
            question: 'What is your mission?',
            answer:
              'Our mission is to be a global luxury brand recognized for timeless design, sustainable construction, and seamless client experiences.',
          },
        ],
      },
    },
    propertyMasterPlanDetailPage: {
      propertyMasterPlanBannerSection: {
        bannerSectionHeader: 'Sattva Hamlet Master Plan - A Vision in 53 Acres',
        bannerSectionCta: 'Enquire now',
        bannerSectionImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan.webp',
        bannerSectionDescription:
          'Sattva City spans 49.65 acres in Chikkajala, featuring 13 elegant towers, 50+ premium outdoor amenities, and planned future enhancements. This single-phase development, launching in October 2025 and completing in 2029, offers over 80% open green landscapes with less than 20% construction. Residences include Studio, 1, 2, 2.5, 3, 3.5, and 4 BHK units, plus luxurious penthouses, all Vaastu-compliant to harmonize modern living with timeless design principles',
        bannerSectionFeatures: [
          {
            title: 'Diverse Home Options',
            description: 'Choose from Studio, 1, 2, 2.5, 3, 3.5, 4 BHKs, and Penthouses.',
          },
          {
            title: '80% Open Spaces',
            description: 'Lush green areas with minimal construction footprint.',
          },
          {
            title: 'Vaastu-Ready Homes',
            description: 'Designed for balance, peace & city living.',
          },
        ],
      },
      propertyMasterPlanTowersSection: {
        towerSectionHeading: 'Smartly planned towers for modern living',
        towerSectionDescription:
          'Sattva City includes 13 towers carefully positioned to optimize light, ventilation, and greenery access. Each tower integrates features for a peaceful, elevated lifestyle:',
        towerSectionAmenitiesHeading: ' Amenities & Orientation',
        towerSectionUnitSizesHeading: 'Unit Sizes within Towers',
        towerSectionUnitSizesSubHeading: 'Select from a diverse range of well-sized homes:',
        towerSectionTableDescription:
          'All apartment units—from Studio to 4BHK and Penthouses—are thoughtfully placed to maximize green views and daylight. Each unit is well-ventilated and Vaastu-compliant, offering better living experience across the towers',

        towerSectionSliderImages: [
          {
            id: 'SampleImage1',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan-page/smartly-planned-towers-for-modern-living-one.webp',
            alt: 'Mountain landscape with snow-capped peaks',
            width: 1200,
            height: 800,
          },
          {
            id: 'SampleImage2',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan-page/smartly-planned-towers-for-modern-living-two.webp',
            alt: 'Serene ocean view with crystal clear water',
            width: 1200,
            height: 800,
          },
          {
            id: 'SampleImage3',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan-page/smartly-planned-towers-for-modern-living-three.webp',
            alt: 'Mystical forest path through tall trees',
            width: 1200,
            height: 800,
          },
        ],

        towerSectionTableDetails: [
          {
            towerRange: 'Tower 1 - 4',
            floors: '2B + G + 21UF',
            specialFeature: 'Amenity-facing, greenery views',
          },
          {
            towerRange: 'Tower 5 - 10',
            floors: '2B + G + 16UF',
            specialFeature: 'Centrally Located',
          },
          {
            towerRange: 'Tower 11',
            floors: '2B + G + 18UF',
            specialFeature: 'Mid-size Tower',
          },
          {
            towerRange: 'Tower 12',
            floors: '2B + G + 17UF',
            specialFeature: 'Pool-facing Views',
          },
          {
            towerRange: 'Tower 13',
            floors: '2B + G + 19UF',
            specialFeature: 'Panoramic View Towards Pool',
          },
        ],

        towerSectionAmenitiesPoints: [
          {
            description:
              'T01-T08 are amenity-facing—the ideal spot for families and leisure seekers.',
          },
          {
            description: 'T12 & T13 benefit from prime pool-facing views.',
          },
          {
            description:
              'The clubhouse is situated near T05, ensuring seamless access to recreational facilities.',
          },
          {
            description:
              'Outdoor amenities such as the garden, cricket ground, kids play area, and tennis courts are located behind T01-T03.',
          },
        ],

        towerSectionUnitsSizes: [
          { type: 'Studio', sizeRange: '450 - 550 Sq Ft' },
          { type: '1 BHK', sizeRange: '600 - 700 Sq Ft' },
          { type: '2 BHK', sizeRange: '1100 - 1350 Sq Ft' },
          { type: '2.5 BHK', sizeRange: '1500 - 1700 Sq Ft' },
          { type: '3 BHK', sizeRange: '1916 Sq Ft' },
          { type: '3.5 BHK', sizeRange: '2239 Sq Ft' },
          { type: '4 BHK', sizeRange: '2895 Sq Ft' },
          { type: 'Penthouse', sizeRange: '7503 Sq Ft' },
        ],
      },
      propertyMasterPlanFeaturesSection: {
        features: [
          {
            featuresSectionTittle: 'Clubhouse Master Plan',
            featuresSectionFeaturesHeading: ' Feature-Rich Spaces',
            featuresSectionAccessibilityHeading: 'Accessibility & Layout Strategy',
            featuresSectionDescription:
              'The development boasts three luxurious clubhouses, each 35,000 sq ft across two levels, forming the community’s social and recreational core. Strategically placed near the central tower for easy access while maintaining residential serenity, they offer elegant spaces for relaxation, gatherings, and leisure, providing a refined retreat from daily routine.',
            featuresSectionBannerImageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/master-plan-page/club-house-master-plan.one.webp',
            featuresSectionFeatureRichSpaces: [
              'Indoor games',
              'Conference Room',
              'Leisure Pool',
              'Swimming Pool',
              'Bowling Alley',
              'Banquet Hall',
              'Conference Room',
              'Yoga area',
              'Badminton Court',
              'Aerobics',
              'Multipurpose Hall',
              'Gym',
              'Indoor Kids Play Area',
              'Indoor Pool',
              'Changing Room',
              'Spa',
              'Squash Court',
              'Mini Theater',
              'Amphitheatre',
            ],
            featuresSectionAccessibilityLayoutStrategies: [
              'Positioned strategically near Tower 5, the clubhouse offers convenient central access to residents across the site.',
              'Designed to be non-intrusive, shared zones are separated from residential areas to preserve tranquility.',
              'Open-air amenities and gardens buffer the clubhouse from high-density zones, offering serene transitions between activity areas.',
            ],
          },
        ],
      },
      propertyMasterPlanFAQSection: {
        mainHeading: 'Frequently asked questions',
        subtitle: "Didn't find the question",
        contactButtonText: 'Contact us',
        faqItems: [
          {
            id: 'homePageFAQ1',
            question: 'Will there be lifts in all 13 towers?',
            answer: 'Yes, each tower has high-speed elevators and service lifts.',
          },
          {
            id: 'homePageFAQ2',
            question: 'Does Sattva Hamlet have a clubhouse?',
            answer:
              'Yes, a 95,000 sq. ft., 2-level clubhouse with party halls, gym, library, and games rooms.',
          },
          {
            id: 'homePageFAQ3',
            question: 'Are there green spaces in the project?',
            answer: 'Yes, with 80% open space, featuring parks, trees, and landscaped gardens.',
          },
          {
            id: 'homePageFAQ4',
            question: 'Is parking provided for residents and visitors?',
            answer: 'Yes, with ample parking slots, EV charging, and a separate visitor area.',
          },
          {
            id: 'homePageFAQ5',
            question: 'Does the master plan show all amenities?',
            answer: 'Yes, it details 40+ modern amenities with color-coded layouts for clarity.',
          },
        ],
      },
    },
    propertyUnitPlanDetailPage: {
      propertyFloorPlanSection: {
        floorPlanSectionHeading: 'Sattva City Floor Plan',
        floorPlanSectionDescription:
          'Experience meticulously curated living spaces designed to embody harmony and opulence. Sattva City presents an array of configurations, from posh studio residences to expansive 4 BHK homes and lavish penthouses, encompassing 3,640 units across 13 architecturally refined towers, each rising G + 17 floors.',
        floorPlanSectionPlans: [
          {
            id: 'plan-1',
            title: 'Studio',
            description:
              'An intimate haven for the modern resident, the studio residence exudes minimalist elegance with every inch crafted for optimal functionality and chic sophistication.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/studio-floor-plan.one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-2',
            title: '1 BHK',
            description:
              'The 1 BHK residence offers a refined urban retreat blending elegant interiors with practical layouts perfect for singles or couples seeking comfort with a hint of exclusivity.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-3',
            title: '2 BHK',
            description:
              'Blending private comfort with open elegance this 2 BHK residence redefines modern luxury for those with a taste for sophistication.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-4',
            title: '2.5 BHK',
            description:
              'This 2.5 BHK residence is a versatile masterpiece offering an additional space ideal for a study or guest room while combining practicality with premium aesthetics.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-point-five-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-5',
            title: '3 BHK',
            description:
              'These 3 BHK residences embody the epitome of family luxury with expansive living areas and refined finishes that create an elevated lifestyle.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-6',
            title: '3.5 BHK',
            description:
              'The 3.5 BHK residence balances grandeur with adaptability offering generous spaces for entertainment relaxation and work-from-home elegance.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-point-five-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-7',
            title: '4 BHK',
            description:
              'The 4 BHK residence is a statement of luxury offering palatial proportions, bespoke interiors and unparalleled comfort for the elite.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/four-bhk-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
          {
            id: 'plan-8',
            title: 'Penthouses',
            description:
              'Crowning the towers, these 7503 sq. ft. residences redefine indulgence with double-height ceilings, private terraces, and panoramic skyline views.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/penthouse-floor-plan-one.webp',
            enquiryNowUrl: '#',
          },
        ],
      },
      propertyDesignAndQualitySection: {
        designAndQualitySectionHeading: 'Design & Quality Features',
        designAndQualitySectionFeatures: [
          {
            id: 'feature-1',
            title: 'Vaastu-Compliant Layouts',
            description: 'Ensuring balanced energy and thoughtful orientation.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/vaastu-compliant.webp',
          },
          {
            id: 'feature-2',
            title: 'Ample Natural Light & Cross Ventilation',
            description: 'Large windows and balconies provide fresh air and brightness.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/ample-natural-light-and-cross-ventilation.webp',
          },
          {
            id: 'feature-3',
            title: 'Safety Standards',
            description:
              'Smoke detectors, sprinkler systems, and safety-aware design across all units.',
            imageUrl:
              'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/safety-standards.webp',
          },
        ],
      },
      propertyUnitSizesSection: {
        unitSizesSectionHeading: 'Unit Sizes within Towers',
        unitSizesWithinTower: [
          {
            configurationType: 'Studio',
            carpetAreaApprox: '450 - 550 Sq Ft',
            price: 'On Request',
            priceEnquireLabel: 'Request',
          },
          {
            configurationType: '1 BHK',
            carpetAreaApprox: '600 - 700 Sq Ft',
            price: 'On Request',
            priceEnquireLabel: 'Request',
          },
          {
            configurationType: '2 BHK',
            carpetAreaApprox: '1100 - 1350 Sq Ft',
            price: '₹ 1.25 - 1.55 Cr',
            priceEnquireLabel: 'Enquire',
          },
          {
            configurationType: '2.5 BHK',
            carpetAreaApprox: '1500 - 1700 Sq Ft',
            price: '₹ 1.6 - 1.8 Cr',
            priceEnquireLabel: 'Enquire',
          },
          {
            configurationType: '3 BHK',
            carpetAreaApprox: '1916 Sq Ft',
            price: '₹ 2.18 - 2.5 Cr',
            priceEnquireLabel: 'Enquire',
          },
          {
            configurationType: '3.5 BHK',
            carpetAreaApprox: '2239 Sq Ft',
            price: '₹ 2.6 Cr',
            priceEnquireLabel: 'Enquire',
          },
          {
            configurationType: '4 BHK',
            carpetAreaApprox: '2895 Sq Ft',
            price: '₹ 3.45 Cr',
            priceEnquireLabel: 'Enquire',
          },
          {
            configurationType: 'Penthouse',
            carpetAreaApprox: '7503 Sq Ft',
            price: 'On Request',
            priceEnquireLabel: 'Enquire',
          },
        ],
      },
      propertyUnitHighlightsSection: {
        highlightsSectionHeading: 'Unit Highlights & Layout Intentions',
        highlightsSectionHighlights: [
          {
            name: 'Studio (450 - 550 Sq Ft)',
            description:
              'The studio residences at Sattva City feature an elegantly integrated layout, uniting kitchen, living, and sleeping areas into one versatile space. Ideal for individuals or bachelors seeking a refined compact lifestyle, the project offers 716 thoughtfully designed units for discerning buyers.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/studio-450-sq-ft-550sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/studio-450-sq-ft-550sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/studio-450-sq-ft-550sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '1BHK (600 - 700 Sq Ft)',
            description:
              'The 1 BHK residences at Sattva City, totaling 300 units, offer a smartly planned layout with a bedroom, modern kitchen with utility, foyer, bathroom, and balcony. Designed for small families and individuals, these homes combine functionality with refined comfort.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-600-sq-ft-700-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-600-sq-ft-700-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/one-bhk-600-sq-ft-700-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '2BHK (1100 - 1350 Sq Ft)',
            description:
              'The 2 BHK residences at Sattva City, totaling 300 units, offer spacious living with two bedrooms, two bathrooms, a foyer, a kitchen with utility, and a balcony. An additional room serves as a versatile space for a home office, study, or gym, blending functionality with refined comfort.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-bhk-1100-sq-ft-1350-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-bhk-1100-sq-ft-1350-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-bhk-1100-sq-ft-1350-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '2.5 BHK (1500 – 1700 Sq Ft)',
            description:
              'Spacious and versatile, the 2.5 BHK variant at Sattva City, suits small families or those with live-in help, featuring two bedrooms, a compact extra room, foyer, two bathrooms, kitchen with utility, and a balcony. Designed to balance comfort, practicality, and modern living.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-point-five-bhk-1500-sq-ft-1700-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-point-five-bhk-1500-sq-ft-1700-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/two-point-five-bhk-1500-sq-ft-1700-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '3BHK (1916 Sq Ft)',
            description:
              'A spacious, well-appointed layout ideal for joint families or those desiring expansive living areas. Each 3 BHK apartment at Sattva City features an equipped kitchen with utility, three bedrooms, a welcoming foyer, three bathrooms, and a balcony, each home offers abundant storage and comfort. Thoughtfully planned to harmonize elegance, functionality, and generous space.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-bhk-1916-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-bhk-1916-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-bhk-1916-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '3.5 BHK (2239 Sq Ft)',
            description:
              'A generously proportioned layout ideal for larger households, each 3.5 BHK at Sattva City includes a maid’s room for added convenience. With a well-planned kitchen, additional compact room, foyer, three bedrooms, three bathrooms, three balconies, and a spacious living area, it blends elegance with functionality.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-point-five-bhk-2239-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-point-five-bhk-2239-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/three-point-five-bhk-2239-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: '4BHK (2895 Sq Ft)',
            description:
              'A grand, expansive layout ideal for large families, offering abundant personal space and enhancing overall comfort. Each 4BHK apartment at Sattva City features four bedrooms, a well-equipped kitchen with utility, foyer, three or four bathrooms, and balconies, each residence is designed to blend elegance with practicality.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/four-bhk-2895-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/four-bhk-2895-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/four-bhk-2895-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
          {
            name: 'Penthouse (7503 Sq Ft)',
            description:
              'The penthouse residences at Sattva City offer unmatched grandeur with expansive layouts designed for luxurious living. Featuring spacious bedrooms, multiple living areas, a modern kitchen, balconies, and exclusive private spaces, these 7503 Sq Ft homes redefine sophistication and exclusivity.',
            image: [
              {
                id: 'SampleImage1',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/penthouse-7503-sq-ft-one.webp',
                alt: 'Mountain landscape with snow-capped peaks',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage2',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/penthouse-7503-sq-ft-two.webp',
                alt: 'Serene ocean view with crystal clear water',
                width: 1200,
                height: 800,
              },
              {
                id: 'SampleImage3',
                src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/floorPlanSectionPlansPage/penthouse-7503-sq-ft-three.webp',
                alt: 'Mystical forest path through tall trees',
                width: 1200,
                height: 800,
              },
            ],
          },
        ],
      },
      propertyUnitPlanFAQSection: {
        mainHeading: 'Frequently asked questions',
        subtitle: "Didn't find the question",
        contactButtonText: 'Contact us',
        faqItems: [
          {
            id: 'floorOrUnitPageFAQ1',
            question: 'What does a floor plan represent?',
            answer:
              'It shows the layout of rooms, doors, and windows, helping assess space suitability.',
          },
          {
            id: 'floorOrUnitPageFAQ2',
            question: 'Will flats have airflow and light?',
            answer:
              'Yes, with large windows, balconies, and cross-ventilation for natural light and air.',
          },
          {
            id: 'floorOrUnitPageFAQ3',
            question: 'Are the floor plans Vaastu-compliant?',
            answer: 'Yes, all homes follow Vaastu principles to promote positive energy.',
          },
          {
            id: 'floorOrUnitPageFAQ4',
            question: 'What floor plan options are offered?',
            answer: 'Choices include Studio, 1, 2, 2.5, 3, 3.5, and 4 BHK units.',
          },
          {
            id: 'floorOrUnitPageFAQ5',
            question: 'Can floor plans be modified?',
            answer:
              'Only minor changes are allowed after registration, as layouts follow a set theme.',
          },
        ],
      },
    },

    propertyAmenitiesDetailPage: {
      propertyAmenitiesAccordionSection: {
        variant: 'light',
        mainHeading: 'Amenities that Elevate Everyday Living',
        subtitle:
          'Thoughtfully curated for all ages and interests, Sattva City offers a resort-inspired lifestyle where lush outdoor landscapes meet refined indoor conveniences. Each space is designed to foster connection, wellness, and leisure, blending natural serenity with modern comforts.',
        footerDescription:
          'The amenities at Sattva City embody the essence of luxury living, featuring state-of-the-art fitness, sports, and lifestyle facilities. From scenic walking paths and a sky club to a swimming pool, basketball court, and clubhouse, every detail is crafted for recreation and relaxation. Expert reviews rate the community an impressive 4.6 out of 5, affirming its exceptional design and quality offerings. Detailed reviews of the amenities can be found in the Sattva City Brochure PDF.',
        amenitiesAccordionItems: [
          {
            id: 'nature-tranquility',
            amenitiesTitle: 'Nature & Tranquility',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'nature-trail',
                title: 'Nature Trail',
              },
              {
                id: 'landscaped-garden',
                title: 'Landscaped Garden',
              },
              {
                id: 'urban-farming',
                title: 'Urban Farming',
              },
            ],
          },
          {
            id: 'fitness-wellness',
            amenitiesTitle: 'Fitness & Wellness',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'gym-gymnasium',
                title: 'Gym / Gymnasium',
              },
              {
                id: 'yoga-area',
                title: 'Yoga / Yoga Pavilion / Yoga Deck / Yoga Area',
              },
              {
                id: 'squash-court',
                title: 'Squash Court',
              },
              {
                id: 'sauna',
                title: 'Sauna',
              },
              {
                id: 'steam-room',
                title: 'Steam Room',
              },
              {
                id: 'cycling-track',
                title: 'Cycling Track',
              },
              {
                id: 'adult-fitness-frame',
                title: 'Adult Fitness Frame',
              },
              {
                id: 'walking-track',
                title: 'Walking Track',
              },
              {
                id: 'aerobics',
                title: 'Aerobics',
              },
              {
                id: 'foot-reflexology',
                title: 'Foot Reflexology',
              },
              {
                id: 'spa',
                title: 'Spa',
              },
              {
                id: 'health-fitness-amenities',
                title: 'Health and Fitness Amenities',
              },
            ],
          },
          {
            id: 'splash-leisure',
            amenitiesTitle: 'Splash & Leisure',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'swimming-pool',
                title: 'Swimming Pool (all mentions)',
              },
              {
                id: 'jacuzzi',
                title: 'Jacuzzi',
              },
            ],
          },
          {
            id: 'community-lifestyle',
            amenitiesTitle: 'Community and Lifestyle',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'club-house',
                title: 'Club House (all mentions)',
              },
              {
                id: 'party-hall',
                title: 'Party Hall / Party Area',
              },
              {
                id: 'mini-theater',
                title: 'Mini Theater',
              },
              {
                id: 'dance-music',
                title: 'Dance/Music',
              },
              {
                id: 'indoor-games-room',
                title: 'Indoor Games Room',
              },
              {
                id: 'outdoor-courts',
                title: 'Outdoor Courts',
              },
              {
                id: 'snooker',
                title: 'Snooker',
              },
              {
                id: 'billiards',
                title: 'Billiards',
              },
              {
                id: 'board-games',
                title: 'Board Games / Board Games Room',
              },
              {
                id: 'table-tennis',
                title: 'Table Tennis',
              },
              {
                id: 'skating-area',
                title: 'Skating Area',
              },
              {
                id: 'multisports-court',
                title: 'Multisports Court',
              },
              {
                id: 'lifestyle',
                title: 'Lifestyle',
              },
              {
                id: 'community-amenities',
                title: 'Community Amenities',
              },
            ],
          },
          {
            id: 'play-area-kids',
            amenitiesTitle: "Play Area and Kids' Zones",
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'kids-activity-zone',
                title: 'Kids Activity Zone',
              },
              {
                id: 'kids-playground',
                title: 'Kids Playground',
              },
              {
                id: 'kids-play-area',
                title: 'Kids Play Area',
              },
            ],
          },
          {
            id: 'infrastructure-utility',
            amenitiesTitle: 'Infrastructure and Utility',
            amenitiesDescription: '',
            amenitiesItems: [
              {
                id: 'video-door-phone',
                title: 'Video Door Phone',
              },
              {
                id: 'cctv-monitoring',
                title: '24/7 CCTV Monitoring',
              },
            ],
          },
        ],

        cardSlideItems: [
          {
            id: 'SampleImage1',
            src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/amenities-that-elevate-everyday-living.webp',
            alt: 'Mountain landscape with snow-capped peaks',
            width: 1200,
            height: 800,
          },
        ],
      },
      propertyAmenitiesGalleryShowCaseArea: [
        {
          amenitiesGalleryTitle: 'Community Amenities',
          amenitiesGalleryDescription:
            'The project offers dedicated recreational spaces, providing a serene environment for residents to unwind from daily routines. Designed to encourage social interaction, these areas create the perfect setting to connect and enjoy memorable moments with friends.',
          amenitiesGalleryAttractions: [
            'Epicenter of Elite Gatherings',
            'Elevating Social Experiences',
            'Open-Air Artistic Escape',
          ],
          amenitiesGallerySlideImages: [
            {
              id: 'SampleImage1',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/community-amenities-one.webp',
              alt: 'Mountain landscape with snow-capped peaks',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage2',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/community-amenities-two.webp',
              alt: 'Serene ocean view with crystal clear water',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage3',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/community-amenities-three.webp',
              alt: 'Mystical forest path through tall trees',
              width: 1200,
              height: 800,
            },
          ],
          amenitiesGallerySecondHeading: 'Feature-Rich Spaces',
          communityAmenities: [
            'Club House',
            'Party Hall',
            'Amphitheatre',
            'Yoga Deck',
            'Swimming Pool',
            'Senior Citizens Corner',
            'Reflexology Pathway',
            'Mini Golf',
            'Outdoor Gym',
            'Party Lawn',
            'Picnic Lawn',
            'Spa',
            'Pet Corner',
            'Kids Pool',
            'Tree Court',
          ],
          id: 'CommunityAmenities-1',
        },
        {
          amenitiesGalleryTitle: 'Lifestyle Amenities',
          amenitiesGalleryDescription:
            'Sattva City features dedicated leisure zones that enrich daily living, offering tranquil retreats to rejuvenate after routine commitments. These inviting spaces encourage vibrant social gatherings and enjoyable moments with friends, supported by an array of thoughtfully planned amenities.',
          amenitiesGalleryAttractions: [
            'Culinary Haven Under Stars',
            'Flourishing Green Social Hub',
            'Luxe Waterside Leisure',
          ],
          amenitiesGallerySlideImages: [
            {
              id: 'SampleImage1',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/lifestyle-amenities-one.webp',
              alt: 'Mountain landscape with snow-capped peaks',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage2',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/lifestyle-amenities-two.webp',
              alt: 'Serene ocean view with crystal clear water',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage3',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/lifestyle-amenities-three.webp',
              alt: 'Urban cityscape at twilight',
              width: 1200,
              height: 800,
            },
          ],
          amenitiesGallerySecondHeading: 'Feature-Rich Spaces',
          communityAmenities: [
            'Barbecue Pavilion',
            'Community Gardens',
            'Pool Pavilion',
            'Volleyball Court',
            'Viewing Gallery',
            'Rock Climbing Wall',
            'Box Cricket',
            'Tennis Court',
            'Play Lawn',
            'Skate Park',
            'Cricket Practice Net',
            'Giant Chess Area',
            'Pet Park',
            'Picnic Area',
            'Gathering Area',
            "Children's Play Area",
          ],
          id: 'LifestyleAmenities-2',
        },
        {
          amenitiesGalleryTitle: 'Clubhouse Amenities',
          amenitiesGalleryDescription:
            'Sattva City presents an expansive 50,000 sq ft clubhouse, enriched with contemporary amenities, serving as a vibrant hub for leisure and social engagement with friends and neighbours. Thoughtfully designed, the clubhouse encompasses a host of distinctive features.',
          amenitiesGalleryAttractions: [
            'The Nexus of Ideas',
            'Essentials with Elegance',
            'Grand Settings for Celebrations',
          ],
          amenitiesGallerySlideImages: [
            {
              id: 'SampleImage1',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/clubhouse-amenities-one.webp',
              alt: 'Mountain landscape with snow-capped peaks',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage2',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/clubhouse-amenities-two.webp',
              alt: 'Serene ocean view with crystal clear water',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage3',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/clubhouse-amenities-three.webp',
              alt: 'Mystical forest path through tall trees',
              width: 1200,
              height: 800,
            },
          ],
          amenitiesGallerySecondHeading: 'Feature-Rich Spaces',
          communityAmenities: [
            'Conference Room',
            'Supermarket',
            'Banquet Hall',
            'Pool Table Room',
            'Card & Carrom Range',
            'Squash Court',
            'Table Tennis Room',
            'Guest Rooms',
            'Gym',
            'Indoor Pool',
            'Meeting Rooms',
            'Party Hall',
            'Restaurant',
            'Leisure Pool',
            'Indoor Games',
            'AV Room',
            'Mini Theatre',
            'Salon',
            'Spa',
            'Aerobics Studio',
            'Indoor Kids Play Zone',
            'Dance Rooms',
          ],
          id: 'ClubhouseAmenities-3',
        },
        {
          amenitiesGalleryTitle: 'Sport and Fitness Amenities',
          amenitiesGalleryDescription:
            'Sattva City offers an extensive array of fitness and sports amenities, fostering residents’ wellness objectives and promoting a wholesome lifestyle. These facilities enable every individual to maintain peak fitness within the convenience of their doorstep.',
          amenitiesGalleryAttractions: [
            'Smooth Rides Await',
            'Play Without Limits',
            'Refresh in Style',
          ],
          amenitiesGallerySlideImages: [
            {
              id: 'SampleImage1',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/sport-and-fitness-amenities-one.webp',
              alt: 'Mountain landscape with snow-capped peaks',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage2',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/sport-and-fitness-amenities-two.webp',
              alt: 'Serene ocean view with crystal clear water',
              width: 1200,
              height: 800,
            },
            {
              id: 'SampleImage3',
              src: 'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/amenities-page/sport-and-fitness-amenities-three.webp',
              alt: 'Mystical forest path through tall trees',
              width: 1200,
              height: 800,
            },
          ],
          amenitiesGallerySecondHeading: 'Feature-Rich Spaces',
          communityAmenities: [
            'Skating Rink',
            'Multi-Purpose Sport Court',
            'Outdoor Swimming Pools',
            'Tactile Walk',
            'Walking Pathways',
            'Outdoor Exercising Deck',
            'Cricket Practice Net',
            'Play Grounds',
            'Tree-lined Jogging Tracks',
            'Golf Putting Area',
            'Basketball Court',
            'Beach Volleyball',
            'Nature Trail',
            'Cycling Pathways',
          ],
          id: 'FitnessAmenities-4',
        },
      ],
      propertyAmenitiesFAQSection: {
        mainHeading: 'Frequently asked questions',
        subtitle: "Didn't find the question",
        contactButtonText: 'Contact us',
        faqItems: [
          {
            id: 'homePageFAQ1',
            question: 'Does Sattva Hamlet offer features for children?',
            answer:
              'Yes, it includes a sandpit, tree house, sensory play wall, indoor play area, playgrounds, and butterfly garden.',
          },
          {
            id: 'homePageFAQ2',
            question: 'What modern amenities are available?',
            answer:
              'The project offers a spa, lap pool, gym, party halls, kids’ parks, walking trails, library, pet zone, and senior citizen court.',
          },
          {
            id: 'homePageFAQ3',
            question: 'Are there green spaces in the project?',
            answer:
              'Yes, with parks, shaded avenues, shipyard plaza, butterfly and aromatic gardens, and nature trails.',
          },
          {
            id: 'homePageFAQ4',
            question: 'Is parking provided?',
            answer: 'Yes, with ample secured parking, CCTV monitoring, and EV charging facilities.',
          },
          {
            id: 'homePageFAQ5',
            question: 'Is Sattva Hamlet safe to live in?',
            answer:
              'Yes, with 24/7 security, CCTV surveillance, boom barriers, and video door phones.',
          },
        ],
        onContactClick: undefined,
      },
    },

    propertySpecificationsDetailPage: {
      propertySpecificationsBannerSection: {
        specificationsBannerSectionTitle: 'Sattva City Specifications',
        specificationsBannerSectionDescription:
          'At Sattva City, specifications transcend mere details, they embody the promise of excellence. From precision-laid vitrified tiles and chrome-plated fittings to laminated flush shutters and RCC-framed structures, every component is curated for enduring strength and refined aesthetics. Premium PVC-insulated copper wiring, wooden doors, and sleek sliding shutters further elevate functionality with sophistication. Each element reflects a steadfast commitment to quality, ensuring that your home harmonizes durability with timeless elegance.',
        specificationsBannerSectionImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/specification-page-banner.webp',
        specificationsBannerSectionMobileImageUrl:
          'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/specification-page-mobile.webp',
      },
      propertySpecificationsGalleryShowCaseArea: [
        {
          specificationsGalleryTitle: 'Flooring',
          specificationsGalleryDescription:
            'Each apartment features refined flooring designed for elegance and longevity. The master bedroom offers laminated flooring and a balcony for natural light and airflow, while other bedrooms have vitrified tiles with concealed wiring, modular switches, and TV points. Vitrified tiles extend through living areas, kitchens, and hallways, with ceramic tiles in balconies, and granite in reception areas complemented by quality tiling in common spaces.',
          specificationsGalleryFeatures: [
            'Laminated Flooring for Master Bedroom.',
            'Vitrified tiles for other rooms excluding Master Bedroom.',
            'Ceramic and Granite tiles for balconies and Reception areas respectively.',
          ],
          specificationsGalleryImageUrl:
            'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/flooring-page-desktop.webp',
        },
        {
          specificationsGalleryTitle: 'Structure',
          specificationsGalleryDescription:
            'Each villa at Sattva Hamlet is Each villa at Sattva Hamlet is crafted with a strong, future-ready structure using cutting-edge engineering and reliable construction methods. Reinforced concrete (RCC) frameworks ensure longevity and stability, designed to withstand the test of time while offering the flexibility of modern layouts. The focus remains on safety, durability, and premium finishes from the ground up.crafted with a strong, future-ready structure using cutting-edge engineering and reliable construction methods. Reinforced concrete (RCC) frameworks ensure longevity and stability, designed to withstand the test of time while offering the flexibility of modern layouts. The focus remains on safety, durability, and premium finishes from the ground up.',
          specificationsGalleryFeatures: [
            'RCC-framed structure with solid cement block masonry',
            'Advanced structural systems for long-term durability',
            'Earthquake-resistant design in compliance with IS standards',
          ],
          specificationsGalleryImageUrl:
            'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/specification-page-desktop.webp',
        },
        {
          specificationsGalleryTitle: 'Plastering & Painting',
          specificationsGalleryDescription:
            'Each apartment’s plastering and painting are executed with precision to ensure lasting aesthetics and protection. Internal walls are finished with smooth emulsion paint for a refined, elegant look, while all railings receive durable enamel coating for enhanced resilience. The exterior surfaces are treated with premium-grade distemper, offering superior weather resistance and a pristine finish that endures over time.',
          specificationsGalleryFeatures: [
            'Internal walls finished with smooth emulsion paint.',
            'Railings receive a durable enamel coating.',
            'Exterior surfaces are treated with premium grade distemper.',
          ],
          specificationsGalleryImageUrl:
            'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/plastering-painting-page-desktop.webp',
        },
        {
          specificationsGalleryTitle: 'Electricity, Security and Backup',
          specificationsGalleryDescription:
            'Each apartment is equipped with advanced electrical and security systems for reliable comfort and safety. Separate meters, optional full DG backup, and 24/7 supply for common areas and the clubhouse ensure uninterrupted power. Security measures include CCTV at key locations, detectors for gas leaks, smoke, and flames, fire alarms, and round-the-clock guarded entry with intercom access.',
          specificationsGalleryFeatures: [
            'Electrical and security systems for each apartment.',
            'DG backup, and separate meters for each apartment, clubhouse and common area.',
            'CCTV, smoke detectors with 24/7 intercom access guarded entry.',
          ],
          specificationsGalleryImageUrl:
            'https://yhkwmdaqhpbsg0bf.public.blob.vercel-storage.com/properties/sattva-city/specifications-page/electricity-security-and-backup-page-desktiop.webp',
        },
      ],
      propertySpecificationFAQSection: {
        mainHeading: 'Frequently asked questions',
        subtitle: "Didn't find the question",
        contactButtonText: 'Contact us',
        faqItems: [
          {
            id: 'homePageFAQ1',
            question: 'Are there sufficient power points in the kitchen?',
            answer: 'Yes, the kitchen has multiple outlets for all modern appliances.',
          },
          {
            id: 'homePageFAQ2',
            question: 'Will every room have plug points?',
            answer: 'Each room includes adequate electrical points for everyday gadgets.',
          },
          {
            id: 'homePageFAQ3',
            question: 'Are lifts provided in all towers?',
            answer: 'Yes, all 13 towers feature passenger and service lifts.',
          },
          {
            id: 'homePageFAQ4',
            question: 'What are the kitchen specifications?',
            answer:
              'Kitchens are designed for modular setups with granite countertops and ample workspace.',
          },
          {
            id: 'homePageFAQ5',
            question: 'What paints are used for interiors and exteriors?',
            answer:
              'Exteriors use water-resistant paint, while interiors and common areas feature distemper finishes.',
          },
        ],
      },
    },
  },
];
