userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector(".msg-container");  // Correcting element reference
// const userScorepara = document.querySelector("#user-score");
// const compScorepara = document.querySelector("#computer-score");


let genCompChoice = () => {
      option = ["rock", "paper", "scissor"];
      randidx = Math.floor(Math.random() * 3);
      return option[randidx];
};

const drawGame = () => {
      
      msg.innerText = "game draw";
      msg.style.backgroundColor = "yellow";
};

let userWin = 0;

let showWinner = (userWin, userChoice, compChoice) => {

      if(userWin){
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
      

}else{
compScore++;
compScorePara.innerText =  compScore;
msg.innerText = `you loose!  ${compChoice} beats your ${userChoice}`;
      
      msg.style.backgroundColor = "red";
      
};
};

const playGame = (userChoice) => {
      const  compChoice = genCompChoice();
      if(userChoice === compChoice) {
            drawGame();
      }else  {
         if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
      }else 
      if (userChoice === "paper" ) {
userWin = compChoice === "scissor" ? false : true;
            }else {
                  userWin = compChoice === "rock" ? false : true;
            }
      showWinner(userWin,userChoice,compChoice);
      };
      
};

choices.forEach((choice) => {
choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
});
});