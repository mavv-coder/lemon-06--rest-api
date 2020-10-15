import { CharacterApi } from './api';
import { CharacterVm } from './character-collection.vm';

const mapCharacterFromApiToVm = (character: CharacterApi): CharacterVm => ({
  ...character,
  id: parseInt(character.id),
});

export const mapCharacterCollectionFromApiToVm = (
  collection: CharacterApi[]
): CharacterVm[] => collection.map(mapCharacterFromApiToVm);
