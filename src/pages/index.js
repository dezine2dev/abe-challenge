import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import HowToBet from './HowToBet';

const App = () => {
  return (
    <Switch>
      <Route path="/how_to_bet" component={HowToBet} />
      <Redirect to="/how_to_bet" />
    </Switch>
  );
};

export default withRouter(App);
