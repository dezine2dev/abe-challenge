import React from 'react';
import { Button } from 'react-bootstrap';
import cx from 'classnames';

import Fontawesome from '../Fontawesome';
import './IconCard.scss';

export default ({ iconImage, text, buttonIcon, circleIcon, tag }) => {
  return (
    <div className="icon__card">
      <div className="icon__card-img">
        <img src={iconImage} alt="icon" />
      </div>
      <h3>{text}</h3>
      <Button variant="link" className={cx({ circle: circleIcon })}>
        <Fontawesome icon={buttonIcon} />
      </Button>
      {!!tag && <span>{tag}</span>}
    </div>
  );
};
