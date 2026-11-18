/* =========================================================
   Digital Safety – Safety Tips Page
   FAQ accordion: click a question to open or close its answer.
   Only one answer is open at a time.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  function setOpen(item, open) {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    item.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    // Animate the height of the answer
    answer.style.maxHeight = open ? `${answer.scrollHeight}px` : "0px";
  }

  items.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const willOpen = !item.classList.contains("open");
      items.forEach(other => setOpen(other, false));
      setOpen(item, willOpen);
    });
  });

  // Keep an open answer the right height if the window is resized
  window.addEventListener("resize", () => {
    items.forEach(item => {
      if (item.classList.contains("open")) {
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
});