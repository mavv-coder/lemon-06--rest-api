import { CharacterGql, CharacterVm } from './character-detail.models';

export const mapCharacterFromApiToVm = (
  character: CharacterGql
): CharacterVm => ({
  id: parseInt(character.id),
  name: character.name,
  image: character.image,
  species: character.species,
  origin: character.origin.name,
  lastLocation: character.location.name,
  gender: character.gender,
  status: character.status,
});
