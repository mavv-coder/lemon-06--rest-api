import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterVm } from './character-collection.vm';

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
              <Link to={`character/${character.id}`}>Ver detalle</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
