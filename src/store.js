import { createstore, combineReducers } from 'redux';

const reducers = combineReducers(reducers);

export const configureStore = () => createstore(rootReducer);

