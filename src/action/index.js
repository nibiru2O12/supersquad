export const ADD_CHARCTER = "ADD_CHARACTER";
export const REMOVE_HERO ="REMOVE_HERO"
export const CLEAR_HERO ="CLEAR_HERO"

export function addCharacterById(id){
  const action = {
    type:ADD_CHARCTER,
    id
  };
  return action
}

export function removeHeroById(id){
  const action={
    type:REMOVE_HERO,
    id
  };
  return action;
}

export function clearHeroList(){
  const action={
    type:CLEAR_HERO
  }
  return action;
}
