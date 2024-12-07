const questions = [
  "Care a fost capitala Regatului dac?",
  "Care a fost primul rege al Daciei?",
  "Precizați numele regelui dac participant la războaiele daco-romane din secolul II",
  "Care este denumirea atribuită geto-daciilor de către greci ?",
  "Care este numele istoricului grec care-i amintește în lucrarea sa pe geți?"
];

const answers = [
  "Sarmizegetusa",
  "Burebista",
  "Decebal",
  "geți",
  "Herodot"
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
      <div id="feedback${i}" style="display: none; color: #FF6F61;">Răspunsul corect: ${answers[i]}</div>
    `;
    questionsContainer.appendChild(questionElement);
  }
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = document.getElementById(`answer${i}`).value.trim();
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

  // Check if all answers are correct
  if (score === questions.length) {
    resultContainer.classList.add("correct");  
  } else {
    resultContainer.classList.remove("correct"); 
  }

  resultContainer.classList.add("visible");
});


displayQuestions();
