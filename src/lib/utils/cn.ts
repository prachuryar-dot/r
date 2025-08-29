import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  const merged = twMerge(clsx(inputs));

  // Check if our custom typography classes were removed and add them back
  const inputString = clsx(inputs);
  const typographyClasses = [
    // Font families
    'font-body',
    'font-heading',
    'font-sans',

    // Heading sizes
    'text-heading-xs',
    'text-heading-sm',
    'text-heading-md',
    'text-heading-lg',
    'text-heading-xl',
    'text-heading-2xl',
    'text-heading-3xl',
    'text-heading-4xl',
    'text-heading-5xl',
    'text-heading-6xl',
    'text-heading-7xl',

    // Paragraph sizes
    'text-paragraph-xs',
    'text-paragraph-sm',
    'text-paragraph-md',
    'text-paragraph-lg',
    'text-paragraph-xl',
    'text-paragraph-2xl',
    'text-paragraph-3xl',

    // Label sizes
    'text-label-xs',
    'text-label-sm',
    'text-label-md',
    'text-label-lg',
    'text-label-xl',
    'text-label-2xl',
    'text-label-3xl',

    // Subheading sizes
    'text-subheading-xs',
    'text-subheading-sm',
    'text-subheading-md',
    'text-subheading-lg',
    'text-subheading-xl',
    'text-subheading-2xl',
    'text-subheading-3xl',

    // Font weights
    'font-regular',
    'font-medium',
    'font-semibold',
    'font-bold',

    // Line heights
    'leading-tight',
    'leading-normal',
    'leading-relaxed',
    'leading-loose',
  ];

  const missingClasses = typographyClasses.filter(
    (cls) => inputString.includes(cls) && !merged.includes(cls),
  );

  if (missingClasses.length > 0) {
    return `${merged} ${missingClasses.join(' ')}`.trim();
  }

  return merged;
}
