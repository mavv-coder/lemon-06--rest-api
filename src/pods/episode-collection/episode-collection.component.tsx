import React from 'react';
import List from '@material-ui/core/List';
import { LoaderComponent } from 'common/components/loader/loader.component';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import { ListItemComponent } from '../../common/components/list-item/list-item.component';
import { EpisodeVm } from './episode-collection.vm';
import * as classes from './episode-collection.styles';

interface Props {
  episodeCollection: EpisodeVm[];
  handleOnSearch: (search: string) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  getEpisodeCollection: () => Promise<void>;
  currentPageRef: React.MutableRefObject<number>;
}

export const EpisodeCollectionComponent: React.FC<Props> = (props) => {
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const {
    episodeCollection,
    handleOnSearch,
    setCurrentPage,
    currentPage,
    lastPage,
    getEpisodeCollection,
    currentPageRef,
  } = props;
  const { episodeList } = classes;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        setIsSearching={setIsSearching}
        placeholder="Search episode name"
      />
      {!episodeCollection.length && !isSearching && <LoaderComponent />}
      {!episodeCollection.length && isSearching && <NoResultsComponent />}
      {episodeCollection.length > 0 && (
        <List className={episodeList}>
          {episodeCollection.length > 0 &&
            episodeCollection.map((episode) => (
              <ListItemComponent
                key={episode.id}
                id={episode.id}
                primaryText={episode.name}
                secondaryText={episode.episode}
                innerListData={episode.characters}
                listTitle="Cast list"
              />
            ))}
        </List>
      )}
      {episodeCollection.length > 0 && !isSearching && (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          getCollection={getEpisodeCollection}
          currentPageRef={currentPageRef}
        />
      )}
    </>
  );
};
