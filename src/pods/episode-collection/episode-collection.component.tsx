import React from 'react';
import { EpisodeVm } from './episode-collection.vm';

interface Props {
  episodeCollection: EpisodeVm[];
}

export const EpisodeCollectionComponente: React.FC<Props> = (props) => {
  const { episodeCollection } = props;

  return (
    <>
      <ul>
        {episodeCollection.length > 0 &&
          episodeCollection.map((episode) => (
            <li key={episode.id}>
              <p>Name: {episode.name}</p>
              <p>Episode: {episode.episode}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
