import { Container, Row, Col } from 'react-bootstrap';
import { TaskForm } from '../components/tasks/TaskForm';
import { GoBack } from '../components/utils/GoBack';
import { TaskList } from '../components/tasks/TaskList';

export function PageTasks() {
    return (
        <div id="page-tasks">
            <Container>
                <Row className='min-vh-100 align-items-center justify-content-center'>
                    <Col sm={10} md={4}>
                        <h2>Task Page</h2>
                        <hr />
                        <div className="d-flex gap-2 mb-3">
                            <GoBack />
                            <TaskForm />
                        </div>
                        <TaskList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}