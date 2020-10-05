import React from 'react';
import Button from '@material-ui/core/Button';
import * as classes from './display-collection.styles';

interface Props {
  displayCollection: boolean;
  setDisplayCollection: (v: boolean) => void;
  nameCollection: string;
}
export const DisplayCollectionComponent: React.FC<Props> = (props) => {
  const { displayCollection, setDisplayCollection, nameCollection } = props;
  const { btnContainer } = classes;

  return (
    <div className={btnContainer}>
      {displayCollection && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setDisplayCollection(false)}
        >
          hide {nameCollection}
        </Button>
      )}
      {!displayCollection && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDisplayCollection(true)}
        >
          show {nameCollection}
        </Button>
      )}
    </div>
  );
};
