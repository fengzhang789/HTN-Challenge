import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer tests', () => {
    test('Footer text is rendered', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const eventsButton = screen.getByText(/Celebrating 10 years of innovation/i);
        expect(eventsButton).toBeInTheDocument();
    });
});