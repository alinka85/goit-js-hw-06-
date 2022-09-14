const inputRef = document.querySelector('#validation-input');

const inputBlur = (event) => {

    const {dataset, value} = event.target;
    if (Number(dataset.length) === Number(value.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }  
    else {inputRef.classList.add('invalid')};
    console.log(event.target.dataset.length);
    console.log(event.target.value.length);
}

inputRef.addEventListener('blur', inputBlur);

