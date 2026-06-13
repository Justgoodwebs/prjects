let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector ("#msg")
const userScorePara = document.querySelector ("#user-score")
const compScorePara = document.querySelector ("#comp-score")

const genComputerChoice = () => {
  const option = ["rock" , "paper" , "scissors"]
  const Idx = Math.floor (Math.random () *3)
  return option[Idx]
  
}
const drawGame = () => {
  console.log ("game was draw")
  msg.innerText = "game was draw , play again"
  msg.style.backgroundColor = "grey"
}

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin === true) {
    userScore++
    userScorePara.innerText = userScore;
    msg.innerText = `you win ! yours ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  } else {
    compScore++
    compScorePara.innerText = compScore;
    msg.innerText = `you loose . ${compChoice} beats yours ${userChoice}`
    msg.style.backgroundColor = "red"
  }
}

const playGame = (userChoice) => {
  const compChoice = genComputerChoice ()
  console.log (" user choice =" ,userChoice , "comp choice =" , compChoice)
  if (userChoice === compChoice) {
    drawGame ()
  } else {
    let userWin = true ;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true ;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true ;
    }
      showWinner (userWin , userChoice , compChoice)

    
  }
}

choices.forEach ((choice) =>{
  choice.addEventListener ("click" , () => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
  })
})
