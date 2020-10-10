import React from 'react';
import List from '@material-ui/core/List';
import { LoaderComponent } from 'common/components/loader/loader.component';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import { ListItemComponent } from '../../common/components/list-item/list-item.component';
import { LocationVm } from './location-collection.models';
import * as classes from './location-collection.styles';

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
  const { locationList } = classes;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        setIsSearching={setIsSearching}
        placeholder="Search location name"
      />
      {!locationCollection.length && !isSearching && <LoaderComponent />}
      {!locationCollection.length && isSearching && <NoResultsComponent />}
      {locationCollection.length > 0 && (
        <List className={locationList}>
          {locationCollection.length > 0 &&
            locationCollection.map((location) => (
              <ListItemComponent
                key={location.id}
                id={location.id}
                primaryText={location.name}
                secondaryText={location.type}
                innerListData={location.residents}
                listTitle="Resident list"
              />
            ))}
        </List>
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
