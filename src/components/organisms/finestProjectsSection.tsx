import { memo } from 'react';
import { FinestProjectSlider } from '@/components/molecules/finestProjectSlider';
import { FinestProjectSectionProps } from '@/props';

const FinestProjectsSection: React.FC<FinestProjectSectionProps> = ({ mainHeading, projects }) => {
  return (
    <section className="bg-primary-50 py-16 lg:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="mb-12 text-center lg:mb-10">
          <h2
            id={mainHeading}
            className="mx-auto max-w-4xl text-heading-xl font-bold text-grey-600 lg:text-heading-2xl"
          >
            {mainHeading}
          </h2>
        </div>

        <FinestProjectSlider projects={projects} />
      </div>
    </section>
  );
};

FinestProjectsSection.displayName = 'FinestProjectSection';

export default memo(FinestProjectsSection);
