import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import submitActions from './contactForm-actions';

const name = createReducer('', {
  [submitActions.changeInputName]: (_, action) => action.payload,
});

const number = createReducer('', {
  [submitActions.changeInputNumber]: (_, action) => action.payload,
});

export default combineReducers({
  name,
  number,
});
