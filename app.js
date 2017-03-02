////////////////////////////////Part 1

//Practice with Arrays

// 1
// var favMovies = ['Billy Madison', 'The Avengers', 'The Departed', 'Captain America: Civil War', 'James Bond: Spectre'];
// console.log(favMovies[1]);

// 2
// var movies = [];
// movies[0] = 'Billy Madison';
// movies[1] = 'The Avengers';
// movies[2] = 'The Departed';
// movies[3] = 'Captain America: Civil War';
// movies[4] = 'James Bond: Spectre';
// console.log(movies[0]);

// 3
// var favMovies = ['Billy Madison', 'The Avengers', 'The Departed', 'Captain America: Civil War', 'James Bond: Spectre'];
// favMovies.splice(2,0,'Happy Gilmore');
// console.log(favMovies.length);

// 4
// var movies = [];
// movies[0] = 'Billy Madison';
// movies[1] = 'The Avengers';
// movies[2] = 'The Departed';
// movies[3] = 'Captain America: Civil War';
// movies[4] = 'James Bond: Spectre';
// delete movies[0];
// console.log(movies);

// 5
// var movies = [];
// movies[0] = 'Billy Madison';
// movies[1] = 'The Avengers';
// movies[2] = 'The Departed';
// movies[3] = 'Captain America: Civil War';
// movies[4] = 'James Bond: Spectre';
// movies[5] = 'Fight Club';
// movies[6] = 'Zoolander';
// for (var i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }

// 6
// var i;
// var movies = [];
// movies[0] = 'Billy Madison';
// movies[1] = 'The Avengers';
// movies[2] = 'The Departed';
// movies[3] = 'Captain America: Civil War';
// movies[4] = 'James Bond: Spectre';
// movies[5] = 'Fight Club';
// movies[6] = 'Zoolander';
// for (i in movies) {
//   console.log(movies[i]);
// }

// 7
// var i;
// var movies = [];
// movies[0] = 'Billy Madison';
// movies[1] = 'The Avengers';
// movies[2] = 'The Departed';
// movies[3] = 'Captain America: Civil War';
// movies[4] = 'James Bond: Spectre';
// movies[5] = 'Fight Club';
// movies[6] = 'Zoolander';
// var sortedMovies = movies.sort();
// for (i in sortedMovies) {
//   console.log(sortedMovies[i]);
// }

// 8
// var i;
// var favMovies = [];
// favMovies[0] = 'Billy Madison';
// favMovies[1] = 'The Avengers';
// favMovies[2] = 'The Departed';
// favMovies[3] = 'Captain America: Civil War';
// favMovies[4] = 'James Bond: Spectre';
// favMovies[5] = 'Fight Club';
// favMovies[6] = 'Zoolander';
// var moviesThatSucked = [];
// moviesThatSucked[0] = 'Pacific Rim';
// moviesThatSucked[1] = 'Sabotage';
// moviesThatSucked[2] = 'Dumb and Dumber Too';
// var sortedMovies = favMovies.sort();
// console.log('Movies I like:');
// console.log('\n');
// for (i in sortedMovies) {
//   console.log(sortedMovies[i]);
// }
// console.log('\n');
// console.log('Movies I regret watching:');
// console.log('\n');
// for (i in moviesThatSucked) {
//   console.log(moviesThatSucked[i]);
// }

// 9
// var favMovies = [];
// favMovies[0] = 'Billy Madison';
// favMovies[1] = 'The Avengers';
// favMovies[2] = 'The Departed';
// favMovies[3] = 'Captain America: Civil War';
// favMovies[4] = 'James Bond: Spectre';
// favMovies[5] = 'Fight Club';
// favMovies[6] = 'Zoolander';
// var moviesThatSucked = [];
// moviesThatSucked[0] = 'Pacific Rim';
// moviesThatSucked[1] = 'Sabotage';
// moviesThatSucked[2] = 'Dumb and Dumber Too';
// var allMovies = favMovies.concat(moviesThatSucked);
// console.log(allMovies.sort().reverse());

// 10
// var favMovies = [];
// favMovies[0] = 'Billy Madison';
// favMovies[1] = 'The Avengers';
// favMovies[2] = 'The Departed';
// favMovies[3] = 'Captain America: Civil War';
// favMovies[4] = 'James Bond: Spectre';
// favMovies[5] = 'Fight Club';
// favMovies[6] = 'Zoolander';
// var moviesThatSucked = [];
// moviesThatSucked[0] = 'Pacific Rim';
// moviesThatSucked[1] = 'Sabotage';
// moviesThatSucked[2] = 'Dumb and Dumber Too';
// var allMovies = favMovies.concat(moviesThatSucked);
// console.log(allMovies.pop());

