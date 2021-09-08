import axios from 'axios';
import React from 'react';
import Image from 'react-bootstrap/Image'
import { Col, Row, Form } from 'react-bootstrap';

class Map extends React.Component {
  render() {
    return (
      <container>
        <Col xs={6} md={4}>
          <Image src='holder.js/171x180' roundedCircle />
        </Col>
      </container>
    )
  }
}

export default Map;