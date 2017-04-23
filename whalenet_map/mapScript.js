// Adapted from https://developers.google.com/maps/documentation/javascript/examples/maptype-image?hl=nl

var map;
function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  map = new google.maps.Map(mapDiv, {
    zoom: 3,
    center: new google.maps.LatLng(36.83776, -76.00996), 
  });

  map.data.loadGeoJson('data.json');
}

google.maps.event.addDomListener(window, 'load', initialize);
