import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserStoryInput from '../components/UserStoryInput';

test('renders all text fields', () => {
  render(<UserStoryInput />);
  const linkElement = screen.getAllByText(/User Story/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('renders user story title field field', () => {
    render(<UserStoryInput />);
    const linkElement = screen.getByText(/User Story Title/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders user story title description field', () => {
    render(<UserStoryInput />);
    const linkElement = screen.getByText(/User Story Description/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders user story subject field', () => {
    render(<UserStoryInput />);
    const linkElement = screen.getByText(/Story Subject/i);
    expect(linkElement).toBeInTheDocument();
});