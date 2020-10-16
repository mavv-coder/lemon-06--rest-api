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
  listTitle: string;
}

export const ListItemComponent: React.FC<Props> = (props) => {
  const { id, primaryText, secondaryText, innerListData, listTitle } = props;
  const [displayInnerList, setDisplayInnerList] = React.useState<boolean>(
    false
  );
  const { listItem, residentList, residentItem, residentTitle } = classes;

  const handleInnerList = (v: boolean) => {
    setDisplayInnerList(v);
  };

  // I had to impletent this because the api returns some repeated characters
  const generateKey = () => (Math.random() * 1000).toString();

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
          <p className={residentTitle}>{listTitle}</p>
          <List className={residentList}>
            {innerListData.length > 0 &&
              displayInnerList &&
              innerListData.map((resident) => (
                <ListItem
                  key={generateKey() + resident}
                  className={residentItem}
                >
                  {resident}
                </ListItem>
              ))}
          </List>
        </>
      )}
    </div>
  );
};
