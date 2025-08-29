import { City } from '@/interfaces';

export const CITIES_DATA: Record<string, City> = {
  bangalore: {
    name: 'Bangalore',
    displayName: 'Bangalore',
    description:
      'The Silicon Valley of India offering premium residential and commercial properties with excellent IT connectivity and modern infrastructure.',
    areas: ['west', 'east', 'north', 'south', 'central'],
  },
  mumbai: {
    name: 'Mumbai',
    displayName: 'Mumbai',
    description:
      'The financial capital of India with luxury properties, excellent connectivity, and prime commercial locations.',
    areas: ['south', 'west', 'central', 'north', 'east'],
  },
  delhi: {
    name: 'Delhi',
    displayName: 'Delhi',
    description:
      'The national capital offering premium residential projects with world-class amenities and strategic locations.',
    areas: ['south', 'west', 'north', 'central', 'east'],
  },
  hyderabad: {
    name: 'Hyderabad',
    displayName: 'Hyderabad',
    description:
      'The cyberabad with rapidly growing real estate market and excellent infrastructure development.',
    areas: ['west', 'east', 'north', 'south', 'central'],
  },
};
