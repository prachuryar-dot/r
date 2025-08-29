import React from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'paragraph' | 'label';

type Size = 'sm' | 'md' | 'lg' | 'xl';

type Weight = 'regular' | 'medium' | 'semibold' | 'bold';

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'small';
  variant?: Variant;
  size?: Size;
  weight?: Weight;
};

const variantMap: Record<Variant, string> = {
  paragraph: 'font-body',
  label: 'font-body',
};

const sizeMap: Record<Variant, Record<Size, string>> = {
  paragraph: {
    sm: 'text-paragraph-sm md:text-paragraph-md',
    md: 'text-paragraph-md md:text-paragraph-lg',
    lg: 'text-paragraph-lg md:text-paragraph-xl',
    xl: 'text-paragraph-xl md:text-paragraph-2xl',
  },
  label: {
    sm: 'text-label-xs md:text-label-sm',
    md: 'text-label-sm md:text-label-md',
    lg: 'text-label-md md:text-label-lg',
    xl: 'text-label-lg md:text-label-xl',
  },
};

const weightMap: Record<Weight, string> = {
  regular: 'font-regular',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const Text: React.FC<Props> = ({
  as: Tag = 'p',
  className,
  children,
  variant = 'paragraph',
  size = 'md',
  weight = 'regular',
  ...rest
}) => {
  return (
    <Tag
      className={cn(variantMap[variant], sizeMap[variant][size], weightMap[weight], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
