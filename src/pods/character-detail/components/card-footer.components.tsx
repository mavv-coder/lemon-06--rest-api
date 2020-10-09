import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import InputBase from '@material-ui/core/InputBase';
import * as classes from './card-footer.styles';

interface Props {
  isEditMode: boolean;
  setIsEditMode: (v: boolean) => void;
  characterQuote: string;
  setUpdatedQuote: (quote: string) => void;
  handleUpdate: (id: number) => void;
  characterId: number;
}

export const CardFooterComponent: React.FC<Props> = (props) => {
  const {
    isEditMode,
    setIsEditMode,
    characterQuote,
    setUpdatedQuote,
    handleUpdate,
    characterId,
  } = props;
  const {
    quoteContainer,
    quote,
    editButton,
    editIcon,
    updateInput,
    iconContainer,
    addIcon,
    deleteIcon,
  } = classes;

  return (
    <>
      {!isEditMode && (
        <div className={quoteContainer}>
          <p className={quote}>
            {characterQuote
              ? `"${characterQuote}"`
              : "This character doesn't have a quote"}
          </p>
          <IconButton
            onClick={() => setIsEditMode(true)}
            className={editButton}
            aria-label="edit-button"
          >
            <EditOutlinedIcon className={editIcon} />
          </IconButton>
        </div>
      )}
      {isEditMode && (
        <div className={quoteContainer}>
          <InputBase
            className={updateInput}
            type="text"
            placeholder="Insert new quote"
            onChange={(e) => setUpdatedQuote(e.target.value)}
          />
          <div className={iconContainer}>
            <IconButton
              onClick={() => handleUpdate(characterId)}
              className={editButton}
              aria-label="edit-button"
            >
              <AddIcon className={addIcon} />
            </IconButton>
            <IconButton
              onClick={() => setIsEditMode(false)}
              className={editButton}
              aria-label="edit-button"
            >
              <HighlightOffOutlinedIcon className={deleteIcon} />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};
