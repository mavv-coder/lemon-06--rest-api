import React from 'react';
import { DisplayCollectionComponent } from './components/display-collection.component';
import { CharacterCollectionContainer } from '../character-collection';
import { LocationCollectionContainer } from '../location-collection';
import { EpisodeCollectionContainer } from '../episode-collection';
import * as classes from './dashboard.styles';

export const DashboardComponent: React.FC = () => {
  const [displayCharacters, setdisplayCharacters] = React.useState<boolean>(
    false
  );
  const [displayLocations, setdisplayLocations] = React.useState<boolean>(
    false
  );
  const [displayEpisodes, setdisplayEpisodes] = React.useState<boolean>(false);
  const { flexContainer, collectionContainer } = classes;

  return (
    <div className={flexContainer}>
      <div className={collectionContainer}>
        <DisplayCollectionComponent
          displayCollection={displayCharacters}
          setDisplayCollection={setdisplayCharacters}
          nameCollection="Characters"
        />
        {displayCharacters && <CharacterCollectionContainer />}
      </div>
      <div className={collectionContainer}>
        <DisplayCollectionComponent
          displayCollection={displayLocations}
          setDisplayCollection={setdisplayLocations}
          nameCollection="Locations"
        />
        {displayLocations && <LocationCollectionContainer />}
      </div>
      <div className={collectionContainer}>
        <DisplayCollectionComponent
          displayCollection={displayEpisodes}
          setDisplayCollection={setdisplayEpisodes}
          nameCollection="Episodes"
        />
        {displayEpisodes && <EpisodeCollectionContainer />}
      </div>
    </div>
  );
};
