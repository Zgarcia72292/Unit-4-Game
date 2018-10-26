
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
  
    // adding some fun soundbites//

    var audioElementOne = document.createElement("audio");
    audioElementOne.setAttribute("src", "assets/sounds/paul3.mp3");

    var audioElementTwo = document.createElement("audio");
    audioElementTwo.setAttribute("src", "assets/sounds/scientist.mp3");

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


// print the wins and losses and set the win conditions in a funct ion. We need to compare the user score to the computer number//

function winCheck (){

    if (userScore === computerPick){
        
        wins++;
        
        $("#wins").text("Wins: " + wins);

        

        alert("Congratulations!");

        audioElementTwo.play();

        resetGame();
    }

    else if (userScore > computerPick){
        
        losses++;
        
        $("#losses").text("Losses: " + losses);

        

        alert("Sorry, try again!");

        $("#paul").html("<img src='data:image/jpeg;base64,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'/>");

        audioElementOne.play();

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