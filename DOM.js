
// Selecting the element
const myHeading = document.getElementById('myHeading');

// Telling the element to listen for clicks and manipulate the element based off of the code inside the function.
myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red';
});
