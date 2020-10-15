import React from 'react';
import { CharacterVm } from '../character-detail.vm';
import * as classes from './card.styles';

interface Props {
  character: CharacterVm;
}

export const CardComponent: React.FC<Props> = (props) => {
  const { character } = props;
  const {
    card,
    image,
    textContainer,
    characterName,
    textDetail,
    aliveStatus,
    deadStatus,
  } = classes;

  return (
    <div className={card}>
      <img className={image} src={character.image} alt={character.name} />
      <div className={textContainer}>
        <h2 className={characterName}> {character.name}</h2>
        <p className={textDetail}> Species - {character.species}</p>
        <p className={textDetail}> Gender - {character.gender}</p>
        <p className={textDetail}> Origin - {character.origin}</p>
        <p className={textDetail}>
          Last known location - {character.lastLocation}
        </p>
        <p className={textDetail}>
          {`Status - `}
          {character.status === 'Alive' ? (
            <span className={aliveStatus}>{character.status}</span>
          ) : (
            <span className={deadStatus}>{character.status}</span>
          )}
        </p>
      </div>
    </div>
  );
};
