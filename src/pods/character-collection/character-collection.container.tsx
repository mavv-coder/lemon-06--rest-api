import React from 'react';
import { CharacterVm } from './character-collection.vm';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';
import { useDataCollection } from 'common/hooks';

export const CharacterCollectionContainer: React.FC = () => {
  const {
    getDataCollection,
    searchDataCollection,
    currentPage,
    setCurrentPage,
    lastPage,
    dataCollection,
    currentPageRef,
  } = useDataCollection(
    mapCharacterCollectionFromApiToVm,
    process.env.API_CHARACTERS_URL
  );

  React.useEffect(() => {
    getDataCollection();
  }, []);

  return (
    <CharacterCollectionComponent
      characterCollection={dataCollection as CharacterVm[]}
      handleOnSearch={searchDataCollection}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      lastPage={lastPage}
      getCharacterCollection={getDataCollection}
      currentPageRef={currentPageRef}
    />
  );
};
