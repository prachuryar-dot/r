import { ComingSoonModal } from '@/components/molecules/modal/ComingSoonModal';
import { useModalTrigger } from './useModalTrigger';
import { REAL_ESTATE_FEATURES } from '@/data/modal';

export interface ComingSoonOptions {
  title?: string;
  description?: string;
  featureName?: string;
  estimatedLaunch?: string;
  category?: string;
  benefits?: string[]; // Changed from readonly string[] to string[]
  showNotifyButton?: boolean;
  showBenefits?: boolean;
  customIcon?: React.ReactNode;
  priority?: 'high' | 'medium' | 'low';
}

// Enhanced hook with more configuration options
export const useComingSoonModal = () => {
  const { trigger } = useModalTrigger({
    component: ComingSoonModal,
    size: 'md',
    closeOnBackdrop: true,
    closeOnEscape: true,
    showCloseButton: false,
  });

  const showComingSoon = (options?: ComingSoonOptions) => {
    return trigger({
      title: options?.title || 'Something Amazing is Coming!',
      description:
        options?.description ||
        "We're working hard to bring you this feature. Stay tuned for updates!",
      featureName: options?.featureName || 'New Feature',
      estimatedLaunch: options?.estimatedLaunch,
      category: options?.category,
      benefits: options?.benefits,
      showNotifyButton: options?.showNotifyButton ?? true,
      showBenefits: options?.showBenefits ?? true,
      customIcon: options?.customIcon,
      priority: options?.priority || 'medium',
      ...options,
    });
  };

  const showFeatureComingSoon = (featureKey: keyof typeof REAL_ESTATE_FEATURES) => {
    const feature = REAL_ESTATE_FEATURES[featureKey];
    return showComingSoon({
      title: `${feature.name} Coming Soon!`,
      description: feature.description,
      featureName: feature.name,
      estimatedLaunch: feature.estimatedLaunch,
      category: feature.category,
      benefits: [...feature.benefits],
      showNotifyButton: true,
      showBenefits: true,
    });
  };

  return {
    showComingSoon,
    showFeatureComingSoon,
    features: REAL_ESTATE_FEATURES,
  };
};
