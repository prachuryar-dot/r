import { PROPERTIES_DATA } from '@/data/properties';
import { Property } from '@/interfaces';

export function validateAllProperties(): void {
  console.log('Validating property data...');

  const errors: string[] = [];

  PROPERTIES_DATA.forEach((property, index) => {
    const required = ['id', 'name', 'slug', 'city', 'area', 'type', 'price'];
    required.forEach((field) => {
      if (!property[field as keyof Property]) {
        errors.push(`Property ${index}: Missing ${field}`);
      }
    });

    const duplicateIds = PROPERTIES_DATA.filter((p) => p.id === property.id);
    if (duplicateIds.length > 1) {
      errors.push(`Property ${index}: Duplicate ID ${property.id}`);
    }

    const duplicateSlugs = PROPERTIES_DATA.filter(
      (p) => p.city === property.city && p.area === property.area && p.slug === property.slug,
    );
    if (duplicateSlugs.length > 1) {
      errors.push(
        `Property ${index}: Duplicate slug ${property.slug} in ${property.city}/${property.area}`,
      );
    }

    if (property.price <= 0) {
      errors.push(`Property ${index}: Invalid price ${property.price}`);
    }

    if (!property.images || property.images.length === 0) {
      errors.push(`Property ${index}: No images provided`);
    }

    if (!property.featuredImage) {
      errors.push(`Property ${index}: No featured image provided`);
    }
  });

  if (errors.length > 0) {
    console.error('Property validation errors:');
    errors.forEach((error) => console.error(`  - ${error}`));
    throw new Error(`Property validation failed with ${errors.length} errors`);
  }

  console.log(`✅ All ${PROPERTIES_DATA.length} properties validated successfully!`);
}
