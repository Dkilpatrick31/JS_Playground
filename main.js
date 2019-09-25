// const list = [1, 3, 5, 7, 9, 11, 13, 15];
//
// function binarySearch (list, item) {
//   let low = 0;
//   let high =
// }

// function sayGreeting(greeting) {
//   var response = prompt("What is your name?");
//   alert(greeting + ", " + response + "!");
// }
//
// sayGreeting("Have a good day");

// function multiply(a, b) {
//   return a * b;
// }
//
// console.log(multiply(3, 6));
// console.log(multiply(2, 53));

// var movies = ['Avengers', 'Wonder Woman', 'Black Panther', 'The Last Jedi'];
// console.log(movies[3]); // The Last Jedi
// movies.push('Lady Bird'); // Adds 'Lady Bird' to the last index position in the movies array.
// console.log(movies);
// movies.pop(); // Removes(pops) 'Lady Bird' from the last index position in the movies array.
// console.log(movies);

// Loops
// movies.forEach(function(movie) {
//   alert(movie);
// });

// arrow function
// movies.forEach(movie => alert(movie));
//
// for (let movie of movies) {
//   console.log(movie);
// }
//
// var counter = 1;
//
// do {
//   console.log(counter);
//   counter = counter + 1;
// } while (counter < 10);
//
//
// fruits = ['apple', 'pear', 'mango'];
//
// let capFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(capFruits);
// console.log(fruits);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let times5 = [];

// times5 should be: [5,10,15,20,25,30,35,40,45,50]
// Write your code below
// numbers.forEach(function(number) {
//   let multiply = number * 5;
//   times5.push(multiply);
// });
//   console.log(times5);

// what do i need?
// - iterate thru the numbers array with forEach method.
// - multiply each iterated number by 5.
// - store the number numbers in the times5 array with the map method.


// Store and Access Data with Objects
// var movies = [
//   {
//     title: 'Wonder Woman',
//     time: '1pm',
//     status: 'unavailable'
//   },
//   {
//     title: 'Avengers',
//     time: '2pm',
//     status: 'available'
//   },
//   {
//     title: 'Titanic',
//     time: '3pm',
//     status: 'unavailable'
//   },
//   {
//     title: 'Us',
//     time: '4pm',
//     status: 'available'
//   }
// ];
//
// for(var movie of movies) {
//   if (movie.status === 'available') {
//     console.log(`The movie ${movie.title} plays at ${movie.time}`);
//   } else {
//     console.log(`Sorry, the movie ${movie.title} is playing at ${movie.time}`);
//   }
// }
