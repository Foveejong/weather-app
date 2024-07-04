import { addLoader, removeLoader } from './loaderController';

async function fetchData(input) {
    addLoader();
    const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=91e2728ed3854429add53229242906&q=${input}&days=3`,
        { mode: 'cors' }
    );
    const response = await data.json();

    // error handler
    if (response.error) {
        handleError(response.error);
    }
    removeLoader();

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

export { fetchData };
