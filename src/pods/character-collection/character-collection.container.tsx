import React from 'react';
import Axios from 'axios';
import { CharacterVm } from './character-collection.models';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);

  const getCharacterCollection = async (): Promise<void> => {
    const resolve = await Axios.get(process.env.API_CHARACTERS_URL);
    const newCollection = mapCharacterCollectionFromApiToVm(
      resolve.data.results
    );
    setCharacterCollection(newCollection);
  };

  React.useEffect(() => {
    getCharacterCollection();
  }, []);

  return (
    <>
      <CharacterCollectionComponent />
      <ul>
        {characterCollection.length > 0 &&
          characterCollection.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
      </ul>
    </>
  );
};
