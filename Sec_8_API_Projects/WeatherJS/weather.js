class Weather {
    constructor(city, country) {
        this.api_key = 'c1834c65953dc2f9d3b5e49f6d99f546';
        this.city = city;
        this.country = country;
    };

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api_key}`);

        const data = await response.json();

        console.log(data);

        return data;
    };

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    };
};