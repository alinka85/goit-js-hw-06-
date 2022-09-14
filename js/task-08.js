const formRef = document.querySelector('.login-form');
const handelSubmit = (event) => {
    event.preventDefault();
    const {elements: {email, password}} = event.target;
    if (email.value === '' || password.value === '') {
        alert ('Необіхдно заповнити всі поля');
        return;
    }
        const userData = {
            email: email.value,
            password: password.value,
        }

    console.log(userData);
    formRef.reset();
}
formRef.addEventListener('submit',handelSubmit);

