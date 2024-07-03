import './styles.css';

// fetch(
//     'https://api.weatherapi.com/v1/current.json?key=91e2728ed3854429add53229242906&q=singapore'
// )
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

class Country {
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

class Hour {
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

class Day {
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

function updateForecast(
    max,
    min,
    avg,
    humidity,
    chance,
    description,
    measurement
) {
    let maxDom = document.querySelector('#max-temp');
    let minDom = document.querySelector('#min-temp');
    let avgDom = document.querySelector('#avg-temp');
    if (measurement === 'weatherDataCelsius') {
        maxDom.textContent = max + `\u00B0C`;
        minDom.textContent = min + `\u00B0C`;
        avgDom.textContent = avg + `\u00B0C`;
    } else {
        maxDom.textContent = max + `\u00B0F`;
        minDom.textContent = min + `\u00B0F`;
        avgDom.textContent = avg + `\u00B0F`;
    }
    document.querySelector('#humidity').textContent = humidity + '%';
    document.querySelector('#chance-of-rain').textContent = chance + '%';
    document.querySelector('.description-container > p').textContent =
        "Today's Description: " + description;
}

function resetDom() {
    const hourly = document.querySelector('.hourly-forecast-container');
    const daysContainer = document.querySelector('.days-container');
    const countryTitle = document.querySelector('.subheader.country');
    const timeTitle = document.querySelector('.subheader.time');
    const minDom = document.querySelector('#min-temp');
    const maxDom = document.querySelector('#max-temp');
    const avgDom = document.querySelector('#avg-temp');
    const humidityDom = document.querySelector('#humidity');
    const chanceDom = document.querySelector('#chance-of-rain');

    hourly.textContent = '';
    daysContainer.textContent = '';
    countryTitle.textContent = '';
    timeTitle.textContent = '';
    minDom.textContent = '';
    maxDom.textContent = '';
    avgDom.textContent = '';
    humidityDom.textContent = '';
    chanceDom.textContent = '';
}

function handleError(err) {
    const errorDiv = document.querySelector('.error');
    document.querySelector('dialog').showModal();
    const bandage = String.fromCodePoint(0x1f915);
    const angry = String.fromCodePoint(0x1f621);
    if (err.code === 1003) {
        errorDiv.textContent = `Please enter something!! ${bandage}`;
    } else if (err.code === 1006) {
        errorDiv.textContent = `Please enter a valid country!! ${angry}`;
    }
}

function domController() {
    const form = document.querySelector('form');
    const hourly = document.querySelector('.hourly-forecast-container');
    const daysContainer = document.querySelector('.days-container');
    const closeBtn = document.querySelector('#close');
    const measurementBtn = document.querySelector('.measurement');
    let measurement = measurementBtn.getAttribute('data');

    measurementBtn.addEventListener('click', () => {
        measurement =
            measurement === 'weatherDataCelsius'
                ? 'weatherDataFahrenheit'
                : 'weatherDataCelsius';

        measurementBtn.textContent =
            measurement === 'weatherDataCelsius' ? '\u00B0C' : '\u00B0F';
    });

    closeBtn.addEventListener('click', () => {
        document.querySelector('dialog').close();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = await getWeatherData(
            document.querySelector('input').value
        );
        resetDom();
        data.today.forEach((hour) => {
            const currentHour = new Hour(
                hour[measurement].time,
                hour[measurement].icon,
                hour[measurement].temp
            );
            hourly.appendChild(currentHour.createHourDom(measurement));
        });

        data.days.forEach((day) => {
            const currentDay = new Day(
                day[measurement].max,
                day[measurement].min,
                day[measurement].avg,
                day[measurement].humidity,
                day[measurement].rain,
                day[measurement].description,
                day[measurement].icon
            );
            daysContainer.appendChild(
                currentDay.create3DaysForecastDom(measurement)
            );
        });

        const currentDay = data.days[0];
        updateForecast(
            currentDay[measurement].max,
            currentDay[measurement].min,
            currentDay[measurement].avg,
            currentDay[measurement].humidity,
            currentDay[measurement].rain,
            currentDay[measurement].description,
            measurement
        );

        const userCountry = new Country(
            data.country.name,
            data.country.country,
            data.country.time
        );
        userCountry.editCountryDom();
    });
}

const getWeatherData = async (input = 'Singapore') => {
    try {
        // data for all 3 days
        const data = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=${input}&days=3`,
            { mode: 'cors' }
        );
        const response = await data.json();

        // error handler
        if (response.error) handleError(response.error);

        const forecastdata = response.forecast.forecastday;

        // get country data
        const countrydata = response.location;
        const country = createCountryObj(
            countrydata.name,
            countrydata.country,
            countrydata.localtime
        );

        // today's data
        const today = [];
        const todaydata = forecastdata[0].hour;
        todaydata.forEach((hourdata) => {
            const hour = {};
            hour.weatherDataCelsius = createHourObj(
                hourdata.time.split(' ')[1],
                hourdata.temp_c,
                hourdata.condition.icon
            );
            hour.weatherDataFahrenheit = createHourObj(
                hourdata.time.split(' ')[1],
                hourdata.temp_f,
                hourdata.condition.icon
            );
            today.push(hour);
        });

        // forecast data
        const days = [];
        forecastdata.forEach((daydata) => {
            const day = {};
            day.weatherDataCelsius = createWeatherObj(
                daydata.day.maxtemp_c,
                daydata.day.mintemp_c,
                daydata.day.avgtemp_c,
                daydata.day.avghumidity,
                daydata.day.daily_chance_of_rain,
                daydata.day.condition.text,
                daydata.day.condition.icon
            );
            day.weatherDataFahrenheit = createWeatherObj(
                daydata.day.maxtemp_f,
                daydata.day.mintemp_f,
                daydata.day.avgtemp_f,
                daydata.day.avghumidity,
                daydata.day.daily_chance_of_rain,
                daydata.day.condition.text,
                daydata.day.condition.icon
            );
            days.push(day);
        });
        return {
            country,
            today,
            days,
        };
    } catch (error) {
        console.log(error);
    }
};

const createCountryObj = (name, country, time) => {
    return {
        name,
        country,
        time,
    };
};

const createWeatherObj = (max, min, avg, humidity, rain, description, icon) => {
    return {
        max,
        min,
        avg,
        humidity,
        rain,
        description,
        icon,
    };
};

const createHourObj = (time, temp, icon) => {
    return {
        time,
        temp,
        icon,
    };
};

domController();
getWeatherData();
