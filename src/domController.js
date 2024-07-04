import Hour from './Hour';
import Day from './Day';
import Country from './Country';
import { getWeatherData } from './logic';

let DATA;

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
    const description = document.querySelector('.description-container > p');

    hourly.textContent = '';
    daysContainer.textContent = '';
    countryTitle.textContent = '';
    timeTitle.textContent = '';
    minDom.textContent = '';
    maxDom.textContent = '';
    avgDom.textContent = '';
    humidityDom.textContent = '';
    chanceDom.textContent = '';
    description.textContent = "Today's Description: ";
}

const initMeasurementBtn = () => {
    const measurementBtn = document.querySelector('.measurement');
    let measurement = measurementBtn.getAttribute('data');
    measurementBtn.addEventListener('click', () => {
        if (measurement === 'weatherDataCelsius') {
            measurementBtn.setAttribute('data', 'weatherDataFahrenheit');
        } else {
            measurementBtn.setAttribute('data', 'weatherDataCelsius');
        }
        measurement =
            measurement === 'weatherDataCelsius'
                ? 'weatherDataFahrenheit'
                : 'weatherDataCelsius';
        measurementBtn.textContent =
            measurement === 'weatherDataCelsius' ? '\u00B0C' : '\u00B0F';

        resetDom();
        updateDom(measurement);
    });
};

const initCloseBtn = () => {
    const closeBtn = document.querySelector('#close');
    closeBtn.addEventListener('click', () => {
        document.querySelector('dialog').close();
    });
};

const createAllHours = (measurement) => {
    const hourly = document.querySelector('.hourly-forecast-container');
    DATA.today.forEach((hour) => {
        const currentHour = new Hour(
            hour[measurement].time,
            hour[measurement].icon,
            hour[measurement].temp
        );
        hourly.appendChild(currentHour.createHourDom(measurement));
    });
};

const createAllDays = (measurement) => {
    const daysContainer = document.querySelector('.days-container');
    DATA.days.forEach((day) => {
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
};

const updateCurrentDay = (currentDay, measurement) => {
    updateForecast(
        currentDay[measurement].max,
        currentDay[measurement].min,
        currentDay[measurement].avg,
        currentDay[measurement].humidity,
        currentDay[measurement].rain,
        currentDay[measurement].description,
        measurement
    );
};

const updateCountry = () => {
    const userCountry = new Country(
        DATA.country.name,
        DATA.country.country,
        DATA.country.time
    );
    userCountry.editCountryDom();
};

const updateDom = (measurement) => {
    // create every hour and every 3 days data
    createAllHours(measurement);
    createAllDays(measurement);

    // update today's info
    const currentDay = DATA.days[0];
    updateCurrentDay(currentDay, measurement);
    updateCountry();
};

const initForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        // prevent submit behaviour
        e.preventDefault();

        let measurement = document
            .querySelector('.measurement')
            .getAttribute('data');

        DATA = await getWeatherData(document.querySelector('input').value);
        resetDom();
        updateDom(measurement);
    });
};

function domController() {
    initMeasurementBtn();
    initCloseBtn();
    initForm();
}

export { updateForecast, resetDom, domController };
