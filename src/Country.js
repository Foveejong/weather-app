export default class Country {
    constructor(name, country, time) {
        this.name = name;
        this.country = country;
        this.time = time;
    }

    editCountryDom() {
        const countryTitle = document.querySelector('.subheader.country');
        const timeTitle = document.querySelector('.subheader.time');
        countryTitle.textContent = `${this.name}, ${this.country}`;
        timeTitle.textContent = `${this.time}`;
    }
}
