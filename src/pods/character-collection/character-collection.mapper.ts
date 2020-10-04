import { CharacterApi } from 'common/models';
import { CharacterVm } from './character-collection.vm';

const mapCharacterFromApiToVm = (character: CharacterApi): CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  species: character.species,
  origin: character.origin.name,
});

export const mapCharacterCollectionFromApiToVm = (
  collection: CharacterApi[]
): CharacterVm[] => collection.map(mapCharacterFromApiToVm);
