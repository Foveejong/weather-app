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

const getWeatherData = async () => {
    try {
        // data for all 3 days
        const data = await fetch(
            'https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=singapore&days=3',
            { mode: 'cors' }
        );
        const response = await data.json();
        const forecastdata = response.forecast.forecastday;

        // get country data
        const countrydata = response.location;
        const countrytime = countrydata.localtime.split(' ')[1];
        const country = createCountryObj(
            countrydata.name,
            countrydata.country,
            countrydata.localtime.split(' ')[1]
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
        // console.log(days);
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

// create and include weather icon
// const img = document.createElement('img');
// console.log(daydata.day.condition.icon);
