import { fetchData } from './Fetch';

const createTodayData = (todayData, today) => {
    todayData.forEach((hourData) => {
        const hour = {};
        hour.weatherDataCelsius = createHourObj(
            hourData.time.split(' ')[1],
            hourData.temp_c,
            hourData.condition.icon
        );
        hour.weatherDataFahrenheit = createHourObj(
            hourData.time.split(' ')[1],
            hourData.temp_f,
            hourData.condition.icon
        );
        today.push(hour);
    });
};

const createDaysData = (forecastData, days) => {
    forecastData.forEach((dayData) => {
        const day = {};
        day.weatherDataCelsius = createWeatherObj(
            dayData.day.maxtemp_c,
            dayData.day.mintemp_c,
            dayData.day.avgtemp_c,
            dayData.day.avghumidity,
            dayData.day.daily_chance_of_rain,
            dayData.day.condition.text,
            dayData.day.condition.icon
        );
        day.weatherDataFahrenheit = createWeatherObj(
            dayData.day.maxtemp_f,
            dayData.day.mintemp_f,
            dayData.day.avgtemp_f,
            dayData.day.avghumidity,
            dayData.day.daily_chance_of_rain,
            dayData.day.condition.text,
            dayData.day.condition.icon
        );
        days.push(day);
    });
};

const getWeatherData = async (input = 'Singapore') => {
    try {
        // data for all 3 days
        const response = await fetchData(input);
        const forecastData = response.forecast.forecastday;

        // get country data
        const countryData = response.location;
        const country = createCountryObj(
            countryData.name,
            countryData.country,
            countryData.localtime
        );

        // today's data
        const today = [];
        const todayData = forecastData[0].hour;
        createTodayData(todayData, today);

        // forecast data
        const days = [];
        createDaysData(forecastData, days);

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

export { getWeatherData, createCountryObj, createHourObj, createWeatherObj };
