import { CharacterApi } from './api';
import { CharacterVm } from './character-detail.vm';

export const mapCharacterFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
  origin: character.origin.name,
  lastLocation: character.location.name,
  gender: character.gender,
  status: character.status,
});
