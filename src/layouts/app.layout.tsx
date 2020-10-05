import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const { appbarTitle, flexContainer, content } = classes;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className={flexContainer}>
            <ChildCareOutlinedIcon />
            <p className={appbarTitle}>Rick & Morty App</p>
          </div>
        </Toolbar>
      </AppBar>
      <main className={content}>{children}</main>
    </>
  );
};
