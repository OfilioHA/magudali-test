
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { useContacts } from "../../hooks/useContact";
import { Loader } from '../utils/Loader';
import { ContactItem } from './ContactItem';

export function ContactList() {
    const { contacts, loading } = useContacts();

    return (
        <ListGroup className='overflow-y-scroll shadow' style={{ height: '55vh' }}>
            {loading && (
                <div className='d-flex flex-column justify-content-center py-3 h-100 align-items-center'>
                    <h5 className='text-center text-muted mb-2'>Loading</h5>
                    <Loader />
                </div>
            )}
            {!loading && !contacts.length && (
                <ListGroupItem>
                    No se encontraron resultados
                </ListGroupItem>
            )}
            {!loading && (
                <>
                    {contacts.map((contact) => <ContactItem key={contact.id} {...contact} />)}
                </>
            )}
        </ListGroup>
    );


}