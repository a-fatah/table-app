import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Customer name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
