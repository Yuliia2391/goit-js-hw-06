const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const span = document.querySelector('#value');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onInrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick() {
    counterValue = span.textContent;
    span.textContent = Number(counterValue) - 1;
};

function onInrementBtnClick() {
    counterValue = span.textContent;
    span.textContent = Number(counterValue) + 1;
};