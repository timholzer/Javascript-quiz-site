// steps to making this quiz
// 1. initial page contains h1 that says coding quiz, and a start button top left has top scores
// on start there is a timer and a score that ticks down by 1 per second.
// 2. create a template for 10 questions with 4 answers. On button click the next button appears, if correct answer then add 10, if wrong then minus 10 seconds Do this with a class tag for correct answers.
//have a text box to enter initials for the final score, save it and write it to the top scores.

  var allQuestions = [{
    question: "If a tree falls in the forest, why does it fall?",
    options: ["It tripped over a root", "Gravity", "It took a class on Javascript that was too hard", 'That one scene from The LionKing where Scar says, "long live the king!'],
    answer: 2
  }, {
    question: "How do you spell 'Javascipt'?",
    options: ["Triple Moca Frapachino", "Jabba da Hut", "Javascript", "Fortran"],
    answer: 2
  }, {
    question: "This webpage was written in HTML, CSS, and _____?",
    options: ["Javascript", "Spite", "Pen","English"],
    answer: 0 || 3
  },{
    question: "What does HTML stand for?",
    options: ["Hyper-Text Markup Language", "Peace Love Unity Respect", "Javascript", "Hamburgers Tators Macoroni Lasagna"],
    answer: 0
  }, {
    question: "What makes this quiz work?",
    options: ["Mice in a series of tubes", "Javascript", "Hopes and Dreams", "A pencil and paper"],
    answer: 1 || 2
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
    options: ["4", "2 + 2", "'2 + 2'", "'4'"],
    answer: 0 || 1
  },{
    question: "4 > 2",
    options: ["True", "False", "True, but in Yellow", "False, but in Yellow"],
    answer: 0 || 2
  },{
    question: "2 > 2",
    options: ["True", "False", "Javascript", "Neither"],
    answer: 1
    }];


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
    }
 timerTick = setInterval (timeMinus, 1000);

//build code to bring up the questions here
    



    //code for when the questions are shown
    // document.getElementByClass("answerButton").addEventListener("click", function(){
    // answerButtonId = this.id;
    // console.log(answerButtonId);

    //probably need to define answerbutton id and allquestions.answer

    // if (answerButtonId === allQuestionsanswer ) {
    //     score + 10;
    // }
    // else {
    //     timer - 10;
    // });

   
       


        
      
         





})