import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { DisplayInnerListButtonComponent } from './display-inner-list-button.component';
import * as classes from './list-item.styles';

interface Props {
  id: number;
  primaryText: string;
  secondaryText: string;
  innerListData: string[];
}

export const ListItemComponent: React.FC<Props> = (props) => {
  const { id, primaryText, secondaryText, innerListData } = props;
  const [displayInnerList, setDisplayInnerList] = React.useState<boolean>(
    false
  );
  const { listItem, residentList, residentItem, residentTitle } = classes;

  const handleInnerList = (v: boolean) => {
    setDisplayInnerList(v);
  };
  return (
    <div key={id}>
      <ListItem key={id} className={listItem}>
        <ListItemText primary={primaryText} secondary={secondaryText} />
        <ListItemSecondaryAction>
          <DisplayInnerListButtonComponent
            dataList={innerListData}
            displayInnerList={displayInnerList}
            handleDataList={handleInnerList}
          />
        </ListItemSecondaryAction>
      </ListItem>
      {innerListData.length > 0 && displayInnerList && (
        <>
          <p aria-label="resident-list-title" className={residentTitle}>
            Location residents
          </p>
          <List className={residentList}>
            {innerListData.length > 0 &&
              displayInnerList &&
              innerListData.map((resident) => (
                <ListItem key={resident} className={residentItem}>
                  {resident}
                </ListItem>
              ))}
          </List>
        </>
      )}
    </div>
  );
};
