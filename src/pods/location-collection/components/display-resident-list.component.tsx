import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import * as classes from './display-resident-list.styles';

interface Props {
  showResidents: boolean;
  handleResidentList: (v: boolean) => void;
  residents: string[];
}

export const DisplayResidentListComponent: React.FC<Props> = (props) => {
  const { handleResidentList, showResidents, residents } = props;
  const { residentIcon, residentLink, disabledIcon } = classes;

  return (
    <>
      {!showResidents && residents.length > 0 && (
        <IconButton
          className={residentLink}
          aria-label="show-residents"
          onClick={() => handleResidentList(true)}
        >
          <VisibilityOutlinedIcon className={residentIcon} />
        </IconButton>
      )}
      {showResidents && residents.length > 0 && (
        <IconButton
          className={residentLink}
          aria-label="hide-residents"
          onClick={() => handleResidentList(false)}
        >
          <VisibilityOffOutlinedIcon className={residentIcon} />
        </IconButton>
      )}
      {!residents.length && (
        <IconButton
          className={residentLink}
          aria-label="disabled-button"
          disabled
        >
          <VisibilityOutlinedIcon className={disabledIcon} />
        </IconButton>
      )}
    </>
  );
};
