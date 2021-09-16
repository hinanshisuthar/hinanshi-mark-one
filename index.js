const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blueBright("Welcome to 'Do you know me well? ' quiz"));
var userName = readlineSync.question("What's your name? ");
console.log("Hi " + userName + " welcome!");

console.log("\n Below are the rules for the game: ");

console.log('1.' + chalk.magentaBright('For every correct answer you get 1 point'));
console.log('2.' + chalk.magentaBright('For the wrong answer you lose 1 point'));
console.log('3.' + chalk.magentaBright('Answer in word word'));
console.log(chalk.red('\n LETS SEE HOW MUCH YOU KNOW ME  \n'));


console.log("---------x---------x--------x--------x---------x--------x---");

var questions = [
  {
    question : chalk.blueBright('Do I have a pet ? '),
    answer : 'yes'
  },
  {
    question : chalk.blueBright('What is my favorite food ? '),
    answer : 'pasta'
  },
  {
    question : chalk.blueBright('Which is my favorite color ? '),
    answer : 'black'
  },
  {
    question : chalk.blueBright('What do I do in my free time ? '),
    answer : 'yoga'
  },
  {
    question : chalk.blueBright('What is my favorite thing to do when I am stressed out ? '),
    answer : 'sleep'
  },
  {
    question : chalk.blueBright('What do I do almost everyday ? '),
    answer : 'excercise'
  },
  {
    question :chalk.blueBright('Which is my favorite place to visit ? '),
    answer : 'paris'
  },
  {
    question : chalk.blueBright('Which is my favorite animal ? '),
    answer : 'dog'
  },
  {
    question : chalk.blueBright('I like winter or summer ?  '),
    answer : 'winter'
  },
  {
    question : chalk.blueBright('How old am I ?  '),
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
    console.log(score);
  } else {
    console.log("You are wrong!");
    console.log(score);
  }
}


for(var i=0;i<questions.length;i++){
  var currentQ = questions[i];
  quiz(currentQ.question, currentQ.answer);
}

console.log(chalk.red("YAY! you scored " + score));

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

console.log(chalk.magentaBright("Highscores"));
console.table(highscore);

if(readlineSync.keyInYN(chalk.magentaBright("Can you please rate my quiz by answering a y(yes) or n(no). It would mean a lot.")))
{
  console.log("Thank you so much for your feedback");
}
else{
  console.log("Can you please ping me over upon what I can improve? . Thank you so much for your feedback!")
}
