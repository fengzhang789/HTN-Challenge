import { render, screen, act } from '@testing-library/react';
import Navbar from '../views/Home/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar tests', () => {
    test('Home text is rendered', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            );
        })

        const eventsButton = screen.getByText('Events');
        expect(eventsButton).toBeInTheDocument();
    });

    test('Renders login button', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            );
        });

        const eventsButton = screen.getByText('Login');
        expect(eventsButton).toBeInTheDocument();
    });

    test('Clicking events button navigates to events page', () => {
        act(() => {
            render(
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            );
        });

        const eventsButton = screen.getByText('Events');
        eventsButton.click();

        expect(window.location.pathname).toBe('/events');
    });
});