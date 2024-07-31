let questions = [
  {
    prompt: `Choose the correct HTML element for the largest heading:`,
    options: ["<heading>", "<head>", "<h6>", "<h1>"],
    answer: "<h1>",
  },

  {
    prompt: `Choose the correct HTML element to define emphasized text`,
    options: ["<i>", "<em>", "<italic>", "<b>"],
    answer: "<em>",
  },

  {
    prompt: `How can you make a numbered list?`,
    options: ["<li>", "<ul>", "<ol>", "<dl>"],
    answer: "<ol>",
  },

  {
    prompt: `Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?`,
    options: ["alt", "src", "title", "type"],
    answer: "alt",
  },

  {
    prompt: `Which HTML element is used to specify a header for a document or section?`,
    options: ["<header>", "<head>", "<heading>", "<top>"],
    answer: "<header>",
  },
];

let curInd = 0;
let options = document.getElementById("options");
let start_btn = document.querySelector("#start-btn");
let answer_status = document.getElementById("answer-status");
let timer = document.getElementById("time");

let gameTime = questions.length * 15;
let curTime;

start_btn.onclick = () => {
  document.querySelector(".quiz-start-conteiner").classList.add("hide");
  document.querySelector(".questions").classList.remove("hide");

  getQuestion();
  curTime = setInterval(minusTime, 1000);
  timer.innerHTML = gameTime;
};

function getQuestion() {
  let curQuestion = questions[curInd];
  let questTitle = document.getElementById("question-title");
  questTitle.textContent = curQuestion.prompt;
  options.innerHTML = "";
  curQuestion.options.forEach((answer, i) => {
    let btn = document.createElement("button");
    btn.setAttribute("value", answer);
    btn.textContent = i + 1 + ". " + answer;
    btn.onclick = checkAnswer;
    options.appendChild(btn);
  });
}

function minusTime() {
  gameTime--;
  timer.innerHTML = gameTime;
  if (gameTime <= 0) {
    alert("end");
  }
}

function checkAnswer() {
  if (this.value !== questions[curInd].answer) {
    answer_status.textContent = `Wrong! The correct answer - 
    ${questions[curInd].answer}.`;
    if (gameTime < 0) {
      gameTime = 0;
    }
    gameTime -= 10;
    timer.innerHTML = gameTime;
    answer_status.style.color = "red";
  } else {
    answer_status.textContent = "Correct!";
    answer_status.style.color = "green";
  }
  answer_status.setAttribute("class", "answer-status");
  setTimeout(() => {
    answer_status.setAttribute("class", "answer-status hide");
  }, 2000);
  curInd++;
  if (curInd === questions.length) {
    clearInterval(curTime);
    document.querySelector(".final-screen").classList.remove("hide");
    document.querySelector(".questions").classList.add("hide");
    document.querySelector(".final-score").textContent = gameTime;
    document.getElementById("restart").onclick = () => {
      document.querySelector(".quiz-start-conteiner").classList.remove("hide");
      document.querySelector(".final-screen").classList.add("hide");
      curInd = 0;
      timer.textContent = 0;
      gameTime = questions.length * 15;
      getQuestion();
    };
  } else {
    getQuestion();
  }
}
