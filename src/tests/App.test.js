import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/grammatical parser/i);
  expect(linkElement).toBeInTheDocument();
});
