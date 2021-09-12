import axios from 'axios';
import React from 'react';
import './App.css';
import Map from './Map.js';
import { Form, Container, Button, ListGroup, Card } from 'react-bootstrap';

const apiUrl = process.env.REACT_APP_API_URL;

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

    const location = response.data[0];
    this.setState({ location });

    this.getWeatherData(location);
  };

  getWeatherData = async (location) => {
    const response = await axios.get(`${apiUrl}/weatherData`, {
      params: {
        lat: location.lat,
        lon: location.lon,
      },
    });
    console.log(response);

    this.setState({
      weatherData: response.data
    })
    console.log(this.state.weatherData);
  }

  render() {
    return (
      <Container as="main">
        <div className="App">
          <Form onSubmit={this.handleSearch}>
            <Form.Label id="formLabel" column="sm" lg={2}>
              Search For a Location:
              {' '}
              <Form.Control type="text" name="search" placeholder="Location" />
            </Form.Label>
            <div>
              <Button id="button" variant="light" size="sm" type="submit">Explore!</Button>
            </div>
          </Form>
        </div>


        {this.state.q &&
          <>
            <h2>Search: {this.state.q}</h2>
            {this.state.location ?
              <>
                <p>{this.state.location.display_name}</p>
                <p>Latitude: {this.state.location.lat}</p>
                <p>Longitude: {this.state.location.lon}</p>
                <Map location={this.state.location} />
              </>
              : <p>Loading...</p>}
          </>
        }

        {this.state.weatherData &&
          <Card bg="dark" style={{ width: '18rem' }}>
            <Card.Header>Weather Forecast</Card.Header>

            {this.state.weatherData.map(day => (
              <ListGroup>
                <ListGroup.Item>Date: {day.date}</ListGroup.Item>
                <ListGroup.Item>Description: {day.description}</ListGroup.Item>
              </ListGroup>
            ))}
          </Card>
          }
      </Container>
    )
}
}

export default App;