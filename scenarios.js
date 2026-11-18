/* =========================================================
   Digital Safety – Real-Life Scenarios
   To add or change scenarios, edit the "scenarios" list below.
   "answer" is the position of the safest choice: 0 = A, 1 = B, 2 = C.
   ========================================================= */

const hintIcons = {
  email: `<svg viewBox="0 0 64 52"><rect x="3" y="8" width="54" height="38" rx="3" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><path d="M5 11l25 20 25-20" fill="none" stroke="#123a8f" stroke-width="3.5" stroke-linejoin="round"/><path d="M5 44l18-16M55 44L37 28" stroke="#123a8f" stroke-width="3"/><path d="M52 1l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 8v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="17" r="1.4" fill="#e01b1b"/></svg>`,
  link: `<svg viewBox="0 0 64 52"><rect x="4" y="4" width="34" height="44" rx="5" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><rect x="9" y="11" width="24" height="9" rx="2" fill="#dff0ff"/><path d="M12 28h18M12 34h12" stroke="#dff0ff" stroke-width="3" stroke-linecap="round"/><g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M41 30a6 6 0 0 0 8.5 0l5-5a6 6 0 0 0-8.5-8.5l-1.5 1.5"/><path d="M49 22a6 6 0 0 0-8.5 0l-5 5a6 6 0 0 0 8.5 8.5l1.5-1.5"/></g><path d="M52 31l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 38v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="47" r="1.3" fill="#e01b1b"/></svg>`,
  gift: `<svg viewBox="0 0 64 52"><rect x="8" y="20" width="40" height="28" rx="2" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><rect x="4" y="13" width="48" height="9" rx="2" fill="#5fb0ff" stroke="#123a8f" stroke-width="3"/><path d="M28 13v35" stroke="#dff0ff" stroke-width="5"/><path d="M28 13c-4-9-15-9-12-2 2 4 12 2 12 2zM28 13c4-9 15-9 12-2-2 4-12 2-12 2z" fill="none" stroke="#dff0ff" stroke-width="3"/><path d="M52 1l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 8v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="17" r="1.4" fill="#e01b1b"/></svg>`,
  password: `<svg viewBox="0 0 64 52"><rect x="4" y="12" width="48" height="26" rx="5" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><g fill="#dff0ff"><circle cx="14" cy="25" r="3.2"/><circle cx="24" cy="25" r="3.2"/><circle cx="34" cy="25" r="3.2"/><circle cx="44" cy="25" r="3.2"/></g><path d="M52 31l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 38v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="47" r="1.3" fill="#e01b1b"/></svg>`,
  idcard: `<svg viewBox="0 0 64 52"><rect x="3" y="8" width="50" height="36" rx="4" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><circle cx="17" cy="22" r="5" fill="#dff0ff"/><path d="M9 36c1-5 4-7 8-7s7 2 8 7z" fill="#dff0ff"/><path d="M30 19h16M30 26h16M30 33h10" stroke="#dff0ff" stroke-width="3" stroke-linecap="round"/><path d="M52 1l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 8v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="17" r="1.4" fill="#e01b1b"/></svg>`,
  website: `<svg viewBox="0 0 64 52"><rect x="3" y="5" width="52" height="40" rx="4" fill="#2f8fe8" stroke="#123a8f" stroke-width="3"/><path d="M3 15h52" stroke="#123a8f" stroke-width="3"/><g fill="#dff0ff"><circle cx="10" cy="10" r="2"/><circle cx="16" cy="10" r="2"/><circle cx="22" cy="10" r="2"/></g><rect x="12" y="21" width="30" height="16" rx="2" fill="#dff0ff"/><path d="M36 21l6 0 0 6" fill="none"/><path d="M17 27h20M17 32h12" stroke="#2f8fe8" stroke-width="2.6" stroke-linecap="round"/><path d="M52 31l11 19H41z" fill="#fff" stroke="#e01b1b" stroke-width="3" stroke-linejoin="round"/><path d="M52 38v6" stroke="#e01b1b" stroke-width="3"/><circle cx="52" cy="47" r="1.3" fill="#e01b1b"/></svg>`
};

