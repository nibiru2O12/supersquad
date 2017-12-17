import character_json from '../data/characters.json';
import {ADD_CHARCTER} from '../action';

export function characters(state = character_json,action){
  switch (action.type) {
    case ADD_CHARCTER:
      let characters= state.filter(item => item.id !== action.id );
      return characters;
    break;
  default:
    return state;
  }
}
