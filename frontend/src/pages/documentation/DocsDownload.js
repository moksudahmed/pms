
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="download">Download </h1>
              <p className="fs-5 fw-light">Property Management Software</p>
              <p>Property Management Software</p>
              <ul className="docs-list">
                <li>Download <Card.Link href="https://example.com" target="_blank">Property Management Software</Card.Link>.</li>
              </ul>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
