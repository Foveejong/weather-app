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
        const todayData = await fetch(
            'https://api.weatherapi.com/v1/current.json?key=91e2728ed3854429add53229242906&q=singapore'
        );
        const response = await todayData.json();
        const currentTodayData = response.current;
        const weatherDataCelsius = createWeatherObj(
            currentTodayData.feelslike_c,
            currentTodayData.humidity,
            currentTodayData.temp_c
        );
        const weatherDataFahrenheit = createWeatherObj(
            currentTodayData.feelslike_f,
            currentTodayData.humidity,
            currentTodayData.temp_f
        );
    } catch (error) {
        console.log(error);
    }
};

const createWeatherObj = (feelslike, humidity, temp) => {
    return {
        feelslike,
        humidity,
        temp,
    };
};

getWeatherData();
