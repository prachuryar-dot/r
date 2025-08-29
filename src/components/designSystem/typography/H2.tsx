import React from 'react';
import { cn } from '@/lib/utils/cn';

type OwnProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'label' | 'small';
};

const H2: React.FC<OwnProps> = ({ as: Tag = 'h2', className, children, ...rest }) => {
  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp
      className={cn(
        'font-heading text-heading-xl font-bold sm:text-heading-2xl md:text-heading-3xl lg:text-heading-4xl xl:text-heading-5xl',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default H2;
