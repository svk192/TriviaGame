
var wordArray = ['Friends','Suits','GameOfThrones','TheOffice','BreakingBad']; 




var currentWord;
var blanks = [];
var userChoice;
var userChoices = [];
var wins = 0;
var losses = 0;
var currentWordArray = [];
var remainingLetters; 
var guesses;
var currentWordText;

// var currentWordText= document.getElementById("currentWord");
var guessesText= document.getElementById("guesses");
var winsText = document.getElementById("Wins");
var lossesText = document.getElementById("losses");

function newGame(){
    document.getElementById("currentWord").innerHTML ='';
    currentWord =  wordArray[Math.floor(Math.random()*wordArray.length)];
    remainingLetters = currentWord.length;
    userChoices = [];    
    // blanks = [];
    currentWordArray = currentWord.split("");
        for(i = 0; i<currentWord.length;i++){
        // blanks.push("_");
        currentWordText = document.createElement("div");
        currentWordText.innerHTML = "_";
        currentWordText.classList.add("letter")
        currentWordText.id = i;
        document.getElementById("currentWord").appendChild(currentWordText);
        }
    guesses = 12;

   
document.getElementById("left").innerHTML = "<img src=\"assets\\images\\" + currentWord.length + '.jpg"  height="200px" width="300px"/>';
   
   
   
    guessesText.textContent = "Guesses: " + guesses;
    winsText.textContent = "Wins: "+ wins;
    lossesText.textContent="Losses: "+losses;
}

newGame();

    document.onkeyup = function(event) {
    userChoice = event.key;
        if(userChoices.indexOf(userChoice.toLowerCase()) === -1){         
            
            if(currentWordArray.indexOf(userChoice.toLowerCase()) === -1
            && currentWordArray.indexOf(userChoice.toUpperCase()) === -1 ){
                guesses--;    userChoices.push(userChoice);
                if (guesses===0){losses++;newGame();}
                }
            else{            
                    for(i=0; i <currentWord.length; i++){
                        if(userChoice.toLowerCase() === currentWordArray[i].toLowerCase() )
                        {
                            remainingLetters--;
                            document.getElementById(i).textContent =currentWordArray[i];
                            userChoices.push(userChoice);

                        }
                    }
                    if (remainingLetters===0) {wins++;newGame();}
                    
                }

            guessesText.textContent = "Guesses: " + guesses;
            winsText.textContent = "Wins: "+ wins;
            lossesText.textContent="Losses: "+losses;
        }
        else{
        alert("already pressed that!")
        }       
    }
// }