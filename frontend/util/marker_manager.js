class MarkerManager{
  constructor(map, handleClick, single){
    this.map = map;
    this.handleClick = handleClick;
    this.single = single;
    this.markers = {}
  }

  updateMarkers(businesses){
    let businessesObj = {};
    {console.log(businesses)}
    businesses.forEach(business => businessesObj[business.id] = business);

    businesses.filter(business => !this.markers[business.id])
    .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness));

    Object.keys(this.markers).filter(businessId => !businessObj[businessId])
    .forEach((businessId) => this.removeMarker(this.markers[businessId]));
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.latitude, business.longitude);

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
    })
    marker.addEventListener('click', () => this.handleClick(businesss));
    this.marker[marker.businessId] = marker;
  }

  removeMarker(marker){
    this.marker[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;