import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronRight,
  faPlusCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './Fontawesome.scss';

config.autoAddCss = false;
library.add(faSearch, faChevronRight, faPlusCircle, faPlus);

export default ({ color, ...rest }) => {
  return <FontAwesomeIcon className="fontawesome__icon" color={color} {...rest} />;
};
