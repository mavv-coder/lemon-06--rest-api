import React from 'react';

interface Props {
  displayCollection: boolean;
  setDisplayCollection: (v: boolean) => void;
  nameCollection: string;
}
export const DisplayCollectionComponent: React.FC<Props> = (props) => {
  const { displayCollection, setDisplayCollection, nameCollection } = props;

  return (
    <>
      {displayCollection && (
        <button onClick={() => setDisplayCollection(false)}>
          HIDE {nameCollection}
        </button>
      )}
      {!displayCollection && (
        <button onClick={() => setDisplayCollection(true)}>
          GET {nameCollection}
        </button>
      )}
    </>
  );
};
