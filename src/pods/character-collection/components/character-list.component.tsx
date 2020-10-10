import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CharacterVm } from '../character-collection.models';
import * as classes from './character-list.styles';

interface Props {
  characterCollection: CharacterVm[];
}

export const CharacterListComponent: React.FC<Props> = (props) => {
  const { characterCollection } = props;
  const { characterList, listItem, detailLink, detailIcon } = classes;

  return (
    <List className={characterList}>
      {characterCollection.length > 0 &&
        characterCollection.map((character) => (
          <ListItem key={character.id} className={listItem}>
            <ListItemAvatar>
              <Avatar src={character.image} alt={character.name} />
            </ListItemAvatar>
            <ListItemText
              primary={character.name}
              secondary={character.species}
            />
            <ListItemSecondaryAction>
              <Link className={detailLink} to={`character/${character.id}`}>
                <ArrowForwardIcon className={detailIcon} />
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};
