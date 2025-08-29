// Build-time validation script for properties data
const propertiesData = require('../../src/data/properties');

/**
 * Validate all property data at build time
 */
function validateAllProperties() {
  console.log('Validating property data...');

  const errors = [];
  const { PROPERTIES_DATA } = propertiesData;

  PROPERTIES_DATA.forEach((property, index) => {
    // Check required fields
    const required = ['id', 'name', 'slug', 'city', 'area', 'type', 'price'];
    required.forEach((field) => {
      if (!property[field]) {
        errors.push(`Property ${index}: Missing ${field}`);
      }
    });

    // Check unique IDs
    const duplicateIds = PROPERTIES_DATA.filter((p) => p.id === property.id);
    if (duplicateIds.length > 1) {
      errors.push(`Property ${index}: Duplicate ID ${property.id}`);
    }

    // Check unique slugs per area
    const duplicateSlugs = PROPERTIES_DATA.filter(
      (p) => p.city === property.city && p.area === property.area && p.slug === property.slug,
    );
    if (duplicateSlugs.length > 1) {
      errors.push(
        `Property ${index}: Duplicate slug ${property.slug} in ${property.city}/${property.area}`,
      );
    }

    // Check price validity
    if (property.price <= 0) {
      errors.push(`Property ${index}: Invalid price ${property.price}`);
    }

    // Check images
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

module.exports = {
  validateAllProperties,
};
