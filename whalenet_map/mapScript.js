// Adapted from https://developers.google.com/maps/documentation/javascript/examples/maptype-image?hl=nl

var fileList = [];

var markers = [];

var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-30, 0);

  var mapOptions = {
    center: myLatlng,
    zoomControl: true,
    zoom: 2,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  map.setMapTypeId('test');

  // Reference at https://developers.google.com/maps/documentation/javascript/datalayer
  // Display data from .json file and hide markers.
  map.data.loadGeoJson('data.json');
  //map.data.setStyle(hideMarkers);

  //function loadMapData(variable) {
    //map.data.forEach(function(feature) {
      //var value = feature.getProperty(variable);
    //document.getElementById('data-min').textContent = dataMin.toLocaleString();
    //document.getElementById('data-max').textContent = dataMax.toLocaleString();
  //}
}

// Taken from the Google example.
// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
  var y = coord.y;
  var x = coord.x;

  // tile range in one direction range is dependent on zoom level
  // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift
  // Bitwise shifting any number x to the left by y bits yields x * 2^y.
  var tileRange = 1 << zoom;

  // don't repeat across y-axis (vertically)
  if (y < 0 || y >= tileRange) {
    return null;
  }

  // repeat or not across x-axis
  if (x < 0 || x >= tileRange) {
    //x = (x % tileRange + tileRange) % tileRange;
    return null;
  }

  return {
    x: x,
    y: y
  };
}

google.maps.event.addDomListener(window, 'load', initialize);
