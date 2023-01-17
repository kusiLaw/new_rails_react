import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingsReduce from './greeting';

const rootReducer = combineReducers({
  greetings: greetingsReduce,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;