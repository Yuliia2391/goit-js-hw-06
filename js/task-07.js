const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

console.log(input);
console.log(span);

input.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
    span.style.fontSize = event.currentTarget.value + `px`;
    console.log(span.style.fontSize);
}