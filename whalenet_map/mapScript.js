// Adapted from https://developers.google.com/maps/documentation/javascript/examples/maptype-image?hl=nl

var map;
var selectBox;
function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  map = new google.maps.Map(mapDiv, {
    zoom: 6,
    center: new google.maps.LatLng(36.83776, -76.00996), 
  });

  selectBox = document.getElementById('choice-variable');
  google.maps.event.addDomListener(selectBox, 'change', showChoice);

  //map.data.loadGeoJson('data.json');
  
  var infowindow = new google.maps.InfoWindow();
  map.data.addListener('click', function(event) {
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
        '<div id="bodyContent"><strong>'+
          'Time: '+ event.feature.getProperty("Loctime") + '<br>' +
          'Date: ' + event.feature.getProperty("Locdate") + '<br>' +
          'Loc. Quality: ' + event.feature.getProperty("Locquality") +
        '</strong></div>'+
      '</div>';
    infowindow.setContent(contentString);
    infowindow.setPosition(event.feature.getGeometry().get());
    infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
    infowindow.open(map);
  });
  
}

var flightPlanCoordinates = {
  "seal_grey_beetle": [{lat: 36.83776, lng: -76.00996},{lat: 36.92806, lng: -75.98014},{lat: 37.14629, lng: -76.19737},{lat: 37.21613, lng: -76.17492},{lat: 37.20414, lng: -76.18444},{lat: 37.962, lng: -76.344},{lat: 37.964, lng: -76.081},{lat: 38.341, lng: -76.279},{lat: 39.14, lng: -76.283},{lat: 39.582, lng: -75.528},{lat: 39.352, lng: -75.411},{lat: 39.075, lng: -74.844},{lat: 38.95, lng: -74.525},{lat: 38.93, lng: -74.508},{lat: 38.867, lng: -74.478},{lat: 38.965, lng: -74.481},{lat: 38.97, lng: -74.418},{lat: 38.843, lng: -74.555},{lat: 39.174, lng: -74.648},{lat: 39.536, lng: -74.137},{lat: 40.038, lng: -74.002},{lat: 39.989, lng: -73.665},{lat: 40.252, lng: -73.535},{lat: 40.263, lng: -73.454},{lat: 40.233, lng: -73.463},{lat: 40.237, lng: -73.465},{lat: 40.263, lng: -73.449},{lat: 40.279, lng: -73.382},{lat: 40.284, lng: -73.376},{lat: 40.288, lng: -73.489},{lat: 40.272, lng: -73.448},{lat: 40.267, lng: -73.373},{lat: 40.364, lng: -73.204},{lat: 40.871, lng: -72.352},{lat: 41.296, lng: -71.882},{lat: 41.459, lng: -71.139},{lat: 41.455, lng: -70.858},{lat: 41.699, lng: -70.73},{lat: 41.564, lng: -70.652},{lat: 41.451, lng: -70.92},{lat: 41.442, lng: -70.903},{lat: 41.443, lng: -70.908},{lat: 41.449, lng: -70.903},{lat: 41.446, lng: -70.917},{lat: 41.445, lng: -70.905},{lat: 41.439, lng: -70.916},{lat: 41.442, lng: -70.916},{lat: 41.439, lng: -70.937},{lat: 41.443, lng: -70.903},{lat: 41.432, lng: -70.914},{lat: 41.445, lng: -70.905},{lat: 41.444, lng: -70.899},{lat: 41.427, lng: -70.938},{lat: 41.442, lng: -70.896},{lat: 41.433, lng: -70.873},{lat: 41.447, lng: -70.899},{lat: 41.418, lng: -70.949},{lat: 41.442, lng: -70.901},{lat: 41.442, lng: -70.913},{lat: 41.207, lng: -70.932},{lat: 41.435, lng: -70.934},{lat: 41.191, lng: -70.929},{lat: 41.446, lng: -70.924},{lat: 41.449, lng: -70.898},{lat: 41.45, lng: -70.906},{lat: 41.425, lng: -70.937},{lat: 41.422, lng: -70.896},{lat: 41.448, lng: -70.905},{lat: 41.439, lng: -70.91},{lat: 41.203, lng: -70.932},{lat: 41.444, lng: -70.908},{lat: 41.367, lng: -70.93},{lat: 41.384, lng: -70.941},{lat: 41.36, lng: -70.904},{lat: 41.223, lng: -70.951},{lat: 41.446, lng: -70.907},{lat: 41.444, lng: -70.906},{lat: 41.434, lng: -70.895},{lat: 41.427, lng: -70.907},{lat: 41.445, lng: -70.912},{lat: 41.439, lng: -70.901},{lat: 41.443, lng: -70.914}],
  "seal_grey_madison": [{lat: 41.335, lng: -70.266},{lat: 41.334, lng: -70.301},{lat: 41.33, lng: -70.287},{lat: 41.335, lng: -70.291},{lat: 41.335, lng: -70.291},{lat: 41.323, lng: -70.395},{lat: 41.207, lng: -70.386},{lat: 41.09, lng: -70.192},{lat: 40.985, lng: -70.232},{lat: 41.024, lng: -70.277},{lat: 40.932, lng: -70.419},{lat: 40.943, lng: -70.271},{lat: 40.939, lng: -70.304},{lat: 41.044, lng: -70.409},{lat: 41.078, lng: -70.45},{lat: 41.165, lng: -70.578},{lat: 41.25, lng: -70.502},{lat: 41.099, lng: -70.732},{lat: 41.12, lng: -70.832},{lat: 41.152, lng: -70.341},{lat: 41.037, lng: -70.585},{lat: 40.973, lng: -70.627},{lat: 40.925, lng: -70.588},{lat: 41.016, lng: -70.743},{lat: 41.067, lng: -70.457},{lat: 41.07, lng: -70.788},{lat: 40.871, lng: -71.012},{lat: 40.787, lng: -71.147}]
}
var flightPlanColors = {
  "seal_grey_beetle": "#FF0000",
  "seal_grey_madison": "#FFC300"
}
function showChoice() {
  map.data.forEach(function(feature) {
      map.data.remove(feature);
  });
  
  var coordinates = flightPlanCoordinates[variable];
  map.setCenter(coordinates[0]);
       
  var variable = selectBox.options[selectBox.selectedIndex].value;
    
  map.data.loadGeoJson('data/'+variable+'.json');

  var flightPath = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: flightPlanColors[variable],
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
  flightPath.setMap(map);
    
}
  
google.maps.event.addDomListener(window, 'load', initialize);
