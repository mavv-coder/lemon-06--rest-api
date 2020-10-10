import React from 'react';
import { EpisodeVm } from './episode-collection.vm';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { useDataCollection } from 'common/hooks';

export const EpisodeCollectionContainer: React.FC = () => {
  const {
    getDataCollection,
    filterDataCollection,
    currentPage,
    setCurrentPage,
    lastPage,
    dataCollection,
    currentPageRef,
  } = useDataCollection(
    mapEpisodeCollectionFromApiToVm,
    process.env.API_EPISODES_URL
  );

  React.useEffect(() => {
    getDataCollection();
  }, []);

  return (
    <EpisodeCollectionComponent
      episodeCollection={dataCollection as EpisodeVm[]}
      handleOnSearch={filterDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getEpisodeCollection={getDataCollection}
      currentPageRef={currentPageRef}
    />
  );
};
