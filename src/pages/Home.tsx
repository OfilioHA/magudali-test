import { Container, Row, Col } from 'react-bootstrap';
import { HomeSection } from '../components/home/HomeSection';

export function PageHome() {
    return (
        <div id="page-home">
            <Container>
                <Row className='min-vh-100 align-items-center justify-content-center'>
                    <Col sm={10} md={4}>
                        <HomeSection />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}