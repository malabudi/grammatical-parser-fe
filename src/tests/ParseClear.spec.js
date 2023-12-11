import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ParseClear from '../components/ParseClear';


test('renders parse button', () => {
    render(<ParseClear />);
    const linkElement = screen.getByText(/Parse/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders clear button', () => {
    render(<ParseClear />);
    const linkElement = screen.getByText(/Clear/i);
    expect(linkElement).toBeInTheDocument();
});