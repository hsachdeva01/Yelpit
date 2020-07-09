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
    this.position = this.props.position || "";
    this.center = this.props.center || { lat: 37.773972, lng: -122.431297};
    this.businesses = this.props.businesses || "";
    this.update = false;
    this.linkTrack = 'true';
    this.tracker = 0;
  }


  shouldComponentUpdate(ownProps){
    let tracker;
    if(this.props.history) tracker = this.props.history.location.state;
    if(ownProps.searching === 'true') return false;
    if(tracker === 'map'){
      return true;
    }

    let tracking;
    if(this.props.location) tracking = this.props.location.linkTrack || undefined;
    if(tracking !== undefined && this.props.thelocation === 'true') return true;

    if((this.props.thelocation === 'true' && this.tracker < 2)){
      this.tracker++;
      return true;
    }

    if(this.update === false){
      this.update = true;
      return true
    } else {
      return false;
    }
  }
  componentDidMount() {

  }

  componentDidUpdate() {

    if (this.props.singleBusiness) {
      const targetBusiness = this.props.business;
      const targetBusinessKey = Object.keys(this.props.business);
      this.MarkerManager.updateMarkers([targetBusiness])
    }
  }

  handleMarkerManager(business) {
    const url = `https://www.google.com/maps/place/${business.address}${business.city}${business.state}`;
    window.open(url);
  }

  render() {

    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BusinessMap);
