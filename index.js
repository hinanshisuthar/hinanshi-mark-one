const readlineSync = require('readline-sync');

console.log("Welcome to 'Do you know me well? ' quiz");
var userName = readlineSync.question("What's your name? ");
console.log("Hi " + userName + " welcome!");

console.log("\n Below are the rules for the game: ");

console.log('1.' + 'For every correct answer you get 1 point');
console.log('2.' + 'For the wrong answer you lose 1 point');
console.log('3.' + 'Answer in word word');
console.log('\n LETS SEE HOW MUCH YOU KNOW ME  \n');


console.log("---------x---------x--------x--------x---------x--------x---");

var questions = [
  {
    question : 'Do I have a pet ? ',
    answer : 'yes'
  },
  {
    question : 'What is my favorite food ? ',
    answer : 'pasta'
  },
  {
    question : 'Which is my favorite color ? ',
    answer : 'black'
  },
  {
    question : 'What do I do in my free time ? ',
    answer : 'yoga'
  },
  {
    question : 'What is my favorite thing to do when I am stressed out ? ',
    answer : 'sleep'
  },
  {
    question : 'What do I do almost everyday ? ',
    answer : 'excercise'
  },
  {
    question :'Which is my favorite place to visit ? ',
    answer : 'paris'
  },
  {
    question : 'Which is my favorite animal ? ',
    answer : 'dog'
  },
  {
    question : 'I like winter or summer ?  ',
    answer : 'winter'
  },
  {
    question : 'How old am I ?  ',
    answer : '19'
  }
];


var score = 0;
function quiz(question, answer)
{
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer===answer){
    console.log("You are right!");
    score=score+1;
  } else {
    console.log("You are wrong!");
  }
}


for(var i=0;i<questions.length;i++){
  var currentQ = questions[i];
  quiz(currentQ.question, currentQ.answer);
}

console.log("YAY! you scored " + score);

var highscore = [{
  name1 : "rachel",
  score1 : 2
}, {
  name1 : "monica",
  score1 : 1
}, {
  name1 : "phoebe",
  score1 : 0
}];




var max = highscore[0].score1;
for(var i=0;i<highscore.length;i++)
{
  if(highscore[i].score1>max){
    max = highscore[i].score1;
  }
}

if(score>max){
  highscore[0].score1 = score;
  highscore[0].name1 = userName;

  console.log("You beat the high score");
}
else{
  highscore[0].score1 = max;
  console.log("Better luck next time")
}

console.log("Highscores");
console.table(highscore);

if(readlineSync.keyInYN("Can you please rate my quiz by answering a y(yes) or n(no). It would mean a lot."))
{
  console.log("Thank you so much for your feedback");
}
else{
  console.log("Can you please ping me over upon what I can improve? . Thank you so much for your feedback!")
}
