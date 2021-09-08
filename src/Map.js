import axios from 'axios';
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Col, Row, Form } from 'react-bootstrap';

class Map extends React.Component {
  render() {
    return (
      <container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={4}>
            <Image width="400" src='https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/3.1.1/1615634123388/Microsoft.VisualStudio.Services.Icons.Default' roundedCircle />
          </Col>
        </Row>
      </container>
    )
  }
}

export default Map;