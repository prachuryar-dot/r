import React from 'react';
import { cn } from '@/lib/utils/cn';

type OwnProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'label' | 'small';
};

const H3: React.FC<OwnProps> = ({ as: Tag = 'h3', className, children, ...rest }) => {
  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp
      className={cn(
        'font-heading text-heading-lg font-semibold sm:text-heading-xl md:text-heading-2xl lg:text-heading-3xl xl:text-heading-4xl',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default H3;
