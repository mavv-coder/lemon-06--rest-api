import React from 'react';

interface Props {
  handleOnSearch: (search: string) => Promise<void>;
  placeholder: string;
}

export const SearchFilterComponent: React.FC<Props> = (props) => {
  const { handleOnSearch, placeholder } = props;

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleOnSearch(e.target.value)}
      />
    </>
  );
};
