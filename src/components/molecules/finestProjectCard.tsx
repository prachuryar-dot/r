import { memo } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { ProjectCardProps } from '@/props';

const FinestProjectCard = memo<ProjectCardProps>(({ project, index }) => (
  <article
    className="group w-[302px] flex-shrink-0 gap-4 overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div
      // href={project.link}
      className="block h-full focus:outline-none focus:ring-4 focus:ring-primary-500/50"
      aria-label={`Explore ${project.title} projects`}
    >
      <div className="relative aspect-[4/3] h-[244px] w-[302px] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.title} - ${project.description}`}
          fill
          className="rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
      </div>
      <div className="translate-y-2 transform bg-primary-50/95 p-4 backdrop-blur-sm transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:bg-primary-100/10">
        <span className="mb-2 text-heading-lg font-bold text-grey-600 transition-colors duration-300 group-hover:text-primary-600">
          {project.title}
        </span>
        <p className="text-subheading-sm font-medium leading-relaxed text-accent-800 transition-colors duration-300 group-hover:text-gray-700">
          {project.description}
        </p>
      </div>
    </div>
  </article>
));

FinestProjectCard.displayName = 'FinestProjectCard';

export default FinestProjectCard;
