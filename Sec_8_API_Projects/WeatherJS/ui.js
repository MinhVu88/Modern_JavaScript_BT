class UI {
    constructor() {
        this.location = document.querySelector('#location');
        this.weather_description = document.querySelector('#weather-description');
        this.temperature = document.querySelector('#temperature');
        this.weather_icon = document.querySelector('#weather-icon');
        this.weather_details = document.querySelector('#weather-details');
        this.humidity = document.querySelector('#humidity');
        this.dewpoint = document.querySelector('#dewpoint');
        this.wind = document.querySelector('#wind');
    };

    insert(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.weather_description.textContent = weather.weather[0].description;
        this.temperature.textContent = `Temperature: ${weather.main.temp}°C`;
        this.weather_icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`;
    };
};