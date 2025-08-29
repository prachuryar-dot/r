'use client';

import { Button } from '@/components/atoms/buttons';
import { SocialIcons } from '@/components/molecules/socialIcons';
import useMobileDetection from '@/hooks/useMobileDetection';
import { useScrollLock } from '@/hooks/useScrollLock';
import { ChevronRight, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import EnquireNowModalButton from '../molecules/modal/EnquireNowModalButton';

const NAVIGATION_ITEMS = [
  { name: 'Top Properties', href: '#top-properties' },
  { name: 'Latest Launches', href: '#latest-launches' },
  { name: 'About Us', href: '#about-us' },
] as const;

const PHONE_NUMBER = '+917654323451';

interface NavigationLinkProps {
  item: (typeof NAVIGATION_ITEMS)[number];
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  isMobile?: boolean;
  index?: number;
  isMobileMenuOpen?: boolean;
}

const NavigationLink = React.memo<NavigationLinkProps>(
  ({ item, isActive, onClick, isMobile = false, index = 0, isMobileMenuOpen = false }) => {
    const baseClasses = `font-body text-label-sm xl:text-label-md font-semibold transition-colors duration-200 ${
      isActive ? 'text-primary-400' : 'text-grey-300 hover:text-primary-400'
    }`;

    const mobileClasses = `block px-2 py-4 transform transition-all duration-300 ease-in-out ${
      isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
    }`;

    const desktopClasses = 'px-3 py-2';

    return (
      <Link
        href={item.href}
        className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
        onClick={(e) => onClick(e, item.href)}
        aria-current={isActive ? 'page' : undefined}
        style={
          isMobile
            ? {
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
              }
            : undefined
        }
      >
        {item.name}
      </Link>
    );
  },
);

NavigationLink.displayName = 'NavigationLink';

const MobileMenuToggle = React.memo<{
  isOpen: boolean;
  onToggle: () => void;
}>(({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className="inline-flex items-center justify-center rounded-md p-2 text-grey-400 transition-colors duration-200 hover:bg-grey-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
    aria-expanded={isOpen}
    aria-label="Toggle navigation menu"
    type="button"
  >
    <div className="relative h-5 w-5">
      <Menu
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isOpen ? 'rotate-180 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
        aria-hidden="true"
      />
      <X
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-75 opacity-0'
        }`}
        aria-hidden="true"
      />
    </div>
  </button>
));

MobileMenuToggle.displayName = 'MobileMenuToggle';

const ContactButton = React.memo<{
  isMobile?: boolean;
}>(({ isMobile = false }) => {
  const handleCall = useCallback(() => {
    window.open(`tel:${PHONE_NUMBER}`);
  }, []);

  if (isMobile) {
    return (
      <Button
        variant="primary"
        size="sm"
        leftIcon={<Phone className="h-4 w-4" strokeWidth={3} />}
        onClick={handleCall}
      >
        Contact Us
      </Button>
    );
  }

  return (
    <Link
      href={`tel:${PHONE_NUMBER}`}
      aria-label="Call Pattem Estates"
      className="flex items-center gap-1 font-body text-label-sm font-semibold text-white transition-colors duration-200 hover:text-primary-400 xl:text-label-md"
    >
      <Phone size={16} strokeWidth={3} /> +91 76543 23451
    </Link>
  );
});

ContactButton.displayName = 'ContactButton';

const CTAButton = React.memo<{
  isMobile?: boolean;
  onMobileClose?: () => void;
}>(() => {
  const isMobile = useMobileDetection();
  return (
    <EnquireNowModalButton
      variant="primary"
      size={isMobile ? 'sm' : 'md'}
      rightIcon={<ChevronRight className="h-4 w-4" />}
    >
      Buy A Property
    </EnquireNowModalButton>
  );
});

CTAButton.displayName = 'CTAButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useScrollLock(isMobileMenuOpen);

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          setTimeout(() => {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
              top: Math.max(0, targetPosition),
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('popstate', handleHashNavigation);

    return () => {
      window.removeEventListener('popstate', handleHashNavigation);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.filter((item) => item.href.startsWith('#')).map((item) => ({
        id: item.href.substring(1),
        href: item.href,
      }));

      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const scrollPosition = window.scrollY + headerHeight + 100;

      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section.href;
            break;
          }
        }
      }

      setActiveSection(currentSection);

      const currentHash = window.location.hash;

      if (currentSection && currentSection !== currentHash) {
        window.history.replaceState(null, '', currentSection);
      } else if (!currentSection && currentHash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const isActiveLink = useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/';
      }
      if (pathname === '/' && href.startsWith('#')) {
        return window.location.hash === href || activeSection === href;
      }
      return pathname.startsWith(href);
    },
    [pathname, activeSection],
  );

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);

      const isHomePage = window.location.pathname === '/';

      if (!isHomePage) {
        window.location.href = `/${href}`;
        return;
      }

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        });

        window.history.pushState(null, '', href);
      } else {
        console.warn(`Target element with id "${targetId}" not found`);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      setIsMobileMenuOpen(false);
    }
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationWithActiveState = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item) => ({
        ...item,
        isActive: mounted ? isActiveLink(item.href) : false,
      })),
    [isActiveLink, mounted],
  );

  return (
    <header
      className={`fixed top-0 z-[9999] w-full shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-accent-1000/95' : 'bg-accent-1000/80'
      }`}
    >
      <nav
        className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20"
        aria-label="Main navigation"
        role="navigation"
      >
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Pattem Estates - Home">
              <Image
                src="/assets/logos/pattem-estates.svg"
                alt="Pattem Estate Logo"
                width={146}
                height={31}
                className="h-auto w-[120px] md:w-[146px]"
                priority
                quality={90}
              />
            </Link>
          </div>

          <nav className="hidden lg:block" role="navigation" aria-label="Desktop navigation">
            <ul className="ml-10 flex items-baseline space-x-3 xl:space-x-8" role="menubar">
              {navigationWithActiveState.map((item) => (
                <li key={item.name} role="none">
                  <NavigationLink
                    item={item}
                    isActive={item.isActive}
                    onClick={handleSmoothScroll}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ContactButton />
            <CTAButton />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ContactButton isMobile />
            <MobileMenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className={`transform pb-3 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
          >
            <div className="pb-4 pt-4">
              <ul
                className="flex flex-col space-y-1 border-b border-grey-300 pb-4"
                role="menu"
                aria-label="Mobile menu items"
              >
                {navigationWithActiveState.map((item, index) => (
                  <li key={item.name} role="none">
                    <NavigationLink
                      item={item}
                      isActive={item.isActive}
                      onClick={handleSmoothScroll}
                      isMobile
                      index={index}
                      isMobileMenuOpen={isMobileMenuOpen}
                    />
                  </li>
                ))}
              </ul>

              <div
                className={`mt-4 flex transform flex-col gap-5 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '200ms' : '0ms',
                }}
              >
                <SocialIcons />
                <CTAButton isMobile onMobileClose={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
