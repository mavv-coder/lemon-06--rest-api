import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import * as classes from './pagination.styles';

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { currentPage, setCurrentPage, lastPage } = props;
  const { flexContainer, Pagtext, iconBtn, prevIcon, nextIcon } = classes;

  const handlePreviousPage = (): void => {};

  return (
    <div className={flexContainer}>
      <IconButton
        className={iconBtn}
        disabled={currentPage <= 1}
        aria-label="previous-page"
        onClick={handlePreviousPage}
      >
        <ArrowBackIosIcon className={prevIcon} />
      </IconButton>
      <Typography variant="body1" className={Pagtext}>
        Page: {currentPage} of {lastPage}
      </Typography>
      <IconButton
        className={iconBtn}
        disabled={currentPage === lastPage}
        aria-label="next-page"
      >
        <ArrowForwardIosIcon className={nextIcon} />
      </IconButton>
    </div>
  );
};
