import React from 'react';

interface LoadingSpinnerProps {
  headingPartOne?: string;
  headingPartTwo?: string;
  description?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary-400 border-t-transparent"></div>
        <div className="text-lg font-bold text-grey-50 sm:text-xl">Loading Properties</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
