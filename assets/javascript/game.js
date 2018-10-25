
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
        
        blueButton = Math.floor(Math.random() * 12) + 1;

        redButton = Math.floor(Math.random() * 12) + 1;
       
        yellowButton = Math.floor(Math.random() * 12) + 1;
        
        greenButton = Math.floor(Math.random() * 12) + 1;
        
        computerPick = Math.floor(Math.random() * 101) + 19;
        
        $("#random-area").text(computerPick);
        
        $("#score-area").text(userScore);
      
    };
// following code is using the onclick function to add to the user score//



$("#bluePic").on("click", function () {
    var blueScore = userScore += blueButton;
    $("#score-area").html(blueScore);
    
});  


$("#redPic").on("click", function () {
        var redScore = userScore += redButton;
        $("#score-area").html(redScore);
});


$("#yellowPic").on("click", function () {
    var yellowScore = userScore += yellowButton;
    $("#score-area").html(yellowScore);
});


$("#greenPic").on("click", function () {
    var greenScore = userScore += greenButton;
    $("#score-area").html(greenScore);
});

    


 

    startGame();
});