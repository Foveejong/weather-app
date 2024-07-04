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
        document
            .querySelector('.loader')
            .addEventListener('transitionend', () => {
                document.querySelector('.loader').remove();
            });
    }
}

export { addLoader, removeLoader };
