import React, { useEffect, useCallback } from 'react';
import { Clock, Sparkles, ArrowRight, Home, Star, Zap, X, CheckCircle } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

// Enhanced interface to support all the new data points
interface ComingSoonModalProps {
  onClose: () => void;
  title?: string;
  description?: string;
  featureName?: string;
  estimatedLaunch?: string;
  category?: string;
  benefits?: string[];
  showNotifyButton?: boolean;
  showBenefits?: boolean;
  customIcon?: React.ReactNode;
  priority?: 'high' | 'medium' | 'low';
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  onClose,
  title = 'Something Amazing is Coming!',
  description = "We're working hard to bring you this feature. Stay tuned for updates!",
  // featureName = 'New Feature',
  // estimatedLaunch,
  category: _category,
  benefits = [],
  // showNotifyButton = true,
  showBenefits = true,
  customIcon,
  priority = 'medium',
}) => {
  // Enhanced close handler
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleEscapeKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleClose]);

  // const handleNotifyMe = () => {
  //   console.log('User wants to be notified for:', featureName);
  //   handleClose(); // Use enhanced close handler
  // };

  // Priority-based styling
  const priorityStyles = {
    high: {
      gradient: 'bg-gradient-to-br from-red-500 via-purple-600 to-blue-600',
      badge: 'bg-red-500/20 text-red-100 border border-red-400/30',
      ring: 'ring-red-500',
    },
    medium: {
      gradient: 'bg-primary-gradient',
      badge: 'bg-primary-500/20 text-primary-100 border border-primary-400/30',
      ring: 'ring-primary-500',
    },
    low: {
      gradient: 'bg-gradient-to-br from-grey-600 to-grey-800',
      badge: 'bg-grey-500/20 text-grey-100 border border-grey-400/30',
      ring: 'ring-grey-500',
    },
  };

  const currentPriorityStyle = priorityStyles[priority];

  return (
    // Modal backdrop with click-to-close
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleClose}
      onKeyDown={handleEscapeKey}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
    >
      {/* Modal content - prevent event bubbling */}
      <div
        className="relative flex h-full max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
        aria-labelledby="modal-title"
      >
        {/* Close Button - Fixed positioning */}
        <button
          onClick={handleClose}
          className={cn(
            'absolute right-4 top-4 z-30',
            'rounded-full p-2',
            'bg-white/80 backdrop-blur-sm hover:bg-white',
            'text-accent-800 hover:text-accent-1000',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500',
            'shadow-sm hover:shadow-md',
          )}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Enhanced Header Background with Priority Styling - Fixed height */}
        <div className={cn('relative flex-shrink-0 p-8 pb-12', currentPriorityStyle.gradient)}>
          {/* Decorative Elements */}
          <div className="absolute left-4 top-4 text-white/20">
            <Sparkles size={24} />
          </div>
          <div className="absolute right-12 top-8 text-white/15">
            <Star size={16} />
          </div>
          <div className="absolute bottom-4 left-8 text-white/10">
            <Zap size={20} />
          </div>

          {/* Priority Badge */}
          {priority === 'high' && (
            <div className="absolute left-1/2 top-6 -translate-x-1/2 transform">
              <div
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-bold',
                  currentPriorityStyle.badge,
                )}
              >
                HIGH PRIORITY
              </div>
            </div>
          )}

          {/* Main Icon */}
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
              {customIcon || <Clock size={32} className="text-white" />}
            </div>
          </div>

          {/* Title */}
          <h2 id="modal-title" className="mb-3 text-center text-heading-xl font-bold text-white">
            {title}
          </h2>

          {/* Feature Badge and Category */}
          {/* <div className="flex flex-col items-center space-y-2">
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="font-medium text-white text-label-sm">{featureName}</span>
            </div>

            {category && (
              <div className="flex items-center space-x-1 text-white/80">
                <Target size={14} />
                <span className="text-xs font-medium">{category}</span>
              </div>
            )}
          </div> */}
        </div>

        {/* Scrollable Content Section */}
        <div className="relative -mt-6 flex flex-1 flex-col overflow-hidden rounded-t-2xl bg-white">
          {/* Scrollable Content Container */}
          <div className="flex-1 overflow-y-auto px-6 pb-4 pt-6">
            {/* Description */}
            <p className="mb-6 text-center text-paragraph-md leading-relaxed text-accent-800">
              {description}
            </p>

            {/* Estimated Launch Date */}
            {/* {estimatedLaunch && (
              <div className="p-4 mb-6 border border-blue-100 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar size={18} className="text-blue-600" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-blue-900">Expected Launch</p>
                    <p className="text-lg font-bold text-blue-700">{estimatedLaunch}</p>
                  </div>
                </div>
              </div>
            )} */}

            {/* Dynamic Benefits Section */}
            {showBenefits && benefits.length > 0 ? (
              <div className="mb-6 space-y-3">
                <h4 className="flex items-center justify-center space-x-2 text-center text-subheading-sm font-semibold text-accent-1000">
                  <Star size={16} className="text-primary-500" />
                  <span>What to Expect</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <FeatureItem key={index} icon={<CheckCircle size={16} />} text={benefit} />
                  ))}
                </div>
              </div>
            ) : (
              // Fallback to default benefits if none provided
              showBenefits && (
                <div className="mb-6 space-y-3">
                  <h4 className="flex items-center justify-center space-x-2 text-center text-subheading-sm font-semibold text-accent-1000">
                    <Star size={16} className="text-primary-500" />
                    <span>What to Expect</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <FeatureItem icon={<Home size={16} />} text="Enhanced user experience" />
                    <FeatureItem icon={<Star size={16} />} text="Personalized recommendations" />
                    <FeatureItem icon={<Zap size={16} />} text="Faster and smoother performance" />
                  </div>
                </div>
              )
            )}

            {/* Feature Category Info */}
            {/* {category && (
              <div className="p-3 mb-6 border rounded-lg border-grey-200 bg-grey-50">
                <div className="flex items-center space-x-2">
                  <Info size={16} className="flex-shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-accent-900">Feature Category</p>
                    <p className="text-sm text-accent-700">{category}</p>
                  </div>
                </div>
              </div>
            )} */}

            {/* Progress Indicator based on estimated launch */}
            {/* {estimatedLaunch && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2 text-sm text-accent-600">
                  <span>Development Progress</span>
                  <span>{getProgressPercentage(estimatedLaunch)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-grey-200">
                  <div
                    className="h-2 transition-all duration-500 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                    style={{ width: `${getProgressPercentage(estimatedLaunch)}%` }}
                  />
                </div>
              </div>
            )} */}

            {/* Enhanced Company Branding */}
            <div className="border-t border-grey-200 pt-4">
              <div className="flex items-center justify-center space-x-2">
                <Home size={16} className="text-primary-500" />
                <span className="text-label-sm text-accent-600">
                  Pattem Estates - Your Dream Home Awaits
                </span>
              </div>
              {priority === 'high' && (
                <div className="mt-2 text-center">
                  <span className="text-xs font-medium text-red-600">
                    🔥 High demand feature - Get notified first!
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons - Sticky at bottom */}
          <div className="flex-shrink-0 border-t border-grey-100 bg-white px-6 pb-6">
            <div className="space-y-3 pt-4">
              {/* {showNotifyButton && (
                <button
                  onClick={handleNotifyMe}
                  className={cn(
                    'flex w-full items-center justify-center space-x-2',
                    currentPriorityStyle.gradient,
                    'text-white',
                    'rounded-lg px-6 py-3',
                    'text-label-md font-semibold',
                    'hover:scale-[1.02] hover:shadow-lg',
                    'transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    currentPriorityStyle.ring,
                  )}
                >
                  <Bell size={18} />
                  <span>Notify Me When Ready</span>
                </button>
              )} */}

              <button
                onClick={handleClose}
                className={cn(
                  'flex w-full items-center justify-center space-x-2',
                  'bg-grey-100 text-accent-1000 hover:bg-grey-200',
                  'rounded-lg px-6 py-3',
                  'text-label-md font-medium',
                  'transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-offset-2',
                )}
              >
                <span>Continue Exploring</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Feature Item Component
const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3 rounded-lg bg-grey-50 p-3 transition-colors duration-200 hover:bg-grey-100">
    <div className="flex-shrink-0 text-primary-500">{icon}</div>
    <span className="text-paragraph-sm font-medium text-accent-800">{text}</span>
  </div>
);

// Helper function to calculate progress based on estimated launch
export const getProgressPercentage = (estimatedLaunch: string): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentQuarter = Math.ceil((currentDate.getMonth() + 1) / 3);

  const match = estimatedLaunch.match(/Q(\d)\s+(\d{4})/);
  if (!match) return 30;

  const launchQuarter = parseInt(match[1]);
  const launchYear = parseInt(match[2]);

  const currentQuarterAbsolute = (currentYear - 2024) * 4 + currentQuarter;
  const launchQuarterAbsolute = (launchYear - 2024) * 4 + launchQuarter;
  const quartersRemaining = launchQuarterAbsolute - currentQuarterAbsolute;

  if (quartersRemaining <= 0) return 95;
  if (quartersRemaining === 1) return 75;
  if (quartersRemaining === 2) return 60;
  if (quartersRemaining === 3) return 45;
  if (quartersRemaining === 4) return 30;
  return 20;
};
