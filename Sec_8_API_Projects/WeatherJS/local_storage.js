class Storage {
    constructor() {
        this.city;
        this.country;
        this.default_city = 'Tokyo';
        this.default_country = 'jp';
    };

    getLocation() {
        // check if the keys 'city' & 'country' exist in local storage
        // if they don't, set them to the default values defined in the constructor 
        // if they do, then use the values they contain
        localStorage.getItem('city') === null ? this.city = this.default_city : this.city = localStorage.getItem('city');

        localStorage.getItem('country') === null ? this.country = this.default_country : this.country = localStorage.getItem('country');

        return {city: this.city, country: this.country};
    };

    setLocation(city, country) {
        localStorage.setItem('city', city);

        localStorage.setItem('country', country);
    };
};