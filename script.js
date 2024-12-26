// // // let newBtn = document.createElement("button");
// // // newBtn.innerText = "click me";

// // // newBtn.style.color = "white";
// // // newBtn.style.backgroundColor = "red";


// // // document.querySelector("body").prepend(newBtn);

// // // console.log(newBtn);




// // // //  let heading = document.getElementsByClassName("heading")[0]; // Corrected line
// // // //  console.log(heading);
// // //  let btn1 = document.querySelector("#btn");

// // // btn1.onclick = () => {
// // // console.log("btn was clicked");
// // // let a = 25;
// // // a++;
// // // console.log(a);
// // // };

// // let btn1 = document.querySelector("#btn");

// // btn1.addEventListener("click", (evt) => {
// // console.log("btn1 was clicked - handler 1");
// // });

// // btn1.addEventListener("click", () => {
// // console.log("btn1 was clicked - handler 2");
// // });

// // const handler3 = () => {
// // console.log("btn1 was clicked - handler 3");
// // };

// // btn1.addEventListener("click", () => {
// // console.log("btn1 was clicked  -  handler 4");
// // });

// // btn1.removeEventListener('click', handler3);

// let modbtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmod = "light";
// modbtn.addEventListener('click', () => {
// if(currmod === "dark"){
//       currmod = "light";
//       body.classList.add("light");
//       body.classList.remove("dark");
// }else{
//       currmod = "dark";
//       body.classList.add("dark");
//       body.classList.remove("light");
// }

// console.log(currmod);
// });

// let userScore = 0;
// let computerScore = 0;

// const choices = document.querySelectorAll(".choice");
// var msg = document.getElementsByClassName("msg-container");
// const genCompChoice = () => {
//       const option = ["rock", "paper", "scissor"];
//       const randidx = Math.floor(Math.random() * 3 );
//       return option [randidx];
      

// };

//  const drawGame  = () => {
//       ("game was draw :");
//       msg.innerText = "game draw";
//  };

//  let draGame = ("game was draw");

// let userWin = true;
// let showWinner = () => {
//       if (userWin) {
//             console.log("you win");
//             msg.innerText = "you win!";
//       } else {
//             console.log("you lose");
//             msg.innerText = "you win.";
//       }
// };
// const playgame = (userChoice) => {
//       console.log("user choice = ", userChoice);
//       const compChoice = genCompChoice();
//       console.log("comp choice = ", compChoice);
//       if(userChoice === compChoice){
//             console.log(drawGame);
//       } else {

// if(userChoice === "rock"){
//       userWin = compChoice === "paper" ? false : true;
// }else if (userChoice === "paper"){
//       userWin = compChoice === "scissor" ? false : true;
// }else {
//       userWin = compChoice === "rock" ? false : true;
// }
// showWinner(userWin);
//       };
// };

// choices.forEach((choice) => {
//       choice.addEventListener("click", () => {
//             const userChoice = choice.getAttribute("id");

//             playgame(userChoice);
 
//       });
// });


//variables for increase score
let userScore = 0;
let compScore = 0;

//access elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");  // Correcting element reference
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

//generate computer choice
const genCompChoice = () => {
      const option = ["rock", "paper", "scissor"];
      const randidx = Math.floor(Math.random() * 3);
      return option[randidx];
};

//draw game function
const drawGame = () => {
      console.log("game was draw:");
      msg.innerText = "Game draw!";
      msg.style.backgroundColor = "dark-blue";
};

//winning function
let userWin = true;
const showWinner = (userWin, userChoice, compChoice) => {  // Ensure userWin is passed to this function
      if (userWin) {
            userScore++;
            userScorepara.innerText = userScore;
            msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
      } else {
      compScore++
      compScorepara.innerText = compScore;
            
            msg.innerText = `You lose! ${compChoice} beats your ${userChoice} `;
            msg.style.backgroundColor = "red";
      }
};

//play game function
const playgame = (userChoice) => {

      const compChoice = genCompChoice();
      
      if (userChoice === compChoice) {
            drawGame();
      } else {
            if (userChoice === "rock") {
                  userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                  userWin = compChoice === "scissor" ? false : true;
            } else {
                  userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);  // Pass the userWin flag to showWinner function
      }
};

//addeventlistener
choices.forEach((choice) => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playgame(userChoice);
      });
});













