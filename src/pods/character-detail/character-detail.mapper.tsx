import { CharacterApi, CharacterVm } from './character-detail.models';

export const mapCharacterFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
  origin: character.origin.name,
});
