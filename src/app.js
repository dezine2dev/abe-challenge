import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Topbar, Footer } from './layouts';
import Pages from './pages';

export const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Fragment>
        <Topbar />
        <Pages />
        <Footer />
      </Fragment>
    </Router>
  );
};
