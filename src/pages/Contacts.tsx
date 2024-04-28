import { Container, Row, Col } from 'react-bootstrap';
import { ContactList } from '../components/contact/ContactList';
import { GoBack } from '../components/utils/GoBack';

export function PageContacts() {
    return (
        <div id="page-contact">
            <Container>
                <Row className='min-vh-100 align-items-center justify-content-center'>
                    <Col sm={10} md={4}>
                        <h1>Contact Page</h1>
                        <hr />
                        <GoBack />
                        <div className='mb-3'></div>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
