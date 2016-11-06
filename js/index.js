var answers = [
  'Hot Doggy!', 
  'Theres a snake in my boots', 
  'Ice Ice Baby!', 
  'Never but you know...its only an eternity. ',
  'Sure but your Soul is mine! Think it over and get back to me', 
  'Whats that smell? And yes', 
  'Raspberries and the answer is no',
  'Memberberries', 
  'Tacos tonight!', 
  'Have you seen The Wire! Thats a damn good show', 
  'Im allergic to water. And yes.', 
  'My mom thinks Im cool', 
  'Help Me!', 
  'Get me out of here!', 
  'Listen close if you want to find the money. Im kidding theres no money. wink wink', 
  'In the future we will all wear dresses',   'Have you been to india? I seems crowded.', 
  'I like you. I mean like like you.', 
  'My shift is up. Ask later',
  'Possibly. But is that really your question?', 
  'Never, ever, ever. unless you change everything about you.', 
  'There is a small chance. But youll have to be a small person', 
  'Yes!'
];

var clear = [
  'Ask another question'
];


document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};

document.getElementById('resetButton').onclick = function () {
var clear = clear[Math.floor(Math.random() * clear.length)];
    document.getElementById('answerContainer').innerHTML = clear;
};