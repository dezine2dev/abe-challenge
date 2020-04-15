import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import cx from 'classnames';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { SearchBox } from '../../components';

import './Sidebar.scss';

export default () => {
  const [currentEventKey, setCurrentEventKey] = useState();
  const [topOffset, setTopOffset] = useState();
  const sidebarRef = useRef();
  const scrollHandler = (_) => {
    setTopOffset(sidebarRef.current.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  const CustomToggle = ({ url, children, eventKey }) => {
    setCurrentEventKey(useContext(AccordionContext));
    const toggleOnClick = useAccordionToggle(eventKey, () => {});

    return (
      <NavLink activeClassName="active" to={url} onClick={toggleOnClick}>
        {children}
      </NavLink>
    );
  };

  return (
    <div
      className={cx('sidebar', { 'position-sticky': topOffset <= 20 })}
      ref={sidebarRef}
    >
      <SearchBox
        className={cx('mb-4', { 'd-none': topOffset <= 20 })}
        placeholder="Search How To Bet"
      />
      <Accordion>
        <Card className={cx({ expanded: currentEventKey === '0' })}>
          <Card.Header>
            <CustomToggle url="/how-to-bet/betting-101" eventKey="0">
              Betting 101
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse className="accordion-collapse" eventKey="0">
            <Card.Body className="d-flex flex-column">
              <p>We’ll put you on the path to becoming a successful sports bettor</p>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/sports"
              >
                Sports Betting Basics
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/betting"
              >
                Betting Odds
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/comparing"
              >
                Comparing Odds
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/onshore"
              >
                Onshore Sportsbooks
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/in-game"
              >
                In-Game Betting
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/tips"
              >
                Tips From the Sharps
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/betting-101/glossary"
              >
                Glossary
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={cx({ expanded: currentEventKey === '1' })}>
          <Card.Header>
            <CustomToggle url="/how-to-bet/advanced-betting" eventKey="1">
              Advanced Betting Concepts
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse className="accordion-collapse" eventKey="1">
            <Card.Body className="d-flex flex-column">
              <p>
                Take your sports betting game to the next level with advice from the pros
              </p>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/advanced-betting/sports"
              >
                Sports Betting Market
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/advanced-betting/implied"
              >
                Implied Probability
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/advanced-betting/synthetic"
              >
                "Synthetic Hold"
              </NavLink>
              <NavLink
                activeClassName="active"
                className="mb-2"
                to="/how-to-bet/advanced-betting/week"
              >
                Weak vs. Strong
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
