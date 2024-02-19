import { render, screen } from '@testing-library/react';
import Home from '../views/Home';

describe('Navbar tests', () => {
    test('Home text is rendered', () => {
        render(
            <Home />
        );

        const eventsButton = screen.getByText(/Hack the North 2024/i);
        expect(eventsButton).toBeInTheDocument();
    });
});