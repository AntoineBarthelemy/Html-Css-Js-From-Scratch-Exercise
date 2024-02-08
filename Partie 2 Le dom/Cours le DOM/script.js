// key press event
const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
let str = "";
let colo = "blue";

function ring() {
  const audio = new Audio();
  audio.src = "Lefa - Ty arrivais pas (Clip officiel).mp3";
  audio.play();
}

document.addEventListener("keypress", (e) => {
  str += e.key;
  key.innerHTML = str;

  if (str === "manger") {
    keyPressContainer.style.background = colo;
    ring();
  }

  if (str.length === 6) {
    str = "";
  }
});

// Scroll Event

const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navigation.style.top = "40px";
  }
});

//Input Event
let pseudo = "";
const input = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");

let storage = "";

input.addEventListener("input", (e) => {
  pseudo = e.target.value;
  if (pseudo === "antoine") ring();
});

select.addEventListener("input", (e) => {
  storage = e.target.value;
  console.log(pseudo, storage);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(cgv.checked);
  if (cgv.checked && pseudo === "Antoine" && storage === "PHP") {
    ring();
  }
});

//  Load Event Permet de faire chargé un script en dernier

// window.addEventListener("load", () => {
//   console.log("document chargé");
// });

// forEach et selection de plusieurs class

const options = document.querySelectorAll(".getElementsByClassName");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

// addEventListener vs onclick
// Onclick est du vieux Javascript, il ne peut adossé
// qu'un seul effet sur l'element

// Le bom, c'est plus haut que le dom, c'est le plus haut des éléments

// open("http://google.com");
// alert("hello");
let yollo = [1, true, "manger"];

const deletes = document.getElementById("suppresion");

deletes.addEventListener("click", () => {
  let stock = "";
  confirm("Voulez-vous vraiment supprimer votre annonce");
  stock = prompt("Entrez votre nom");
  if ((stock = yollo[3])) console.log("wesh");
});

let x = 5;
let y = -10;

if ((x = y))
  console.log(
    "Comme y est un chiffre négatif et qu'il passe sa valeur à x, en Javascript meme un chiffre négatif est true ? Si il est false cela veut dire que le console.log ne s'affichera pas  "
  );
console.log(x);

// Mettre un compt à rebours par rapport au lancement de la page
// setTimeout(() => {}, 1000);

// Execute une action tous les x temps
let interval = setInterval(() => {
  document.body.innerHTML += ` <h3> Yo tout le monde ${frero} trop bien`;
}, 100);

document.body.addEventListener("click", () => {
  clearInterval(interval);
});
// Location

console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);

// location.replace("http://lequipe.fr");
console.log(navigator.userAgent);

// History

// Set property

window.addEventListener("mousemove", (e) => {
  console.log(e);
  navigation.style.setProperty("--l,", e.layerX + "px");
});
