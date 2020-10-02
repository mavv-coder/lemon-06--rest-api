import React from 'react';
import { CharacterVm } from './character-collection.models';

interface Props {
  characterCollection: CharacterVm[];
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection } = props;
  return (
    <>
      <ul>
        {characterCollection.length > 0 &&
          characterCollection.map((character) => (
            <li key={character.id}>
              <p>{`Name: ${character.name}`}</p>
              <p>{`id: ${character.id}`}</p>
              <p>{`Species: ${character.species}`}</p>
              <p>{`Origin: ${character.origin}`}</p>
              <img src={character.image} alt={character.name} />
            </li>
          ))}
      </ul>
    </>
  );
};
