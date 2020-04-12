import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container, Row, Col } from 'react-bootstrap';

import { Topbar, Footer, Sidebar } from './layouts';
import Pages from './pages';

export const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Fragment>
        <Topbar />
        <div className="app">
          <Container>
            <Row>
              <Col md={4}>
                <Sidebar />
              </Col>
              <Col md={8}>
                <Pages />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
};
