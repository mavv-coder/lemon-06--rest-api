import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import * as classes from './display-resident-list.styles';

interface Props {
  showResidents: boolean;
  handleResidentList: () => void;
}

export const DisplayResidentListComponent: React.FC<Props> = (props) => {
  const { handleResidentList, showResidents } = props;
  const { residentIcon, residentLink } = classes;

  return (
    <>
      {!showResidents && (
        <IconButton
          className={residentLink}
          aria-label="show-residents"
          onClick={handleResidentList}
        >
          <VisibilityOutlinedIcon className={residentIcon} />
        </IconButton>
      )}
      {showResidents && (
        <IconButton
          className={residentLink}
          aria-label="hide-residents"
          onClick={handleResidentList}
        >
          <VisibilityOffOutlinedIcon className={residentIcon} />
        </IconButton>
      )}
    </>
  );
};
