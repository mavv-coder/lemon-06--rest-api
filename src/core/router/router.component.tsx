import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterDetailScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={[
            switchRoutes.characterCollection,
            switchRoutes.characterCollection,
          ]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.characterDetail}
          component={CharacterDetailScene}
        />
      </Switch>
    </HashRouter>
  );
};
