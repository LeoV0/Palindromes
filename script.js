// 1. Enoncé

// Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens, comme les mots “radar” ou “kayak”. Le but de cet exercice est de détecter des dates palindromes, date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).

// Contraintes:

//     L’exercice se fera en JS

// Étape 1

// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
