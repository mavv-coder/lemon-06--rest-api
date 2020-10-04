import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import { CharacterVm } from './character-detail.vm';

interface Props {
  character: CharacterVm;
  onUpdate: (id: number) => void;
  setUpdatedQuote: (value: string) => void;
  updatedQuote: string;
  characterQuote: string;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character, onUpdate, setUpdatedQuote, characterQuote } = props;

  return (
    <>
      <Link to={switchRoutes.root}>Ir atrás</Link>
      <h1>{character.name}</h1>
      <p>{character.id}</p>
      <p>{character.origin}</p>
      <p>{character.species}</p>
      <img src={character.image} alt={character.name} />
      <input type="text" onChange={(e) => setUpdatedQuote(e.target.value)} />
      <button onClick={() => onUpdate(character.id)}>Update</button>
      <p>Esta es la cita: "{characterQuote}"</p>
    </>
  );
};
