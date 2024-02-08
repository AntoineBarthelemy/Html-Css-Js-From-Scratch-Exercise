const buttons = document.querySelectorAll("button");
const discovers = document.querySelectorAll(".same");

console.log(buttons[0], discovers[0]);

buttons[0].addEventListener("click", () => {
  discovers[0].classList.toggle("show");
});
buttons[1].addEventListener("click", () => {
  discovers[1].classList.toggle("show");
});
buttons[2].addEventListener("click", () => {
  discovers[2].classList.toggle("show");
});
