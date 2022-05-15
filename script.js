function func1() {
    Array.from(document.getElementsByClassName("cell")).forEach((cell) => cell.addEventListener("click", implement));
}
let valuematrix = ["", "", "", "", "", "", "", "", ""];
let gamestatus = true;
let currentPlayer = "X";
let turn=()=>`Player ${currentPlayer} turn now`;
let playerWon = () => `player ${currentPlayer} has won`;
function implement(event) {
     let cell = parseInt(event.target.getAttribute("data-cell-index"));
     if (valuematrix[cell] !== "" || gamestatus == false)
        return;
    else {
        insertValue(event.target, cell);
    }
}
function insertValue(target, cell) {
    valuematrix[cell] = currentPlayer;
    target.innerHTML = currentPlayer;
    //console.log(valuematrix,target);
    winningCondition();
   if (gamestatus==true)
   {
    currentPlayer = currentPlayer == "X" ? "0" : "X";
    document.getElementsByClassName("game--status")[0].innerHTML = turn();
   }
                
}
let winningMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function winningCondition() {
    for (let i = 0; i < winningMatrix.length; i++) {
        let matrix = winningMatrix[i];
      //  console.log("a", matrix[0]);
        let a = valuematrix[matrix[0]];
        let b = valuematrix[matrix[1]];
        let c = valuematrix[matrix[2]];
        if (a == "" || b == "" || c == "")
        {
            continue;
        }
        if (a == b && b == c) {
            let msg = playerWon();
            document.getElementsByClassName("game--status")[0].innerHTML = msg;
            gamestatus=false;
            return;
            
        }
    }
            if (!valuematrix.includes("")) {
                document.getElementsByClassName("game--status")[0].innerHTML = "Match is draw";
                gamestatus=false;
                return;
               
            
        
    }
}
document.getElementsByClassName("game--restart")[0].addEventListener("click",restartGame);
function restartGame()
{
   // console.log("start");
    gamestatus=true;
    valuematrix = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementsByClassName("game--status")[0].innerHTML=turn();
    document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

func1();