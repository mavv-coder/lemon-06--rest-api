import React from 'react';
import { CharacterVm } from './character-collection.vm';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';
import { getCharacterCollection, filterCharacter } from './api';

export const CharacterCollectionContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);
  const currentPageRef = React.useRef<number>(currentPage);

  const onLoadCharacterCollection = async (): Promise<void> => {
    const { results, info } = await getCharacterCollection(
      currentPageRef.current
    );
    const newCollection = mapCharacterCollectionFromApiToVm(results);
    setLastPage(info.pages);
    setCharacterCollection(newCollection);
  };

  const filterDataCollection = async (search: string): Promise<void> => {
    try {
      const { results } = await filterCharacter(search);
      const newCollection = mapCharacterCollectionFromApiToVm(results);
      setCharacterCollection(newCollection);
    } catch {
      setCharacterCollection([]);
    }
  };

  React.useEffect(() => {
    onLoadCharacterCollection();
  }, []);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      handleOnSearch={filterDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getCharacterCollection={onLoadCharacterCollection}
      currentPageRef={currentPageRef}
    />
  );
};
