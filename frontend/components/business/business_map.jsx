import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  mapOptions() {
    if (this.props.businesses.length === 1) {
      return {
        center: {
          lat: this.props.businesses[0].latitude,
          lng: this.props.businesses[0].longitude
        },
        zoom: 13,
        fullScreen: false,
        streetView: false,
        zoomControl: this.props.zoom,
        zoomOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
        gestureHandling: 'none'
      };
    } else {
      return ({
        center: { lat: 37.8014, lng: -122.40163 },
        zoom: 13
      })
    }
  };


  componentDidMount() {
    let maps = this.mapOptions();
    this.map = new google.maps.Map(this.mapNode, maps);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  };

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses)
  };

  handleMarkerManager(business) {
    const url = `https://www.google.com/maps/place/${business.address}${business.city}${business.state}`;
    window.open(url);
  }


  render() {
    return <div className="map sticky" ref={map => (this.mapNode = map)} />;
  }
}

export default withRouter(BusinessMap);
