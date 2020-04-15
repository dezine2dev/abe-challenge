import React from 'react';
import { Formik } from 'formik';
import {
  Card,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap';

import mockupImage from '../../assets/images/mockup_insights-3.png';

import './SignupCard.scss';

export default () => {
  return (
    <Card className="my-5 signup-card">
      <Container>
        <Row>
          <Col md={8} className="left-section d-flex flex-column justify-content-center">
            <h3>
              <span className="text-primary">Bet Smarter</span>
              <br />
              with abe insights
            </h3>
            <p>
              The 3-minute newsletter with fresh takes on the betting news you need to
              start your day.
            </p>
            <Formik
              initialValues={{ email: '' }}
              validate={(values) => {
                const errors = {};
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Please provide a valid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {}}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <InputGroup>
                    <FormControl
                      type="email"
                      name="email"
                      placeholder="your email here"
                      aria-label="your email here"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      isInvalid={errors.email && touched.email}
                    />
                    <InputGroup.Append>
                      <Button
                        type="submit"
                        variant="outline-link"
                        disabled={errors.email && touched.email}
                      >
                        sign up for free
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>

                  {errors.email && touched.email && (
                    <Form.Control.Feedback className="pl-4 d-block" type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form>
              )}
            </Formik>
          </Col>
          <Col md={4}>
            <img src={mockupImage} alt="card" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
