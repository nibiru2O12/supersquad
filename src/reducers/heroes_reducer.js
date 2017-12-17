import {ADD_CHARCTER} from '../action';
import {createCharacter} from './helpers.js'

export function heroes(state=[],action){
  switch (action.type) {
  case ADD_CHARCTER:
    return  [...state,createCharacter(action.id)];
    break;
  default:
    return state;
  }
}
