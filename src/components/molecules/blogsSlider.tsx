import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../atoms/buttons';
import useMobileDetection from '@/hooks/useMobileDetection';
import { BlogsSliderProps } from '@/props';
import BlogCard from '../molecules/blogCard';

const BlogsSlider = memo<BlogsSliderProps>(({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMobileDetection(768);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const slideWidth = 320;
  const gap = 24;
  const cardsPerView = isMobile ? 1 : Math.min(4, posts.length);
  const maxSlide = Math.max(0, posts.length - cardsPerView);

  const nextSlide = useCallback(() => {
    isClickScrolling.current = true;
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    isClickScrolling.current = true;
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollLeft = currentSlide * (slideWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
      const timeout = setTimeout(() => {
        isClickScrolling.current = false;
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, slideWidth, gap]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const scrollLeft = slider.scrollLeft;
      const slideIndex = Math.round(scrollLeft / (slideWidth + gap));
      setCurrentSlide(slideIndex);
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [slideWidth, gap]);

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={sliderRef}
        className="scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth py-3"
        style={{ scrollBehavior: 'smooth' }}
      >
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length > cardsPerView && (
        <div className="hidden justify-end gap-4 sm:flex">
          <IconButton
            variant="secondary-outline"
            size="md"
            icon={<ChevronLeft size={20} />}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous blogs"
          ></IconButton>

          <IconButton
            variant="secondary-outline"
            size="md"
            icon={<ChevronRight size={20} />}
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            aria-label="Next blogs"
          ></IconButton>
        </div>
      )}
    </div>
  );
});

BlogsSlider.displayName = 'BlogsSlider';

export default BlogsSlider;
