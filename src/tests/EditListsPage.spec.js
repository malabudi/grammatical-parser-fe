import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditListsPage from '../pages/EditListsPage';
import App from '../App';

test('renders save button', () => {
    render(
        <App>
            <EditListsPage />
        </App>
    );
    
    const linkElement = screen.getByText(/Save/i);
    expect(linkElement).toBeInTheDocument();
});