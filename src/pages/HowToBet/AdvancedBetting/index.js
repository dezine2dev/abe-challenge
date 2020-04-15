import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import AdvancedBetting from './AdvancedBetting';
import Sports from './Sports';

const AdvancedBettingWrapper = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/sports`} component={Sports} />
      <Route exact path={match.path} component={AdvancedBetting} />
      <Redirect to={match.path} />
    </Switch>
  );
};

export default withRouter(AdvancedBettingWrapper);
