import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import GrammarList from '../components/GrammarList';


test('renders verb list', () => {
    render(<GrammarList />);
    const linkElement = screen.getByText(/verb/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders noun list', () => {
    render(<GrammarList />);
    const linkElement = screen.getByText(/noun/i);
    expect(linkElement).toBeInTheDocument();
});