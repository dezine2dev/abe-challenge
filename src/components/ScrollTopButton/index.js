import React from 'react';
import { Button } from 'react-bootstrap';
import Fontawesome from '../Fontawesome';

export default () => {
  return (
    <Button
      className="go-to-top"
      variant="outline-link"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <Fontawesome icon="chevron-up" />
    </Button>
  );
};
