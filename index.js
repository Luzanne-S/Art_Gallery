//hamburger menu
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//location

   //Mapbox access token
   mapboxgl.accessToken = 'pk.eyJ1IjoibHV6YW5uZSIsImEiOiJja3pzZ2hub2sxZXIzMnBwZWNmY3RnNjMyIn0.s_pryehapl5VD8FY_uiEtQ';
  var map = new mapboxgl.Map({
     container: 'map', // container id
     style: 'mapbox://styles/mapbox/dark-v10',
     center: [28.0050793531047 , -26.1531395], // starting position [lng, lat] 
     zoom: 15 // starting zoom 
     
   }
   );
   
 
   //Add your pop up variable before your marker variable 

   var popup = new mapboxgl.Popup({
       offset: 25
     })
     .setText('Hello Welcome to MG');


   //Adding first marker to the map 
   var marker = new mapboxgl.Marker({
       color: '#D5966B'
     })
     .setLngLat([28.0050793531047 , -26.1531395])
     .setPopup(popup)
     .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


