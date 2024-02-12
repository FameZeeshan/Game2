const questions = [
  {
      question: "What is the capital of Japan?",
      choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correctAnswer: "Tokyo"
  },
  // Add more questions here
  // ...
];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;
let timer;

document.getElementById("quiz-container").style.display = "none";

document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
  startTimer();
}

function showQuestion() {
  let q = questions[currentQuestionIndex];
  document.getElementById("question").innerHTML = "<p>" + q.question + "</p>";
  document.getElementById("options-container").innerHTML = '';

  q.choices.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(option));
      document.getElementById('options-container').appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  clearInterval(timer);

  if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      score++;
  }

  document.getElementById('submit-btn').disabled = true;
  document.getElementById('next-btn').disabled = false;

  const resultElement = document.getElementById('result');
  resultElement.textContent = selectedOption === questions[currentQuestionIndex].correctAnswer ? 'Correct!' : `Wrong! The correct answer is ${questions[currentQuestionIndex].correctAnswer}.`;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
      document.getElementById('submit-btn').disabled = false;
      document.getElementById('next-btn').disabled = true;
      showQuestion();
      startTimer();
  } else {
      endQuiz();
  }
}

function startTimer() {
  let count = 30;
  const counter = document.getElementById("counter");
  timer = setInterval(function () {
      count--;

      if (count >= 0) {
          counter.innerHTML = count;
      }

      if (count === 0) {
          clearInterval(timer);
          endQuiz();
      }
  }, 1000);
}

function endQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("scoreContainer").style.display = "block";

  let img = document.createElement("img");
  img.src = "https://i.imgur.com/7GrfqOz.png";
  img.alt = "score-img";
  document.getElementById("scoreContainer").appendChild(img);

  let para = document.createElement("p");
  para.innerHTML = "Your Score is: " + score + " / " + totalQuestions;
  document.getElementById("scoreContainer").appendChild(para);
}
