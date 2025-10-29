// hooks/useOrderModal.ts
import { useState } from 'react';

export default function useOrderModal() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return {
    isOrderModalOpen,
    openOrderModal,
    closeOrderModal
  };
}