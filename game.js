let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let scoreBoard_div = document.querySelector('.score-board');
let result_div = document.querySelector('.result');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissors');

function getCompChoice() {
    let choice = ['rock','paper','scissors'];
    let i = Math.floor(Math.random()*3);
    return choice[i];
}

function win(userChoice, compChoice) {
   const smallUser = 'you'.fontsize(5).sub();
   const smallComp = 'comp'.fontsize(5).sub();
   const userChoice_div = document.getElementById(userChoice);
   userScore++;
   userScore_span.innerHTML = userScore;
   result_div.innerHTML = `${userChoice}${smallUser} beats ${compChoice}${smallComp} . You win!`;
   userChoice_div.classList.add('green-glow');
   setInterval(function(){
    userChoice_div.classList.remove('green-glow');  
   }, 500)
}

function lose(userChoice, compChoice) {
   const userChoice_div = document.getElementById(userChoice);
   const smallUser = 'you'.fontsize(5).sub();
   const smallComp = 'comp'.fontsize(5).sub();
   compScore++;
   compScore_span.innerHTML = compScore;
   result_div.innerHTML = `${userChoice}${smallUser} loses to ${compChoice}${smallComp} . You lost. . .`;
   userChoice_div.classList.add('red-glow');
   setInterval(function(){
    userChoice_div.classList.remove('red-glow');  
   }, 500)
}

function draw(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    const smallUser = 'you'.fontsize(5).sub();
    const smallComp = 'comp'.fontsize(5).sub();
    result_div.innerHTML = `${userChoice}${smallUser} equals ${compChoice}${smallComp} . It's a draw.`; 
    userChoice_div.classList.add('gray-glow');
    setInterval(function(){
     userChoice_div.classList.remove('gray-glow');  
    }, 500)
}

function game(userChoice) {
   let compChoice = getCompChoice();
   switch (userChoice + compChoice) {
     case "rockscissors":
     case "paperrock":
     case "scissorspaper":
         win(userChoice, compChoice);
         break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
         lose(userChoice, compChoice);
         break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
         draw(userChoice, compChoice);
         break;
   }
}

function main() {
rock_div.addEventListener('click',function(){
    game('rock');
});
paper_div.addEventListener('click',function(){
    game('paper');
 });
 scissors_div.addEventListener('click',function(){
    game('scissors');
 });
}
main();
