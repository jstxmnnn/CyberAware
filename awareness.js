/* =========================================================
   Digital Safety – Awareness Page
   Clicking a card opens a pop-up with the full lesson.
   To edit a lesson, change the text in the "topics" list below.
   The order matches the cards on the page.
   ========================================================= */

const topics = [
  {
    title: "What is Cybersecurity?",
    definition: "Cybersecurity is the practice of protecting computers, phones, networks, and the information stored on them from attacks, damage, and people who should not have access.",
    howItWorks: "It works in layers. Strong passwords and two-factor authentication control who can log in. Antivirus and software updates block and fix weaknesses. Encryption scrambles data so only the right person can read it. Most importantly, careful users notice tricks before they fall for them.",
    examples: [
      "Locking your phone with a PIN or fingerprint.",
      "Installing app and system updates when they arrive.",
      "A website using HTTPS to encrypt what you type into it."
    ],
    risks: [
      "Stolen accounts and passwords.",
      "Lost or leaked personal files and photos.",
      "Money stolen through scams or fake payments."
    ],
    tips: [
      "Use strong, unique passwords and turn on 2FA.",
      "Keep your devices and apps updated.",
      "Think before you click, share, or download."
    ]
  },
  {
    title: "Phishing Attacks",
    definition: "Phishing is a trick where scammers pretend to be someone you trust, like a bank, school, delivery service, or friend, to make you give away passwords, OTPs, or money.",
    howItWorks: "The scammer sends an email, text, or chat that looks real. It usually creates urgency (\"Your account will be closed today!\") and includes a link to a fake login page or an attachment. Whatever you type on the fake page goes straight to the scammer.",
    examples: [
      "A text saying your parcel is on hold until you pay a small fee through a link.",
      "An email that looks like it is from your bank asking you to \"verify\" your account.",
      "A message from a friend's hacked account asking you to vote for them using a link."
    ],
    risks: [
      "Your password or OTP is stolen and your account is taken over.",
      "Bank or e-wallet money is drained.",
      "Malware gets installed from an attachment."
    ],
    tips: [
      "Check the sender's real email address or number.",
      "Don't click links in unexpected messages. Open the official app or website yourself.",
      "Never share OTPs. Real companies will not ask for them."
    ]
  },
  {
    title: "Password Security",
    definition: "Password security means creating passwords that are hard to guess and keeping them private, so only you can get into your accounts.",
    howItWorks: "Attackers use programs that try thousands of common passwords, or reuse passwords leaked from other websites. A long, unique password takes far too long to guess. Because it is unique, a leak on one site cannot unlock your other accounts.",
    examples: [
      "Weak: 123456, password, your name plus your birthday.",
      "Strong: a passphrase like Mango!River7-Cloud.",
      "Using a password manager to create and remember passwords."
    ],
    risks: [
      "One leaked password unlocks many accounts when it is reused.",
      "Short or personal passwords are easy to guess.",
      "Sharing a password with others can lead to misuse."
    ],
    tips: [
      "Use at least 12 characters, or a passphrase.",
      "Use a different password for every account.",
      "Turn on two-factor authentication wherever you can."
    ]
  },
  {
    title: "Malware and Services",
    definition: "Malware (malicious software) is any program made to harm a device or steal from its user. Viruses, worms, spyware, and ransomware are all types of malware.",
    howItWorks: "Malware usually gets in when you download something from an untrusted source, open an infected attachment, or click a fake pop-up. Once installed, it may spy on what you type, show unwanted ads, slow your device, or lock your files and demand payment.",
    examples: [
      "A \"free\" cracked game or app that hides spyware.",
      "Ransomware that locks files and asks for payment to unlock them.",
      "A fake \"Your phone is infected!\" pop-up that installs a harmful app."
    ],
    risks: [
      "Stolen passwords and personal information.",
      "Lost or locked files.",
      "A slow, unstable, or unusable device."
    ],
    tips: [
      "Download apps only from official app stores and websites.",
      "Keep antivirus and system updates turned on.",
      "Watch for warning signs: sudden pop-ups, slowness, or apps you didn't install."
    ]
  },
  {
    title: "Online Privacy",
    definition: "Online privacy is your control over what personal information you share on the internet, and over who can see it and use it.",
    howItWorks: "Everything you post, and the details that apps and websites collect, can be saved, shared, or combined to build a picture of you. Privacy settings, careful sharing, and checking app permissions help you decide what stays private.",
    examples: [
      "Setting your social media account so only friends can see your posts.",
      "Turning off location access for apps that don't need it.",
      "Not posting your school ID, address, or travel plans publicly."
    ],
    risks: [
      "Identity theft using your personal details.",
      "Strangers finding your location or routine.",
      "Embarrassing posts that stay online for years."
    ],
    tips: [
      "Review your privacy settings regularly.",
      "Think before posting: would you be OK with anyone seeing this?",
      "Only give apps the permissions they really need."
    ]
  },
  {
    title: "Safe Internet Browsing",
    definition: "Safe browsing means using the internet in ways that avoid fake websites, harmful downloads, and scams.",
    howItWorks: "Scam sites copy real ones and use addresses that look almost right, like \"faceb00k-login.com\". Your browser helps by showing a padlock for encrypted (HTTPS) connections and by warning you about known dangerous sites. You still need to check the address and think before trusting a page.",
    examples: [
      "Typing the website address yourself instead of clicking a link in a message.",
      "Noticing a \"Not secure\" warning before entering a password.",
      "Closing a pop-up that says you won a prize."
    ],
    risks: [
      "Entering passwords on a fake login page.",
      "Downloading malware disguised as a file or update.",
      "Being tricked by fake shopping sites."
    ],
    tips: [
      "Check the web address carefully before logging in.",
      "Remember: the padlock means the connection is encrypted, not that the site is honest.",
      "Avoid entering sensitive details on public Wi-Fi."
    ]
  },
  {
    title: "Two-Factor Authentication",
    definition: "Two-factor authentication (2FA) adds a second check when you log in. Besides your password, you also confirm it's you using something you have, like your phone.",
    howItWorks: "After you enter your password, the website asks for a second proof. This can be a code sent by SMS, a code from an authenticator app, or a tap on a login prompt. Even if someone steals your password, they still can't get in without that second step.",
    examples: [
      "A 6-digit code sent to your phone when you log in.",
      "An authenticator app that shows a new code every 30 seconds.",
      "A \"Was this you?\" prompt on your phone that you must approve."
    ],
    risks: [
      "Without 2FA, a stolen password is enough to take over your account.",
      "Scammers may try to trick you into giving them your 2FA code.",
      "Losing your phone can lock you out if you have no backup codes."
    ],
    tips: [
      "Turn on 2FA for email, social media, and banking accounts first.",
      "Never share your 2FA code or OTP with anyone.",
      "Save your backup codes in a safe place."
    ]
  },
  {
    title: "Why Cybersecurity Matters?",
    definition: "Cybersecurity matters because so much of our lives (school, money, friendships, and personal memories) now lives online. Protecting it protects us.",
    howItWorks: "Most attacks succeed because of a simple human mistake, like clicking a bad link or reusing a password. When people are informed and careful, attacks fail. Being responsible online also protects your family, friends, and classmates, because one hacked account can be used to scam others.",
    examples: [
      "Spotting a scam message and warning your friends about it.",
      "Keeping a family computer updated and protected.",
      "Reporting a fake account that is pretending to be a classmate."
    ],
    risks: [
      "Loss of money, data, and privacy.",
      "Damage to reputation from hacked accounts.",
      "Scams spreading to people you know."
    ],
    tips: [
      "Keep learning about new scams and threats.",
      "Practice safe habits every day, not just once.",
      "Help others: share what you learn about staying safe online."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".info-card");
  const overlay = document.getElementById("topicModal");
  const modalIcon = document.getElementById("modalIcon");
  const modalKicker = document.getElementById("modalKicker");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.getElementById("modalClose");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");

  let currentIndex = 0;
  let lastFocused = null;

  const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;

  function fillModal(index) {
    const topic = topics[index];
    const card = cards[index];
    currentIndex = index;

    // Re-use the card's icon and colors inside the pop-up
    const cardIcon = card.querySelector(".info-icon");
    modalIcon.className = `${cardIcon.className} modal-icon`;
    modalIcon.innerHTML = cardIcon.innerHTML;

    modalKicker.textContent = `Topic ${index + 1} of ${topics.length}`;
    modalTitle.textContent = topic.title;
    modalBody.innerHTML = `
      <section><h3>Definition</h3><p>${topic.definition}</p></section>
      <section><h3>How It Works</h3><p>${topic.howItWorks}</p></section>
      <section><h3>Examples</h3>${list(topic.examples)}</section>
      <section class="risk"><h3>Common Risks</h3>${list(topic.risks)}</section>
      <section class="tip"><h3>Prevention Tips</h3>${list(topic.tips)}</section>`;
    modalBody.scrollTop = 0;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === topics.length - 1;

    cards.forEach((c, i) => c.classList.toggle("selected", i === index));
  }

  function openModal(index) {
    lastFocused = document.activeElement;
    fillModal(index);
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("show"));
    document.body.classList.add("no-scroll");
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
    cards.forEach(c => c.classList.remove("selected"));
    setTimeout(() => { overlay.hidden = true; }, 250);
    if (lastFocused) lastFocused.focus();
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", event => {
      addRipple(card, event);
      openModal(index);
    });
    makeKeyboardClickable(card);
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", () => { if (currentIndex > 0) fillModal(currentIndex - 1); });
  nextBtn.addEventListener("click", () => { if (currentIndex < topics.length - 1) fillModal(currentIndex + 1); });

  // Close when clicking the dark area outside the pop-up
  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeModal();
  });

  // Keyboard: Esc closes, arrow keys change topic, Tab stays inside the pop-up
  document.addEventListener("keydown", event => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight" && !nextBtn.disabled) fillModal(currentIndex + 1);
    if (event.key === "ArrowLeft" && !prevBtn.disabled) fillModal(currentIndex - 1);
    if (event.key === "Tab") {
      const focusable = [closeBtn, prevBtn, nextBtn].filter(b => !b.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
});