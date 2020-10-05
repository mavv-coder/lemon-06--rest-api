import React from 'react';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { EpisodeVm } from './episode-collection.vm';

interface Props {
  episodeCollection: EpisodeVm[];
  handleOnSearch: (search: string) => Promise<void>;
}

export const EpisodeCollectionComponente: React.FC<Props> = (props) => {
  const { episodeCollection, handleOnSearch } = props;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        placeholder="Search episode name"
      />
      <ul>
        {!episodeCollection.length && (
          <p>No results were found for your search</p>
        )}
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
