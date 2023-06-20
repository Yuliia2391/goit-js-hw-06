const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value,
    }
    // console.log(event.currentTarget.elements);

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled!');
        return;
    }
    
    console.log('data', data);

    event.currentTarget.reset();
    }


    // 2 variant
    // console.log(Object.keys(event.currentTarget.elements));

    // const data = Object.keys(event.currentTarget.elements).reduce((acc, item) => {
    //     if (isNaN(item)) {
    //         acc[item] = event.currentTarget.elements[item].value;
    //     }

    //     return acc;
    // }, {})

    // console.log(data);


    // 3 variant
    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log(name);
    //     console.log(value);
    // });
    // console.log(formData);