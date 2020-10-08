import React from 'react';
import { EpisodeVm } from './episode-collection.vm';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { useDataCollection } from 'common/hooks';

export const EpisodeCollectionContainer: React.FC = () => {
  const {
    getDataCollection,
    searchDataCollection,
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
    setTimeout(() => {
      getDataCollection();
    }, 1000);
  }, []);

  return (
    <EpisodeCollectionComponent
      episodeCollection={dataCollection as EpisodeVm[]}
      handleOnSearch={searchDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getEpisodeCollection={getDataCollection}
      currentPageRef={currentPageRef}
    />
  );
};
