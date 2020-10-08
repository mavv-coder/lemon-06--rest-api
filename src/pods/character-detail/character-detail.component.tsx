import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import Button from '@material-ui/core/Button';
import { CharacterVm } from './character-detail.vm';
import * as classes from './character-detail.styles';
import InputBase from '@material-ui/core/InputBase';

interface Props {
  character: CharacterVm;
  onUpdate: (id: number) => void;
  setUpdatedQuote: (value: string) => void;
  updatedQuote: string;
  characterQuote: string;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character, onUpdate, setUpdatedQuote, characterQuote } = props;
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const {
    mainContainer,
    updateButton,
    cardContainer,
    iconContainer,
    characterName,
    link,
    goBackButton,
    quote,
    card,
    quoteContainer,
    image,
    textContainer,
    buttonLink,
    buttonIcon,
    inputSearch,
  } = classes;

  const handleUpdate = (id: number) => {
    onUpdate(character.id);
    setIsEditMode(false);
  };

  return (
    <>
      <main className={mainContainer}>
        <Link to={switchRoutes.root} className={link}>
          <Button className={goBackButton} variant="contained" color="primary">
            Go back
          </Button>
        </Link>
        <article>
          <div className={card}>
            <img className={image} src={character.image} alt={character.name} />
            <div className={textContainer}>
              <h2 className={characterName}> {character.name}</h2>
              <p> Species - {character.species}</p>
              <p> Gender - {character.gender}</p>
              <p> Origin - {character.origin}</p>
              <p> Last known location - {character.lastLocation}</p>
              <p> Status - {character.status}</p>
            </div>
          </div>
          {!isEditMode && (
            <div className={quoteContainer}>
              <p className={quote}>
                {characterQuote
                  ? `"${characterQuote}"`
                  : "This character doesn't have a quote"}
              </p>
              <div className={iconContainer}>
                <IconButton
                  onClick={() => setIsEditMode(true)}
                  className={buttonLink}
                  aria-label="edit-button"
                >
                  <EditOutlinedIcon className={buttonIcon} />
                </IconButton>
                <IconButton className={buttonLink} aria-label="delete-button">
                  <HighlightOffOutlinedIcon className={buttonIcon} />
                </IconButton>
              </div>
            </div>
          )}
          {isEditMode && (
            <div className={quoteContainer}>
              <InputBase
                className={inputSearch}
                type="text"
                defaultValue={characterQuote}
                onChange={(e) => {
                  if (e.target.value) setUpdatedQuote(e.target.value);
                }}
              />
              <Button
                variant="contained"
                disableElevation
                className={updateButton}
                onClick={() => handleUpdate(character.id)}
              >
                UPDATE
              </Button>
            </div>
          )}
        </article>
      </main>
    </>
  );
};
