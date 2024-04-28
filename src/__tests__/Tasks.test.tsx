import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageTasks } from '../pages/Tasks';
import { MemoryRouter } from 'react-router-dom';
import { configureStore, Store } from '@reduxjs/toolkit';
import tasksReducer, { addTask, removeTask } from '../stores/tasksSlice';
import { ITask } from '../types/Task';
import { Provider } from 'react-redux';

describe('Page - Contacts', () => {

    let store: Store<{ tasks: { tasks: ITask[] } }>;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                tasks: tasksReducer,
            },
        });
    });

    test('renders component', () => {
        render(<Provider store={store}>
            <MemoryRouter><PageTasks /></MemoryRouter>
        </Provider>);
        const component = document.getElementById('page-tasks');
        expect(component).toBeInTheDocument();
    });
});

describe('tasks reducer', () => {

    let store: Store<{ tasks: { tasks: ITask[] } }>;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                tasks: tasksReducer,
            },
        });
    });

    test('should add a task', () => {
        store.dispatch(addTask('Task 1'));
        const tasks = store.getState().tasks.tasks;
        expect(tasks).toHaveLength(1);
        expect(tasks[0].description).toBe('Task 1');
    });

    test('should remove a task', () => {
        store.dispatch(addTask('Task 1'));
        store.dispatch(addTask('Task 2'));
        store.dispatch(removeTask(store.getState().tasks.tasks[0].uuid));
        const tasks = store.getState().tasks.tasks;
        expect(tasks).toHaveLength(1);
        expect(tasks[0].description).toBe('Task 2');
    });
});