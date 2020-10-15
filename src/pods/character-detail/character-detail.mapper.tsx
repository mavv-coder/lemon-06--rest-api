import { CharacterApi } from './api';
import { CharacterVm } from './character-detail.vm';

export const mapCharacterFromApiToVm = (
  character: CharacterApi
): CharacterVm => ({
  ...character,
  id: parseInt(character.id),
  lastLocation: character.location.name,
  origin: character.origin.name,
});
