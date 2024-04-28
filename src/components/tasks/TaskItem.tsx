import { ListGroupItem, Button } from "react-bootstrap";
import { ITask } from "../../types/Task";
import { MouseEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../stores/tasksSlice";

type propTypes = Readonly<ITask>

export function TaskItem(props: propTypes) {

    const dispatch = useDispatch();

    const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        const { value: uuid } = event.currentTarget;
        dispatch(removeTask(uuid));
    }, [])

    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center">
            {props.description}
            <Button variant="danger" value={props.uuid} onClick={handleClick}>
                <i className="fa-solid fa-trash"></i>
            </Button>
        </ListGroupItem>
    )
}