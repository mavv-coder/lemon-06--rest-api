import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterVm } from './character-collection.vm';
import { SearchFilterComponent } from 'common/components/search-filter/search-filter.component';
import { PaginationComponent } from 'common/components/pagination/pagination.component';
import { NoResultsComponent } from 'common/components/no-results/no-results.component';
import * as classes from './character-collection.styles';

// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface Props {
  characterCollection: CharacterVm[];
  handleOnSearch: (search: string) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  getCharacterCollection: () => Promise<void>;
  currentPageRef: React.MutableRefObject<number>;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const {
    characterCollection,
    handleOnSearch,
    setCurrentPage,
    currentPage,
    lastPage,
    getCharacterCollection,
    currentPageRef,
    isSearching,
    setIsSearching,
  } = props;
  const { characterList, listItem, detailLink, detailIcon } = classes;

  return (
    <>
      <SearchFilterComponent
        handleOnSearch={handleOnSearch}
        setIsSearching={setIsSearching}
        placeholder="Search character name"
      />
      {!characterCollection.length && <NoResultsComponent />}
      {characterCollection.length > 0 && (
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
      )}
      {characterCollection.length > 0 && !isSearching && (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          getCollection={getCharacterCollection}
          currentPageRef={currentPageRef}
        />
      )}
    </>
  );
};
