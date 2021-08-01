// Create variables and get them by their id for DOM manipulation

let questionName  = document.querySelector("#question")
let questnumb = document.querySelector("#questnumb")
let questAns = document.querySelectorAll('#imgbox')
// Create an array of questions and answers
const questions = [
      {question:"Which was the First Air Jordan to debut?",
      answers:{
            a: "Air Jordan 1 Chicago",
            b: "Air Jordan 1 BANNED",
            c: "Air Jordan 1 Chicago",
            d: "Air Jordan 1 Chicago"
      },
correctAnswer: "a"
},
      {question:"Which Jordan sneaker was banned in the NBA?",
      answers:{
            a: "Air Jordan 1 BANNED",
            b: "Air Jordan 1 Chicago",
            c: "Air Jordan 1 UNC",
            d: "Air Jordan 1 Chicago"
      },
correctAnswer: "b"
},


      {question:"Which Jordans did Michael Jordan wear in his famous Flu Game ?",
      answers:{
            a: "Air Jordan 1 BANNED",
            b: "Air Jordan 1 Chicago",
            c: "Air Jordan 12 ",
            d: "Air Jordan 1 UNC"
      },
correctAnswer: "c"
},
      {question:"Which Jordans were gifted to the artist Drake for his collab with Jordan ?",
      answers:{
            a: "Air Jordan 1 BANNED",
            b: "Air Jordan 11 All Black",
            c: "Air Jordan 10 OVO",
            d: "Air Jordan 1 Chicago"
      },
correctAnswer: "c"
},
      {question:"Which of these Jordan currently have the highest retail price sneaker was banned in the NBA?",
      answers:{
            a: "Air Jordan 1 BANNED",
            b: "Air Jordan 1 Chicago",
            c: "Air Jordan 1 x J Balvin ",
            d: "Air Jordan 1 Dior"
      },
correctAnswer: "b"
}
]

//Create a function to show the quesitons

// function showQuestion( questions,quizBox){

//       let output = [];
//       let answers; 
      
//       for (let i = 0; i <questions.length; i++){
//             answers = [ ];
//       }
//       for( letter in questions[i].answers){

//       }

// }

// Function to create the quiz and change the inner HTML to show the questions

function startQuiz(){
      currentQuestion = 0;
      questionName.innerHTML = questions[currentQuestion].question;
}

startQuiz()

// for (i = 0; questions.length;i++){

// }

// images.addEventListener("click",function(){

//       for( i = 0; questions.length;i++){
//             if
//       }
// })













// Have the questions and the answers in an array
// We need a function to display the question and the answers
// Put each answer under the pictures so the Javascript can keep track of them
// Add an event listener on click to proceed to the next question
// Need to create a function to proceed to the next question 