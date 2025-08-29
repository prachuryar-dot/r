import { Property } from '@/interfaces';
import { PROPERTY_TEMPLATE } from '@/data/templates/property-template';

export function createProperty(propertyData: Partial<Property>): Property {
  return {
    ...PROPERTY_TEMPLATE,
    ...propertyData,
    id: propertyData.id || generatePropertyId(propertyData),
    slug: propertyData.slug || generateSlug(propertyData.name || ''),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Property;
}

function generatePropertyId(property: Partial<Property>): string {
  const city = property.city || 'unknown';
  const area = property.area || 'unknown';
  const name = property.name || 'property';
  const timestamp = Date.now().toString().slice(-4);

  const slug = generateSlug(name);
  return `${city}-${area}-${slug}-${timestamp}`;
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function validateProperty(property: Partial<Property>): string[] {
  const errors: string[] = [];

  const required = ['name', 'city', 'area', 'type', 'price', 'description'];
  required.forEach((field) => {
    if (!property[field as keyof Property]) {
      errors.push(`${field} is required`);
    }
  });

  if (property.price && property.price <= 0) {
    errors.push('Price must be greater than 0');
  }

  if (property.images && property.images.length === 0) {
    errors.push('At least one image is required');
  }

  return errors;
}
