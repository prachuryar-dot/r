import React, { memo, useCallback } from 'react';
import { Button } from '../atoms/buttons';

interface AreaFilterPillsProps {
  filters: Array<{ id: string; label: string; value: string }>;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const AreaFilterPills = memo<AreaFilterPillsProps>(
  ({ filters, selectedFilter, onFilterChange }) => {
    const handleFilterClick = useCallback(
      (filterValue: string) => {
        onFilterChange(filterValue);
      },
      [onFilterChange],
    );

    return (
      <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => handleFilterClick(filter.value)}
            variant={selectedFilter === filter.value ? 'secondary' : 'secondary-outline'}
            aria-pressed={selectedFilter === filter.value}
            className="min-w-fit flex-shrink-0 whitespace-nowrap"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    );
  },
);

AreaFilterPills.displayName = 'AreaFilterPills';

export default AreaFilterPills;
