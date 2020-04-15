import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import SidebarSubNav from '../SidebarSubNav';

export default ({
  className,
  CustomToggle,
  url,
  text,
  eventKey,
  subNavUrls,
  description,
}) => {
  return (
    <Card className={className}>
      <Card.Header>
        <CustomToggle url={url} eventKey={eventKey}>
          {text}
        </CustomToggle>
      </Card.Header>
      <Accordion.Collapse className="accordion-collapse" eventKey={eventKey}>
        <Card.Body className="d-flex flex-column">
          <p>{description}</p>
          {subNavUrls.map((item, index) => (
            <SidebarSubNav key={index} {...item} />
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
