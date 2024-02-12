let game:RockPaperScissorsGame;

enum RPSmove{
    ROCK=1,
    PAPER=2,
    SCISSOR=3
}

class RockPaperScissorsGame {
    private winner;
    private userChoice;
    private computerChoice;
    private computerS;
    private userS;
    private hourglass;
    private userScore;
    private computerScore;
    private moves:RPSmove;

    constructor() {
        this.winner = document.getElementById('winner')
        this.userChoice = document.getElementById('userChoice')
        this.computerChoice = document.getElementById('computerChoice')
        this.computerS = document.getElementById('computerScore')
        this.userS = document.getElementById('userScore')
        this.hourglass = `<div class="hourglassBackground">
            <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
            </div>
            </div>`
        this.userScore = 0
        this.computerScore = 0
        const gameScreen = document.getElementById('gameScreen')
        const startGame = document.getElementById('startGame')
        startGame.innerHTML=``;
        gameScreen.innerHTML=`<button class="rps-options" onclick="chooseMove(1)"><span class="text">Rock</span></button>
        <button class="rps-options" onclick="chooseMove(2)"><span class="text">Paper</span></button>
        <button class="rps-options" onclick="chooseMove(3)"><span class="text">Scissors</span></button>`
    }

    rpsSelection(option: RPSmove) {
        if (option === RPSmove.ROCK) {
            this.userChoice.innerHTML = `You Choose: ROCK`
            this.computerChoice.innerHTML = `Computer is Choosing` + this.hourglass
            this.winner.innerHTML = ``
            setTimeout(() => this.computersTurn(1), 2000)
        } else if (option === RPSmove.PAPER) {
            this.userChoice.innerHTML = `You Choose: PAPER`
            this.computerChoice.innerHTML = `Computer is Choosing` + this.hourglass
            this.winner.innerHTML = ``
            setTimeout(() => this.computersTurn(2), 2000)
        } else if (option === RPSmove.SCISSOR) {
            this.userChoice.innerHTML = `You Choose: SCISSORS`
            this.computerChoice.innerHTML = `Computer is Choosing` + this.hourglass
            this.winner.innerHTML = ``
            setTimeout(() => this.computersTurn(3), 2000)
        }
    }


    private computeWinner(userCh: number, computerCh: number) {
        if (userCh === computerCh) {
            this.winner.innerHTML = `Its a TIE!`
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 1 && computerCh == 2) {
            this.winner.innerHTML = `Computer Won!`
            this.computerScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 1 && computerCh == 3) {
            this.winner.innerHTML = `User Won!`
            this.userScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 2 && computerCh == 1) {
            this.winner.innerHTML = `User Won!`
            this.userScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 2 && computerCh == 3) {
            this.winner.innerHTML = `Computer Won!`
            this.computerScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 3 && computerCh == 1) {
            this.winner.innerHTML = `Computer Won!`
            this.computerScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        } else if (userCh == 3 && computerCh == 2) {
            this.winner.innerHTML = `User Won!`
            this.userScore++
            this.userS.innerHTML = `User's Score: ` + this.userScore
            this.computerS.innerHTML = `Computer's Score: ` + this.computerScore
        }
    }


    private computersTurn(userCh: number) {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        this.computerChoice.innerHTML = `Computer Choose: ROCK`
        this.computeWinner(userCh, 1)
    } else if (choice === 2) {
        this.computerChoice.innerHTML = `Computer Choose: PAPER`
        this.computeWinner(userCh, 2)
    } else if (choice === 3) {
        this.computerChoice.innerHTML = `Computer Choose: SCISSORS`
        this.computeWinner(userCh, 3)
    }
    }

}

function startingGame(){
    game = new RockPaperScissorsGame();
}

function chooseMove(move:number){
    if(move==1){
        game.rpsSelection(RPSmove.ROCK);
    }
    else if(move==2){
        game.rpsSelection(RPSmove.PAPER);
    }
    else if(move==3){
        game.rpsSelection(RPSmove.SCISSOR);
    }
}
