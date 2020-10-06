import React from 'react';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import { LocationListComponent } from './components/location-list.component';
import { LocationVm } from './location-collection.vm';

interface Props {
  locationCollection: LocationVm[];
  handleOnSearch: (search: string) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  getLocationCollection: () => Promise<void>;
  currentPageRef: React.MutableRefObject<number>;
}

export const LocationCollectionComponent: React.FC<Props> = (props) => {
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const {
    locationCollection,
    handleOnSearch,
    setCurrentPage,
    currentPage,
    lastPage,
    getLocationCollection,
    currentPageRef,
  } = props;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        setIsSearching={setIsSearching}
        placeholder="Search location name"
      />
      {!locationCollection.length && <NoResultsComponent />}
      {locationCollection.length > 0 && (
        <LocationListComponent locationCollection={locationCollection} />
      )}
      {locationCollection.length > 0 && !isSearching && (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          getCollection={getLocationCollection}
          currentPageRef={currentPageRef}
        />
      )}
    </>
  );
};
