import {ADD_CHARCTER,REMOVE_HERO,CLEAR_HERO} from '../action';
import {createCharacter} from './helpers.js'

export function heroes(state=[],action){
  switch (action.type) {
  case ADD_CHARCTER:
    return  [...state,createCharacter(action.id)];
    break;
  case REMOVE_HERO:
    return  state.filter(item => item.id !== action.id );
    break
  case CLEAR_HERO:
    return [];
  default:
    return state;
  }
}
