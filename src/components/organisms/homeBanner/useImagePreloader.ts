import { BannerSlide } from '@/interfaces';
import { useState, useEffect } from 'react';

interface UseImagePreloaderProps {
  slides: BannerSlide[];
  isBannerLoading: boolean;
  hasSlides: boolean;
}

export const useImagePreloader = ({
  slides,
  isBannerLoading,
  hasSlides,
}: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [showSlides, setShowSlides] = useState(false);

  useEffect(() => {
    if (!isBannerLoading || !hasSlides) return;

    const preloadImages = async () => {
      const LOADING_TIMEOUT = 4000;

      const loadPromises = slides.map((slide, index) => {
        return new Promise<void>((resolve) => {
          let loadedCount = 0;
          const totalImages = slide.collaborationImageUrl ? 3 : 2;
          let isResolved = false;

          const timeoutId = setTimeout(() => {
            if (!isResolved) {
              setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
              isResolved = true;
              resolve();
            }
          }, LOADING_TIMEOUT);

          const checkComplete = () => {
            loadedCount++;
            if (loadedCount === totalImages && !isResolved) {
              clearTimeout(timeoutId);
              setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
              isResolved = true;
              resolve();
            }
          };

          if (typeof window !== 'undefined') {
            const mobileImg = new window.Image();
            mobileImg.onload = checkComplete;
            mobileImg.onerror = () => {
              checkComplete();
            };
            mobileImg.src = slide.mobileBannerUrl;

            const desktopImg = new window.Image();
            desktopImg.onload = checkComplete;
            desktopImg.onerror = () => {
              checkComplete();
            };
            desktopImg.src = slide.desktopBannerUrl;

            if (slide.collaborationImageUrl) {
              const collabImg = new window.Image();
              collabImg.onload = checkComplete;
              collabImg.onerror = () => {
                checkComplete();
              };
              collabImg.src = slide.collaborationImageUrl;
            }
          } else {
            // If running on the server, consider the images as loaded to avoid blocking SSR
            checkComplete();
          }
        });
      });

      try {
        await Promise.all(loadPromises);
      } catch (error) {
        console.error('Error during image preloading:', error);
      }

      setTimeout(() => {
        setShowSlides(true);
      }, 100);
    };

    preloadImages();
  }, [isBannerLoading, hasSlides, slides]);

  return {
    loadedImages,
    showSlides,
  };
};
