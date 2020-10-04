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

  const handleOnSearch = async (search: string): Promise<void> => {
    try {
      const resolve = await Axios.get(
        `${process.env.API_LOCATIONS_URL}?name=${search}`
      );
      const newCollection: LocationVm[] = mapLocationCollectionFromApiToVm(
        resolve.data.results
      );
      setLocationCollection(newCollection);
    } catch {
      setLocationCollection([]);
    }
  };

  React.useEffect(() => {
    getLocationCollection();
  }, []);

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      handleOnSearch={handleOnSearch}
    />
  );
};
