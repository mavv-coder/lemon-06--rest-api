import React from 'react';
import { LocationVm } from './location-collection.vm';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';
import { useDataCollection } from 'common/hooks';

export const LocationCollectionContainer: React.FC = () => {
  const {
    getDataCollection,
    searchDataCollection,
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
    setTimeout(() => {
      getDataCollection();
    }, 1000);
  }, []);

  return (
    <LocationCollectionComponent
      locationCollection={dataCollection as LocationVm[]}
      handleOnSearch={searchDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getLocationCollection={getDataCollection}
      currentPageRef={currentPageRef}
    />
  );
};
