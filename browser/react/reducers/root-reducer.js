// Required libraries
import { combineReducers } from 'redux';

// Required files
import otterReducer from './otters';

export default combineReducers({
  otters: otterReducer
});

