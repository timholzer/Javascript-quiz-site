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
    
    score = 0
    quesCounter = 1;
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

document.getElementById("startButton").addEventListener("click", function(){
    
    var timer=100;
    timerLeft = document.getElementById("timeLeft");
    //calling the toggle of html
    toggledId = "startingScreen";    
    toggleElement();
    toggledId = "questionBox";
    toggleElement();
    //var timeLeft = timer-questionsWrong
   // var finalScore = gameScore + endTime
       function timeMinus(){
       timer = timer-1;
       timerLeft.innerHTML = "Time Left: " + timer;
       console.log(timer); 
       
       if (timer < 1){
          // end game function
          
       }
  }
 timerTick = setInterval (timeMinus, 1000);
    
    nextQuestion();
    




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
}
console.log(quesCounter);

  //checking which button is clicked
        document.getElementById("a1").addEventListener("click", function(){
            
            if (0 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            console.log(0 == answerToQuestion);
            quesCounter= quesCounter +1;
            console.log(score);
            console.log(timer);

            nextQuestion();
        });
        document.getElementById("a2").addEventListener("click", function(){
            if (1 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            quesCounter= quesCounter +1;
            console.log(1 == answerToQuestion);
            console.log(score);
            console.log(timer);
            nextQuestion();
        });
        document.getElementById("a3").addEventListener("click", function(){
            if (2 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            console.log(2 == answerToQuestion);
            quesCounter= quesCounter +1;
            console.log(score);
            console.log(timer);
            nextQuestion();
        });
        document.getElementById("a4").addEventListener("click", function(){
            if (2 == answerToQuestion) {
                score = score + 10;
            } else {
                timer = timer - 10;
            }
            console.log(2 == answerToQuestion);
            quesCounter= quesCounter +1;
            console.log(score);
            console.log(timer);
            nextQuestion();
        });


    //code for when the questions are shown
    // document.getElementByClass("answerButton").addEventListener("click", function(){
    // answerButtonId = this.id;
    // console.log(answerButtonId);


    // });
   // }
   // else {
        //end game code
 //   }








   
       


        
      
         





})