'use client';

import React, { memo } from 'react';
import SpecificDetailCard from '../molecules/specificationDetailCard';
import { PropertySpecificationsGalleryShowCaseArea } from '@/interfaces/property.interface';

export interface SpecificDetailSectionProps {
  propertySpecificationsGalleryShowCaseArea: PropertySpecificationsGalleryShowCaseArea[];
}

const SpecificDetailSection: React.FC<SpecificDetailSectionProps> = ({
  propertySpecificationsGalleryShowCaseArea,
}) => {
  return (
    <>
      {propertySpecificationsGalleryShowCaseArea.map((detail, index) => (
        <SpecificDetailCard key={index} detail={detail} index={index} />
      ))}
    </>
  );
};

SpecificDetailSection.displayName = 'SpecificDetailSection';
export default memo(SpecificDetailSection);
