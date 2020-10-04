import React from 'react';
import Axios from 'axios';
import { LocationVm } from './location-collection.vm';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';

export const LocationCollectionContainer: React.FC = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationVm[]
  >([]);

  const getLocationCollection = async (): Promise<void> => {
    const resolve = await Axios.get(process.env.API_LOCATIONS_URL);
    const newCollection: LocationVm[] = mapLocationCollectionFromApiToVm(
      resolve.data.results
    );
    setLocationCollection(newCollection);
  };

  React.useEffect(() => {
    getLocationCollection();
  }, []);

  return (
    <LocationCollectionComponent locationCollection={locationCollection} />
  );
};
