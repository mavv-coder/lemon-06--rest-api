import { LocationApi } from 'common/models';
import { LocationVm } from './location-collection.vm';

const mapLocationFromApiToVm = (location: LocationApi): LocationVm => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: location.residents,
});

export const mapLocationCollectionFromApiToVm = (
  collection: LocationApi[]
): LocationVm[] => collection.map(mapLocationFromApiToVm);
