// steps to making this quiz
// 1. initial page contains h1 that says coding quiz, and a start button top left has top scores
// on start there is a timer and a score that ticks down by 1 per second.
// 2. create a template for 10 questions with 4 answers. On button click the next button appears, if correct answer then add 10, if wrong then minus 10 seconds Do this with a class tag for correct answers.
//have a text box to enter initials for the final score, save it and write it to the top scores.







document.getElementById("startbutton").addEventListener("click", function(){
    var timer=100;
    //var timeLeft = timer-questionsWrong
   // var finalScore = gameScore + endTime
       function timeMinus(){
       timer = timer-1;
       console.log(timer); 
    }
    

    timerTick = setInterval (timeMinus, 1000);
    
       


        
      
         





})