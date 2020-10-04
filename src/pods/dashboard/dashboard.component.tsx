import React from 'react';
import { CharacterCollectionContainer } from '../character-collection';
import { LocationCollectionContainer } from '../location-collection';

export const DashboardComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CharacterCollectionContainer />
      <LocationCollectionContainer />
    </div>
  );
};
