let myArray = [];
let dateResult;
let dateReverse;

function isValidDate(date) {
  myArray.push(date);
  console.log(myArray);
  const destructure = myArray[0].split("/").map(Number);
  console.log(destructure);
  if (
    destructure[0] < 1 ||
    destructure[0] > 31 ||
    destructure[1] < 1 ||
    destructure[1] > 12 ||
    destructure[2] < 999 ||
    destructure[2] > 9999
  ) {
    console.log("La date n'est pas valide");
    return;
  } else if (destructure[1] % 2 === 1 && destructure[0] === 31) {
    console.log("Il n'y a pas de 31 du mois");
    return;
  } else {
    dateResult = [
      destructure[0].toString().padStart(2, "0"), // Ajout de padStart qui permet de garder le 0 devant chaque chiffre pour le jour et le mois
      destructure[1].toString().padStart(2, "0"),
      destructure[2].toString(),
    ].join("");

    dateReverse = dateResult.split("").reverse().join("");

    console.log("La date est valide");
    console.log(` Normal : ${dateResult}`);
    console.log(` Reverse : ${dateReverse}`);

    isPalindrome();
    return;
  }
}
isValidDate("11/10/2011");

function isPalindrome() {
  if (dateResult === dateReverse) {
    console.log("C'est un palindrome");
  } else {
    console.log("Ce n'est pas un palindrome");
  }
}

// Étape 3
// Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

// getNextPalindromes(8)
// 22/02/2022
// 03/02/2030
// 13/02/2031
// 23/02/2032
// 04/02/2040
// 14/02/2041
// 24/02/2042
// 05/02/2050

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

getNextPalindromes(12);
