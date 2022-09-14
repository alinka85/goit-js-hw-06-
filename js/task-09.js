function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorRef = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

const changeColor = () => {
  const color = getRandomHexColor();
  document.body.style.background = color;
  textColor.textContent = color;

}

colorRef.addEventListener('click', changeColor);