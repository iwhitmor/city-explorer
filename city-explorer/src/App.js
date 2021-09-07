import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form>
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
