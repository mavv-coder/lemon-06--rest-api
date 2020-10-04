import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterVm } from './character-collection.vm';
import { SearchFilterComponent } from '../../common/components/search-filter.component';

interface Props {
  characterCollection: CharacterVm[];
  handleOnSearch: (search: string) => Promise<void>;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection, handleOnSearch } = props;

  return (
    <>
      <SearchFilterComponent handleOnSearch={handleOnSearch} />
      <ul>
        {characterCollection.length > 0 &&
          characterCollection.map((character) => (
            <li key={character.id}>
              <p>{`Name: ${character.name}`}</p>
              <p>{`id: ${character.id}`}</p>
              <p>{`Species: ${character.species}`}</p>
              <p>{`Origin: ${character.origin}`}</p>
              <img
                style={{ width: '100px' }}
                src={character.image}
                alt={character.name}
              />
              <Link to={`character/${character.id}`}>Ver detalle</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
