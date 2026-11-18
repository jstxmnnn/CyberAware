/* =========================================================
   Digital Safety – Online Safety Quiz
   To add or change questions, edit the "questions" list below.
   "answer" is the position of the correct choice: 0 = A, 1 = B, 2 = C, 3 = D.
   ========================================================= */

const questions = [
  {
    question: "What should you do before clicking a suspicious link?",
    choices: ["Click immediately", "Check the link first", "Share it with someone", "Ignore warnings"],
    answer: 1,
    explanation: "Always inspect suspicious links before clicking to avoid phishing attacks."
  },
  {
    question: "Which of these is the strongest password?",
    choices: ["password123", "MyDogMax", "T!ger-Lamp-92-Rain", "12345678"],
    answer: 2,
    explanation: "It is long and mixes words, numbers, and symbols. It also has no personal information, so it is very hard to guess."
  },
  {
    question: "What is two-factor authentication (2FA)?",
    choices: [
      "Using two different passwords for one account",
      "An extra verification step, like a code sent to your phone",
      "Logging in from two devices at the same time",
      "Sharing your account with a trusted friend"
    ],
    answer: 1,
    explanation: "2FA asks for a second proof that it's really you, so a stolen password alone is not enough to get into your account."
  },
  {
    question: "Someone claiming to be from your bank asks for the OTP sent to your phone. What should you do?",
    choices: [
      "Send it quickly so your account isn't blocked",
      "Send only half of the code",
      "Post it online and ask if it's legit",
      "Never share it, and contact the bank through its official number"
    ],
    answer: 3,
    explanation: "Real banks never ask for your OTP. Anyone who has it can log in or approve payments as you."
  },
  {
    question: "What does the padlock (HTTPS) in a website's address bar mean?",
    choices: [
      "The website is guaranteed to be safe and honest",
      "Your connection to the website is encrypted",
      "The website has no ads",
      "The website is owned by the government"
    ],
    answer: 1,
    explanation: "HTTPS only means your connection is encrypted. Scam sites can use HTTPS too, so always check the web address as well."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const letters = ["A", "B", "C", "D"];

  // Page elements
  const questionView = document.getElementById("quizQuestionView");
  const finalView = document.getElementById("quizFinalView");
  const qNumber = document.getElementById("qNumber");
  const qText = document.getElementById("qText");
  const qOptions = document.getElementById("qOptions");
  const qResult = document.getElementById("qResult");
  const submitBtn = document.getElementById("submitBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressPct = document.getElementById("progressPct");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");
  const completedLabel = document.getElementById("completedLabel");
  const remainingLabel = document.getElementById("remainingLabel");
  const scoreNow = document.getElementById("scoreNow");
  const scoreTotal = document.getElementById("scoreTotal");
  const answerIcon = document.getElementById("answerIcon");
  const correctAnswer = document.getElementById("correctAnswer");
  const explanation = document.getElementById("explanation");

  // Quiz state
  let current = 0;        // index of the question on screen
  let selected = null;    // index of the chosen answer
  let submitted = false;  // has this question been submitted?
  let score = 0;
  let completed = 0;

  scoreTotal.textContent = questions.length;
  document.getElementById("finalTotal").textContent = questions.length;

  /* ---------- Show one question ---------- */
  function showQuestion() {
    const q = questions[current];
    selected = null;
    submitted = false;

    qNumber.textContent = `${current + 1} of ${questions.length}`;
    qText.textContent = q.question;
    qResult.textContent = "";
    qResult.className = "result-msg";

    qOptions.innerHTML = "";
    q.choices.forEach((choice, i) => {
      const option = document.createElement("button");
      option.className = "option";
      option.type = "button";
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
      option.innerHTML = `<span class="letter">${letters[i]}</span><span class="option-text"></span>`;
      option.querySelector(".option-text").textContent = choice;
      option.addEventListener("click", () => selectOption(i));
      qOptions.appendChild(option);
    });

    submitBtn.disabled = false;
    nextBtn.disabled = true;
    nextBtn.innerHTML = current === questions.length - 1 ? "SEE FINAL SCORE &rarr;" : "NEXT QUESTION &rarr;";

    // Reset the feedback panel for the new question
    answerIcon.innerHTML = "&#9675;";
    answerIcon.className = "fb-icon";
    correctAnswer.textContent = "Submit an answer to see the correct answer.";
    explanation.textContent = "The explanation will appear here after you submit.";
  }

  /* ---------- Choose an answer ---------- */
  function selectOption(index) {
    if (submitted) return; // answers are locked after submitting
    selected = index;
    qOptions.querySelectorAll(".option").forEach((opt, i) => {
      opt.classList.toggle("selected", i === index);
      opt.setAttribute("aria-checked", String(i === index));
    });
    qResult.textContent = "";
    qResult.className = "result-msg";
  }

  /* ---------- Submit the answer ---------- */
  submitBtn.addEventListener("click", () => {
    if (submitted) return; // prevent submitting the same question twice

    if (selected === null) {
      qResult.textContent = "Please choose an answer before submitting.";
      qResult.className = "result-msg warn";
      return;
    }

    const q = questions[current];
    const isCorrect = selected === q.answer;
    submitted = true;
    completed++;
    if (isCorrect) score++;

    // Mark the options
    qOptions.querySelectorAll(".option").forEach((opt, i) => {
      opt.disabled = true;
      if (i === q.answer) opt.classList.add("correct");
      if (i === selected && !isCorrect) opt.classList.add("wrong");
    });

    qResult.textContent = isCorrect ? "Correct! Well done." : "Incorrect. Check the correct answer and the explanation.";
    qResult.className = `result-msg ${isCorrect ? "good" : "bad"}`;

    // Feedback panel
    scoreNow.textContent = score;
    answerIcon.innerHTML = isCorrect ? "&#10003;" : "&#10007;";
    answerIcon.className = `fb-icon ${isCorrect ? "good" : "bad"}`;
    correctAnswer.textContent = `${letters[q.answer]}. ${q.choices[q.answer]}`;
    explanation.textContent = q.explanation;

    updateProgress();

    submitBtn.disabled = true;
    nextBtn.disabled = false;
    nextBtn.focus();
  });

  /* ---------- Next question / final score ---------- */
  nextBtn.addEventListener("click", () => {
    if (!submitted) return;
    if (current < questions.length - 1) {
      current++;
      showQuestion();
    } else {
      showFinal();
    }
  });

  /* ---------- Progress panel ---------- */
  function updateProgress() {
    const pct = Math.round((completed / questions.length) * 100);
    progressPct.textContent = `${pct}%`;
    progressFill.style.width = `${pct}%`;
    progressBar.setAttribute("aria-valuenow", String(pct));
    completedLabel.textContent = `${completed} Completed`;
    remainingLabel.textContent = `${questions.length - completed} Remaining`;
  }

  /* ---------- Final score ---------- */
  function showFinal() {
    questionView.hidden = true;
    finalView.hidden = false;

    const total = questions.length;
    document.getElementById("finalScore").textContent = score;
    const badge = document.getElementById("finalBadge");
    badge.textContent = `${Math.round((score / total) * 100)}%`;

    let message;
    if (score === total) message = "Perfect score! You really know how to stay safe online.";
    else if (score >= Math.ceil(total * 0.6)) message = "Good job! Review the questions you missed to become even safer online.";
    else message = "Keep learning! Visit the Awareness and Safety Tips pages, then try again.";
    document.getElementById("finalMsg").textContent = message;

    correctAnswer.textContent = "Quiz finished.";
    explanation.textContent = "Press Restart Quiz to try again.";
    document.getElementById("restartBtnFinal").focus();
  }

  /* ---------- Restart ---------- */
  function restartQuiz() {
    current = 0;
    score = 0;
    completed = 0;
    scoreNow.textContent = "0";
    updateProgress();
    finalView.hidden = true;
    questionView.hidden = false;
    showQuestion();
    showToast("Quiz restarted. Good luck!");
  }

  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
  document.getElementById("restartBtnFinal").addEventListener("click", restartQuiz);

  showQuestion();
  updateProgress();
});