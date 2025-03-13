let myArray = [];
let dateResult;
let dateReverse;

// Rajouter des input + afficher du texte sur la page HTML
const inputDate = document.querySelector("#dateInput");
const buttonValidate = document.querySelector("#btn");
const errorMessage = document.querySelector("#messageErreur");
const palindromeIsCorrect = document.querySelector("#isPalindrome");
const palindromeIsIncorrect = document.querySelector("#isIncorrectPalindrome");

buttonValidate.addEventListener("click", () => {
  errorMessage.innerHTML = "";
  palindromeIsCorrect.innerHTML = "";
  palindromeIsIncorrect.innerHTML = "";
  isValidDate(inputDate.value);
  // console.log(inputDate.value);
});

inputDate.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    errorMessage.innerHTML = "";
    palindromeIsCorrect.innerHTML = "";
    palindromeIsIncorrect.innerHTML = "";
    isValidDate(inputDate.value);
  }
});

function isValidDate(date) {
  myArray.push(date);
  // console.log(myArray);
  const destructure = myArray[0].split("/").map(Number);
  // console.log(destructure);
  if (
    destructure[0] < 1 ||
    destructure[0] > 31 ||
    destructure[1] < 1 ||
    destructure[1] > 12 ||
    destructure[2] < 999 ||
    destructure[2] > 9999
  ) {
    errorMessage.innerHTML = `La date n'est pas valide`;
    myArray = [];
    // console.log("La date n'est pas valide");
    return;
  } else if (destructure[1] % 2 === 1 && destructure[0] === 31) {
    errorMessage.innerHTML = `La date n'est pas valide`;
    // console.log("La date n'est pas valide");
    return;
  } else {
    dateResult = [
      destructure[0].toString().padStart(2, "0"), // Ajout de padStart qui permet de garder le 0 devant chaque chiffre pour le jour et le mois
      destructure[1].toString().padStart(2, "0"),
      destructure[2].toString(),
    ].join("");

    dateReverse = dateResult.split("").reverse().join("");

    // console.log("La date est valide");
    // console.log(` Normal : ${dateResult}`);
    // console.log(` Reverse : ${dateReverse}`);

    isPalindrome();
    return;
  }
}

function isPalindrome() {
  if (dateResult === dateReverse) {
    palindromeIsCorrect.innerHTML = `C'est un palindrome ! Votre date : ${dateResult}, inversée : ${dateReverse}`;
    // console.log("C'est un palindrome");
  } else {
    palindromeIsIncorrect.innerHTML = `Ce n'est pas un palindrome ! Votre date : ${dateResult}, inversée : ${dateReverse}`;
    // console.log("Ce n'est pas un palindrome");
  }
  myArray = [];
}

// Afficher les palindromes dans les années qui suivent
let tableau = [];
let tableauRempli;
let tableauReverse;
let i = 0;

function getNextPalindromes(x) {
  let now = new Date();
  let palindromesFound = 0;

  while (palindromesFound < x) {
    const day = now.getDate();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    tableau = [];
    tableau.push(day);
    tableau.push(month);
    tableau.push(year);
    tableauRempli = [
      tableau[0].toString().padStart(2, "0"),
      tableau[1].toString().padStart(2, "0"),
      tableau[2].toString(),
    ].join("");

    tableauReverse = tableauRempli.split("").reverse().join("");

    if (tableauRempli === tableauReverse) {
      console.log(
        `Palindrome trouvé : ${tableauRempli} (${day}/${month}/${year})`
      );
      palindromesFound++;
    }
    now.setDate(now.getDate() + 1);
  }
  console.log(`Nombre total de palindromes trouvé : ${palindromesFound}`);
}

getNextPalindromes(4);
