// instantiating classes
const local_storage = new Storage();

const location_object = local_storage.getLocation();

const weather = new Weather(location_object.city, location_object.country);

const ui = new UI();

// declaring methods
const getWeatherData = () => weather.getWeather().then(data => ui.insert(data)).catch(error => console.log(error));

// setting up event handlers
document.addEventListener('DOMContentLoaded', getWeatherData);

// event listener for the modal
document.querySelector('#weather-change-btn').addEventListener('click', () => {
    const city = document.querySelector('#city').value;

    const country = document.querySelector('#country').value;

    weather.changeLocation(city, country);

    local_storage.setLocation(city, country);

    getWeatherData(); // get weather data for a new location

    $('#location_modal').modal('hide'); // JQuery to close the modal
});