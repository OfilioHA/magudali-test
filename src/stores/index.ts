import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';


const rootReducer = combineReducers({
  tasks: tasksReducer,
})

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default store;
