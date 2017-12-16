import character_json from '../data/characters.json';
import {ADD_CHARCTER} from '../action';

function character(state = character_json,action){
  switch (action.type) {
    case ADD_CHARCTER:
      return state.filter(item => item.id !== action.id );
    break;
  default:
    return state;
  }
}

export default character;
