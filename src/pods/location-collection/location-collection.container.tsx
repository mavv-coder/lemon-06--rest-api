import React from 'react';
import { graphQLClient } from 'core/api/graphql.client';
import {
  LocationVm,
  GetLocationCollectionResponse,
  FilterLocationCollectionResponse,
} from './location-collection.models';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';
import {
  locationCollectionQuery,
  filterLocationQuery,
} from './location-collection.schema';

export const LocationCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [locationCollection, setLocationCollection] = React.useState<
    LocationVm[]
  >([]);
  const currentPageRef = React.useRef(currentPage);

  const getLocationCollection = async (): Promise<void> => {
    const { locations } = await graphQLClient.request<
      GetLocationCollectionResponse
    >(locationCollectionQuery(currentPageRef.current));
    const newCollection = mapLocationCollectionFromApiToVm(locations.results);
    setLastPage(locations.info.pages);
    setLocationCollection(newCollection);
  };

  const filterLocationCollection = async (search: string): Promise<void> => {
    try {
      const { locations } = await graphQLClient.request<
        FilterLocationCollectionResponse
      >(filterLocationQuery(search));
      const newCollection = mapLocationCollectionFromApiToVm(locations.results);
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
      handleOnSearch={filterLocationCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getLocationCollection={getLocationCollection}
      currentPageRef={currentPageRef}
    />
  );
};
