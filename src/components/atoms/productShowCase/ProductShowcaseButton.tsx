import React, { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import ProductShowCaseImg from './ProductShowCaseImage';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Button, ButtonProps, IconButton } from '../buttons/Button';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface productShowCaseSlide {
  id: string;
  title: string;
  description: string;
  src: string;
}

export interface ProductShowcaseButtonProps extends ButtonProps {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  productShowCaseSlides?: productShowCaseSlide[];
}

export const ProductShowcaseButton: React.FC<ProductShowcaseButtonProps> = ({
  variant,
  size,
  rightIcon,
  leftIcon,
  className,
  children,
  productShowCaseSlides,
}) => {
  const [isProductShowCaseOpen, setIsProductShowCaseOpen] = useState(false);

  console.log(productShowCaseSlides);

  const handleProductShowCase = () => {
    setIsProductShowCaseOpen(!isProductShowCaseOpen);
  };
  return (
    <>
      <Button
        variant={variant}
        size={size}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        onClick={handleProductShowCase}
        className={className}
      >
        {children}
      </Button>

      <Lightbox
        plugins={[Captions]}
        open={isProductShowCaseOpen}
        close={handleProductShowCase}
        slides={productShowCaseSlides?.map((slide) => ({
          ...slide,
          description: `${slide.title} \n ${slide.description}`,
          title: '',
        }))}
        captions={{ descriptionTextAlign: 'center' }}
        render={{
          slide: ProductShowCaseImg,
          iconPrev: () => (
            <IconButton
              className="opacity-60"
              size="sm"
              variant="primary"
              aria-label="prev-slide"
              icon={<ChevronLeft />}
            />
          ),
          iconNext: () => (
            <IconButton
              className="opacity-60"
              size="sm"
              variant="primary"
              aria-label="prev-slide"
              icon={<ChevronRight />}
            />
          ),
          iconClose: () => (
            <IconButton
              className="opacity-60"
              size="sm"
              variant="primary"
              aria-label="close"
              icon={<X />}
            />
          ),
        }}
      />
    </>
  );
};

export default ProductShowcaseButton;
