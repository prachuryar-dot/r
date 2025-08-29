export interface ModalConfig {
  id: string;
  //eslint-disable-next-line
  component: React.ComponentType<any>;
  //eslint-disable-next-line
  props?: Record<string, any>;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto' | undefined;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventBodyScroll?: boolean;
}

export interface ModalContextType {
  openModal: (config: Omit<ModalConfig, 'id'>) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  activeModal: ModalConfig | null;
}
