import { render, screen } from '@testing-library/react';
import Footer from '../views/Home/Footer';

describe('Footer tests', () => {
    test('Footer text is rendered', () => {
        render(
            <Footer />
        );

        const eventsButton = screen.getByText(/Celebrating 10 years of innovation/i);
        expect(eventsButton).toBeInTheDocument();
    });
});