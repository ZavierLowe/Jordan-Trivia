// Create variables and get them by their id for DOM manipulation

let questionName  = document.querySelector("#question")
let questnumb = document.querySelector("#questnumb")
let questAns = document.querySelectorAll('#imgbox')
// Create an array of questions and answers

const questions = [
      {question:"Which was the First Air Jordan to debut?",
      answers: [
            {text: "Air Jordan 1 Chicago", correct : true},
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 1 Chicago", correct : false},
            {text: "Air Jordan 1 BANNED", correct : false},]},
      
            {question:"Which Jordan sneaker was banned in the NBA?",
      answers: [
            {text: "Air Jordan 1 Chicago", correct : false},
            {text: "Air Jordan 1 BANNED", correct : true},
            {text: "Air Jordan 1 Chicago", correct : false},
            {text: "Air Jordan 1 BANNED", correct : false},]},
            
            {question:"Which Jordan sneaker did MIchael Jordan wear in his famous FLU GAME?",
      answers: [
            {text: "Air Jordan 1 Chicago", correct : false},
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 12 Chicago", correct : true},
            {text: "Air Jordan 1 BANNED", correct : false},]},
          
            {question:"Which Jordans were gifted to the artist Drake for his collab with Jordan ?",
      answers: [
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 10 ", correct : true},
            {text: "Air Jordan 1 Chicago", correct : false},]},
            
            {question:"Which of these Jordan currently have the highest retail price ?",
      answers: [
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 1 Chicago", correct : false},
            {text: "Air Jordan 1 x J.Balvin ", correct : true},
            {text: "Air Jordan 1 Dior", correct : false},]},
          
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

// Function to create the trivia game and change the inner HTML to show the questions

function startTrivia(){
      currentQuestion = 0;
      questionName.innerHTML = questions[currentQuestion].question;
      questAns.innerHTML = questions[currentQuestion].answers[0].option;
}

startTrivia()

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