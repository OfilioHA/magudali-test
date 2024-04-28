import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { ITask, ITaskState } from "../../types/Task";
import { TaskItem } from "./TaskItem";

export function TaskList() {
    const taskState: ITaskState = useSelector((state: RootState) => state.tasks);

    return (
        <ListGroup className='overflow-y-scroll shadow' style={{ height: '55vh' }}>
            {!taskState.tasks.length && (
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <i className="fa-solid fa-xl fa-circle-exclamation" style={{ fontSize: '2.5rem' }}></i>
                    <h5 className="text-center mt-4">
                        Please enter a new Task
                    </h5>
                </div>
            )}
            {taskState.tasks.map((task: ITask) => (
                <TaskItem key={task.uuid} {...task} />
            ))}
        </ListGroup>
    )

}