// steps to making this quiz
// 1. initial page contains h1 that says coding quiz, and a start button top left has top scores
// on start there is a timer and a score that ticks down by 1 per second.
// 2. create a template for 10 questions with 4 answers. On button click the next button appears, if correct answer then add 10, if wrong then minus 10 seconds Do this with a class tag for correct answers.
//have a text box to enter initials for the final score, save it and write it to the top scores.

  var allQuestions = [{
    question: "If a tree falls in the forest, why does it fall?",
    options: ["It tripped over a root", "Gravity", "It took a class on Javascript that was too hard", 'That one scene from The Lion King where Scar says, "long live the king!'],
    answer: 1
  }, {
    question: "How do you spell 'Javascipt'?",
    options: ["Triple Moca Frapachino", "Jabba da Hut", "Javascript", "Fortran"],
    answer: 2
  }, {
    question: "This webpage was written in HTML, CSS, and _____?",
    options: ["Javascript", "Spite", "Pen","Finger Paint"],
    answer: 0
  },{
    question: "What does HTML stand for?",
    options: ["Hyper-Text Markup Language", "Peace Love Unity Respect", "Javascript", "Hamburgers Tators Macoroni Lasagna"],
    answer: 0
  }, {
    question: "What makes this quiz work?",
    options: ["Mice in a series of tubes", "Javascript", "Hopes and Dreams", "A pencil and paper"],
    answer: 1
  },{
    question: "2 + 2 =",
    options: ["4", "5", "Blue! No Yell-aaahhhhhh!!!", "Diet Poptarts"],
    answer: 0
  },{
    question: "'2 + 2' == ?",
    options: ["4", "2 + 2", "'2 + 2'", "'4'"],
    answer: 2
  },{
    question: "2 + 2 === ?",
    options: ["4", "a big number", "'2 + 2'", "'4'"],
    answer: 0
  },{
    question: "4 > 2",
    options: ["True", "False", "Yellow", "A Hat, but it like talks"],
    answer: 0
  },{
    question: "2 > 2",
    options: ["True", "False", "Javascript", "Neither"],
    answer: 1
    }];
    var highScore = "1 Pizza"
    score = 0
    quesCounter = 1;
    var scoreArray = [];



    var pastHighscores = localStorage.getItem("scoreArray");

    scoreArrayStored = JSON.parse(localStorage.getItem("scoreArray")) || [];
    scoreArrayStored.sort();
    scoreArrayStored.reverse();
    console.log(scoreArrayStored);
    
    for (i = 0; i < scoreArrayStored.length; i++) {
        var pee = document.createElement("P");  
        pee.innerHTML = scoreArrayStored[i];
        document.getElementById("highestScores").appendChild(pee); 
        
    }

    topScore = document.getElementById("bigNum");
    if (scoreArrayStored.length >= 1) {
    console.log(topScore);
    console.log(scoreArrayStored[0]);
    topScore.innerHTML = ("Top Score: "+ scoreArrayStored[0]);
    } else {
        topScore.innerHTML = ("Top Score: you?");
    }






 //   listOfHighscores.innerHTML = scoreArrayStored[1];

// function to toggle an id
    function toggleElement() {
        var x = document.getElementById(toggledId);
        console.log(x);
        if (x.style.display === "none") {
          x.style.display = "block";
        }   else {
            x.style.display = "none";
          }
        console.log(x);
    }

//starts timer and toggles to the question box
var timer=60;

document.getElementById("startButton").addEventListener("click", function(){
    
    
    timerLeft = document.getElementById("timeLeft");
    //calling the toggle of html
    toggledId = "startingScreen";    
    toggleElement();
    toggledId = "questionBox";
    toggleElement();

    clockTimer = setInterval(function () {
    timerLeft.innerHTML = "TimeLeft: " + timer;
    timer--;
    if (timer < 1)
    { clearInterval(timer);
    endgameTimer();}
    }, 1000);
   

    nextQuestion();
    console.log(timer);

function endgameTimer(){
    timer = 60;
    console.log(score);
    var finalScore = score
    var userName = prompt("You ran out of time. Enter your name. Your final score is: " + score);
    var highScore = finalScore + " " + userName;
    momentHighscore = highScore;
    console.log(momentHighscore);
    scoreArrayStored.push(momentHighscore);
    localStorage.setItem("scoreArray", JSON.stringify(scoreArrayStored));
    console.log(scoreArrayStored);
    location.reload();
    //add finalScore + userName and  to the highscore list sort by reverse order. also add to local storage.
    //gotta create the hmtl highscore element.

}

function endgame(){
    var finalScore = (score + (timer * .5));
    console.log(finalScore); 
    var userName = prompt("Enter your name. Your final score is: " + finalScore);
    var highScore = finalScore + " " + userName;
    momentHighscore = highScore;
    console.log(momentHighscore);
    scoreArrayStored.push(momentHighscore);
    localStorage.setItem("scoreArray", JSON.stringify(scoreArrayStored));
    console.log(scoreArrayStored);
    location.reload();



    //add finalScore + userName and  to the highscore list sort by reverse order. also add to local storage.
    //gotta create the hmtl highscore element.

}


//build code to bring up the questions here
 function nextQuestion(){
    if(quesCounter-1 < allQuestions.length){
        questionNumber = document.getElementById("questionNumber");
        questionNumber.innerHTML = "Question number: " + (quesCounter);
        butt1 = document.getElementById("a1");
        butt1.textContent = allQuestions[quesCounter-1].options[0];
        butt2 = document.getElementById("a2");
        butt2.textContent = allQuestions[quesCounter-1].options[1];
        butt3 = document.getElementById("a3");
        butt3.textContent = allQuestions[quesCounter-1].options[2];
        butt4 = document.getElementById("a4");
        butt4.textContent = allQuestions[quesCounter-1].options[3];
        questionAsked = document.getElementById("questionAsked");
        questionAsked.textContent = allQuestions[quesCounter-1].question;
        answerToQuestion = allQuestions[quesCounter-1].answer
  }
  else {
      endgame();
  }
}
console.log(quesCounter);

  //checking which button is clicked
        document.getElementById("a1").addEventListener("click", function(){
            
            if (0 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            quesCounter= quesCounter +1;
            nextQuestion();
        });
        document.getElementById("a2").addEventListener("click", function(){
            if (1 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            quesCounter= quesCounter +1;
            nextQuestion();
        });
        document.getElementById("a3").addEventListener("click", function(){
            if (2 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            quesCounter= quesCounter +1;
            nextQuestion();
        });
        document.getElementById("a4").addEventListener("click", function(){
            if (2 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            quesCounter= quesCounter +1;
            nextQuestion();
        });











   
       


        
      
         





})