import React from 'react';
import { Link } from 'react-router-dom';
import { switchRoutes } from 'core/router';
import Button from '@material-ui/core/Button';
import { CharacterVm } from './character-detail.vm';
import { CardComponent } from './components/card.component';
import { CardFooterComponent } from './components/card-footer.components';
import * as classes from './character-detail.styles';

interface Props {
  character: CharacterVm;
  onUpdate: (id: number, quote: string) => void;
  characterQuote: string;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character, onUpdate, characterQuote } = props;
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [updatedQuote, setUpdatedQuote] = React.useState<string>(
    characterQuote
  );
  const { mainContainer, link, goBackButton } = classes;

  const handleUpdate = (id: number): void => {
    setIsEditMode(false);
    onUpdate(id, updatedQuote);
  };

  return (
    <main className={mainContainer}>
      <Link to={switchRoutes.root} className={link}>
        <Button className={goBackButton} variant="contained" color="primary">
          Go back
        </Button>
      </Link>
      <article>
        <CardComponent character={character} />
        <CardFooterComponent
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          characterQuote={characterQuote}
          setUpdatedQuote={setUpdatedQuote}
          handleUpdate={handleUpdate}
          characterId={character.id}
        />
      </article>
    </main>
  );
};
