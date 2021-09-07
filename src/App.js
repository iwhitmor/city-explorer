import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    q: null,
  };

  handleSearch = event => {
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);

    this.setState({ q });

    const url = `https://us1.locationiq.com/v1/search.php?key=pk.552756e6a306d3464c3971a5e2c69656&q=Cedar Rapids Iowa&format=json`;
    const response = axios.get(url);
    console.log(response);


  };

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSearch}>
          <label>
            Search for a location: 
            {' '}
            <input type="text" name="search" placeholder="location" />
          </label>
          <div>
            <button type="submit">Explore!</button>
          </div>
        </form>
        {this.state.q && 
        <h2>Search: {this.state.q}</h2>
        }
      </div>
    );
  }
}

export default App;
