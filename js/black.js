//
//
let typed = new Typed("#typed", {
strings: ["Designer", "Developer"],
  typeSpeed: 70, 
  loop: true,
  loopCount: Infinity,
  backSpeed: 70,
  backDelay: 1000
});
//
//
let el = document.querySelector("#scroller");
let height =
  1700 +
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrolling = document.documentElement.scrollTop;
  el.style.width = ` ${(scrolling / height) * 100}% `;
});
//
//
let statsSection = document.querySelector(".stats");
let boxNumbers = document.querySelectorAll(".box .num ");
function startCount(e) {
  let progGoals = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == progGoals) {
      clearInterval(counter);
    }
  }, (16 + 16 + 16 + 16) / progGoals);
}
let started = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      boxNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});
//
//
