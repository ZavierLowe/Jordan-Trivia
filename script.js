// Create variables and get them by their id for DOM manipulation

//Create a space to hold and change the question
let questionName  = document.querySelector("#question")
let questnumb = document.querySelector("#questnumb")

//Create buttons for users to select for their answer
let btnAns1 = document.querySelector("#btn1")
let btnAns2= document.querySelector("#btn2")
let btnAns3 = document.querySelector("#btn3")
let btnAns4 = document.querySelector("#btn4")
let btns = document.querySelectorAll('.button')

// Create an array of questions and answers

let questions = [
      {question:"Which was the First Air Jordan to debut?",
      answers: [
            "Air Jordan 1 Chicago",
            "Air Jordan 1 BANNED", 
            "Air Jordan 1 Black", 
            "Air Jordan 1 UNC",
      ],
      correctAns: "Air Jordan 1 Chicago"
      },
      
            {question:"Which Jordan sneaker was banned in the NBA?",
      answers: [
            "Air Jordan 1 Bred",
            "Air Jordan 1 BANNED", 
             "Air Jordan 4 Chicago",
             "Air Jordan 12 BANNED", ],
            correctAns: "Air Jordan 1 BANNED"
            },
            
            {question:"Which Jordan sneaker did Michael Jordan wear in his famous FLU GAME?",
      answers: [
            "Air Jordan 1 Chicago",
            "Air Jordan 1 BANNED",
            "Air Jordan 12 ",
            "Air Jordan 1 BANNED", ],
            correctAns: "Air Jordan 12"
      },
          
            {question:"Which Jordans were gifted to the artist Drake for his collab with Jordan ?",
      answers: [
            "Air Jordan 1 BANNED",
            "Air Jordan 1 BANNED",
            "Air Jordan 10 ", 
            "Air Jordan 1 Chicago",],
            correctAns:"Air Jordan 10"
      },
            
            {question:"Which of these Jordans currently have the highest retail price ?",
      answers: [
            "Air Jordan 1 BANNED",
            "Air Jordan 1 Chicago",
            "Air Jordan 1 x J.Balvin ",
            "Air Jordan 1 Dior",],
            correctAns: "Air Jordan 1 Dior"
      },
          
]
      
      
// Function to create the trivia game and change the questons and answer when the correct answer is selected

let numb = questions
let currentQuestion = {}
let nextQuestions = 0
function firstQuestion(){
      
      questionName.innerHTML = questions[nextQuestions].question;
      let choice = questions[nextQuestions].answers
      btnAns1.innerHTML = choice[0];
      btnAns2.innerHTML = choice[1];
      btnAns3.innerHTML = choice[2];
      btnAns4.innerHTML = choice[3];
      let btnNum = 0
      let buttonAns = numb[nextQuestions].correctAns
      btns.forEach((btn) =>{ btn.addEventListener('click',function(){
            if( btns[btnNum].innerHTML == questions[nextQuestions].correctAns){
                  console.log('correct')
            }else{
                  console.log('wrong')
            }
      })});
      
};
     

      // btnAns1.addEventListener("click",firstQuestion)
     
//   console.log(btns[btnNum]);    
firstQuestion()

// function wrongAns(){

      
// }
// numb[nextQuestions].correctAns
// Create a function that goes through the questions and answers

// function nextQuestion(){
// questionName.innerHTML = questions[nextQuestions].question

// btnAns1.innerHTML = choice[0];
// btnAns2.innerHTML = choice[1];
// btnAns3.innerHTML = choice[2];
// btnAns4.innerHTML = choice[3];
// nextQuestions++

// } ;
// btnAns2.addEventListener("click",nextQuestion)

// nextQuestion()


// function thirdQuestion(){
//       questionName.innerHTML = questions[2].question 
//       btnAns1.innerHTML = questions[2].answers[0]
//       btnAns2.innerHTML = questions[2].answers[1]
//       btnAns3.innerHTML = questions[2].answers[2];
//       btnAns4.innerHTML = questions[2].answers[3];    
// };

// btnAns3.addEventListener("click",thirdQuestion)

// thirdQuestion()


// function forthQuestion(){
// questionName.innerHTML = questions[3].question
// }












// Have the questions and the answers in an array
// We need a function to display the question and the answers
// Put each answer under the pictures so the Javascript can keep track of them
// Add an event listener on click to proceed to the next question
// Need to create a function to proceed to the next question 