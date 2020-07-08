class MarkerManager{
  constructor(map, handleClick, single){
    this.map = map;
    this.handleClick = handleClick;
    this.single = single;
    this.markers = {};
    this.label = 1;
  }

  updateMarkers(businesses){
    let businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);

    businesses.filter(business => !this.markers[business.id])
    .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness));

    Object.keys(this.markers).filter(businessId => !businessObj[businessId])
    .forEach((businessId) => this.removeMarker(this.markers[businessId]));
    this.label = 1;
  }

  createMarkerFromBusiness(business) {
    if(this.single){
      this.label = 1
    }
    const position = new google.maps.LatLng(business.latitude, business.longitude);

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
      label: `${this.label}`
    })
    this.label += 1
    marker.addEventListener('click', () => this.handleClick(businesss));
    this.marker[marker.businessId] = marker;
  }

  removeMarker(marker){
    this.marker[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;