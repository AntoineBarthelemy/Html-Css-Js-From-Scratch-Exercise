let Age = 18 - "17";

console.log(Age);

const counterDisplay = document.querySelector("h3");
let counter = 0;
console.log(counterDisplay);
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  document.body.appendChild(bubble);
  const size = Math.random() * 100 + 100 + "px";

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 70 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //   Ternaire if else raccourci
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    console.log(counter);
    counterDisplay.textContent = counter;

    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
setInterval(bubbleMaker, 1000);

function calcul() {
  return 25 + 25;
}
calcul();
