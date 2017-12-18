import character_json from '../data/characters.json';
import {addCharacter} from './helpers';
import {ADD_CHARCTER,REMOVE_HERO,CLEAR_HERO} from '../action';

export function characters(state = character_json,action){
  switch (action.type) {
    case ADD_CHARCTER:
      return  state.filter(item => item.id !== action.id );;
      break;
    case REMOVE_HERO:
      return [...state,addCharacter(action.id)];
      break;
    case CLEAR_HERO:
      return [...character_json];
  default:
    return state;
  }
}
