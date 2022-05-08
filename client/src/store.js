import { configureStore, applyMiddleware, compose, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './_reducers/rootReducer';
import { taskServices } from './_services/taskServices';

const middlewares = [thunk, taskServices.middleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composeEnhancer = compose(middlewareEnhancer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskServices.middleware)
})

export default store;
