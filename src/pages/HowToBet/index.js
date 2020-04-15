import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Sidebar } from '../../layouts';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import HowToBet from './HowToBet';
import Betting101 from './Betting101';
import AdvancedSetting from './AdvancedBetting';

import './HowToBetWrapper.scss';

const HowToBetWrapper = ({ match }) => {
  const routes = () => (
    <Switch>
      <Route path={`${match.path}/betting-101`} component={Betting101} />
      <Route path={`${match.path}/advanced-betting`} component={AdvancedSetting} />
      <Route path={`${match.path}`} component={HowToBet} />
      <Redirect to={`${match.path}`} />
    </Switch>
  );

  return (
    <div className="how_to_bet_wrapper mt-4">
      <Row className="m-0">
        <Col md={4} className="mt-3 pl-0">
          <Sidebar />
        </Col>
        <Col md={8} className="how_to_bet_content my-5 pl-5 pr-0">
          {routes()}
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(HowToBetWrapper);
