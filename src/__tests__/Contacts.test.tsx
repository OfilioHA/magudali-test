import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageContacts } from '../pages/Contacts';
import { MemoryRouter } from 'react-router-dom';

describe('Page - Contacts', () => {
    test('renders component', () => {
        render(<MemoryRouter><PageContacts /></MemoryRouter>);
        const component = document.getElementById('page-contact');
        expect(component).toBeInTheDocument();
    });
});