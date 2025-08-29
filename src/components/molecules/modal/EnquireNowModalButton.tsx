import { Button } from '@/components/atoms/buttons';
import { ButtonProps } from '@/components/atoms/buttons/Button';
import DetailsForm from '@/components/organisms/detailsForm';
import { useModalTrigger } from '@/hooks/useModalTrigger';

interface EnquireNowModalButtonProps extends ButtonProps {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

const EnquireNowModalButton: React.FC<EnquireNowModalButtonProps> = ({
  variant,
  rightIcon,
  size,
  leftIcon,
  children,
  className,
}) => {
  const { trigger } = useModalTrigger({
    component: DetailsForm,
    size: 'auto',
    closeOnBackdrop: true,
    closeOnEscape: true,
    showCloseButton: true,
  });

  return (
    <Button
      variant={variant}
      size={size}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      onClick={trigger}
      className={className}
    >
      {children}
    </Button>
  );
};

export default EnquireNowModalButton;
