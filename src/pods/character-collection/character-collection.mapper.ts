import { CharacterGql, CharacterVm } from './character-collection.models';

const mapCharacterFromApiToVm = (character: CharacterGql): CharacterVm => ({
  ...character,
  id: parseInt(character.id),
});

export const mapCharacterCollectionFromApiToVm = (
  collection: CharacterGql[]
): CharacterVm[] => collection.map(mapCharacterFromApiToVm);
