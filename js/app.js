'use strict';

console.log('Hello World')

let userName = prompt('What is your name?')

alert(`Welcome to my site ${userName}! Please answer yes or no to the following questions.`);

let questionOne = prompt('Do I live in Philadelphia?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
alert('Correct')
// console.log('Correct')
} else if (questionOne === 'no' || questionOne === 'n'){
alert('Incorrect, I live in the Philadelphia.')
// console.log('Incorrect, I live in the Philadelphia.')
}

let questionTwo = prompt('Did I borned in China?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y') {
alert('Correct')
// console.log('Correct')
} else if (questionTwo === 'no' || questionTwo === 'n'){
alert('Incorrect, I borned in China.')
// console.log('Incorrect, I borned in China.')
}

let questionThree = prompt('Did I joined the US Army?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y') {
alert('Incorrect, I joined the US Navy.')
// console.log('Incorrect, I joined the US Navy.')
} else if (questionThree === 'no' || questionThree === 'n'){
alert('Correct')
// console.log('Correct')
}

let questionFour = prompt('Do I like to play Poker?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y') {
alert('Correct')
// console.log('Correct')
} else if (questionFour === 'no' || questionFour === 'n'){
alert('Incorrect, I like to play Poker.')
// console.log('Incorrect, I like to play Poker.')
}

let questionFive = prompt('Am I a real estate agent?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y') {
alert('Correct')
// console.log('Correct')
} else if (questionFive === 'no' || questionFive === 'n'){
alert('Incorrect, I am a real estate agent.')
// console.log('Incorrect, I am a real estate agent.')
}


alert(`Thanks for playing, ${userName}. Thanks for coming to my site!`)