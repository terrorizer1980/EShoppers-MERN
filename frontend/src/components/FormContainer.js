import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='jsutify-content-md-center'>
        <Col sm={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
