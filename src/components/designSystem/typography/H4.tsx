import React from 'react';
import { cn } from '@/lib/utils/cn';

type OwnProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'label' | 'small';
};

const H4: React.FC<OwnProps> = ({ as: Tag = 'h4', className, children, ...rest }) => {
  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp
      className={cn('font-heading text-heading-md font-bold md:text-heading-xl', className)}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default H4;
