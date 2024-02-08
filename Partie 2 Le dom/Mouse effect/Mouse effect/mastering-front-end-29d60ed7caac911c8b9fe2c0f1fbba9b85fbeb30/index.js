const stockAll = document.querySelectorAll(".commun");

window.addEventListener("mousemove", (e) => {
  let horizontal = e.pageY + "px";
  let vertical = e.pageX + "px";
  stockAll.forEach((stockAl) => {
    stockAl.style.left = vertical;
    stockAl.style.top = horizontal;
  });
});
