import React from 'react';
import './App.css';

class App extends React.Component {
  handleSearch = event => {
    event.preventDefault();

    let form = event.target;
    let input = form.elements.search;
    let q = input.value;
    console.log(q);
  }
  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSearch}>
          <label>
            Search for a location: {' '}
            <input type="text" name="search" placeholder="location" />
          </label>
          <div>
            <button type="submit">Explore!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
