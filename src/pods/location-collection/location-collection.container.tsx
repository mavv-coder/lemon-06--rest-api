import React from 'react';
import { LocationVm } from './location-collection.vm';
import { mapLocationCollectionFromApiToVm } from './location-collection.mapper';
import { LocationCollectionComponent } from './location-collection.component';
import { getLocationCollection, filterLocation } from './api';

export const LocationCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [locationCollection, setLocationCollection] = React.useState<
    LocationVm[]
  >([]);
  const currentPageRef = React.useRef(currentPage);

  const onLoadLocationCollection = async (): Promise<void> => {
    const { results, info } = await getLocationCollection(
      currentPageRef.current
    );
    const newCollection = mapLocationCollectionFromApiToVm(results);
    setLastPage(info.pages);
    setLocationCollection(newCollection);
  };

  const filterLocationCollection = async (search: string): Promise<void> => {
    try {
      const { results } = await filterLocation(search);
      const newCollection = mapLocationCollectionFromApiToVm(results);
      setLocationCollection(newCollection);
    } catch {
      setLocationCollection([]);
    }
  };

  React.useEffect(() => {
    onLoadLocationCollection();
  }, []);

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      handleOnSearch={filterLocationCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getLocationCollection={onLoadLocationCollection}
      currentPageRef={currentPageRef}
    />
  );
};
