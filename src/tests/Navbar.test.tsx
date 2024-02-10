import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar tests', () => {
    test('Renders events button', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const eventsButton = screen.getByText('Events');
        expect(eventsButton).toBeInTheDocument();
    });

    test('Renders login button', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const eventsButton = screen.getByText('Login');
        expect(eventsButton).toBeInTheDocument();
    });

    test('Clicking events button navigates to events page', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const eventsButton = screen.getByText('Events');
        eventsButton.click();

        expect(window.location.pathname).toBe('/events');
    });
});