import React from 'react';
import List from '@material-ui/core/List';
import { LocationVm } from '../location-collection.vm';
import { LocationItemListComponent } from './location-item-list.component';
import * as classes from './location-list.styles';

interface Props {
  locationCollection: LocationVm[];
}

export const LocationListComponent: React.FC<Props> = (props) => {
  const { locationCollection } = props;
  const { locationList } = classes;

  return (
    <List className={locationList}>
      {locationCollection.length > 0 &&
        locationCollection.map((location) => (
          <LocationItemListComponent key={location.id} location={location} />
          // <div key={location.id}>
          //   <ListItem key={location.id} className={listItem}>
          //     <ListItemText primary={location.name} secondary={location.type} />
          //     <ListItemSecondaryAction>
          //       <DisplayResidentListComponent
          //         showResidents={showResidents}
          //         handleResidentList={handleResidentList}
          //       />
          //     </ListItemSecondaryAction>
          //   </ListItem>
          //   <List>
          //     {location.residents.length > 0 &&
          //       showResidents &&
          //       location.residents.map((resident) => (
          //         <ListItem>{resident}</ListItem>
          //       ))}
          //   </List>
          // </div>
        ))}
    </List>
  );
};
