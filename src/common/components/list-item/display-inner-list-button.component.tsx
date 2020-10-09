import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import * as classes from './display-inner-list-button.styles';

interface Props {
  displayInnerList: boolean;
  handleDataList: (v: boolean) => void;
  dataList: string[];
}

export const DisplayInnerListButtonComponent: React.FC<Props> = (props) => {
  const { handleDataList, displayInnerList, dataList } = props;
  const { buttonLink, buttonIcon, disabledIcon } = classes;

  return (
    <>
      {!displayInnerList && dataList.length > 0 && (
        <IconButton
          className={buttonLink}
          aria-label="show-list"
          onClick={() => handleDataList(true)}
        >
          <VisibilityOutlinedIcon className={buttonIcon} />
        </IconButton>
      )}
      {displayInnerList && dataList.length > 0 && (
        <IconButton
          className={buttonLink}
          aria-label="hide-list"
          onClick={() => handleDataList(false)}
        >
          <VisibilityOffOutlinedIcon className={buttonIcon} />
        </IconButton>
      )}
      {!dataList.length && (
        <IconButton
          className={buttonLink}
          aria-label="disabled-button"
          disabled
        >
          <VisibilityOutlinedIcon className={disabledIcon} />
        </IconButton>
      )}
    </>
  );
};
