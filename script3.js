const questions = [
  "Dacia a fost cucerită în timpul împăratului:",
  "În ce an Roma devine imperiu?",
  "Când a căzut Imperiul Roman de Apus",
  "Care este capitala Imperiului Roman ?",
  "Pe malurile cărui râu este așezată Roma?",
  
];

const answers = [
  "Traian",
  "27 Î.Hr",
  "476 d.Hr",
  "Roma",
  "Tibru",
  
];

const questionsContainer = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function displayQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <label>${questions[i]}</label>
      <input type="text" id="answer${i}">
      <div id="feedback${i}" style="display: none; color: red;">Răspunsul corect: ${answers[i]}</div>
    `;
    questionsContainer.appendChild(questionElement);
  }
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = document.getElementById(`answer${i}`).value;
    const feedback = document.getElementById(`feedback${i}`);
    if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
      score++;
    } else {
      feedback.style.display = "block";
    }
  }
  return score;
}

submitButton.addEventListener("click", function() {
  const score = calculateScore();
  resultContainer.innerHTML = `Ai răspuns corect la ${score} întrebări din ${questions.length}.`;
});

displayQuestions();