const questions = [
  "Care este elementul autohton în structura poporului român?",
  "Precizați caracterul limbii și al poporului român?",
  "Din ce limbă provin majoritatea cuvintelor din lexicul limbii române?",
  "Care este anul retragerii aureliene?",
  "Anul declanșării războaielor daco-romane:",

];

const answers = [
  "geto-dacii",
  "caracter romanic",
  "limba latină",
  "271",
  "101",

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

submitButton.addEventListener("click", function () {
  const score = calculateScore();
  resultContainer.innerHTML = `Ai răspuns corect la ${score} întrebări din ${questions.length}.`;


  if (score === questions.length) {
    resultContainer.classList.add("correct");
  } else {
    resultContainer.classList.remove("correct");
  }

  resultContainer.classList.add("visible");
});


displayQuestions();