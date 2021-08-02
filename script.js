// Create variables and get them by their id for DOM manipulation

//Create a space to hold and change the question
let questionName  = document.querySelector("#question")
let questnumb = document.querySelector("#questnumb")

//Create buttons for users to select ofor their answer
let btnAns1 = document.querySelector(".btn")
let btnAns2= document.querySelector(".btn2")
let btnAns3 = document.querySelector(".btn3")
let btnAns4 = document.querySelector(".btn4")
let currentQuestionIndex
let button
// Create an array of questions and answers

const questions = [
      {question:"Which was the First Air Jordan to debut?",
      answers: [
            {text: "Air Jordan 1 Chicago", correct : true},
            {text: "Air Jordan 1 BANNED", correct : false},
            {text: "Air Jordan 1 Black", correct : false},
            {text: "Air Jordan 1 UNC", correct : false},]},
      
            {question:"Which Jordan sneaker was banned in the NBA?",
      answers: [
            {text: "Air Jordan 1 Bred", correct : false},
            {text: "Air Jordan 1 BANNED", correct : true},
            {text: "Air Jordan 4 Chicago", correct : false},
            {text: "Air Jordan 12 BANNED", correct : false},]},
            
            {question:"Which Jordan sneaker did Michael Jordan wear in his famous FLU GAME?",
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
      questionName.innerHTML = questions[0].question;
      btnAns1.innerHTML = questions[0].answers[0].text;
      btnAns2.innerHTML = questions[0].answers[1].text;
      btnAns3.innerHTML = questions[0].answers[2].text;
      btnAns4.innerHTML = questions[0].answers[3].text;
      

      

     
            
      };
     
      btnAns1.addEventListener("click",nextQuestion)
     

startTrivia()

// Create a function to set the next question

function nextQuestion(){
questionName.innerHTML = questions[1].question 
btnAns1.innerHTML = questions[1].answers[0].text
btnAns2.innerHTML = questions[1].answers[1].text;
btnAns3.innerHTML = questions[1].answers[2].text;
btnAns4.innerHTML = questions[1].answers[3].text;

} ;
btnAns2.addEventListener("click",nextQuestion2)

nextQuestion()


function nextQuestion2(){
      questionName.innerHTML = questions[2].question 
      btnAns1.innerHTML = questions[2].answers[0].text
      btnAns2.innerHTML = questions[2].answers[1].text;
      btnAns3.innerHTML = questions[2].answers[2].text;
      btnAns4.innerHTML = questions[2].answers[3].text;    
};

btnAns3.addEventListener("click",nextQuestion3)

nextQuestion2()


function nextQuestion3(){

}












// Have the questions and the answers in an array
// We need a function to display the question and the answers
// Put each answer under the pictures so the Javascript can keep track of them
// Add an event listener on click to proceed to the next question
// Need to create a function to proceed to the next question 