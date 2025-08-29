import { PROPERTIES_DATA } from '@/data/properties.data';
import { CITIES_DATA } from '@/data/cities';
import { AREAS_DATA } from '@/data/areas';
import { City, Area } from '@/interfaces';
import { Property } from '@/interfaces/property.interface';

export async function getAllProperties(): Promise<Property[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PROPERTIES_DATA), 0);
  });
}

export async function getPropertyBySlug(
  city: string,
  area: string,
  slug: string,
): Promise<Property | null> {
  return new Promise((resolve) => {
    const property = PROPERTIES_DATA.find(
      (p) => p.city === city && p.area === area && p.slug === slug,
    );
    setTimeout(() => resolve(property || null), 0);
  });
}

export async function getPropertiesByCity(city: string): Promise<Property[]> {
  return new Promise((resolve) => {
    const properties = PROPERTIES_DATA.filter((p) => p.city === city);
    setTimeout(() => resolve(properties), 0);
  });
}

export async function getPropertiesByArea(city: string, area: string): Promise<Property[]> {
  return new Promise((resolve) => {
    const properties = PROPERTIES_DATA.filter((p) => p.city === city && p.area === area);
    setTimeout(() => resolve(properties), 0);
  });
}

export async function getFeaturedProperties(limit: number = 6): Promise<Property[]> {
  return new Promise((resolve) => {
    const featured = PROPERTIES_DATA.slice(0, limit);
    setTimeout(() => resolve(featured), 0);
  });
}

export async function getAllCities(): Promise<Record<string, City>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CITIES_DATA), 0);
  });
}

export async function getCityBySlug(citySlug: string): Promise<City | null> {
  return new Promise((resolve) => {
    const city = CITIES_DATA[citySlug] || null;
    setTimeout(() => resolve(city), 0);
  });
}

export async function getAreaBySlug(city: string, area: string): Promise<Area | null> {
  return new Promise((resolve) => {
    const areaKey = `${city}-${area}`;
    const areaData = AREAS_DATA[areaKey] || null;
    setTimeout(() => resolve(areaData), 0);
  });
}

export async function generateAllPropertyPaths() {
  return PROPERTIES_DATA.map((property) => ({
    city: property.city,
    area: property.area,
    title: property.slug,
  }));
}

export async function generateAllCityPaths() {
  return Object.keys(CITIES_DATA).map((city) => ({ city }));
}

export async function generateAllAreaPaths() {
  return Object.values(AREAS_DATA).map((area) => ({
    city: area.city,
    area: area.area,
  }));
}

export function getUniqueCities(): string[] {
  return Array.from(new Set(PROPERTIES_DATA.map((p) => p.city)));
}

export function getUniqueAreas(): string[] {
  return Array.from(new Set(PROPERTIES_DATA.map((p) => `${p.city}-${p.area}`)));
}

export function getPropertyCount(): number {
  return PROPERTIES_DATA.length;
}

export function getPropertyCountByCity(city: string): number {
  return PROPERTIES_DATA.filter((p) => p.city === city).length;
}

export function getPropertyCountByArea(city: string, area: string): number {
  return PROPERTIES_DATA.filter((p) => p.city === city && p.area === area).length;
}
