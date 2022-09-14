const inputRef = document.querySelector('#name-input');

const inputName = document.querySelector('#name-output');

inputRef.addEventListener("input", (event) => {
    inputName.textContent = event.currentTarget.value;
 if (event.currentTarget.value === '') {
  inputName.textContent = 'Anonymous'
 } 
  });


console.log(inputRef);