export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.markerLabel = 1;
  }


  updateMarkers(businesses) {
    if (Object.keys(this.markers).length) {
      console.log()
      this.markers = {};
    }
    businesses.forEach(business => {
      if (!this.markers[business.id]) {
        this.createMarkerForBusiness(business);
        this.markerLabel++;
      }
    });

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