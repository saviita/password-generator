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
const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * characters.length);
  return randomNumber;
};

const randomCharacter = () => {
  const randomPosition = randomNumber();
  const randomCharacter = characters.charAt(randomPosition);
  return randomCharacter;
};

const getPassword = () => {
  password = '';
  for (let index = 0; index < rangeElement.value; index++) {
    //como esta funcion se ejecuta en el bucle genera diferentes numeros random
    const randomCharacter = randomCharacter();
    password += randomCharacter;
  }

  passwordElement.value = password;
};
btnElement.addEventListener('click', getPassword);
