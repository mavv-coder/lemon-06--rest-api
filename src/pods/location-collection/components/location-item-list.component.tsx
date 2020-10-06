import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { DisplayResidentListComponent } from './display-resident-list.component';
import { LocationVm } from '../location-collection.vm';
import * as classes from './location-item-list.styles';

interface Props {
  location: LocationVm;
}

export const LocationItemListComponent: React.FC<Props> = (props) => {
  const { location } = props;
  const [showResidents, setShowResidents] = React.useState<boolean>(false);
  const { listItem, residentList, residentItem, residentTitle } = classes;

  const handleResidentList = (v: boolean) => {
    setShowResidents(v);
  };
  return (
    <div key={location.id}>
      <ListItem key={location.id} className={listItem}>
        <ListItemText primary={location.name} secondary={location.type} />
        <ListItemSecondaryAction>
          <DisplayResidentListComponent
            residents={location.residents}
            showResidents={showResidents}
            handleResidentList={handleResidentList}
          />
        </ListItemSecondaryAction>
      </ListItem>
      {location.residents.length > 0 && showResidents && (
        <>
          <p aria-label="resident-list-title" className={residentTitle}>
            Location residents
          </p>
          <List className={residentList}>
            {location.residents.length > 0 &&
              showResidents &&
              location.residents.map((resident) => (
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
