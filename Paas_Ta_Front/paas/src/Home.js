import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import Home_Main from './modules/views/Home_main';
import AppAppBar from './modules/views/AppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Home_Main />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
