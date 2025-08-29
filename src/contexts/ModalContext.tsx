'use client';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ModalConfig, ModalContextType } from '../interfaces/modal';
import { useScrollLock } from '../hooks/useScrollLock';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalConfig | null>(null);
  // Scroll lock is handled automatically by the hook
  useScrollLock(!!activeModal);

  const openModal = useCallback((config: Omit<ModalConfig, 'id'>): string => {
    const id = `modal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const modalConfig: ModalConfig = {
      id,
      size: 'md',
      closeOnBackdrop: true,
      closeOnEscape: true,
      showCloseButton: true,
      preventBodyScroll: true,
      ...config,
    };

    setActiveModal(modalConfig);
    return id;
  }, []);

  const closeModal = useCallback(
    (id: string) => {
      if (activeModal?.id === id) {
        setActiveModal(null);
      }
    },
    [activeModal],
  );

  const closeAllModals = useCallback(() => {
    setActiveModal(null);
  }, []);

  const value: ModalContextType = {
    openModal,
    closeModal,
    closeAllModals,
    activeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