// 11
// var favMovies = [];
// favMovies[0] = 'Billy Madison';
// favMovies[1] = 'The Avengers';
// favMovies[2] = 'The Departed';
// favMovies[3] = 'Captain America: Civil War';
// favMovies[4] = 'James Bond: Spectre';
// favMovies[5] = 'Fight Club';
// favMovies[6] = 'Zoolander';
// var moviesThatSucked = [];
// moviesThatSucked[0] = 'Pacific Rim';
// moviesThatSucked[1] = 'Sabotage';
// moviesThatSucked[2] = 'Dumb and Dumber Too';
// var allMovies = favMovies.concat(moviesThatSucked);
// console.log(allMovies.shift());

// 12
// var favMovies = [];
// favMovies[0] = 'Billy Madison';
// favMovies[1] = 'The Avengers';
// favMovies[2] = 'The Departed';
// favMovies[3] = 'Captain America: Civil War';
// favMovies[4] = 'James Bond: Spectre';
// favMovies[5] = 'Fight Club';
// favMovies[6] = 'Zoolander';
// var moviesThatSucked = [];
// moviesThatSucked[0] = 'Pacific Rim';
// moviesThatSucked[1] = 'Sabotage';
// moviesThatSucked[2] = 'Dumb and Dumber Too';
// var allMovies = favMovies.concat(moviesThatSucked);
// allMovies.splice(7, 9, 'Fury', 'IronMan', 'Space Jam');
// console.log(allMovies);

// 13
// var employee1 = [];
// employee1['id'] = 2317;
// employee1['name'] = 'Vlad Pasculescu';
// employee1['title'] = 'Web Developer';
// employee1['department'] = 'Multi-Media';
// employee1['currentlyEmployedHere'] = true;
// var employee2 = [];
// employee2['id'] = 1234;
// employee2['name'] = 'Jorts Man';
// employee2['title'] = 'Web Designer';
// employee2['department'] = 'Multi-Media';
// employee2['currentlyEmployedHere'] = false;
// var employees = [employee1, employee2];
// console.log(employees[1]['name']);

// 14
// var employee1 = [];
// employee1['id'] = 2317;
// employee1['name'] = 'Vlad Pasculescu';
// employee1['title'] = 'Web Developer';
// employee1['department'] = 'Multi-Media';
// employee1['currentlyEmployedHere'] = true;
// var employee2 = [];
// employee2['id'] = 1234;
// employee2['name'] = 'Jorts Man';
// employee2['title'] = 'Web Designer';
// employee2['department'] = 'Multi-Media';
// employee2['currentlyEmployedHere'] = false;
// var employees = [employee1, employee2];
// var i;
// for (i in employees) {
//   console.log(employees[i]['name']);
// };

// 15
// var employee1 = [];
// employee1['id'] = 2317;
// employee1['name'] = 'Vlad Pasculescu';
// employee1['title'] = 'Web Developer';
// employee1['department'] = 'Multi-Media';
// employee1['currentlyEmployedHere'] = true;
// var employee2 = [];
// employee2['id'] = 1234;
// employee2['name'] = 'Jorts Man';
// employee2['title'] = 'Web Designer';
// employee2['department'] = 'Multi-Media';
// employee2['currentlyEmployedHere'] = true;
// var employee3 = [];
// employee3['id'] = 1434;
// employee3['name'] = 'Zak Ruvalcaba';
// employee3['title'] = 'Closet Hipster';
// employee3['department'] = 'Multi-Media';
// employee3['currentlyEmployedHere'] = false;
// var employees = [employee1, employee2, employee3];
// var i;
// for (i in employees) {
//   if (employees[i]['currentlyEmployedHere']){
//     console.log(employees[i]['name']);
//   }
// };

// 16
// var movies = [['The Avengers', 1], ['The Departed', 2], ['Billy Madison', 3], ['Spectre', 4], ['2Fast, 2Furious', 5]];
// for (var i = 0; i < movies.length; i++) {
//   for (var j = 0; j < movies[i].length; i++) {
//     if (typeof movies[i][j] == 'string')
//       console.log(movies[i][j]);
//   }
// }



// Practice With Functions

// 1
// var displayMessage = function(text) {
//   console.log(text);
// }
//
// displayMessage('This is a message bruuuhhh');

// 2
// function calculate(val1, val2) {
//   return val1 % val2
// }
// console.log(calculate(9, 2));

// 3
// var employees = ['Vlad', 'Dana', 'Val', 'Danny'];
// var otherEmployees = ['Zak', 'Julia', 'Brian']; //created another array to test a new param.
// var showEmployee = function(arr) {
//   console.log('Employees:\n\n');
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// showEmployee(employees);




/////////////////////////// Part 2


// Rock, Paper, Scissors Game

