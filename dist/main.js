/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Country.js":
/*!************************!*\
  !*** ./src/Country.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Country)
/* harmony export */ });
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

/***/ }),

/***/ "./src/Day.js":
/*!********************!*\
  !*** ./src/Day.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Day)
/* harmony export */ });
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

/***/ }),

/***/ "./src/Fetch.js":
/*!**********************!*\
  !*** ./src/Fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _loaderController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaderController */ "./src/loaderController.js");

async function fetchData(input) {
  (0,_loaderController__WEBPACK_IMPORTED_MODULE_0__.addLoader)();
  const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=${input}&days=3`, {
    mode: 'cors'
  });
  const response = await data.json();

  // error handler
  if (response.error) {
    handleError(response.error);
  }
  (0,_loaderController__WEBPACK_IMPORTED_MODULE_0__.removeLoader)();
  return response;
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


/***/ }),

/***/ "./src/Hour.js":
/*!*********************!*\
  !*** ./src/Hour.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hour)
/* harmony export */ });
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

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domController: () => (/* binding */ domController),
/* harmony export */   resetDom: () => (/* binding */ resetDom),
/* harmony export */   updateForecast: () => (/* binding */ updateForecast)
/* harmony export */ });
/* harmony import */ var _Hour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hour */ "./src/Hour.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Day */ "./src/Day.js");
/* harmony import */ var _Country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country */ "./src/Country.js");
/* harmony import */ var _assets_temperature_low_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/temperature-low-svgrepo-com.svg */ "./assets/temperature-low-svgrepo-com.svg");
/* harmony import */ var _assets_temperature_snow_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/temperature-snow-svgrepo-com.svg */ "./assets/temperature-snow-svgrepo-com.svg");
/* harmony import */ var _assets_temperature_sun_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/temperature-sun-svgrepo-com.svg */ "./assets/temperature-sun-svgrepo-com.svg");
/* harmony import */ var _assets_humidity_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/humidity-svgrepo-com.svg */ "./assets/humidity-svgrepo-com.svg");
/* harmony import */ var _assets_rain_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/rain-svgrepo-com.svg */ "./assets/rain-svgrepo-com.svg");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logic */ "./src/logic.js");









let DATA;
const uploadPhotos = () => {
  const minTemp = document.querySelector('.svg.min-temp');
  const maxTemp = document.querySelector('.svg.max-temp');
  const avgTemp = document.querySelector('.svg.avg-temp');
  const humidity = document.querySelector('.svg.humidity');
  const chanceOfRain = document.querySelector('.svg.chance-of-rain');
  minTemp.src = _assets_temperature_snow_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__;
  maxTemp.src = _assets_temperature_sun_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__;
  avgTemp.src = _assets_temperature_low_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
  humidity.src = _assets_humidity_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__;
  chanceOfRain.src = _assets_rain_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__;
};
const updateForecast = (max, min, avg, humidity, chance, description, measurement) => {
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
  document.querySelector('.description-container > p').textContent = "Today's Description: " + description;
};
const resetDom = () => {
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
};
const initMeasurementBtn = () => {
  const measurementBtn = document.querySelector('.measurement');
  let measurement = measurementBtn.getAttribute('data');
  measurementBtn.addEventListener('click', () => {
    if (measurement === 'weatherDataCelsius') {
      measurementBtn.setAttribute('data', 'weatherDataFahrenheit');
    } else {
      measurementBtn.setAttribute('data', 'weatherDataCelsius');
    }
    measurement = measurement === 'weatherDataCelsius' ? 'weatherDataFahrenheit' : 'weatherDataCelsius';
    measurementBtn.textContent = measurement === 'weatherDataCelsius' ? '\u00B0C' : '\u00B0F';
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
const createAllHours = measurement => {
  const hourly = document.querySelector('.hourly-forecast-container');
  DATA.today.forEach(hour => {
    const currentHour = new _Hour__WEBPACK_IMPORTED_MODULE_0__["default"](hour[measurement].time, hour[measurement].icon, hour[measurement].temp);
    hourly.appendChild(currentHour.createHourDom(measurement));
  });
};
const createAllDays = measurement => {
  const daysContainer = document.querySelector('.days-container');
  DATA.days.forEach(day => {
    const currentDay = new _Day__WEBPACK_IMPORTED_MODULE_1__["default"](day[measurement].max, day[measurement].min, day[measurement].avg, day[measurement].humidity, day[measurement].rain, day[measurement].description, day[measurement].icon);
    daysContainer.appendChild(currentDay.create3DaysForecastDom(measurement));
  });
};
const updateCurrentDay = (currentDay, measurement) => {
  updateForecast(currentDay[measurement].max, currentDay[measurement].min, currentDay[measurement].avg, currentDay[measurement].humidity, currentDay[measurement].rain, currentDay[measurement].description, measurement);
};
const updateCountry = () => {
  const userCountry = new _Country__WEBPACK_IMPORTED_MODULE_2__["default"](DATA.country.name, DATA.country.country, DATA.country.time);
  userCountry.editCountryDom();
};
const updateDom = measurement => {
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
  form.addEventListener('submit', async e => {
    // prevent submit behaviour
    e.preventDefault();
    let measurement = document.querySelector('.measurement').getAttribute('data');
    DATA = await (0,_logic__WEBPACK_IMPORTED_MODULE_8__.getWeatherData)(document.querySelector('input').value);
    resetDom();
    updateDom(measurement);
  });
};
function domController() {
  uploadPhotos();
  initMeasurementBtn();
  initCloseBtn();
  initForm();
}


/***/ }),

/***/ "./src/loaderController.js":
/*!*********************************!*\
  !*** ./src/loaderController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoader: () => (/* binding */ addLoader),
/* harmony export */   removeLoader: () => (/* binding */ removeLoader)
/* harmony export */ });
function addLoader() {
  const loader = document.createElement('div');
  const body = document.querySelector('body');
  loader.classList.add('loader');
  body.appendChild(loader);
}
function removeLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    document.querySelector('.loader').classList.add('loader-hidden');
    document.querySelector('.loader').addEventListener('transitionend', () => {
      document.querySelector('.loader').remove();
    });
  }
}


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCountryObj: () => (/* binding */ createCountryObj),
/* harmony export */   createHourObj: () => (/* binding */ createHourObj),
/* harmony export */   createWeatherObj: () => (/* binding */ createWeatherObj),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fetch */ "./src/Fetch.js");

const createTodayData = (todayData, today) => {
  todayData.forEach(hourData => {
    const hour = {};
    hour.weatherDataCelsius = createHourObj(hourData.time.split(' ')[1], hourData.temp_c, hourData.condition.icon);
    hour.weatherDataFahrenheit = createHourObj(hourData.time.split(' ')[1], hourData.temp_f, hourData.condition.icon);
    today.push(hour);
  });
};
const createDaysData = (forecastData, days) => {
  forecastData.forEach(dayData => {
    const day = {};
    day.weatherDataCelsius = createWeatherObj(dayData.day.maxtemp_c, dayData.day.mintemp_c, dayData.day.avgtemp_c, dayData.day.avghumidity, dayData.day.daily_chance_of_rain, dayData.day.condition.text, dayData.day.condition.icon);
    day.weatherDataFahrenheit = createWeatherObj(dayData.day.maxtemp_f, dayData.day.mintemp_f, dayData.day.avgtemp_f, dayData.day.avghumidity, dayData.day.daily_chance_of_rain, dayData.day.condition.text, dayData.day.condition.icon);
    days.push(day);
  });
};
const getWeatherData = async function () {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Singapore';
  try {
    // data for all 3 days
    const response = await (0,_Fetch__WEBPACK_IMPORTED_MODULE_0__.fetchData)(input);
    const forecastData = response.forecast.forecastday;

    // get country data
    const countryData = response.location;
    const country = createCountryObj(countryData.name, countryData.country, countryData.localtime);

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
      days
    };
  } catch (error) {
    console.log(error);
  }
};
const createCountryObj = (name, country, time) => {
  return {
    name,
    country,
    time
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
    icon
  };
};
const createHourObj = (time, temp, icon) => {
  return {
    time,
    temp,
    icon
  };
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
}

::selection {
    background-color: plum;
}

:root {
    --standard-margin: 1rem;
}

dialog {
    background-color: black;
    border-radius: 20px;
    position: absolute;
    top: 40%;
    margin-left: auto; 
    margin-right: auto; 
}

.dialog-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 35px;
}

.error {
    font-size: 1.5rem;
}

::backdrop {
    background-color: black;
}

body {
    margin: 4rem 10rem;
    background-color: black;
}

.svg {
    height: 4rem;
    width: 4rem;
}

.asset {
    filter: invert(100%);
}

.title {
    font-size: 3rem;
}

.subheader {
    font-size: 1.5rem;
}

.top-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.form-container {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 1rem;
}

.searchbar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

button[type="button"]{
    text-align: center;
    width: 50px;
}

input, button {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    outline: none;
}

input {
    border: none;
    color: black;
}

button {
    background-color: rgb(93, 93, 93);
    border: 1px white solid;
    cursor: pointer;
}

.page-container {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    min-height: 50vh;
    gap: 2rem;
}

.sidebar {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
    min-width: 250px;
}

.sidebar .subheader {
    padding: 0 0 1rem 0;
}

.day-desc-container:nth-child(2) {
    white-space: normal;
}

.today-info-container {
    display: flex;
    flex-direction: column;
}

.today-info-container > * {
    flex: 1;
}

.forecast-days-container {
    display: flex;
    flex-direction: column;
}

.days-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}

.days-container > * {
    flex: 1;
}

.day-container {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.day-desc-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.content-container {
    flex: 3;
    display: grid;
    grid-template-rows: 1fr;
}

.forecast {
    font-size: 2.5rem;
}

.full-forecast-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.info-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 1rem;
}

.each-info-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    border: 1px solid white;
    border-radius: 10px;
    padding: 1rem;
}

.img-text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img.min-temp {
    filter: invert(55%) sepia(100%) hue-rotate(150deg) saturate(3);
}

img.max-temp {
    filter: invert(55%) sepia(100%) hue-rotate(340deg) saturate(3);
}

img.avg-temp {
    filter: invert(60%) sepia(100%) hue-rotate(300deg) saturate(5);
}

img.humidity {
    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);
}

img.chance-of-rain {
    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);
}

.info {
    min-width: 150px;
    flex: 1;
}

.description-container{
    display: flex;
    align-items: flex-end;
}

.hourly-forecast-container {
    padding: 1rem 1rem 1rem 0;
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: clamp(125px, 20%, 200px);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;
}

.hourly-forecast-container > * {
    scroll-snap-align: start;
    min-width: 100px;
}

.hour {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 175px;
    border: 1px solid white;
    border-radius: 15px;
    > * {
        border: none;
    }
}

.hour > p {
    flex: 1;
    display: flex;
    align-items: center;
}

.hour > img {
    height: 5rem;
    width: 5rem;
    flex: 2;
}

.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    z-index: 1;
    transition: opacity 0.75s, visibility 0.75s;
}

.loader::after {
    z-index: 1;
    content: "";
    height: 75px;
    width: 75px;
    border: 15px solid #dddddd;
    border-radius: 50%;
    border-top-color: rgb(255, 117, 255);
    animation: loading 0.75s ease infinite;
}

.loader-hidden {
    opacity: 0;
    visibility: hidden;
}

@keyframes loading {
    from { transform: rotate(0turn) }
    to { transform: rotate(1turn) }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    color: white;\n}\n\n::selection {\n    background-color: plum;\n}\n\n:root {\n    --standard-margin: 1rem;\n}\n\ndialog {\n    background-color: black;\n    border-radius: 20px;\n    position: absolute;\n    top: 40%;\n    margin-left: auto; \n    margin-right: auto; \n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 35px;\n}\n\n.error {\n    font-size: 1.5rem;\n}\n\n::backdrop {\n    background-color: black;\n}\n\nbody {\n    margin: 4rem 10rem;\n    background-color: black;\n}\n\n.svg {\n    height: 4rem;\n    width: 4rem;\n}\n\n.asset {\n    filter: invert(100%);\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.subheader {\n    font-size: 1.5rem;\n}\n\n.top-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n.form-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    gap: 1rem;\n}\n\n.searchbar-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n}\n\nbutton[type=\"button\"]{\n    text-align: center;\n    width: 50px;\n}\n\ninput, button {\n    font-size: 1.2rem;\n    padding: 10px;\n    border-radius: 10px;\n    outline: none;\n}\n\ninput {\n    border: none;\n    color: black;\n}\n\nbutton {\n    background-color: rgb(93, 93, 93);\n    border: 1px white solid;\n    cursor: pointer;\n}\n\n.page-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    min-height: 50vh;\n    gap: 2rem;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 2rem;\n    min-width: 250px;\n}\n\n.sidebar .subheader {\n    padding: 0 0 1rem 0;\n}\n\n.day-desc-container:nth-child(2) {\n    white-space: normal;\n}\n\n.today-info-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.today-info-container > * {\n    flex: 1;\n}\n\n.forecast-days-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.days-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    \n}\n\n.days-container > * {\n    flex: 1;\n}\n\n.day-container {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.day-desc-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.content-container {\n    flex: 3;\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.forecast {\n    font-size: 2.5rem;\n}\n\n.full-forecast-container {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.info-container {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    gap: 1rem;\n}\n\n.each-info-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    gap: 1rem;\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 1rem;\n}\n\n.img-text-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nimg.min-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(150deg) saturate(3);\n}\n\nimg.max-temp {\n    filter: invert(55%) sepia(100%) hue-rotate(340deg) saturate(3);\n}\n\nimg.avg-temp {\n    filter: invert(60%) sepia(100%) hue-rotate(300deg) saturate(5);\n}\n\nimg.humidity {\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\nimg.chance-of-rain {\n    filter: invert(30%) sepia(100%) hue-rotate(150deg) saturate(10);\n}\n\n.info {\n    min-width: 150px;\n    flex: 1;\n}\n\n.description-container{\n    display: flex;\n    align-items: flex-end;\n}\n\n.hourly-forecast-container {\n    padding: 1rem 1rem 1rem 0;\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    grid-auto-columns: clamp(125px, 20%, 200px);\n    overflow-x: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-padding: 1rem;\n}\n\n.hourly-forecast-container > * {\n    scroll-snap-align: start;\n    min-width: 100px;\n}\n\n.hour {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 175px;\n    border: 1px solid white;\n    border-radius: 15px;\n    > * {\n        border: none;\n    }\n}\n\n.hour > p {\n    flex: 1;\n    display: flex;\n    align-items: center;\n}\n\n.hour > img {\n    height: 5rem;\n    width: 5rem;\n    flex: 2;\n}\n\n.loader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100dvw;\n    height: 100dvh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    z-index: 1;\n    transition: opacity 0.75s, visibility 0.75s;\n}\n\n.loader::after {\n    z-index: 1;\n    content: \"\";\n    height: 75px;\n    width: 75px;\n    border: 15px solid #dddddd;\n    border-radius: 50%;\n    border-top-color: rgb(255, 117, 255);\n    animation: loading 0.75s ease infinite;\n}\n\n.loader-hidden {\n    opacity: 0;\n    visibility: hidden;\n}\n\n@keyframes loading {\n    from { transform: rotate(0turn) }\n    to { transform: rotate(1turn) }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/humidity-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./assets/humidity-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e53a36a1156d4bfd58f.svg";

/***/ }),

/***/ "./assets/rain-svgrepo-com.svg":
/*!*************************************!*\
  !*** ./assets/rain-svgrepo-com.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8210ddbf93922e140989.svg";

/***/ }),

/***/ "./assets/temperature-low-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./assets/temperature-low-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8039ff1e2c4b9932bbd7.svg";

/***/ }),

/***/ "./assets/temperature-snow-svgrepo-com.svg":
/*!*************************************************!*\
  !*** ./assets/temperature-snow-svgrepo-com.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76802e1b07fd461c2ff5.svg";

/***/ }),

/***/ "./assets/temperature-sun-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./assets/temperature-sun-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9c3d27baaf3003c3ffe.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");



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

(0,_domController__WEBPACK_IMPORTED_MODULE_1__.domController)();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFP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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7QUNBc0I7QUFDMEI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXVGLDZEQUFhLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQ291bnRyeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9EYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvSG91ci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvYWRlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvdW50cnksIHRpbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBlZGl0Q291bnRyeURvbSgpIHtcbiAgICAgICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgICAgIGNvbnN0IHRpbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJoZWFkZXIudGltZScpO1xuICAgICAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9LCAke3RoaXMuY291bnRyeX1gO1xuICAgICAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpbWV9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkge1xuICAgIGNvbnN0cnVjdG9yKG1heCwgbWluLCBhdmcsIGh1bWlkaXR5LCByYWluLCBkZXNjcmlwdGlvbiwgaWNvbikge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMuYXZnID0gYXZnO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgICAgIHRoaXMucmFpbiA9IHJhaW47XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG5cbiAgICBjcmVhdGUzRGF5c0ZvcmVjYXN0RG9tKG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhdmd0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gYGh0dHBzOmAgKyB0aGlzLmljb247XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjaGFuY2UudGV4dENvbnRlbnQgPSB0aGlzLnJhaW4gKyAnJSc7XG5cbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgYXZndGVtcC50ZXh0Q29udGVudCA9IHRoaXMuYXZnICsgYFxcdTAwQjBDYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF2Z3RlbXAudGV4dENvbnRlbnQgPSB0aGlzLmF2ZyArIGBcXHUwMEIwRmA7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzdmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWRlc2MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYXZndGVtcCk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuY2UpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhZGRMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gJy4vbG9hZGVyQ29udHJvbGxlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpbnB1dCkge1xuICAgIGFkZExvYWRlcigpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTkxZTI3MjhlZDM4NTQ0MjlhZGQ1MzIyOTI0MjkwNiZxPSR7aW5wdXR9JmRheXM9M2AsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG5cbiAgICAvLyBlcnJvciBoYW5kbGVyXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG4gICAgcmVtb3ZlTG9hZGVyKCk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgYmFuZGFnZSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KDB4MWY5MTUpO1xuICAgIGNvbnN0IGFuZ3J5ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoMHgxZjYyMSk7XG4gICAgaWYgKGVyci5jb2RlID09PSAxMDAzKSB7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gYFBsZWFzZSBlbnRlciBzb21ldGhpbmchISAke2JhbmRhZ2V9YDtcbiAgICB9IGVsc2UgaWYgKGVyci5jb2RlID09PSAxMDA2KSB7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gYFBsZWFzZSBlbnRlciBhIHZhbGlkIGNvdW50cnkhISAke2FuZ3J5fWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBmZXRjaERhdGEgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWUsIGltZywgaW5mbykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICB9XG5cbiAgICBjcmVhdGVIb3VyRG9tKG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBob3VyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG91cicpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cHM6YCArIHRoaXMuaW1nO1xuICAgICAgICBob3VyVGltZS50ZXh0Q29udGVudCA9IHRoaXMudGltZTtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5mbyArIGBcXHUwMEIwQ2A7XG5cbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5mbyArIGBcXHUwMEIwQ2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBGYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChob3VyVGltZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbiIsImltcG9ydCBIb3VyIGZyb20gJy4vSG91cic7XG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5JztcbmltcG9ydCBDb3VudHJ5IGZyb20gJy4vQ291bnRyeSc7XG5pbXBvcnQgYXZnVGVtcEltZyBmcm9tICcuLi9hc3NldHMvdGVtcGVyYXR1cmUtbG93LXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgbWluVGVtcEltZyBmcm9tICcuLi9hc3NldHMvdGVtcGVyYXR1cmUtc25vdy1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IG1heFRlbXBJbWcgZnJvbSAnLi4vYXNzZXRzL3RlbXBlcmF0dXJlLXN1bi1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGh1bWlkaXR5SW1nIGZyb20gJy4uL2Fzc2V0cy9odW1pZGl0eS1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IGNoYW5jZU9mUmFpbkltZyBmcm9tICcuLi9hc3NldHMvcmFpbi1zdmdyZXBvLWNvbS5zdmcnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tICcuL2xvZ2ljJztcblxubGV0IERBVEE7XG5cbmNvbnN0IHVwbG9hZFBob3RvcyA9ICgpID0+IHtcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN2Zy5taW4tdGVtcCcpO1xuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnLm1heC10ZW1wJyk7XG4gICAgY29uc3QgYXZnVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdmcuYXZnLXRlbXAnKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdmcuaHVtaWRpdHknKTtcbiAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnLmNoYW5jZS1vZi1yYWluJyk7XG5cbiAgICBtaW5UZW1wLnNyYyA9IG1pblRlbXBJbWc7XG4gICAgbWF4VGVtcC5zcmMgPSBtYXhUZW1wSW1nO1xuICAgIGF2Z1RlbXAuc3JjID0gYXZnVGVtcEltZztcbiAgICBodW1pZGl0eS5zcmMgPSBodW1pZGl0eUltZztcbiAgICBjaGFuY2VPZlJhaW4uc3JjID0gY2hhbmNlT2ZSYWluSW1nO1xufTtcblxuY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoXG4gICAgbWF4LFxuICAgIG1pbixcbiAgICBhdmcsXG4gICAgaHVtaWRpdHksXG4gICAgY2hhbmNlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG1lYXN1cmVtZW50XG4pID0+IHtcbiAgICBsZXQgbWF4RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heC10ZW1wJyk7XG4gICAgbGV0IG1pbkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdGVtcCcpO1xuICAgIGxldCBhdmdEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZnLXRlbXAnKTtcbiAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgIG1heERvbS50ZXh0Q29udGVudCA9IG1heCArIGBcXHUwMEIwQ2A7XG4gICAgICAgIG1pbkRvbS50ZXh0Q29udGVudCA9IG1pbiArIGBcXHUwMEIwQ2A7XG4gICAgICAgIGF2Z0RvbS50ZXh0Q29udGVudCA9IGF2ZyArIGBcXHUwMEIwQ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWF4RG9tLnRleHRDb250ZW50ID0gbWF4ICsgYFxcdTAwQjBGYDtcbiAgICAgICAgbWluRG9tLnRleHRDb250ZW50ID0gbWluICsgYFxcdTAwQjBGYDtcbiAgICAgICAgYXZnRG9tLnRleHRDb250ZW50ID0gYXZnICsgYFxcdTAwQjBGYDtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5JykudGV4dENvbnRlbnQgPSBodW1pZGl0eSArICclJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4nKS50ZXh0Q29udGVudCA9IGNoYW5jZSArICclJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJUb2RheSdzIERlc2NyaXB0aW9uOiBcIiArIGRlc2NyaXB0aW9uO1xufTtcblxuY29uc3QgcmVzZXREb20gPSAoKSA9PiB7XG4gICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXlzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgY29uc3QgdGltZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci50aW1lJyk7XG4gICAgY29uc3QgbWluRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi10ZW1wJyk7XG4gICAgY29uc3QgbWF4RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heC10ZW1wJyk7XG4gICAgY29uc3QgYXZnRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F2Zy10ZW1wJyk7XG4gICAgY29uc3QgaHVtaWRpdHlEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbiAgICBjb25zdCBjaGFuY2VEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jb250YWluZXIgPiBwJyk7XG5cbiAgICBob3VybHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBkYXlzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgY291bnRyeVRpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgdGltZVRpdGxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWluRG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWF4RG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgYXZnRG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgaHVtaWRpdHlEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBjaGFuY2VEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBEZXNjcmlwdGlvbjogXCI7XG59O1xuXG5jb25zdCBpbml0TWVhc3VyZW1lbnRCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVhc3VyZW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhc3VyZW1lbnQnKTtcbiAgICBsZXQgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICBtZWFzdXJlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgbWVhc3VyZW1lbnRCdG4uc2V0QXR0cmlidXRlKCdkYXRhJywgJ3dlYXRoZXJEYXRhRmFocmVuaGVpdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVhc3VyZW1lbnRCdG4uc2V0QXR0cmlidXRlKCdkYXRhJywgJ3dlYXRoZXJEYXRhQ2Vsc2l1cycpO1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVtZW50ID1cbiAgICAgICAgICAgIG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJ1xuICAgICAgICAgICAgICAgID8gJ3dlYXRoZXJEYXRhRmFocmVuaGVpdCdcbiAgICAgICAgICAgICAgICA6ICd3ZWF0aGVyRGF0YUNlbHNpdXMnO1xuICAgICAgICBtZWFzdXJlbWVudEJ0bi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cycgPyAnXFx1MDBCMEMnIDogJ1xcdTAwQjBGJztcblxuICAgICAgICByZXNldERvbSgpO1xuICAgICAgICB1cGRhdGVEb20obWVhc3VyZW1lbnQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgaW5pdENsb3NlQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpLmNsb3NlKCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVBbGxIb3VycyA9IChtZWFzdXJlbWVudCkgPT4ge1xuICAgIGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyJyk7XG4gICAgREFUQS50b2RheS5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbmV3IEhvdXIoXG4gICAgICAgICAgICBob3VyW21lYXN1cmVtZW50XS50aW1lLFxuICAgICAgICAgICAgaG91clttZWFzdXJlbWVudF0uaWNvbixcbiAgICAgICAgICAgIGhvdXJbbWVhc3VyZW1lbnRdLnRlbXBcbiAgICAgICAgKTtcbiAgICAgICAgaG91cmx5LmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyLmNyZWF0ZUhvdXJEb20obWVhc3VyZW1lbnQpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFsbERheXMgPSAobWVhc3VyZW1lbnQpID0+IHtcbiAgICBjb25zdCBkYXlzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheXMtY29udGFpbmVyJyk7XG4gICAgREFUQS5kYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERheShcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0ubWF4LFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5taW4sXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLmF2ZyxcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0uaHVtaWRpdHksXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLnJhaW4sXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5pY29uXG4gICAgICAgICk7XG4gICAgICAgIGRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjdXJyZW50RGF5LmNyZWF0ZTNEYXlzRm9yZWNhc3REb20obWVhc3VyZW1lbnQpXG4gICAgICAgICk7XG4gICAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVDdXJyZW50RGF5ID0gKGN1cnJlbnREYXksIG1lYXN1cmVtZW50KSA9PiB7XG4gICAgdXBkYXRlRm9yZWNhc3QoXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLm1heCxcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0ubWluLFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5hdmcsXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLmh1bWlkaXR5LFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5yYWluLFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5kZXNjcmlwdGlvbixcbiAgICAgICAgbWVhc3VyZW1lbnRcbiAgICApO1xufTtcblxuY29uc3QgdXBkYXRlQ291bnRyeSA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyQ291bnRyeSA9IG5ldyBDb3VudHJ5KFxuICAgICAgICBEQVRBLmNvdW50cnkubmFtZSxcbiAgICAgICAgREFUQS5jb3VudHJ5LmNvdW50cnksXG4gICAgICAgIERBVEEuY291bnRyeS50aW1lXG4gICAgKTtcbiAgICB1c2VyQ291bnRyeS5lZGl0Q291bnRyeURvbSgpO1xufTtcblxuY29uc3QgdXBkYXRlRG9tID0gKG1lYXN1cmVtZW50KSA9PiB7XG4gICAgLy8gY3JlYXRlIGV2ZXJ5IGhvdXIgYW5kIGV2ZXJ5IDMgZGF5cyBkYXRhXG4gICAgY3JlYXRlQWxsSG91cnMobWVhc3VyZW1lbnQpO1xuICAgIGNyZWF0ZUFsbERheXMobWVhc3VyZW1lbnQpO1xuXG4gICAgLy8gdXBkYXRlIHRvZGF5J3MgaW5mb1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSBEQVRBLmRheXNbMF07XG4gICAgdXBkYXRlQ3VycmVudERheShjdXJyZW50RGF5LCBtZWFzdXJlbWVudCk7XG4gICAgdXBkYXRlQ291bnRyeSgpO1xufTtcblxuY29uc3QgaW5pdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIC8vIHByZXZlbnQgc3VibWl0IGJlaGF2aW91clxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG1lYXN1cmVtZW50ID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWVhc3VyZW1lbnQnKVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuXG4gICAgICAgIERBVEEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgcmVzZXREb20oKTtcbiAgICAgICAgdXBkYXRlRG9tKG1lYXN1cmVtZW50KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGRvbUNvbnRyb2xsZXIoKSB7XG4gICAgdXBsb2FkUGhvdG9zKCk7XG4gICAgaW5pdE1lYXN1cmVtZW50QnRuKCk7XG4gICAgaW5pdENsb3NlQnRuKCk7XG4gICAgaW5pdEZvcm0oKTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlRm9yZWNhc3QsIHJlc2V0RG9tLCBkb21Db250cm9sbGVyIH07XG4iLCJmdW5jdGlvbiBhZGRMb2FkZXIoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChsb2FkZXIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkZXIoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgIGlmIChsb2FkZXIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLmNsYXNzTGlzdC5hZGQoJ2xvYWRlci1oaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJylcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkTG9hZGVyLCByZW1vdmVMb2FkZXIgfTtcbiIsImltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vRmV0Y2gnO1xuXG5jb25zdCBjcmVhdGVUb2RheURhdGEgPSAodG9kYXlEYXRhLCB0b2RheSkgPT4ge1xuICAgIHRvZGF5RGF0YS5mb3JFYWNoKChob3VyRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBob3VyID0ge307XG4gICAgICAgIGhvdXIud2VhdGhlckRhdGFDZWxzaXVzID0gY3JlYXRlSG91ck9iaihcbiAgICAgICAgICAgIGhvdXJEYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIGhvdXJEYXRhLnRlbXBfYyxcbiAgICAgICAgICAgIGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIGhvdXIud2VhdGhlckRhdGFGYWhyZW5oZWl0ID0gY3JlYXRlSG91ck9iaihcbiAgICAgICAgICAgIGhvdXJEYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIGhvdXJEYXRhLnRlbXBfZixcbiAgICAgICAgICAgIGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIHRvZGF5LnB1c2goaG91cik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEYXlzRGF0YSA9IChmb3JlY2FzdERhdGEsIGRheXMpID0+IHtcbiAgICBmb3JlY2FzdERhdGEuZm9yRWFjaCgoZGF5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBkYXkgPSB7fTtcbiAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cyA9IGNyZWF0ZVdlYXRoZXJPYmooXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgICAgICApO1xuICAgICAgICBkYXkud2VhdGhlckRhdGFGYWhyZW5oZWl0ID0gY3JlYXRlV2VhdGhlck9iaihcbiAgICAgICAgICAgIGRheURhdGEuZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmF2Z3RlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIGRheXMucHVzaChkYXkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoaW5wdXQgPSAnU2luZ2Fwb3JlJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGRhdGEgZm9yIGFsbCAzIGRheXNcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoaW5wdXQpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkYXRhXG4gICAgICAgIGNvbnN0IGNvdW50cnlEYXRhID0gcmVzcG9uc2UubG9jYXRpb247XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBjcmVhdGVDb3VudHJ5T2JqKFxuICAgICAgICAgICAgY291bnRyeURhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLmNvdW50cnksXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5sb2NhbHRpbWVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0b2RheSdzIGRhdGFcbiAgICAgICAgY29uc3QgdG9kYXkgPSBbXTtcbiAgICAgICAgY29uc3QgdG9kYXlEYXRhID0gZm9yZWNhc3REYXRhWzBdLmhvdXI7XG4gICAgICAgIGNyZWF0ZVRvZGF5RGF0YSh0b2RheURhdGEsIHRvZGF5KTtcblxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY3JlYXRlRGF5c0RhdGEoZm9yZWNhc3REYXRhLCBkYXlzKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICAgIHRvZGF5LFxuICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ291bnRyeU9iaiA9IChuYW1lLCBjb3VudHJ5LCB0aW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgdGltZSxcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlV2VhdGhlck9iaiA9IChtYXgsIG1pbiwgYXZnLCBodW1pZGl0eSwgcmFpbiwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgYXZnLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgcmFpbixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvdXJPYmogPSAodGltZSwgdGVtcCwgaWNvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpbWUsXG4gICAgICAgIHRlbXAsXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBjcmVhdGVDb3VudHJ5T2JqLCBjcmVhdGVIb3VyT2JqLCBjcmVhdGVXZWF0aGVyT2JqIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xufVxuXG46cm9vdCB7XG4gICAgLS1zdGFuZGFyZC1tYXJnaW46IDFyZW07XG59XG5cbmRpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDRyZW0gMTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zdmcge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogNHJlbTtcbn1cblxuLmFzc2V0IHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5zdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5zZWFyY2hiYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGViYXIgLnN1YmhlYWRlciB7XG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbn1cblxuLmRheS1kZXNjLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2RheS1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kYXktaW5mby1jb250YWluZXIgPiAqIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRheXMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgXG59XG5cbi5kYXlzLWNvbnRhaW5lciA+ICoge1xuICAgIGZsZXg6IDE7XG59XG5cbi5kYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5LWRlc2MtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBmbGV4OiAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5mb3JlY2FzdCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5mdWxsLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmVhY2gtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5pbWctdGV4dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZy5taW4tdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMyk7XG59XG5cbmltZy5tYXgtdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDM0MGRlZykgc2F0dXJhdGUoMyk7XG59XG5cbmltZy5hdmctdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDMwMGRlZykgc2F0dXJhdGUoNSk7XG59XG5cbmltZy5odW1pZGl0eSB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xufVxuXG5pbWcuY2hhbmNlLW9mLXJhaW4ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDMwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDEwKTtcbn1cblxuLmluZm8ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgZmxleDogMTtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLWF1dG8tY29sdW1uczogY2xhbXAoMTI1cHgsIDIwJSwgMjAwcHgpO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICBzY3JvbGwtcGFkZGluZzogMXJlbTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIgPiAqIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmhvdXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgPiAqIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuLmhvdXIgPiBwIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvdXIgPiBpbWcge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBmbGV4OiAyO1xufVxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMGR2dztcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xufVxuXG4ubG9hZGVyOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBib3JkZXI6IDE1cHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDI1NSwgMTE3LCAyNTUpO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xufVxuXG4ubG9hZGVyLWhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKSB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybikgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wi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QkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTyx5QkFBeUI7SUFDaEMsS0FBSyx5QkFBeUI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc3RhbmRhcmQtbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMzVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogNHJlbSAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYXNzZXQge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uc3ViaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b3AtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNlYXJjaGJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl17XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnNpZGViYXIgLnN1YmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxufVxcblxcbi5kYXktZGVzYy1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyID4gKiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5mb3JlY2FzdC1kYXlzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYXlzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxufVxcblxcbi5kYXlzLWNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS1kZXNjLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5mdWxsLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5lYWNoLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmltZy10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLm1pbi10ZW1wIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMyk7XFxufVxcblxcbmltZy5tYXgtdGVtcCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgzNDBkZWcpIHNhdHVyYXRlKDMpO1xcbn1cXG5cXG5pbWcuYXZnLXRlbXAge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzAwZGVnKSBzYXR1cmF0ZSg1KTtcXG59XFxuXFxuaW1nLmh1bWlkaXR5IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xcbn1cXG5cXG5pbWcuY2hhbmNlLW9mLXJhaW4ge1xcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNsYW1wKDEyNXB4LCAyMCUsIDIwMHB4KTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyID4gKiB7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmhvdXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTc1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICA+ICoge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcblxcbi5ob3VyID4gcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xcbn1cXG5cXG4ubG9hZGVyOjphZnRlciB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI2RkZGRkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjU1LCAxMTcsIDI1NSk7XFxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGVyLWhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKSB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSAnLi9kb21Db250cm9sbGVyJztcblxuLy8gZmV0Y2goXG4vLyAgICAgJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OTFlMjcyOGVkMzg1NDQyOWFkZDUzMjI5MjQyOTA2JnE9c2luZ2Fwb3JlJ1xuLy8gKVxuLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH0pO1xuXG5kb21Db250cm9sbGVyKCk7XG4iXSwibmFtZXMiOlsiQ291bnRyeSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImNvdW50cnkiLCJ0aW1lIiwiZWRpdENvdW50cnlEb20iLCJjb3VudHJ5VGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lVGl0bGUiLCJ0ZXh0Q29udGVudCIsIkRheSIsIm1heCIsIm1pbiIsImF2ZyIsImh1bWlkaXR5IiwicmFpbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZTNEYXlzRm9yZWNhc3REb20iLCJtZWFzdXJlbWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbWFnZSIsImRlc2NyaXB0aW9uQ29udGFpbmVyIiwiYXZndGVtcCIsInRleHQiLCJjaGFuY2UiLCJzcmMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImFkZExvYWRlciIsInJlbW92ZUxvYWRlciIsImZldGNoRGF0YSIsImlucHV0IiwiZGF0YSIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJlcnJvckRpdiIsInNob3dNb2RhbCIsImJhbmRhZ2UiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiYW5ncnkiLCJjb2RlIiwiSG91ciIsImltZyIsImluZm8iLCJjcmVhdGVIb3VyRG9tIiwiaG91clRpbWUiLCJjb250ZW50IiwiYXZnVGVtcEltZyIsIm1pblRlbXBJbWciLCJtYXhUZW1wSW1nIiwiaHVtaWRpdHlJbWciLCJjaGFuY2VPZlJhaW5JbWciLCJnZXRXZWF0aGVyRGF0YSIsIkRBVEEiLCJ1cGxvYWRQaG90b3MiLCJtaW5UZW1wIiwibWF4VGVtcCIsImF2Z1RlbXAiLCJjaGFuY2VPZlJhaW4iLCJ1cGRhdGVGb3JlY2FzdCIsIm1heERvbSIsIm1pbkRvbSIsImF2Z0RvbSIsInJlc2V0RG9tIiwiaG91cmx5IiwiZGF5c0NvbnRhaW5lciIsImh1bWlkaXR5RG9tIiwiY2hhbmNlRG9tIiwiaW5pdE1lYXN1cmVtZW50QnRuIiwibWVhc3VyZW1lbnRCdG4iLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwidXBkYXRlRG9tIiwiaW5pdENsb3NlQnRuIiwiY2xvc2VCdG4iLCJjbG9zZSIsImNyZWF0ZUFsbEhvdXJzIiwidG9kYXkiLCJmb3JFYWNoIiwiaG91ciIsImN1cnJlbnRIb3VyIiwidGVtcCIsImNyZWF0ZUFsbERheXMiLCJkYXlzIiwiZGF5IiwiY3VycmVudERheSIsInVwZGF0ZUN1cnJlbnREYXkiLCJ1cGRhdGVDb3VudHJ5IiwidXNlckNvdW50cnkiLCJpbml0Rm9ybSIsImZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImRvbUNvbnRyb2xsZXIiLCJsb2FkZXIiLCJib2R5IiwicmVtb3ZlIiwiY3JlYXRlVG9kYXlEYXRhIiwidG9kYXlEYXRhIiwiaG91ckRhdGEiLCJ3ZWF0aGVyRGF0YUNlbHNpdXMiLCJjcmVhdGVIb3VyT2JqIiwic3BsaXQiLCJ0ZW1wX2MiLCJjb25kaXRpb24iLCJ3ZWF0aGVyRGF0YUZhaHJlbmhlaXQiLCJ0ZW1wX2YiLCJwdXNoIiwiY3JlYXRlRGF5c0RhdGEiLCJmb3JlY2FzdERhdGEiLCJkYXlEYXRhIiwiY3JlYXRlV2VhdGhlck9iaiIsIm1heHRlbXBfYyIsIm1pbnRlbXBfYyIsImF2Z3RlbXBfYyIsImF2Z2h1bWlkaXR5IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJhdmd0ZW1wX2YiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiY291bnRyeURhdGEiLCJsb2NhdGlvbiIsImNyZWF0ZUNvdW50cnlPYmoiLCJsb2NhbHRpbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==