import React from 'react';
import { graphQLClient } from 'core/api/graphql.client';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';
import {
  CharacterVm,
  GetCharacterCollectionResponse,
  FilterCharacterCollection,
} from './character-collection.models';
import {
  characterCollectionQuery,
  filterCharacterQuery,
} from './character-collection.schema';

export const CharacterCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);
  const currentPageRef = React.useRef(currentPage);

  const getCharacterCollection = async (): Promise<void> => {
    const { characters } = await graphQLClient.request<
      GetCharacterCollectionResponse
    >(characterCollectionQuery(currentPageRef.current));
    const newCollection = mapCharacterCollectionFromApiToVm(characters.results);
    setLastPage(characters.info.pages);
    setCharacterCollection(newCollection);
  };

  const searchCharacterCollection = async (search: string): Promise<void> => {
    try {
      const { characters } = await graphQLClient.request<
        FilterCharacterCollection
      >(filterCharacterQuery(search));
      const newCollection = mapCharacterCollectionFromApiToVm(
        characters.results
      );
      setCharacterCollection(newCollection);
    } catch {
      setCharacterCollection([]);
    }
  };

  React.useEffect(() => {
    getCharacterCollection();
  }, []);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      handleOnSearch={searchCharacterCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getCharacterCollection={getCharacterCollection}
      currentPageRef={currentPageRef}
    />
  );
};
