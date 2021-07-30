// Create variables and get them by their id for DOM manipulation

let question  = document.querySelector("#question")
let questnumb = document.querySelector("#questnumb")
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
}
      {question:"Which Jordan sneaker was banned in the NBA?",
      answers:{
            a: "Air Jordan 1 BANNED",
            b: "Air Jordan 1 Chicago",
            c: "Air Jordan 1 UNC",
            d: "Air Jordan 1 Chicago"
      },
correctAnswer: "b"
}

let images = document.querySelector("#imgbox")
question.innerHTML = "Which was the first Air Jordan to Debut"
questnumb.innerHTML = "Question 1"

// for (i = 0; questions.length;i++){

// }

images.addEventListener("click",function(){

      for( i = 0; questions.length;i++){
            if
      }
})













// Have the questions and the answers in an array
// Put each answer under the pictures so the Javascript can keep track of them
// Add an event listener on click to proceed to the next question
// Need to create a function to proceed to the next question 