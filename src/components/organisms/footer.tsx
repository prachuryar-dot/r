import { memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SocialIcons } from '@/components/molecules/socialIcons';
import Text from '@/components/designSystem/typography/Text';

const FOOTER_LINKS = [
  {
    href: '/privacy-policy',
    label: 'Privacy Policy',
    ariaLabel: 'Read our privacy policy',
  },
  {
    href: '/terms-of-service',
    label: 'Terms of Service',
    ariaLabel: 'Read our terms of service',
  },
] as const;

const FooterLink = memo<{ href: string; label: string; ariaLabel: string }>(
  ({ href, label, ariaLabel }) => (
    <li>
      <Link
        href={href}
        className="transition-colors duration-200 hover:text-primary-400 focus:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-accent-1000"
        aria-label={ariaLabel}
      >
        {label}
      </Link>
    </li>
  ),
);

FooterLink.displayName = 'FooterLink';

const Footer: React.FC = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-accent-1000 backdrop-blur-md" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-20">
        <div className="flex flex-col items-center justify-between gap-6 py-4 md:flex-row md:gap-0">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="inline-block rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-accent-1000"
              aria-label="Pattem Estates - Go to homepage"
            >
              <Image
                src="/assets/logos/pattem-estates.svg"
                alt="Pattem Estates"
                width={146}
                height={31}
                className="h-8 w-auto transition-opacity duration-200 hover:opacity-80 sm:h-10"
                priority={false}
                loading="lazy"
              />
            </Link>
          </div>

          <div className="order-first md:order-last">
            <div aria-label="Social media links">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="border-grey-700 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row sm:gap-0">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col items-center gap-4 text-sm text-grey-400 sm:flex-row sm:items-start sm:gap-6">
              {FOOTER_LINKS.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  ariaLabel={link.ariaLabel}
                />
              ))}
            </ul>
          </nav>

          <div className="order-first sm:order-last">
            <Text
              as="span"
              variant="label"
              size="sm"
              className="text-center text-grey-400 sm:text-right"
            >
              © {currentYear} Pattem Estates. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
