const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputText);

function onInputText(event) {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value.trim() === '' ) {
        output.textContent = 'Anonymous';
    }

    console.log(event.currentTarget.value);
}