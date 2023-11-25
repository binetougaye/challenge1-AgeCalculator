// Variables
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let an = document.getElementById("an");
let Mois = document.getElementById("Mois");
let jour = document.getElementById("jour");
let btn = document.getElementById("btn");
let dayError = document.getElementById("dayerror");
let monthError = document.getElementById("montherror");
let yearError = document.getElementById("yearerror");
let labelday = document.querySelector(".labelday");
let labelmonth = document.querySelector(".labelmonth");
let labelyear = document.querySelector(".labelyear");
let test = document.getElementById("dayerrorempty");
console.log(labelday);
// Logic
btn.addEventListener("click", function () {
  // Restriction pour la date

  if (day.value < 1 || day.value > 31) {
    dayError.innerHTML = "Veuillez remplir une date entre 1 et 31";
  }
  // Restriction pour le mois

  if (month.value < 1 || month.value > 12) {
    monthError.innerHTML = "Veuillez remplir une date entre 1 et 12";
    month.style.borderColor = "red";
    labelmonth.classList.add("labelerror");
  }
  // if (month.value === 4) {
  //   if (day.value > 30) {
  //     alert("Il y'a 30 jours en Avril!");
  //   }
  // }
  // Restriction date future

  if (year.value > 2023) {
    yearError.innerHTML = "Veuillez remplir une date valide";
    year.style.borderColor = "red";
    labelyear.classList.add("labelerror");
  }
  // Restriction si un champs est vide
  if (day.value === "") {
    dayError.innerHTML = "The field is required";
    day.style.borderColor = "red";
    labelday.classList.add("labelerror");
  }
  if (month.value === "") {
    monthError.innerHTML = "The field is required";
    month.style.borderColor = "red";
    labelmonth.classList.add("labelerror");
  }
  if (year.value === "") {
    yearError.innerHTML = "The field is required";
    year.style.borderColor = "red";
    labelyear.classList.add("labelerror");
  }

  // CALCUL AGE
  // AN DE NAISSANCE USER
  let yearOfUser = new Date(year.value);
  let yearOfBirth = yearOfUser.getFullYear();
  console.log(yearOfBirth);
  // MOIS DE NAISSANCE USER
  let monthOfUser = new Date(month.value);
  let monthOfBirth = monthOfUser.getMonth();
  console.log(monthOfBirth);
  // MOIS ACTUEL
  let moisActuel = new Date();
  let mois = moisActuel.getMonth();
  console.log(mois);
  // MOIS
  let moisUser = monthOfBirth - mois;
  console.log(moisUser);
  // AN ACTUEL
  let anActuel = new Date();
  let année = anActuel.getFullYear();
  console.log(année);
  // NOMBRE DE JOURS
  let joursNaissance = new Date(day.value);
  let Jours = joursNaissance.getDate();
  console.log(Jours);
  let today = new Date();
  let Today = today.getDate();
  console.log(Today);
  let ageEnJour = Today - Jours;
  // AGE USER
  let ageUser = année - yearOfBirth;
  // console.log(ageUser + " years");
  an.innerHTML = ageUser + " years ";
  Mois.innerText = moisUser + " months";
  jour.innerHTML = ageEnJour + " days";
});
//
