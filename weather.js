class Weather {
  constructor(city, state) {
    this.apiKey = 'fde70dad8183a324';
    this.city = city;
    this.state = state;
  }
  
  // Fetch weather from API 
  async fetchWeather() {
    const baseURL = `http://api.wunderground.com/api`;
    const location = `${this.state}/${this.city}`;
    
    const response = await fetch(`${baseURL}/${this.apiKey}/conditions/q/${location}.json`);
    
    const responseData = await response.json();
    
    return responseData.current_observation;
  }
  
  // Change weather location 
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
