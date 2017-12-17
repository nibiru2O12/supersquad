import {combineReducers} from 'redux';
import {heroes} from './heroes_reducer';
import {characters} from './characters_reducer.js';

// listen for both characters and heroes reducer
const rootReducer=combineReducers({
  characters,heroes
});

export default rootReducer;
