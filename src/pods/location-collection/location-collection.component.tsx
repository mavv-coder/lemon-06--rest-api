import React from 'react';
import { LocationVm } from './location-collection.vm';

interface Props {
  locationCollection: LocationVm[];
}

export const LocationCollectionComponent: React.FC<Props> = (props) => {
  const { locationCollection } = props;

  return (
    <>
      <ul>
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
