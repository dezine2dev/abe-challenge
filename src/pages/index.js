import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import HowToBet from './HowToBet';

const App = () => {
  return (
    <Switch>
      <Route path="/how-to-bet" component={HowToBet} />
      <Redirect to="/how-to-bet" />
    </Switch>
  );
};

export default withRouter(App);
