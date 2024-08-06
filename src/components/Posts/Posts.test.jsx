import React from 'react';
import { render, screen, act } from '@testing-library/react';
import usePosts from '../../store/usePosts';
import { Posts } from '..';


jest.mock('../../store/usePosts', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('Posts Component', () => {
    beforeEach(() => {
        usePosts.mockReturnValue({
            posts: [],
            fetchPosts: jest.fn(),
        });
    });

    test('debería mostrar el mensaje "No hay publicaciones" si no hay publicaciones', async () => {
        await act(async () => {
            render(<Posts />);
        });

        expect(screen.getByText('No hay publicaciones')).toBeInTheDocument();
    });
});