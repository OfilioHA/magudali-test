import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageTasks } from '../pages/Tasks';
import { MemoryRouter } from 'react-router-dom';

describe('Page - Contacts', () => {
    test('renders component', () => {
        render(<MemoryRouter><PageTasks /></MemoryRouter>);
        const component = document.getElementById('page-tasks');
        expect(component).toBeInTheDocument();
    });
});