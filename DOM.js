
// Selecting the element
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

// Telling the element to listen for clicks and manipulate the element based off of the code inside the function.
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})
