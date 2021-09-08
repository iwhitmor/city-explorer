import axios from 'axios';
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Col, Row, Form } from 'react-bootstrap';

class Map extends React.Component {

  render() {
    return (
      <container>
        <Row>
          <Col>
            <Image width='300' src='https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/3.1.1/1615634123388/Microsoft.VisualStudio.Services.Icons.Default' roundedCircle />
          </Col>
        </Row>
      </container>
    )
  }
}

export default Map;