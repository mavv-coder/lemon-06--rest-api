import React from 'react';
import { graphQLClient } from 'core/api/graphql.client';
import {
  EpisodeVm,
  GetEpisodeCollectionResponse,
  FilterEpisodeCollectionResponse,
} from './episode-collection.models';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';
import { EpisodeCollectionComponent } from './episode-collection.component';
import {
  episodeCollectionQuery,
  filterEpisodeQuery,
} from './episode-collection.schema';

export const EpisodeCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeVm[]>(
    []
  );
  const currentPageRef = React.useRef(currentPage);

  const getEpisodeCollection = async (): Promise<void> => {
    const { episodes } = await graphQLClient.request<
      GetEpisodeCollectionResponse
    >(episodeCollectionQuery(currentPageRef.current));
    const newCollection = mapEpisodeCollectionFromApiToVm(episodes.results);
    setLastPage(episodes.info.pages);
    setEpisodeCollection(newCollection);
  };

  const searchEpisodeCollection = async (search: string): Promise<void> => {
    try {
      const { episodes } = await graphQLClient.request<
        FilterEpisodeCollectionResponse
      >(filterEpisodeQuery(search));
      const newCollection = mapEpisodeCollectionFromApiToVm(episodes.results);
      setEpisodeCollection(newCollection);
    } catch {
      setEpisodeCollection([]);
    }
  };

  React.useEffect(() => {
    getEpisodeCollection();
  }, []);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      handleOnSearch={searchEpisodeCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getEpisodeCollection={getEpisodeCollection}
      currentPageRef={currentPageRef}
    />
  );
};
