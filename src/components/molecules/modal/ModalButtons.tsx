import React from 'react';
import { Button, type ButtonProps } from '@/components/atoms/buttons/Button';
import { cn } from '@/lib/utils/cn';
import {
  Search,
  Eye,
  Calculator,
  TrendingUp,
  PieChart,
  MapPin,
  Home,
  Clock,
  Calendar,
  MessageCircle,
  Phone,
  Palette,
  Layout,
  BarChart3,
  Bell,
  Users,
  FileText,
  CreditCard,
  ShoppingCart,
  ChevronRight,
} from 'lucide-react';
import { REAL_ESTATE_FEATURES } from '@/data/modal';
import { useComingSoonModal } from '@/hooks/useComingSoonModal';
import { useModalTrigger } from '@/hooks/useModalTrigger';
import CalculateEMI from '../calculateEMI/calculateEMI';

// Enhanced base component with feature-specific styling
export interface RealEstateFeatureButtonProps extends Omit<ButtonProps, 'onClick'> {
  feature: keyof typeof REAL_ESTATE_FEATURES;
  children: React.ReactNode; // Made optional
  showEstimatedLaunch?: boolean;
  autoIcon?: boolean;
  leftIcon?: React.ReactNode; // Allow custom left icon
  rightIcon?: React.ReactNode; // Allow custom right icon
}

export const RealEstateFeatureButton = React.forwardRef<
  HTMLButtonElement,
  RealEstateFeatureButtonProps
>(
  (
    {
      feature,
      children,
      showEstimatedLaunch = false,
      autoIcon = true,
      leftIcon,
      rightIcon,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { showFeatureComingSoon } = useComingSoonModal();
    const featureData = REAL_ESTATE_FEATURES[feature];

    const handleClick = () => {
      if (!disabled) {
        showFeatureComingSoon(feature);
      }
    };

    // Icon mapping
    const iconMap = {
      Search,
      Eye,
      Calculator,
      TrendingUp,
      PieChart,
      MapPin,
      Home,
      Clock,
      Calendar,
      MessageCircle,
      Phone,
      Palette,
      Layout,
      BarChart3,
      Bell,
      Users,
      FileText,
      CreditCard,
      ShoppingCart,
      ChevronRight,
    };

    // Determine which icon to use
    const finalLeftIcon = leftIcon;
    let finalRightIcon = rightIcon;

    if (autoIcon && 'icon' in featureData && featureData.icon) {
      const IconComponent = iconMap[featureData.icon as keyof typeof iconMap];
      if (IconComponent) {
        // If no custom icons provided, use the auto icon as right icon
        if (!leftIcon && !rightIcon) {
          finalRightIcon = <IconComponent size={18} />;
        }
      }
    }

    // Use children if provided, otherwise use feature name
    const buttonText = children || featureData.name;

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        disabled={disabled}
        leftIcon={finalLeftIcon}
        rightIcon={finalRightIcon}
        className={cn(
          'relative',
          showEstimatedLaunch && 'pb-8', // Extra space for launch date
          className,
        )}
        {...props}
      >
        {buttonText}
        {showEstimatedLaunch && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 transform text-xs opacity-75">
            {featureData.estimatedLaunch}
          </span>
        )}
      </Button>
    );
  },
);

RealEstateFeatureButton.displayName = 'RealEstateFeatureButton';

// =============================================================================
// ALL FEATURE BUTTONS
// =============================================================================

// Property Viewing & Discovery
export const ViewPropertyButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="VIEW_PROPERTY" variant="primary" {...props}>
    View Property
  </RealEstateFeatureButton>
);

export const PropertySearchButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="PROPERTY_SEARCH" variant="primary" {...props}>
    Advanced Search
  </RealEstateFeatureButton>
);

export const VirtualTourButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="VIRTUAL_TOUR" variant="secondary" {...props}>
    Virtual Tour
  </RealEstateFeatureButton>
);

export const VisitPropertiesButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="VISIT_PROPERTIES" variant="primary-outline" {...props}>
    Visit Properties
  </RealEstateFeatureButton>
);

// Scheduling & Booking
export const BookVisitButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="BOOK_VISIT" variant="success" {...props}>
    Book Visit
  </RealEstateFeatureButton>
);

// Communication
export const EnquireNowButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="ENQUIRE_NOW" variant="primary" {...props}>
    Enquire Now
  </RealEstateFeatureButton>
);

export const ContactUsButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="CONTACT_US" variant="secondary-outline" {...props}>
    Contact Us
  </RealEstateFeatureButton>
);

// Interior Design
export const ViewInteriorsButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="VIEW_INTERIORS" variant="secondary" {...props}>
    View Interiors
  </RealEstateFeatureButton>
);

export const InteriorDetailsButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="INTERIOR_DETAILS" variant="light" {...props}>
    View In Details
  </RealEstateFeatureButton>
);

// Financial & Transactions
export const BuyPropertyButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="BUY_PROPERTY" variant="success" {...props}>
    Buy A Property
  </RealEstateFeatureButton>
);

export const EMICalculatorButton = ({
  isMobile,
  emiCalculatorCta,
}: {
  isMobile: boolean;
  emiCalculatorCta: string;
}) => {
  const { trigger } = useModalTrigger({
    component: CalculateEMI,
    size: 'auto',
    closeOnBackdrop: true,
    closeOnEscape: true,
    showCloseButton: false,
  });
  return (
    <Button
      variant="primary"
      size={isMobile ? 'sm' : 'lg'}
      rightIcon={<Calculator className="h-4 w-4" />}
      aria-label="Book a visit to explore interior design options"
      className="rounded text-grey-50"
      onClick={trigger}
    >
      {emiCalculatorCta}
    </Button>
  );
};

// Additional Utility Buttons
export const PropertyValuationButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="PROPERTY_VALUATION" variant="primary" {...props}>
    Get Valuation
  </RealEstateFeatureButton>
);

export const InvestmentAdvisorButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="INVESTMENT_ADVISOR" variant="primary-outline" {...props}>
    Investment Guide
  </RealEstateFeatureButton>
);

export const NeighborhoodInsightsButton = (
  props: Omit<RealEstateFeatureButtonProps, 'feature' | 'children'>,
) => (
  <RealEstateFeatureButton feature="NEIGHBORHOOD_INSIGHTS" variant="ghost" {...props}>
    Neighborhood Info
  </RealEstateFeatureButton>
);
