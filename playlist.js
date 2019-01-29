// var musicPlaylist = ["Louie Louie", "Maybellene", "Born to Run", "I did it my way", "Respect", "Imagine"];
//
// var playlist = [
//   "Louie Louie",
//   "Maybellene",
//   "Born to Run",
//   "I did it my way",
//   "Respect",
//   "Imagine"
// ];

//
// console.log(musicPlaylist);
// musicPlaylist.push('Hello World');
// console.log(musicPlaylist);
// console.log(musicPlaylist.length);
//
// var playList = [];
// playList.push('I did it my way');
// playList.push('Imagine', 'Respect');
// playList.unshift('Born To Run');
// playList.unshift('Louie Louie', 'Maybellene');
// printList(playList);
//
// function print(message) {
//   document.write(message);
// }
//
// function printList(list) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i] + '<li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
// printList(playlist);
var playlist = [
  "Louie Louie",
  "Maybellene",
  "Born to Run",
  "I did it my way",
  "Respect",
  "Imagine"
];
var playlistString = playlist.join(', ');
console.log(playlistString);

var friends = [
  'Dane',
  'Dj',
  'Gagle',
  'Tyle',
];

var airForceFriends = ['Pat', 'Lombard', 'Hartman', 'Katie'];
var friendsTogether = friends.concat(airForceFriends); //.concat adds two arrays together
console.log(friendsTogether);

var fruits = ['apple', 'banana', 'orange', 'grape'];
var position = fruits.indexOf('banana');
console.log(position);
