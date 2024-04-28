import { useCallback, useState, FormEvent, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../stores/tasksSlice";


export function TaskForm() {
    const [show, setShow] = useState<boolean>(false);
    const [validated, setValidated] = useState<boolean>(false);
    const handleShowModal = useCallback(() => setShow(!show), [show]);
    const form = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (show) return;
        form.current?.reset();
        setValidated(false);
    }, [show])

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        const isValid = !form.checkValidity();
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (isValid) return;
        const formData = new FormData(form);
        const description = formData.get('description')?.toString()!;
        dispatch(addTask(description));
        setShow(false);
    }, []);

    return (
        <>
            <Button onClick={handleShowModal}>
                Add a new Task
            </Button>
            <Modal show={show} centered>
                <Modal.Header onHide={handleShowModal} closeButton>
                    Task Form
                </Modal.Header>
                <Modal.Body>
                    <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Control
                                type="text"
                                placeholder="Write the new task"
                                name="description"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Ups! Try again :)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="mt-3 d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Save Task
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    )
}
