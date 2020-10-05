import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterVm } from './character-collection.vm';
import { SearchFilterComponent } from 'common/components/search-filter.component';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface Props {
  characterCollection: CharacterVm[];
  handleOnSearch: (search: string) => Promise<void>;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection, handleOnSearch } = props;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        placeholder="Search character name"
      />
      {!characterCollection.length && (
        <p>No results were found for your search</p>
      )}
      <List>
        {characterCollection.length > 0 &&
          characterCollection.map((character) => (
            <ListItem key={character.id}>
              <ListItemAvatar>
                <Avatar src={character.image} alt={character.name} />
              </ListItemAvatar>
              <ListItemText
                primary={character.name}
                secondary={character.species}
              />
              <ListItemSecondaryAction>
                <Link to={`character/${character.id}`}>
                  <ArrowForwardIcon />
                </Link>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      {/* <ul>
        {!characterCollection.length && (
          <p>No results were found for your search</p>
        )}
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
      </ul> */}
    </>
  );
};
