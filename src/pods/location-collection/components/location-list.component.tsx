import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { LocationVm } from '../location-collection.vm';
import { DisplayResidentListComponent } from './display-resident-list.component';
import * as classes from './location-list.styles';

interface Props {
  locationCollection: LocationVm[];
}

export const LocationListComponent: React.FC<Props> = (props) => {
  const { locationCollection } = props;
  const { locationList, listItem } = classes;
  const [showResidents, setShowResidents] = React.useState<boolean>(false);

  const handleResidentList = () => {};

  return (
    <List className={locationList}>
      {locationCollection.length > 0 &&
        locationCollection.map((location) => (
          <ListItem key={location.id} className={listItem}>
            <ListItemText primary={location.name} secondary={location.type} />
            <ListItemSecondaryAction>
              <DisplayResidentListComponent
                showResidents={showResidents}
                handleResidentList={handleResidentList}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};
