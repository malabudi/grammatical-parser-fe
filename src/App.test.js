import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders how it works component in main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/How It Works/i);
  expect(linkElement).toBeInTheDocument();
});
