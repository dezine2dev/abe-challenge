import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ url, text }) => {
  return (
    <NavLink activeClassName="active" className="mb-2" to={url}>
      {text}
    </NavLink>
  );
};
