import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import cx from 'classnames';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import { SearchBox } from '../../components';
import SidebarParentNav from './SidebarParentNav';
import { betting101Nav, advancedBettingNav } from './constants';

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
        <SidebarParentNav
          className={cx({ expanded: currentEventKey === '0' })}
          CustomToggle={CustomToggle}
          url="/how-to-bet/betting-101"
          text="Betting 101"
          eventKey="0"
          subNavUrls={betting101Nav}
          description="We’ll put you on the path to becoming a successful sports bettor"
        />
        <SidebarParentNav
          className={cx({ expanded: currentEventKey === '1' })}
          CustomToggle={CustomToggle}
          url="/how-to-bet/advanced-betting"
          text="Advanced Betting Concepts"
          eventKey="1"
          subNavUrls={advancedBettingNav}
          description="Take your sports betting game to the next level with advice from the pros"
        />
      </Accordion>
    </div>
  );
};
