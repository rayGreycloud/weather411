// Init 
const weather = new Weather('Portland', 'OR');
const ui = new UI();

// Call getWeather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather function
function getWeather() {
  weather.fetchWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
