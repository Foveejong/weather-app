export default class Hour {
    constructor(time, img, info) {
        this.time = time;
        this.img = img;
        this.info = info;
    }

    createHourDom(measurement) {
        const div = document.createElement('div');
        const hourTime = document.createElement('p');
        const content = document.createElement('p');
        const image = document.createElement('img');

        div.classList.add('hour');
        image.src = `https:` + this.img;
        hourTime.textContent = this.time;
        content.textContent = this.info + `\u00B0C`;

        if (measurement === 'weatherDataCelsius') {
            content.textContent = this.info + `\u00B0C`;
        } else {
            content.textContent = this.info + `\u00B0F`;
        }

        div.appendChild(hourTime);
        div.appendChild(image);
        div.appendChild(content);

        return div;
    }
}
