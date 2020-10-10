import React from 'react';
import { LocationVm } from './location-collection.vm';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';
import { useDataCollection } from 'common/hooks';

export const LocationCollectionContainer: React.FC = () => {
  const {
    getDataCollection,
    filterDataCollection,
    currentPage,
    setCurrentPage,
    lastPage,
    dataCollection,
    currentPageRef,
  } = useDataCollection(
    mapLocationCollectionFromApiToVm,
    process.env.API_LOCATIONS_URL
  );

  React.useEffect(() => {
    getDataCollection();
  }, []);

  return (
    <LocationCollectionComponent
      locationCollection={dataCollection as LocationVm[]}
      handleOnSearch={filterDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getLocationCollection={getDataCollection}
      currentPageRef={currentPageRef}
    />
  );
};
