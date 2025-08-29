'use client';
import { ChevronDownIcon, MapPin } from 'lucide-react';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { Button } from '../atoms/buttons';
import { CardSlider, CardSliderItem } from '../atoms/cardSlider';

export interface AmenitiesAccordionItem {
  id: string;
  amenitiesTitle: string;
  amenitiesDescription?: string;
  amenitiesItems?: AmenitiesItem[];
}

export interface AmenitiesItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export interface AmenitiesAccordionSectionProps {
  variant: 'dark' | 'light';
  mainHeading?: string;
  subtitle?: string;
  footerDescription?: string;
  contactButtonText?: string;
  amenitiesAccordionItems: AmenitiesAccordionItem[];
  cardSlideItems: CardSliderItem[];
  onContactClick?: () => void;
}

const AccordionItem = memo<{
  item: AmenitiesAccordionItem;
  isOpen: boolean;
  isLast: boolean;
  variant: 'dark' | 'light';
  onToggle: (id: string) => void;
}>(({ item, isOpen, variant, onToggle }) => {
  const handleToggle = useCallback(() => {
    onToggle(item.id);
  }, [item.id, onToggle]);

  const colors = useMemo(() => {
    if (variant === 'dark') {
      return {
        titleText: 'text-grey-50',
        descriptionText: 'text-grey-200',
        itemText: 'text-primary-400',
        borderColor: 'border-grey-400',
        hoverBg: 'hover:bg-accent-900',
        focusBg: 'focus:bg-accent-900',
        expandedBg: 'bg-accent-900',
        chevronColor: 'text-grey-300',
      };
    } else {
      return {
        titleText: 'text-accent-1000',
        descriptionText: 'text-grey-500',
        itemText: 'text-accent-800',
        borderColor: 'border-grey-200',
        hoverBg: 'hover:bg-grey-100',
        focusBg: 'focus:bg-grey-100',
        expandedBg: 'bg-grey-100',
        chevronColor: 'text-grey-400',
      };
    }
  }, [variant]);

  return (
    <div className={`border-b ${colors.borderColor} ${isOpen ? 'rounded-b-lg' : ''}`}>
      <button
        onClick={handleToggle}
        className={`flex w-full items-center justify-between rounded-t-lg px-4 py-4 text-left transition-colors duration-200 ${colors.hoverBg} ${colors.focusBg} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 ${isOpen ? `${colors.expandedBg} rounded-lg rounded-b-none` : ''}`}
        aria-expanded={isOpen}
        aria-controls={`amenities-description-${item.id}`}
        aria-label={`Toggle ${item.amenitiesTitle} details`}
        type="button"
      >
        <h3 className={`flex-1 pr-4 text-subheading-md font-bold ${colors.titleText}`}>
          ⬜ {item.amenitiesTitle}
        </h3>
        <div
          className={`flex-shrink-0 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <ChevronDownIcon className={`h-5 w-5 ${colors.chevronColor}`} />
        </div>
      </button>

      <div
        id={`amenities-description-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? `max-h-96 opacity-100 ${colors.expandedBg} border-t ${colors.borderColor} rounded-b-lg border border-primary-500 border-opacity-50`
            : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-labelledby={`amenities-button-${item.id}`}
      >
        <div className="px-4 py-6">
          {item.amenitiesDescription && (
            <p
              className={`text-paragraph-sm font-regular lg:text-paragraph-md ${colors.descriptionText}`}
            >
              {item.amenitiesDescription}
            </p>
          )}
          {item.amenitiesItems && item.amenitiesItems.length > 0 && (
            <ul className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {item.amenitiesItems.map((amenity) => (
                <li
                  key={amenity.id}
                  className={`flex items-center gap-2 text-label-sm font-semibold lg:text-label-md ${colors.itemText}`}
                >
                  <span className="flex-shrink-0" aria-hidden="true">
                    {amenity.icon || <MapPin size={16} />}
                  </span>
                  <span className="truncate">{amenity.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

const AmenitiesAccordionSection: React.FC<AmenitiesAccordionSectionProps> = memo(
  ({
    mainHeading,
    variant = 'dark',
    subtitle,
    footerDescription,
    contactButtonText,
    amenitiesAccordionItems = [],
    cardSlideItems = [],
    onContactClick,
  }) => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleItem = useCallback((id: string) => {
      setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
    }, []);

    const sectionStyles = useMemo(() => {
      const isDark = variant === 'dark';
      return {
        backgroundColor: isDark ? 'bg-accent-1000' : 'bg-grey-50',
        textColor: isDark ? 'text-grey-50' : 'text-accent-1000',
        subtitleColor: isDark ? 'text-grey-200' : 'text-grey-500',
      };
    }, [variant]);

    return (
      <section
        className={`py-12 sm:py-16 lg:py-20 xl:py-24 ${sectionStyles.backgroundColor}`}
        aria-labelledby="amenities-heading"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="mb-8 max-w-4xl sm:mb-12 lg:mb-16">
            <header className="mb-4">
              <h2
                id="amenities-heading"
                className={`font-heading text-heading-xl font-extrabold sm:text-heading-2xl lg:text-heading-3xl ${sectionStyles.textColor}`}
              >
                {mainHeading}
              </h2>
            </header>

            {subtitle && (
              <p
                className={`text-paragraph-sm font-regular lg:text-paragraph-md ${sectionStyles.subtitleColor}`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="lg:sticky lg:top-24">
              <div className="mx-auto aspect-[4/3] w-full max-w-2xl sm:aspect-[3/2] lg:mx-0 lg:aspect-[4/3]">
                <CardSlider
                  items={cardSlideItems}
                  autoPlay={true}
                  showArrows={false}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="flex h-full flex-col justify-between space-y-6">
              <div className="space-y-2">
                {amenitiesAccordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openItem === item.id}
                    isLast={index === amenitiesAccordionItems.length - 1}
                    variant={variant}
                    onToggle={toggleItem}
                  />
                ))}
              </div>

              {contactButtonText && (
                <div className="pt-4">
                  <Button
                    onClick={onContactClick}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    aria-label={`${contactButtonText} - View Amenities in detail`}
                  >
                    {contactButtonText}
                  </Button>
                </div>
              )}
            </div>
          </div>
          {footerDescription && (
            <div className="mt-12 max-w-4xl text-start">
              <p
                className={`text-paragraph-sm font-regular lg:text-paragraph-md ${sectionStyles.subtitleColor}`}
              >
                {footerDescription}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  },
);

AmenitiesAccordionSection.displayName = 'AmenitiesAccordionSection';

export default AmenitiesAccordionSection;
