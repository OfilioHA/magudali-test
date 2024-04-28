import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PageHome } from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Page - Home', () => {
    test('renders component', () => {
        render(<MemoryRouter><PageHome /></MemoryRouter>);
        const component = document.getElementById('page-home');
        expect(component).toBeInTheDocument();
    });

    test('renders "Task" button', () => {
        render(<MemoryRouter><PageHome /></MemoryRouter>);
        const taskText = screen.getByText('Tasks');
        expect(taskText).toBeInTheDocument();
    });

    test('renders "List" button', () => {
        render(<MemoryRouter><PageHome /></MemoryRouter>);
        const listText = screen.getByText('List');
        expect(listText).toBeInTheDocument();
    });
});