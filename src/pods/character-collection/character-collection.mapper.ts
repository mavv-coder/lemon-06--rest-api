import { CharacterApi } from './api';
import { CharacterVm } from './character-collection.vm';

const mapCharacterFromApiToVm = (character: CharacterApi): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
});

export const mapCharacterCollectionFromApiToVm = (
  collection: CharacterApi[]
): CharacterVm[] => collection.map(mapCharacterFromApiToVm);
