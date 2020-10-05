import React from 'react';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { LocationVm } from './location-collection.vm';

interface Props {
  locationCollection: LocationVm[];
  handleOnSearch: (search: string) => Promise<void>;
}

export const LocationCollectionComponent: React.FC<Props> = (props) => {
  const { locationCollection, handleOnSearch } = props;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        placeholder="Search location name"
      />
      <ul>
        {!locationCollection.length && (
          <p>No results were found for your search</p>
        )}
        {locationCollection.length > 0 &&
          locationCollection.map((location) => (
            <li key={location.id}>
              <p>Name: {location.name}</p>
              <p>Dimension: {location.dimension}</p>
              <p>Type: {location.type}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
