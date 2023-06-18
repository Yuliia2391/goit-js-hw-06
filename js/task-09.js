function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const butttonChangeColor = document.querySelector('.change-color');

butttonChangeColor.addEventListener('click', onClickButtonChangeColor);

function onClickButtonChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;

  console.log(spanColor.textContent);
}

