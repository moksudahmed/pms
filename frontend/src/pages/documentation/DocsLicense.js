
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="license">License</h1>
              <p className="fs-5 fw-light">Licensing details for Property Management Software</p>
              <p>Please check our <Card.Link href="https://example.com">official licensing page</Card.Link> to learn more about our licensing.</p>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
