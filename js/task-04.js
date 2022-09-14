let counterValue = 0;
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const valueChange =  document.querySelector('#value');

const increment= () => {
    counterValue += 1;
    valueChange.textContent =  counterValue
};
const decrement= () => {
    counterValue -= 1;
    valueChange.textContent =  counterValue
};
btnIncrement.addEventListener('click',increment);
btnDecrement.addEventListener('click', decrement);


