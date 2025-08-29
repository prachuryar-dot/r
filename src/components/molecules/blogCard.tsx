import { memo } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { LinkButton } from '../atoms/buttons';
import { BlogCardProps } from '@/props';

const BlogCard = memo<BlogCardProps>(({ post }) => (
  <div className="w-64 flex-shrink-0 overflow-hidden lg:w-[302px]">
    <article className="group relative z-0 rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:z-10 hover:scale-[1.02]">
      <div className="relative h-[208px] overflow-hidden rounded-t-xl lg:h-[233px] lg:rounded-t-2xl">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="mt-2 p-2">
        <span className="mb-2 block w-fit rounded-3xl bg-grey-100 px-3 py-1 font-sans text-label-sm font-medium text-accent-800">
          {post.category}
        </span>

        <span className="md-2 block font-heading text-heading-md font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600 lg:mb-3 lg:font-semibold">
          {post.title}
        </span>

        <LinkButton
          href={post.link}
          variant="link"
          rightIcon={<ChevronRight size={16} />}
          className="px-3 py-3 text-primary-500 lg:font-sans lg:text-label-sm lg:font-semibold"
        >
          View Post
        </LinkButton>
      </div>
    </article>
  </div>
));

BlogCard.displayName = 'BlogCard';

export default BlogCard;
