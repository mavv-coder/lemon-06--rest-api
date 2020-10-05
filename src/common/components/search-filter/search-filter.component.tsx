import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import * as classes from './search-filter.styles';

interface Props {
  handleOnSearch: (search: string) => Promise<void>;
  placeholder: string;
  setIsSearching: (value: boolean) => void;
}

export const SearchFilterComponent: React.FC<Props> = (props) => {
  const { handleOnSearch, placeholder, setIsSearching } = props;
  const { container, inputSearch, searchIcon } = classes;

  const handleOnChange = (search: string): void => {
    search ? setIsSearching(true) : setIsSearching(false);
    handleOnSearch(search);
  };

  return (
    <div className={container}>
      <InputBase
        className={inputSearch}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <SearchIcon className={searchIcon} />
    </div>
  );
};
