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
    let zoom = 10;
    if(this.position) zoom = 13;

    const map = {
      center: this.center,
      zoom: zoom,
      marker: this.marker
    }

    this.map = new google.maps.Map(this.mapNode, map);
    this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);

    this.marker = new google.maps.Marker({
      position: this.pos,
      map: this.map
    });

    if(this.businesses){
      zoom = 6;
      this.businesses.forEach(business => {
        return (
          this.addBusiness(business)
        )
      })
    }
  }

  componentDidUpdate() {
    let zoom = 10;
    if(this.position) zoom = 13;
    const map = {
      center: this.center,
      marker: this.marker,
      zoom: zoom
    }

    this.map = new google.maps.Map(this.mapNode, map);
    this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
    this.marker = new google.maps.Marker({
      position: this.pos,
      map: this.map
    });

    if(this.props.businesses){
      this.props.business.forEach(business => {
        return (
          this.addBusiness(business)
        )
      });
    }
  }

  addBusiness(business){
    const pos = new google.maps.LatLng(business.latitude, business.longitude)
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    const info = new google.maps.InfoWindo({
      content: business.name
    });

    marker.addListener("click", () => {
      info.open(this.map, marker);
    })
  }

  handleMarkerManager(business) {
    const url = `https://www.google.com/maps/place/${business.address}${business.city}${business.state}`;
    window.open(url);
  }

  render() {

    return (
      <div className="map" ref={map => this.mapNode = map}>
        Map
      </div>
    );
  }
}

export default withRouter(BusinessMap);
