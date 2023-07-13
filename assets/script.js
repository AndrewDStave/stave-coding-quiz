// Define your quiz questions here
const quizQuestions = [
    {
      question: "Where inside of HTML can you insert JavaScript?",
      choices: ["<head>", "<body>", "<Both the head and body section"],
      correctAnswer: 2
    },
    
    {
      question: "The external JavaScript file must contain the <script> tag.",
      choices: ["True", "False",],
      correctAnswer: 0
    }, 
    
    {
      question: "Which of these is a correct example of an IF statement in JavaScript?",
      choices: ["if x == 5", "if (x == 5)", "if x =5 then", "if x == 5 then"],
      correctAnswer: 1
    },
    {
      question: "JavaScript is the same as Java",
      choices: ["False", "True",],
      correctAnswer: 0
    },
    {
      question: "Is JavaScript case sensative?",
      choices: ["Yes", "No",],
      correctAnswer: 0
    },
  ];
    
  const startButton = document.getElementById("start");
  const timerElement = document.getElementById("time-left");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  const namesInput = document.getElementById("names");
  const submitButton = document.getElementById("submit");
  let currentQuestionIndex = 0;
  let timeLeft = 60; 
  
 //STARTS QUIZ
  function startQuiz() {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    setNextQuestion();
    startTimer();
  }
  
  //NEXT QUESTIUON
  function setNextQuestion() {
    resetQuestionState();
    showQuestion(quizQuestions[currentQuestionIndex]);
  }
  
  //DISPLAYS QUESTION
  function showQuestion(question) {
    questionText.textContent = question.question;
  
    for (let i = 0; i < question.choices.length; i++) {
      const choice = document.createElement("li");
      choice.textContent = question.choices[i];
      choice.addEventListener("click", checkAnswer);
      choicesList.appendChild(choice);
    }
  }
  
  //CHECKS ANSWER
  function checkAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = Array.from(choicesList.children).indexOf(selectedChoice);
  
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      resultText.textContent = "Correct!";
    } else {
      resultText.textContent = "Wrong!";
      timeLeft -= 10;
    }
  
    resultContainer.style.display = "block";
    currentQuestionIndex++;
  
     //DELAY QUESTION
    if (currentQuestionIndex < quizQuestions.length) {
      setTimeout(setNextQuestion, 10);
    } else {
      endQuiz();
    }
  }
  
  //RESET STATE
  function resetQuestionState() {
    while (choicesList.firstChild) {
      choicesList.removeChild(choicesList.firstChild);
    }
  
    resultContainer.style.display = "none";
    resultText.textContent = "";
  }
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

//ENDS QUIZ
function endQuiz() {
    clearInterval(timer);
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultText.textContent = `Quiz ended! Your score: ${timeLeft}`;
    namesInput.style.display = "inline";
    submitButton.style.display = "inline";
    namesInput.style.display = "block";
    submitButton.style.display = "block";
    submitButton.addEventListener("click", saveScore);
  }
  
  
  //SAVE SCORE (NOT FINISHED)
function saveScore() {
  const names = namesInput.value.trim();
  if (names !== "") {
    const scoreData = {
      names: names,
      score: timeLeft
      };
    }
  }
  submitButton.addEventListener("click", saveScore);
  startButton.addEventListener("click", startQuiz);

//Got help from a family member. All code is written by me and I learned much from this activity.