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
  document.querySelector('.loader').classList.add('loader-hidden');
  document.querySelector('.loader').addEventListener('transitionend', () => {
    document.querySelector('.loader').remove();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFL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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7OztBQ0FzQjtBQUMwQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBdUYsNkRBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9Db3VudHJ5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9Ib3VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9hZGVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY291bnRyeSwgdGltZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIH1cblxuICAgIGVkaXRDb3VudHJ5RG9tKCkge1xuICAgICAgICBjb25zdCBjb3VudHJ5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLmNvdW50cnknKTtcbiAgICAgICAgY29uc3QgdGltZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci50aW1lJyk7XG4gICAgICAgIGNvdW50cnlUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0sICR7dGhpcy5jb3VudHJ5fWA7XG4gICAgICAgIHRpbWVUaXRsZS50ZXh0Q29udGVudCA9IGAke3RoaXMudGltZX1gO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSB7XG4gICAgY29uc3RydWN0b3IobWF4LCBtaW4sIGF2ZywgaHVtaWRpdHksIHJhaW4sIGRlc2NyaXB0aW9uLCBpY29uKSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5hdmcgPSBhdmc7XG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICAgICAgdGhpcy5yYWluID0gcmFpbjtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIH1cblxuICAgIGNyZWF0ZTNEYXlzRm9yZWNhc3REb20obWVhc3VyZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGF2Z3RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cHM6YCArIHRoaXMuaWNvbjtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNoYW5jZS50ZXh0Q29udGVudCA9IHRoaXMucmFpbiArICclJztcblxuICAgICAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgICAgICBhdmd0ZW1wLnRleHRDb250ZW50ID0gdGhpcy5hdmcgKyBgXFx1MDBCMENgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXZndGVtcC50ZXh0Q29udGVudCA9IHRoaXMuYXZnICsgYFxcdTAwQjBGYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3N2ZycpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXktZGVzYy1jb250YWluZXInKTtcblxuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhdmd0ZW1wKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW5jZSk7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGFkZExvYWRlciwgcmVtb3ZlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJDb250cm9sbGVyJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGlucHV0KSB7XG4gICAgYWRkTG9hZGVyKCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9OTFlMjcyOGVkMzg1NDQyOWFkZDUzMjI5MjQyOTA2JnE9JHtpbnB1dH0mZGF5cz0zYCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcblxuICAgIC8vIGVycm9yIGhhbmRsZXJcbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IocmVzcG9uc2UuZXJyb3IpO1xuICAgIH1cbiAgICByZW1vdmVMb2FkZXIoKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyKSB7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKS5zaG93TW9kYWwoKTtcbiAgICBjb25zdCBiYW5kYWdlID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoMHgxZjkxNSk7XG4gICAgY29uc3QgYW5ncnkgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweDFmNjIxKTtcbiAgICBpZiAoZXJyLmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBgUGxlYXNlIGVudGVyIHNvbWV0aGluZyEhICR7YmFuZGFnZX1gO1xuICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBgUGxlYXNlIGVudGVyIGEgdmFsaWQgY291bnRyeSEhICR7YW5ncnl9YDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGZldGNoRGF0YSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ciB7XG4gICAgY29uc3RydWN0b3IodGltZSwgaW1nLCBpbmZvKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgICAgICB0aGlzLmluZm8gPSBpbmZvO1xuICAgIH1cblxuICAgIGNyZWF0ZUhvdXJEb20obWVhc3VyZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob3VyJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGBodHRwczpgICsgdGhpcy5pbWc7XG4gICAgICAgIGhvdXJUaW1lLnRleHRDb250ZW50ID0gdGhpcy50aW1lO1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBDYDtcblxuICAgICAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBDYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSB0aGlzLmluZm8gKyBgXFx1MDBCMEZgO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhvdXJUaW1lKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxufVxuIiwiaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xuaW1wb3J0IENvdW50cnkgZnJvbSAnLi9Db3VudHJ5JztcbmltcG9ydCBhdmdUZW1wSW1nIGZyb20gJy4uL2Fzc2V0cy90ZW1wZXJhdHVyZS1sb3ctc3ZncmVwby1jb20uc3ZnJztcbmltcG9ydCBtaW5UZW1wSW1nIGZyb20gJy4uL2Fzc2V0cy90ZW1wZXJhdHVyZS1zbm93LXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgbWF4VGVtcEltZyBmcm9tICcuLi9hc3NldHMvdGVtcGVyYXR1cmUtc3VuLXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgaHVtaWRpdHlJbWcgZnJvbSAnLi4vYXNzZXRzL2h1bWlkaXR5LXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgY2hhbmNlT2ZSYWluSW1nIGZyb20gJy4uL2Fzc2V0cy9yYWluLXN2Z3JlcG8tY29tLnN2Zyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vbG9naWMnO1xuXG5sZXQgREFUQTtcblxuY29uc3QgdXBsb2FkUGhvdG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ZnLm1pbi10ZW1wJyk7XG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdmcubWF4LXRlbXAnKTtcbiAgICBjb25zdCBhdmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN2Zy5hdmctdGVtcCcpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN2Zy5odW1pZGl0eScpO1xuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdmcuY2hhbmNlLW9mLXJhaW4nKTtcblxuICAgIG1pblRlbXAuc3JjID0gbWluVGVtcEltZztcbiAgICBtYXhUZW1wLnNyYyA9IG1heFRlbXBJbWc7XG4gICAgYXZnVGVtcC5zcmMgPSBhdmdUZW1wSW1nO1xuICAgIGh1bWlkaXR5LnNyYyA9IGh1bWlkaXR5SW1nO1xuICAgIGNoYW5jZU9mUmFpbi5zcmMgPSBjaGFuY2VPZlJhaW5JbWc7XG59O1xuXG5jb25zdCB1cGRhdGVGb3JlY2FzdCA9IChcbiAgICBtYXgsXG4gICAgbWluLFxuICAgIGF2ZyxcbiAgICBodW1pZGl0eSxcbiAgICBjaGFuY2UsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbWVhc3VyZW1lbnRcbikgPT4ge1xuICAgIGxldCBtYXhEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4LXRlbXAnKTtcbiAgICBsZXQgbWluRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi10ZW1wJyk7XG4gICAgbGV0IGF2Z0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdmctdGVtcCcpO1xuICAgIGlmIChtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cycpIHtcbiAgICAgICAgbWF4RG9tLnRleHRDb250ZW50ID0gbWF4ICsgYFxcdTAwQjBDYDtcbiAgICAgICAgbWluRG9tLnRleHRDb250ZW50ID0gbWluICsgYFxcdTAwQjBDYDtcbiAgICAgICAgYXZnRG9tLnRleHRDb250ZW50ID0gYXZnICsgYFxcdTAwQjBDYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXhEb20udGV4dENvbnRlbnQgPSBtYXggKyBgXFx1MDBCMEZgO1xuICAgICAgICBtaW5Eb20udGV4dENvbnRlbnQgPSBtaW4gKyBgXFx1MDBCMEZgO1xuICAgICAgICBhdmdEb20udGV4dENvbnRlbnQgPSBhdmcgKyBgXFx1MDBCMEZgO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKS50ZXh0Q29udGVudCA9IGh1bWlkaXR5ICsgJyUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbicpLnRleHRDb250ZW50ID0gY2hhbmNlICsgJyUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPVxuICAgICAgICBcIlRvZGF5J3MgRGVzY3JpcHRpb246IFwiICsgZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCByZXNldERvbSA9ICgpID0+IHtcbiAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjb3VudHJ5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLmNvdW50cnknKTtcbiAgICBjb25zdCB0aW1lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLnRpbWUnKTtcbiAgICBjb25zdCBtaW5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLXRlbXAnKTtcbiAgICBjb25zdCBtYXhEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4LXRlbXAnKTtcbiAgICBjb25zdCBhdmdEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZnLXRlbXAnKTtcbiAgICBjb25zdCBodW1pZGl0eURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuICAgIGNvbnN0IGNoYW5jZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lciA+IHAnKTtcblxuICAgIGhvdXJseS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRheXNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBtaW5Eb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYXhEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBhdmdEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBodW1pZGl0eURvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNoYW5jZURvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUb2RheSdzIERlc2NyaXB0aW9uOiBcIjtcbn07XG5cbmNvbnN0IGluaXRNZWFzdXJlbWVudEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBtZWFzdXJlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFzdXJlbWVudCcpO1xuICAgIGxldCBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgIG1lYXN1cmVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgICAgICBtZWFzdXJlbWVudEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnd2VhdGhlckRhdGFGYWhyZW5oZWl0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZWFzdXJlbWVudEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnd2VhdGhlckRhdGFDZWxzaXVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgbWVhc3VyZW1lbnQgPVxuICAgICAgICAgICAgbWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnXG4gICAgICAgICAgICAgICAgPyAnd2VhdGhlckRhdGFGYWhyZW5oZWl0J1xuICAgICAgICAgICAgICAgIDogJ3dlYXRoZXJEYXRhQ2Vsc2l1cyc7XG4gICAgICAgIG1lYXN1cmVtZW50QnRuLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJyA/ICdcXHUwMEIwQycgOiAnXFx1MDBCMEYnO1xuXG4gICAgICAgIHJlc2V0RG9tKCk7XG4gICAgICAgIHVwZGF0ZURvbShtZWFzdXJlbWVudCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBpbml0Q2xvc2VCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuY2xvc2UoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFsbEhvdXJzID0gKG1lYXN1cmVtZW50KSA9PiB7XG4gICAgY29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXInKTtcbiAgICBEQVRBLnRvZGF5LmZvckVhY2goKGhvdXIpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgSG91cihcbiAgICAgICAgICAgIGhvdXJbbWVhc3VyZW1lbnRdLnRpbWUsXG4gICAgICAgICAgICBob3VyW21lYXN1cmVtZW50XS5pY29uLFxuICAgICAgICAgICAgaG91clttZWFzdXJlbWVudF0udGVtcFxuICAgICAgICApO1xuICAgICAgICBob3VybHkuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXIuY3JlYXRlSG91ckRvbShtZWFzdXJlbWVudCkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQWxsRGF5cyA9IChtZWFzdXJlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1jb250YWluZXInKTtcbiAgICBEQVRBLmRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBuZXcgRGF5KFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5tYXgsXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLm1pbixcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0uYXZnLFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5odW1pZGl0eSxcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0ucmFpbixcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLmljb25cbiAgICAgICAgKTtcbiAgICAgICAgZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIGN1cnJlbnREYXkuY3JlYXRlM0RheXNGb3JlY2FzdERvbShtZWFzdXJlbWVudClcbiAgICAgICAgKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnREYXkgPSAoY3VycmVudERheSwgbWVhc3VyZW1lbnQpID0+IHtcbiAgICB1cGRhdGVGb3JlY2FzdChcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0ubWF4LFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5taW4sXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLmF2ZyxcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uaHVtaWRpdHksXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLnJhaW4sXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLmRlc2NyaXB0aW9uLFxuICAgICAgICBtZWFzdXJlbWVudFxuICAgICk7XG59O1xuXG5jb25zdCB1cGRhdGVDb3VudHJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJDb3VudHJ5ID0gbmV3IENvdW50cnkoXG4gICAgICAgIERBVEEuY291bnRyeS5uYW1lLFxuICAgICAgICBEQVRBLmNvdW50cnkuY291bnRyeSxcbiAgICAgICAgREFUQS5jb3VudHJ5LnRpbWVcbiAgICApO1xuICAgIHVzZXJDb3VudHJ5LmVkaXRDb3VudHJ5RG9tKCk7XG59O1xuXG5jb25zdCB1cGRhdGVEb20gPSAobWVhc3VyZW1lbnQpID0+IHtcbiAgICAvLyBjcmVhdGUgZXZlcnkgaG91ciBhbmQgZXZlcnkgMyBkYXlzIGRhdGFcbiAgICBjcmVhdGVBbGxIb3VycyhtZWFzdXJlbWVudCk7XG4gICAgY3JlYXRlQWxsRGF5cyhtZWFzdXJlbWVudCk7XG5cbiAgICAvLyB1cGRhdGUgdG9kYXkncyBpbmZvXG4gICAgY29uc3QgY3VycmVudERheSA9IERBVEEuZGF5c1swXTtcbiAgICB1cGRhdGVDdXJyZW50RGF5KGN1cnJlbnREYXksIG1lYXN1cmVtZW50KTtcbiAgICB1cGRhdGVDb3VudHJ5KCk7XG59O1xuXG5jb25zdCBpbml0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgLy8gcHJldmVudCBzdWJtaXQgYmVoYXZpb3VyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbWVhc3VyZW1lbnQgPSBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tZWFzdXJlbWVudCcpXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG5cbiAgICAgICAgREFUQSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUpO1xuICAgICAgICByZXNldERvbSgpO1xuICAgICAgICB1cGRhdGVEb20obWVhc3VyZW1lbnQpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZG9tQ29udHJvbGxlcigpIHtcbiAgICB1cGxvYWRQaG90b3MoKTtcbiAgICBpbml0TWVhc3VyZW1lbnRCdG4oKTtcbiAgICBpbml0Q2xvc2VCdG4oKTtcbiAgICBpbml0Rm9ybSgpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVGb3JlY2FzdCwgcmVzZXREb20sIGRvbUNvbnRyb2xsZXIgfTtcbiIsImZ1bmN0aW9uIGFkZExvYWRlcigpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGxvYWRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRlcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuY2xhc3NMaXN0LmFkZCgnbG9hZGVyLWhpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykucmVtb3ZlKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZExvYWRlciwgcmVtb3ZlTG9hZGVyIH07XG4iLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL0ZldGNoJztcblxuY29uc3QgY3JlYXRlVG9kYXlEYXRhID0gKHRvZGF5RGF0YSwgdG9kYXkpID0+IHtcbiAgICB0b2RheURhdGEuZm9yRWFjaCgoaG91ckRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgaG91ciA9IHt9O1xuICAgICAgICBob3VyLndlYXRoZXJEYXRhQ2Vsc2l1cyA9IGNyZWF0ZUhvdXJPYmooXG4gICAgICAgICAgICBob3VyRGF0YS50aW1lLnNwbGl0KCcgJylbMV0sXG4gICAgICAgICAgICBob3VyRGF0YS50ZW1wX2MsXG4gICAgICAgICAgICBob3VyRGF0YS5jb25kaXRpb24uaWNvblxuICAgICAgICApO1xuICAgICAgICBob3VyLndlYXRoZXJEYXRhRmFocmVuaGVpdCA9IGNyZWF0ZUhvdXJPYmooXG4gICAgICAgICAgICBob3VyRGF0YS50aW1lLnNwbGl0KCcgJylbMV0sXG4gICAgICAgICAgICBob3VyRGF0YS50ZW1wX2YsXG4gICAgICAgICAgICBob3VyRGF0YS5jb25kaXRpb24uaWNvblxuICAgICAgICApO1xuICAgICAgICB0b2RheS5wdXNoKGhvdXIpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRGF5c0RhdGEgPSAoZm9yZWNhc3REYXRhLCBkYXlzKSA9PiB7XG4gICAgZm9yZWNhc3REYXRhLmZvckVhY2goKGRheURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5ID0ge307XG4gICAgICAgIGRheS53ZWF0aGVyRGF0YUNlbHNpdXMgPSBjcmVhdGVXZWF0aGVyT2JqKFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuYXZndGVtcF9jLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuYXZnaHVtaWRpdHksXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb25cbiAgICAgICAgKTtcbiAgICAgICAgZGF5LndlYXRoZXJEYXRhRmFocmVuaGVpdCA9IGNyZWF0ZVdlYXRoZXJPYmooXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5taW50ZW1wX2YsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmd0ZW1wX2YsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgICAgICApO1xuICAgICAgICBkYXlzLnB1c2goZGF5KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGlucHV0ID0gJ1NpbmdhcG9yZScpID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBkYXRhIGZvciBhbGwgMyBkYXlzXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKGlucHV0KTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cbiAgICAgICAgLy8gZ2V0IGNvdW50cnkgZGF0YVxuICAgICAgICBjb25zdCBjb3VudHJ5RGF0YSA9IHJlc3BvbnNlLmxvY2F0aW9uO1xuICAgICAgICBjb25zdCBjb3VudHJ5ID0gY3JlYXRlQ291bnRyeU9iaihcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLm5hbWUsXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5jb3VudHJ5LFxuICAgICAgICAgICAgY291bnRyeURhdGEubG9jYWx0aW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdG9kYXkncyBkYXRhXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gW107XG4gICAgICAgIGNvbnN0IHRvZGF5RGF0YSA9IGZvcmVjYXN0RGF0YVswXS5ob3VyO1xuICAgICAgICBjcmVhdGVUb2RheURhdGEodG9kYXlEYXRhLCB0b2RheSk7XG5cbiAgICAgICAgLy8gZm9yZWNhc3QgZGF0YVxuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGNyZWF0ZURheXNEYXRhKGZvcmVjYXN0RGF0YSwgZGF5cyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgICB0b2RheSxcbiAgICAgICAgICAgIGRheXMsXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlPYmogPSAobmFtZSwgY291bnRyeSwgdGltZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIHRpbWUsXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlYXRoZXJPYmogPSAobWF4LCBtaW4sIGF2ZywgaHVtaWRpdHksIHJhaW4sIGRlc2NyaXB0aW9uLCBpY29uKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIGF2ZyxcbiAgICAgICAgaHVtaWRpdHksXG4gICAgICAgIHJhaW4sXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpY29uLFxuICAgIH07XG59O1xuXG5jb25zdCBjcmVhdGVIb3VyT2JqID0gKHRpbWUsIHRlbXAsIGljb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aW1lLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBpY29uLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgY3JlYXRlQ291bnRyeU9iaiwgY3JlYXRlSG91ck9iaiwgY3JlYXRlV2VhdGhlck9iaiB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcbn1cblxuOnJvb3Qge1xuICAgIC0tc3RhbmRhcmQtbWFyZ2luOiAxcmVtO1xufVxuXG5kaWFsb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxufVxuXG4uZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiA0cmVtIDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uc3ZnIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG59XG5cbi5hc3NldCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uc2VhcmNoYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJde1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuaW5wdXQsIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiAycmVtO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbi5zaWRlYmFyIC5zdWJoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XG59XG5cbi5kYXktZGVzYy1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udG9kYXktaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZGF5LWluZm8tY29udGFpbmVyID4gKiB7XG4gICAgZmxleDogMTtcbn1cblxuLmZvcmVjYXN0LWRheXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kYXlzLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIFxufVxuXG4uZGF5cy1jb250YWluZXIgPiAqIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZGF5LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRheS1kZXNjLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZmxleDogMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4uZm9yZWNhc3Qge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZnVsbC1mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5lYWNoLWluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uaW1nLXRleHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcubWluLXRlbXAge1xuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDMpO1xufVxuXG5pbWcubWF4LXRlbXAge1xuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgzNDBkZWcpIHNhdHVyYXRlKDMpO1xufVxuXG5pbWcuYXZnLXRlbXAge1xuICAgIGZpbHRlcjogaW52ZXJ0KDYwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgzMDBkZWcpIHNhdHVyYXRlKDUpO1xufVxuXG5pbWcuaHVtaWRpdHkge1xuICAgIGZpbHRlcjogaW52ZXJ0KDMwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDEwKTtcbn1cblxuaW1nLmNoYW5jZS1vZi1yYWluIHtcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XG59XG5cbi5pbmZvIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGZsZXg6IDE7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNsYW1wKDEyNXB4LCAyMCUsIDIwMHB4KTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgc2Nyb2xsLXBhZGRpbmc6IDFyZW07XG59XG5cbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyID4gKiB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5ob3VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgID4gKiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbi5ob3VyID4gcCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3VyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgZmxleDogMjtcbn1cblxuLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDBkdnc7XG4gICAgaGVpZ2h0OiAxMDBkdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcbn1cblxuLmxvYWRlcjo6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYigyNTUsIDExNywgMjU1KTtcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMC43NXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmxvYWRlci1oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybikgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsNkVBQTZFO0lBQzdFLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0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QWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDViwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU8seUJBQXlCO0lBQ2hDLEtBQUsseUJBQXlCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXN0YW5kYXJkLW1hcmdpbjogMXJlbTtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDM1cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDRyZW0gMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLmFzc2V0IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnN1YmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9wLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5zZWFyY2hiYXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJde1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTMsIDkzKTtcXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5zdWJoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xcbn1cXG5cXG4uZGF5LWRlc2MtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcblxcbi50b2RheS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RheS1pbmZvLWNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGF5cy1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIFxcbn1cXG5cXG4uZGF5cy1jb250YWluZXIgPiAqIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXktZGVzYy1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZnVsbC1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZWFjaC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5pbWctdGV4dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZy5taW4tdGVtcCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDMpO1xcbn1cXG5cXG5pbWcubWF4LXRlbXAge1xcbiAgICBmaWx0ZXI6IGludmVydCg1NSUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzQwZGVnKSBzYXR1cmF0ZSgzKTtcXG59XFxuXFxuaW1nLmF2Zy10ZW1wIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDMwMGRlZykgc2F0dXJhdGUoNSk7XFxufVxcblxcbmltZy5odW1pZGl0eSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDMwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDEwKTtcXG59XFxuXFxuaW1nLmNoYW5jZS1vZi1yYWluIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiBjbGFtcCgxMjVweCwgMjAlLCAyMDBweCk7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxuICAgIHNjcm9sbC1wYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciA+ICoge1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5ob3VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgPiAqIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uaG91ciA+IHAge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91ciA+IGltZyB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMGR2dztcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgei1pbmRleDogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cywgdmlzaWJpbGl0eSAwLjc1cztcXG59XFxuXFxuLmxvYWRlcjo6YWZ0ZXIge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNkZGRkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDI1NSwgMTE3LCAyNTUpO1xcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMC43NXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmxvYWRlci1oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZyB7XFxuICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybikgfVxcbiAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKSB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZG9tQ29udHJvbGxlciB9IGZyb20gJy4vZG9tQ29udHJvbGxlcic7XG5cbi8vIGZldGNoKFxuLy8gICAgICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTkxZTI3MjhlZDM4NTQ0MjlhZGQ1MzIyOTI0MjkwNiZxPXNpbmdhcG9yZSdcbi8vIClcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9KTtcblxuZG9tQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbIkNvdW50cnkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJjb3VudHJ5IiwidGltZSIsImVkaXRDb3VudHJ5RG9tIiwiY291bnRyeVRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGltZVRpdGxlIiwidGV4dENvbnRlbnQiLCJEYXkiLCJtYXgiLCJtaW4iLCJhdmciLCJodW1pZGl0eSIsInJhaW4iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGUzRGF5c0ZvcmVjYXN0RG9tIiwibWVhc3VyZW1lbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsImF2Z3RlbXAiLCJ0ZXh0IiwiY2hhbmNlIiwic3JjIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJhZGRMb2FkZXIiLCJyZW1vdmVMb2FkZXIiLCJmZXRjaERhdGEiLCJpbnB1dCIsImRhdGEiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImhhbmRsZUVycm9yIiwiZXJyIiwiZXJyb3JEaXYiLCJzaG93TW9kYWwiLCJiYW5kYWdlIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImFuZ3J5IiwiY29kZSIsIkhvdXIiLCJpbWciLCJpbmZvIiwiY3JlYXRlSG91ckRvbSIsImhvdXJUaW1lIiwiY29udGVudCIsImF2Z1RlbXBJbWciLCJtaW5UZW1wSW1nIiwibWF4VGVtcEltZyIsImh1bWlkaXR5SW1nIiwiY2hhbmNlT2ZSYWluSW1nIiwiZ2V0V2VhdGhlckRhdGEiLCJEQVRBIiwidXBsb2FkUGhvdG9zIiwibWluVGVtcCIsIm1heFRlbXAiLCJhdmdUZW1wIiwiY2hhbmNlT2ZSYWluIiwidXBkYXRlRm9yZWNhc3QiLCJtYXhEb20iLCJtaW5Eb20iLCJhdmdEb20iLCJyZXNldERvbSIsImhvdXJseSIsImRheXNDb250YWluZXIiLCJodW1pZGl0eURvbSIsImNoYW5jZURvbSIsImluaXRNZWFzdXJlbWVudEJ0biIsIm1lYXN1cmVtZW50QnRuIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZURvbSIsImluaXRDbG9zZUJ0biIsImNsb3NlQnRuIiwiY2xvc2UiLCJjcmVhdGVBbGxIb3VycyIsInRvZGF5IiwiZm9yRWFjaCIsImhvdXIiLCJjdXJyZW50SG91ciIsInRlbXAiLCJjcmVhdGVBbGxEYXlzIiwiZGF5cyIsImRheSIsImN1cnJlbnREYXkiLCJ1cGRhdGVDdXJyZW50RGF5IiwidXBkYXRlQ291bnRyeSIsInVzZXJDb3VudHJ5IiwiaW5pdEZvcm0iLCJmb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJkb21Db250cm9sbGVyIiwibG9hZGVyIiwiYm9keSIsInJlbW92ZSIsImNyZWF0ZVRvZGF5RGF0YSIsInRvZGF5RGF0YSIsImhvdXJEYXRhIiwid2VhdGhlckRhdGFDZWxzaXVzIiwiY3JlYXRlSG91ck9iaiIsInNwbGl0IiwidGVtcF9jIiwiY29uZGl0aW9uIiwid2VhdGhlckRhdGFGYWhyZW5oZWl0IiwidGVtcF9mIiwicHVzaCIsImNyZWF0ZURheXNEYXRhIiwiZm9yZWNhc3REYXRhIiwiZGF5RGF0YSIsImNyZWF0ZVdlYXRoZXJPYmoiLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJhdmd0ZW1wX2MiLCJhdmdodW1pZGl0eSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwibWF4dGVtcF9mIiwibWludGVtcF9mIiwiYXZndGVtcF9mIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImNvdW50cnlEYXRhIiwibG9jYXRpb24iLCJjcmVhdGVDb3VudHJ5T2JqIiwibG9jYWx0aW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=