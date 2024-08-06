"use client";

import { useState, useCallback } from "react";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para abrir el modal
  const openModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  // Función para cerrar el modal
  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Retorna el estado y las funciones para manejar el modal
  return {
    isVisible,
    openModal,
    closeModal,
  };
};

export default useModal;
