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
      destructure[0].toString().padStart(2, "0"),
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
isValidDate("11/12/2011");

function isPalindrome() {
  if (dateResult === dateReverse) {
    console.log("C'est un palindrome");
  } else {
    console.log("Ce n'est pas un palindrome");
  }
}
