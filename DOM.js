
// Selecting the element

// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');

// Telling the element to listen for clicks and manipulate the element based off of the code inside the function.

// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// })

this for loop iterates through the myList variable and makes every li purple.
for (let i=0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}
