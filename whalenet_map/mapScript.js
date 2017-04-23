var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
for (var i = 0; i < results.features.length; i++) {
  var coords = results.features[i].geometry.coordinates;
  var latLng = new google.maps.LatLng(coords[1],coords[0]);
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}
}
