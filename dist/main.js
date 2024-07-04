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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ "./src/logic.js");




let DATA;
function updateForecast(max, min, avg, humidity, chance, description, measurement) {
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
    DATA = await (0,_logic__WEBPACK_IMPORTED_MODULE_3__.getWeatherData)(document.querySelector('input').value);
    resetDom();
    updateDom(measurement);
  });
};
function domController() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdEO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxV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dHJ5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9Ib3VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9hZGVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvdW50cnksIHRpbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBlZGl0Q291bnRyeURvbSgpIHtcbiAgICAgICAgY29uc3QgY291bnRyeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YmhlYWRlci5jb3VudHJ5Jyk7XG4gICAgICAgIGNvbnN0IHRpbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJoZWFkZXIudGltZScpO1xuICAgICAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9LCAke3RoaXMuY291bnRyeX1gO1xuICAgICAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpbWV9YDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkge1xuICAgIGNvbnN0cnVjdG9yKG1heCwgbWluLCBhdmcsIGh1bWlkaXR5LCByYWluLCBkZXNjcmlwdGlvbiwgaWNvbikge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMuYXZnID0gYXZnO1xuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgICAgIHRoaXMucmFpbiA9IHJhaW47XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG5cbiAgICBjcmVhdGUzRGF5c0ZvcmVjYXN0RG9tKG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhdmd0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gYGh0dHBzOmAgKyB0aGlzLmljb247XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjaGFuY2UudGV4dENvbnRlbnQgPSB0aGlzLnJhaW4gKyAnJSc7XG5cbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgYXZndGVtcC50ZXh0Q29udGVudCA9IHRoaXMuYXZnICsgYFxcdTAwQjBDYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF2Z3RlbXAudGV4dENvbnRlbnQgPSB0aGlzLmF2ZyArIGBcXHUwMEIwRmA7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdzdmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWRlc2MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYXZndGVtcCk7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuY2UpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhZGRMb2FkZXIsIHJlbW92ZUxvYWRlciB9IGZyb20gJy4vbG9hZGVyQ29udHJvbGxlcic7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpbnB1dCkge1xuICAgIGFkZExvYWRlcigpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTkxZTI3MjhlZDM4NTQ0MjlhZGQ1MzIyOTI0MjkwNiZxPSR7aW5wdXR9JmRheXM9M2AsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG5cbiAgICAvLyBlcnJvciBoYW5kbGVyXG4gICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG4gICAgcmVtb3ZlTG9hZGVyKCk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJykuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgYmFuZGFnZSA9IFN0cmluZy5mcm9tQ29kZVBvaW50KDB4MWY5MTUpO1xuICAgIGNvbnN0IGFuZ3J5ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoMHgxZjYyMSk7XG4gICAgaWYgKGVyci5jb2RlID09PSAxMDAzKSB7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gYFBsZWFzZSBlbnRlciBzb21ldGhpbmchISAke2JhbmRhZ2V9YDtcbiAgICB9IGVsc2UgaWYgKGVyci5jb2RlID09PSAxMDA2KSB7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gYFBsZWFzZSBlbnRlciBhIHZhbGlkIGNvdW50cnkhISAke2FuZ3J5fWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBmZXRjaERhdGEgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWUsIGltZywgaW5mbykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICB9XG5cbiAgICBjcmVhdGVIb3VyRG9tKG1lYXN1cmVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBob3VyVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG91cicpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cHM6YCArIHRoaXMuaW1nO1xuICAgICAgICBob3VyVGltZS50ZXh0Q29udGVudCA9IHRoaXMudGltZTtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5mbyArIGBcXHUwMEIwQ2A7XG5cbiAgICAgICAgaWYgKG1lYXN1cmVtZW50ID09PSAnd2VhdGhlckRhdGFDZWxzaXVzJykge1xuICAgICAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRoaXMuaW5mbyArIGBcXHUwMEIwQ2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGhpcy5pbmZvICsgYFxcdTAwQjBGYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChob3VyVGltZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbn1cbiIsImltcG9ydCBIb3VyIGZyb20gJy4vSG91cic7XG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5JztcbmltcG9ydCBDb3VudHJ5IGZyb20gJy4vQ291bnRyeSc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vbG9naWMnO1xuXG5sZXQgREFUQTtcblxuZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3QoXG4gICAgbWF4LFxuICAgIG1pbixcbiAgICBhdmcsXG4gICAgaHVtaWRpdHksXG4gICAgY2hhbmNlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIG1lYXN1cmVtZW50XG4pIHtcbiAgICBsZXQgbWF4RG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heC10ZW1wJyk7XG4gICAgbGV0IG1pbkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdGVtcCcpO1xuICAgIGxldCBhdmdEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZnLXRlbXAnKTtcbiAgICBpZiAobWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnKSB7XG4gICAgICAgIG1heERvbS50ZXh0Q29udGVudCA9IG1heCArIGBcXHUwMEIwQ2A7XG4gICAgICAgIG1pbkRvbS50ZXh0Q29udGVudCA9IG1pbiArIGBcXHUwMEIwQ2A7XG4gICAgICAgIGF2Z0RvbS50ZXh0Q29udGVudCA9IGF2ZyArIGBcXHUwMEIwQ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWF4RG9tLnRleHRDb250ZW50ID0gbWF4ICsgYFxcdTAwQjBGYDtcbiAgICAgICAgbWluRG9tLnRleHRDb250ZW50ID0gbWluICsgYFxcdTAwQjBGYDtcbiAgICAgICAgYXZnRG9tLnRleHRDb250ZW50ID0gYXZnICsgYFxcdTAwQjBGYDtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5JykudGV4dENvbnRlbnQgPSBodW1pZGl0eSArICclJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4nKS50ZXh0Q29udGVudCA9IGNoYW5jZSArICclJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJUb2RheSdzIERlc2NyaXB0aW9uOiBcIiArIGRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiByZXNldERvbSgpIHtcbiAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjb3VudHJ5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLmNvdW50cnknKTtcbiAgICBjb25zdCB0aW1lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViaGVhZGVyLnRpbWUnKTtcbiAgICBjb25zdCBtaW5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLXRlbXAnKTtcbiAgICBjb25zdCBtYXhEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4LXRlbXAnKTtcbiAgICBjb25zdCBhdmdEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZnLXRlbXAnKTtcbiAgICBjb25zdCBodW1pZGl0eURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuICAgIGNvbnN0IGNoYW5jZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRhaW5lciA+IHAnKTtcblxuICAgIGhvdXJseS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRheXNDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb3VudHJ5VGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aW1lVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICBtaW5Eb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYXhEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBhdmdEb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBodW1pZGl0eURvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNoYW5jZURvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUb2RheSdzIERlc2NyaXB0aW9uOiBcIjtcbn1cblxuY29uc3QgaW5pdE1lYXN1cmVtZW50QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lYXN1cmVtZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYXN1cmVtZW50Jyk7XG4gICAgbGV0IG1lYXN1cmVtZW50ID0gbWVhc3VyZW1lbnRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgbWVhc3VyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cycpIHtcbiAgICAgICAgICAgIG1lYXN1cmVtZW50QnRuLnNldEF0dHJpYnV0ZSgnZGF0YScsICd3ZWF0aGVyRGF0YUZhaHJlbmhlaXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lYXN1cmVtZW50QnRuLnNldEF0dHJpYnV0ZSgnZGF0YScsICd3ZWF0aGVyRGF0YUNlbHNpdXMnKTtcbiAgICAgICAgfVxuICAgICAgICBtZWFzdXJlbWVudCA9XG4gICAgICAgICAgICBtZWFzdXJlbWVudCA9PT0gJ3dlYXRoZXJEYXRhQ2Vsc2l1cydcbiAgICAgICAgICAgICAgICA/ICd3ZWF0aGVyRGF0YUZhaHJlbmhlaXQnXG4gICAgICAgICAgICAgICAgOiAnd2VhdGhlckRhdGFDZWxzaXVzJztcbiAgICAgICAgbWVhc3VyZW1lbnRCdG4udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgbWVhc3VyZW1lbnQgPT09ICd3ZWF0aGVyRGF0YUNlbHNpdXMnID8gJ1xcdTAwQjBDJyA6ICdcXHUwMEIwRic7XG5cbiAgICAgICAgcmVzZXREb20oKTtcbiAgICAgICAgdXBkYXRlRG9tKG1lYXN1cmVtZW50KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGluaXRDbG9zZUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKS5jbG9zZSgpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQWxsSG91cnMgPSAobWVhc3VyZW1lbnQpID0+IHtcbiAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lcicpO1xuICAgIERBVEEudG9kYXkuZm9yRWFjaCgoaG91cikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBIb3VyKFxuICAgICAgICAgICAgaG91clttZWFzdXJlbWVudF0udGltZSxcbiAgICAgICAgICAgIGhvdXJbbWVhc3VyZW1lbnRdLmljb24sXG4gICAgICAgICAgICBob3VyW21lYXN1cmVtZW50XS50ZW1wXG4gICAgICAgICk7XG4gICAgICAgIGhvdXJseS5hcHBlbmRDaGlsZChjdXJyZW50SG91ci5jcmVhdGVIb3VyRG9tKG1lYXN1cmVtZW50KSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVBbGxEYXlzID0gKG1lYXN1cmVtZW50KSA9PiB7XG4gICAgY29uc3QgZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXlzLWNvbnRhaW5lcicpO1xuICAgIERBVEEuZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERheSA9IG5ldyBEYXkoXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLm1heCxcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0ubWluLFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5hdmcsXG4gICAgICAgICAgICBkYXlbbWVhc3VyZW1lbnRdLmh1bWlkaXR5LFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5yYWluLFxuICAgICAgICAgICAgZGF5W21lYXN1cmVtZW50XS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRheVttZWFzdXJlbWVudF0uaWNvblxuICAgICAgICApO1xuICAgICAgICBkYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgY3VycmVudERheS5jcmVhdGUzRGF5c0ZvcmVjYXN0RG9tKG1lYXN1cmVtZW50KVxuICAgICAgICApO1xuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlQ3VycmVudERheSA9IChjdXJyZW50RGF5LCBtZWFzdXJlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUZvcmVjYXN0KFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5tYXgsXG4gICAgICAgIGN1cnJlbnREYXlbbWVhc3VyZW1lbnRdLm1pbixcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uYXZnLFxuICAgICAgICBjdXJyZW50RGF5W21lYXN1cmVtZW50XS5odW1pZGl0eSxcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0ucmFpbixcbiAgICAgICAgY3VycmVudERheVttZWFzdXJlbWVudF0uZGVzY3JpcHRpb24sXG4gICAgICAgIG1lYXN1cmVtZW50XG4gICAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUNvdW50cnkgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlckNvdW50cnkgPSBuZXcgQ291bnRyeShcbiAgICAgICAgREFUQS5jb3VudHJ5Lm5hbWUsXG4gICAgICAgIERBVEEuY291bnRyeS5jb3VudHJ5LFxuICAgICAgICBEQVRBLmNvdW50cnkudGltZVxuICAgICk7XG4gICAgdXNlckNvdW50cnkuZWRpdENvdW50cnlEb20oKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURvbSA9IChtZWFzdXJlbWVudCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBldmVyeSBob3VyIGFuZCBldmVyeSAzIGRheXMgZGF0YVxuICAgIGNyZWF0ZUFsbEhvdXJzKG1lYXN1cmVtZW50KTtcbiAgICBjcmVhdGVBbGxEYXlzKG1lYXN1cmVtZW50KTtcblxuICAgIC8vIHVwZGF0ZSB0b2RheSdzIGluZm9cbiAgICBjb25zdCBjdXJyZW50RGF5ID0gREFUQS5kYXlzWzBdO1xuICAgIHVwZGF0ZUN1cnJlbnREYXkoY3VycmVudERheSwgbWVhc3VyZW1lbnQpO1xuICAgIHVwZGF0ZUNvdW50cnkoKTtcbn07XG5cbmNvbnN0IGluaXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IHN1Ym1pdCBiZWhhdmlvdXJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBtZWFzdXJlbWVudCA9IGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1lYXN1cmVtZW50JylcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcblxuICAgICAgICBEQVRBID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSk7XG4gICAgICAgIHJlc2V0RG9tKCk7XG4gICAgICAgIHVwZGF0ZURvbShtZWFzdXJlbWVudCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBkb21Db250cm9sbGVyKCkge1xuICAgIGluaXRNZWFzdXJlbWVudEJ0bigpO1xuICAgIGluaXRDbG9zZUJ0bigpO1xuICAgIGluaXRGb3JtKCk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUZvcmVjYXN0LCByZXNldERvbSwgZG9tQ29udHJvbGxlciB9O1xuIiwiZnVuY3Rpb24gYWRkTG9hZGVyKCkge1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9hZGVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5jbGFzc0xpc3QuYWRkKCdsb2FkZXItaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5yZW1vdmUoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgYWRkTG9hZGVyLCByZW1vdmVMb2FkZXIgfTtcbiIsImltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vRmV0Y2gnO1xuXG5jb25zdCBjcmVhdGVUb2RheURhdGEgPSAodG9kYXlEYXRhLCB0b2RheSkgPT4ge1xuICAgIHRvZGF5RGF0YS5mb3JFYWNoKChob3VyRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBob3VyID0ge307XG4gICAgICAgIGhvdXIud2VhdGhlckRhdGFDZWxzaXVzID0gY3JlYXRlSG91ck9iaihcbiAgICAgICAgICAgIGhvdXJEYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIGhvdXJEYXRhLnRlbXBfYyxcbiAgICAgICAgICAgIGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIGhvdXIud2VhdGhlckRhdGFGYWhyZW5oZWl0ID0gY3JlYXRlSG91ck9iaihcbiAgICAgICAgICAgIGhvdXJEYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIGhvdXJEYXRhLnRlbXBfZixcbiAgICAgICAgICAgIGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIHRvZGF5LnB1c2goaG91cik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVEYXlzRGF0YSA9IChmb3JlY2FzdERhdGEsIGRheXMpID0+IHtcbiAgICBmb3JlY2FzdERhdGEuZm9yRWFjaCgoZGF5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBkYXkgPSB7fTtcbiAgICAgICAgZGF5LndlYXRoZXJEYXRhQ2Vsc2l1cyA9IGNyZWF0ZVdlYXRoZXJPYmooXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmd0ZW1wX2MsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5jb25kaXRpb24uaWNvblxuICAgICAgICApO1xuICAgICAgICBkYXkud2VhdGhlckRhdGFGYWhyZW5oZWl0ID0gY3JlYXRlV2VhdGhlck9iaihcbiAgICAgICAgICAgIGRheURhdGEuZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmF2Z3RlbXBfZixcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICAgICAgZGF5RGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICBkYXlEYXRhLmRheS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGRheURhdGEuZGF5LmNvbmRpdGlvbi5pY29uXG4gICAgICAgICk7XG4gICAgICAgIGRheXMucHVzaChkYXkpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoaW5wdXQgPSAnU2luZ2Fwb3JlJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGRhdGEgZm9yIGFsbCAzIGRheXNcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoaW5wdXQpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICAgICAgICAvLyBnZXQgY291bnRyeSBkYXRhXG4gICAgICAgIGNvbnN0IGNvdW50cnlEYXRhID0gcmVzcG9uc2UubG9jYXRpb247XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBjcmVhdGVDb3VudHJ5T2JqKFxuICAgICAgICAgICAgY291bnRyeURhdGEubmFtZSxcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLmNvdW50cnksXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5sb2NhbHRpbWVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0b2RheSdzIGRhdGFcbiAgICAgICAgY29uc3QgdG9kYXkgPSBbXTtcbiAgICAgICAgY29uc3QgdG9kYXlEYXRhID0gZm9yZWNhc3REYXRhWzBdLmhvdXI7XG4gICAgICAgIGNyZWF0ZVRvZGF5RGF0YSh0b2RheURhdGEsIHRvZGF5KTtcblxuICAgICAgICAvLyBmb3JlY2FzdCBkYXRhXG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY3JlYXRlRGF5c0RhdGEoZm9yZWNhc3REYXRhLCBkYXlzKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnRyeSxcbiAgICAgICAgICAgIHRvZGF5LFxuICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufTtcblxuY29uc3QgY3JlYXRlQ291bnRyeU9iaiA9IChuYW1lLCBjb3VudHJ5LCB0aW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgdGltZSxcbiAgICB9O1xufTtcblxuY29uc3QgY3JlYXRlV2VhdGhlck9iaiA9IChtYXgsIG1pbiwgYXZnLCBodW1pZGl0eSwgcmFpbiwgZGVzY3JpcHRpb24sIGljb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgYXZnLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgcmFpbixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvdXJPYmogPSAodGltZSwgdGVtcCwgaWNvbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpbWUsXG4gICAgICAgIHRlbXAsXG4gICAgICAgIGljb24sXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBjcmVhdGVDb3VudHJ5T2JqLCBjcmVhdGVIb3VyT2JqLCBjcmVhdGVXZWF0aGVyT2JqIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xufVxuXG46cm9vdCB7XG4gICAgLS1zdGFuZGFyZC1tYXJnaW46IDFyZW07XG59XG5cbmRpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDRyZW0gMTByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zdmcge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogNHJlbTtcbn1cblxuLmFzc2V0IHtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5zdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5zZWFyY2hiYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG5pbnB1dCwgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGViYXIgLnN1YmhlYWRlciB7XG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbn1cblxuLmRheS1kZXNjLWNvbnRhaW5lcjpudGgtY2hpbGQoMikge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2RheS1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kYXktaW5mby1jb250YWluZXIgPiAqIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRheXMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgXG59XG5cbi5kYXlzLWNvbnRhaW5lciA+ICoge1xuICAgIGZsZXg6IDE7XG59XG5cbi5kYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF5LWRlc2MtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBmbGV4OiAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5mb3JlY2FzdCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5mdWxsLWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmVhY2gtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5pbWctdGV4dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZy5taW4tdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMyk7XG59XG5cbmltZy5tYXgtdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDM0MGRlZykgc2F0dXJhdGUoMyk7XG59XG5cbmltZy5hdmctdGVtcCB7XG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDMwMGRlZykgc2F0dXJhdGUoNSk7XG59XG5cbmltZy5odW1pZGl0eSB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xufVxuXG5pbWcuY2hhbmNlLW9mLXJhaW4ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDMwJSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgxNTBkZWcpIHNhdHVyYXRlKDEwKTtcbn1cblxuLmluZm8ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgZmxleDogMTtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLWF1dG8tY29sdW1uczogY2xhbXAoMTI1cHgsIDIwJSwgMjAwcHgpO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICBzY3JvbGwtcGFkZGluZzogMXJlbTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIgPiAqIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmhvdXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgPiAqIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuLmhvdXIgPiBwIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvdXIgPiBpbWcge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBmbGV4OiAyO1xufVxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMGR2dztcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xufVxuXG4ubG9hZGVyOjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBib3JkZXI6IDE1cHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDI1NSwgMTE3LCAyNTUpO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xufVxuXG4ubG9hZGVyLWhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZyB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKSB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybikgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qiw2RUFBNkU7SUFDN0UsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFD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Q0o7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTyx5QkFBeUI7SUFDaEMsS0FBSyx5QkFBeUI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc3RhbmRhcmQtbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMzVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogNHJlbSAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uYXNzZXQge1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uc3ViaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b3AtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnNlYXJjaGJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl17XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MywgOTMpO1xcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLnNpZGViYXIgLnN1YmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XFxufVxcblxcbi5kYXktZGVzYy1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5LWluZm8tY29udGFpbmVyID4gKiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5mb3JlY2FzdC1kYXlzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kYXlzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgXFxufVxcblxcbi5kYXlzLWNvbnRhaW5lciA+ICoge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRheS1kZXNjLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5mdWxsLWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5lYWNoLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmltZy10ZXh0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW1nLm1pbi10ZW1wIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMyk7XFxufVxcblxcbmltZy5tYXgtdGVtcCB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgzNDBkZWcpIHNhdHVyYXRlKDMpO1xcbn1cXG5cXG5pbWcuYXZnLXRlbXAge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMzAwZGVnKSBzYXR1cmF0ZSg1KTtcXG59XFxuXFxuaW1nLmh1bWlkaXR5IHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMzAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKDE1MGRlZykgc2F0dXJhdGUoMTApO1xcbn1cXG5cXG5pbWcuY2hhbmNlLW9mLXJhaW4ge1xcbiAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoMTUwZGVnKSBzYXR1cmF0ZSgxMCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNsYW1wKDEyNXB4LCAyMCUsIDIwMHB4KTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLXBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyID4gKiB7XFxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmhvdXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTc1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICA+ICoge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcblxcbi5ob3VyID4gcCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3VyID4gaW1nIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZmxleDogMjtcXG59XFxuXFxuLmxvYWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwZHZ3O1xcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzLCB2aXNpYmlsaXR5IDAuNzVzO1xcbn1cXG5cXG4ubG9hZGVyOjphZnRlciB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI2RkZGRkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjU1LCAxMTcsIDI1NSk7XFxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAwLjc1cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGVyLWhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKSB9XFxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGRvbUNvbnRyb2xsZXIgfSBmcm9tICcuL2RvbUNvbnRyb2xsZXInO1xuXG4vLyBmZXRjaChcbi8vICAgICAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05MWUyNzI4ZWQzODU0NDI5YWRkNTMyMjkyNDI5MDYmcT1zaW5nYXBvcmUnXG4vLyApXG4vLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgfSlcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfSk7XG5cbmRvbUNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6WyJDb3VudHJ5IiwiY29uc3RydWN0b3IiLCJuYW1lIiwiY291bnRyeSIsInRpbWUiLCJlZGl0Q291bnRyeURvbSIsImNvdW50cnlUaXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpbWVUaXRsZSIsInRleHRDb250ZW50IiwiRGF5IiwibWF4IiwibWluIiwiYXZnIiwiaHVtaWRpdHkiLCJyYWluIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlM0RheXNGb3JlY2FzdERvbSIsIm1lYXN1cmVtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImltYWdlIiwiZGVzY3JpcHRpb25Db250YWluZXIiLCJhdmd0ZW1wIiwidGV4dCIsImNoYW5jZSIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYWRkTG9hZGVyIiwicmVtb3ZlTG9hZGVyIiwiZmV0Y2hEYXRhIiwiaW5wdXQiLCJkYXRhIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsImVyciIsImVycm9yRGl2Iiwic2hvd01vZGFsIiwiYmFuZGFnZSIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJhbmdyeSIsImNvZGUiLCJIb3VyIiwiaW1nIiwiaW5mbyIsImNyZWF0ZUhvdXJEb20iLCJob3VyVGltZSIsImNvbnRlbnQiLCJnZXRXZWF0aGVyRGF0YSIsIkRBVEEiLCJ1cGRhdGVGb3JlY2FzdCIsIm1heERvbSIsIm1pbkRvbSIsImF2Z0RvbSIsInJlc2V0RG9tIiwiaG91cmx5IiwiZGF5c0NvbnRhaW5lciIsImh1bWlkaXR5RG9tIiwiY2hhbmNlRG9tIiwiaW5pdE1lYXN1cmVtZW50QnRuIiwibWVhc3VyZW1lbnRCdG4iLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwidXBkYXRlRG9tIiwiaW5pdENsb3NlQnRuIiwiY2xvc2VCdG4iLCJjbG9zZSIsImNyZWF0ZUFsbEhvdXJzIiwidG9kYXkiLCJmb3JFYWNoIiwiaG91ciIsImN1cnJlbnRIb3VyIiwidGVtcCIsImNyZWF0ZUFsbERheXMiLCJkYXlzIiwiZGF5IiwiY3VycmVudERheSIsInVwZGF0ZUN1cnJlbnREYXkiLCJ1cGRhdGVDb3VudHJ5IiwidXNlckNvdW50cnkiLCJpbml0Rm9ybSIsImZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImRvbUNvbnRyb2xsZXIiLCJsb2FkZXIiLCJib2R5IiwicmVtb3ZlIiwiY3JlYXRlVG9kYXlEYXRhIiwidG9kYXlEYXRhIiwiaG91ckRhdGEiLCJ3ZWF0aGVyRGF0YUNlbHNpdXMiLCJjcmVhdGVIb3VyT2JqIiwic3BsaXQiLCJ0ZW1wX2MiLCJjb25kaXRpb24iLCJ3ZWF0aGVyRGF0YUZhaHJlbmhlaXQiLCJ0ZW1wX2YiLCJwdXNoIiwiY3JlYXRlRGF5c0RhdGEiLCJmb3JlY2FzdERhdGEiLCJkYXlEYXRhIiwiY3JlYXRlV2VhdGhlck9iaiIsIm1heHRlbXBfYyIsIm1pbnRlbXBfYyIsImF2Z3RlbXBfYyIsImF2Z2h1bWlkaXR5IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJhdmd0ZW1wX2YiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiY291bnRyeURhdGEiLCJsb2NhdGlvbiIsImNyZWF0ZUNvdW50cnlPYmoiLCJsb2NhbHRpbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==