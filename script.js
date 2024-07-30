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

start_btn.onclick = () => {
  document.querySelector(".quiz-start-conteiner").classList.add("hide");
  document.querySelector(".questions").classList.remove("hide");
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
    options.appendChild(btn);
  });
}

getQuestion();
