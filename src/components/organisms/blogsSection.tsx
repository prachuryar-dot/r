'use client';
import { memo } from 'react';
import { BlogsSectionProps } from '@/props';
import BlogsSlider from '../molecules/blogsSlider';
const BlogsSection: React.FC<BlogsSectionProps> = ({ mainHeading, description, blogPosts }) => {
  return (
    <section className="bg-grey-50 pb-10 pt-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="mb-6 lg:mb-10">
          <h2 className="mb-2 font-heading text-heading-xl font-bold text-grey-600 sm:text-4xl lg:text-heading-2xl">
            {mainHeading}
          </h2>
          <p className="max-w-4xl font-sans text-paragraph-xs font-regular text-grey-500 lg:text-paragraph-md">
            {description}
          </p>
        </div>
        <BlogsSlider posts={blogPosts} />
      </div>
    </section>
  );
};

BlogsSection.displayName = 'BlogsSection';

export default memo(BlogsSection);
