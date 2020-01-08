window.addEventListener('load', (event) => {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude
    const longtitude = position.coords.longitude

    // Sets the view on the map to be the current location of the user
    var mymap = L.map('mapid').setView([latitude, longtitude], 17)

    // Code for the Mapbox API
    // You will need an access token, https://www.mapbox.com/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox.streets',
      accessToken: '<PERSONAL ACCESS TOKEN HERE>'
    }).addTo(mymap)

    // Adds a marker to your current location
    var marker = L.marker([latitude, longtitude], {
    }).addTo(mymap)
  })
})
