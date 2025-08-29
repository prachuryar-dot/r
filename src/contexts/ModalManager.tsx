'use client';
import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './ModalContext';
import { ModalOverlay } from '../components/molecules/modal/ModalOverlay';
import { ModalContainer } from '../components/molecules/modal/ModalContainer';

export const ModalManager: React.FC = () => {
  const { activeModal, closeModal } = useModal();

  // Handle ESC key press
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeModal?.closeOnEscape) {
        closeModal(activeModal.id);
      }
    },
    [activeModal, closeModal],
  );

  useEffect(() => {
    if (activeModal) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [activeModal, handleEscapeKey]);

  if (!activeModal) return null;

  const modalContent = (
    <ModalOverlay
      onBackdropClick={activeModal.closeOnBackdrop ? () => closeModal(activeModal.id) : undefined}
    >
      <ModalContainer
        size={activeModal.size}
        showCloseButton={activeModal.showCloseButton}
        onClose={() => closeModal(activeModal.id)}
      >
        <activeModal.component {...activeModal.props} onClose={() => closeModal(activeModal.id)} />
      </ModalContainer>
    </ModalOverlay>
  );

  // Render in portal if document is available
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
