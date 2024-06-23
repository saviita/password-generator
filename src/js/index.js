// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const passwordElement = document.getElementById("password");
const lengthElement = document.getElementById("length");
const rangeElement = document.getElementById("range");
const btnElement = document.getElementById("btn");

const characters = [
  "A",
  "B",
  "C",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
  "<",
  "/",
  ">",
];

// LENGTH
lengthElement.textContent = rangeElement.value;

const printLength = () => {
  lengthElement.textContent = rangeElement.value;
};

rangeElement.addEventListener("input", printLength);

//PASSWORD
const getPassword = () => {
  const arrayPassword = [];

  for (let index = 0; index < rangeElement.value; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);

    arrayPassword.push(characters[randomNumber]);
  }

  const password = arrayPassword.reduce((total, letter) => {
    return total + letter.toString();
  });
  passwordElement.placeholder = password;

  console.log(password);
};
btnElement.addEventListener("click", getPassword);
