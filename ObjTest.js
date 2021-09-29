const output = document.createElement('div');
document.body.appendChild(output);
const output1 = document.createElement('div');
document.body.appendChild(output1);
const output2 = document.createElement('div');
document.body.appendChild(output2);

let output3 = document.createElement('div');
document.body.appendChild(output3);
let score = 0

//This is still to setup here, setting the input back to zero 
// function gameReset(inputval) {
//     setTimeout(() => {
//         itemInput2 = 0  
//         console.log("Test here my timer")  
//     }, 4000)
// }

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

function TheGuess(playerNum, theRandomNum, playerWinsVals) {
    this.playerNum = playerNum;
    this.theRandomNum = theRandomNum;
    this.playerWinsVals = playerWinsVals;
    this.output = function(playerNum, theRandomNum,playerWinsVals) {
    
       let playerChoice = this.playerNum;
       let computerChoice = this.theRandomNum;
       let playerWins = this.playerWinsVals;
       
       
       console.log("This is computerChoice: " + computerChoice);
       console.log("This is playerWins: " + playerWins);

       let obj = {playerChoice, computerChoice, playerWins}
       let objVal1 = obj.playerChoice
       let objVal2 = obj.computerChoice
       // This should record the player wins
       let objVal3 = obj.playerWins
       
       console.log(objVal1);
       console.log(objVal2);
       console.log(objVal3);

       if(objVal1 > objVal2) {
           return output3.innerHTML += `<h3>You need to guess lower</h3>`
       }
       else if(objVal1 < objVal2) {
           return output3.innerHTML += `<h3>You need to guess higher</h3>`
       }
       // this adds one to the player score, for the correct guess
       else if(objVal1==objVal2){
                score+1
                score = score += objVal3
                console.log("This is score: " + score);
                return output3.innerHTML +=`<h3>You are spot on</h3>` 
        //    gameReset(itemInput2)
           
       } else {
           return output3.innerHTML = "";
       }
    }
}

function player() {
    let tempValue = itemInput2.value 
    let tempGuess = Number(tempValue);
    // new class object here for randon Number
    let randomNumGen = new Game(1,15)
    let yrRandomNum = randomNumGen.randNum()
    console.log(`This is random Number ${yrRandomNum}`)
    let tempNum = new TheGuess(tempGuess,yrRandomNum,score);
    console.log(tempNum)
    //Outputs player number on the guess
    let test = tempNum.output()
 }
