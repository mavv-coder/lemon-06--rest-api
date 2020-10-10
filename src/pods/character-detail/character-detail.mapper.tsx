import { CharacterGql, CharacterVm } from './character-detail.models';

export const mapCharacterFromApiToVm = (
  character: CharacterGql
): CharacterVm => ({
  ...character,
  id: parseInt(character.id),
  lastLocation: character.location.name,
  origin: character.origin.name,
});
