import './styles.css';
import maxtemp from '../assets/temperature-snow-svgrepo-com.svg';
import mintemp from '../assets/temperature-sun-svgrepo-com.svg';
import avgtemp from '../assets/temperature-low-svgrepo-com.svg';
import humidity from '../assets/humidity-svgrepo-com.svg';
import chanceofrain from '../assets/rain-svgrepo-com.svg';

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

// const img1 = document.createElement('img');
// const day1 = document.querySelector('.min-temp');

// img1.src = maxtemp;
// img1.classList.add('mintempimg', 'svg');
// day1.appendChild(img1);

class Hour {
    constructor(time, img, info) {
        this.time = time;
        this.img = img;
        this.info = info;
    }

    createHourDom() {
        const div = document.createElement('div');
        const hourTime = document.createElement('p');
        const content = document.createElement('p');
        const image = document.createElement('img');

        div.classList.add('hour');
        image.src = `https:` + this.img;
        hourTime.textContent = this.time;
        content.textContent = this.info + `\u00B0C`;

        div.appendChild(hourTime);
        div.appendChild(image);
        div.appendChild(content);

        return div;
    }
}

function domController() {
    // let measurement = 'F';
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = await getWeatherData(
            document.querySelector('input').value
        );
        const hourly = document.querySelector('.hourly-forecast-container');
        hourly.textContent = '';
        data.today.forEach((hour) => {
            const currentHour = new Hour(
                hour.weatherDataCelsius.time,
                hour.weatherDataCelsius.icon,
                hour.weatherDataCelsius.temp
            );
            hourly.appendChild(currentHour.createHourDom());
        });
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
                daydata.day.condition.text
            );
            day.weatherDataFahrenheit = createWeatherObj(
                daydata.day.maxtemp_f,
                daydata.day.mintemp_f,
                daydata.day.avgtemp_f,
                daydata.day.avghumidity,
                daydata.day.daily_chance_of_rain,
                daydata.day.condition.text
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

const createWeatherObj = (max, min, avg, humidity, rain, description) => {
    return {
        max,
        min,
        avg,
        humidity,
        rain,
        description,
    };
};

const createHourObj = (time, temp, icon) => {
    return {
        time,
        temp,
        icon,
    };
};

getWeatherData();
domController();

// create and include weather icon
// const img = document.createElement('img');
// console.log(daydata.day.condition.icon);
