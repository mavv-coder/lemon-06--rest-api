import React from 'react';
import Axios from 'axios';
import { EpisodeVm } from './episode-collection.vm';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponente } from './episode-collection.component';

export const EpisodeCollectionContainer: React.FC = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeVm[]>(
    []
  );

  const getEpisodeCollection = async (): Promise<void> => {
    const resolve = await Axios.get(process.env.API_EPISODES_URL);
    const newCollection = mapEpisodeCollectionFromApiToVm(resolve.data.results);
    setEpisodeCollection(newCollection);
  };

  React.useEffect(() => {
    getEpisodeCollection();
  }, []);

  return <EpisodeCollectionComponente episodeCollection={episodeCollection} />;
};
