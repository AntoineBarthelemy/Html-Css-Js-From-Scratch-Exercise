let verif = true;

window.addEventListener("scroll", () => {
  // Inititalisation
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  // Start
  if (window.scrollY > 10) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
  if (scrollValue > 0.47) {
    imgImprovise.style.setProperty("opacity", "1");
    imgImprovise.style.setProperty("transform", "translateX(0)");
  }
  if (scrollValue > 9.7 / 10 && verif) {
    popup.style.setProperty("opacity", "1");
    popup.style.setProperty("transform", "translateX(0)");
    verif = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.setProperty("opacity", "0");
  popup.style.setProperty("transform", "translateX(400px)");
});

// First part
// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Second part
// Faire apparaitre l'image sde la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Three part
// Bonus : quand on clicke sur la popup elle disparait pour toujours
