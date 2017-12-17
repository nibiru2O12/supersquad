import {ADD_CHARCTER} from '../action';
import {createCharacter} from './helpers.js'

export function heroes(state=[],action){
  switch (action.type) {
  case ADD_CHARCTER:
    let heroes = [...state,createCharacter(action.id)]
    return heroes;
    break;
  default:
    return state;
  }
}
