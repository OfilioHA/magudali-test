import fetchMock from 'jest-fetch-mock'
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageContacts } from '../pages/Contacts';
import { IContact } from '../types/Contact';
import { ContactList } from '../components/contact/ContactList';

describe('Page - Contacts', () => {

    beforeAll(() => {
        fetchMock.resetMocks()
    })

    beforeEach(() => {
        const fakeContact: IContact[] = [{
            id: 1,
            createdAt: "2021-10-22T12:13:22.338Z",
            name: "Pauline Blanda",
            avatar: "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg",
        }]

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeContact),
            })
        );

    })

    test('renders component', async () => {
        await waitFor(async () => {
            render(<MemoryRouter><PageContacts /></MemoryRouter>);
        })

        const component = document.getElementById('page-contact');
        expect(component).toBeInTheDocument();
    });

    test('renders a person contact', async () => {
        await waitFor(async () => {
            render(<ContactList />);
        })
        const person = await screen.findByText(/Pauline Blanda/i);
        expect(person).toBeInTheDocument();
    })
});