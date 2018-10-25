
$(document).ready(function () {
  

    // Setting up global variables as per the pseudo code//
  
    var computerPick = "";
   
    var wins = 0;
   
    var losses = 0;
   
    var blueButton = "";
  
    var redButton = "";
   
    var yellowButton = "";
   
    var greenButton = "";
   
    var userScore = 0;
  
    // Now to begin coding how the game will run by adding a startgame function//
  
    function startGame() {
       
        // randomizing the variables upon game start //
        
        blueButton = Math.floor(Math.random() * 8) + 1;

        redButton = Math.floor(Math.random() * 13) + 1;
       
        yellowButton = Math.floor(Math.random() * 15) + 1;
        
        greenButton = Math.floor(Math.random() * 20) + 1;
        
        computerPick = Math.floor(Math.random() * 101) + 19;
        
        $("#random-area").text(computerPick);
        
        $("#score-area").text(userScore);
      
    };

    // call the function

startGame();

// create reset condition//

function resetGame(){
  
    userScore=0;
  
    startGame();
}

// this resets the user score, and restarts the game function that will re-select and random number and re-assign the buttons random values//


// print the wins and losses and set the win conditions in a function. We need to compare the user score to the computer number//

function winCheck (){

    if (userScore === computerPick){
        
        wins++;
        
        $("#wins").text("Wins: " + wins);

        alert("Congratulations!");

        resetGame();
    }

    else if (userScore > computerPick){
        
        losses++;
        
        $("#losses").text("Losses: " + losses);

        alert("Sorry, try again!");
        
        resetGame();
    }

    else {
        
        return false;
    }

}



// following code is using the onclick function to add to the user score, and printing to the score-area div//
// make sure the program is comparing the score with the checkWin function//



$("#bluePic").on("click", function () {
   
    newScore = userScore += blueButton;
   
    $("#score-area").html(newScore);
   
    winCheck();
    
});  


$("#redPic").on("click", function () {
      
    newScore = userScore += redButton;
    
    $("#score-area").html(newScore);
    
    winCheck();
});


$("#yellowPic").on("click", function () {
 
    newScore = userScore += yellowButton;
 
    $("#score-area").html(newScore);
 
    winCheck();
});


$("#greenPic").on("click", function () {
  
    newScore = userScore += greenButton;
  
    $("#score-area").html(newScore);
  
    winCheck();
});



// the newScore variable might be redundant but we couldnt figure out how to use just the userScore variable. The console.log kept saying userScore was undefined.
// this way worked... 


// $("#win-area").html(wins);
// $("#loss-are").hmtl(loses);

// now we provide conditions for resetting the game and adding to wins and losses


// if (newScore === computerPick){
    
//     wins++;
   
//     alert("Congratulations");

//     startGame();
// }

// else if (newScore > computerPick){
//     losses++;
//     alert.length("You lose, try again!");
//     startGame();

// }
 

   
  
});