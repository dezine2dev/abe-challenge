import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Betting101 from './Betting101';
import Sports from './Sports';

const Betting101Wrapper = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/sports`} component={Sports} />
      <Route exact path={match.path} component={Betting101} />
      <Redirect to={match.path} />
    </Switch>
  );
};

export default withRouter(Betting101Wrapper);
