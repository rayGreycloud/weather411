// Init storage
const storage = new Storage();
// Get stored location data 
const weatherLoc = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLoc.city, weatherLoc.state);
// Init UI
const ui = new UI();

// Call getWeather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event 
document.getElementById('w-change-btn')
  .addEventListener('click', (e) => {
    // Get input values
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Change location
    weather.changeLocation(city, state);
    // Set location in localStorage 
    storage.setLocationData(city, state);
    // Fetch and display weather 
    getWeather();  
    // Close modal 
    $('#locModal').modal('hide');
  });

// Get weather function
function getWeather() {
  weather.fetchWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
