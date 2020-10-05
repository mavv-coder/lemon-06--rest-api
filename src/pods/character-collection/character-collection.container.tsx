import React from 'react';
import Axios from 'axios';
import { CharacterVm } from './character-collection.vm';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(3);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);
  const currentPageRef = React.useRef(currentPage);

  const getCharacterCollection = async (): Promise<void> => {
    const resolve = await Axios.get(
      `${process.env.API_CHARACTERS_URL}?page=${currentPageRef.current}`
    );
    const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
      resolve.data.results
    );
    setLastPage(resolve.data.info.pages);
    setCharacterCollection(newCollection);
  };

  const handleOnSearch = async (search: string): Promise<void> => {
    try {
      const resolve = await Axios.get(
        `${process.env.API_CHARACTERS_URL}?name=${search}`
      );
      const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
        resolve.data.results
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
      handleOnSearch={handleOnSearch}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getCharacterCollection={getCharacterCollection}
      currentPageRef={currentPageRef}
    />
  );
};
