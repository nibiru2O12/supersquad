import character_json from '../data/characters.json';

export function createCharacter(id){
  return character_json.find(item => item.id === id);
}
