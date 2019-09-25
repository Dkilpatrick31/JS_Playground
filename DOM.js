// Selecting the element

// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// const myList = document.getElementsByTagName('li');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () =>  {
  p.textContent = input.value + ':';
});
// Telling the element to listen for clicks and manipulate the element based off of the code inside the function.

// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// })

// this for loop iterates through the myList variable and makes every li purple.
// for (let i=0; i < myList.length; i += 1) {
//   myList[i].style.color = 'purple';
// }

// const errorNotPurple = document.querySelectorAll('.error-not-purple');

// this for loop iterates through the errorNotPurple variable and makes every li red.
// for (let i=0; i < errorNotPurple.length; i += 1) {
//   errorNotPurple[i].style.color = 'red';
// }

// const evens = document.querySelectorAll('li:nth-child(even)');

// this for loop iterates through the errorNotPurple variable and makes every li red.
// for (let i=0; i < evens.length; i += 1) {
//   evens[i].style.backgroundColor = 'lightgray';
// }
// document.querySelector();
// document.querySelectorAll();
