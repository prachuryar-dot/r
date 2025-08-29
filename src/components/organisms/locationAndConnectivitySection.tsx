'use client';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { memo, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Button, IconButton } from '../atoms/buttons';

export interface LocationAndConnectivitySectionProps {
  mainHeading: string;
  locationText: string;
  locationLink: string;
  locationLinkText: string;
  locationImage: string;
  locationTabs: LocationTab[];
}

export interface LocationTab {
  id: string;
  tabName: string;
  icon?: string;
  connectivity: Connectivity[];
}

export interface Connectivity {
  name: string;
  time: string;
  distance: string;
  icon?: string;
}

const ConnectivityItem = memo<{
  item: Connectivity;
  index: number;
  isLast: boolean;
  isMobile?: boolean;
}>(({ item, index, isLast, isMobile = false }) => {
  if (isMobile) {
    return (
      <div
        className={`flex items-center justify-between p-4 ${!isLast ? 'border-b border-grey-100' : ''}`}
      >
        <div className="flex flex-1 items-center gap-3">
          <div className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center text-grey-400">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-wrap text-paragraph-sm font-medium text-accent-1000">
              {item.name}
            </h4>
            <p className="text-paragraph-xs text-grey-400">{item.distance}</p>
          </div>
        </div>
        <div className="flex-shrink-0 text-paragraph-sm font-bold text-primary-500">
          {item.time}
        </div>
      </div>
    );
  }

  return (
    <div
      key={index}
      className="flex items-center gap-2 border-b border-grey-200 py-3 last:border-b-0"
    >
      <div className="flex w-3/5 items-center gap-2">
        <div className="flex h-[14px] w-[14px] flex-shrink-0 items-center justify-center">
          <MapPin size={14} aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-paragraph-sm font-medium text-accent-1000">{item.name}</h4>
        </div>
      </div>
      <div className="w-2/5 text-end text-paragraph-xs font-bold text-primary-500">
        {item.time}
        <p className="text-paragraph-xs text-grey-400">{item.distance}</p>
      </div>
    </div>
  );
});

ConnectivityItem.displayName = 'ConnectivityItem';

