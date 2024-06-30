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
            'https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=singapore&days=3'
        );
        const response = await data.json();
        const forecastdata = response.forecast.forecastday;
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
        console.log(days);
    } catch (error) {
        console.log(error);
    }
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

getWeatherData();

// create and include weather icon
// const img = document.createElement('img');
// console.log(daydata.day.condition.icon);
