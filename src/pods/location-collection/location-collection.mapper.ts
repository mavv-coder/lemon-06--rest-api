import { LocationGql, LocationVm } from './location-collection.models';

const mapCharacterName = (list: { name: string }[]): string[] =>
  list.map((el) => el.name);

const mapLocationFromApiToVm = (location: LocationGql): LocationVm => ({
  ...location,
  id: parseInt(location.id),
  residents: mapCharacterName(location.residents),
});

export const mapLocationCollectionFromApiToVm = (
  collection: LocationGql[]
): LocationVm[] => collection.map(mapLocationFromApiToVm);
