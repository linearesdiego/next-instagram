import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';

describe('Modal Component', () => {
    test('deberia no renderizarse cuando isOpen es false', () => {
        render(<Modal isOpen={false} title="Test Modal" onClose={jest.fn()}>Contenido de prueba</Modal>);

        // Verificar que el modal no esta en el documento
        expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    });

    test('deberia renderizarse correctamente cuando isOpen es true', () => {
        render(<Modal isOpen={true} title="Test Modal" onClose={jest.fn()}>Contenido de prueba</Modal>);

        // Verificar que el modal esta en el documento
        expect(screen.getByText("Test Modal")).toBeInTheDocument();
        expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
    });

    test('deberia llamar a onClose cuando se hace clic en el botón de cerrar', () => {
        const onCloseMock = jest.fn();
        render(<Modal isOpen={true} title="Test Modal" onClose={onCloseMock}>Contenido de prueba</Modal>);


        fireEvent.click(screen.getByText("×"));


        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