const TabButton = memo<{
  tab: LocationTab;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}>(({ tab, isActive, onClick, isMobile = false }) => {
  const baseClasses = `flex items-center gap-2 border-b-2 px-4 py-3 text-paragraph-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`;
  const activeClasses = isActive
    ? 'border-primary-500 text-primary-500'
    : 'border-transparent text-grey-400 hover:text-accent-1000';
  const mobileClasses = isMobile ? 'flex-shrink-0 whitespace-nowrap' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${mobileClasses}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${tab.id}`}
      id={`tab-${tab.id}`}
    >
      {tab.icon && (
        <span className={`${isMobile ? 'text-base' : 'text-lg'}`} aria-hidden="true">
          {tab.icon}
        </span>
      )}
      {tab.tabName}
    </button>
  );
});

TabButton.displayName = 'TabButton';

const ScrollButton = memo<{
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}>(({ direction, onClick, className = '' }) => {
  const isLeft = direction === 'left';

  return (
    <>
      <IconButton
        variant="secondary"
        icon={isLeft ? <ChevronLeft /> : <ChevronRight />}
        size="xs"
        className={`absolute top-1/2 z-10 -translate-y-1/2 transform opacity-80 ${isLeft ? 'left-[-15px]' : 'right-[-15px]'} ${className}`}
        aria-label={`Scroll ${direction}`}
        onClick={onClick}
      />
    </>
  );
});

ScrollButton.displayName = 'ScrollButton';

const LocationAndConnectivitySection: React.FC<LocationAndConnectivitySectionProps> = memo(
  ({ mainHeading, locationText, locationImage, locationLinkText, locationTabs }) => {
    const [activeTab, setActiveTab] = useState(locationTabs[0]?.id || '');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [showAllItems, setShowAllItems] = useState(false);
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    const activeTabData = useMemo(
      () => locationTabs.find((tab) => tab.id === activeTab),
      [locationTabs, activeTab],
    );

    const checkScrollPosition = useCallback(() => {
      const container = tabsContainerRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }, []);

    const scrollTabs = useCallback((direction: 'left' | 'right') => {
      const container = tabsContainerRef.current;
      if (!container) return;

      const scrollAmount = Math.min(200, container.clientWidth * 0.8);
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }, []);

    const handleTabChange = useCallback((tabId: string) => {
      setActiveTab(tabId);
      setShowAllItems(false);
    }, []);

    const toggleShowAll = useCallback(() => {
      setShowAllItems((prev) => !prev);
    }, []);

    const getDisplayItems = useCallback(
      (items: Connectivity[]) => {
        if (showAllItems) return items;
        return items.slice(0, 5);
      },
      [showAllItems],
    );

    useEffect(() => {
      const container = tabsContainerRef.current;
      if (!container) return;

      const handleScroll = () => checkScrollPosition();
      const handleResize = () => checkScrollPosition();

      checkScrollPosition();
      container.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });

      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, [checkScrollPosition]);

    if (!locationTabs.length) return null;

    return (
      <section className="bg-grey-50 py-16 lg:py-24" aria-labelledby="location-heading">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <h2
            id="location-heading"
            className="mb-6 font-heading text-heading-xl font-extrabold text-grey-600 lg:text-heading-2xl"
          >
            {mainHeading}
          </h2>

          <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
            {/* Location Image and Info */}
            <div className="flex flex-col items-start gap-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={locationImage}
                  alt="Location map showing nearby connectivity options"
                  width={370}
                  height={185}
                  className="h-[185px] w-[370px] object-cover transition-transform duration-300 hover:scale-105 lg:h-[355px] lg:w-[411px]"
                  sizes="(max-width: 1024px) 370px, 411px"
                  priority={false}
                />
              </div>

              <div className="mt-4 flex items-center gap-1">
                <MapPin size={16} className="text-grey-400" aria-hidden="true" />
                <p className="font-body text-paragraph-sm font-medium text-accent-1000 lg:text-paragraph-md">
                  {locationText}
                </p>
              </div>

              <Button variant="primary" size="md" rightIcon={<ChevronRight />}>
                {locationLinkText}
              </Button>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden flex-1 flex-col lg:flex">
              <div
                className="flex justify-evenly rounded-t-xl border-b border-grey-300 bg-accent-50 px-6"
                role="tablist"
                aria-label="Connectivity options"
              >
                {locationTabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    isActive={activeTab === tab.id}
                    onClick={() => handleTabChange(tab.id)}
                  />
                ))}
              </div>

              <div
                className="overflow-hidden rounded-b-xl border border-t-0 border-grey-200 bg-white shadow-sm"
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
              >
                <div className="grid grid-cols-1 gap-0 px-4 py-4 lg:grid-cols-2 lg:gap-x-8">
                  {activeTabData?.connectivity.map((item, index) => (
                    <ConnectivityItem
                      key={`${item.name}-${index}`}
                      item={item}
                      index={index}
                      isLast={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Tabs */}
            <div className="w-full lg:hidden">
              <div className="relative mb-6">
                <div
                  ref={tabsContainerRef}
                  className="scrollbar-hide flex overflow-x-auto scroll-smooth"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                  role="tablist"
                  aria-label="Connectivity options"
                >
                  <div className="flex min-w-full border-b border-grey-200">
                    {locationTabs.map((tab) => (
                      <TabButton
                        key={tab.id}
                        tab={tab}
                        isActive={activeTab === tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        isMobile
                      />
                    ))}
                  </div>
                </div>

                {canScrollLeft && (
                  <ScrollButton direction="left" onClick={() => scrollTabs('left')} />
                )}

                {canScrollRight && (
                  <ScrollButton direction="right" onClick={() => scrollTabs('right')} />
                )}
              </div>

              <div
                className="overflow-hidden rounded-lg border border-grey-200 bg-white shadow-sm"
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
              >
                {activeTabData &&
                  getDisplayItems(activeTabData.connectivity).map((item, index, array) => (
                    <ConnectivityItem
                      key={`${item.name}-${index}`}
                      item={item}
                      index={index}
                      isLast={
                        index === array.length - 1 &&
                        (!activeTabData || activeTabData.connectivity.length <= 5 || showAllItems)
                      }
                      isMobile
                    />
                  ))}

                {activeTabData && activeTabData.connectivity.length > 5 && (
                  <div className="border-t border-grey-100 p-4">
                    <button
                      onClick={toggleShowAll}
                      className="w-full rounded-lg border border-grey-200 px-6 py-3 text-paragraph-sm font-medium text-grey-600 transition-colors hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      aria-label={
                        showAllItems
                          ? 'View less connectivity options'
                          : 'View more connectivity options'
                      }
                    >
                      {showAllItems
                        ? 'View less'
                        : `View more (${activeTabData.connectivity.length - 5} more)`}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

LocationAndConnectivitySection.displayName = 'LocationAndConnectivitySection';

export default LocationAndConnectivitySection;
