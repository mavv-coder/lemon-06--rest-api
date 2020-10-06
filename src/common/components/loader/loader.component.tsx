import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as classes from './loader.styles';

export const LoaderComponent: React.FC = () => {
  const { loaderContainer, loader } = classes;

  return (
    <div className={loaderContainer}>
      <CircularProgress size="6rem" className={loader} />
    </div>
  );
};
