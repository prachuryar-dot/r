import fs from 'fs';
import path from 'path';

/**
 * Script to add new property to data file
 * Usage: node scripts/add-property.js
 */

const newProperty = {
  name: 'Brigade Meadows',
  city: 'bangalore',
  area: 'east',
  type: 'villa',
  price: 85000000,
  description: 'Premium villas with private gardens in East Bangalore',
  shortDescription: 'Premium villas with private gardens',
  developer: 'Brigade Group',
  // Add other required fields...
};

function addProperty(property) {
  const propertiesPath = path.join(__dirname, '../data/properties.ts');
  const content = fs.readFileSync(propertiesPath, 'utf8');

  // Parse existing properties
  const lines = content.split('\n');
  const insertIndex = lines.findIndex((line) => line.includes(']')); // Find closing bracket

  // Generate new property string
  const propertyString = `  ${JSON.stringify(property, null, 2).replace(/^/gm, '  ')},`;

  // Insert new property
  lines.splice(insertIndex, 0, propertyString);

  // Write back to file
  fs.writeFileSync(propertiesPath, lines.join('\n'));
  console.log(`Property "${property.name}" added successfully!`);
}

// Uncomment to run:
addProperty(newProperty);
