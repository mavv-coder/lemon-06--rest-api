import React from 'react';
import Axios from 'axios';
import { CharacterVm } from './character-collection.vm';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);

  const getCharacterCollection = async (): Promise<void> => {
    const resolve = await Axios.get(process.env.API_CHARACTERS_URL);
    const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
      resolve.data.results
    );
    setCharacterCollection(newCollection);
  };

  const handleOnSearch = async (search: string): Promise<void> => {
    const resolve = await Axios.get(
      `${process.env.API_CHARACTERS_URL}?name=${search}`
    );
    const newCollection: CharacterVm[] = mapCharacterCollectionFromApiToVm(
      resolve.data.results
    );
    setCharacterCollection(newCollection);
  };

  React.useEffect(() => {
    getCharacterCollection();
  }, []);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      handleOnSearch={handleOnSearch}
    />
  );
};
