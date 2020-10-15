import React from 'react';
import { EpisodeVm } from './episode-collection.vm';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { getEpisodeCollection, filterEpisode } from './api';

export const EpisodeCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeVm[]>(
    []
  );
  const currentPageRef = React.useRef(currentPage);

  const onLoadEpisodeCollection = async (): Promise<void> => {
    const { results, info } = await getEpisodeCollection(
      currentPageRef.current
    );
    const newCollection = mapEpisodeCollectionFromApiToVm(results);
    setLastPage(info.pages);
    setEpisodeCollection(newCollection);
  };

  const filterEpisodeCollection = async (search: string): Promise<void> => {
    try {
      const { results } = await filterEpisode(search);
      const newCollection = mapEpisodeCollectionFromApiToVm(results);
      setEpisodeCollection(newCollection);
    } catch {
      setEpisodeCollection([]);
    }
  };

  React.useEffect(() => {
    onLoadEpisodeCollection();
  }, []);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      handleOnSearch={filterEpisodeCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getEpisodeCollection={onLoadEpisodeCollection}
      currentPageRef={currentPageRef}
    />
  );
};
