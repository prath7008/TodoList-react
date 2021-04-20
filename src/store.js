import { createstore, combineReducers } from 'redux';
import { todos } from './todos/reducer';

const reducers = {
    todos,
};
const reducers = combineReducers(reducers);

export const configureStore = () => createstore(rootReducer);

