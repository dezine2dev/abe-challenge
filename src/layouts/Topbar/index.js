import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

import abeLogo from '../../assets/icons/logo_full.png';

export default () => {
  return (
    <Navbar bg="white" variant="white" className="topbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={abeLogo} alt="abe logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="mx-2" activeClassName="active" to="/odds">
            Odds
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/futures">
            Futures
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/how_to_bet">
            How To Bet
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/leagues">
            Leagues
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/legalization">
            Legalization
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/insights">
            Insights
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/reviews">
            Reviews
          </NavLink>
          <NavLink className="mx-2" activeClassName="active" to="/deals">
            Deals
          </NavLink>
        </Nav>
        <Button variant="outline-primary" className="px-4 btn__login">
          Log In
        </Button>
        <Button variant="primary" className="ml-3 px-3">
          Join Now
        </Button>
      </Container>
    </Navbar>
  );
};
