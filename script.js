let myArray = [];
let dateResult;

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
      destructure[0].toString().padStart(2, "0"),
      destructure[1].toString().padStart(2, "0"),
      destructure[2].toString(),
    ].join("");
    console.log("La date est valide");
    console.log(dateResult);
    isPalindrome();
    return [dateResult];
  }
}

isValidDate("30/10/2002");

// Étape 2

// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

// Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

// isPalindrome("11/02/2011") // true
// isPalindrome("03/04/2001") // false

function isPalindrome() {
  console.log(dateResult.reverse());
}
