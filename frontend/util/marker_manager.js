export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
  }


  updateMarkers(businesses) {
    let businesses = {};
    businesses.forEach(business => businesses[business.id] = business);
    let markerKeys = Object.keys(this.markers);
    markerKeys.slice();
    Object.keys(this.markers).forEach(businessId => {
      if(!businesses[businessId]){
        let noMarker = this.markers[businessId];
        if(noMarker){
          this.removeMarker(noMarker);
          delete this.markers[businessId];
        }
      }
    })

    businesses.forEach(business => {
      this.createMarkerForBusiness(business);
    })

    Object.keys(this.markers).forEach((markerId, idx) => {
      let marker = this.markers[markerId];
      let markerNum = idx + 1;
      markerNum = markerNum.toString();
      marker.setLabel(markerNum);
    })
  }

  createMarkerForBusiness(business) {
    const position = new google.maps.LatLng(business.latitude, business.longitude);

      const marker = new google.maps.Marker({
        position,
        label: {
          text: this.markerLabel.toString(),
          color: "#ffffff",
          fontWeight: "bold"
        },
        map: this.map,
        businessId: business.id
      });
      this.markers[marker.businessId] = marker;
  }
}