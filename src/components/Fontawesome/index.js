import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faSearch);

export default ({ ...rest }) => {
  return <FontAwesomeIcon {...rest} />;
};
