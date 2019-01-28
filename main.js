// var secondsPerMin = 60;
// var minPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
// document.write("There are " + secondsPerDay + " seconds in a day!");
// var age = 28;
// var alive = secondsPerDay * daysPerWeek * weeksPerYear * age;
//
// document.write("I've been alive for " + alive + " seconds.");

// var HTMLBadges = prompt("How many HTML Badges do you have?");
// var CSSBadges = prompt("How many CSS Badges do your have?");
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// document.write("You have " + totalBadges + " total badges.");

// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left.]';
// questions -= 1;
// var adjective = prompt("Type in an adjective." + questionsLeft);
// var questionsLeft = ' [' + questions + ' questions left.]'
// questions -= 1;
// var verb = prompt("Type in a verb please." + questionsLeft);
// var questionsLeft = ' [' + questions + ' questions left.]'
// questions -= 1;
// var noun = prompt("Gimmie a noun." + questionsLeft);
// alert('Alright! Are you ready!?');
// var sentence = "There once was a " + adjective;
// sentence += ' programmer. Who wanted to ' + verb;
// sentence += ' his '+ noun + " through a wall.";
// alert(sentence);
//
// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left.]';
// questions -= 1;


// var input1 = prompt('Give me a random number please.');
// var inputNumber1 = parseInt(input1);
// var input2 = prompt('I need one more number.');
// var inputNumber2 = parseInt(input2);
// var randomNumber = Math.floor(Math.random() * inputNumber1) + 1;
// var secondRandomNumber = Math.floor(Math.random(randomNumber) * inputNumber1) + 1;
// var message = "<p>" + secondRandomNumber + " is a random number between" + randomNumber + " and " + inputNumber1 + "</p>";
// document.write(message);
//
// var answer = prompt('What programming langue are you using?');
// if (answer.toUpperCase() === 'RUBY') {
//   document.write("<p>That's Right!</p>");
// } else {
//   document.write("<p>That's Wrong!</p>");
//
// }

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) +1;
// var guess = prompt("I am thinking of a number between 1 and 6. What is it?");
// if (parseInt(guess) === randomNumber ) {
//   correctGuess = true;
// } else if ( parseInt(guess) < randomNumber) {
//     var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
//     if (parseInt(guessMore) === randomNumber) {
//       correctGuess = true;
//     }
//   else if ( parseInt(guess) > randomNumber) {
//     var guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
//     if (parseInt(guessLess) === randomNumber) {
//       correctGuess = true;
//     }
//   }
// }
// if (correctGuess) {
//   document.write('You chose correctly!');
// } else {
//   document.write('You chose wrong!';
// }
// ---------------------------------------------------------------
//  BELOW IS A 5 QUESTION QUIZ I MADE TO LEARN HOW TO USE if() and else if() CONDITIONAL STATEMENTS!
// //this collects how many answers the user got correct
// var correct = 0;
//
//
// //questions
// var answer1 = prompt('What color is the sky?');
// if (answer1.toUpperCase() === 'BLUE') {
//   correct += 1;
// }
// var answer2 = prompt('What color are my eyes?');
// if (answer2.toUpperCase() === 'BLUE') {
//   correct += 1;
// }
// var answer3 = prompt('What is DJ\'s favorite drink?');
// if (answer3.toUpperCase() === 'BEER') {
//   correct += 1;
// }
// var answer4 = prompt('Whose the best dog in the world?');
// if (answer4.toUpperCase() === 'BUCK') {
//   correct += 1;
// }
// var answer5 = prompt('Did you think it was last forever?');
// if (answer5.toUpperCase() === 'NO') {
//   correct += 1;
// }
//
// if (correct === 5) {
//   document.write('You got all 5 questions correct! you get a GOLD STAR!');
// } else if (correct === 4) {
//   document.write('You got 4 out of 5 questions correct! you get a Silver STAR!');
// } else if (correct === 3) {
//   document.write('You got 4 out of 5 questions correct! you get a Silver STAR!');
// } else if (correct < 3) {
//   document.write('I apologies but you missed so many that you just straight up LOST.');
// }
// ---------------------------------------------------------------------------------------------

// ----------------------------- FUNCTIONS -----------------------------

// function alertRandom() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   alert(randomNumber);
// }
//
// alertRandom();
//
// function getRandomNumber() {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
//
// alert(getRandomNumber());
// console.log(getRandomNumber());
//
// function isEmailEmpty() {
//   var field = document.getElementById('email');
//   if (field.value === '') {
//     return True;
//   } else {
//     return False;
//   }
// }
// 
// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
//   alert('Please enter an email address');
// }
// function getRandomNumber(upper) {
//   var randomNumber = Math.floor(Math.random() * upper) + 1;
//   return randomNumber;
// }
//
// function getArea(length, width, unit) {
//   var area = length * width;
//   return area + " " + unit;
// }
//
// document.write(getArea(10, 20, "sq ft"));
//
// function max(walls, windows) {
//   var walls = 4;
// 	var windows = 2;
//   if (windows > walls) {
//   	return windows;
// 	} else if (windows < walls) {
//     	return walls;
//     } else {
//        return false;
//       }
// }
// document.write(max());
//
// function getRandomNumber(lower, upper) {
//   if ( isNaN(lower) || isNaN(upper) ) {
//     throw new Error("Sorry but both arguments need to be a number. :)");
//   }
//   var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }
// console.log(getRandomNumber(12, 'orange'));
