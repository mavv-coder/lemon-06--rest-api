import { CharacterApi } from 'common/models';
import { CharacterVm } from './character-detail.vm';

export const mapCharacterFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
  origin: character.origin.name,
});
