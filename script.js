/* =========================================================
   Digital Safety – Shared Script (used by every page)
   - Navigation (active link, mobile menu, page links)
   - Home page feature cards
   - Toast messages and click ripples
   - Animated network background
   ========================================================= */

/* ---------- Toast message (available to other scripts) ---------- */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- Ripple effect on click (available to other scripts) ---------- */
function addRipple(element, event) {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  const clickX = event && event.clientX ? event.clientX : rect.left + rect.width / 2;
  const clickY = event && event.clientY ? event.clientY : rect.top + rect.height / 2;
  ripple.style.left = `${clickX - rect.left - size / 2}px`;
  ripple.style.top = `${clickY - rect.top - size / 2}px`;
  element.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/* ---------- Make a non-button element work with Enter / Space ---------- */
function makeKeyboardClickable(element) {
  element.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      element.click();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navMenu = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  const currentPage = document.body.dataset.page || "home";

  // Every page of the website
  const pageFiles = {
    home: "index.html",
    awareness: "awareness.html",
    "safety-tips": "safety-tips.html",
    quiz: "quiz.html",
    scenarios: "scenarios.html",
    about: "about.html"
  };

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.addEventListener("click", event => {
    if (!navbar.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  /* ---------- Navigation links ----------
     Links to other pages work normally. Clicking the page you are
     already on just scrolls smoothly back to the top. */
  document.querySelectorAll(".nav-link, .brand").forEach(link => {
    link.addEventListener("click", event => {
      if (link.dataset.page === currentPage) {
        event.preventDefault();
        closeMenu();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  /* ---------- Shrink navbar on scroll ---------- */
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Home page feature cards ---------- */
  document.querySelectorAll(".card[data-page]").forEach(card => {
    card.addEventListener("click", event => {
      addRipple(card, event);
      const target = pageFiles[card.dataset.page];
      if (target) setTimeout(() => { window.location.href = target; }, 250);
    });
    makeKeyboardClickable(card);
  });

  /* ---------- Binary pattern inside the home page shield ---------- */
  const binaryGroup = document.getElementById("binaryGroup");
  if (binaryGroup) {
    const svgNS = "http://www.w3.org/2000/svg";
    for (let row = 0; row < 22; row++) {
      let line = "";
      for (let i = 0; i < 24; i++) line += Math.random() > 0.5 ? "1" : "0";
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", "104");
      text.setAttribute("y", String(64 + row * 13.5));
      text.setAttribute("transform", "skewY(-8) translate(0 30)");
      text.textContent = line;
      binaryGroup.appendChild(text);
    }
  }

  /* ---------- Animated network background ---------- */
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let points = [];
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(90, Math.floor((width * height) / 22000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.6
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const maxDist = 150;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      for (let j = i + 1; j < points.length; j++) {
        const q = points[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(110, 170, 255, ${0.18 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(150, 200, 255, 0.55)";
      ctx.shadowColor = "rgba(120, 190, 255, 0.9)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  draw();
});