import { memo } from 'react';
import { CategoryTabsProps } from '@/props';

const CategoryTabs = memo<CategoryTabsProps>(({ categories, activeCategory, onCategoryChange }) => (
  <div className="flex md:mb-8 md:justify-center">
    <div className="flex gap-8 overflow-x-auto border-b border-grey-100 md:flex-wrap">
      {categories.map((category) => {
        const isActiveCategory = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 text-nowrap border-b-2 border-primary pb-2 transition-all duration-300 ${
              isActiveCategory
                ? 'bg-primary-gradient bg-clip-text text-transparent'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className={`${isActiveCategory ? 'text-primary' : ''}`}>{category.icon}</span>
            <span className="font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  </div>
));

CategoryTabs.displayName = 'CategoryTabs';

export default CategoryTabs;
