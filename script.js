// Create variables and get them by their id for DOM manipulation

//Create a space to hold and change the question
let questionName = document.querySelector("#question");
let questnumb = document.querySelector("#questnumb");

//Create buttons for users to select for their answer
let btnAns1 = document.querySelector("#btn1");
let btnAns2 = document.querySelector("#btn2");
let btnAns3 = document.querySelector("#btn3");
let btnAns4 = document.querySelector("#btn4");
let btns = document.querySelectorAll(".button");

// Create an array of questions and answers

let questions = [
  {
      questionId : 0,
    question: "1. Which was the First Air Jordan to debut?",
    answers: [
      "Air Jordan 1 Chicago",
      "Air Jordan 1 BANNED",
      "Air Jordan 1 Black",
      "Air Jordan 1 UNC",
    ],
    correctAns: "Air Jordan 1 Chicago",
  },

  {
      questionId : 1,
    question: "2. Which Jordan sneaker was banned in the NBA?",
    answers: [
      "Air Jordan 1 Bred Toe",
      "Air Jordan 1 BANNED",
      "Air Jordan 4 Fire Red",
      "Air Jordan 12 Dark Concord",
    ],
    correctAns: "Air Jordan 1 BANNED",
  },

  {
      questionId : 2,
    question:
      "3. Which Jordan sneaker did Michael Jordan wear in his famous FLU GAME?",
    answers: [
      "Air Jordan 1 Origin Story",
      "Air Jordan 11 Space Jam",
      "Air Jordan 12",
      "Air Jordan 11 Bred",
    ],
    correctAns: "Air Jordan 12",
  },

  {
      questionId : 3,
    question:
      "4. Which Jordans were gifted to the artist Drake for his collab with Jordan ?",
    answers: [
      "Air Jordan 4 Cool Grey",
      "Air Jordan 1 Black Gym Red",
      "Air Jordan 10 OVO",
      "Air Jordan 12 FIBA",
    ],
    correctAns: "Air Jordan 10 OVO",
  },

  {
      questionId : 4,
    question:
      "5. Which of these Jordans currently have the highest retail price ?",
    answers: [
      "Air Jordan 1 x Travis Scott Mocha",
      "Air Jordan 6 Infared",
      "Air Jordan 1 x J.Balvin ",
      "Air Jordan 1 Dior",
    ],
    correctAns: "Air Jordan 1 Dior",
  },
];

// Function to create the trivia game and change the questons and answer when the correct answer is selected

let nextQuestions = 0;

let choice = questions[nextQuestions].answers;
function firstQuestion() {
questionName.innerHTML = questions[nextQuestions].question
  
  btnAns1.innerHTML = choice[0];
  btnAns2.innerHTML = choice[1];
  btnAns3.innerHTML = choice[2];
  btnAns4.innerHTML = choice[3];

  checkAns();
  
 
 nextQuestions++
}
firstQuestion();



// Create another function that when called it adds the event listener and the inner HTML 
 // for (nextQuestions; nextQuestions < questions.length; nextQuestions++) 
 let buttonAns = questions[nextQuestions].correctAns;          
function nextQuestion() {
          
let newQuestion = questions[nextQuestions].question
      current = questions[nextQuestions].question
      questionName.innerHTML = newQuestion
            
            // Reset game and clear colors
          let choice = questions[nextQuestions].answers;
          btnAns1.innerHTML = choice[0];
          btnAns2.innerHTML = choice[1];
          btnAns3.innerHTML = choice[2];
          btnAns4.innerHTML = choice[3];
          checkAns();
         nextQuestions++
          
      
          
        };
      
//Create a function that allows for the right answer to go to the next question
// Create a function that goes through the questions and answers

function checkAns(){
      let buttonAns = questions[nextQuestions].correctAns;
      btns.forEach((btns) => {
            btns.addEventListener("click", function (e) {
              if (e.target.innerHTML === buttonAns) {
                //update score or increment score
            nextQuestion();
            increaseScore();
            myPlay();
            
              } else {
           
           miss();
      }
              
            });
          });
          
          ;
}



// }
  
// }
 
// }

//Selecting the score class to manipulate the inner HTML 
const levelScore = document.querySelector(".score")
levelScore.innerHTML = "SCORE:0"

//Create a function that increases the score by 23
let scoreCounter = 0;

function increaseScore(){
      scoreCounter +=23;
      if( scoreCounter<100){
            levelScore.innerHTML = `Score: 0${scoreCounter}`
      }else if (scoreCounter <200){
            levelScore.innerHTML = `Score: 0${scoreCounter}`
      }
}

// Creating a function for correct answer to hear a swish sound
function myPlay(){
      var audio = new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Basketball%20Net%20Swish-18450-Free-Loops.com.mp3");
      audio.load()
      audio.play();


};
// Creating a function for incorrect answer to hear a brick sound
function miss(){
      var audio2 = new Audio("http://sfxcontent.s3.amazonaws.com/soundfx/Basketball-BackBoard.mp3");
      audio2.load()
      audio2.play();
}

// Have the questions and the answers in an array
// We need a function to display the question and the answers
// Put each answer under the pictures so the Javascript can keep track of them
// Add an event listener on click to proceed to the next question
// Need to create a function to proceed to the next question
