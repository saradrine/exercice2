let NombreAleatoire = Math.floor(Math.random() * 11);
let difficulte = parseInt(
  prompt("Choisissez le niveau de difficulté (nombre de tentatives) :")
);
let tentatives = 0;
const bouton = document.getElementById("btn");
bouton.addEventListener("click", () => {
  let chiffre = document.querySelector("#input");
  let chiffre2 = chiffre.value;
  let chiffreDevine = parseInt(chiffre2, 10);
  if (chiffreDevine == NombreAleatoire) {
    alert(
      "Bravo, vous avez trouvé le chiffre caché en " +
        (tentatives + 1) +
        " tentatives !"
    );
  } else {
    alert(
      "Dommage, le chiffre que vous avez deviné est " +
        (chiffreDevine < NombreAleatoire ? "trop petit" : "trop grand") +
        "."
    );
    tentatives++;
  }
  if (tentatives == difficulte) {
    alert(
      "Vous avez utilisé toutes vos tentatives, le chiffre caché était " +
        NombreAleatoire +
        "."
    );
    bouton.disabled = true;
  }
  chiffre.value = "";
});
