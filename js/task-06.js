const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length) & !event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.add('valid');
    }
    else if (Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length) & event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.replace('invalid', 'valid');
    }
    else {
        event.currentTarget.classList.add('invalid');
    }
}