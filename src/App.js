import axios from 'axios';
import React from 'react';
import './App.css';
import Map from './Map.js';
import { Form, Container, Button } from 'react-bootstrap';

class App extends React.Component {

  state = {
    q: null,
    location: null,
  };

  handleSearch = async event => {
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);

    this.setState({ q, location: null });

    const url = `https://us1.locationiq.com/v1/search.php`;
    const response = await axios.get(url, {
      params: {
        key: process.env.REACT_APP_LOCATION_KEY,
        q,
        format: 'json',
      }
    });

    console.log(response);

    const location = response.data[0];
    this.setState({ location });

  };

  render() {
    return (
      <>
      <Container as='main'>
      <div className="App">
        <Form onSubmit={this.handleSearch}>
          <Form.Label>
            Search for a location:
            {' '}
            <Form.Control type="text" name="search" placeholder="location" />
          </Form.Label>
          <div>
            <Button variant="secondary" type="submit">Explore!</Button>
          </div>
        </Form>

        {this.state.q &&
          <>
            <h2>Search: {this.state.q}</h2>
            {this.state.location ?
              <>
                <p>Display Name: {this.state.location.display_name}</p>
                <p>Latitude: {this.state.location.lat}</p>
                <p>Longitude: {this.state.location.lon}</p>
                <Map location={this.state.location} />
              </>
              : <p>Loading...</p>}
          </>
        }
      </div>
      </Container>
      </>
    );
  }
}

export default App;