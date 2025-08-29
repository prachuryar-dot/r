export function createPropertyUrl(city: string, area: string, slug: string): string {
  return `/properties/${city}/${area}/${slug}`;
}

export function createCityUrl(city: string): string {
  return `/properties/${city}`;
}

export function createAreaUrl(city: string, area: string): string {
  return `/properties/${city}/${area}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatCurrency(amount: number, currency: string = 'INR'): string {
  if (currency === 'INR') {
    const crores = amount / 10000000;
    if (crores >= 1) {
      return `₹${crores.toFixed(2)} Cr`;
    } else {
      const lakhs = amount / 100000;
      return `₹${lakhs.toFixed(2)} L`;
    }
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount);
}
