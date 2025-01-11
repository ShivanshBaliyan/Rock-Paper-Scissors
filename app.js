let userscore = 0;
let compscore = 0;
let drawscore = 0;
let totalgamesplayed = 0;

const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");
const totalGamesPlayedPara = document.querySelector("#total-game");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const   randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    drawscore++;
    drawScorePara.innerText = drawscore;
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#03045e";
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // compChoice -> paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // compChoice -> rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // compChoice -> rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        totalgamesplayed++;
        totalGamesPlayedPara.innerText = totalgamesplayed;
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});