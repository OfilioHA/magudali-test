import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export function HomeSection() {
    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title className='text-center'>Inicio</Card.Title>
                <hr />
                <div className="d-grid gap-4 py-2">
                    <Link to={'/tasks'}>
                        <Button variant="primary" size="lg" className='w-100'>
                            Tasks
                        </Button>
                    </Link>
                    <Link to={'/contacts'}>
                        <Button variant="success" size="lg" className='w-100'>
                            List
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )

}