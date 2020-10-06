import React from 'react';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import { CharacterListComponent } from './components/character-list.component';
import { CharacterVm } from './character-collection.vm';

interface Props {
  characterCollection: CharacterVm[];
  handleOnSearch: (search: string) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  getCharacterCollection: () => Promise<void>;
  currentPageRef: React.MutableRefObject<number>;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const {
    characterCollection,
    handleOnSearch,
    setCurrentPage,
    currentPage,
    lastPage,
    getCharacterCollection,
    currentPageRef,
  } = props;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        setIsSearching={setIsSearching}
        placeholder="Search character name"
      />
      {!characterCollection.length && <NoResultsComponent />}
      {characterCollection.length > 0 && (
        <CharacterListComponent characterCollection={characterCollection} />
      )}
      {characterCollection.length > 0 && !isSearching && (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          getCollection={getCharacterCollection}
          currentPageRef={currentPageRef}
        />
      )}
    </>
  );
};
