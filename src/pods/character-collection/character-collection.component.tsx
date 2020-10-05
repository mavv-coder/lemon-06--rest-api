import React from 'react';
import { CharacterVm } from './character-collection.vm';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import { CharacterListComponent } from './components/character-list.component';

interface Props {
  characterCollection: CharacterVm[];
  handleOnSearch: (search: string) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  getCharacterCollection: () => Promise<void>;
  currentPageRef: React.MutableRefObject<number>;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const {
    characterCollection,
    handleOnSearch,
    setCurrentPage,
    currentPage,
    lastPage,
    getCharacterCollection,
    currentPageRef,
    isSearching,
    setIsSearching,
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
