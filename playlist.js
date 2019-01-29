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
// var playlist = [
//   "Louie Louie",
//   "Maybellene",
//   "Born to Run",
//   "I did it my way",
//   "Respect",
//   "Imagine"
// ];
// var playlistString = playlist.join(', ');
// console.log(playlistString);
//
// var friends = [
//   'Dane',
//   'Dj',
//   'Gagle',
//   'Tyle',
// ];
//
// var airForceFriends = ['Pat', 'Lombard', 'Hartman', 'Katie'];
// var friendsTogether = friends.concat(airForceFriends); //.concat adds two arrays together
// console.log(friendsTogether);
//
// var fruits = ['apple', 'banana', 'orange', 'grape'];
// var position = fruits.indexOf('banana');
// console.log(position);

// var inStock = ['apple', 'eggs', 'milk', 'cookie', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onions', 'tofu', 'frozen dinner', 'cucumber'];
//
// var search;
// function print(message) {
//   document.write('<p>' + message + '</p>');
// }
//
// while (true) {
//   search = prompt("Search for a product in our store. Type 'list' to see all of the produce and 'quit' to exit.");
//   search = search.toLowerCase();
//   if (search === 'quit') {
//     break;
//   } else if (search === 'list') {
//     print(inStock.join(', '));
//   } else {
//     if (inStock.indexOf(search) > -1) {
//       print('Yes, we have ' + search + ' in the store.');
//     } else {
//       print(search + ' is not inl stock.');
//     }
//   }
// }

var playlist = [
  ['I Did It My Way', ' Frank Sinatra'],
  ['Respect', 'Aretha Frankline'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs(songs) {
  var listHTML = '<ol>';
  for (var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playlist);
