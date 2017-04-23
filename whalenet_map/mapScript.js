function initialize() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33, lng: 151},
    disableDefaultUI: true
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
