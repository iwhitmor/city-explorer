import React from 'react';

const key = process.env.REACT_APP_LOCATION_KEY
const staticMapUrl = 'https://maps.locationiq.com/v3/staticmap';

class Map extends React.Component {
  render() {

    let location = this.props.location;
    let src = `${staticMapUrl}?key=${key}&center=${location.lat},${location.lon}&zoom=12`;

    return (
      <div id='map'>
        <img src={src} 
        alt={`Map of ${location.display_name}`} 
        />
      </div>
    )
  }
}

export default Map;