import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import * as classes from './search-filter.styles';

interface Props {
  handleOnSearch: (search: string) => Promise<void>;
  placeholder: string;
}

export const SearchFilterComponent: React.FC<Props> = (props) => {
  const { handleOnSearch, placeholder } = props;
  const { container, inputSearch, searchIcon } = classes;

  return (
    <div className={container}>
      <InputBase
        className={inputSearch}
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleOnSearch(e.target.value)}
      />
      <SearchIcon className={searchIcon} />
      <Divider />
    </div>
  );
};
