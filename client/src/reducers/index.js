import { combineReducers } from 'redux';
import registrationReducer from './register';

export default combineReducers({
  registration: registrationReducer
});
