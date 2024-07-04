export default class Day {
    constructor(max, min, avg, humidity, rain, description, icon) {
        this.max = max;
        this.min = min;
        this.avg = avg;
        this.humidity = humidity;
        this.rain = rain;
        this.description = description;
        this.icon = icon;
    }

    create3DaysForecastDom(measurement) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const descriptionContainer = document.createElement('div');
        const avgtemp = document.createElement('p');
        const text = document.createElement('p');
        const chance = document.createElement('p');

        image.src = `https:` + this.icon;
        text.textContent = this.description;
        chance.textContent = this.rain + '%';

        if (measurement === 'weatherDataCelsius') {
            avgtemp.textContent = this.avg + `\u00B0C`;
        } else {
            avgtemp.textContent = this.avg + `\u00B0F`;
        }

        div.classList.add('day-container');
        image.classList.add('svg');
        descriptionContainer.classList.add('day-desc-container');

        descriptionContainer.appendChild(avgtemp);
        descriptionContainer.appendChild(text);
        descriptionContainer.appendChild(chance);

        div.appendChild(image);
        div.appendChild(descriptionContainer);

        return div;
    }
}
