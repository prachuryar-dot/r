import { Property } from '@/interfaces';

export const PROPERTY_TEMPLATE: Partial<Property> = {
  id: '', // Format: city-area-developer-001
  name: '', // e.g., "Aparna Constructions Premium"
  slug: '', // e.g., "aparna-constructions-premium"
  city: '', // e.g., "bangalore" (lowercase)
  area: '', // e.g., "west" (lowercase)
  type: 'apartment', // apartment|villa|plot|commercial
  price: 0, // Starting price in INR
  priceRange: { min: 0, max: 0 },
  currency: 'INR',
  description: '', // Detailed description (150-200 words)
  shortDescription: '', // Brief description (50-80 characters)
  features: [
    // Key selling points
    '24x7 Security',
    'Swimming Pool',
    'Gymnasium',
    // Add more features
  ],
  amenities: [
    // All amenities
    'Club House',
    'Swimming Pool',
    'Children Play Area',
    // Add more amenities
  ],
  specifications: {
    totalFloors: 0,
    totalUnits: 0,
    launchDate: '',
    possessionDate: '',
    approvals: ['RERA'],
    constructionType: 'RCC Framed Structure',
    elevators: 0,
    parkingRatio: '1:1',
  },
  images: [
    // Array of image paths
    '/images/properties/[property-slug]/exterior-1.jpg',
    '/images/properties/[property-slug]/amenities.jpg',
  ],
  featuredImage: '/images/properties/[property-slug]/featured.jpg',
  masterPlan: '/images/properties/[property-slug]/master-plan.jpg',
  floorPlans: [
    {
      id: '1',
      name: '2BHK',
      type: '2BHK',
      area: 1200,
      bedrooms: 2,
      bathrooms: 2,
      price: 0,
      image: '/images/properties/[property-slug]/floor-plans/2bhk.jpg',
      description: 'Spacious 2BHK apartment',
    },
  ],
  address: '', // Full address
  coordinates: { lat: 0, lng: 0 },
  developer: '', // Developer name
  possession: '', // e.g., "Dec 2026"
  status: 'ongoing', // upcoming|ongoing|ready
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
