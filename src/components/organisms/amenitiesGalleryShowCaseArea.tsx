'use client';

import React, { memo } from 'react';
import AmenitiesDetailsSection from '../molecules/amenitiesDetailCard';
import { PropertyAmenitiesGallerySection } from '@/interfaces/property.interface';

export interface AmenitiesProps {
  propertyAmenitiesGalleryShowCaseArea: PropertyAmenitiesGallerySection[];
}

const AmenitiesGalleryShowCaseArea: React.FC<AmenitiesProps> = ({
  propertyAmenitiesGalleryShowCaseArea,
}) => {
  return (
    <>
      {propertyAmenitiesGalleryShowCaseArea.map((amenities, index) => (
        <AmenitiesDetailsSection key={amenities.id} amenities={amenities} index={index} />
      ))}
    </>
  );
};

AmenitiesGalleryShowCaseArea.displayName = 'AmenitiesGalleryShowCaseArea';
export default memo(AmenitiesGalleryShowCaseArea);
