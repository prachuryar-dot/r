'use client';
import { ChevronDownIcon } from 'lucide-react';
import React, { memo, useCallback, useState } from 'react';
// import { Button } from '../atoms/buttons';
import useMobileDetection from '@/hooks/useMobileDetection';
import EnquireNowModalButton from './modal/EnquireNowModalButton';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  mainHeading?: string;
  subtitle?: string;
  contactButtonText?: string;
  faqItems: FAQItem[];
  onContactClick?: () => void;
}

const FAQSection: React.FC<FAQSectionProps> = memo(
  ({
    mainHeading = 'Frequently asked questions',
    subtitle = "Didn't find the question",
    // contactButtonText = 'Contact us',
    faqItems = [],
    // onContactClick,
  }) => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const isMobile = useMobileDetection();

    const toggleItem = useCallback(
      (id: string) => {
        setOpenItem(openItem === id ? null : id);
      },
      [openItem],
    );

    return (
      <section className="bg-grey-50 py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            {/* Left Column - Header and Contact */}
            <div className="flex flex-col items-start gap-2 lg:w-1/3 lg:flex-shrink-0">
              <header>
                <h2
                  id="faq-heading"
                  className="font-heading text-heading-xl font-semibold leading-tight text-accent-1000 lg:text-heading-2xl"
                >
                  {mainHeading}
                </h2>
              </header>

              <p className="mb-6 font-sans text-paragraph-sm font-regular text-grey-500 lg:text-paragraph-md">
                {subtitle}
              </p>
              <EnquireNowModalButton variant="secondary-outline" size={isMobile ? 'sm' : 'lg'}>
                Contact Us
              </EnquireNowModalButton>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="flex-1">
              <div className="space-y-4">
                {faqItems.map((item, index) => {
                  const isOpen = openItem === item.id;
                  const isLast = index === faqItems.length - 1;

                  return (
                    <div
                      key={item.id}
                      className={`border-b border-grey-200 ${isLast ? 'border-b-0' : ''}`}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex w-full items-center justify-between py-3 pl-3 text-left transition-colors duration-200 hover:bg-overlay-grey-light focus:bg-overlay-grey-light focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                      >
                        <h3 className="flex-1 pr-4 text-subheading-md font-bold text-grey-500">
                          {item.question}
                        </h3>
                        <div
                          className={`flex-shrink-0 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <ChevronDownIcon className="h-5 w-5 text-grey-400" />
                        </div>
                      </button>

                      <div
                        id={`faq-answer-${item.id}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="py-6 pl-3 pr-8">
                          <p className="text-paragraph-sm font-regular leading-relaxed text-grey-500 lg:text-paragraph-md">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

FAQSection.displayName = 'FAQSection';

export default FAQSection;
