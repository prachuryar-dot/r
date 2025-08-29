import { type LucideIcon } from 'lucide-react';
import React from 'react';
export interface Project {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

export interface BannerSlide {
  id: string | number;
  mobileBannerUrl: string;
  desktopBannerUrl: string;
  collaborationImageUrl: string;
  priority?: boolean;
  alt: string;
  bannerHeading?: string;
  bannerPropertyLocation?: string;
  description?: string;
  PropertyUrl?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  ariaLabel: string;
}

export interface HotProperty {
  id: number | string;
  title: string;
  location: string;
  priceRange: string;
  imageUrl: string;
  isNewListing: boolean;
  area: string;
  size: string;
  unit: string;
}

export interface AreaFilter {
  id: string;
  label: string;
  value: string;
}

export interface LatestLaunch {
  id: string;
  icon: React.ReactNode;
  label: string;
}

export interface LatestLaunchCard {
  id: string;
  title: string;
  location: string;
  area: string;
  bhk: string;
  features: LatestLaunch[];
  price: string;
  imageUrl: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  description?: string;
}
export interface FinestProject {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  iconPlaceholder: () => JSX.Element;
}

export interface LaunchFeatures {
  id: string;
  title: string;
  description: string;
  iconPlaceholder: () => JSX.Element;
}

export interface Property {
  id: string;
  name: string;
  slug: string;
  city: string;
  area: string;
  type: 'apartment' | 'villa' | 'plot' | 'commercial';
  price: number;
  priceRange?: { min: number; max: number };
  currency: string;
  description: string;
  shortDescription: string;
  features: string[];
  amenities: string[];
  specifications: {
    totalFloors?: number;
    totalUnits?: number;
    launchDate?: string;
    possessionDate?: string;
    approvals?: string[];
    //eslint-ignore
    [key: string]: unknown;
  };
  images: string[];
  featuredImage: string;
  masterPlan?: string;
  floorPlans: FloorPlan[];
  address: string;
  coordinates?: { lat: number; lng: number };
  developer: string;
  possession: string;
  status: 'upcoming' | 'ongoing' | 'ready';
  createdAt: string;
  updatedAt: string;
  //eslint-ignore
  [key: string]: unknown;
}

export interface FloorPlan {
  id: string;
  name: string;
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  description: string;
}

export interface City {
  name: string;
  displayName: string;
  description: string;
  areas: string[];
}

export interface Area {
  city: string;
  area: string;
  name: string;
  description: string;
}
