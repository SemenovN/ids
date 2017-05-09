// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
// How zoomed in you want the map to start at (always required)
        zoom: 15,

// The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(54.846256, 83.054327), // New York
        scrollwheel: false,
// How you would like to style the map.
// This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#736c68"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e7e6e5"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"color":"#d4e4d3"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f5f5f5"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#d4e4d3"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#f5f5f5"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#e7e6e5"},{"gamma":"0.65"},{"lightness":"0"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aad5df"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement1 = document.getElementById('map1');
    var mapElement2 = document.getElementById('map2');
    var mapElement3 = document.getElementById('map3');

    // Create the Google Map using our element and options defined above
    var map1 = new google.maps.Map(mapElement1, mapOptions);
    var map2 = new google.maps.Map(mapElement2, mapOptions);
    var map3 = new google.maps.Map(mapElement3, mapOptions);

    // Let's also add a marker while we're at it
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(54.846256, 83.054327),
        map: map1,
        title: 'IDSI'
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(54.846256, 83.054327),
        map: map2,
        title: 'IDSI'
    });
     var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(54.846256, 83.054327),
        map: map3,
        title: 'IDSI'
    });

}
