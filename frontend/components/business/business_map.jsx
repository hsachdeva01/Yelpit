import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, 
  zoom: 13
};

class BusinessMap extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerManager.bind(this), this.props.singleBusiness)
    {console.log(this.props.business)}
    if(this.props.singleBusiness){
      this.MarkerManager.fetchBusiness(this.props.businessId)
    }
    // else {
    //   this.MarkerManager.updateMarkers(this.props.businesses)
    // }
  }

  componentDidUpdate(){

    if(this.props.singleBusiness){
      const targetBusiness = this.props.business;
      const targetBusinessKey = Object.keys(this.props.business);
      this.MarkerManager.updateMarkers([targetBusiness])
    } 
    // else {
    //   this.MarkerManager.updateMarkers(this.props.businesses)
    // }
  }

  handleMarkerManager(business){
    const url = `https://www.google.com/maps/place/${business.address}${business.city}${business.state}`;
    window.open(url);
  }

  render() {
    // if(!this.props.businesses){
    //   return null;
    // }

    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BusinessMap);
