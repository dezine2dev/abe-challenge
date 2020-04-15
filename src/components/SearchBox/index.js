import React from 'react';
import cx from 'classnames';
import { Form } from 'react-bootstrap';

import FontAwesomeIcon from '../Fontawesome';
import './SearchBox.scss';

export default ({ className, ...rest }) => {
  return (
    <div className={cx('search__box', className)}>
      <Form.Control type="text" {...rest} />
      <span>
        <FontAwesomeIcon icon="search" color="primary" />
      </span>
    </div>
  );
};
