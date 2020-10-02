import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import { CharacterVm } from './character-detail.models';

interface Props {
  character: CharacterVm;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <Link to={switchRoutes.root}>Ir atrás</Link>
      <h1>{character.name}</h1>
      <p>{character.id}</p>
      <p>{character.origin}</p>
      <p>{character.species}</p>
      <img src={character.image} alt={character.name} />
    </>
  );
};
