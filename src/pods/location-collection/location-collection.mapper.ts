import { LocationApi } from './api';
import { LocationVm } from './location-collection.vm';

const mapCharacterName = (list: { name: string }[]): string[] =>
  list.map((el) => el.name);

const mapLocationFromApiToVm = (location: LocationApi): LocationVm => ({
  ...location,
  id: parseInt(location.id),
  residents: mapCharacterName(location.residents),
});

export const mapLocationCollectionFromApiToVm = (
  collection: LocationApi[]
): LocationVm[] => collection.map(mapLocationFromApiToVm);
