// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthElement = document.getElementById('length');
const rangeElement = document.getElementById('range');
const btnElement = document.getElementById('btn');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let password = '';

// LENGTH
lengthElement.textContent = rangeElement.value;

const printLength = () => {
  lengthElement.textContent = rangeElement.value;
};
rangeElement.addEventListener('input', printLength);

//PASSWORD
const getPassword = () => {
  password = '';
  for (let index = 0; index < rangeElement.value; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);

    password += characters.charAt(randomNumber);
  }

  passwordElement.value = password;
};
btnElement.addEventListener('click', getPassword);
