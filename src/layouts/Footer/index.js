import React from 'react';
import { Container, Navbar, NavLink, Row, Col } from 'react-bootstrap';
import instagramIcon from '../../assets/icons/instagram.png';
import twitterIcon from '../../assets/icons/twitter.png';

export default () => {
  return (
    <Navbar className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Row className="align-items-center">
              <Col md={3}>
                <img src={instagramIcon} alt="instagram" />
                <img className="ml-3" src={twitterIcon} alt="twitter" />
              </Col>
              <Col md={9} className="navbar-nav footer__links">
                <NavLink to="/about_us">About Us</NavLink>
                <NavLink to="/how_abe_works">How abe Works</NavLink>
                <NavLink to="/privacy_policy">Privacy Policy</NavLink>
                <NavLink to="/terms_of_service">Terms Of Service</NavLink>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="footer__note">
            © 2020 PopOdds inc. Reserved.
            <br />
            If you or someone you know has a gambling problem and wants help, call
            1-800-Gambler. You must be 21 years or older to place a bet.
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
