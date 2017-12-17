import character_json from '../data/characters.json';
import {ADD_CHARCTER,REMOVE_HERO} from '../action';

export function characters(state = character_json,action){
  switch (action.type) {
    case ADD_CHARCTER:
      return  state.filter(item => item.id !== action.id );;
      break;
    case REMOVE_HERO:
      return [...state,addCharacter(action.id)];
      break;
  default:
    return state;
  }
}

export function addCharacter(id){
  return character_json.find(i=>i.id===id);
}
