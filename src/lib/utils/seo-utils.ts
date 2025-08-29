import { Property } from '@/interfaces/property.interface';

export function generatePropertyMetaTitle(property: Property, page?: string): string {
  const baseTitle = `${property.name} - ${capitalize(property.area)}, ${capitalize(property.city)}`;
  if (page) {
    const pageTitle = page.split('-').map(capitalize).join(' ');
    return `${baseTitle} - ${pageTitle}`;
  }
  return baseTitle;
}

export function generatePropertyMetaDescription(property: Property, page?: string): string {
  if (page === 'master-plan') {
    return `View the comprehensive master plan for ${property.name} showing layout, amenities, and infrastructure details in ${capitalize(property.area)}, ${capitalize(property.city)}.`;
  }
  if (page === 'floor-and-unit-plan') {
    return `Explore floor plans and unit layouts for ${property.name}. Choose from various configurations in ${capitalize(property.area)}, ${capitalize(property.city)}.`;
  }
  if (page === 'amenities') {
    return `Discover world-class amenities at ${property.name} including ${property.propertyAmenitiesDetailPage.propertyAmenitiesGalleryShowCaseArea.slice(0, 3).join(', ')} and more in ${capitalize(property.area)}, ${capitalize(property.city)}.`;
  }
  if (page === 'specifications') {
    return `Technical specifications and construction details for ${property.name} by ${property.developer} in ${capitalize(property.area)}, ${capitalize(property.city)}.`;
  }
  return property.description;
}

export function generatePropertyStructuredData(
  property: Property,
  baseUrl: string = 'https://pattem-estates.com',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.name,
    description: property.description,
    url: `${baseUrl}/properties/${property.city}/${property.area}/${property.slug}`,
    identifier: property.id,
    datePosted: property.createdAt,
    dateModified: property.updatedAt,

    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: capitalize(property.area),
      addressRegion: capitalize(property.city),
      addressCountry: 'India',
    },

    offers: {
      '@type': 'Offer',
      priceCurrency: property.currency,
      price: property.price,
      priceSpecification: property.priceRange
        ? {
            '@type': 'PriceSpecification',
            minPrice: property.priceRange.min,
            maxPrice: property.priceRange.max,
            priceCurrency: property.currency,
          }
        : undefined,
      availability:
        property.status === 'ready' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'Organization',
        name: property.developer,
      },
    },
    image: property.images,
    photo: property.featuredImage,

    amenityFeature: property.propertyAmenitiesDetailPage.propertyAmenitiesGalleryShowCaseArea.map(
      (amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
      }),
    ),

    floorSize: property.floorPlans[0]?.area
      ? {
          '@type': 'QuantitativeValue',
          value: property.floorPlans[0].area,
          unitText: 'square feet',
        }
      : undefined,

    numberOfRooms: property.floorPlans[0]?.bedrooms || undefined,
    numberOfBathroomsTotal: property.floorPlans[0]?.bathrooms || undefined,

    containedInPlace: {
      '@type': 'Residence',
      name: property.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: capitalize(property.area),
        addressRegion: capitalize(property.city),
        addressCountry: 'India',
      },
    },
  };
}

export function generateBreadcrumbStructuredData(
  city: string,
  area: string,
  propertyName: string,
  baseUrl: string = 'https://pattem-estates.com',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Properties',
        item: `${baseUrl}/properties`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: capitalize(city),
        item: `${baseUrl}/properties/${city}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: capitalize(area),
        item: `${baseUrl}/properties/${city}/${area}`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: propertyName,
        item: `${baseUrl}/properties/${city}/${area}`,
      },
    ],
  };
}

export function generateOrganizationStructuredData(baseUrl: string = 'https://pattem-estates.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Pattem Estates',
    url: baseUrl,
    description: 'Premium real estate properties across major cities in India',
    telephone: '+91-XXXXXXXXXX',
    email: 'info@pattem-estates.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    sameAs: [
      'https://www.facebook.com/pattemestates',
      'https://www.instagram.com/pattemestates',
      'https://www.linkedin.com/company/pattemestates',
    ],
  };
}
function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
