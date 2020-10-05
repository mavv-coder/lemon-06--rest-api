import React from 'react';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import * as classes from './no-results.styles';

export const NoResultsComponent: React.FC = () => {
  const { flexContainer, noResultText, sadIcon } = classes;

  return (
    <div className={flexContainer}>
      <SentimentVeryDissatisfiedOutlinedIcon className={sadIcon} />
      <p className={noResultText}>No results were found for your search</p>
    </div>
  );
};
