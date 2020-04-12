import React from 'react';
import { Form } from 'react-bootstrap';

import FontAwesomeIcon from '../Fontawesome';
import './SearchBox.scss';

export default ({ ...rest }) => {
  return (
    <div className="search__box">
      <Form.Control type="text" {...rest} />
      <span>
        <FontAwesomeIcon icon="search" color="#0c40fc" />
      </span>
    </div>
  );
};
