const output = document.createElement('div');
document.body.appendChild(output);
const output1 = document.createElement('div');
document.body.appendChild(output1);
const output2 = document.createElement('div');
document.body.appendChild(output2);

const itemInput2 = document.createElement('input');
itemInput2.setAttribute('type', 'number');
itemInput2.setAttribute('placeholder', 'your number');
const itemButton = document.createElement('button');
output.appendChild(itemInput2);

itemButton.textContent = "Guess";
itemButton.addEventListener('click', player)

output.appendChild(itemButton);


function Game(min, max) {
    this.min = min;
    this.max = max;
    this.gameOutput = function () {
        console.log(gameOutput);
    }
    // message of the method rand Num
    this.randNum = function() {
        return Math.floor(Math.random() * (this.max - this.min) + this.min)
    }
}

function TheGuess(playerNum, theRandomNum,playerWinsVals) {
    this.playerNum = playerNum;
    this.theRandomNum = theRandomNum;
    this.playerWinsVals = playerWinsVals;

    // return players score
    this.playerScore = function(playerWinsVals) {
        let score = 0;
        let playerWins = this.playerWinsVals;
        score++
        playerWins += score
        console.log("This is score: " + playerWins);
        return playerWins;
    }

    this.output = function(playerNum, theRandomNum) {
        let output3 = document.createElement('div');
        document.body.appendChild(output3);
        
       let playerChoice = this.playerNum;
       let computerChoice = this.theRandomNum
       console.log("This is playerChoice: " + playerChoice)
       console.log("This is computerChoice: " + computerChoice)

       let obj = {playerChoice, computerChoice}
       let objVal1 = obj.playerChoice
       let objVal2 = obj.computerChoice
       console.log(objVal1);
       console.log(objVal2);
      
       if(objVal1 > objVal2) {
           return output3.innerHTML += `<h3>You need to guess lower</h3>`
       }
       else if(objVal1 < objVal2) {
           return output3.innerHTML += `<h3>You need to guess higher</h3>`
       }
       else if(objVal1==objVal2){
        
           return output3.innerHTML +=`<h3>You were spot on</h3>` 
       } else {
           return output3.innerHTML = "";
       }
    }
}

function player(playerWinsVals) {
    let tempValue = itemInput2.value;
    let tempGuess = Number(tempValue);
    // new class object here for randon Number
    let randomNumGen = new Game(1,15)
    let yrRandomNum = randomNumGen.randNum()
    console.log(`This is random Number ${yrRandomNum}`)
    let tempNum = new TheGuess(tempGuess,yrRandomNum,playerWinsVals);
    console.log(tempNum)
    //Outputs player number on the guess
    let test = tempNum.output()
    let playerScoreObj = tempNum.playerScore();
    console.log(playerScoreObj)
 }
