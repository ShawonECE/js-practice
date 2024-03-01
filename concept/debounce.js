const btn = document.getElementById('btn');

function clickHandler() {
    console.log('Someone clicked me');
}

function debounce(fn, delay) {
    let timeOutId;
    return function () {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            fn();
        }, delay);
    }
}

btn.addEventListener('click', debounce(clickHandler, 500));