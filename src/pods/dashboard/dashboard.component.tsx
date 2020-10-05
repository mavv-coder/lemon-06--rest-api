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
  const { flexContainer, btnContainer, collectionContainer } = classes;

  return (
    <div className={flexContainer}>
      <div className={btnContainer}>
        <DisplayCollectionComponent
          displayCollection={displayCharacters}
          setDisplayCollection={setdisplayCharacters}
          nameCollection="Characters"
        />
        {displayCharacters && (
          <div className={collectionContainer}>
            <CharacterCollectionContainer />
          </div>
        )}
      </div>
      <div className={btnContainer}>
        <DisplayCollectionComponent
          displayCollection={displayLocations}
          setDisplayCollection={setdisplayLocations}
          nameCollection="Locations"
        />
        {displayLocations && (
          <div className={collectionContainer}>
            <LocationCollectionContainer />
          </div>
        )}
      </div>
      <div className={btnContainer}>
        <DisplayCollectionComponent
          displayCollection={displayEpisodes}
          setDisplayCollection={setdisplayEpisodes}
          nameCollection="Episodes"
        />
        {displayEpisodes && (
          <div className={collectionContainer}>
            <EpisodeCollectionContainer />
          </div>
        )}
      </div>
    </div>
  );
};