const scenarios = [
  {
    type: "Suspicious Email",
    icon: "email",
    story: "You receive an email claiming your social media account will be deleted today. It asks you to click a link and enter your password to keep your account active.",
    hintTitle: "A message that feels urgent?",
    hintText: "Pause and check the sender before taking action.",
    choices: [
      "Click the link immediately to save your account.",
      "Ignore the link and verify through the official website or app.",
      "Reply to the email and send your password."
    ],
    answer: 1,
    why: "Scam emails often create urgency to make you act quickly. Never use links in suspicious messages. Visit the official website or app directly to check your account."
  },
  {
    type: "Phishing Link",
    icon: "link",
    story: "You get a text message: \"Your parcel could not be delivered. Pay a ₱50 redelivery fee here: bit.ly/parcel-fee\". You are not sure if you ordered anything.",
    hintTitle: "A short or unknown link?",
    hintText: "Shortened links can hide where they really go.",
    choices: [
      "Click the link and pay, since the fee is small.",
      "Forward the link to your friends to ask if it's real.",
      "Don't click it. Check your orders in the official courier or shopping app."
    ],
    answer: 2,
    why: "A small fee is bait. The real goal is to collect your card or e-wallet details on a fake payment page. Real delivery updates can always be checked in the official app or website, without using the link."
  },
  {
    type: "Online Scam",
    icon: "gift",
    story: "A stranger on social media says you won a brand-new phone in a giveaway you never joined. To claim it, you must pay a shipping fee and send your full name, address, and birthday.",
    hintTitle: "Too good to be true?",
    hintText: "You can't win a contest you never entered.",
    choices: [
      "Pay the shipping fee. It's still a free phone!",
      "Ignore the message, block the account, and report it.",
      "Send your details but don't pay anything yet."
    ],
    answer: 1,
    why: "Fake giveaways trick people into paying fees for prizes that never arrive, and they also collect personal details for identity theft. Blocking and reporting the account protects you and warns the platform."
  },
  {
    type: "Password Security",
    icon: "password",
    story: "Your classmate asks for your school portal password so they can check your grades for you while you are busy.",
    hintTitle: "Someone asking for your password?",
    hintText: "Passwords are personal, even between friends.",
    choices: [
      "Share it, because they are your friend.",
      "Share it now and change it later.",
      "Keep it private and check your grades yourself later."
    ],
    answer: 2,
    why: "Once someone else knows your password, you lose control of your account. It could be misused, shared again, or saved on their device. You are responsible for what happens on your account, so keep your password to yourself."
  },
  {
    type: "Personal Information",
    icon: "idcard",
    story: "A fun online quiz asks: \"What is your mother's maiden name, your first pet's name, and the street you grew up on? Find out your celebrity twin!\"",
    hintTitle: "Why does it need that?",
    hintText: "Fun quizzes can collect answers to security questions.",
    choices: [
      "Answer it. It's just for fun.",
      "Skip it. These are common account security questions.",
      "Answer it, but only share the result with friends."
    ],
    answer: 1,
    why: "These questions are often used to reset passwords. Answering them in a public quiz can give scammers what they need to break into your accounts. Your result being private doesn't matter, because the quiz maker already has your answers."
  },
  {
    type: "Unsafe Website",
    icon: "website",
    story: "While looking for a free movie download, a pop-up appears: \"Your device is infected! Download this cleaner now.\" The browser shows \"Not secure\" next to the website address.",
    hintTitle: "A scary pop-up?",
    hintText: "Fake warnings push you to install harmful apps.",
    choices: [
      "Download the cleaner to fix your device.",
      "Close the tab without downloading anything. Use your own trusted antivirus if you're worried.",
      "Enter your email so the site can send you the cleaner."
    ],
    answer: 1,
    why: "Websites cannot scan your device. Pop-ups that say you are infected are a trick to make you install malware. Closing the tab is safe, and a real antivirus app you already trust can check your device."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const letters = ["A", "B", "C", "D"];

  const scenView = document.getElementById("scenView");
  const finalView = document.getElementById("scenFinalView");
  const titleEl = document.getElementById("scenTitle");
  const storyEl = document.getElementById("scenStory");
  const hintIcon = document.getElementById("hintIcon");
  const hintTitle = document.getElementById("hintTitle");
  const hintText = document.getElementById("hintText");
  const optionsEl = document.getElementById("scenOptions");
  const submitBtn = document.getElementById("submitScenBtn");
  const prevBtn = document.getElementById("prevScenBtn");
  const nextBtn = document.getElementById("nextScenBtn");
  const answerPanel = document.getElementById("answerPanel");
  const feedbackEl = document.getElementById("scenFeedback");
  const whyEl = document.getElementById("scenWhy");
  const counterEl = document.getElementById("scenCounter");

  let current = 0;
  let selected = null;
  // The submitted answer for each scenario (null = not answered yet)
  let answers = scenarios.map(() => null);

  const score = () => answers.filter((a, i) => a === scenarios[i].answer).length;

  /* ---------- Show a scenario ---------- */
  function showScenario() {
    const s = scenarios[current];
    const saved = answers[current];
    selected = saved;

    titleEl.textContent = `SCENARIO ${current + 1} | ${s.type.toUpperCase()}`;
    storyEl.textContent = s.story;
    hintIcon.innerHTML = hintIcons[s.icon];
    hintTitle.textContent = s.hintTitle.toUpperCase();
    hintText.textContent = s.hintText;

    optionsEl.innerHTML = "";
    s.choices.forEach((choice, i) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "option";
      option.setAttribute("role", "radio");
      option.setAttribute("aria-checked", "false");
      option.innerHTML = `<span class="letter">${letters[i]}</span><span class="option-text"></span>`;
      option.querySelector(".option-text").textContent = choice;
      option.addEventListener("click", () => selectOption(i));
      optionsEl.appendChild(option);
    });

    prevBtn.disabled = current === 0;
    nextBtn.innerHTML = current === scenarios.length - 1
      ? 'SEE RESULTS <span aria-hidden="true">&#10142;</span>'
      : 'NEXT SCENARIO <span aria-hidden="true">&#10142;</span>';
    updateCounter();

    if (saved !== null) {
      showResult(); // already answered: show the locked result again
    } else {
      submitBtn.disabled = false;
      answerPanel.className = "panel-light answer-panel";
      feedbackEl.textContent = "Your result will appear here after you submit your answer.";
      whyEl.textContent = "Submit your answer to find out which choice is safest and why.";
    }
  }

  function selectOption(index) {
    if (answers[current] !== null) return; // locked after submitting
    selected = index;
    optionsEl.querySelectorAll(".option").forEach((opt, i) => {
      opt.classList.toggle("selected", i === index);
      opt.setAttribute("aria-checked", String(i === index));
    });
  }

  /* ---------- Submit ---------- */
  submitBtn.addEventListener("click", () => {
    if (answers[current] !== null) return;
    if (selected === null) {
      answerPanel.className = "panel-light answer-panel warn";
      feedbackEl.textContent = "Please choose an answer first.";
      return;
    }
    answers[current] = selected;
    showResult();
    updateCounter();
  });

  /* ---------- Show the result for an answered scenario ---------- */
  function showResult() {
    const s = scenarios[current];
    const choice = answers[current];
    const isSafe = choice === s.answer;

    optionsEl.querySelectorAll(".option").forEach((opt, i) => {
      opt.disabled = true;
      opt.classList.toggle("selected", i === choice);
      opt.setAttribute("aria-checked", String(i === choice));
      if (i === s.answer) opt.classList.add("correct");
      if (i === choice && !isSafe) opt.classList.add("wrong");
    });

    answerPanel.className = `panel-light answer-panel ${isSafe ? "good" : "bad"}`;
    feedbackEl.innerHTML = isSafe
      ? `<strong>Correct! That's the safest choice.</strong><br>You chose ${letters[choice]}.`
      : `<strong>Not quite. That choice could put you at risk.</strong><br>You chose ${letters[choice]}. The safest action is ${letters[s.answer]}.`;
    whyEl.textContent = s.why;
    submitBtn.disabled = true;
  }

  function updateCounter() {
    counterEl.textContent = `Scenario ${current + 1} of ${scenarios.length} · Safe choices: ${score()}`;
  }

  /* ---------- Previous / Next ---------- */
  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showScenario();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (current < scenarios.length - 1) {
      current++;
      showScenario();
      return;
    }
    // Last scenario: results need every scenario answered
    const firstUnanswered = answers.indexOf(null);
    if (firstUnanswered !== -1) {
      current = firstUnanswered;
      showScenario();
      showToast(`Please answer Scenario ${firstUnanswered + 1} first.`);
      return;
    }
    showFinal();
  });

  /* ---------- Final summary ---------- */
  function showFinal() {
    const total = scenarios.length;
    const safe = score();
    scenView.hidden = true;
    finalView.hidden = false;
    nextBtn.hidden = true;

    document.getElementById("scenFinalScore").textContent = safe;
    document.getElementById("scenFinalTotal").textContent = total;
    document.getElementById("scenBadge").textContent = `${safe}/${total}`;
    let message;
    if (safe === total) message = "Excellent! You always chose the safest action.";
    else if (safe >= Math.ceil(total * 0.6)) message = "Nice work! Review the scenarios you missed to sharpen your instincts.";
    else message = "Keep practicing! Read the explanations again, then restart and try once more.";
    document.getElementById("scenFinalMsg").textContent = message;

    answerPanel.className = "panel-light answer-panel";
    feedbackEl.textContent = "You finished all the scenarios.";
    whyEl.textContent = "Remember: pause, check the source, and never share passwords, OTPs, or personal details with strangers.";
    counterEl.textContent = `Finished · Safe choices: ${safe} of ${total}`;
    document.getElementById("restartScenBtn").focus();
  }

  /* ---------- Restart ---------- */
  document.getElementById("restartScenBtn").addEventListener("click", () => {
    answers = scenarios.map(() => null);
    current = 0;
    finalView.hidden = true;
    scenView.hidden = false;
    nextBtn.hidden = false;
    showScenario();
    showToast("Scenarios restarted.");
  });

  showScenario();
});