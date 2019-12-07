$('body').scrollspy({ target: '#navbarScroll', offset: 50 });

var map;

function initMap() {
    var uk = { lat: 54.8812882, lng: -3.6730459 };
    map = new google.maps.Map(
        document.getElementById('map'), { zoom: 5, center: uk });
}
