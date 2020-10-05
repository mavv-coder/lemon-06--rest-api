import React from 'react';
import Axios from 'axios';
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
  //

  // const [currentPage, setCurrentPage] = React.useState<number>(1);
  // const [lastPage, setLastPage] = React.useState<number>(0);
  // const [characterCollection, setCharacterCollection] = React.useState<
  //   CharacterVm[]
  // >([]);
  // const currentPageRef = React.useRef(currentPage);

  // const getCharacterCollection = async (): Promise<void> => {
  //   const resolve = await Axios.get(
  //     `${process.env.API_CHARACTERS_URL}?page=${currentPageRef.current}`
  //   );
  //   const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
  //     resolve.data.results
  //   );
  //   setLastPage(resolve.data.info.pages);
  //   setCharacterCollection(newCollection);
  // };

  // const searchDataCollection = async (search: string): Promise<void> => {
  //   try {
  //     const resolve = await Axios.get(
  //       `${process.env.API_CHARACTERS_URL}?name=${search}`
  //     );
  //     const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
  //       resolve.data.results
  //     );
  //     setDataCollection(newCollection);
  //   } catch {
  //     setDataCollection([]);
  //   }
  // };

  React.useEffect(() => {
    getDataCollection();
    // getCharacterCollection();
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
