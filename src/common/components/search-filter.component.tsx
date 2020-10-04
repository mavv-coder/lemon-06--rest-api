import React from 'react';

interface Props {
  handleOnSearch: (search: string) => Promise<void>;
}

export const SearchFilterComponent: React.FC<Props> = (props) => {
  const { handleOnSearch } = props;

  return (
    <>
      <input
        type="text"
        placeholder="type character name"
        onChange={(e) => handleOnSearch(e.target.value)}
      />
    </>
  );
};
