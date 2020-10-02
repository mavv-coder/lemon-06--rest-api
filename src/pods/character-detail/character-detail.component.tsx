import React from 'react';
import { CharacterVm } from './character-detail.models';

interface Props {
  character: CharacterVm;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <h1>{character.name}</h1>
      <p>{character.id}</p>
      <p>{character.origin}</p>
      <p>{character.species}</p>
      <img src={character.image} alt={character.name} />
    </>
  );
};
