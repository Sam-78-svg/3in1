const firstnameEl=document.querySelector('#FirstName');
const lastnameEl=document.querySelector('#LastName');
const usernameEl=document.querySelector('#userName');
const emailEl=document.querySelector('#userEmail');
const passwordEl=document.querySelector('#password');
const conPasswordEl=document.querySelector('#conPassword'); 

const form=document.querySelector('#signup');
const btn=document.querySelector('#btn');

const checkFirstName= () =>{ 
    let valid = false;
    const min=2, max = 30;
    const firstname = firstnameEl.value.trim();
    if(!isRequired(firstname)){
        showError(firstnameEl, 'First Name cannot be blank');
    }else if(!isBetween(firstname.length, min, max)){
        showError(firstnameEl, `First Name must be between ${min} and ${max} characters`);
    }else{
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
}

const checkLastName= () =>{ 
    let valid = false;
    const min=2, max = 30;
    const lastname = lastnameEl.value.trim();
    if(!isRequired(lastname)){
        showError(lastnameEl, 'Last Name cannot be blank');
    }else if(!isBetween(lastname.length, min, max)){
        showError(lastnameEl, `Last Name must be between ${min} and ${max} characters`);
    }else{
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
}

const checkUserName= () =>{ 
    let valid = false;
    const min=2, max = 30;
    const username = usernameEl.value.trim();
    if(!isRequired(username)){
        showError(usernameEl, 'User Name cannot be blank');
    }else if(!isBetween(username.length, min, max)){
        showError(usernameEl, `User Name must be between ${min} and ${max} characters`);
    }else{
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = conPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
        showError(conPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(conPasswordEl, 'Passwords do not match');
    } else {
        showSuccess(conPasswordEl);
        valid = true;
    }
    return valid;
}

// Utility functions
function isRequired(value) {
    return value !== '';
}

function isBetween(length, min, max) {
    return length >= min && length <= max;
}

function isEmailValid(email) {
    // Simple email regex
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

function isPasswordSecure(password) {
    // At least 8 chars, 1 lowercase, 1 uppercase, 1 number, 1 special char
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return re.test(password);
}

function showError(input, message) {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const small = formField.querySelector('small');
    if (small) {
        small.textContent = message;
    }
}

function showSuccess(input) {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const small = formField.querySelector('small');
    if (small) {
        small.textContent = '';
    }
}

// Debounce function
function debounce(fn, delay = 400) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Attach debounced validation to input events
firstnameEl.addEventListener('input', debounce(checkFirstName));
lastnameEl.addEventListener('input', debounce(checkLastName));
usernameEl.addEventListener('input', debounce(checkUserName));
emailEl.addEventListener('input', debounce(checkEmail));
passwordEl.addEventListener('input', debounce(checkPassword));
conPasswordEl.addEventListener('input', debounce(checkConfirmPassword));

// Form submit event
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isUserNameValid = checkUserName(),
        isEmailValidFlag = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isFirstNameValid && isLastNameValid && isUserNameValid && isEmailValidFlag && isPasswordValid && isConfirmPasswordValid;

    if (isFormValid) {
        // Optionally submit the form or show success message
        alert('Registration successful!');
        form.reset();
        // Remove success classes
        [firstnameEl, lastnameEl, usernameEl, emailEl, passwordEl, conPasswordEl].forEach(el => {
            el.parentElement.classList.remove('success');
        });
    }
});