// // Ask User For Rock, Paper, Scissors
// var askUser = prompt('Rock, Paper, Scissors!\n See if you can beat the computer!\n\n To begin, enter Rock, Paper or Scissors into the box below.').toLowerCase();
//
// // Set User Choice
// var setUserChoice;
// switch (askUser) {
//   case 'rock':
//     setUserChoice = 'rock';
//     alert('Sweet! You chose Rock!\n Let\'s see what the computer chose.');
//     break;
//   case 'paper':
//     setUserChoice = 'paper';
//     alert('Awesome! You chose Paper!\n Let\'s see what the computer chose.');
//     break;
//   case 'paper':
//     setUserChoice = 'scissors';
//     alert('Gnarly! You chose Scissors!\n Let\'s see what the computer chose.');
//     break;
//   default:
//     alert('C\'mon man...really? \nProve you can follow directions by reloading this page and entering a valid response...');
// }
//
// // Set Computer's Choice
// var askComputer = Math.random();
// var setComputerChoice;
// if (askComputer <= 1 / 3) {
//   setComputerChoice = 'rock';
// } else if (askComputer > 1 / 3 && askComputer <= 2 / 3) {
//   setComputerChoice = 'paper';
// } else {
//   setComputerChoice = 'scissors';
// }
//
// // Declare Winner
// if (setUserChoice == 'rock' && setComputerChoice == 'scissors') {
//   alert('You chose Rock, and the computer chose Scissors. You won!');
// } else if (setUserChoice == 'scissors' && setComputerChoice == 'scissors') {
//   alert('You chose Scissors, and the computer chose Rock. You lost grasshopper!');
// } else if (setUserChoice == 'scissors' && setComputerChoice == 'paper') {
//   alert('You chose Scissors, and the computer chose Paper. You won!');
// } else if (setUserChoice == 'paper' && setComputerChoice == 'scissors') {
//   alert('You chose Paper, and the computer chose Scissors. You lost grasshopper!');
// } else if (setUserChoice == 'paper' && setComputerChoice == 'rock') {
//   alert('You chose Paper, and the computer chose Rock. You won!');
// } else if (setUserChoice == 'rock' && setComputerChoice == 'paper') {
//   alert('You chose rock, and the computer chose paper. You lost grasshopper!');
// } else if (setComputerChoice == setUserChoice) {
//   alert('No way! Both you and the computer chose ' + setUserChoice + '. Refresh to play again!');
// }



// Basic Calculator

// // Give directions and capture first input
// var num1 = prompt('Basic Calculator Application.\n\nThis application performs simple addition, subtraction, multiplication and division based upon two numbers you enter! \n\n Enter your first number in the box:');
//
// // Set first string to a number
// var num1Conversion = parseFlaot(num1);
//
// // Capture second input
// var num2 = prompt('Enter your second number here:');
//
// // Set second input to a number
// var num2Conversion = parseFloat(num2);
//
// // Capture operation and set to lowercase
// var askOperation = prompt('Awesome. Now enter the operation you\'d like to perform.\n\nEnter Add, Subtract, Multiply or Divide into the box:').toLowerCase();
// var mathOperation;
//
// // Switch statement to set math operation
// switch (askOperation) {
//   case 'add':
//     mathOperation = 'add';
//     break;
//   case 'subtract':
//     mathOperation = 'subtract';
//     break;
//   case 'multiply':
//     mathOperation = 'multiply';
//     break
//   case 'divide':
//     mathOperation = 'divide';
//     break;
//   default:
//     alert('D\'oh...it looks like you either can\'t follow directions or you can\'t spell. Reload and try this again.');
// }
//
// //Calculator function
// function calculator(num1Conversion, num2Conversion, mathOperation) {
//   if (mathOperation == 'add') {
//     return num1Conversion + num2Conversion;
//   } else if (mathOperation == 'subtract') {
//     return num1Conversion - num2Conversion;
//   } else if (mathOperation == 'multiply') {
//     return num1Conversion * num2Conversion;
//   } else {
//     return num1Conversion / num2Conversion;
//   }
// };
//
// //Run calculator base on inputs
// var result = parseFloat(calculator(num1Conversion, num2Conversion, mathOperation));
//
//
// //Display Result
// alert('Awesome! Here\'s the result:\n\nYou wanted to ' + mathOperation + ' ' + num1Conversion + ' by ' + num2Conversion + '\n\nThe result is: ' + result);



// Death by JavaScript

// 1
// var alphaOrder = function(text) {
//   return text.split('').sort().join('');
// };
// console.log(alphaOrder('webmaster'));

// 2
// var capitalize = function(text) {
//   var i;
//   var splitSentence = text.toLowerCase().split(' ');
//   for (var i in splitSentence) {
//     splitSentence[i] = splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
//   }
//   return splitSentence.join(' ');
// }
// console.log(capitalize('the quick brown fox'));

// 3
// var countVowels = function(text) {
//   return text.match(/[aeiouyAEIOUY]/g).length;
// };
// console.log(countVowels('The quick brown fox'));

// 4
// var passwordGenerator = function(passlength) {
//   var length = passlength;
//   var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   var password = '';
//   for (var i = 0, n = characters.length; i < length; i++) {
//     password += characters.charAt(Math.random() * n);
//   }
//   return password;
// };
// console.log(passwordGenerator(8));

// 5
// var countryNames = ['Australia', 'Germany', 'United States of America'];
// var countrySort = countryNames.sort(function(a, b) {
//   return b.length - a.length;
// });
// console.log(countrySort[0]);
