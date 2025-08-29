'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { IconButton } from '../atoms/buttons';

interface Developer {
  id: number;
  name: string;
  location: string;
  experience: number;
  totalProjects: number;
  logo: string;
  readyToMove: number;
  underConstruction: number;
  newLaunch: number;
  readyToMoveUrl: string;
  underConstructionUrl: string;
  newLaunchUrl: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: 'Sobha',
    location: 'Bengaluru',
    experience: 24,
    totalProjects: 235,
    logo: 'SOBHA',
    readyToMove: 136,
    underConstruction: 23,
    newLaunch: 5,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
  {
    id: 2,
    name: 'Brigade Group',
    location: 'Bengaluru',
    experience: 35,
    totalProjects: 180,
    logo: 'BRIGADE',
    readyToMove: 95,
    underConstruction: 45,
    newLaunch: 8,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
  {
    id: 3,
    name: 'Prestige Group',
    location: 'Bengaluru',
    experience: 30,
    totalProjects: 210,
    logo: 'PRESTIGE',
    readyToMove: 120,
    underConstruction: 35,
    newLaunch: 12,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
  {
    id: 4,
    name: 'Godrej Properties',
    location: 'Bengaluru',
    experience: 25,
    totalProjects: 165,
    logo: 'GODREJ',
    readyToMove: 85,
    underConstruction: 28,
    newLaunch: 6,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
  {
    id: 5,
    name: 'Embassy Group',
    location: 'Bengaluru',
    experience: 28,
    totalProjects: 145,
    logo: 'EMBASSY',
    readyToMove: 78,
    underConstruction: 32,
    newLaunch: 9,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
  {
    id: 6,
    name: 'Puravankara',
    location: 'Bengaluru',
    experience: 48,
    totalProjects: 190,
    logo: 'PURAVANKARA',
    readyToMove: 105,
    underConstruction: 25,
    newLaunch: 4,
    readyToMoveUrl: '#',
    underConstructionUrl: '#',
    newLaunchUrl: '#',
  },
];

const DeveloperCard: React.FC<{ developer: Developer }> = ({ developer }) => {
  return (
    <div className="w-[322px] flex-shrink-0 rounded-lg bg-grey-50 lg:w-[360px]">
      <div className="mb-6 flex items-start gap-2.5">
        <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-300">
          <div className="w-full text-center">
            <div className="mb-1 ml-6 mr-4 grid grid-cols-6 gap-0.5">
              {Array.from({ length: 78 }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-black"></div>
              ))}
            </div>
            <div className="text-[clamp(0.5rem, 2vw, 3rem)] break-words px-1 text-center font-semibold text-black">
              {developer.logo}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <span className="mb-1 font-heading text-heading-md font-bold text-gray-900 lg:text-heading-xl">
            {developer.name}
          </span>
          <p className="mb-4 font-sans text-subheading-xs font-regular text-gray-500 lg:text-label-sm lg:font-medium">
            {developer.location}
          </p>
          {/* TODO bgColor */}
          <div className="rounded-xl bg-grey-100 px-3 py-2">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                {/* TODO color text-[#2961CB] */}
                <div className="font-sans text-subheading-sm font-bold text-[#2961CB]">
                  {developer.experience} years
                </div>
                <div className="font-sans text-subheading-xs font-medium text-grey-400">
                  Experience
                </div>
              </div>
              <div className="my-2 h-6 w-px bg-grey-300"></div>
              <div className="flex flex-col gap-1">
                {/* TODO color text-blue-[#2961CB] */}

                <div className="font-sans text-subheading-sm font-bold text-[#2961CB]">
                  {developer.totalProjects}
                </div>
                <div className="text-nowrap font-sans text-subheading-xs font-medium text-grey-400">
                  Total projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <DevelopersCardLinkButton
          urlLink={developer.readyToMoveUrl}
          count={developer.readyToMove}
          text="Ready to move"
        />
        <DevelopersCardLinkButton
          urlLink={developer.underConstructionUrl}
          count={developer.underConstruction}
          text="Under construction"
        />
        <DevelopersCardLinkButton
          urlLink={developer.newLaunchUrl}
          count={developer.newLaunch}
          text="New launch"
        />
      </div>
    </div>
  );
};

const DevelopersCardLinkButton: React.FC<{ urlLink: string; count: number; text: string }> = ({
  text,
  urlLink,
  count,
}) => {
  return (
    <Link
      href={urlLink}
      className="active:bg-primary-900 active:border-primary-900 flex w-full items-center justify-between rounded-[4px] border border-accent-1000 bg-transparent p-3 text-accent-1000 transition-colors hover:border-accent-800 hover:bg-accent-100 hover:text-grey-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus-visible:ring-2 active:scale-95 active:text-grey-50 disabled:border-grey-300 disabled:bg-transparent disabled:text-grey-400"
    >
      <span className="font-sans text-label-sm font-semibold text-accent-1000 lg:text-label-md">
        {/* TODO color text-blue-[#2961CB] */}
        {text} <span className="text-[#2961CB]">({count})</span>
      </span>
      <ChevronRight className="h-4 w-4 text-accent-1000" />
    </Link>
  );
};

const DevelopersSlider: React.FC<{ developers: Developer[] }> = ({ developers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideWidth = 360 + 24;
  const cardsPerView = isMobile ? 1 : 3;
  const maxSlide = Math.max(0, developers.length - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth',
      });
    }
  }, [currentSlide, slideWidth]);

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>

      {developers.length > cardsPerView && (
        <div className="mt-6 hidden justify-end gap-4 sm:flex">
          <IconButton
            onClick={prevSlide}
            variant="secondary-outline"
            disabled={currentSlide === 0}
            aria-label="Previous developers"
            size="md"
            icon={<ChevronLeft className="h-5 w-5" />}
          ></IconButton>

          <IconButton
            onClick={nextSlide}
            variant="secondary-outline"
            disabled={currentSlide === maxSlide}
            aria-label="Next developers"
            size="md"
            icon={<ChevronRight className="h-5 w-5" />}
          ></IconButton>
        </div>
      )}
    </div>
  );
};

const TopDevelopersSection: React.FC = () => {
  return (
    <section className="bg-grey-50 py-16 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="mb-12">
          <h2 className="mb-4 text-heading-xl font-semibold text-gray-900 sm:text-4xl lg:text-heading-2xl">
            Premier Property Developers of Bengaluru
          </h2>
          <p className="max-w-3xl font-body text-paragraph-xs font-regular text-gray-600 lg:text-paragraph-md">
            Explore trusted developers shaping Bengaluru&apos;s skyline, offering modern living
            solutions across a range of premium and affordable segments.
          </p>
        </div>

        <DevelopersSlider developers={developers} />
      </div>
    </section>
  );
};

export default TopDevelopersSection;
