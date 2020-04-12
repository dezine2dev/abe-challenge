import React from 'react';
import { Form } from 'react-bootstrap';

import FontAwesomeIcon from '../Fontawesome';
import './SearchBox.scss';

export default ({ ...rest }) => {
  return (
    <div className="search__box">
      <Form.Control type="text" {...rest} />
      <span>
        <FontAwesomeIcon icon="search" color="primary" />
      </span>
    </div>
  );
};
